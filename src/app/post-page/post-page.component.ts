import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationStart, NavigationEnd, Params, PRIMARY_OUTLET, Router} from '@angular/router';
import {PostsService} from '../posts.service';

@Component({
  selector: 'seo-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  public pathSegment;
  public currentPost;

  constructor(public route: ActivatedRoute,
              public postsService: PostsService) {
       this.route.params
      .subscribe((params: Params) => {
        this.postsService.getPost(params['id'])
          .subscribe((val) => {
            this.currentPost = val;
          });
    });
  }

  ngOnInit() {

  }

}
