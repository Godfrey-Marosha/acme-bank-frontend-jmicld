import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class APIServiceService {

  constructor(private http: HttpClient) { }

  getData() : Promise<any>{
    return this.http.get('https://raw.githubusercontent.com/cibfrontend/mock-api-server/master/src/controllers/accounts.json').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

}