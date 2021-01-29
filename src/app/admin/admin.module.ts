import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material";
import { CreateTagComponent } from './dialogs/create-tag/create-tag.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [DashboardComponent, CreateTagComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    UserPartsModule
  ],
  entryComponents: [CreateTagComponent]
})
export class AdminModule { }
