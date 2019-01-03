import { Component, OnInit } from '@angular/core';
import ExampleService from '../../services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  values: Array<String>;

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.exampleService.getAll().subscribe(data => {
      this.values = data;
    });
  }

}
