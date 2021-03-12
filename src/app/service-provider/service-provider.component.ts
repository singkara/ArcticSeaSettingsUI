import { Component, OnInit } from '@angular/core';
import {ServiceIdentificationService} from '../service/service-identification.service';
import {ServiceProviderService} from '../service/service-provider.service';
import {ToastrService} from 'ngx-toastr';

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
  hoursOfService: string;
  administrativeArea: string;

  ngOnInit(): void {
    this.serviceProviderComponent.sendRequest().subscribe(
        data => {
          this.toastr.success('Retrieved Service Provider Data Successfully');
          console.log(data);
          this.providerName = data[0].providerName;
          this.providerSite = data[0].providerSite;
          this.administrativeArea = data[0].serviceContact.address.administrativeArea;
          this.city = data[0].serviceContact.address.city;
          this.country = data[0].serviceContact.address.country;
          this.deliveryPoint = data[0].serviceContact.address.deliveryPoint;
          this.electronicMailAddress = data[0].serviceContact.address.email;
          this.hoursOfService = data[0].serviceContact.address.hoursOfService;
          this.postalCode = data[0].serviceContact.address.postalCode;
          this.individualName = data[0].serviceContact.individualName;
          this.positionName = data[0].serviceContact.positionName;
          this.fax = data[0].contactInfo.fax;
          this.phone = data[0].contactInfo.phone;

        },
        error => {
            this.toastr.error('Failed to retrive data, SettingsAPI Service is down');
        });
  }

  constructor(private serviceProviderComponent: ServiceProviderService, private toastr: ToastrService) {

  }

    submit(): any {
        this.toastr.success('Submitting service provider details');
    }
}
