import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ITodo, ITodosList } from '../store/model/todo.model';

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken(
  'example-app-local-storage',
  { factory: storageFactory }
);

@Injectable({ providedIn: 'root' })
export class NgrxTodosStorageService {
  private collectionKey = 'todo-app';

  supported(): Observable<boolean> {
    return this.storage !== null
      ? of(true)
      : throwError(() => 'Local Storage Not Supported');
  }

  // getTodoList(): Observable<ITodosList> {
  //   return this.supported().pipe(
  //     map((_) => this.storage.getItem(this.collectionKey)<ITodo),
  //     map((value: ITodosList) => (value ? JSON.parse(value) : []))
  //   );
  // }

  // addTodoList(records: ITodosList): Observable<ITodosList> {
  //   return this.getTodoList().pipe(
  //     map((value: ITodosList) => [...value, ...records]),
  //     tap((value: ITodosList) =>
  //       this.storage.setItem(this.collectionKey, JSON.stringify(value))
  //     )
  //   );
  // }

//   removeFromCollection(ids: Array<string>): Observable<ITodosList> {
//     return this.getTodoList().pipe(
//       map((value: Book[]) => value.filter((item) => !ids.includes(item.id))),
//       tap((value: Book[]) =>
//         this.storage.setItem(this.collectionKey, JSON.stringify(value))
//       )
//     );
//   }

  deleteCollection(): Observable<boolean> {
    return this.supported().pipe(
      tap(() => this.storage.removeItem(this.collectionKey))
    );
  }

  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}
}