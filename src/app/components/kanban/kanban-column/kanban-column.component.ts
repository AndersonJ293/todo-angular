import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tasks } from 'src/app/data/tasks';
@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss'],
})
export class KanbanColumnComponent {
  @Input() itemName: string = '';
  tasks = Tasks;
}
