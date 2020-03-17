import { Component, OnInit } from '@angular/core';
import { FotspelareListaService} from '../services/fotspelare-lista.service';
import { Fotspelare} from '../../models/fotspelare';
import { ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-detalj-spelare',
  templateUrl: './detalj-spelare.component.html',
  styleUrls: ['./detalj-spelare.component.scss']
})
export class DetaljSpelareComponent implements OnInit {
  isLoggedin: boolean;
  User: string;

  constructor(private route: ActivatedRoute, private router: Router, private fotspelareService: FotspelareListaService, private authService: AuthService) { }
  spelare: Fotspelare = {
    name: '',
    age: null,
    nummer: null,
    land: '',
    position: null,
    bild: ''
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name');
    this.fotspelareService.getSpelareName(id).subscribe(f =>  this.spelare = f);
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedin = true;
        this.User = auth.email;
      } else {
        this.isLoggedin = false;
      }
    });
  }

  deletePlayer() {
    const id = this.route.snapshot.paramMap.get('name');
    this.fotspelareService.deleteSpelare(id);
    this.router.navigate(['/spelare']);
  }
}
