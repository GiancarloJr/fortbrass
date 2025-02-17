import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobsComponent {

  vagas = [
    {
      titulo: 'VAGA P/ ZELADOR EM JATAÍ - GO',
      descricao: '44 HORAS SEMANAIS<br>SALÁRIO DA CATEGORIA',
      imagem: '../../assets/images/bombeiora.jpg',
    },
    {
      titulo: 'PORTEIRO',
      descricao: '40 HORAS SEMANAIS<br>R$ 1.341,45',
      imagem: '../../assets/images/portaria-01.jpg',
    },
    {
      titulo: 'AUXILIAR DE LIMPEZA',
      descricao: '40 HORAS SEMANAIS',
      imagem: '../../assets/images/fundo-01.jpg',
    }
  ];

}
