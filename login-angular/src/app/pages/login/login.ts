import { Component, HostListener, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { Button } from "primeng/button";


@Component({
  selector: 'app-login',
  imports: [FormsModule, FloatLabelModule, CardModule, Button],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario: string = '';
  password: string = '';

  login() {
    console.log('Usuario:', this.usuario);
    console.log('Password:', this.password);
  }


  ngAfterViewInit() {
    const video = document.getElementById('bgVideo') as HTMLVideoElement;
    if (video) {
      video.playbackRate = 0.5; // 0.5 = la mitad de la velocidad normal
    }
  }

}