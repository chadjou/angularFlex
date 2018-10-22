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
  hasOwnerField: boolean;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { entity }
  ) {
    if (entity.hasOwnProperty("sellerId")) {
      this.hasOwnerField = true;
    } else {
      this.hasOwnerField = false;
    }

    this.form = fb.group({
      name: [entity.name],
      address: [entity.address],
      ownerId: [entity.SellerId]
    });
  }

  ngOnInit() {}

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
