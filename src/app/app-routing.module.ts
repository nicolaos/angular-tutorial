import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts/workouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutDetailComponent} from './workout-detail/workout-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: WorkoutDetailComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
