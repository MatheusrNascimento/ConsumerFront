import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Customer } from './models/Constomer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { plainToInstance } from 'class-transformer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConsumerFront';
  customerList: Customer[] = [];

  constructor(private http: HttpClient) { }

  getCustomers() {

    this.http.get<Customer[]>('api/customers')
      .subscribe({
        next: (data) => {
          const customers = plainToInstance(Customer, data);
          this.customerList = customers;
        },
        error: (error) => {
          console.error('Error fetching customers', error);
        }
      });
  }
}
