import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Promotion } from "../models/promotion";
import { PromotionType } from "../models/promotionType";
import { PromotionService } from "../services/promotion.service";
import { BaseCodeService } from "../services/base-code.service";
import { BaseCode } from '../models/baseCode';
import { EnumParser } from '../services/enum-parser';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.scss']
})

export class PromotionDetailComponent implements OnInit {
  @Input() promotion: Promotion;
  baseCodes: BaseCode[];
  promoForm: FormGroup;
  promotionTypes: any[];

  constructor(private promotionService: PromotionService, private baseCodeService: BaseCodeService, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.getBaseCodes();
    if(this.promotion) {
      this.promotionTypes = EnumParser.getNamesAndValues(PromotionType);
      this.buildForm();
    }
  }

  ngOnChanges() {
    if(this.promotion) {
      this.promotionTypes = EnumParser.getNamesAndValues(PromotionType);
      this.buildForm();
    }
  }

  save(): void {
    this.promotionService.savePromotion(this.promotion)
      .subscribe();
  }

  getBaseCodes(): void {
    this.baseCodeService.getBaseCodes()
    .subscribe(baseCodes => this.baseCodes = baseCodes);
  }

  buildForm(): void {
    this.promoForm = this.fb.group({
      'Description': [this.promotion.Description, Validators.required],
      'Type': [this.promotion.Type, Validators.required],
      'CurrentCount': [{value: this.promotion.CurrentCount, disabled: true}],
      'MaxCount': [this.promotion.MaxCount],
      'DateStart': [this.promotion.DateStart, Validators.required],
      'DateEnd': [this.promotion.DateEnd, Validators.required],
      'Enabled': [this.promotion.Enabled],
      'DisplayName': [this.promotion.DisplayName, Validators.required],
      'WebDescription': [this.promotion.WebDescription, Validators.required],
      'Category': [this.promotion.Category, Validators.required]
    });
  }

}
