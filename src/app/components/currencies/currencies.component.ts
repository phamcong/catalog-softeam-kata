import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies: any[];

  itemsPerPages: number[];
  itemsPerPage: number;

  constructor(
    private cs: CurrenciesService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getCurrencies();
    this.itemsPerPages = [10, 50, 100];
    this.itemsPerPage = 10;
  }

  getCurrencies(): void {
    const pageQty = 2;
    const pageSize = 100; // get first 200 currencies
    for (let i = 1; i <= pageQty; i++) {
      const currenciesURL = `https://api.openfintech.io/v1/currencies?page[number]=${i}&page[size]=${pageSize}`;
      this.cs.getCurrencies(currenciesURL)
        .subscribe(res => {
          this.currencies = (this.currencies === undefined) ? res['data'] : this.currencies.concat(res['data']);
        });
    }
  }
  switchCurrency(currency: any, currencies: any[]) {
    this.router.navigate([`#/currency/${currency.id}`]);
  }
}
