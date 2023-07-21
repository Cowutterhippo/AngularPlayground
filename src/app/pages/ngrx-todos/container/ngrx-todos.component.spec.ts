import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTodosComponent } from './ngrx-todos.component';

describe('NgrxTodosComponent', () => {
  let component: NgrxTodosComponent;
  let fixture: ComponentFixture<NgrxTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
