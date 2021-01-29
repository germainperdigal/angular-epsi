import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AdminTagsService} from "../../../core/services/admin-tags.service";
import {MatDialogRef} from "@angular/material/dialog";
import {TagInterface} from "../../../core/interfaces/tag.interface";

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private adminTagsService: AdminTagsService, private dialogRef: MatDialogRef<CreateTagComponent>) { }

  creationForm = this.formBuilder.group({
    name: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  create() {
    this.adminTagsService.create(this.creationForm.getRawValue().name).subscribe((newTag: TagInterface) => {
      this.dialogRef.close(newTag);
    });
  }

}
