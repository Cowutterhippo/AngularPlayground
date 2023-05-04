import { FlashCardService } from './../services/flash-card.service';
import { IFieldConfig } from 'playground-common-ui';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  @Output() formSubmitEvent = new EventEmitter<any>();

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

  //this should no happen in the child component.
  // we will move this with use of ngrx instead of event bubbling to be fancy.
  postForm($event: any) {
    this.formSubmitEvent.emit($event);
  }
}
