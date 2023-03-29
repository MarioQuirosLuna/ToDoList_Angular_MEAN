import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onetask',
  templateUrl: './onetask.component.html',
  styleUrls: ['./onetask.component.css']
})
export class OnetaskComponent {
  @Input() task: any;

  constructor(private http: HttpClient) { }

  deleteTask(task: any): void {
    this.http.delete('http://localhost:8080/api/list/' + task._id).subscribe(data => {
      console.log('Deleted task: ' + data);
    });
  }
}
