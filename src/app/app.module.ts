import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';

import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { SportswearComponent } from './sportswear/sportswear.component';
import { CasualwearComponent } from './casualwear/casualwear.component';
import { SareesComponent } from './sarees/sarees.component';
import { KurtisComponent } from './kurtis/kurtis.component';
import { HeelsComponent } from './heels/heels.component';
import { FlatsComponent } from './flats/flats.component';
import { FrocksComponent } from './frocks/frocks.component';
import { JeensComponent } from './jeens/jeens.component';
import { FlipflopsComponent } from './flipflops/flipflops.component';
import { SchoolshoeComponent } from './schoolshoe/schoolshoe.component';
import { SearchPipe } from './search.pipe';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PaymentComponent } from './payment/payment.component';
import { ProcesspayComponent } from './processpay/processpay.component';
import { SuccessOrErrorComponent } from './payment/success-or-error/success-or-error.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    LoginComponent,
    LandingComponent,
    WishlistComponent,
    CartComponent,
    TShirtsComponent,
    ShirtsComponent,
    SportswearComponent,
    CasualwearComponent,
    SareesComponent,
    KurtisComponent,
    HeelsComponent,
    FlatsComponent,
    FrocksComponent,
    JeensComponent,
    FlipflopsComponent,
    SchoolshoeComponent,
    SearchPipe,
    PlaceorderComponent,
    PaymentComponent,
    ProcesspayComponent,
    SuccessOrErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
