import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(public http: Http) { }
  getData() {
    return this.http.get('https://randomuser.me/api/?results=5')
      .map((results: Response) => {
        return results.json()
      })
  }

}
