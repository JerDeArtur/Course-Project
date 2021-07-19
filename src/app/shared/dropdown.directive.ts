import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private element: ElementRef){}

  @HostBinding('class.open') opened = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.opened = this.element.nativeElement.contains(event.target) ? !this.opened : false;
  }

}
