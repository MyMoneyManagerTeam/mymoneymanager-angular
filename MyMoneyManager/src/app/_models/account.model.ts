export interface UserAccount {
  id?: string;
  balance: number;
  availableBalance: number;
}

export interface UserAccountToApi{
  userId:string;
  balance:number;
}
