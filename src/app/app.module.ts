import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
// import { HomeComponent } from '@src/app/home/home.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
     NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
