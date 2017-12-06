import { BaseCodeType } from "./baseCodeType";

export class BaseCode {
    ID: string;
    Description: string;
    Type: BaseCodeType;
    Amount: number;
    StartDate: Date;
    ExpirationDate: Date;

    constructor(id: string, description: string, type: BaseCodeType, amount: number, startDate: Date, expirationDate: Date) {
        this.ID = id;
        this.Description = description;
        this.Type = type;
        this.Amount = amount;
        this.StartDate = startDate;
        this.ExpirationDate = expirationDate;
    }
}