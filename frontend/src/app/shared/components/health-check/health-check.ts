import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-health-check',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h3>Backend Status:</h3>
      <pre>{{ status | json }}</pre>
    </div>
  `
})
export class HealthCheckComponent implements OnInit {
  status: any = 'Đang kiểm tra...';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/api/health`)
      .subscribe({
        next: (res) => {
          this.status = res;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.status = 'Backend chưa chạy';
          this.cdr.detectChanges();
        }
      });
  }
}