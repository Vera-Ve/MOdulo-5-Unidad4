import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {  decrement } from '../actions/counter.actions';

@Component({
  selector: 'app-counter-decrement',
  templateUrl: './counter-decrement.component.html',
  styleUrls: ['./counter-decrement.component.scss']
})
export class CounterDecrementComponent {
  constructor(private store: Store) {}
     
  decrementCounter() {
    this.store.dispatch(decrement());
  }
}

