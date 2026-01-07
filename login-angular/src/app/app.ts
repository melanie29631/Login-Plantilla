import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from "./button-demo/button-demo";
import { MainLayout } from "./layout/main-layout/main-layout";
import { PrimeNG } from 'primeng/config';
import { Login } from "./pages/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo, MainLayout, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
