import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page',
    template: require('./page.component.html!text')
})

export class PageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}