export interface Transaction {
  id?: string;
  emitterId: string;
  receiverId: string;
  amount: number;
  transactionDate: Date;
  description: string;
  emitterName: string;
  receiverName: number;
}
export declare type Transactions = Transaction[];
export interface TransactionFromAPI {
  totalCount: number;
  userTransactions: Transactions;
}
