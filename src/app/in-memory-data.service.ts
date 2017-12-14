import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const workouts = [
      { id: 1, day: 'monday', type: 'swim', text: '100 mt swim' },
      { id: 2, day: 'tuesday', type: 'run', text: '1k run' },
      { id: 3, day: 'wednesday', type: 'swim', text: '200 mt swim' },
      { id: 4, day: 'thursday', type: 'run', text: '2k run' },
      { id: 5, day: 'friday', type: 'swim', text: '200 mt swim' },
      { id: 6, day: 'saturday', type: 'cycle', text: '70k cycle' },
      { id: 7, day: 'sunday', type: 'cycle', text: '20k cycle' }
    ];
    return {workouts};
  }
}
