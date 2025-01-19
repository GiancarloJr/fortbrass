import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  images: string[] = ['../../assets/images/fundo-01.jpg', '../../assets/images/fundo-02.jpg'];
  currentImageIndex: number = 0;
  backgroundImage: string = this.images[this.currentImageIndex];
  imageChangeInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.setBackgroundImage();
    this.startImageAutoChange();
  }

  private setBackgroundImage(): void {
    this.backgroundImage = `url('${this.images[this.currentImageIndex]}')`;
  }
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setBackgroundImage();
  }
  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.setBackgroundImage();
  }


  private startImageAutoChange(): void {
    this.imageChangeInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }
}
