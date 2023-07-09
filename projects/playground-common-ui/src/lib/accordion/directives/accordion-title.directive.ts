import { Directive, TemplateRef } from "@angular/core";

@Directive({  
    selector: '[dashAccordionHeader]'
 })
 export class AccordionTitleDirective {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
 }
