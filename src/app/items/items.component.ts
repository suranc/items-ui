import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

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
  }

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

}
