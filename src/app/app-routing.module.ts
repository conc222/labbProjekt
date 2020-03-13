import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArenaComponent} from './arena/arena.component';
import { PartnersComponent} from './partners/partners.component';
import { OmossComponent} from './omoss/omoss.component';
import { HomeComponent} from './home/home.component';
import { SpelareComponent} from './spelare/spelare.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { AddSpelareComponent} from './add-spelare/add-spelare.component';
import { DetaljSpelareComponent} from './detalj-spelare/detalj-spelare.component';
import {LoginComponent} from './login/login.component';
import {AuthguardService} from './services/AuthGuard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'arena', component: ArenaComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'omOss', component: OmossComponent},
  {path: 'addspelare', component: AddSpelareComponent, canActivate: [AuthguardService]},
  {path: 'spelare', component: SpelareComponent},
  {path: 'detalj-spelare/:name', component: DetaljSpelareComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
