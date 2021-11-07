import { Injectable } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getUser() {
    return firstValueFrom(of({ type: 'admin', name: 'test' }));
  }
}
