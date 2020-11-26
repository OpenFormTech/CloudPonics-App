import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
    config.showNavigationArrows = true;
  }
  
  ngOnInit(): void {
  }
  
  images = [
    {src: '../../assets/images/carousel3.jpg', desc: 'Scientific accuracy.', link:"#"},
    {src: '../../assets/images/carousel1.png', desc: 'Fleet deployability.', link:"#"},
    {src: '../../assets/images/carousel2.jpg', desc: 'Research applicability.', link:"#"}, 
  ];
  
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  
}
