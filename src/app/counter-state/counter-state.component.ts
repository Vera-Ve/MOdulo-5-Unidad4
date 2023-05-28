import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-state',
  templateUrl: './counter-state.component.html',
  styleUrls: ['./counter-state.component.scss']
})
export class CounterStateComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = this.store.select('count');
  }

}
