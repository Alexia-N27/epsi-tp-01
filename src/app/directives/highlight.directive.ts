import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean | undefined = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffffcc');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
  // TODO 24: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
}
