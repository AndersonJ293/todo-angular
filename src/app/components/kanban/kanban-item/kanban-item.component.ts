import { Component, Input } from '@angular/core';
import { Log } from 'src/app/models/log.model';
import { Task } from 'src/app/models/task';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.scss'],
})
export class KanbanItemComponent {
  @Input() task: Task = new Task('', '', '', '');

  constructor(private itemService: ItemService) {}

  openDetails() {
    this.itemService.selectedItem = this.task;
    this.itemService.logs.push(new Log(this.task.title));
  }
}
