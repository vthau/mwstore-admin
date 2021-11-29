import {
  Home,
  Box,
  DollarSign,
  Tag,
  BarChart2,
  Sliders,
  Bell,
  Users,
  Gift,
  BarChart,
  Info,
  BookOpen,
  Hexagon,
  User,
  MessageSquare,
  MessageCircle,
  ShoppingCart,
} from "react-feather";
import { path } from "./path";
import { role } from "./role";

export const MENUITEMS = [
  {
    path: path.HOME,
    title: "Home",
    icon: Home,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "Admin",
    icon: User,
    type: "sub",
    active: false,
    role: role.ADMIN,
    children: [
      { path: path.ADMIN_LIST, title: "Admin List", type: "link" },
      { path: path.ADMIN_NEW, title: "New Admin", type: "link" },
    ],
  },
  {
    title: "Role",
    icon: Hexagon,
    type: "sub",
    active: false,
    role: role.ROLE,
    children: [
      { path: path.ROLE_LIST, title: "Role List", type: "link" },
      { path: path.ROLE_NEW, title: "New Role", type: "link" },
    ],
  },
  {
    title: "Brand",
    icon: Tag,
    type: "sub",
    active: false,
    role: role.BRAND,
    children: [
      {
        path: path.BRAND_LIST,
        title: "Brand List",
        type: "link",
      },
      {
        path: path.BRAND_NEW,
        title: "New Brand",
        type: "link",
      },
    ],
  },
  {
    title: "Product",
    icon: Box,
    type: "sub",
    active: false,
    role: role.PRODUCT,
    children: [
      { path: path.PRODUCT_LIST, title: "Product List", type: "link" },
      { path: path.PRODUCT_NEW, title: "New Product", type: "link" },
      { path: path.PRODUCT_CRAWL, title: "Product Crawl", type: "link" },
    ],
  },
  {
    title: "Slider",
    icon: Sliders,
    type: "sub",
    active: false,
    role: role.SLIDER,
    children: [
      { path: path.SLIDER_LIST, title: "Slider List", type: "link" },
      { path: path.SLIDER_NEW, title: "New Slider", type: "link" },
    ],
  },
  {
    title: "Post",
    icon: BookOpen,
    type: "sub",
    active: false,
    role: role.POST,
    children: [
      { path: path.POST_LIST, title: "Post List", type: "link" },
      { path: path.POST_NEW, title: "Post New", type: "link" },
    ],
  },
  {
    title: "Comment",
    icon: MessageSquare,
    type: "sub",
    active: false,
    role: role.COMMENT,
    children: [
      { path: path.COMMENT_LIST, title: "Comment List", type: "link" },
      { path: path.COMMENT_NOT_CONFIRM, title: "Not Confirm", type: "link" },
    ],
  },
  {
    title: "Order",
    icon: ShoppingCart,
    type: "link",
    active: false,
    role: role.ORDER,
    path: path.ORDER_LIST,
  },
  {
    title: "Feeship",
    icon: DollarSign,
    type: "link",
    active: false,
    role: role.FEESHIP,
    path: path.FEESHIP_LIST,
  },
  {
    title: "Coupon",
    icon: Gift,
    type: "sub",
    active: false,
    role: role.COUPON,
    children: [
      { path: path.COUPON_LIST, title: "Coupon List", type: "link" },
      { path: path.COUPON_NEW, title: "New Coupon", type: "link" },
    ],
  },
  {
    title: "User",
    icon: Users,
    type: "sub",
    active: false,
    role: role.USER,
    children: [{ path: path.USER_LIST, title: "User List", type: "link" }],
  },
  {
    title: "Message",
    icon: MessageCircle,
    type: "link",
    active: false,
    role: role.USER,
    path: path.MESSAGE_LIST,
  },

  {
    title: "Notification",
    icon: Bell,
    type: "link",
    active: false,
    role: role.NOTIFICATION,
    path: path.NOTIFICATION,
  },
  {
    path: path.PROFILE,
    title: "Profile",
    icon: Info,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "Statistic",
    path: path.STATISTIC,
    icon: BarChart2,
    type: "link",
    role: role.STATISTIC,
    active: false,
  },
  {
    title: "Visitor",
    path: path.VISITOR,
    icon: BarChart,
    type: "link",
    role: role.VISITOR,
    active: false,
  },
];
