import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {

  images = [
    { src: 'https://cdn-icons-png.flaticon.com/512/13027/13027079.png', alt: 'Empacotadores para Supermercados', title: 'Supermercados' },
    { src: 'https://cdn-icons-png.flaticon.com/512/4466/4466877.png', alt: 'Fiscal de Obras', title: 'Fiscal de Obras' },
    { src: 'https://cdn-icons-png.flaticon.com/512/4221/4221310.png', alt: 'Higienização', title: 'Higienização' },
    { src: 'https://cdn-icons-png.flaticon.com/512/291/291405.png', alt: 'Limpeza Mecanizada', title: 'Limpeza Mecanizada' },
    { src: 'https://cdn-icons-png.flaticon.com/512/3130/3130472.png', alt: 'Locação de Veículos', title: 'Locação de Veículos' },
    { src: 'https://cdn-icons-png.flaticon.com/512/6680/6680546.png', alt: 'Motoristas', title: 'Motoristas' },
    { src: 'https://cdn-icons-png.flaticon.com/512/6680/6680546.png', alt: 'Motoristas', title: 'Motoristas' },
    { src: 'https://cdn-icons-png.flaticon.com/512/6680/6680546.png', alt: 'Motoristas', title: 'Motoristas' }
  ];

  visibleImages = this.images.slice(0, 4); // Inicia mostrando as primeiras 4 imagens
  currentIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.moveRight();
    }, 5000);
  }

  moveLeft(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 4;
    } else {
      this.currentIndex -= 1;
    }
    this.updateVisibleImages();
  }

  moveRight(): void {
    if (this.currentIndex === this.images.length - 4) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.updateVisibleImages();
  }

  updateVisibleImages(): void {
    this.visibleImages = this.images.slice(this.currentIndex, this.currentIndex + 4);
  }

}
