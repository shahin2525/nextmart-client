"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createProduct = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("Product");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllProduct = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      next: { tags: ["Product"] },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteBrand = async (id: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    console.log(res.json);
    revalidateTag("Product");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
