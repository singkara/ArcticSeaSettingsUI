import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = environment.serviceProviderURL;

  constructor(private http: HttpClient) { }
  sendRequest(): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(this.URL);
  }
}
