import { Component } from '@angular/core';

import { IPhoto } from '../../shared/photo';


@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css', '../Site.css']
})

export class GalleryComponent {
    portraits: IPhoto[] = [
        {
            "imgSrc": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
            "title": "test",
            "width": 450
        },
        {
            "imgSrc": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
            "title": "test1",
            "width": 450
        },
        {
            "imgSrc": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
            "title": "test2",
            "width": 450
        },
        {
            "imgSrc": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
            "title": "test3",
            "width": 450
        },
        {
            "imgSrc": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
            "title": "test4",
            "width": 450
        }
    ];
    groups: IPhoto[] = [];
    grads: IPhoto[] = [];
}