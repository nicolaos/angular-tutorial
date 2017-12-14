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

  constructor(private workoutService: WorkoutService) { }

  getWorkouts(): void {
    this.workoutService.getWorkouts()   //returns Observable<Workout[]>
      .subscribe(workouts => this.workouts = workouts);
  }

  ngOnInit() {
    this.getWorkouts();
  }

  add(type: string): void {
    type = type.trim();
    if (!type) { return; }
    this.workoutService.addWorkout({type} as Workout)
      .subscribe(workout => {
        this.workouts.push(workout);
      });
  }

  delete(workout: Workout): void {
    this.workouts = this.workouts.filter(h => h !== workout);
    this.workoutService.deleteWorkout(workout).subscribe();
  }
}
