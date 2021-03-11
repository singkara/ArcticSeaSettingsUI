import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-service-identification',
  templateUrl: './service-identification.component.html',
  styleUrls: ['./service-identification.component.css']
})
export class ServiceIdentificationComponent implements OnInit {
  title: string;
  abstract: string;
  keyword: string;
  serviceType: string;
  serviceVersion: string;
  fees: string;
  accessConstraints: string;
  keywords: string[];
  selectedKeyword: string;


  constructor() {
    this.title = 'title';
    this.keywords = ['OGC', 'WPS 2.0'];
  }

  ngOnInit(): void {
  }


}
