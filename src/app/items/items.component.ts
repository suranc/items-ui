import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  item: Item = {
    id: 1,
    name: "Poostorm"
  }
  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
