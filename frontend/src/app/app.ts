import { Component } from '@angular/core';
import { HealthCheckComponent } from './shared/components/health-check/health-check';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HealthCheckComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'frontend';
}
