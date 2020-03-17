import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  startIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
    this.Repeat();
  }
  Repeat() {
    setTimeout(() => {
      this.showSlides();
      this.Repeat();
    }, 6000);
  }

   showSlides() {
     let i;
     const slides = document.getElementsByClassName('mySlides');
     for (i = 0; i < slides.length; i++) {
      const slidan = slides[i] as HTMLElement;
      slidan.style.display = 'none';
    }
     this.startIndex++;
     if (this.startIndex > slides.length) {this.startIndex = 1; }

     const slide = slides[this.startIndex - 1 ] as HTMLElement;
     console.log(this.startIndex);
     slide.style.display = 'block';
  }
}
