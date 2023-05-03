import { IFieldConfig } from 'playground-common-ui';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  public config: IFieldConfig[] = [
    {
      type: 'text',
      label: 'Question',
      name: 'question',
      placeholder: 'Enter the question',
      required: true,
      controlType: 'textarea'
    },
    {
      type: 'input',
      label: 'Answer',
      name: 'answer',
      placeholder: 'Enter the answer',
      required: true,
      controlType: 'textarea'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
