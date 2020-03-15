import { Component, OnInit, ViewChild} from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';
import { HttpClient} from '@angular/common/http';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spelare',
  templateUrl: './spelare.component.html',
  styleUrls: ['./spelare.component.scss']
})

export class SpelareComponent implements OnInit {
  spelare: Array<any>;

  constructor(private spelareService: FotspelareListaService,  private route: Router) { }

  ngOnInit() {
    this.spelareService.getSpelare().subscribe(result => {
      this.spelare = result;
    });
  }

  visaDetaljSpelare(spelare) {
    this.route.navigate(['/detalj-spelare/' + spelare.payload.doc.id]);
  }
}
