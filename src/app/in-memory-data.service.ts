import {
  InMemoryDbService
} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [{
        id: 1,
        name: 'Angular6 Application',
        detail: 'A project management tool using Angular 6 and Materialize.',
        active: true
      },
      {
        id: 2,
        name: 'Aylin Website Design',
        detail: 'Redesign of AMD Portfolio.',
        active: false
      },
      {
        id: 3,
        name: 'Valerie Squarespace Template',
        detail: 'Squarespace template available for download.',
        active: true
      },
    ];
    return {
      projects
    };
  }
}
