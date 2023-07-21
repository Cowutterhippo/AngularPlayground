import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {    
    TodosApiActions,
    TodoListActions,
    TodoActions ,
    TodoPageActions
} from '../action';
import { NgrxTodosStorageService } from '../../services/ngrx-todos-storage.service';
import { ITodosList } from '../model/todo.model';

// import { Book } from '@example-app/books/models';
// import { BookStorageService } from '@example-app/core/services';

@Injectable()
export class CollectionEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the supported call in `defer` makes
   * effect easier to test.
   */
  // checkStorageSupport$ = createEffect(
  //   () => defer(() => this.storageService.supported()),
  //   { dispatch: false }
  // );

  // loadTodosLists$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodoPageActions.enterPage),
  //     switchMap(() =>
  //       this.storageService.getTodoList().pipe(
  //         map((todos: ITodosList) =>
  //           TodosApiActions.loadTodosListSuccess({ todos })
  //         ),
  //         catchError((error) =>
  //           of(TodosApiActions.loadTodosListFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );

  // addTodosListsToProject$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodoListActions.createTodoList),
  //     mergeMap(({ data }) =>
  //       this.storageService.addToCollection([data]).pipe(
  //         map(() => CollectionApiActions.addBookSuccess({ data })),
  //         catchError(() => of(CollectionApiActions.addBookFailure({ data })))
  //       )
  //     )
  //   )
  // );

  // removeBookFromCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedBookPageActions.removeBook),
  //     mergeMap(({ book }) =>
  //       this.storageService.removeFromCollection([book.id]).pipe(
  //         map(() => CollectionApiActions.removeBookSuccess({ book })),
  //         catchError(() => of(CollectionApiActions.removeBookFailure({ book })))
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private storageService: NgrxTodosStorageService
  ) {}
}