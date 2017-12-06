import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PromotionType } from "../models/promotionType";
import { BusinessRules } from "../models/businessRules";
import { DiscountCode } from '../models/discountCode';
import { BaseCode } from '../models/baseCode';
import { BaseCodeType } from '../models/baseCodeType';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const promotions = [
      {
        PromotionID: '1403563955591136291',
        Description: 'test promotion 1',
        DiscountCode: new DiscountCode(
          new BaseCode(
            'K', 
            '15 dollar discount',
            BaseCodeType.Dollar, 
            5, 
            new Date(2015, 1, 15),
            new Date(2015, 2, 15)
          ),
          0,
          new Date(2015, 1, 15),
          new Date(2015, 2, 15)
        ),
        Type: PromotionType.DollarsOff,
        CurrentCount: 75,
        MaxCount: 0,
        DateStart: '',
        DateEnd: '',
        Enabled: true,
        DisplayName: '',
        WebDescription: '',
        Category: 0,
        BusinessRules: new BusinessRules()
      },
      {
        PromotionID: '1404689955591136291',
        Description: 'test promotion 2',
        DiscountCode: new DiscountCode(
          new BaseCode(
            'S',
            '25 percent discount',
            BaseCodeType.Percentage, 
            5, 
            new Date(2015, 3, 15),
            new Date(2015, 4, 15)
          ),
          0,
          new Date(2015, 3, 15),
          new Date(2015, 4, 15)
        ),
        Type: PromotionType.PercentOff,
        CurrentCount: 1,
        MaxCount: 0,
        DateStart: '',
        DateEnd: '',
        Enabled: true,
        DisplayName: '',
        WebDescription: '',
        Category: 0,
        BusinessRules: new BusinessRules()
      },
      {
        PromotionID: '1403563955946336291',
        Description: 'test promotion 3',
        DiscountCode: new DiscountCode(
          new BaseCode(
            'W', 
            '5 dollar discount',
            BaseCodeType.Dollar, 
            5, 
            new Date(2015, 5, 15), 
            new Date(2015, 6, 15)
          ),
          0,
          new Date(2015, 5, 15),
          new Date(2015, 6, 15)
        ),
        Type: PromotionType.DollarsOff,
        CurrentCount: 5,
        MaxCount: 0,
        DateStart: '',
        DateEnd: '',
        Enabled: true,
        DisplayName: '',
        WebDescription: '',
        Category: 0,
        BusinessRules: new BusinessRules()
      }
    ];

    const baseCodes = [
      {
        ID: 'W',
        Description: '5 dollar discount',
        Type: BaseCodeType.Dollar,
        Amount: 5,
        StartDate: new Date(2015, 5, 15),
        ExpirationDate: new Date(2015, 6, 15)
      },
      {
        ID: 'S',
        Description: '25 percent discount',
        Type: BaseCodeType.Percentage,
        Amount: 25,
        StartDate: new Date(2015, 3, 15),
        ExpirationDate: new Date(2015, 4, 15)
      },
      {
        ID: 'K',
        Description: '15 dollar discount',
        Type: BaseCodeType.Dollar,
        Amount: 15,
        StartDate: new Date(2015, 5, 15),
        ExpirationDate: new Date(2015, 6, 15)
      }
    ];
    
    return {promotions, baseCodes};
  }
}