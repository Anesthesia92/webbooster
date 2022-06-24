import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrikaComponent } from './metrika.component';

describe('MetrikaComponent', () => {
  let component: MetrikaComponent;
  let fixture: ComponentFixture<MetrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetrikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
