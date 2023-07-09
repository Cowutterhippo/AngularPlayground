import { animate, trigger, state, transition, style } from "@angular/animations";

export const toggleAccordion = trigger('toggleAccordion', [
    state('collapsed', style({transform: 'translateY(-100%)', overflow: 'hidden'})),
    state('expanded', style({ transform: 'translateY(0)'})),
    transition('collapsed => expanded', animate('400ms ease-out')),
    transition('expanded => collapsed', animate('400ms ease-in'))
]);