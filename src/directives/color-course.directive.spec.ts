import { ElementRef } from '@angular/core';
import { ColorCourseDirective } from './color-course.directive';

describe('ColorCourseDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const directive =new ColorCourseDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
