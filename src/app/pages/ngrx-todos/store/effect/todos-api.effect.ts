import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

let actions$: Observable<Action>;

TestBed.configureTestingModule({
    providers: [ provideMockActions(()=> actions$) ],
});
