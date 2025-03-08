"use server";

import { cookies } from "next/headers";

export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/category", {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    console.log("from server", res);
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// "use server";
// import { cookies } from "next/headers";

// export const createCategory = async (data: FormData) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
//       method: "POST",
//       headers: {
//         Authorization: (await cookies()).get("accessToken")!.value,
//       },
//       body: data,
//     });
//     return res.json();
//   } catch (err: any) {
//     console.error(err);
//   }
// };
