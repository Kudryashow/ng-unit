import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { PopUpService } from "./services/pop-up.service";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor(
      private popup: PopUpService
  ) {

  }

  ngOnInit() {
    this.popup.open(SignInComponent);
  }
}
