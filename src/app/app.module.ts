import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { KanbanColumnComponent } from './components/kanban/kanban-column/kanban-column.component';
import { KanbanItemComponent } from './components/kanban/kanban-item/kanban-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FilterTasksComponent } from './components/kanban/filter-tasks/filter-tasks.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TaskDetailComponent } from './components/side-bar/task-detail/task-detail.component';
import { LogsComponent } from './components/side-bar/logs/logs.component';
import { ItemService } from './services/item.service';
import { TaskModalService } from './services/taskModal.service';
import { DateLessThanTodayDirective } from './directives/date-less-than-today.directive';
import { DateMaskDirective } from './directives/date-mask.directive';
@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanColumnComponent,
    KanbanItemComponent,
    AddTaskComponent,
    TasksComponent,
    FilterTasksComponent,
    SideBarComponent,
    TaskDetailComponent,
    LogsComponent,
    DateLessThanTodayDirective,
    DateMaskDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ItemService, TaskModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
