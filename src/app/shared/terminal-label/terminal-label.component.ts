import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-terminal-label",
  templateUrl: "./terminal-label.component.html",
  styleUrls: ["./terminal-label.component.css"]
})
export class TerminalLabelComponent implements OnInit {
  @Input()
  terminal: any;
  @Input()
  seller: any;

  constructor() {}

  ngOnInit() {}
}
