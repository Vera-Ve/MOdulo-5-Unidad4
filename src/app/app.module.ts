import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterStateComponent } from './counter-state/counter-state.component';
import { CounterIncrementComponent } from './counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './counter-decrement/counter-decrement.component';
import { CounterResetComponent } from './counter-reset/counter-reset.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer} from './reducers/counter.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterStateComponent,
    CounterIncrementComponent,
    CounterDecrementComponent,
    CounterResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
