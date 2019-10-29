import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task';
  data;
  dataToDisplay;
  subscriptionOfData: Subscription;
  modalData;
  constructor(private serviceToFetchData: DataService) {

  }
  
  ngOnInit() {
    this.subscriptionOfData = timer(0, 10000).pipe(switchMap(() => this.serviceToFetchData.fetchData())).subscribe(responseObj => {
      this.data = responseObj
      this.dataToDisplay = this.data.hits;
      console.log(this.dataToDisplay);
    });

  }




  dataModal(displayData) {
    this.modalData = displayData;
  }
}
