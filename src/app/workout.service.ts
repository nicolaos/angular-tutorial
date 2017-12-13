import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Workout } from './workout';
import { WORKOUTS } from './mock-workouts';

import { MessageService } from './message.service';

@Injectable()
export class WorkoutService {

  getWorkouts(): Observable<Workout[]> {
    this.messageService.add("WorkoutService: caricati allenamenti")
    return of(WORKOUTS);
  }

  getWorkout(id: number): Observable<Workout> {
    this.messageService.add(`WorkoutService: caricato allenamento id=${id}`);
    return of(WORKOUTS.find(workout => workout.id === id));
  }

  constructor(private messageService: MessageService) { }

}
