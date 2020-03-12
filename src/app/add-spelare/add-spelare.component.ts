import { Component, OnInit, ViewChild} from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';

@Component({
  selector: 'app-add-spelare',
  templateUrl: './add-spelare.component.html',
  styleUrls: ['./add-spelare.component.scss']
})

export class AddSpelareComponent implements OnInit {

  constructor(private spelareService: FotspelareListaService) { }

  spelare: Fotspelare[];
  newSpelare: Fotspelare = {
    name: '',
    age: null,
    nummer: null,
    land: '',
    position: null,
    bild: ''
  };

  @ViewChild('spelForm') theForm: any;

  controlBild(varede: Fotspelare) {
    varede.bild.includes('gyazo' && '.png' || '.jpg' || '.jpeg');
  }

  ngOnInit() {
    this.spelareService.getSpelare().subscribe(f => {
      this.spelare = f;
    });
  }

  onSubmit({value, valid}: {value: Fotspelare, valid: boolean}) {
    if (!valid) {
      console.log('Not valid');
    } else {
       this.spelareService.addSpelare(value);
       this.theForm.reset();
       alert(value.name + ' spelare tillagd!!');
    }
  }
}
