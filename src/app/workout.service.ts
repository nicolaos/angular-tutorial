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

  constructor(private messageService: MessageService) { }

}
