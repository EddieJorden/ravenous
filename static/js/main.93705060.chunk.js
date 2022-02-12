(this["webpackJsonpfood.near.me"]=this["webpackJsonpfood.near.me"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(8),i=n.n(c),r=(n(13),n(3)),o=n(4),h=n(2),l=n(6),u=n(5),d=(n(14),n(15),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},s.handleSortByChange=s.handleSortByChange.bind(Object(h.a)(s)),s.handleTermChange=s.handleTermChange.bind(Object(h.a)(s)),s.handleLocationChange=s.handleLocationChange.bind(Object(h.a)(s)),s.handleSearch=s.handleSearch.bind(Object(h.a)(s)),s.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count "},s}return Object(o.a)(n,[{key:"getSortByClass",value:function(e){return e===this.state.sortBy?"active":""}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var n=e.sortByOptions[t];return Object(d.jsx)("li",{className:e.getSortByClass(n),onClick:e.handleSortByChange.bind(e,n),children:t},n)}))}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchBar",children:[Object(d.jsx)("div",{className:"SearchBar-sort-options",children:Object(d.jsx)("ul",{children:this.renderSortByOptions()})}),Object(d.jsxs)("div",{className:"SearchBar-fields",children:[Object(d.jsx)("input",{onChange:this.handleTermChange,placeholder:"Search Businesses"}),Object(d.jsx)("input",{onChange:this.handleLocationChange,placeholder:"Where?"})]}),Object(d.jsx)("div",{className:"SearchBar-submit",children:Object(d.jsx)("a",{onClick:this.handleSearch,href:"www.#.com",children:"Let's Go"})})]})}}]),n}(a.a.Component),b=(n(17),n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.business;return Object(d.jsxs)("div",{className:"Business",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:e.imageSrc,alt:""})}),Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:"Business-information",children:[Object(d.jsxs)("div",{className:"Business-address",children:[Object(d.jsx)("p",{children:e.address}),Object(d.jsx)("p",{children:e.city}),Object(d.jsxs)("p",{children:[e.state,", ",e.zipCode]})]}),Object(d.jsxs)("div",{className:"Business-reviews",children:[Object(d.jsx)("h3",{children:e.category}),Object(d.jsxs)("h3",{className:"rating",children:[e.rating," stars"]}),Object(d.jsxs)("h3",{children:[e.reviewCount," reviews"]})]})]})]})}}]),n}(a.a.Component)),O=b,p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Business",this.props.businesses),Object(d.jsx)("div",{className:"BusinessList",children:this.props.businesses.map((function(e){return Object(d.jsx)(O,{business:e},e.id)}))})}}]),n}(a.a.Component),m=p,v={search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("uXhT21HKIuzLaGHUUGkGigA6H5U7K18_rD1Kjv1opRgJJ668jR8XXWqU-zculxsC0n_Vk0j05of_IkBAJ7lZr9L6Sw92GdUV1tOeWiIsxy-1H9lJuwqQCDkUKgluYHYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return console.log(e),{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={businesses:[]},s.searchYelp=s.searchYelp.bind(Object(h.a)(s)),s}return Object(o.a)(n,[{key:"searchYelp",value:function(e,t,n){var s=this;v.search(e,t,n).then((function(e){s.setState({businesses:e})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"food.near.me"}),Object(d.jsx)(j,{searchYelp:this.searchYelp}),Object(d.jsx)(m,{businesses:this.state.businesses})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}],[[19,1,2]]]);
//# sourceMappingURL=main.93705060.chunk.js.map