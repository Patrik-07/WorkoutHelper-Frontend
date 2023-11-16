import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BodypartComponent } from './components/bodypart/bodypart.component';
import { HomeComponent } from './components/home/home.component';
import { BodypartLinkComponent } from './components/bodypart-link/bodypart-link.component';

@NgModule({
  declarations: [
    AppComponent,
    BodypartLinkComponent,
    BodypartComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
