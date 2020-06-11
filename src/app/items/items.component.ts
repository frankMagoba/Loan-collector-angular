import { Component, OnInit } from '@angular/core';
import { ItemModel } from './_models/item.model';
import { Observable, Subject, throwError, of, BehaviorSubject } from 'rxjs';
import { ItemsService } from './_services/items.service';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;
  private stepper: Stepper;


  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.items$ = this.itemsService.items$;
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }


  next() {
    this.stepper.next();
  }

  hasItems(items: ItemModel[]): boolean {
    return items && items.length > 0 ? true : false;
  }

  onSubmit() {

  }

}
