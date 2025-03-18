import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";
import { createFlashSale } from "@/services/flashSale";

// import { createBrand } from "@/services/Brand";
type TDiscountModalProps = {
  ids: string[];
  setProductIds: Dispatch<SetStateAction<[] | string[]>>;
};
const DiscountModal = ({ ids, setProductIds }: TDiscountModalProps) => {
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const modifiedData = {
      products: [...ids],
      discountPercentage: data?.discountPercentage,
    };

    try {
      const res = await createFlashSale(modifiedData);
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        setProductIds([]);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={!ids.length} size="sm">
          Add flash sale
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Flash Sale</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="flex items-center gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex-col justify-center mx-auto ">
              <FormField
                control={form.control}
                name="discountPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        className="rounded-sm w-64 "
                        placeholder="Discount Percentage"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full rounded-sm mt-2">
                {isSubmitting ? "Adding...." : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;
