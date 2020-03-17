import { Injectable } from '@angular/core';
import { Fotspelare} from '../../models/fotspelare';
import { Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotspelareListaService {
  spelare: Observable<any[]>;
  spelareDoc: AngularFirestoreDocument<Fotspelare>;
  spelareOne: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.spelare = afs.collection('Fotspelare').snapshotChanges().pipe(
      map(j => j.map(
        a => {
          const data = a.payload.doc.data() as Fotspelare;
          const id = a.payload.doc.id;
          return {id, ...data};
    }
  ))
    );

  }
  getSpelare(): Observable<Fotspelare[]> {
    return (this.spelare);
  }
  addSpelare(f: Fotspelare) {
    this.afs.collection('Fotspelare').add(f);
  }

  getSpelareName(id: string): Observable<Fotspelare> {
    this.spelareDoc = this.afs.doc<Fotspelare>('Fotspelare/' + id);
    this.spelareOne = this.spelareDoc.valueChanges();
    return this.spelareOne;
  }

  deleteSpelare(id: string) {
    return this.afs.collection('Fotspelare').doc(id).delete();
  }
}

