!function (e, t) {
  for (var n in t) e[n] = t[n]
}(exports, function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var l = t[o] = {i: o, l: !1, exports: {}};
    return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
  }

  return n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: o})
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}({
  "+hWK": function (e, t) {
    e.exports = require("angularfire2")
  }, "/uBQ": function (e, t) {
    e.exports = require("rxjs/BehaviorSubject")
  }, 0: function (e, t, n) {
    e.exports = n("or6l")
  }, "600m": function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.AppServerModule = function () {
    }
  }, "8wGh": function (e, t) {
    e.exports = require("@angular/animations/browser")
  }, "9K8V": function (e, t) {
    e.exports = require("@nguniversal/module-map-ngfactory-loader")
  }, A7Ap: function (e, t) {
    e.exports = require("@angular/router")
  }, ASwt: function (e, t) {
    e.exports = require("@angular/platform-server")
  }, Cd9f: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n("lfKK"), t.AppRoutingModule = function () {
    }
  }, "Hq/i": function (e, t) {
    e.exports = require("@angular/platform-browser/animations")
  }, Iksp: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.AppModule = function () {
    }
  }, Ir0Z: function (e, t) {
    e.exports = require("@angular/common/http")
  }, OQ0P: function (e, t) {
    e.exports = require("@angular/core")
  }, OvWh: function (e, t, n) {
    "use strict";
    var o = n("iuBv"), l = n("OQ0P"), r = n("yv0u"), u = n("lfKK"), i = n("A7Ap"), a = n("P/B2"),
      p = l.\u0275crt({encapsulation: 0, styles: [o.styles], data: {}});

    function s(e) {
      return l.\u0275vid(0, [(e()(), l.\u0275eld(0, 0, null, null, 18, "div", [["class", "post-wrapper"]], null, null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n  "])), (e()(), l.\u0275eld(2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (e()(), l.\u0275ted(3, null, ["", ""])), (e()(), l.\u0275ted(-1, null, ["\n  "])), (e()(), l.\u0275eld(5, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n  "])), (e()(), l.\u0275eld(7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (e()(), l.\u0275ted(8, null, ["", ""])), (e()(), l.\u0275ted(-1, null, ["\n  "])), (e()(), l.\u0275eld(10, 0, null, null, 7, "ul", [], null, null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n    "])), (e()(), l.\u0275eld(12, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), l.\u0275ted(13, null, ["Catch phrase: ", ""])), (e()(), l.\u0275ted(-1, null, ["\n    "])), (e()(), l.\u0275eld(15, 0, null, null, 1, "li", [], null, null, null, null, null)), (e()(), l.\u0275ted(16, null, ["BS: ", ""])), (e()(), l.\u0275ted(-1, null, ["\n  "])), (e()(), l.\u0275ted(-1, null, ["\n"]))], null, function (e, t) {
        var n = t.component;
        e(t, 3, 0, n.currentPost.name), e(t, 5, 0, n.currentPost.photo), e(t, 8, 0, n.currentPost.company.name), e(t, 13, 0, n.currentPost.company.catchPhrase), e(t, 16, 0, n.currentPost.company.bs)
      })
    }

    function d(e) {
      return l.\u0275vid(0, [(e()(), l.\u0275and(16777216, null, null, 1, null, s)), l.\u0275did(1, 16384, null, 0, r.NgIf, [l.ViewContainerRef, l.TemplateRef], {ngIf: [0, "ngIf"]}, null), (e()(), l.\u0275ted(-1, null, ["\n"]))], function (e, t) {
        e(t, 1, 0, t.component.currentPost)
      }, null)
    }

    function c(e) {
      return l.\u0275vid(0, [(e()(), l.\u0275eld(0, 0, null, null, 1, "seo-post-page", [], null, null, null, d, p)), l.\u0275did(1, 114688, null, 0, u.PostPageComponent, [i.ActivatedRoute, a.PostsService], null, null)], function (e, t) {
        e(t, 1, 0)
      }, null)
    }

    t.RenderType_PostPageComponent = p, t.View_PostPageComponent_0 = d, t.View_PostPageComponent_Host_0 = c, t.PostPageComponentNgFactory = l.\u0275ccf("seo-post-page", u.PostPageComponent, c, {}, {}, [])
  }, "P/B2": function (e, t, n) {
    "use strict";
    var o = this && this.__assign || Object.assign || function (e) {
      for (var t, n = 1, o = arguments.length; n < o; n++) for (var l in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
      return e
    };
    Object.defineProperty(t, "__esModule", {value: !0}), n("XLYC");
    var l = n("/uBQ");
    n("A7Ap"), n("tUK8"), t.PostsService = function () {
      function e(e, t, n) {
        var r = this;
        this.db = e, this.router = t, this.seoService = n, this.posts = new l.BehaviorSubject(null), this.postRef = e.collection("posts"), this.postId = this.postRef.snapshotChanges().map(function (e) {
          return e.map(function (e) {
            var t = e.payload.doc.data();
            return o({_id: e.payload.doc.id}, t)
          })
        }), this.postId.subscribe(function (e) {
          r.posts.next(e)
        })
      }

      return e.prototype.getPost = function (e) {
        var t = this;
        return this.postRef = this.db.collection("posts"), this.postRef.doc(e).snapshotChanges().map(function (e) {
          var n = e.payload.data();
          return t.seoService.generateTags({title: n.name, description: n.company.catchPhrase, image: n.photo}), n
        })
      }, e
    }()
  }, UZOB: function (e, t, n) {
    "use strict";
    t.styles = ["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}"]
  }, Ub9p: function (e, t, n) {
    "use strict";
    var o = n("OQ0P"), l = n("600m"), r = n("YWx4"), u = n("OvWh"), i = n("hQx7"), a = n("yv0u"), p = n("wp5R"),
      s = n("ASwt"), d = n("8wGh"), c = n("Hq/i"), m = n("A7Ap"), f = n("+hWK"), g = n("XLYC"), v = n("tUK8"),
      A = n("P/B2"), h = n("f9NF"), R = n("Ir0Z"), y = n("l0JX"), P = n("9K8V"), S = n("lfKK"), M = n("Cd9f"),
      C = n("Iksp");
    t.AppServerModuleNgFactory = o.\u0275cmf(l.AppServerModule, [r.AppComponent], function (e) {
      return o.\u0275mod([o.\u0275mpd(512, o.ComponentFactoryResolver, o.\u0275CodegenComponentFactoryResolver, [[8, [u.PostPageComponentNgFactory, i.AppComponentNgFactory]], [3, o.ComponentFactoryResolver], o.NgModuleRef]), o.\u0275mpd(5120, o.LOCALE_ID, o.\u0275q, [[3, o.LOCALE_ID]]), o.\u0275mpd(4608, a.NgLocalization, a.NgLocaleLocalization, [o.LOCALE_ID, [2, a.\u0275a]]), o.\u0275mpd(5120, o.IterableDiffers, o.\u0275n, []), o.\u0275mpd(5120, o.KeyValueDiffers, o.\u0275o, []), o.\u0275mpd(4608, p.DomSanitizer, p.\u0275e, [a.DOCUMENT]), o.\u0275mpd(6144, o.Sanitizer, null, [p.DomSanitizer]), o.\u0275mpd(4608, p.HAMMER_GESTURE_CONFIG, p.HammerGestureConfig, []), o.\u0275mpd(5120, p.EVENT_MANAGER_PLUGINS, function (e, t, n, o, l) {
        return [new p.\u0275DomEventsPlugin(e, t), new p.\u0275KeyEventsPlugin(n), new p.\u0275HammerGesturesPlugin(o, l)]
      }, [a.DOCUMENT, o.NgZone, a.DOCUMENT, a.DOCUMENT, p.HAMMER_GESTURE_CONFIG]), o.\u0275mpd(4608, p.EventManager, p.EventManager, [p.EVENT_MANAGER_PLUGINS, o.NgZone]), o.\u0275mpd(135680, p.\u0275DomSharedStylesHost, p.\u0275DomSharedStylesHost, [a.DOCUMENT]), o.\u0275mpd(4608, p.\u0275DomRendererFactory2, p.\u0275DomRendererFactory2, [p.EventManager, p.\u0275DomSharedStylesHost]), o.\u0275mpd(4608, s.\u0275c, s.\u0275c, [p.DOCUMENT, [2, p.\u0275TRANSITION_ID]]), o.\u0275mpd(6144, p.\u0275SharedStylesHost, null, [s.\u0275c]), o.\u0275mpd(4608, s.\u0275ServerRendererFactory2, s.\u0275ServerRendererFactory2, [o.NgZone, p.DOCUMENT, p.\u0275SharedStylesHost]), o.\u0275mpd(4608, d.AnimationDriver, d.\u0275NoopAnimationDriver, []), o.\u0275mpd(5120, d.\u0275AnimationStyleNormalizer, c.\u0275d, []), o.\u0275mpd(4608, d.\u0275AnimationEngine, c.\u0275b, [d.AnimationDriver, d.\u0275AnimationStyleNormalizer]), o.\u0275mpd(5120, o.RendererFactory2, s.\u0275a, [s.\u0275ServerRendererFactory2, d.\u0275AnimationEngine, o.NgZone]), o.\u0275mpd(4352, o.Testability, null, []), o.\u0275mpd(4608, p.Meta, p.Meta, [a.DOCUMENT]), o.\u0275mpd(4608, p.Title, p.Title, [a.DOCUMENT]), o.\u0275mpd(5120, m.ActivatedRoute, m.\u0275f, [m.Router]), o.\u0275mpd(4608, m.NoPreloading, m.NoPreloading, []), o.\u0275mpd(6144, m.PreloadingStrategy, null, [m.NoPreloading]), o.\u0275mpd(135680, m.RouterPreloader, m.RouterPreloader, [m.Router, o.NgModuleFactoryLoader, o.Compiler, o.Injector, m.PreloadingStrategy]), o.\u0275mpd(4608, m.PreloadAllModules, m.PreloadAllModules, []), o.\u0275mpd(5120, m.ROUTER_INITIALIZER, m.\u0275i, [m.\u0275g]), o.\u0275mpd(5120, o.APP_BOOTSTRAP_LISTENER, function (e) {
        return [e]
      }, [m.ROUTER_INITIALIZER]), o.\u0275mpd(5120, f.FirebaseApp, f.\u0275a, [f.FirebaseAppConfigToken, f.FirebaseAppName]), o.\u0275mpd(4608, g.AngularFirestore, g.AngularFirestore, [f.FirebaseApp, [2, g.\u0275a]]), o.\u0275mpd(4608, v.SeoService, v.SeoService, [p.Meta, p.Title]), o.\u0275mpd(4608, A.PostsService, A.PostsService, [g.AngularFirestore, m.Router, v.SeoService]), o.\u0275mpd(4608, h.BrowserXhr, s.\u0275d, []), o.\u0275mpd(4608, h.ResponseOptions, h.BaseResponseOptions, []), o.\u0275mpd(4608, h.XSRFStrategy, s.\u0275e, []), o.\u0275mpd(4608, h.XHRBackend, h.XHRBackend, [h.BrowserXhr, h.ResponseOptions, h.XSRFStrategy]), o.\u0275mpd(4608, h.RequestOptions, h.BaseRequestOptions, []), o.\u0275mpd(5120, h.Http, s.\u0275f, [h.XHRBackend, h.RequestOptions]), o.\u0275mpd(4608, R.HttpXsrfTokenExtractor, R.\u0275h, [a.DOCUMENT, o.PLATFORM_ID, R.\u0275f]), o.\u0275mpd(4608, R.\u0275i, R.\u0275i, [R.HttpXsrfTokenExtractor, R.\u0275g]), o.\u0275mpd(5120, R.HTTP_INTERCEPTORS, function (e) {
        return [e]
      }, [R.\u0275i]), o.\u0275mpd(4608, R.XhrFactory, s.\u0275d, []), o.\u0275mpd(4608, R.HttpXhrBackend, R.HttpXhrBackend, [R.XhrFactory]), o.\u0275mpd(6144, R.HttpBackend, null, [R.HttpXhrBackend]), o.\u0275mpd(5120, R.HttpHandler, s.\u0275g, [R.HttpBackend, [2, R.HTTP_INTERCEPTORS]]), o.\u0275mpd(4608, R.HttpClient, R.HttpClient, [R.HttpHandler]), o.\u0275mpd(4608, R.\u0275e, R.\u0275e, []), o.\u0275mpd(4608, y.AnimationBuilder, c.\u0275BrowserAnimationBuilder, [o.RendererFactory2, p.DOCUMENT]), o.\u0275mpd(1024, m.\u0275a, m.\u0275d, [[3, m.Router]]), o.\u0275mpd(1024, o.ErrorHandler, p.\u0275a, []), o.\u0275mpd(1024, o.NgProbeToken, function () {
        return [m.\u0275b()]
      }, []), o.\u0275mpd(512, m.\u0275g, m.\u0275g, [o.Injector]), o.\u0275mpd(256, o.APP_ID, "ssr-app", []), o.\u0275mpd(2048, p.\u0275TRANSITION_ID, null, [o.APP_ID]), o.\u0275mpd(1024, o.APP_INITIALIZER, function (e, t, n, o, l) {
        return [p.\u0275h(e), m.\u0275h(t), p.\u0275f(n, o, l)]
      }, [[2, o.NgProbeToken], m.\u0275g, p.\u0275TRANSITION_ID, a.DOCUMENT, o.Injector]), o.\u0275mpd(512, o.ApplicationInitStatus, o.ApplicationInitStatus, [[2, o.APP_INITIALIZER]]), o.\u0275mpd(131584, o.ApplicationRef, o.ApplicationRef, [o.NgZone, o.\u0275Console, o.Injector, o.ErrorHandler, o.ComponentFactoryResolver, o.ApplicationInitStatus]), o.\u0275mpd(512, m.UrlSerializer, m.DefaultUrlSerializer, []), o.\u0275mpd(512, m.ChildrenOutletContexts, m.ChildrenOutletContexts, []), o.\u0275mpd(256, m.ROUTER_CONFIGURATION, {}, []), o.\u0275mpd(1024, a.LocationStrategy, m.\u0275c, [a.PlatformLocation, [2, a.APP_BASE_HREF], m.ROUTER_CONFIGURATION]), o.\u0275mpd(512, a.Location, a.Location, [a.LocationStrategy]), o.\u0275mpd(512, o.Compiler, o.Compiler, []), o.\u0275mpd(512, o.NgModuleFactoryLoader, P.ModuleMapNgFactoryLoader, [o.Compiler, P.MODULE_MAP]), o.\u0275mpd(1024, m.ROUTES, function () {
        return [[{path: "post", children: [{path: ":id", component: S.PostPageComponent}]}]]
      }, []), o.\u0275mpd(1024, m.Router, m.\u0275e, [o.ApplicationRef, m.UrlSerializer, m.ChildrenOutletContexts, a.Location, o.Injector, o.NgModuleFactoryLoader, o.Compiler, m.ROUTES, m.ROUTER_CONFIGURATION, [2, m.UrlHandlingStrategy], [2, m.RouteReuseStrategy]]), o.\u0275mpd(512, m.RouterModule, m.RouterModule, [[2, m.\u0275a], [2, m.Router]]), o.\u0275mpd(512, a.CommonModule, a.CommonModule, []), o.\u0275mpd(512, o.ApplicationModule, o.ApplicationModule, [o.ApplicationRef]), o.\u0275mpd(512, p.BrowserModule, p.BrowserModule, [[3, p.BrowserModule]]), o.\u0275mpd(512, M.AppRoutingModule, M.AppRoutingModule, []), o.\u0275mpd(512, f.AngularFireModule, f.AngularFireModule, []), o.\u0275mpd(512, C.AppModule, C.AppModule, []), o.\u0275mpd(512, h.HttpModule, h.HttpModule, []), o.\u0275mpd(512, R.HttpClientXsrfModule, R.HttpClientXsrfModule, []), o.\u0275mpd(512, R.HttpClientModule, R.HttpClientModule, []), o.\u0275mpd(512, c.NoopAnimationsModule, c.NoopAnimationsModule, []), o.\u0275mpd(512, s.ServerModule, s.ServerModule, []), o.\u0275mpd(512, P.ModuleMapLoaderModule, P.ModuleMapLoaderModule, []), o.\u0275mpd(512, l.AppServerModule, l.AppServerModule, []), o.\u0275mpd(256, f.FirebaseAppConfigToken, {
        apiKey: "AIzaSyAosFxXmT9aChyS6vyU_CDXw0PWFMddPmg",
        authDomain: "angular-universal-test-e414c.firebaseapp.com",
        databaseURL: "https://angular-universal-test-e414c.firebaseio.com",
        projectId: "angular-universal-test-e414c",
        storageBucket: "angular-universal-test-e414c.appspot.com",
        messagingSenderId: "546970596836"
      }, []), o.\u0275mpd(256, f.FirebaseAppName, void 0, []), o.\u0275mpd(256, R.\u0275f, "XSRF-TOKEN", []), o.\u0275mpd(256, R.\u0275g, "X-XSRF-TOKEN", [])])
    })
  }, XLYC: function (e, t) {
    e.exports = require("angularfire2/firestore")
  }, YWx4: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n("P/B2"), t.AppComponent = function () {
      function e(e) {
        this.postsService = e
      }

      return e.prototype.ngOnInit = function () {
      }, e
    }()
  }, f9NF: function (e, t) {
    e.exports = require("@angular/http")
  }, hQx7: function (e, t, n) {
    "use strict";
    var o = n("UZOB"), l = n("OQ0P"), r = n("A7Ap"), u = n("yv0u"), i = n("YWx4"), a = n("P/B2"),
      p = l.\u0275crt({encapsulation: 0, styles: [o.styles], data: {}});

    function s(e) {
      return l.\u0275vid(0, [(e()(), l.\u0275eld(0, 0, null, null, 6, "li", [], null, null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n    "])), (e()(), l.\u0275eld(2, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (e, t, n) {
        var o = !0;
        return "click" === t && (o = !1 !== l.\u0275nov(e, 3).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && o), o
      }, null, null)), l.\u0275did(3, 671744, null, 0, r.RouterLinkWithHref, [r.Router, r.ActivatedRoute, u.LocationStrategy], {routerLink: [0, "routerLink"]}, null), l.\u0275pad(4, 2), (e()(), l.\u0275ted(5, null, ["\n    ", "\n    "])), (e()(), l.\u0275ted(-1, null, ["\n  "]))], function (e, t) {
        e(t, 3, 0, e(t, 4, 0, "post", t.context.$implicit._id))
      }, function (e, t) {
        e(t, 2, 0, l.\u0275nov(t, 3).target, l.\u0275nov(t, 3).href), e(t, 5, 0, t.context.$implicit.username)
      })
    }

    function d(e) {
      return l.\u0275vid(0, [(e()(), l.\u0275eld(0, 0, null, null, 8, "div", [["class", "left"]], null, null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n"])), (e()(), l.\u0275eld(2, 0, null, null, 5, "ul", [["class", "user-list"]], null, null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n  "])), (e()(), l.\u0275and(16777216, null, null, 2, null, s)), l.\u0275did(5, 802816, null, 0, u.NgForOf, [l.ViewContainerRef, l.TemplateRef, l.IterableDiffers], {ngForOf: [0, "ngForOf"]}, null), l.\u0275pid(131072, u.AsyncPipe, [l.ChangeDetectorRef]), (e()(), l.\u0275ted(-1, null, ["\n"])), (e()(), l.\u0275ted(-1, null, ["\n"])), (e()(), l.\u0275ted(-1, null, ["\n"])), (e()(), l.\u0275eld(10, 0, null, null, 4, "div", [["class", "right"]], null, null, null, null, null)), (e()(), l.\u0275ted(-1, null, ["\n"])), (e()(), l.\u0275eld(12, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), l.\u0275did(13, 212992, null, 0, r.RouterOutlet, [r.ChildrenOutletContexts, l.ViewContainerRef, l.ComponentFactoryResolver, [8, null], l.ChangeDetectorRef], null, null), (e()(), l.\u0275ted(-1, null, ["\n"])), (e()(), l.\u0275ted(-1, null, ["\n"]))], function (e, t) {
        var n = t.component;
        e(t, 5, 0, l.\u0275unv(t, 5, 0, l.\u0275nov(t, 6).transform(n.postsService.posts))), e(t, 13, 0)
      }, null)
    }

    function c(e) {
      return l.\u0275vid(0, [(e()(), l.\u0275eld(0, 0, null, null, 1, "seo-root", [], null, null, null, d, p)), l.\u0275did(1, 114688, null, 0, i.AppComponent, [a.PostsService], null, null)], function (e, t) {
        e(t, 1, 0)
      }, null)
    }

    t.RenderType_AppComponent = p, t.View_AppComponent_0 = d, t.View_AppComponent_Host_0 = c, t.AppComponentNgFactory = l.\u0275ccf("seo-root", i.AppComponent, c, {}, {}, [])
  }, iuBv: function (e, t, n) {
    "use strict";
    t.styles = [""]
  }, l0JX: function (e, t) {
    e.exports = require("@angular/animations")
  }, lfKK: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n("A7Ap"), n("P/B2"), t.PostPageComponent = function () {
      function e(e, t) {
        var n = this;
        this.route = e, this.postsService = t, this.route.params.subscribe(function (e) {
          n.postsService.getPost(e.id).subscribe(function (e) {
            n.currentPost = e
          })
        })
      }

      return e.prototype.ngOnInit = function () {
      }, e
    }()
  }, or6l: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n("Ub9p");
    t.AppServerModuleNgFactory = o.AppServerModuleNgFactory;
    var l = n("600m");
    t.AppServerModule = l.AppServerModule, t.LAZY_MODULE_MAP = {}
  }, tUK8: function (e, t, n) {
    "use strict";
    var o = this && this.__assign || Object.assign || function (e) {
      for (var t, n = 1, o = arguments.length; n < o; n++) for (var l in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
      return e
    };
    Object.defineProperty(t, "__esModule", {value: !0}), n("wp5R"), t.SeoService = function () {
      function e(e, t) {
        this.meta = e, this.titleService = t
      }

      return e.prototype.generateTags = function (e) {
        e = o({
          title: "Angular Universal with Firestore",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla vehicula, iaculis est sit amet, eleifend ex. Integer auctor, urna eget semper interdum, libero mauris condimentum urna, in vehicula tellus erat sed turpis. Sed pharetra suscipit diam non varius. Fusce sem lectus, aliquam vitae orci quis, iaculis fermentum justo.",
          image: "./assets/img/025-kitty-24.png",
          slug: ""
        }, e), this.titleService.setTitle(e.title), this.meta.updateTag({
          name: "twitter:card",
          content: "summary"
        }), this.meta.updateTag({
          name: "twitter:site",
          content: "@freelancedeveloperio"
        }), this.meta.updateTag({
          name: "twitter:title",
          content: e.title
        }), this.meta.updateTag({
          name: "twitter:description",
          content: e.description
        }), this.meta.updateTag({name: "twitter:image", content: e.image}), this.meta.updateTag({
          property: "og:type",
          content: "article"
        }), this.meta.updateTag({
          property: "og:site_name",
          content: "FreelanceDeveloper"
        }), this.meta.updateTag({
          property: "og:title",
          content: e.title
        }), this.meta.updateTag({
          property: "og:description",
          content: e.description
        }), this.meta.updateTag({property: "og:image", content: e.image}), this.meta.updateTag({
          property: "og:url",
          content: "https://freelancedeveloper.io/" + e.slug
        })
      }, e
    }()
  }, wp5R: function (e, t) {
    e.exports = require("@angular/platform-browser")
  }, yv0u: function (e, t) {
    e.exports = require("@angular/common")
  }
}));
