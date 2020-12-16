export interface Transaction {
  id?: string;
  emitterId: string;
  receiverId: string;
  amount: number;
  transactionDate: number;
  description: string;
  emitterName: string;
  receiverName: string;
}
export declare type Transactions = Transaction[];
export interface TransactionFromAPI {
  totalCount: number;
  userTransactions: Transactions;
}
