(this.webpackJsonpgiggle=this.webpackJsonpgiggle||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/spinner.ac447129.gif"},43:function(e,t,a){e.exports=a(75)},48:function(e,t,a){},49:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=(a(48),a(3)),o=a(4),i=a(5),m=a(6),u=a(9),d=a(10),p=(a(49),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Breeds ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/breeds"},"Breeds"))))))}),b=a(8),h=a(14),E=a.n(h),v=a(22),f=a(23),y=a.n(f),g=a(38),N=a.n(g),j=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(n){var r=N.a.v4();n({type:"SET_ALERT",payload:{msg:e,alertType:t,id:r}}),setTimeout((function(){return n({type:"REMOVE_ALERT",payload:r})}),a)}},O=function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var n,r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={headers:{"Content-Type":"application/json"}},a({type:"FETCH_BREEDS_INIT"}),r=e?"https://breedscat.herokuapp.com/api/v1/breeds?name=".concat(e):"https://\xadbreedscat.herokuapp.c\xadom/api/v1/breeds",t.next=6,y.a.get(r,n);case 6:c=t.sent,console.log(c),a({type:"FETCH_BREEDS_SUCCESS",payload:c.data}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"FETCH_FAIL",payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.breed;return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},e.name),r.a.createElement("h5",{className:"card-title"},"Origin:",e.origin),r.a.createElement("h5",{className:"card-title"},"Temperament:",e.temperament),r.a.createElement(u.b,{to:"/breed-details/".concat(e._id),className:"btn btn-info mr-1"},"Details"))))}}]),a}(n.Component),C=function(e){return e.breeds.map((function(e){return r.a.createElement(k,{key:e._id,breed:e})}))},B=a(39),T=a.n(B);function S(){return r.a.createElement("div",null," ",r.a.createElement("img",{src:T.a,style:{width:"200px",margin:"auto",display:"block"},alt:""}))}var _=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(O())}},{key:"render",value:function(){var e,t=this.props.items,a=t.breeds,n=t.loading;return console.log("loading",n),e=null===a&&n?r.a.createElement(S,null):a&&a.length>0?r.a.createElement(C,{breeds:a}):r.a.createElement("p",null,"Breeds not found"),r.a.createElement("section",{className:"hero-section pt-5 pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"text-center mb-5 "},"Browse All Breeds"),r.a.createElement("div",{className:"row justify-content-center mt-3"},e)))}}]),a}(n.Component),w=Object(b.b)((function(e){return{items:e.breedsCat}}))(_),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).searchInput=r.a.createRef(),e}return Object(o.a)(a,[{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSearch()}},{key:"handleSearch",value:function(){var e=this.props.history,t=this.searchInput.current.value;t?e.push("/breed/".concat(t)):e.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"input-group mt-5"},r.a.createElement("input",{type:"search",className:"form-control",placeholder:"Search by Name","aria-label":"Search",onKeyPress:function(t){e.handleKeyPress(t)},ref:this.searchInput}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:function(){e.handleSearch()},className:"btn btn-outline-secondary",type:"submit"},"Search")))}}]),a}(n.Component),I=Object(d.f)(x),D=function(){return r.a.createElement("section",{className:"hero-section pt-5 pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title mb-3"},"Find Your Perfect Cat Breed"),r.a.createElement("form",null,r.a.createElement(I,null)))))))))},F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getbreedById(this.props.match.params.id)}},{key:"render",value:function(){var e,t=this.props.breed,a=t.breed,n=t.loading;return console.log(a),e=null===a||n?r.a.createElement(S,null):r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},"Name:",a.name),r.a.createElement("p",{className:"muted"},"Description:",a.description),r.a.createElement("h5",{className:"card-title"},"Temperament:",a.temperament),r.a.createElement("h5",{className:"card-title"},"Origin:",a.origin)))),r.a.createElement("section",{className:"hero-section pt-5 pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},e)))}}]),a}(n.Component),R=Object(b.b)((function(e){return{breed:e.breedsCat}}),{getbreedById:function(e){return function(){var t=Object(v.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={headers:{"Content-Type":"application/json"}},a({type:"FETCH_BREEDS_INIT"}),t.next=5,y.a.get("https://\xadbreedscat.herokuapp.c\xadom/api/v1/breeds/".concat(e),n);case 5:r=t.sent,a({type:"FETCH_BREED_BY_ID",payload:r.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),a(j("Something went wrong","danger")),a({type:"FETCH_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}})(F),H=a(40),A=a.n(H),L=function(e){return e?A()(e):""},M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchedBreed:""},e.searchBreedsByName=function(){var t=e.props.match.params.breed;e.setState({searchedBreed:t}),e.props.dispatch(O(t))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.searchBreedsByName()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.breed!==e.match.params.breed&&this.searchBreedsByName()}},{key:"render",value:function(){var e,t=this.props.items,a=t.breeds,n=t.loading,c=this.state.searchedBreed,l="";return null===a&&n?e=r.a.createElement(S,null):a&&a.length>0?(l="".concat(L(c)),e=r.a.createElement(C,{breeds:a})):e=r.a.createElement("h1",null,"Your searched ",L(c)," not found"),r.a.createElement("section",{className:"hero-section pt-5 pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"text-center mb-5 "},"Browse ",l," Breeds"),r.a.createElement("div",{className:"row justify-content-center mt-3"},e)))}}]),a}(n.Component),P=Object(b.b)((function(e){return{items:e.breedsCat}}))(M),Y=Object(b.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return 0!==t&&t.length>0&&t.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))})),K=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement(Y,null),r.a.createElement(d.a,{path:"/",exact:!0,component:D}),r.a.createElement(d.a,{path:"/",exact:!0,component:w}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/breeds",component:w}),r.a.createElement(d.a,{exact:!0,path:"/breed-details/:id",component:R}),r.a.createElement(d.a,{exact:!0,path:"/breed/:breed",component:P})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(11),J=a(41),V=a(15),W={breed:{},breeds:[],loading:!1},$=a(42),q=[],z=Object(U.c)({breedsCat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"FETCH_BREEDS_INIT":return Object(V.a)({},e,{breed:null,breeds:null,loading:!0});case"FETCH_BREEDS_SUCCESS":return Object(V.a)({},e,{breeds:a,loading:!1});case"FETCH_BREED_BY_ID":return Object(V.a)({},e,{breed:a,loading:!1});case"FETCH_FAIL":return Object(V.a)({},e,{breed:null,breeds:null,loading:!1});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ALERT":return[].concat(Object($.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}}}),G=Object(U.d)(z,Object(U.a)(J.a));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,{store:G},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.f80869bb.chunk.js.map