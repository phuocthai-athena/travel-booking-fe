import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import { TRAVEL_BOOKING_APP_NAME } from "@/lib/constants";
import Logo from "@/components/client/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  fullName: z.string().min(1, "Họ và tên không được để trống").trim(),
  email: z.string().email("Email không hợp lệ").min(1, "Email không được để trống").trim(),
  password: z
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .max(32, "Mật khẩu không được dài quá 32 ký tự")
    .regex(/[a-z]/, "Mật khẩu phải chứa ít nhất một chữ cái thường")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái hoa")
    .regex(/[^a-zA-Z0-9]/, "Mật khẩu phải chứa ít nhất một ký tự đặc biệt")
    .trim(),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
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
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-midnight-blue-950 text-center text-2xl leading-[140%] font-bold">
            Đăng ký
          </h2>
          <p className="text-dove-dove-graytext-midnight-blue-950 text-center text-sm leading-[140%] font-normal">
            Cùng {TRAVEL_BOOKING_APP_NAME} đồng hành với bạn trong các chuyến đi.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Họ và tên */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Họ và tên <span className="text-burnt-sienna-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User
                        className="text-midnight-blue-950 absolute top-1/2 left-3 -translate-y-1/2 transform"
                        size={20}
                      />
                      <Input placeholder="Nhập họ và tên" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            {/* Nút Đăng ký */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3">
              <Button type="submit" className="">
                Đăng ký
              </Button>
              <p className="text-dove-gray-400 text-center text-sm">
                Đã có tài khoản?{" "}
                <Button asChild variant="link" className="ml-2 p-0">
                  <Link to="/login">Đăng nhập</Link>
                </Button>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
