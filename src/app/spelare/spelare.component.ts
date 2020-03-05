import { Component, OnInit, ViewChild} from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';
import { HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-spelare',
  templateUrl: './spelare.component.html',
  styleUrls: ['./spelare.component.scss']
})

export class SpelareComponent implements OnInit {
  spelare: Fotspelare[];

  constructor(private spelareService: FotspelareListaService) { }

  ngOnInit() {
    this.spelareService.getSpelare().subscribe(f => {
      this.spelare = f;
    });
  }

}
