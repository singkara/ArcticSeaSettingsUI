import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ServiceIdentificationService} from '../service/service-identification.service';
import {ServiceProviderService} from '../service/service-provider.service';
import {ToastrService} from 'ngx-toastr';

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
  result: string;

  @Input()
  result$: Observable<any>;


  ngOnInit(): void {
    this.serviceIdentificationService.sendRequest().subscribe(
        data => {
          this.toastr.success('Retrieved Service Provider Data Successfully');
          this.result = data;
          console.log(this.result);
          this.title = data[0].title;
          this.abstract = data[0].serviceAbstract;
          this.keywords = data[0].keywords;
          this.serviceType = data[0].serviceType;
          this.serviceVersion = data[0].serviceTypeVersion;
          this.fees = data[0].fees;
          this.accessConstraints = data[0].accessConstraints;
        },
        error => {
            this.toastr.error('Failed to retrive data, SettingsAPI Service is down');
        });
    this.keyword = 'OGC';
  }

  constructor(private serviceIdentificationService: ServiceIdentificationService, private toastr: ToastrService) {
  }

    submit(): any {
        this.toastr.success('Submitting service indentification details');
    }





}
