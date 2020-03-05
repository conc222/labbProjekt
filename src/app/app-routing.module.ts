import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { SpelareComponent} from './spelare/spelare.component';
import { ArenaComponent} from './arena/arena.component';
import { PartnersComponent} from './partners/partners.component';
import { OmossComponent} from './omoss/omoss.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { AddSpelareComponent} from './add-spelare/add-spelare.component';
import { DetaljSpelareComponent} from './detalj-spelare/detalj-spelare.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'arena', component: ArenaComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'omOss', component: OmossComponent},
  {path: 'addspelare', component: AddSpelareComponent},
  {path: 'spelare', component: SpelareComponent},
  {path: 'detalj-spelare/:name', component: DetaljSpelareComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
