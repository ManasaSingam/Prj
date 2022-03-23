import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCancellationComponent } from './ticket-cancellation.component';

describe('TicketCancellationComponent', () => {
  let component: TicketCancellationComponent;
  let fixture: ComponentFixture<TicketCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketCancellationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
