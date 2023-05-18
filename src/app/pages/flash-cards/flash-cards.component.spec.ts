import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardsComponent } from './flash-cards.component';
import { FlashCardService } from './services/flash-card.service';

describe('FlashCardsComponent', () => {
  let component: FlashCardsComponent;
  let fixture: ComponentFixture<FlashCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardsComponent ],
      providers: [ FlashCardService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
