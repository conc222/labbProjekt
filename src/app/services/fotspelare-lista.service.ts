import { Injectable } from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';

@Injectable({
  providedIn: 'root'
})
export class FotspelareListaService {
  spelare: Fotspelare[];

  constructor() {
    this.spelare = [
      new Fotspelare('Lionel', 35, 1, 'Argentina', 10)
    ];
  }
  getSpelare(): Fotspelare[] {
    return this.spelare;
  }
  addSpelare(f: Fotspelare) {
    this.spelare.push(f);
  }
}
