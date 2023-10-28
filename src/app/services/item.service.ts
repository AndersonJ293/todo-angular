import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Log } from '../models/log.model';

@Injectable()
export class ItemService {
  selectedItem: Task = new Task('', '', '', '');
  logs: Log[] = [];
}
