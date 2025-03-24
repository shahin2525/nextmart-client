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

export const getAllProduct = async (page?: string, limit?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?limit=${limit}&page=${page}`,
      {
        next: { tags: ["Product"] },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteProduct = async (id: string): Promise<any> => {
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
    // console.log(res.json);
    revalidateTag("Product");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get single product
export const getSingleProduct = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`,
      {
        next: {
          tags: ["Product"],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update product
// export const updateProduct = async (data: FormData, id: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`,
//       {
//         method: "PATCH",
//         headers: {
//           Authorization: (await cookies()).get("accessToken")!.value,
//         },
//         body: data,
//       }
//     );
//     revalidateTag("Product");
//     return res.json();
//   } catch (err: any) {
//     return Error(err);
//   }
// };

//

export const updateProduct = async (
  productData: FormData,
  productId: string
): Promise<any> => {
  console.log(productId);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "PATCH",
        body: productData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("Product");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
