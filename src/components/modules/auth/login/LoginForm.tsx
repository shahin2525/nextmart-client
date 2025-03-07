"use client";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";
import { loginSchema } from "./loginValidation";
import { loginUser, recaptchaTokenVerification } from "@/services/auth";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  const {
    formState: { isSubmitting },
  } = form;
  const [recaptcha, setRecaptcha] = useState(false);
  const handleRecaptcha = async (data: string | null) => {
    try {
      const res = await recaptchaTokenVerification(data!);
      if (res?.success) {
        setRecaptcha(true);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    try {
      const res = await loginUser(data);
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/profile");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <div className="max-w-md flex-grow rounded-xl border-gray-400 border-2 p-5 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  {/* Your form field */}
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  {/* Your form field */}
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full mt-5">
            <ReCAPTCHA
              className="mx-auto"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={handleRecaptcha}
            />
          </div>
          <Button
            disabled={recaptcha ? false : true}
            className="my-2 w-full"
            type="submit"
          >
            {isSubmitting ? "Logging..." : "Login"}
          </Button>
        </form>
        <p className="text-center">
          do not have an account ?{" "}
          <Link className="text-green-400" href="/register">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
