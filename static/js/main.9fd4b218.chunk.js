(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(295)},172:function(e,t,a){},173:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),o=a.n(r),m=(a(172),a(135)),c=a(136),u=a(137),s=a(156),i=a(138),h=a(157),E=a(305),d=a(310),p=a(308),y=a(306),C=a(51),g=a(307),b=a(309),I=a(296),v=(a(173),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e,t){var n=t.name,l=t.value;return a.setState(Object(m.a)({},n,l))},a.handleReset=function(){a.setState({amount:"",termYear:"",termMonth:"",rateInt:"",rateDecimal:""})},a.calculateMonthlyPayment=function(){if(""===a.state.amount||""===a.state.termYear||""===a.state.termMonth||""===a.state.rateInt||""===a.state.rateDecimal)return"";var e=parseInt(a.state.amount),t=parseInt(a.state.termYear),n=parseInt(a.state.termMonth),l={monthlyPayment:0,monthlyInterest:0,totalInterest:0,totalAmount:0},r=.01*(parseInt(a.state.rateInt)+parseFloat("."+a.state.rateDecimal))/12,o=12*t+n,m=e*(r/(1-Math.pow(1+r,-1*o)));return l.monthlyPayment=m,l.totalAmount=m*o,l.monthlyInterest=(l.totalAmount-e)/o,l.totalInterest=l.monthlyInterest*o,l},a.state={amount:"",termYear:"",termMonth:"",rateInt:"",rateDecimal:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.calculateMonthlyPayment();return l.a.createElement(E.a,{className:"App-container"},l.a.createElement("p",null,"Use our loan calculator to make estimating your monthly payment easy. Just enter the loan amount, the term of the loan, and the interest rate. See how much loan you can afford!"),l.a.createElement(d.a,{columns:1,stackable:!0},l.a.createElement(d.a.Column,null,l.a.createElement(p.a,null,l.a.createElement(p.a.Field,{inline:!0},l.a.createElement("label",null,"Loan Amount"),l.a.createElement(y.a,{labelPosition:"right",type:"text",placeholder:"Amount...",name:"amount",value:this.state.amount,onChange:this.handleChange},l.a.createElement(C.a,{basic:!0},"$"),l.a.createElement("input",null),l.a.createElement(C.a,null,".00"))),l.a.createElement(p.a.Group,{inline:!0,className:"App-group"},l.a.createElement("label",null,"Loan Term"),l.a.createElement(p.a.Field,null,l.a.createElement(y.a,{type:"text",labelPosition:"right",placeholder:"Years...",name:"termYear",value:this.state.termYear,onChange:this.handleChange})),l.a.createElement(p.a.Field,null,l.a.createElement(y.a,{labelPosition:"right",type:"text",placeholder:"Months...",name:"termMonth",value:this.state.termMonth,onChange:this.handleChange},l.a.createElement(C.a,{className:"App-label"},"Years"),l.a.createElement("input",null),l.a.createElement(C.a,null,"Months")))),l.a.createElement(p.a.Group,{inline:!0,className:"App-group"},l.a.createElement("label",null,"Loan Rate"),l.a.createElement(p.a.Field,null,l.a.createElement(y.a,{type:"text",labelPosition:"right",placeholder:"Rate...",name:"rateInt",value:this.state.rateInt,onChange:this.handleChange})),l.a.createElement(p.a.Field,null,l.a.createElement(y.a,{labelPosition:"right",placeholder:"Rate...",type:"text",name:"rateDecimal",value:this.state.rateDecimal,onChange:this.handleChange},l.a.createElement(C.a,{className:"App-label"},"."),l.a.createElement("input",null),l.a.createElement(C.a,null,"%")))))),l.a.createElement(d.a.Column,null,l.a.createElement(g.a,null)),l.a.createElement(d.a.Column,null,l.a.createElement(b.a,{unstackable:!0},l.a.createElement(b.a.Header,null,l.a.createElement(b.a.Row,null,l.a.createElement(b.a.HeaderCell,null,"Monthly Payment"),l.a.createElement(b.a.HeaderCell,null,"Monthly Interest"),l.a.createElement(b.a.HeaderCell,null,"Interest Paid"),l.a.createElement(b.a.HeaderCell,null,"Amount Paid"))),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Cell,null,""===e?"N/A":e.monthlyPayment.toFixed(2)),l.a.createElement(b.a.Cell,null,""===e?"N/A":e.monthlyInterest.toFixed(2)),l.a.createElement(b.a.Cell,null,""===e?"N/A":e.totalInterest.toFixed(2)),l.a.createElement(b.a.Cell,null,""===e?"N/A":e.totalAmount.toFixed(2))))),l.a.createElement(I.a,{onClick:this.handleReset},"Clear Form"))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.9fd4b218.chunk.js.map