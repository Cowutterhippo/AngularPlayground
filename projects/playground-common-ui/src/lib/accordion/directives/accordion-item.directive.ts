import { Directive, TemplateRef } from "@angular/core";

@Directive({  
    selector: '[dashAccordionHeader]'
 })
 export class AccordionItemDirective {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
 }
