import { BusinessRules } from './businessRules';
import { PromotionType } from "./promotionType";
import { DiscountCode } from './discountCode';

export class Promotion {
    PromotionID: string;
    Description: string;
    DiscountCode: DiscountCode;
    Type: PromotionType;
    CurrentCount: number = 0;
    MaxCount: number;
    DateStart: string;
    DateEnd: string;
    Enabled: boolean;
    DisplayName: string;
    WebDescription: string;
    Category: number;
    BusinessRules: BusinessRules;
}