import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  // sliderImages = document.querySelectorAll('.slide');
  // arrowRight = document.querySelector('#arrow-right');
  // arrowLeft = document.querySelector('#arrow-left');
  // current = 0;

  constructor() {
  }

  ngOnInit() {// must use Interface ('as NodeListOf<Element>', etc) in order to avoid error TS2339: Property
    // 'style' does not exist on type 'Element'.
    // const sliderImages = document.querySelectorAll('.slide');
    // const arrowRight = document.querySelector('#arrow-right');
    // const arrowLeft = document.querySelector('#arrow-left');
    const sliderImages = (document.querySelectorAll('.slide') as NodeListOf<Element>);
    const arrowRight = (document.querySelector('#arrow-right') as HTMLElement);
    const arrowLeft = (document.querySelector('#arrow-left') as HTMLElement);
    let current = 0;


    function reset() { // clears all images
      for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
      }
    }

    function startSlide() { // initializes slider
      reset();
      sliderImages[0].style.display = 'block';
      console.log('startSlide() is supposedly running')
    }

    // show prev
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }

    // show next
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = 'block';
      current++;
    }

    // left arrow click
    arrowLeft.addEventListener('click', function () {
      if (current === 0) {
        current = sliderImages.length;
      }
      slideLeft();
    });

    // right arrow click
    arrowRight.addEventListener('click', function () {
      if (current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
    });


    startSlide();

  }

}
