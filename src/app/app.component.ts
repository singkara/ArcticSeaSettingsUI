import {Component, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArcticSeaSettingsUI';
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;


  // tslint:disable-next-line:typedef
  disableEnable() {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  }
}
