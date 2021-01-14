import {Component, OnInit, ViewChild} from '@angular/core';
import {TagService} from '../../core/services/tag.service';
import {Observable} from 'rxjs';
import {TagInterface} from '../../core/interfaces/tag.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  displayedColumns: string[] = ['id', 'label', 'iteration'];
  tags$: Observable<TagInterface[]>;

  constructor(private tagService: TagService) {
    this.tags$ = this.tagService.getAllTags();
  }

}
