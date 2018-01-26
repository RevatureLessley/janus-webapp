import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../../entities/Location';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {

  private locationSubscription: Subscription;
  locations: Array<Location>;
  currEditLocation: Location;

  constructor(private locationService: LocationService,
    private modalService: NgbModal) { }

  /**
   * get all locations on page load
   */
  ngOnInit() {
    this.locationService.fetchAll();
    this.locationSubscription = this.locationService.listSubject.subscribe((resp) => {
      this.locations = resp;
    });
  }


  /**
   * clean up subscription
   */
  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

}
