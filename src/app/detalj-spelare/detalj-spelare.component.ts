import { Component, OnInit } from '@angular/core';
import { FotspelareListaService} from '../services/fotspelare-lista.service';
import { Fotspelare} from '../../models/fotspelare';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detalj-spelare',
  templateUrl: './detalj-spelare.component.html',
  styleUrls: ['./detalj-spelare.component.scss']
})
export class DetaljSpelareComponent implements OnInit {
  spelare: Fotspelare;

  constructor(private route: ActivatedRoute, private navigate: Router, private fotspelareService: FotspelareListaService) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.fotspelareService.getSpelareName(name).subscribe(f =>  this.spelare = f);
  }

  deletePlayer() {
    const id = this.route.snapshot.paramMap.get('name');
    this.fotspelareService.deleteSpelare(id)
    .then(
      this.navigate.navigate(['/spelare']),
      err => {
        console.log(err);
      }
    );
  }

}
