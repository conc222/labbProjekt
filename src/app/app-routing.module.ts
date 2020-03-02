import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { SpelareComponent} from './spelare/spelare.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'spelare', component: SpelareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
