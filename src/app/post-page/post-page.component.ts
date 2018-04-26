import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationStart, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';

@Component({
  selector: 'seo-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit{
  public pathSegment;
  constructor(public router: Router){
    // subscribe to current route
  }

  ngOnInit() {

  }

}
