(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{46:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var i=t(3),n=t.n(i),r=t(14),a=t.n(r),c=t(5),o=t.n(c),l=t(15),m=t(16),d=t(17),u=t(20),j=t(19),v=t(18),p=t.n(v),h=t(2),b=t.n(h),g=(t(46),t(0));function O(e){var s=e.year,t=e.title,i=e.summary,n=e.poster,r=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:n,alt:t,title:t}),Object(g.jsxs)("div",{className:"movie_data",children:[Object(g.jsx)("h3",{className:"movie__title",children:t}),Object(g.jsx)("h5",{className:"movie__year",children:s}),Object(g.jsx)("ul",{className:"genres",children:r.map((function(e,s){return Object(g.jsx)("li",{className:"genres__genre",children:e},s)}))}),Object(g.jsxs)("p",{className:"movie__summary",children:[i.slice(0,180),"..."]})]})]})}O.propsTypes={id:b.a.number.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,summary:b.a.string.isRequired,poster:b.a.string.isRequired,genres:b.a.arrayOf(b.a.striing).isRequired};var x=O,y=(t(48),function(e){Object(u.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(m.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function s(){var t,i;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:t=s.sent,i=t.data.data.movies,e.setState({movies:i,isLoading:!1}),console.log(i);case 6:case"end":return s.stop()}}),s)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;return Object(g.jsx)("section",{class:"container",children:s?Object(g.jsx)("div",{class:"function Movie()",children:Object(g.jsx)("span",{class:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{class:"movies",children:t.map((function(e){return Object(g.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))})})}}]),t}(n.a.Component));a.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.3672c514.chunk.js.map