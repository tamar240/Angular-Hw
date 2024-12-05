import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfromationComponent } from './ifromation.component';

describe('IfromationComponent', () => {
  let component: IfromationComponent;
  let fixture: ComponentFixture<IfromationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfromationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
