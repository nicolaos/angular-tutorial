import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { WORKOUTS } from '../mock-workouts';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workouts:Workout[] = WORKOUTS;

  selectedWorkout: Workout;

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  constructor() { }

  ngOnInit() { }

}
