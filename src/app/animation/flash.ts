import { trigger, state, style, transition, animate } from '@angular/animations';

export const FlashAnimation = {
    flash: trigger('flash', [
        state('out', style({
            backgroundColor: '#E8DEEC'
        })),
        state('in', style({
            backgroundColor: '#8A6FA5'
        })),
        transition('in => out', animate('0.1s ease-in')),
        transition('out => in', animate('0.1s ease-out')),
    ]),
};