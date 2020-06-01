import { Injectable } from '@angular/core';
import Insects from '../../assets/data/insects.json';
import { BehaviorSubject } from 'rxjs';
import { Insect } from './insect';

@Injectable({
  providedIn: 'root'
})
export class InsectsService {
  insects: BehaviorSubject<Insect[]> = new BehaviorSubject([]);

  constructor() {
    this.insects.next(Insects);

  }

}
