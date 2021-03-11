import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIdentificationComponent } from './service-identification.component';

describe('ServiceIdentificationComponent', () => {
  let component: ServiceIdentificationComponent;
  let fixture: ComponentFixture<ServiceIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceIdentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
