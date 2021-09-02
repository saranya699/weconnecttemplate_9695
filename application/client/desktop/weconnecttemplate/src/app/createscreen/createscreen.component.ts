import { Component, OnInit } from '@angular/core';
import { CreatescreenService } from './createscreen.service';

@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public connect = {
        Name: '',
    }

    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.connect).subscribe(data => {
            this.connect.Name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}