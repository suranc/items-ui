import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
//import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  selectedItem: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
    item.id == 123
    //const babies = foo;
    console.log("This is normal error without a try catch");
    throw(item);
    //this.loggingService.sendLog(`{"message": "${item.name}"}`);
  }

  constructor(private itemService: ItemService) { }//, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.getItems();
  }

}
