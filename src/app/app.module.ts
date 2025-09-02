import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './dataSharing/parent/parent.component';
import { ChildComponent } from './dataSharing/child/child.component';
import { SenderComponent } from './dataSharing/sender/sender.component';
import { ReciverComponent } from './dataSharing/reciver/reciver.component';
import { ExampleComponent } from './directives/example/example.component';
import { HiglightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ShopComponent,
    ShopSingleComponent,
    ErrorComponent,
    NavbarComponent,
    ReviewsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserAddEditComponent,
    UserListComponent,
    ParentComponent,
    ChildComponent,
    SenderComponent,
    ReciverComponent,
    ExampleComponent,
    HiglightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
