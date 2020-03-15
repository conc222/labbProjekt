import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

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

  /*__FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }*/
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
