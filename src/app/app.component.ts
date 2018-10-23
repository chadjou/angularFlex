import { Component } from "@angular/core";
import { GetValuesService } from "./services/get-values.service";

import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddDialogComponent } from "./addDialog/add-dialog/add-dialog.component";
import { Seller } from "./models/seller";

import { Terminal } from "./models/terminal";

enum entityTypeEnum {
  Seller,
  Terminal
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  config: string[];
  sellers: any;
  ss: any;
  constructor(
    private getValuesService: GetValuesService,
    private dialog: MatDialog
  ) {}
  title = "angularFlex";

  links = ["First", "Second", "Third"];
  activeLink = this.links[0];
  background = "";

  newSeller: Seller;
  newTerminal: Terminal;

  testEntity = {
    id: 0,
    name: "testName",
    address: "testAddress"
    //sellerId: null
  };

  //entity?: Seller | Terminal,
  editCourse(entity?: any, ownerId?: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    var isNew = false;

    if (!entity) {
      isNew = true;
    }

    if (isNew) {
      entity = {
        id: null,
        name: "",
        address: ""
      };
    }

    if (ownerId && isNew) {
      entity.sellerId = ownerId;
    }

    dialogConfig.data = {
      isNew,
      entity
    };

    const dialogRef = this.dialog.open(AddDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(val => {
      console.log("Dialog output:", val);
      this.ss = val;
      console.log(this.ss);
      if (!name) {
        this.getValuesService
          .postSeller2(val)
          .subscribe(data => console.log(data));
      } else {
        this.getValuesService
          .updateSeller(val)
          .subscribe(data => console.log(data));
      }
    });
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

  deleteSeller(id: any) {
    this.getValuesService.deleteSeller(id).subscribe(hero => console.log(hero));
  }

  onClickMe4() {
    console.log("CLICK!");
  }
  toggleBackground() {
    this.background = this.background ? "" : "primary";
  }
}
