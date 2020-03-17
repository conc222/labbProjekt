import { Component, OnInit} from '@angular/core';
import { FotspelareListaService} from '../services/fotspelare-lista.service';

@Component({
  selector: 'app-spelare',
  templateUrl: './spelare.component.html',
  styleUrls: ['./spelare.component.scss']
})

export class SpelareComponent implements OnInit {
  spelare: Array<any>;

  constructor(private spelareService: FotspelareListaService) { }

  ngOnInit() {
    this.spelareService.getSpelare().subscribe(result => {
      this.spelare = result;
    });
  }
}
