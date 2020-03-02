import { Component, OnInit } from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';

@Component({
  selector: 'app-spelare',
  templateUrl: './spelare.component.html',
  styleUrls: ['./spelare.component.scss']
})
export class SpelareComponent implements OnInit {
  name = 'Lionel Messi';
  public messi: Fotspelare;

  constructor() {
    this.messi = new Fotspelare();
    this.messi.name = 'Lionel Messi';
    this.messi.nummer = 10;
    this.messi.age = 33;
    this.messi.land = 'Argentina';
    this.messi.personnr = 1;
    this.messi.position = 'Forward';

  }

  ngOnInit(): void {
  }

  sayName() {
    console.log('Hello from' + this.name);
  }

  showLand() {
    return 'Argentina';
  }
}
