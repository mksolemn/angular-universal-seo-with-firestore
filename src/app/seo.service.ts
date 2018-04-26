import { Injectable } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generateTags(tags) {
    // default values
    tags = {
      title: 'Angular Universal with Firestore',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla vehicula, iaculis est sit amet, eleifend ex. Integer auctor, urna eget semper interdum, libero mauris condimentum urna, in vehicula tellus erat sed turpis. Sed pharetra suscipit diam non varius. Fusce sem lectus, aliquam vitae orci quis, iaculis fermentum justo.',
      image: './assets/img/025-kitty-24.png',
      slug: '',
      ...tags
    }

    // Set a title
    this.titleService.setTitle(tags.title);

    // Set meta tags
    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({name: 'twitter:site', content: '@freelancedeveloperio'});
    this.meta.updateTag({name: 'twitter:title', content: tags.title});
    this.meta.updateTag({name: 'twitter:description', content: tags.description});
    this.meta.updateTag({name: 'twitter:image', content: tags.image});

    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'FreelanceDeveloper'});
    this.meta.updateTag({property: 'og:title', content: tags.title});
    this.meta.updateTag({property: 'og:description', content: tags.description});
    this.meta.updateTag({property: 'og:image', content: tags.image});
    this.meta.updateTag({property: 'og:url', content: `https://freelancedeveloper.io/${tags.slug}`});
  }
}
