(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),s=n(3),i=n(5),r=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date,timerId:0},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.timerId=window.setInterval((function(){t.setState({time:new Date}),console.info(t.state.time.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);var k=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.setInterval((function(){var e=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}();t.state.hasClock&&console.debug("Renamed from ".concat(t.state.clockName," to ").concat(e)),t.setState({clockName:e})}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(h,{clockName:this.state.clockName,hasClock:this.state.hasClock})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.57813ca5.chunk.js.map