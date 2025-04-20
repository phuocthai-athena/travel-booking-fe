import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchemaAuth } from "@/lib/constants";
import FormAuthActions from "@/components/client/FormAuthActions";
import FormAuthHeader from "@/components/client/FormAuthHeader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchemaAuth),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="font-inter flex items-center justify-center">
      <div className="bg-dove-gray-0 flex w-full max-w-md flex-col gap-8 rounded p-8 shadow-lg">
        <FormAuthHeader title="Đăng nhập" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="text-burnt-sienna-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail
                        className="text-midnight-blue-950 absolute top-1/2 left-3 -translate-y-1/2 transform"
                        size={20}
                      />
                      <Input placeholder="Nhập email" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mật khẩu */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Mật khẩu <span className="text-burnt-sienna-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock
                        className="text-midnight-blue-950 absolute top-1/2 left-3 -translate-y-1/2 transform"
                        size={20}
                      />
                      <Input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nút Đăng nhập */}
            <FormAuthActions
              route="/register"
              btnPrimary="Đăng nhập"
              btnSecondary="Đăng ký"
              questionTitle="Chưa có tài khoản?"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
