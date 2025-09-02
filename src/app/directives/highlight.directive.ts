import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HiglightDirective {

  constructor(private el: ElementRef, private rd:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.rd.setStyle(this.el.nativeElement,'backgroundColor', "yellow")
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.rd.removeStyle(this.el.nativeElement, 'backgroundColor')
  }

}
