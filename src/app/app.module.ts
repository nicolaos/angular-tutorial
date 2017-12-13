import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkoutService } from './workout.service';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    WorkoutDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WorkoutService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
