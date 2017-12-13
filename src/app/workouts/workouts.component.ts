import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { WORKOUTS } from '../mock-workouts';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts:Workout[] = WORKOUTS;

  selectedWorkout: Workout;

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  constructor() { }

  ngOnInit() { }
}
