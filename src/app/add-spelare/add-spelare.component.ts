import { Component, OnInit, ViewChild} from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';
import { HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-spelare',
  templateUrl: './add-spelare.component.html',
  styleUrls: ['./add-spelare.component.scss']
})

export class AddSpelareComponent implements OnInit {
  spelare: Fotspelare[];
  newSpelare: Fotspelare = {
    name: '',
    age: null,
    personnr: null,
    land: '',
    position: null,
    bild: ''
  };
  @ViewChild('spelForm') theForm: any;

  constructor(private spelareService: FotspelareListaService) { }

  ngOnInit() {
    this.spelareService.getSpelare().subscribe(f => {
      this.spelare = f;
    });
  }

  onSubmit({value, valid}: {value: Fotspelare, valid: boolean}) {
    if (!valid) {
      console.log('Not valid');
    } else {
       this.spelareService.addSpelare(value)
       this.theForm.reset();
    }
  }

}
