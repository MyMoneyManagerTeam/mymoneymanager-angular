export class User {
  id: number;
  mail: string;
  password: string;
  firstName: string;
  lastName: string;
  account: string;
  picture: string | ArrayBuffer;
  token?: string;
}
