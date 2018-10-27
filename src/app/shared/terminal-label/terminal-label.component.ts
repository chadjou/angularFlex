import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
  @Input()
  public myCallback: Function;
  @Output()
  public onComplete: EventEmitter<any> = new EventEmitter();
  @Output()
  public updateTerminal: EventEmitter<any> = new EventEmitter();
  @Output()
  public deleteTerminal: EventEmitter<any> = new EventEmitter();

  runOnComplete(): void {
    this.onComplete.emit("qq");
  }

  constructor() {}

  ngOnInit() {}
}
