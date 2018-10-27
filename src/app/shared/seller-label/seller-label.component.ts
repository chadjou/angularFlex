import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-seller-label",
  templateUrl: "./seller-label.component.html",
  styleUrls: ["./seller-label.component.css"]
})
export class SellerLabelComponent implements OnInit {
  @Input()
  seller: any;
  @Output()
  public deleteSeller: EventEmitter<any> = new EventEmitter();
  @Output()
  public updateSeller: EventEmitter<any> = new EventEmitter();
  @Output()
  public addTerminal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
