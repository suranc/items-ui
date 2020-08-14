import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { ITEMS } from './mock-items';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  constructor() { }
}
