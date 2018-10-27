import { Component, OnInit } from "@angular/core";
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
export class AppComponent implements OnInit {
  sellers: any;

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
      data.sort(function(a, b) {
        return b.Id - a.Id;
      });
      this.sellers = data;
      this.spinner.hide();
    });
  }

  onClickMe() {
    this.getSellersList();
  }

  testFunc(qq: any) {
    console.log(qq);
  }

  async addSeler() {
    let entity = {
      Id: 0,
      Name: "",
      Address: ""
    };
    let actionResult: any = await this.entityAction(entity);
    if (actionResult.isSaved == false) {
      return;
    }
    this.spinner.show();
    this.getValuesService.addSeller(actionResult.value).subscribe(data => {
      this.spinner.hide();
      this.getSellersList();
    });
  }

  async updateSeller(entity: any) {
    let actionResult: any = await this.entityAction(entity);
    if (actionResult.isSaved == false) {
      return;
    }
    this.spinner.show();
    this.getValuesService.updateSeller(actionResult.value).subscribe(data => {
      this.spinner.hide();
      this.getSellersList();
    });
  }

  async addTerminal(SellerId: any) {
    let entity = {
      Id: 0,
      Name: "",
      Address: "",
      SellerId: SellerId
    };

    let actionResult: any = await this.entityAction(entity);
    if (actionResult.isSaved == false) {
      return;
    }
    this.spinner.show();
    this.getValuesService.addNewTerminal(actionResult.value).subscribe(data => {
      this.getSellersList();
      this.spinner.hide();
    });
  }

  async updateTerminal(entity: any) {
    let actionResult: any = await this.entityAction(entity);
    if (actionResult.isSaved == false) {
      return;
    }
    this.spinner.show();
    this.getValuesService.updateTerminal(actionResult.value).subscribe(data => {
      this.spinner.hide();
      this.getSellersList();
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

    let dialogResult = await dialogRef
      .afterClosed()
      .toPromise()
      .then(val => {
        return val;
      });
    return dialogResult;
  }

  deleteSeller(id: any) {
    this.spinner.show();
    this.getValuesService.deleteSeller(id).subscribe(hero => {
      this.spinner.hide();
      this.getSellersList();
    });
  }

  deleteTerminal(id: any) {
    this.spinner.show();
    this.getValuesService.deleteTerminal(id).subscribe(hero => {
      this.spinner.hide();
      this.getSellersList();
    });
  }

  toggleBackground() {
    this.background = this.background ? "" : "primary";
  }

  ngOnInit() {
    this.getSellersList();
  }
}
