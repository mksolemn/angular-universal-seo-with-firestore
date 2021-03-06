import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFirestore} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { PostPageComponent } from './post-page/post-page.component';
import {RouterModule} from '@angular/router';
import {PostsService} from './posts.service';
import {SeoService} from './seo.service';



@NgModule({
  declarations: [
    AppComponent,
    PostPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule.withServerTransition({ appId: 'ssr-app' })
  ],
  providers: [AngularFirestore, PostsService, SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
