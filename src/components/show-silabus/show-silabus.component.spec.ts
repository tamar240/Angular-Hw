import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSilabusComponent } from './show-silabus.component';

describe('ShowSilabusComponent', () => {
  let component: ShowSilabusComponent;
  let fixture: ComponentFixture<ShowSilabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSilabusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSilabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
