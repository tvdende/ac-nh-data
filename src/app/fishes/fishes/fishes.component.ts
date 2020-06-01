import { Component, OnInit } from '@angular/core';
import { FishesService } from '../fishes.service';
import { BehaviorSubject } from 'rxjs';
import { Fish } from '../fish';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.scss']
})
export class FishesComponent implements OnInit {
  fishes: BehaviorSubject<Fish[]> = new BehaviorSubject([]);

  cols: any[];

  constructor(private service: FishesService) { }

  ngOnInit(): void {
    this.fishes = this.service.fishes;

    this.cols = [
      { field: 'image', header: 'image' },
      { field: 'naamNL', header: 'naamNL' },
      { field: 'naamEN', header: 'naamEN' },
      { field: 'prijs', header: 'prijs' },
      { field: 'type', header: 'type' },
      { field: 'grote', header: 'grote' },
      { field: 'tijd', header: 'tijd' },
      { field: 'januari', header: 'januari' },
      { field: 'febuari', header: 'febuari' },
      { field: 'maart', header: 'maart' },
      { field: 'april', header: 'april' },
      { field: 'mei', header: 'mei' },
      { field: 'juni', header: 'juni' },
      { field: 'juli', header: 'juli' },
      { field: 'augustus', header: 'augustus' },
      { field: 'september', header: 'september' },
      { field: 'oktober', header: 'oktober' },
      { field: 'november', header: 'november' },
      { field: 'december', header: 'december' },
    ];
  }

}


















