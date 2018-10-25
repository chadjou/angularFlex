import { Component } from "@angular/core";
import { GetValuesService } from "./services/get-values.service";

import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddDialogComponent } from "./addDialog/add-dialog/add-dialog.component";
import { Seller } from "./models/seller";

import { Terminal } from "./models/terminal";
import { Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

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
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {}
  title = "angularFlex";

  links = ["First", "Second", "Third"];
  activeLink = this.links[0];
  background = "";

  newSeller: Seller;
  newTerminal: Terminal;

  getSellersList() {
    this.spinner.show();
    this.getValuesService.getSellers().subscribe((data: any) => {
      this.sellers = data;
      this.spinner.hide();
    });
  }

  onClickMe() {
    this.getSellersList();
  }

  async addSeler() {
    let entity = {
      Id: 0,
      Name: "",
      Address: ""
    };
    let actionResult: any = await this.entityAction(entity);

    this.spinner.show();
    this.getValuesService.postSeller2(actionResult).subscribe(data => {
      this.spinner.hide();
    });
  }

  async updateSeller(entity: any) {
    let actionResult: any = await this.entityAction(entity);

    this.spinner.show();
    this.getValuesService.updateSeller(actionResult).subscribe(data => {
      this.spinner.hide();
    });
  }

  async addTerminal(sellerId: any) {
    let entity = {
      Id: null,
      Name: "",
      Address: "",
      SellerId: sellerId
    };

    let actionResult: any = await this.entityAction(entity);

    this.spinner.show();
    this.getValuesService.addNewTerminal(actionResult).subscribe(data => {
      this.spinner.hide();
    });
  }

  async updateTerminal(entity: any) {
    let actionResult: any = await this.entityAction(entity);

    this.spinner.show();
    this.getValuesService.updateTerminal(actionResult).subscribe(data => {
      this.spinner.hide();
    });
  }

  async entityAction(entity: any): Promise<any> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      entity
    };

    const dialogRef = this.dialog.open(AddDialogComponent, dialogConfig);

    let qqq = await dialogRef
      .afterClosed()
      .toPromise()
      .then(val => {
        return val;
      });
    return qqq;
  }

  deleteSeller(id: any) {
    this.spinner.show();
    this.getValuesService.deleteSeller(id).subscribe(hero => {
      console.log(hero);
      this.spinner.hide();
    });
  }

  deleteTerminal(id: any) {
    this.spinner.show();
    this.getValuesService.deleteTerminal(id).subscribe(hero => {
      console.log(hero);
      this.spinner.hide();
    });
  }

  toggleBackground() {
    this.background = this.background ? "" : "primary";
  }
}
