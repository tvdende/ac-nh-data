import { Component, OnInit } from '@angular/core';
import { InsectsService } from '../insects.service';
import { BehaviorSubject } from 'rxjs';
import { Insect } from '../insect';

@Component({
  selector: 'app-insects',
  templateUrl: './insects.component.html',
  styleUrls: ['./insects.component.scss']
})
export class InsectsComponent implements OnInit {
  insects: BehaviorSubject<Insect[]> = new BehaviorSubject([]);

  cols: any[];
  selectedCols: any[];

  constructor(private service: InsectsService) { }

  ngOnInit(): void {
    this.insects = this.service.insects;
    this.selectedCols = [
      { id: 1, field: 'image', header: 'image', type: 'image' },
      { id: 2, field: 'naamNL', header: 'naamNL', type: 'text' },
      { id: 4, field: 'prijs', header: 'prijs', type: 'text' },
      { id: 5, field: 'type', header: 'type', type: 'text' },
    ];

    this.cols = [
      { id: 1, field: 'image', header: 'image', type: 'image' },
      { id: 2, field: 'naamNL', header: 'naamNL', type: 'text' },
      { id: 3, field: 'naamEN', header: 'naamEN', type: 'text' },
      { id: 4, field: 'prijs', header: 'prijs', type: 'text' },
      { id: 5, field: 'type', header: 'type', type: 'text' },
      { id: 6, field: 'grote', header: 'grote', type: 'text' },
      { id: 7, field: 'tijd', header: 'tijd', type: 'text' },
      { id: 8, field: 'januari', header: 'januari', type: 'text' },
      { id: 9, field: 'febuari', header: 'febuari', type: 'text' },
      { id: 10, field: 'maart', header: 'maart', type: 'text' },
      { id: 11, field: 'april', header: 'april', type: 'text' },
      { id: 12, field: 'mei', header: 'mei', type: 'text' },
      { id: 13, field: 'juni', header: 'juni', type: 'text' },
      { id: 14, field: 'juli', header: 'juli', type: 'text' },
      { id: 15, field: 'augustus', header: 'augustus', type: 'text' },
      { id: 16, field: 'september', header: 'september', type: 'text' },
      { id: 17, field: 'oktober', header: 'oktober', type: 'text' },
      { id: 18, field: 'november', header: 'november', type: 'text' },
      { id: 19, field: 'december', header: 'december', type: 'text' },
    ];
  }
}