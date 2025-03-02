import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="..."
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  {/* Your form field */}
                  <Input type="text" {...field} value={field.value} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
