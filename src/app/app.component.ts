import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'seo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public postsService: PostsService) {

  }

  ngOnInit() {
  }

}
