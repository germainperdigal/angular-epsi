import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {TagInterface} from '../../../core/interfaces/tag.interface';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AdminTagsService} from '../../../core/services/admin-tags.service';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {CreateTagComponent} from "../../dialogs/create-tag/create-tag.component";
import {Tag} from "@angular/compiler/src/i18n/serializers/xml_helper";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  dataSource: MatTableDataSource<TagInterface[]>;
  displayedColumns: string[] = ['name', 'iteration', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private adminTagsService: AdminTagsService, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private dialog: MatDialog) {
    this.loadTags();
    this.adminTagsService.tags$.subscribe(tags => {
      this.dataSource = new MatTableDataSource(tags);
      this.dataSource.paginator = this.paginator;
    });
  }

  loadTags() {
    this.adminTagsService.get().subscribe(tags => {
      this.adminTagsService.setTagsObs(tags);
    });
  }

  filterTags(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  deleteTag(tag: TagInterface) {
    this.adminTagsService.delete(tag.id).subscribe((data: any) => {
      this.adminTagsService.setTagsObs(tag, true);
      this.matSnackBar.open('Tag supprimé !', null, {
        duration: 5000
      });
    });
  }

  openCreationDialog() {
    const createDialog = this.dialog.open(CreateTagComponent);

    createDialog.afterClosed().subscribe((newTag: TagInterface) => {
      if (newTag) {
        this.adminTagsService.setTagsObs(newTag);
        this.matSnackBar.open( `Nouveau tag "${newTag.name}" créé !`, null, {
          duration: 5000
        });
      }
    });
  }

}
