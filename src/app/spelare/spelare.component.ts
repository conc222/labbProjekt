import { Component, OnInit } from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';

@Component({
  selector: 'app-spelare',
  templateUrl: './spelare.component.html',
  styleUrls: ['./spelare.component.scss']
})

export class SpelareComponent implements OnInit {


  constructor(private spelareService: FotspelareListaService) {
  }

  ngOnInit(): void {

  }

  addSpelare(f: Fotspelare) {

  }

}
