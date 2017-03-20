import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  cursor: string = "pointer";
  @Input() width: string = "100px";
  @Input() height: string = "100px";
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    //this.elementRef.nativeElement.style.color = "red";
  }


  @HostBinding("style.width") get Width() {
    return this.width + "px";
  }
  @HostBinding("style.height") get Height() {
    return this.height+"px";
  }

  @HostListener("mouseenter") onmouseenter() {
    this.setFontWeight("red");
  }

  @HostListener("mouseleave") onmouseleave() {
    this.setFontWeight("#111111");
  }

  @HostBinding("style.cursor") get Cursor() {
    return this.cursor;
  }
  
  private setFontWeight(val) {
    this.elementRef.nativeElement.style.backgroundColor = val;
  }
}
