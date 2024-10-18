import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareaComponent } from './listaTarea.component';

describe('ListaTareaComponent', () => {
  let component: ListaTareaComponent;
  let fixture: ComponentFixture<ListaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
