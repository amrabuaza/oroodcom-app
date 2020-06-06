export interface IErrorMessage {
  field: string;
  message: string;
}

export interface IErrorResponse {
  error: IError[];
  status: string;
}

export interface IError {
  messages: IErrorMessage[];
}

/* Authorization */
export interface ILogin {
  access_token: string;
  messages: IErrorMessage[];
}

export interface IRegister {
  access_token: string;
  messages: IErrorMessage[];
}

/* User */

export interface IUser {
  access_token: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IUpdateUserData {
  access_token: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  messages: IErrorMessage[];
}

export interface IUpdateUserPassward {
  name: string;
  message: string;
  code: number;
  status: number;
}

/* Category */

export interface ICategory {
  id: number;
  name: string;
}

export interface ICategoryResponse {
  names: ICategory[];
}

/* Shop */

export interface IShop {
  name: string;
  phone_number: number;
  description: string;
  latitude: string;
  longitude: string;
  open_at: string;
  close_at: string;
  rate: number;
  picture_url: string;
}

/* Item */

export interface IItem {
  id: number;
  name: string;
  price: number;
  old_price: number;
  description: string;
  picture: string;
  shop: IShop;
}

export interface IItemsResponse {
  items: IItem[];
}

export interface IItemName {
  name: string;
}

export interface IItemsNames {
  names: IItemName[];
}

export interface IFilterItems {
  items: IItem[];
  message: IErrorMessage;
}
