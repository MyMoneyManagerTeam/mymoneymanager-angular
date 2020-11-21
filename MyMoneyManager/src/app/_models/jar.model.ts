export interface Jar {
  id?: string;
  owner: string;
  description: string;
  name: string;
  max: number;
  balance: number;
}
export declare type Jars = Jar[];
