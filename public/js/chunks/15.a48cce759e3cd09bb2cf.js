(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{trOS:function(e,t,s){"use strict";s.r(t);var n=s("o0o1"),r=s.n(n),i=(s("RVtD"),s("chKg"));function a(e,t,s,n,r,i,a){try{var o=e[i](a),c=o.value}catch(e){return void s(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function o(e){return function(){var t=this,s=arguments;return new Promise((function(n,r){var i=e.apply(t,s);function o(e){a(i,n,r,o,c,"next",e)}function c(e){a(i,n,r,o,c,"throw",e)}o(void 0)}))}}var c,p,u={name:"News",components:{swiper:i.swiper,swiperSlide:i.swiperSlide},data:function(){return{swiperOptionNews:{slidesPerView:4,slidesPerColumn:3,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20}}}}},computed:{all_news:function(){return this.$store.getters.all_news}},created:(p=o(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchNews();case 2:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)}),methods:{fetchNews:(c=o(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchNews");case 2:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})}},l=s("KHd+"),w=Object(l.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("vx-card",{staticClass:"mt-3",attrs:{title:"Latest News","no-shadow":""}},[s("swiper",{attrs:{options:e.swiperOptionNews}},[e._l(e.all_news,(function(t,n){return s("swiper-slide",{key:n},[s("router-link",{attrs:{to:"news/"+t.id+"/"+e.slugable(t.title)}},[s("img",{staticClass:"responsive mb-3",attrs:{src:"https://mcu.backend.siqware.app"+t.thumb,alt:"news"}}),e._v(" "),s("a",{staticClass:"mb-3 text-xl",attrs:{href:"#"}},[e._v("\n                        "+e._s(t.title)+"\n                    ")])])],1)})),e._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)}),[],!1,null,"09b2bcc4",null);t.default=w.exports}}]);