import { BaseCode } from "./baseCode";

export class DiscountCode {
    BaseCode: BaseCode;
    DollarHurdle: number;
    StartDate: Date;
    ExpirationDate: Date;

    constructor(baseCode: BaseCode, dollarHurdle: number, startDate: Date, expirationDate: Date) {
        this.BaseCode = baseCode;
        this.DollarHurdle = dollarHurdle;
        this.StartDate = startDate;
        this.ExpirationDate = expirationDate;
    }
}