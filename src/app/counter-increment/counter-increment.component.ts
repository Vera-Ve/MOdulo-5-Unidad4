import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increment } from '../actions/counter.actions';

@Component({
  selector: 'app-counter-increment',
  templateUrl: './counter-increment.component.html',
  styleUrls: ['./counter-increment.component.scss']
})
export class CounterIncrementComponent {
  

  constructor(private store: Store) {}
     
  incrementCounter() {
    this.store.dispatch(increment());
  }
}

