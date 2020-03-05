import { Injectable } from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { Observable} from 'rxjs';
import { of } from 'rxjs';

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
  getSpelare(): Observable<Fotspelare[]> {
    return of (this.spelare);
  }
  addSpelare(f: Fotspelare) {
    this.spelare.push(f);
  }

  getSpelareName(name: string): Observable<Fotspelare> {
    for (const entry of this.spelare) {
      if (entry.name === name) {
        return of(entry);
      }
    }
    return null;
  }
}
