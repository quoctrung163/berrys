(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{102:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(11),i=n(18),l=n(27),o=(n(108),n(19)),s=n(1),u=n.n(s),m=n(104),d=n.n(m),f=function(e){var t=e.item,n=e.addItem,a=e.route,r=t.name,l=t.price,s=t.imageUrl;return c.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-6"},c.a.createElement("div",{className:"product-grid"},c.a.createElement("div",{className:"product-image"},c.a.createElement(i.b,{to:"".concat(a,"/").concat(d()(r))},c.a.createElement("img",{className:"pic-1",src:s,alt:"img"}),c.a.createElement("img",{className:"pic-2",src:s,alt:"img"})),c.a.createElement("span",{className:"product-new-label"},"Sale"),c.a.createElement("span",{className:"product-discount-label"},"20%")),c.a.createElement("div",{className:"product-content"},c.a.createElement("h3",{className:"title"},c.a.createElement(i.b,{to:"".concat(a,"/").concat(d()(r))},r)),c.a.createElement("div",{className:"price"},"$",l,c.a.createElement("span",null,"$",l+1*l/5)),c.a.createElement(i.b,{className:"add-to-cart",to:"#",onClick:function(){n(t),Object(o.b)("Your item added successful :3")}},"+ Add To Cart"))))};f.propTypes={item:u.a.any,addItem:u.a.func.isRequired,route:u.a.string.isRequired};t.a=Object(r.b)(null,(function(e){return{addItem:function(t){return e(Object(l.a)(t))}}}))(f)},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(6),c=Object(a.a)([function(e){return e.shop}],(function(e){return e.collections})),r=Object(a.a)([c],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),i=function(e){return Object(a.a)([c],(function(t){return t[e]}))}},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";var a=n(101),c=n.n(a),r=n(44),i=n.n(r),l=n(0),o=n.n(l),s=n(11),u=n(6),m=n(18),d=n(102),f=n(1),p=n.n(f),v=(n(109),function(e){var t=e.title,n=e.items,a=e.routeName;return o.a.createElement("div",{className:"collection-preview"},o.a.createElement(m.b,{className:"title",to:"/shop/".concat(a),style:{textAlign:"start",paddingLeft:"15px",fontWeight:"500",fontSize:"1.5em"}},t),"/shop"===window.location.pathname?o.a.createElement("div",{className:"preview"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},n.filter((function(e,t){return t<8})).map((function(e){return o.a.createElement(d.a,{key:e.id,item:e,route:"/shop/".concat(a)})}))))):o.a.createElement("div",{className:"preview"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},n.filter((function(e,t){return t<4})).map((function(e){return o.a.createElement(d.a,{key:e.id,item:e,route:"/shop/".concat(a)})}))))))});v.propTypes={title:p.a.string.isRequired,items:p.a.array.isRequired,routeName:p.a.string.isRequired};var E=v,b=n(103),h=(n(110),function(e){var t=e.collections;return o.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=i()(e,["id"]);return o.a.createElement(E,c()({key:t},n))})))});h.propTypes={collections:p.a.array.isRequired};var N=Object(u.b)({collections:b.b});t.a=Object(s.b)(N)(h)},148:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n(40),l=n.n(i),o=n(41),s=n.n(o),u=n(32),m=n.n(u),d=n(42),f=n.n(d),p=n(33),v=n.n(p),E=n(43),b=n.n(E),h=n(116),N=n.n(h);n(148);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=function(e){b()(a,e);var t,n=(t=a,function(){var e,n=v()(t);if(g()){var a=v()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function a(e,t){var c;return l()(this,a),(c=n.call(this,e,t)).handleSelect=c.handleSelect.bind(m()(c)),c.state={index:0,direction:null},c}return s()(a,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state,t=e.index,n=e.direction;return c.a.createElement(N.a,{activeIndex:t,direction:n,onSelect:this.handleSelect},c.a.createElement(N.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"http://i.imgur.com/QPw2LBU.png",alt:"First slide"})),c.a.createElement(N.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"http://i.imgur.com/DGzDClK.png",alt:"Third slide"})),c.a.createElement(N.a.Item,null,c.a.createElement("img",{className:"d-block w-100",src:"http://i.imgur.com/8YI2oUe.png",alt:"Third slide"})))}}]),a}(a.Component),w=function(){return c.a.createElement("div",{className:"container pt-5 mt-5 pb-5 mb-5"},c.a.createElement(y,null))},j=n(111),O=n(30),k=n(6),R=n(19),x=(n(63),n(12)),S=n.n(x);function I(){var e=S()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return I=function(){return e},e}var q=n(13).b.div(I()),T=Object(k.b)({currentUser:O.a});t.default=Object(r.b)(T,null)((function(e){var t=e.currentUser;return Object(a.useEffect)((function(){Object(R.b)("Welcome to my website!")}),[]),c.a.createElement(q,null,null!==t?c.a.createElement(R.a,null):null,c.a.createElement(w,null),c.a.createElement(j.a,null))}))}}]);
//# sourceMappingURL=3.index.js.map