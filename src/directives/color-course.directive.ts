import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ColorCourse]',
  standalone: true
})
export class ColorCourseDirective{

@Input() btnColor! : string; 

constructor(private el: ElementRef) {
}

ngOnInit(): void {
  this.changeColor();
}
public changeColor() {
  this.el.nativeElement.style.backgroundColor= this.btnColor;
}

}
