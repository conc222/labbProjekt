import { Component, OnInit, ViewChild} from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { FotspelareListaService} from '../services/fotspelare-lista.service';

// tslint:disable-next-line:class-name
interface positions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-spelare',
  templateUrl: './add-spelare.component.html',
  styleUrls: ['./add-spelare.component.scss']
})

export class AddSpelareComponent implements OnInit {

  constructor(private spelareService: FotspelareListaService) { }
  newSpelare: Fotspelare = {
    name: '',
    age: null,
    nummer: null,
    land: '',
    position: null,
    bild: ''
  };
  positioner: positions[] = [
    {value: 'Målvakt', viewValue: 'Målvakt'},
    {value: 'Back', viewValue: 'Back'},
    {value: 'Mittfältare', viewValue: 'Mittfältare'},
    {value: 'Forward', viewValue: 'Forward'}
  ];

  @ViewChild('spelForm') theForm: any;

  ngOnInit() {}

  onSubmit({value, valid}: {value: Fotspelare, valid: boolean}) {
    if (!valid) {
      console.log('Not valid');
    } else {
       this.spelareService.addSpelare(value);
       this.theForm.reset();
       alert(value.name + ' har blivit tillagd!!');
    }
  }
}
