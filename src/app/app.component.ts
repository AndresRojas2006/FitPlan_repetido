import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FitPlan_repetido';
}
