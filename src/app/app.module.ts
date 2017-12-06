import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { AppComponent } from './app.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { PromotionService } from "./services/promotion.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { BaseCodeService } from "./services/base-code.service";


@NgModule({
  declarations: [
    AppComponent,
    PromotionsComponent,
    PromotionDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PromotionService, MessageService, BaseCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
