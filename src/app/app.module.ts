import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpelareComponent } from './spelare/spelare.component';
import { DetaljSpelareComponent } from './detalj-spelare/detalj-spelare.component';
import { OmossComponent } from './omoss/omoss.component';
import { ArenaComponent } from './arena/arena.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpelareComponent,
    DetaljSpelareComponent,
    OmossComponent,
    ArenaComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
