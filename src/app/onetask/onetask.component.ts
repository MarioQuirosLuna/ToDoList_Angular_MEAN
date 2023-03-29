import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-onetask',
  templateUrl: './onetask.component.html',
  styleUrls: ['./onetask.component.css']
})
export class OnetaskComponent {
  @Input() task: any;

  @Output() changeTask: EventEmitter<any> = new EventEmitter();

  showData: boolean = false;

  constructor(private http: HttpClient) { }

  deleteTask(task: any): void {
    this.http.delete('http://localhost:8080/api/list/' + task._id)
      .subscribe(() => {
        setTimeout(() => {
          this.changeTask.emit();
        }, 100);
      })
  }
  editMode(): void {
    this.showData = true;
  }

  editTask(task: any, newData: any): void {
    var params = { text: newData.value };
    this.http.put('http://localhost:8080/api/list/' + task._id, params)
      .subscribe(() => {
        this.changeTask.emit();
      });
  }
}
