import { Directive, TemplateRef } from "@angular/core";

@Directive({  
    selector: '[dashAccordionHeader]'
 })
 export class AccordionHeaderDirective {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
 }
