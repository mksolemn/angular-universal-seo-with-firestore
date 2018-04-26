import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {SeoService} from './seo.service';

@Injectable()
export class PostsService {
  private postRef: AngularFirestoreCollection<any>;
  posts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  postId: Observable<any[]>;

  constructor(public db: AngularFirestore,
              public router: Router,
              public seoService: SeoService) {
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

  getPost(id): Observable<any> {
    this.postRef = this.db.collection('posts');
    return this.postRef.doc(id).snapshotChanges()
      .map((val) => {
      const post = val.payload.data()
        this.seoService.generateTags({
          title: post.name,
          description: post.company.catchPhrase,
          image: post.photo
        })
      return post;
    });
  }

}
