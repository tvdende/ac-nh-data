import { Injectable } from '@angular/core';
import Fishes from '../../assets/data/fishes.json';
import { BehaviorSubject } from 'rxjs';
import { Fish } from './fish.js';

@Injectable({
  providedIn: 'root'
})
export class FishesService {
  fishes: BehaviorSubject<Fish[]> = new BehaviorSubject([]);

  constructor() {
    this.fishes.next(Fishes);

  }

}
