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
    if (entity.hasOwnProperty("sellerId")) {
      this.hasSellerIdField = true;
      this.form = fb.group({
        Id: [entity.Id],
        name: [entity.Name],
        address: [entity.Address],
        sellerId: [entity.sellerId]
      });
    } else {
      this.hasSellerIdField = false;
      this.form = fb.group({
        Id: [entity.Id],
        name: [entity.Name],
        address: [entity.Address]
      });
    }
  }

  ngOnInit() {}

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
