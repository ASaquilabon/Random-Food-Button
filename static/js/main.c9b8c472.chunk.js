(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),c=(a(78),a(61)),l=a(62),s=a(71),m=a(63),u=a(72),d=a(22),h=a(23),p=function(e){return o.a.createElement("div",null,o.a.createElement("button",{onClick:e.handleClick},"Random Food Button!"),o.a.createElement("div",null,o.a.createElement("h1",null,e.item)))},f=a(19),b=(a(83),a(64)),E=a.n(b),v=a(70),w=a(65),y=a.n(w),k=a(67),_=a.n(k),g=a(69),S=a.n(g),j=a(68),C=a.n(j),N=a(29),R=a.n(N),A={card:{maxWidth:800},media:{height:480}},I=Object(v.withStyles)(A)(function(e){var t=e.classes,a=e.data.map(function(e){return o.a.createElement(y.a,{className:t.card,key:e.id},o.a.createElement(_.a,null,o.a.createElement(C.a,{className:t.media,image:e.image_url,title:e.name,style:A}),o.a.createElement(S.a,null,o.a.createElement(R.a,{component:"h2"},e.name),o.a.createElement(R.a,{component:"p"},o.a.createElement(f.a,{icon:"map-marker-alt",className:"RestaurantInfo__icon","aria-label":"address:"})," "," ",e.location.display_address[0],","," ",e.location.display_address[1]),o.a.createElement(R.a,{component:"p"},o.a.createElement(f.a,{icon:"phone",className:"RestaurantInfo__icon","aria-label":"phone number:"})," ",e.phone," ","Based on ",e.review_count," Reviews"),o.a.createElement("a",{href:e.url,className:"RestaurantInfo__website"},"More information on Yelp"))))});return o.a.createElement("div",{className:"RestaurantList__gallery"},a)}),L=function(e){return e[Math.floor(Math.random()*e.length)]},O=["filipino","korean bbq","bbq","sushi","ramen","mexican","hawaiian"],Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){e.preventDefault(),a.setState({item:L(O)},function(){E.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=",a.state.searchLocationQuery,"&term=").concat(a.state.item),{headers:{Authorization:"Bearer 4PtF46O0ShJUAsA7FLHtACoydrlyDAaG_MYntvijYDCUGq4GebvL8jhkojNp-1__mJlYDKHAUPIz9Moo90k3LSjEEcr-RyYXipe5TK1sx-dLtM5G-Y4I0_E2y8vRXHYx"}}).then(function(e){console.log(e.data.businesses),a.setState({results:e.data.businesses,loading:!1})}).catch(function(e){a.setState({errorState:"Sorry we coudln't find information related to the location you search, do you want to try something else?",loading:!1})})})},a.state={item:"Click to decide what to eat!",searchLocationQuery:"Irvine",results:[],errorState:null,loading:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{handleClick:this.handleClick,item:this.state.item}),o.a.createElement(I,{data:this.state.results,errorState:this.state.errorState}))}}]),t}(n.Component);d.b.add(h.d,h.c,h.b,h.a);var M=Y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(189)},78:function(e,t,a){},83:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.c9b8c472.chunk.js.map