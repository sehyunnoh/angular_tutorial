import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
