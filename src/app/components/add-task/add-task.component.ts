import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasks } from 'src/app/data/tasks';
import { Task } from 'src/app/models/task';
import { TaskModalService } from 'src/app/services/taskModal.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    title: [''],
    description: [''],
    expectedConclusion: [''],
    price: [''],
    status: [''],
  });

  selectOptions: string[] = ['Planejado', 'Em Andamento', 'Concluido'];

  get id(): string {
    return this.taskModal.id;
  }

  set id(id: string) {
    this.taskModal.id = id;
  }

  formMode: string = 'Adicionar';

  constructor(
    private formBuilder: FormBuilder,
    private taskModal: TaskModalService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.formMode = 'Editar';

      const taskIndex = Tasks.findIndex((task) => task.id === this.id);
      const task = Tasks[taskIndex];

      this.form.patchValue({
        title: task.title,
        description: task.description,
        expectedConclusion: task.expectedConclusion,
        price: task.price,
        status: task.status,
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (this.formMode === 'Adicionar') {
      this.createTask();
      return;
    }

    this.updateTask();
  }

  createTask() {
    Tasks.push(
      new Task(
        this.form.value.title,
        this.form.value.description,
        this.form.value.expectedConclusion,
        this.form.value.price
      )
    );
    this.closeModal();
  }

  updateTask() {
    const taskIndex = Tasks.findIndex((task) => task.id === this.id);
    const task = Tasks[taskIndex];

    task.title = this.form.value.title;
    task.description = this.form.value.description;
    task.expectedConclusion = this.form.value.expectedConclusion;
    task.price = this.form.value.price;
    task.status = this.form.value.status;

    this.closeModal();
  }

  closeModal() {
    this.taskModal.opened = false;
    this.id = '';
    this.form.reset();
  }
}
