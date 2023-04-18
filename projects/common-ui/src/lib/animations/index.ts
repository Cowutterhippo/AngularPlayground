import { animate, state, style, transition, trigger } from "@angular/animations";



export const animations: any[] = [

    trigger('spinAnimation', [
      state('spin', style({ transform: 'rotate(360deg)' })),
      state('stop', style({ transform: 'rotate(0deg)' })),
      transition('stop <=> spin', animate('1000ms linear'))
    ])


];
