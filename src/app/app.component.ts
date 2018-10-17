import { Component } from "@angular/core";
import { GetValuesService } from "./services/get-values.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  config: string[];
  sellers: [];
  constructor(private getValuesService: GetValuesService) {}
  title = "angularFlex";

  links = ["First", "Second", "Third"];
  activeLink = this.links[0];
  background = "";

  showConfig_v1() {
    this.getValuesService
      .getConfig()
      .subscribe((data: string[]) => (this.config = data));
  }

  getSellersList() {
    this.getValuesService
      .getSellers()
      .subscribe((data: []) => (this.sellers = data));
  }

  onClickMe() {
    this.showConfig_v1();
    this.getSellersList();
  }

  onClickMe2() {
    console.log(this.config);
    console.log(this.sellers);
  }

  toggleBackground() {
    this.background = this.background ? "" : "primary";
  }
}
