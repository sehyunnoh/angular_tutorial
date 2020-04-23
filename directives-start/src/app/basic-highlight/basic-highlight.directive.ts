import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elemetnRef: ElementRef) {}

  ngOnInit() {
    this.elemetnRef.nativeElement.style.backgroundColor = "green";
  }
}
