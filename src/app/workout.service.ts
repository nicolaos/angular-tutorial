import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Workout } from './workout';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class WorkoutService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutsUrl)
      .pipe(
        tap(workouts => this.log('caricati allenamenti')),
        catchError(this.handleError('getWorkouts', []))
      );
  }

  getWorkout(id: number): Observable<Workout> {
    const url = `${this.workoutsUrl}/${id}`;
    return this.http.get<Workout>(url).pipe(
      tap(_ => this.log(`caricato allenamento id=${id}`)),
      catchError(this.handleError<Workout>(`getWorkout id=${id}`))
    );
  }

  updateWorkout(workout: Workout): Observable<any> {
    return this.http.put(this.workoutsUrl, workout, httpOptions).pipe(
      tap(_ => this.log(`updated workout id=${workout.id}`)),
      catchError(this.handleError<any>('updateWorkout'))
    );
  }

  /** POST: new hero to the server */
  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.workoutsUrl, workout, httpOptions).pipe(
      tap((workout: Workout) => this.log(`added hero w/ id=${workout.id}`)),
      catchError(this.handleError<Workout>('addWorkout'))
    );
  }

  deleteWorkout(workout: Workout | number): Observable<Workout> {
    const id = typeof workout === 'number' ? workout : workout.id
    const url = `${this.workoutsUrl}/${id}}`;

    return this.http.delete<Workout>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted workout id=${id}`)),
      catchError(this.handleError<Workout>('deleteWorkout'))
    );
  }

  searchWorkouts(term: string): Observable<Workout[]> {
    if (!term.trim()) {
      return of([])
    }

    return this.http.get<Workout[]>(`api/workouts/?type=${term}`).pipe(
      tap(_ => this.log(`trovati allenamenti corrispondenti "${term}"`)),
      catchError(this.handleError<Workout[]>('searchWorkouts', []))
    );
  }

  private log(message: string) {
    this.messageService.add('WorkoutService: '+ message);
  }

  private workoutsUrl = 'api/workouts';

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

}
