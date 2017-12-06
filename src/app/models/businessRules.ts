export class BusinessRules {
    DiscountValue: number;
    DollarHurdle: number;
    DomesticOnly: boolean;
    ForeignOnly: boolean;
    NonFacility: boolean;
    ExcludedCustomerGroups: Array<number>;
    IncludedCustomerGroups: Array<number>;
    RequiredBrand: string;
    BrandDollarHurdle: number;
    BrandRequiredQty: number;
    RequiredItems: boolean;
    RequiredItemQty: number;
    ItemDollarHurdle: number;
    PriceLevel: number;
    FreeGiftEdp: string;
    ForeignFreeGiftEdp: string;
    InternationalMailing: string;
    AllowMultipleGifts: boolean;
    FreeGiftLimit: number;
    QualifyingItemsList: Array<string>;
    ExpirationDisplay: string;
    GiftSellDownLimit: number;
    ForeignGiftSellDownLimit: number;
    TieredDiscount: Array<number>;
    QualifyingKeyword: string;
    KeywordPrefix: string;
    FreeQtyPerQualification: number;
    RequireQtyHurdleOnIndividualSKU: boolean;
    DisplayInCheckout: boolean;
    IsSingleUse: boolean;
}