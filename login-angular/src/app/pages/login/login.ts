import { Component, HostListener, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FloatLabelModule, CardModule, Button],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {
  usuario: string = '';
  password: string = '';
  currentTheme: 'light' | 'dark' = 'light';

  ngAfterViewInit() {
    this.initSmoke();
  }
  constructor(private router: Router) { }
  login() {
    this.router.navigate(['/dashboard']);
  }

  initSmoke() {
    const canvas = document.getElementById('smokeCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let baseHue = 120; // verde por defecto
    const particles: any[] = [];

    // Escuchar cambio de tema para ajustar color del humo
    window.addEventListener('themeChange', (e: any) => {
      baseHue = e.detail === 'dark' ? 120 : 0; // verde en oscuro, blanco/gris en claro
    });

    function createParticle() {
      const x = Math.random() * canvas.width;
      const y = canvas.height + Math.random() * 100;
      const size = Math.random() * 100 + 50;
      const speedY = Math.random() * -1.2 - 0.5;
      const opacity = Math.random() * 0.3 + 0.2;
      const hue = baseHue + Math.random() * 40;

      particles.push({ x, y, size, speedY, opacity, hue });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${p.opacity})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 70%, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;
        p.opacity -= 0.001;
      }

      // Eliminar partículas invisibles o fuera de pantalla
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].opacity <= 0 || particles[i].y < -100) {
          particles.splice(i, 1);
        }
      }
    }

    function animate() {
      drawParticles();
      if (particles.length < 250) createParticle();
      requestAnimationFrame(animate);
    }

    animate();
  }

  @HostListener('window:resize')
  onResize() {
    const canvas = document.getElementById('smokeCanvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}
