import { IObjectKeys } from "./Acquisition";

export interface Transaction extends IObjectKeys{
    id: number;
    acquisition: number;
    transaction_type: string;
    date: string
}