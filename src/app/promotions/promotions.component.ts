import { Component, OnInit } from '@angular/core';
import { Promotion } from '../models/promotion';
import { PromotionService } from "../services/promotion.service";

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})

export class PromotionsComponent implements OnInit {
  promotions: Promotion[];
  selectedPromotion: Promotion;

  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
    this.getPromotions();
  }

  getPromotions(): void {
    this.promotionService.getPromotions()
      .subscribe(promotions => this.promotions = promotions);
  }

  newPromotion(): void {
    this.selectedPromotion = new Promotion();
  }

  onSelect(promotion: Promotion): void {
    this.selectedPromotion = promotion;
  }
}
