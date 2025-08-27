import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contacts", component: ContactsComponent },
  {path: "shop", component: ShopComponent},
  { path: 'single/:id', component: ShopSingleComponent },
  { path: "login", component: LoginComponent },
  {path: "signup", component: SignupComponent},
  { path: "**", component: ErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

    // children: [
    //   { path: 'single/:id', component: ShopSingleComponent },
    //   { path: 'review', component: ReviewsComponent }
    // ]
