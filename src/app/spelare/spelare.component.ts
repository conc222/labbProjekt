import { Component, OnInit } from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';

@Component({
  selector: 'app-spelare',
  templateUrl: './spelare.component.html',
  styleUrls: ['./spelare.component.scss']
})
constructor(private _name?: string, private _age?: number, private _personnr?: number, private _land?: string, private _position?: number) {}

export class SpelareComponent implements OnInit {
  spelare: Fotspelare[] = {
    name = '',
    age = null,

  }

  constructor(private spelareService: FotspelareListaService) {


  }

  ngOnInit(): void {
    this.spelare = this.spelareService.getSpelare();
  }

}
