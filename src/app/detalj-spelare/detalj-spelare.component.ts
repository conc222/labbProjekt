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

  constructor(private route: ActivatedRoute, private router: Router, private fotspelareService: FotspelareListaService) { }
  spelare: Fotspelare = {
    name: '',
    age: null,
    nummer: null,
    land: '',
    position: null,
    bild: ''
  };
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name');
    this.fotspelareService.getSpelareName(id).subscribe(f =>  this.spelare = f);
  }

  deletePlayer() {
    const id = this.route.snapshot.paramMap.get('name');
    this.fotspelareService.deleteSpelare(id);
    this.router.navigate(['/spelare']);
  }
}
