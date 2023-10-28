import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ItemService } from 'src/app/services/item.service';
import { TaskModalService } from 'src/app/services/taskModal.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {
  get selectedItem(): Task {
    return this.itemService.selectedItem;
  }

  set selectedItem(novaTask: Task) {
    this.itemService.selectedItem = novaTask;
  }

  constructor(
    private itemService: ItemService,
    private taskModal: TaskModalService
  ) {}

  editItem() {
    this.taskModal.opened = true;
    this.taskModal.id = this.selectedItem.id;
  }
}
