import { z } from "zod";

export const TRAVEL_BOOKING_APP_NAME = "Travelo";

export const formSchemaAuth = z.object({
  username: z.string().min(1, "Họ và tên không được để trống").trim(),
  email: z.string().email("Email không hợp lệ").min(1, "Email không được để trống").trim(),
  password: z
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .max(32, "Mật khẩu không được dài quá 32 ký tự")
    .trim(),
});

export const NAV_BAR_ROUTES = [
  { key: "home", value: "Trang chủ", route: "/" },
  { key: "tour", value: "Tour", route: "/tour" },
  { key: "travel-guide", value: "Cẩm nang du lịch", route: "/travel-guide" },
  { key: "contact", value: "Liên hệ", route: "/contact" },
];
