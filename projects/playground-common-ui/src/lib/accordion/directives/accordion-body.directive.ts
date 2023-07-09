import { Directive, TemplateRef } from "@angular/core";

@Directive({  
    selector: '[dashAccordionBody]'
 })
 export class AccordionBodyDirective {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
 }
