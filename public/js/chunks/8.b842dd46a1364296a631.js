(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EG0M:function(t,e,s){"use strict";s.r(e);var r=s("o0o1"),a=s.n(r),i=(s("RVtD"),s("chKg"));function n(t,e,s,r,a,i,n){try{var o=t[i](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,a)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var i=t.apply(e,s);function o(t){n(i,r,a,o,l,"next",t)}function l(t){n(i,r,a,o,l,"throw",t)}o(void 0)}))}}var l,c,p,u,h,w,f,d,v,_={data:function(){return{welcome_message:[{excerpt:"",title:""}],swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},swiperOptionGallery:{slidesPerView:3,slidesPerColumn:1,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20}}},swiperOptionNews:{slidesPerView:3,slidesPerColumn:1,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20}}},swiperOptionCorporation:{slidesPerView:8,slidesPerColumn:1,spaceBetween:30,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:6,spaceBetween:40},768:{slidesPerView:5,spaceBetween:30},640:{slidesPerView:4,spaceBetween:20}}}}},computed:{all_corporation:function(){return this.$store.getters.all_corporation},all_news:function(){return this.$store.getters.all_news},all_videos:function(){return this.$store.getters.all_videos},all_galleries:function(){return this.$store.getters.all_galleries},all_abouts:function(){return this.$store.getters.all_abouts},all_projects:function(){return this.$store.getters.all_project},all_collaborations:function(){return this.$store.getters.all_collaboration},all_banner:function(){return this.$store.getters.all_banner}},created:(v=o(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCorporation();case 2:return t.next=4,this.fetchNews();case 4:return t.next=6,this.fetchVideos();case 6:return t.next=8,this.fetchGalleries();case 8:return t.next=10,this.fetchAbout();case 10:return t.next=12,this.fetchProject();case 12:return t.next=14,this.fetchCollaboration();case 14:return t.next=16,this.fetchBanner();case 16:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),methods:{fetchBanner:(d=o(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.$store.dispatch("fetchBanner");case 3:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)}),fetchCollaboration:(f=o(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.$store.dispatch("fetchCollaboration");case 3:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),fetchProject:(w=o(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.$store.dispatch("fetchProject");case 3:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)}),fetchAbout:(h=o(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.$store.dispatch("fetchAbout");case 3:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),fetchGalleries:(u=o(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchGalleries");case 2:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)}),fetchCorporation:(p=o(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchCorporation");case 2:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),fetchNews:(c=o(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchNews");case 2:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),fetchVideos:(l=o(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchVideos");case 2:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},components:{swiper:i.swiper,swiperSlide:i.swiperSlide}},m=s("KHd+"),g=Object(m.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("vx-card",{attrs:{"no-shadow":""}},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col lg:w-2/3 w-full mb-3 hidden md:block"},[r("swiper",{attrs:{options:t.swiperOption}},[r("swiper-slide",[r("img",{staticClass:"responsive",attrs:{src:s("zylK"),alt:"banner"}})]),t._v(" "),r("swiper-slide",[r("img",{staticClass:"responsive",attrs:{src:s("GnJE"),alt:"banner"}})]),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),r("div",{staticClass:"vx-col lg:w-1/3 w-full mb-3"},[r("vx-card",{staticClass:"overlay-card overflow-hidden w-full"},[r("template",{slot:"no-body"},[r("a",{attrs:{href:"http://tactic.muni.cz/"}},[r("img",{staticClass:"responsive",attrs:{src:"http://tactic.muni.cz/thumbs/1180tactic-logo.png",alt:"tactic"}}),t._v(" "),r("div",{staticClass:"card-overlay text-white flex flex-col justify-between"},[r("h4",{staticClass:"text-white mb-4"},[t._v("TACTIC")]),t._v(" "),r("p",[t._v("Through Academic Cooperation Towards Innovative Capacity")])])])])],2),t._v(" "),r("vx-card",{staticClass:"overlay-card overflow-hidden w-full mt-2"},[r("template",{slot:"no-body"},[r("a",{attrs:{href:"http://www.unicamedu.com/index.php?lang=en"}},[r("img",{staticClass:"responsive",attrs:{src:"http://www.ajaes.org/img/logo.png",alt:"unicam"}}),t._v(" "),r("div",{staticClass:"card-overlay text-white flex flex-col justify-between"},[r("h4",{staticClass:"text-white mb-4"},[t._v("UNICAM")]),t._v(" "),r("p",[t._v("Implementing quality of education & training of the Young\n                                        Universities in rural area of CAMbodia - Unicam")])])])])],2)],1)]),t._v(" "),r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col lg:w-2/3 w-full"},[r("a",{staticClass:"text-2xl",attrs:{href:"#"}},[t._v(t._s(t.all_banner.title))]),t._v(" "),r("img",{staticClass:"responsive rounded shadow-md",attrs:{src:t.all_banner.banner,alt:""}})]),t._v(" "),r("div",{staticClass:"vx-col lg:w-1/3 w-full mt-2"},[r("iframe",{staticClass:"responsive",attrs:{src:"https://www.youtube.com/embed/CVe3ABsiOU8",frameborder:"0",allowfullscreen:""}}),t._v(" "),r("vs-list",[r("vs-list-header",{attrs:{title:"Projects"}}),t._v(" "),t._l(t.all_projects,(function(e,s){return s<=5?r("vs-list-item",{key:s,attrs:{title:e.project_name,subtitle:"Funded from: "+e.project_from+" Project Status: "+e.project_status}}):t._e()})),t._v(" "),r("vs-list-header",{attrs:{title:"Collaboration Agreement",color:"success"}}),t._v(" "),t._l(t.all_collaborations,(function(e,s){return s<=5?r("vs-list-item",{key:s,attrs:{title:e.org_name,subtitle:""+e.description.substring(0,50)}}):t._e()}))],2)],1)])]),t._v(" "),r("vx-card",{staticClass:"mt-3",attrs:{title:"Latest News","no-shadow":""}},[r("swiper",{attrs:{options:t.swiperOptionNews}},[t._l(t.all_news,(function(e,s){return s<=5?r("swiper-slide",{key:s},[r("router-link",{attrs:{to:"news/"+e.id+"/"+t.slugable(e.title)}},[r("img",{staticClass:"responsive mb-3",attrs:{src:e.thumb,alt:"news"}}),t._v(" "),r("a",{staticClass:"mb-3 text-xl",attrs:{href:"#"}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])],1):t._e()})),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),r("vx-card",{staticClass:"my-3",attrs:{title:"Latest Gallery","no-shadow":""}},[r("swiper",{attrs:{options:t.swiperOptionGallery}},[t._l(t.all_galleries,(function(e,s){return s<=5?r("swiper-slide",{key:s},[r("router-link",{attrs:{to:"gallery/"+e.id+"/"+t.slugable(e.title)}},[r("img",{staticClass:"responsive",attrs:{src:e.thumb,alt:"gallery"}}),t._v(" "),r("a",{staticClass:"mb-3 text-xl",attrs:{href:"#"}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])],1):t._e()})),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),r("h3",[t._v("Corporations")]),t._v(" "),r("swiper",{staticClass:"mt-3",attrs:{options:t.swiperOptionCorporation}},[t._l(t.all_corporation.gallery_album,(function(t,e){return r("swiper-slide",{key:e},[r("img",{staticClass:"responsive",attrs:{src:t.path,alt:"corporation"}})])})),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])}),[],!1,null,null,null);e.default=g.exports},GnJE:function(t,e){t.exports="/images/slide-2.gif?43f6306b037787f14480c5d7a0393324"},zylK:function(t,e){t.exports="/images/slide-1.gif?31234270c2d4a095f403885419462617"}}]);