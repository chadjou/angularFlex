import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { stringify } from "querystring";
import { Seller } from "../../models/seller";
import { Terminal } from "../../models/terminal";

@Component({
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.css"]
})
export class AddDialogComponent implements OnInit {
  form: FormGroup;
  hasSellerIdField: boolean;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { entity }
  ) {
    if (entity.hasOwnProperty("SellerId")) {
      this.hasSellerIdField = true;
      this.form = fb.group({
        Id: [entity.Id],
        Name: [entity.Name],
        Address: [entity.Address],
        SellerId: [entity.SellerId]
      });
    } else {
      this.hasSellerIdField = false;
      this.form = fb.group({
        Id: [entity.Id],
        Name: [entity.Name],
        Address: [entity.Address]
      });
    }
  }

  ngOnInit() {}

  save() {
    this.dialogRef.close({ isSaved: true, value: this.form.value });
  }

  close() {
    this.dialogRef.close({ isSaved: false });
  }
}
