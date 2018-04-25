import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'seo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private postRef: AngularFirestoreCollection<any>;
  posts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  postId: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.postRef = db.collection('posts');

    this.postId = this.postRef.snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {_id: id, ...data};
        });
      });

    this.postId
      .subscribe(docs => {
        this.posts.next(docs);
    });
  }
}
