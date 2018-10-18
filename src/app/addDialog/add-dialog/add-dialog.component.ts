import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { stringify } from "querystring";

@Component({
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.css"]
})
export class AddDialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  nameString: string = "test";
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) { description, longDescription, category }
  ) {
    this.description = description;

    this.form = fb.group({
      name: [this.nameString],
      description: [description, Validators.required],
      category: [category, Validators.required],
      longDescription: [longDescription, Validators.required]
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
