import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrenciesService } from './services/currencies.service';
import { AngularPaginatorModule } from 'angular-paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './pipes/filter.pipe';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularPaginatorModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
