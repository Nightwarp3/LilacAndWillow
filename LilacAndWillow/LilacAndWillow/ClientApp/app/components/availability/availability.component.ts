import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from './availability.service';

@Component({
    selector: 'availability',
    templateUrl: './availability.component.html',
    styleUrls: ['../Site.css']
})

export class AvailabilityComponent implements OnInit {
    calendar: object = {};

    constructor(private availabilityService: AvailabilityService) {
    }

    ngOnInit() {
        this.calendar = this.availabilityService.getCalendar();
    }
}