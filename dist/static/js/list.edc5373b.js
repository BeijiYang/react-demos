(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"++7g":function(e,t,r){},"5/Px":function(e,t,r){"use strict";r.r(t),r("++7g");var a=r("mXGw"),n=r.n(a),i=r("Qzxo"),o=r.n(i),c=function(){return n.a.createElement("div",{className:"loading"},"Loading...")},l=function(){return n.a.createElement("div",{className:"ending"},"No more data.")};function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,r;function i(t){var r;return(r=e.call(this,t)||this).state={loadEnd:!1},r.load=r.load.bind(s(s(r))),r}r=e,(t=i).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r;var o=i.prototype;return o.load=function(){this.setState({loadEnd:!0})},o.render=function(){var e=this.state.loadEnd;return n.a.createElement(a.Fragment,null,n.a.createElement("div",{className:"placeholder",style:{display:e?"none":"block"}}),n.a.createElement("img",{src:this.props.src,style:{display:e?"block":"none"},alt:this.props.alt,onLoad:this.load}))},i}(a.Component),u=r("iSXX");function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).state={data:Object(u.a)(),hasMore:!0},r.renderItem=r.renderItem.bind(d(d(r))),r.loadNextPage=r.loadNextPage.bind(d(d(r))),r}r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r;var i=a.prototype;return i.renderItem=function(e,t){var r=e.id,a=e.image,i=e.words,o=e.paragraphs;return n.a.createElement("div",{className:"list-item"},n.a.createElement("p",null,"#",t," ",i),n.a.createElement(h,{src:a,alt:r}),n.a.createElement("p",null,o))},i.loadNextPage=function(){var e=this,t=[].concat(this.state.data,Object(u.a)(this.state.data.length));setTimeout(function(){e.setState({data:t,hasMore:t.length<300})},2e3)},i.render=function(){return n.a.createElement(o.a,{uniqueField:"id",hasMore:this.state.hasMore,data:this.state.data,estimatedItemHeight:180,loadingComponent:n.a.createElement(c,null),endComponent:n.a.createElement(l,null),onReachedBottom:this.loadNextPage,renderItem:this.renderItem})},a}(n.a.Component),m=r("qTeO"),f=r.n(m)()()(function(e){var t=e.virtual,r=e.itemHeight;return n.a.createElement("div",{style:t.style},t.items.map(function(e,t){return n.a.createElement("div",{className:"list-item",key:e.id,style:{height:r}},n.a.createElement("p",null,"#",t," ",e.words),n.a.createElement(h,{src:e.image,alt:e.id}),n.a.createElement("p",null,e.paragraphs))}))}),g=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r,a.prototype.render=function(){return n.a.createElement(f,{items:Object(u.a)(),itemHeight:180})},a}(n.a.Component),v=(r("uIdQ"),r("NHgZ")),E=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r;var i=a.prototype;return i.componentDidMount=function(){this.props.cacheNodeHeight(this.node,this.props.index)},i.render=function(){var e=this,t=this.props,r=t.index,a=t.item,i=t.style;return n.a.createElement("div",{className:"list-item",style:i,ref:function(t){e.node=t}},n.a.createElement("p",null,"#$",r," ",a.words),a.image?n.a.createElement(h,{src:a.image,alt:a.id}):null,n.a.createElement("p",null,a.paragraphs))},a}(a.Component);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).data=Object(u.a)(0,!1),r.cacheHeight=Object.create(null),r.renderItem=r.renderItem.bind(y(y(r))),r.getItemSize=r.getItemSize.bind(y(y(r))),r.cacheNodeHeight=r.cacheNodeHeight.bind(y(y(r))),r}r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r;var i=a.prototype;return i.cacheNodeHeight=function(e,t){this.cacheHeight[t]=e.offsetHeight,this.list&&(this.list.recomputeSizes(t),this.list.forceUpdate())},i.renderItem=function(e){var t=e.index,r=e.style,a=this.data[t];return n.a.createElement(E,{key:a.id,index:t,item:a,style:r,cacheNodeHeight:this.cacheNodeHeight})},i.getItemSize=function(e){return this.cacheHeight[e]||135},i.componentDidMount=function(){this.list.recomputeSizes(),this.list.forceUpdate()},i.render=function(){var e=this;return n.a.createElement(v.a,{width:"100%",ref:function(t){e.list=t},height:750,itemSize:this.getItemSize,itemCount:this.data.length,renderItem:this.renderItem,overscanCount:3})},a}(n.a.Component),w=r("oBf6"),_=Object(u.a)(),k=function(e){var t=e.index,r=e.style,a=_[t],i=a.id,o=a.image,c=a.words,l=a.paragraphs;return n.a.createElement("div",{className:"list-item",style:r,key:i},n.a.createElement("p",null,"#",t," ",c),n.a.createElement(h,{src:o,alt:i}),n.a.createElement("p",null,l))},I=new Array(100).fill(!0).map(function(){return 180+Math.round(50*Math.random())}),N=function(e){return I[e]},C=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r,a.prototype.render=function(){return n.a.createElement(w.a,{itemCount:_.length,estimatedItemSize:180,itemSize:N,height:750,width:"100%"},k)},a}(n.a.Component),H=r("db6x");function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var z=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).state={data:Object(u.a)(),hasMore:!0},r.cache=new H.c({fixedWidth:!0,defaultHeight:180}),r.renderItem=r.renderItem.bind(x(x(r))),r}r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r;var i=a.prototype;return i.renderItem=function(e){var t=e.index,r=e.key,a=e.style,i=e.parent,o=this.state.data[t],c=o.id,l=o.image,s=o.words,u=o.paragraphs;return n.a.createElement(H.b,{key:r,cache:this.cache,parent:i,columnIndex:0,rowIndex:t},n.a.createElement("div",{className:"list-item",style:a},n.a.createElement("p",null,"#",t," ",s),n.a.createElement(h,{src:l,alt:c}),n.a.createElement("p",null,u)))},i.render=function(){var e=this;return n.a.createElement(H.a,{disableHeight:!0},function(t){var r=t.width;return n.a.createElement(H.d,{width:r,height:750,deferredMeasurementCache:e.cache,rowRenderer:e.renderItem,overscanRowCount:3,estimatedRowSize:180,rowHeight:e.cache.rowHeight,rowCount:e.state.data.length})})},a}(n.a.Component);function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"default",function(){return S});var S=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).state={checked0:!0,checked1:!1,checked2:!1,checked3:!1,checked4:!1,active:"0"},r.change=r.change.bind(O(O(r))),r}r=e,(t=a).prototype=Object.create(r.prototype),(t.prototype.constructor=t).__proto__=r;var i=a.prototype;return i.change=function(e){this.setState({active:e.target.value})},i.getList=function(){switch(this.state.active){case"0":return n.a.createElement(p,null);case"1":return n.a.createElement(g,null);case"2":return n.a.createElement(b,null);case"3":return n.a.createElement(z,null);case"4":return n.a.createElement(C,null)}},i.render=function(){return n.a.createElement("div",null,n.a.createElement("h3",{style:{marginLeft:"20px"}},"Select the impletation of virtual list："),n.a.createElement("p",{className:"selection"},n.a.createElement("label",{htmlFor:"0"},n.a.createElement("input",{type:"radio",checked:"0"===this.state.active,value:"0",id:"0",onChange:this.change}),n.a.createElement("a",{href:"https://github.com/dwqs/react-virtual-list",target:"_blank",rel:"noopener noreferrer"},"VirtualizedList")),n.a.createElement("label",{htmlFor:"1"},n.a.createElement("input",{type:"radio",checked:"1"===this.state.active,value:"1",id:"1",onChange:this.change}),n.a.createElement("a",{href:"https://github.com/developerdizzle/react-virtual-list",target:"_blank",rel:"noopener noreferrer"},"ReactVirtualList")),n.a.createElement("label",{htmlFor:"2"},n.a.createElement("input",{type:"radio",checked:"2"===this.state.active,value:"2",id:"2",onChange:this.change}),n.a.createElement("a",{href:"https://github.com/clauderic/react-tiny-virtual-list",target:"_blank",rel:"noopener noreferrer"},"TinyVirtualList")),n.a.createElement("label",{htmlFor:"3"},n.a.createElement("input",{type:"radio",checked:"3"===this.state.active,value:"3",id:"3",onChange:this.change}),n.a.createElement("a",{href:"https://github.com/bvaughn/react-virtualized",target:"_blank",rel:"noopener noreferrer"},"ReactVirtualized")),n.a.createElement("label",{htmlFor:"4"},n.a.createElement("input",{type:"radio",checked:"4"===this.state.active,value:"4",id:"4",onChange:this.change}),n.a.createElement("a",{href:"https://github.com/bvaughn/react-window",target:"_blank",rel:"noopener noreferrer"},"ReactWindow"))),n.a.createElement("div",{className:"list-container",id:"list-container"},this.getList()))},a}(n.a.Component)},iSXX:function(e,t,r){"use strict";var a=r("DQ1c"),n=r.n(a),i=[],o=[],c=[];t.a=function(e,t){void 0===e&&(e=0),void 0===t&&(t=!0);for(var r=[],a=e;a<e+200;a++){var l=100*(1+Math.random()),s=100*(1+Math.random());r.push({id:a,image:t?c[a]||(c[a]="http://picsum.photos/"+Math.trunc(l)+"/"+Math.trunc(s)):void 0,words:i[a]||(i[a]=n.a.lorem.words()),paragraphs:o[a]||(o[a]=Math.random()<=.5?n.a.lorem.paragraphs():n.a.lorem.sentences())})}return r}}}]);