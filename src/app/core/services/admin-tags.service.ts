import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TagInterface} from '../interfaces/tag.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminTagsService {

  // tslint:disable-next-line:variable-name
  private _tags$ = new BehaviorSubject([]);
  public tags$ = this._tags$.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/admin/tags`
    );
  }

  // Je sais que c'est moche, mais ça marche
  setTagsObs(newTag: TagInterface, isDelete?: boolean) {
    newTag.iteration = 1; // Quand le tag est créé, il n'y a pas d'iteration retourné donc rien d'affiché
    const newValue = isDelete ? this._tags$.getValue().filter((tag) => tag.id !== newTag.id) : this._tags$.getValue().concat(newTag);
    this._tags$.next(newValue);
  }

  delete(tagId: number): Observable<any> {
    return this.httpClient.delete(
      `${environment.api}/api/admin/tag/${tagId}`
    );
  }

  create(name: string): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/admin/tag`,
      {name}
    );
  }
}
