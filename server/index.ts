// These are important and needed before anything else
import * as angularUniversal from 'angular-universal-express-firebase';

export let seoapp = angularUniversal.trigger({
  index: __dirname + '/index.html',
  main: __dirname + '/dist-server/',
  enableProdMode: true,
  cdnCacheExpiry: 1200,
  browserCacheExpiry: 600
})
