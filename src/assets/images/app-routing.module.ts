import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArenaComponent} from '../../app/arena/arena.component';
import { PartnersComponent} from '../../app/partners/partners.component';
import { OmossComponent} from '../../app/omoss/omoss.component';
import { HomeComponent} from '../../app/home/home.component';
import { SpelareComponent} from '../../app/spelare/spelare.component';
import { NotfoundComponent} from '../../app/notfound/notfound.component';
import { AddSpelareComponent} from '../../app/add-spelare/add-spelare.component';
import { DetaljSpelareComponent} from '../../app/detalj-spelare/detalj-spelare.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'arena', component: ArenaComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'omOss', component: OmossComponent},
  {path: 'addspelare', component: AddSpelareComponent},
  {path: 'spelare', component: SpelareComponent},
  {path: 'detalj-spelare/:name', component: DetaljSpelareComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
