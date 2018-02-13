import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

export const firebaseConfig = {
  apiKey: "AIzaSyB_ONuguXjB0IYkqowkUzJYZCjWt0rcEZo",
  authDomain: "http://localhost:4200",
  databaseURL: "https://twofactorauthjs.firebaseio.com/",
  storageBucket: "gs://twofactorauthjs.appspot.com",
  messagingSenderID: "197504538508"
}

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatButtonModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
