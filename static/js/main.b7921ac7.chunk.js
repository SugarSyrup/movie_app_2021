(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(30),i=n.n(c),r=n(8),o=n(2),l=n(1);var j=function(){return Object(l.jsx)("span",{children:"About this page"})},u=n(19),m=n.n(u),d=n(31),p=n(13),b=n(14),v=n(16),h=n(15),O=n(32),x=n.n(O);n(59);var f=function(e){e.id;var t=e.year,n=e.title,a=e.summary,s=e.poster,c=e.genres;return Object(l.jsxs)(r.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,poster:s,genres:c}},children:[Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:s,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:t}),Object(l.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]}),";"]})},y=(n(65),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),n}(s.a.Component)),g=y,_=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),N=_;var k=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})};n(66);var w=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie-detail",component:N})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.b7921ac7.chunk.js.map