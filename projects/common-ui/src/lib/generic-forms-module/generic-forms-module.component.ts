import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-forms-component',
  templateUrl: './generic-forms-module.component.html',
  styleUrls: ['./generic-forms-module.component.css']
})
export class GenericFormsModuleComponent implements OnInit {
  @Output() formSubmitEvent = new EventEmitter<any>();

  @Input() formConfig: any[];
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const group: Group = {};
    this.formConfig.forEach((field: IFieldConfig) => {
      group[field.name] = field.required ? [null, Validators.required] : [null];
    });
    this.myForm = this.fb.group(group);
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.formSubmitEvent.emit(this.myForm.value);
  }


}

export interface Group {
  [key: string]: any;
}
export interface IFieldConfig {
      type: string;
      label: string;
      name: string;
      placeholder: string;
      required: boolean;
      controlType: string;
}
