import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding('style.color') color: string = 'white';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.borderRadius') borderRadius: string = '5px';
  @HostBinding('style.padding') padding: string = '10px 30px';
  @HostBinding('style.fontSize') fontSize: string = '20px';

  @HostListener('mouseenter')
  OnMouseEnter() {
    this.backgroundColor = 'white';
    this.color = '#28282B';
    this.border = '#28282B 3px solid'
  }

  @HostListener('mouseout')
  OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.color = 'white';
    this.border = 'none'
  }


}
