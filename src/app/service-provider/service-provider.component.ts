import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  providerName: string;
  providerSite: string;
  individualName: string;
  positionName: string;
  fax: string;
  phone: string;
  deliveryPoint: string;
  city: string;
  postalCode: string;
  country: string;
  electronicMailAddress: string;
  onlineResource: string;
  hoursOfService: string;
  administrativeArea: string;

  constructor() { }

  ngOnInit(): void {
  }

}
