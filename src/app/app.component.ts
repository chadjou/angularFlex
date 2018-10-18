import { Component } from "@angular/core";
import { GetValuesService } from "./services/get-values.service";

import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddDialogComponent } from "./addDialog/add-dialog/add-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  config: string[];
  sellers: any;
  constructor(
    private getValuesService: GetValuesService,
    private dialog: MatDialog
  ) {}
  title = "angularFlex";
  testObject = { description: "desc", longDescription: "qq", category: "qq2" };

  links = ["First", "Second", "Third"];
  activeLink = this.links[0];
  background = "";

  editCourse({ description, longDescription, category }) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      description,
      longDescription,
      category
    };

    const dialogRef = this.dialog.open(AddDialogComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe(val => console.log("Dialog output:", val));
  }

  showConfig_v1() {
    this.getValuesService
      .getConfig()
      .subscribe((data: string[]) => (this.config = data));
  }

  getSellersList() {
    this.getValuesService
      .getSellers()
      .subscribe((data: any) => (this.sellers = data));
  }

  onClickMe() {
    this.showConfig_v1();
    this.getSellersList();
  }

  onClickMe2() {
    console.log(this.config);
    console.log(this.sellers);
  }
  onClickMe3() {
    this.getValuesService.postSeller().subscribe(hero => console.log(hero));
  }

  toggleBackground() {
    this.background = this.background ? "" : "primary";
  }
}
