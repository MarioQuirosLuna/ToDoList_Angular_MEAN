import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private http: HttpClient) { }

  tasks: any[] = [];

  ngOnInit(): void {
    this.fetch()
  }

  fetch(): void {
    this.http.get('http://localhost:8080/api/list').subscribe((res) => {
      this.tasks = res as any[];
    })
  }
} 
