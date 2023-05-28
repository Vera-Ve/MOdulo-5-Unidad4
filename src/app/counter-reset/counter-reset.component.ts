import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {  reset } from '../actions/counter.actions';

@Component({
  selector: 'app-counter-reset',
  templateUrl: './counter-reset.component.html',
  styleUrls: ['./counter-reset.component.scss']
})
export class CounterResetComponent {
  constructor(private store: Store) {}
     
  resetCounter() {
    this.store.dispatch(reset());
  }
}


