"use client";
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createCategory } from "@/services/category";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateCategoryModal = () => {
  // const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  // const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  // const form = useForm();
  // const {
  //   formState: { isSubmitting },
  // } = form;

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("icon", imageFiles[0] as File);

      const res = await createCategory(formData);
      console.log(res);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  //

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   console.log(data);
  //   try {
  //     const formData = new FormData();
  //     formData.append("data", JSON.stringify(data));
  //     formData.append("icon", imageFiles[0] as File);

  //     const res = await createCategory(formData);
  //     console.log(res);
  //     if (res?.success) {
  //       toast.success(res?.message);
  //     } else {
  //       toast.error(res?.message);
  //     }
  //   } catch (error: any) {
  //     console.error(error);
  //   }
  // };

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   console.log(data);
  //   try {
  //     const formData = new FormData();
  //     formData.append("data", JSON.stringify(data));
  //     formData.append("icon", imageFiles[0] as File);

  //     const res = await createCategory(formData);
  //     console.log(res);

  //     if (res?.success) {
  //       toast.success(res?.message);
  //     } else {
  //       toast.error(res?.message);
  //     }
  //   } catch (err: any) {
  //     console.error(err);
  //   }
  // };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Category modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>create product category</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    {/* Your form field */}
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 items-center">
              <div className="col-span-4 md:col-span-3"> */}
            <div className="flex items-center justify-between">
              <div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-36 w-72"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <NMImageUploader
                          imageFiles={imageFiles}
                          setImageFiles={setImageFiles}
                        /> */}

              {imagePreview.length > 0 ? (
                <ImagePreviewer
                  setImageFiles={setImageFiles}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                  className="mt-8"
                />
              ) : (
                <div className="mt-8">
                  <NMImageUploader
                    setImageFiles={setImageFiles}
                    setImagePreview={setImagePreview}
                    label="Upload Icon"
                  />
                </div>
              )}
            </div>
            <Button type="submit" className="mt-5 w-full">
              {isSubmitting ? "Creating...." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;
