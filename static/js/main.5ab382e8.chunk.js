(this["webpackJsonpperiodic-table"]=this["webpackJsonpperiodic-table"]||[]).push([[0],{11:function(e,c,t){},13:function(e,c,t){},14:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),l=t(5),s=t.n(l),i=(t(11),t(4)),o=t.n(i),r=t(6),j=t(2),d=(t(13),t(14),t(0));var b=function(e){var c=e.atomNum,t=e.config,n=e.symbol,l=e.elementName,s=e.atomicMass,i=e.group,o=e.atomicRadius,r=e.Boil,b=e.Melt,m=e.BondingType,u=e.Density,h=e.IonEnergy,O=e.Oxidation,x=e.State,f=e.affinity,v=e.negativity,N=(e.value,e.disabletile),g=Object(a.useState)("white"),p=Object(j.a)(g,2),y=p[0],k=p[1],w=Object(a.useState)(!0),M=Object(j.a)(w,2),S=M[0],B=M[1];return Object(a.useEffect)((function(){switch(i){case"nonmetal":k("red");break;case"noble gas":k("blue");break;case"alkali metal":k("green");break;case"alkaline earth metal":k("yellow");break;case"metalloid":k("pink");break;case"halogen":k("teal");break;case"metal":k("palegreen");break;case"transition metal":k("aqua");break;case"lanthanoid":k("blueviolet");break;case"actinoid":k("cornflowerblue");break;case"post-transition metal":k("darkorange")}}),[y]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:N?"disable-tile ":"card-container",onClick:function(){N||B(!1)},style:{borderColor:"".concat(y)},children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{className:"atomicNumber",children:c}),Object(d.jsx)("p",{className:"config",children:t}),Object(d.jsx)("h1",{className:"symbol",style:{color:"".concat(y)},children:n}),Object(d.jsx)("p",{className:"name",children:l}),Object(d.jsx)("p",{className:"mass",children:s})]})}),Object(d.jsx)("div",{className:S?"disable":"modal-container",children:Object(d.jsxs)("div",{className:"modal",style:{borderColor:"".concat(y)},children:[Object(d.jsx)("div",{className:"close",onClick:function(){return B(!0)},style:{color:"".concat(y)},children:"+"}),Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("h1",{className:"element_Symbol",children:n}),Object(d.jsx)("p",{className:"element_name",children:l})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Atomic Number: "}),Object(d.jsxs)("p",{children:[" ",c]})," "]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Atomic Mass: "}),Object(d.jsx)("p",{children:s})," "]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Atomic Radius: "}),Object(d.jsx)("p",{children:o})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Boiling Point: "}),Object(d.jsxs)("p",{children:[" ",r]})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Melting Point: "}),Object(d.jsx)("p",{children:b})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Bonding Type: "}),Object(d.jsxs)("p",{children:[" ",m]})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Density: "}),Object(d.jsxs)("p",{children:[" ",u]})," "]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Electron Affinity: "}),Object(d.jsx)("p",{children:f})," "]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Electron Negativity: "}),Object(d.jsxs)("p",{children:[" ",v]})," "]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("span",{style:{color:"".concat(y)},children:["Electronic Configuration:"," "]}),Object(d.jsxs)("p",{children:[" ",t]})," "]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Group Block: "}),Object(d.jsxs)("p",{children:[" ",i]})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Ionization Energy: "}),Object(d.jsx)("p",{children:h})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Oxidation State: "}),Object(d.jsx)("p",{children:O})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("span",{style:{color:"".concat(y)},children:"Standard State: "}),Object(d.jsx)("p",{children:x})]})]})})]})};var m=function(){var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],n=c[1],l=Object(a.useState)(""),s=Object(j.a)(l,2),i=s[0],m=s[1],u=Object(a.useState)(!1),h=Object(j.a)(u,2),O=(h[0],h[1],function(){var e=Object(r.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://neelpatel05.pythonanywhere.com/",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}));case 2:c=e.sent,t=c,console.log(t),n(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){O()}),[]);var x=function(e,c){return t.map((function(t){return t.atomicNumber>=57&&t.atomicNumber<=71||t.atomicNumber>=89&&t.atomicNumber<=103?null:t.atomicNumber>=e&&t.atomicNumber<=c?Object(d.jsx)(b,{atomNum:t.atomicNumber,atomicMass:t.atomicMass,group:t.groupBlock,symbol:t.symbol,config:t.electronicConfiguration,elementName:t.name,Boil:t.boilingPoint,Melt:t.meltingPoint,BondingType:t.bondingType,atomicRadius:t.atomicRadius,Density:t.density,IonEnergy:t.ionizationEnergy,Oxidation:t.oxidationStates,State:t.standardState,affinity:t.electronAffinity,negativity:t.electronegativity,value:i,disabletile:""!==i&&t.groupBlock!==i},t.atomicNumber):void 0}))},f=function(e,c){return t.map((function(t){if(t.atomicNumber>=e&&t.atomicNumber<=c)return Object(d.jsx)(b,{atomNum:t.atomicNumber,atomicMass:t.atomicMass,group:t.groupBlock,symbol:t.symbol,config:t.electronicConfiguration,elementName:t.name,Boil:t.boilingPoint,Melt:t.meltingPoint,BondingType:t.bondingType,atomicRadius:t.atomicRadius,Density:t.density,IonEnergy:t.ionizationEnergy,Oxidation:t.oxidationStates,State:t.standardState,affinity:t.electronAffinity,negativity:t.electronegativity,value:i,disabletile:""!==i&&t.groupBlock!==i},t.atomicNumber)}))},v=function(e){m(e.target.value)},N=function(e){var c=e.color,t=e.name,a=e.value,n=e.changeValue;return Object(d.jsx)("button",{className:"btn",value:a,style:{color:"".concat(c),borderColor:"".concat(c)},onClick:n,children:t})};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{className:"head",children:"Periodic Table"}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"",color:"white",name:"All"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"metal",color:"palegreen",name:"Metal"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"nonmetal",color:"red",name:"Non Metal"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"noble gas",color:"blue",name:"Noble Gas"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"alkali metal",color:"green",name:"Alkali Metal"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"alkaline earth metal",color:"yellow",name:"Alkaline Earth Metal"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"metalloid",color:"pink",name:"Metalloids"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"halogen",color:"teal",name:"Halogen"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"transition metal",color:"aqua",name:"Transition Metal"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"lanthanoid",color:"blueviolet",name:"Lanthanoids"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"actinoid",color:"cornflowerblue",name:"Actinoids"}),Object(d.jsx)(N,{changeValue:function(e){return v(e)},value:"post-transition metal",color:"darkorange",name:"Post-Transition Metal"})]})]}),Object(d.jsxs)("div",{className:"table",children:[Object(d.jsxs)("div",{className:"row 1",children:[Object(d.jsx)("div",{className:"left",children:x(1,1)}),Object(d.jsx)("div",{className:"right",children:x(2,2)})]}),Object(d.jsxs)("div",{className:"row 2",children:[Object(d.jsx)("div",{className:"left",children:x(3,4)}),Object(d.jsx)("div",{className:"right",children:x(5,10)})]}),Object(d.jsxs)("div",{className:"row 3",children:[Object(d.jsx)("div",{className:"left",children:x(11,12)}),Object(d.jsx)("div",{className:"right",children:x(13,18)})]}),Object(d.jsx)("div",{className:"row 4",children:x(19,36)}),Object(d.jsx)("div",{className:"row 5",children:x(37,54)}),Object(d.jsxs)("div",{className:"row 6",children:[Object(d.jsx)("div",{className:"left",children:x(55,56)}),Object(d.jsx)("div",{className:"right",children:x(72,86)})]}),Object(d.jsxs)("div",{className:"row 7",children:[Object(d.jsx)("div",{className:"left",children:x(87,88)}),Object(d.jsx)("div",{className:"right",children:x(104,118)})]}),Object(d.jsxs)("div",{className:"sub-table",children:[Object(d.jsx)("div",{className:"row",children:f(57,71)}),Object(d.jsx)("div",{className:"row",children:f(89,103)})]})]})]})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5ab382e8.chunk.js.map