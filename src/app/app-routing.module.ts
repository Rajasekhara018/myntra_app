import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CasualwearComponent } from './casualwear/casualwear.component';
import { FlatsComponent } from './flats/flats.component';
import { FlipflopsComponent } from './flipflops/flipflops.component';
import { FrocksComponent } from './frocks/frocks.component';
import { HeaderComponent } from './header/header.component';
import { HeelsComponent } from './heels/heels.component';
import { JeensComponent } from './jeens/jeens.component';
import { KurtisComponent } from './kurtis/kurtis.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ProcesspayComponent } from './processpay/processpay.component';
import { SareesComponent } from './sarees/sarees.component';
import { SchoolshoeComponent } from './schoolshoe/schoolshoe.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { SportswearComponent } from './sportswear/sportswear.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  // {path:'',component:LandingComponent},
{path:'header',component:HeaderComponent},
{path:'landing',component:LandingComponent},
{path:'wishlist',component:WishlistComponent},
{path:'cart',component:CartComponent},
{path:'login',component:LoginComponent},
{path:'tshirts',component:TShirtsComponent},
{path:'shirts',component:ShirtsComponent},
{path:'sportswear',component:SportswearComponent},
{path:'casualwear',component:CasualwearComponent},
{path:'sarees',component:SareesComponent},
{path:'kurtis',component:KurtisComponent},
{path:'flats',component:FlatsComponent},
{path:'heels',component:HeelsComponent},
{path:'frocks',component:FrocksComponent},
{path:'jeens',component:JeensComponent},
{path:'flipflops',component:FlipflopsComponent},
{path:'schoolshoe',component:SchoolshoeComponent},
{path:'placeoredr',component:PlaceorderComponent},
{path:'payment',component:PaymentComponent},
{path:'processpay',component:ProcesspayComponent},

{ path: '**', redirectTo: 'landing', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
