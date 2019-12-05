(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(3),c=a.n(i),o=(a(15),a(1)),s=a.n(o),l=a(4),u=a(5),m=a(6),d=a(8),p=a(7),h=a(9),y=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Weather Finder"),n.a.createElement("p",null,"Find out temperature, conditions and more..."))},v=function(e){return n.a.createElement("div",{className:"base-form"},n.a.createElement("form",{onSubmit:e.getWeather},n.a.createElement("input",{type:"text",name:"city",placeholder:"City.."}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country.."}),n.a.createElement("button",null,"Get Weather")))},f=function(e){var t="https://www.countryflags.io/".concat(e.country,"/flat/64.png");return n.a.createElement("div",{className:"base-results"},e.country&&n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{src:t,alt:"flag icon"})),e.city&&e.country&&n.a.createElement("p",{className:"cityName"},e.city,", ",e.country),e.temperature&&n.a.createElement("p",null,"Temperature: ",e.temperature,"C"),e.humidity&&n.a.createElement("p",null,"Humidity: ",e.humidity,"%"),e.description&&n.a.createElement("p",null,e.description," at the moment"),e.error&&n.a.createElement("p",{className:"errors"},e.error))},E="84bbec1fd3edc563ed8114ba5fbd2eb8",w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},a.getWeather=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.elements.city.value,n=t.target.elements.country.value,e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&APPID=").concat(E,"&units=metric"));case 5:return i=e.sent,e.next=8,i.json();case 8:c=e.sent,r&&n?"404"===c.cod?a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"We could not find the given city in the given country, please try again"}):(o=c.weather[0].description.charAt(0).toUpperCase()+c.weather[0].description.slice(1),a.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:o,error:""})):a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please fill the values"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"base"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"titles"},n.a.createElement("div",{className:"title-container"},n.a.createElement(y,null))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"form-container"},n.a.createElement(v,{getWeather:this.getWeather}),n.a.createElement("div",{className:"results"},n.a.createElement(f,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b4f57796.chunk.js.map