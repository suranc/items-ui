import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
//import { LoggingService } from './logging.service';
import { Item } from './item';
import { ITEMS } from './mock-items';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems(): Observable<Item[]> {
    //this.loggingService.sendLog('{"message": "test"}')
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  constructor(private messageService: MessageService) { } //, private loggingService: LoggingService) { }
}
