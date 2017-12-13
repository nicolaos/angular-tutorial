import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[];

  selectedWorkout: Workout;

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()   //returns Observable<Workout[]>
      .subscribe(workouts => this.workouts = workouts);
  }

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }
}
