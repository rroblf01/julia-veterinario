import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: {name: string, description: string, img: string}[] = [
    {
      name: 'Ducha de mascotas',
      description: 'En nuestra clínica ofrecemos el servicio de ducha de mascotas con productos de calidad.',
      img: 'clean-dog.jpg'
    },
    {
      name: 'Corte de pelo',
      description: 'Nuestros amiguitos peludos necesitan un corte de pelo de vez en cuando, en nuestra clínica ofrecemos este servicio.',
      img: 'haircut-dog.jpg'
    },
    {
      name: 'Curar perros',
      description: 'En nuestra clínica ofrecemos el servicio de curar perros con productos de calidad.',
      img: 'sick-dog.jpg'
    },
    {
      name: 'Natación canina',
      description: 'En nuestra clínica ofrecemos el servicio de enseñar a nadar a los perros. Actualmente solo está disponible el modo perrito.',
      img: 'dog-swimming.jpg'
    }
  ]
}
