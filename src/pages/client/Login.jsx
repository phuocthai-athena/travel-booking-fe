import { login } from "@/redux/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formSchemaAuth } from "@/lib/constants";
import { cn } from "@/lib/utils";
import FormAuthActions from "@/components/client/form-auth-actions";
import FormAuthHeader from "@/components/client/form-auth-header";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchemaAuth.omit({ username: true })),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const { isValid, isSubmitting, errors } = form.formState;

  const onSubmit = async (data) => {
    const result = await dispatch(login(data));
    if (!result.error) {
      navigate("/", { replace: true });
    }
    form.reset();
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
                      <Input
                        placeholder="Nhập email"
                        className={cn(
                          "pl-10",
                          !!errors[field.name] &&
                            "border-red-500 hover:border-red-500 focus:border-red-500 focus-visible:border-red-500",
                        )}
                        {...field}
                      />
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
                        className={cn(
                          "pl-10",
                          !!errors[field.name] &&
                            "border-red-500 hover:border-red-500 focus:border-red-500 focus-visible:border-red-500",
                        )}
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
              disabled={isSubmitting || !isValid}
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
