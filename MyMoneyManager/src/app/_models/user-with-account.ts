export interface UserWithAccount {
  id?: string;
  mail: string;
  firstName: string;
  lastName: string;
  country: string;
  area: string;
  address: string;
  zip: number;
  city: string;
  confirmed: boolean;
  admin: boolean;
  balance: number;
  amount?: number;
}
export declare type UsersWithAccount = UserWithAccount[];

