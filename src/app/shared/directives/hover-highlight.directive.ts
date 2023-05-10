import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input('appHoverHighlight') highlightColor: string;
  @Input('ogColor') ogColor: string;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'gray'); // Default color is yellow
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.ogColor);
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
