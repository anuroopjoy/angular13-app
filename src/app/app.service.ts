import { Injectable } from '@angular/core';
import { lastValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getUser() {
    return lastValueFrom(of({ type: 'admin', name: 'test' }));
  }
}
