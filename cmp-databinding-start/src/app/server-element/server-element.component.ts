import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // None, Native, Emulated
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input("name") name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(changes) {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOninit");
    console.log('|||||||||||'+this.header.nativeElement.textContent); // dom이 그려지기 전이라 내용이 없음.
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck~!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log('|||||||||||'+this.header.nativeElement.textContent);    
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
