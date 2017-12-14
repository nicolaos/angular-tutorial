import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-search',
  templateUrl: './workout-search.component.html',
  styleUrls: ['./workout-search.component.css']
})
export class WorkoutSearchComponent implements OnInit {
  workouts$: Observable<Workout[]>;
  private searchTerms = new Subject<string>();

  constructor(private workoutService: WorkoutService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.workouts$ = this.searchTerms.pipe(
      // no more requests than every 300 ms
      debounceTime(300),

      // term is changed
      distinctUntilChanged(),

      /**
      With the switchMap operator, every qualifying key event can trigger an HttpClient.get() method call. Even with a 300ms pause between requests, you could have multiple HTTP requests in flight and they may not return in the order sent.
      switchMap() preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded.
      Note that canceling a previous searchHeroes() Observable doesn't actually abort a pending HTTP request. Unwanted results are simply discarded before they reach your application code.
      */
      switchMap((term: string) => this.workoutService.searchWorkouts(term)),
    );
  }

}
