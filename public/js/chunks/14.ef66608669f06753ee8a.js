(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0WBr":function(e,t,r){"use strict";r.r(t);var s=r("o0o1"),n=r.n(s),i=(r("RVtD"),r("chKg"));function a(e,t,r,s,n,i,a){try{var l=e[i](a),o=l.value}catch(e){return void r(e)}l.done?t(o):Promise.resolve(o).then(s,n)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(s,n){var i=e.apply(t,r);function l(e){a(i,s,n,l,o,"next",e)}function o(e){a(i,s,n,l,o,"throw",e)}l(void 0)}))}}var o,c,p={data:function(){return{swiperOptionGallery:{slidesPerView:4,slidesPerColumn:3,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20}}}}},computed:{all_galleries:function(){return this.$store.getters.all_galleries}},created:(c=l(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchGalleries();case 2:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),methods:{fetchGalleries:(o=l(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("fetchGalleries");case 2:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},components:{swiper:i.swiper,swiperSlide:i.swiperSlide}},u=r("KHd+"),w=Object(u.a)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("vx-card",{attrs:{title:"Latest Gallery"}},[r("swiper",{attrs:{options:e.swiperOptionGallery}},[e._l(e.all_galleries,(function(t,s){return r("swiper-slide",{key:s},[r("router-link",{attrs:{to:"gallery/"+t.id+"/"+e.slugable(t.title)}},[r("img",{staticClass:"responsive",attrs:{src:"https://mcu.backend.siqware.app"+t.thumb,alt:"gallery"}}),e._v(" "),r("a",{staticClass:"mb-3 text-xl",attrs:{href:"#"}},[e._v("\n                            "+e._s(t.title)+"\n                        ")])])],1)})),e._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)])}),[],!1,null,null,null);t.default=w.exports}}]);