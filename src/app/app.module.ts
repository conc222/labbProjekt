import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from '../assets/images/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpelareComponent } from './spelare/spelare.component';
import { DetaljSpelareComponent } from './detalj-spelare/detalj-spelare.component';
import { OmossComponent } from './omoss/omoss.component';
import { ArenaComponent } from './arena/arena.component';
import { PartnersComponent } from './partners/partners.component';
import {FotspelareListaService} from './services/fotspelare-lista.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddSpelareComponent } from './add-spelare/add-spelare.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpelareComponent,
    DetaljSpelareComponent,
    OmossComponent,
    ArenaComponent,
    PartnersComponent,
    NotfoundComponent,
    AddSpelareComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [FotspelareListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
