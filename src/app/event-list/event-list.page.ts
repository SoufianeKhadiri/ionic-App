import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.page.html',
    styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

    events: any;

    constructor() {
        this.events = [
            {
                title: 'Linz party event',
                description: 'Mi jan 2 at 03.00 linz campus room',
                img: 'assets/events1.jpg'},
            {
                title: 'Silvester GOA party',
                description: 'jan 2 at 02.00 Wien süddengasse 2',
                img: 'assets/events2.jpg'
            },
            {
                title: 'The black Keys on Stage',
                description: 'Mi jan 6 at 21.00 arena Wien',
                img: 'assets/events3.jpeg'
            },
            {
                title: 'Silent disco',
                description: 'Forget about neighbours who complain about the loudness',
                img: 'assets/events4.jpg'
            }
            ];
    }

    ngOnInit() {
    }


}

