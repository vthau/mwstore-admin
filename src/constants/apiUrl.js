export const BASE_URL = "http://localhost:8000/";
export const BASE_URL_API = BASE_URL + "api/admin/";
export const BASE_URL_CSRF = BASE_URL + "sanctum/csrf-cookie";
export const BASE_URL_IMAGE = BASE_URL + "admins/uploads/";

//image
export const AVATAR_IMAGE = BASE_URL_IMAGE + "avatars/";
export const SLIDER_IMAGE = BASE_URL_IMAGE + "sliders/";
export const PRODUCT_IMAGE = BASE_URL_IMAGE + "products/";
export const GALLERY_IMAGE = BASE_URL_IMAGE + "gallerys/";

// brand
export const GET_ALL_BRAND = BASE_URL_API + "brand/all-brand";
export const DELETE_BRAND = BASE_URL_API + "brand/delete-brand";
export const UPDATE_BRAND = BASE_URL_API + "brand/update-brand";

// authentication
export const AUTH_TOKEN = BASE_URL_API + "auth-token";
export const SIGN_IN = BASE_URL_API + "signin";
export const SIGN_IN_SOCIAL = BASE_URL_API + "signin/redirect/";
export const SIGN_IN_SOCIAL_CB = BASE_URL_API + "signin/callback/";
export const SIGN_UP = BASE_URL_API + "signup";
export const SIGN_OUT = BASE_URL_API + "signout";

//user
export const UPDATE_PROFILE = BASE_URL_API + "user/update-profile";
export const UPDATE_AVATAR = BASE_URL_API + "user/update-avatar";
export const UPDATE_PASSWORD = BASE_URL_API + "user/update-password";

//product
export const GET_PRODUCT = BASE_URL_API + "product/";
export const PRODUCT_SEARCH = BASE_URL_API + "product/search";
export const PRODUCT_NEW = BASE_URL_API + "product/new";
export const PRODUCT_FEATHER = BASE_URL_API + "product/feather";
export const PRODUCT_BRAND = BASE_URL_API + "product/brand/";
export const PRODUCT_MORE = BASE_URL_API + "product/more";
export const UPDATE_VIEW = BASE_URL_API + "product/update/";

//slider
export const GET_SLIDER = BASE_URL_API + "slider";

//comment
export const GET_COMMENT = BASE_URL_API + "comment/get";
export const NEW_COMMENT = BASE_URL_API + "comment/new";
export const UPDATE_COMMENT = BASE_URL_API + "comment/update";
export const DELETE_COMMENT = BASE_URL_API + "comment/delete";
export const PROUDCT_COMMENT = BASE_URL_API + "comment/product";

//cart
export const GET_CART = BASE_URL_API + "cart/get";
export const GET_CART_CHECKED = BASE_URL_API + "cart/get-checked";
export const NEW_CART = BASE_URL_API + "cart/new";
export const CHECKED_CART = BASE_URL_API + "cart/checked";
export const DELETE_CART = BASE_URL_API + "cart/delete";

//coupon
export const USE_COUPON = BASE_URL_API + "use-coupon";

//address
export const GET_ADDRESS = BASE_URL_API + "address/get";
export const GET_FEESHIP = BASE_URL_API + "address/feeship";

//order
export const GET_ORDER_ALL = BASE_URL_API + "order";
export const GET_ORDER_DETAIL = BASE_URL_API + "order/detail/";
export const ORDER_CB = BASE_URL_API + "order/callback";
export const NEW_ORDER = BASE_URL_API + "order/new";
export const PRINT_ORDER = BASE_URL + "order/print/";