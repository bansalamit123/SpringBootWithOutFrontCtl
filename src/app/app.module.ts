import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';
import{ HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NavbarComponent,
    SignupComponent,
    UserComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,     
    FormsModule,
    HttpClientModule
    

    
  ],
  providers: [
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
