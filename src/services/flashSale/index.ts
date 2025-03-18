"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// export const createFlashSale = async (data: any): Promise<any> => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
//       method: "POST",
//       headers: {
//         Authorization: (await cookies()).get("accessToken")!.value,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     revalidateTag("Product");
//     return res.json;
//   } catch (err: any) {
//     return Error(err);
//   }
// };
// add Flash Sale

export const createFlashSale = async (productData: any): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    revalidateTag("Product");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
