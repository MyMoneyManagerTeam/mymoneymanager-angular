export interface User {
  id?: string;
  mail: string;
  password?: string;
  firstName: string;
  lastName: string;
  country: string;
  area: string;
  address: string;
  zip: number;
  city: string;
  picture: string | Blob;
  confirmed?: boolean;
  admin?: boolean;
  token?: string;
}
