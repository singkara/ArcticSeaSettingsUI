import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceIdentificationService {
  private readonly URL = environment.serviceIdentificationURL;


  constructor(private http: HttpClient) { }

  sendRequest(): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(this.URL);
  }
}
