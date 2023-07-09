import { animate, trigger, state, transition, style } from "@angular/animations";

export const flipAnimation = trigger('flipCard', [
    state('front', style({ transform: 'scale(1 , 1)', zIndex: 1 })),
    state('back', style({ transform: 'scale(1.5, 1.5)', background: 'blue', position: 'relative', zIndex: 3})),
    transition('front => back', animate('400ms ease-out')),
    transition('back => front', animate('400ms ease-in'))
]);