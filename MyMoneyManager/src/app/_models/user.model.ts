export class User {
  id?: number;
  mail: string;
  password?: string;
  firstName: string;
  lastName: string;
  country: string;
  area: string;
  address: string;
  zip: number;
  city: string;
  picture: string | ArrayBuffer;
  confirmed?: boolean;
  admin?: boolean;
  token?: string;
}
