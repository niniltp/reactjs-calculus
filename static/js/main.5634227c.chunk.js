(this.webpackJsonpcalculus=this.webpackJsonpcalculus||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/sfx_swipe.805998a9.wav"},129:function(e,t,a){e.exports=a(142)},134:function(e,t,a){},135:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r),l=(a(134),a(53)),o=(a(135),a(93)),c=a.n(o),u=a(199),m=a(73),d=a(15),p=a(14),h=a(30),g=a.n(h),f=a(54),b=a(43),S=a(44),E=a(50),y=a(49),v=a(209),k=a(212),C=a(109),O=a(213),x=a(62),w=a(196),R=a(94),M=a(217),j=a(143),D=a(191),T=a(197),N=a(189),z=a(222),B=a(190),A=a(219),I=a(194),F=a(198),L=a(195),W=a(220),H=a(214),V=R.rules,P=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleOpen=function(){n.props.handleClose()},n.areRulesValid=function(){return void 0!==n.state.rulesCheckbox.find((function(e){return 0===e.type&&!0===e.checked}))},n.completeRules=function(e){4===e&&n.state.rulesCheckbox[e].checked&&n.setCheckbox(2,!0)},n.handleSave=function(){if(n.areRulesValid()){var e=V.filter((function(e){return n.state.rulesCheckbox[e.id].checked})),t={id:-1,type:-1,title:"max",value:n.state.valueMembersMax};e.push(t),n.props.handleNewRules(e)}else n.newNotification("error","At least one rule must be selected")},n.newNotification=function(e,t){n.setState({notification:{state:!0,type:e,message:t}})},n.setCheckbox=function(e,t){var a=n.state.rulesCheckbox;a[e].checked=t,n.setState({rulesCheckbox:a})},n.handleCheckbox=function(e){n.setCheckbox(e,!n.state.rulesCheckbox[e].checked),n.completeRules(e)},n.setValueMembersMax=function(e){n.setState({valueMembersMax:e})},n.handleSliderChange=function(e,t){n.setValueMembersMax(t)},n.handleInputChange=function(e){n.setValueMembersMax(""===e.target.value?"":Number(e.target.value))},n.handleBlur=function(){n.state.valueMembersMax<0?n.setValueMembersMax(2):n.state.valueMembersMax>1e3&&n.setValueMembersMax(1e3)},n.displaySliderMembersMax=function(){return i.a.createElement(j.a,null,i.a.createElement(N.a,{container:!0,spacing:2,alignItems:"center"},i.a.createElement(N.a,{item:!0},i.a.createElement(C.a,{id:"input-slider",gutterBottom:!0},"Max")),i.a.createElement(N.a,{item:!0,xs:!0},i.a.createElement(z.a,{value:"number"===typeof n.state.valueMembersMax?n.state.valueMembersMax:0,onChange:n.handleSliderChange,"aria-labelledby":"input-slider",min:2,max:1e3,step:10,marks:!0})),i.a.createElement(N.a,{item:!0},i.a.createElement(B.a,{value:n.state.valueMembersMax,margin:"dense",onChange:n.handleInputChange,onBlur:n.handleBlur,inputProps:{step:10,min:2,max:1e3,type:"number","aria-labelledby":"input-slider"}}))))},n.displayRulesCheckbox=function(){return i.a.createElement(j.a,null,n.state.rulesCheckbox.map((function(e){return i.a.createElement(D.a,{key:e.id,control:i.a.createElement(M.a,{name:e.title}),label:e.title,checked:e.checked,onChange:n.handleCheckbox.bind(Object(x.a)(n),e.id)})})))},n.handleCloseNotification=function(){n.setState({notification:{state:!1,type:"",message:""}})},n.displayNotification=function(){if(n.state.notification.state)return i.a.createElement(W.a,{open:n.state.notification.state,autoHideDuration:6e3,onClose:n.handleCloseNotification,anchorOrigin:{vertical:"top",horizontal:"center"}},i.a.createElement(H.a,{onClose:n.handleCloseNotification,severity:n.state.notification.type},n.state.notification.message))},n.displayRules=function(){return i.a.createElement(A.a,{onClose:n.handleOpen,"aria-labelledby":"simple-dialog-title",open:n.props.open},i.a.createElement(O.a,{m:2},i.a.createElement(I.a,null,i.a.createElement(C.a,null,"Rules")),i.a.createElement(L.a,null,i.a.createElement(w.a,{component:"fieldset"},n.displaySliderMembersMax(),n.displayRulesCheckbox())),i.a.createElement(T.a,null),i.a.createElement(F.a,null,i.a.createElement(u.a,{size:"large",onClick:n.handleOpen},"Cancel"),i.a.createElement(u.a,{size:"large",color:"primary",onClick:n.handleSave},"Save"))),n.displayNotification())},n.state={open:!1,rulesCheckbox:[],valueMembersMax:105,notification:{state:!1,type:"",message:""}},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<V.length;t++)e[V[t].id]=Object(p.a)(Object(p.a)({},V[t]),{},{checked:!1});this.setState({rulesCheckbox:e})}},{key:"render",value:function(){return i.a.createElement(O.a,null,this.displayRules())}}]),a}(n.Component),J=a(207),_=a(98),U=a.n(_),X=a(99),$=a.n(X),q=a(100),G=a.n(q),K=a(75),Q=a.n(K),Y=a(76),Z=a.n(Y),ee=a(201),te=a(208),ae=a(200),ne=a(223),ie=a(224),re=a(218),se=a(101),le=a.n(se),oe=a(102),ce=a.n(oe),ue=a(103),me=a.n(ue),de=Object(ae.a)((function(e){return{speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}}));function pe(e){var t=de(),a=i.a.useState(!1),n=Object(l.a)(a,2),r=n[0],s=n[1],o=[{icon:i.a.createElement(le.a,null),name:"Home"},{icon:i.a.createElement(ce.a,null),name:"Settings"},{icon:i.a.createElement(me.a,null),name:"Rules"}],c=function(){s(!1)};return i.a.createElement("div",null,i.a.createElement(ne.a,{ariaLabel:"SpeedDial openIcon example",className:t.speedDial,hidden:!1,icon:i.a.createElement(ie.a,null),onClose:c,onOpen:function(){s(!0)},open:r},o.map((function(t){return i.a.createElement(re.a,{key:t.name,icon:t.icon,tooltipTitle:t.name,onClick:function(){return a=t.name,e.handleAction(a),void c();var a},title:t.name})}))))}var he=a(56),ge=a(203),fe=a(216),be=a(202),Se=a(204),Ee=a(145),ye=a(105),ve=a.n(ye),ke=a(106),Ce=a.n(ke),Oe=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleOpen=function(){n.props.handleClose()},n.handleSave=function(){var e={darkTheme:n.state.settings.darkTheme,buttonsType:n.state.settings.buttonsType,soundOn:n.state.settings.soundOn};n.props.handleNewSettings(e)},n.handleChangeRadio=function(e){var t=e.target;n.setState((function(e){return{settings:Object(p.a)(Object(p.a)({},e.settings),{},Object(he.a)({},t.name,t.checked))}}))},n.handleChangeSelect=function(e){var t=e.target;n.setState((function(e){return{settings:Object(p.a)(Object(p.a)({},e.settings),{},Object(he.a)({},t.name,t.value))}}))},n.toggleSound=function(){n.setState((function(e){return{settings:Object(p.a)(Object(p.a)({},e.settings),{},{soundOn:!e.settings.soundOn})}}))},n.displaySettings=function(){return n.state.isLoading?"Loading...":i.a.createElement(A.a,{onClose:n.handleOpen,"aria-labelledby":"simple-dialog-title",open:n.props.open},i.a.createElement(O.a,{m:2},i.a.createElement(I.a,null,i.a.createElement(C.a,null,"Settings")),i.a.createElement(L.a,null,i.a.createElement(O.a,null,i.a.createElement(w.a,{component:"fieldset"},i.a.createElement(be.a,{component:"legend"},"Theme"),i.a.createElement(D.a,{control:i.a.createElement(ge.a,{color:"primary",checked:n.state.settings.darkTheme,onChange:n.handleChangeRadio,name:"darkTheme"}),label:"Dark Theme"}))),i.a.createElement(O.a,null,i.a.createElement(w.a,{component:"fieldset"},i.a.createElement(be.a,{component:"legend"},"Buttons type"),i.a.createElement(Se.a,{row:!0,"aria-label":"position",name:"buttonsType",value:n.state.settings.buttonsType,onChange:n.handleChangeSelect},i.a.createElement(D.a,{value:"heavy",control:i.a.createElement(fe.a,{color:"primary"}),label:"Heavy"}),i.a.createElement(D.a,{value:"light",control:i.a.createElement(fe.a,{color:"primary"}),label:"Light"}),i.a.createElement(D.a,{value:"plainText",control:i.a.createElement(fe.a,{color:"primary"}),label:"Plain text"})))),i.a.createElement(O.a,null,i.a.createElement(w.a,{component:"fieldset"},i.a.createElement(be.a,{component:"legend"},"Sound"),i.a.createElement(Ee.a,{"aria-label":"confirm",size:"medium",color:"default",onClick:n.toggleSound},n.state.settings.soundOn?i.a.createElement(ve.a,{fontSize:"inherit"}):i.a.createElement(Ce.a,{fontSize:"inherit"}))))),i.a.createElement(T.a,null),i.a.createElement(F.a,null,i.a.createElement(u.a,{size:"large",onClick:n.handleOpen},"Cancel"),i.a.createElement(u.a,{size:"large",color:"primary",onClick:n.handleSave},"Save"))))},n.state={open:!1,isLoading:!0},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({settings:this.props.settings},(function(){e.setState({isLoading:!1})}))}},{key:"render",value:function(){return i.a.createElement(O.a,null,this.displaySettings())}}]),a}(n.Component),xe=a(205),we=a(206),Re=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).processRules=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],i=0;case 2:if(!(i<t.length)){e.next=20;break}e.t0=t[i].id,e.next=-1===e.t0?6:0===e.t0?8:1===e.t0?10:2===e.t0?12:3===e.t0?14:16;break;case 6:return n.setState({membersMax:t[i].value}),e.abrupt("break",17);case 8:return a.push("+"),e.abrupt("break",17);case 10:return a.push("-"),e.abrupt("break",17);case 12:return a.push("x"),e.abrupt("break",17);case 14:return a.push("/"),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:i++,e.next=2;break;case 20:a.length>0&&n.setState({symbols:a});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t+1-e))+e},n.hasRule=function(e){for(var t=0;t<n.state.rules.length;t++)if(n.state.rules[t].id===e)return!0;return!1},n.addAllSymbols=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=[]).push("+"),t.push("-"),t.push("x"),t.push("/"),n.setState({symbols:t});case 6:case"end":return e.stop()}}),e)}))),n.loadNewCalculus=function(){var e,t,a,i,r=[],s=0;if(n.state.symbols.length<1?n.addAllSymbols().then((function(){s=n.state.symbols[n.getRandomInt(0,n.state.symbols.length-1)]})):s=n.state.symbols[n.getRandomInt(0,n.state.symbols.length-1)],e="+"===s||"-"===s?0:1,"/"===s)for(i=n.state.membersMax,a=2,r.push(n.getRandomInt(a,i)),r.push(n.getRandomInt(a,i)),r.sort((function(e,t){return t-e})),e=r[0]/r[1];e%1!==0||r[0]===r[1];)r[1]=n.getRandomInt(a,i),r.sort((function(e,t){return t-e})),e=r[0]/r[1];else if("x"===s&&n.hasRule(4)){console.log("Special rule tens digit"),t=n.state.nbMaxMembers,a=n.state.membersMin,i=Math.floor(n.state.membersMax/10);for(var l=n.getRandomInt(a,i),o=0;o<t;o++){var c=void 0;do{c=10*l+n.getRandomInt(1,9)}while(c>n.state.membersMax);r.push(c),e*=r[o]}}else{t=n.state.nbMaxMembers,a=n.state.membersMin,i=n.state.membersMax;for(var u=0;u<t;u++)switch(r.push(n.getRandomInt(a,i)),s){case"+":e+=r[u];break;case"-":0===u?e=r[0]:e-=r[u];break;case"x":e*=r[u]}}n.setState({calculus:{members:r,realResult:e,symbol:s}})},n.handleChange=function(e){var t=e.target.value;n.setFieldResult(t),n.setFieldError(!1,"")},n.handleSubmit=function(e){e.preventDefault(),void 0!==n.state.fieldResult&&""!==n.state.fieldResult?n.isRightResult(parseFloat(n.state.fieldResult),n.state.calculus.realResult)?n.incrementScoreRight().then((function(){n.updatePrecision(),n.resetFieldResult(),n.loadNewCalculus()})):n.incrementScoreWrong().then((function(){n.updatePrecision()})):n.setFieldError(!0,"Empty field")},n.setFieldError=function(e,t){n.setState({fieldError:{state:e,message:t}})},n.updatePrecision=function(){var e;e=n.state.score.right/(n.state.score.right+n.state.score.wrong+n.state.score.skipped)*100,n.setState((function(t){return{score:Object(p.a)(Object(p.a)({},t.score),{},{precision:e.toFixed(2)})}}))},n.incrementScoreRight=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState((function(e){return{score:Object(p.a)(Object(p.a)({},e.score),{},{right:e.score.right+1})}})),n.showBadgeScoring("right"),n.playSoundScoring();case 3:case"end":return e.stop()}}),e)}))),n.incrementScoreWrong=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState((function(e){return{score:Object(p.a)(Object(p.a)({},e.score),{},{wrong:e.score.wrong+1})}})),n.showBadgeScoring("wrong"),n.playSoundWrongAnswer();case 3:case"end":return e.stop()}}),e)}))),n.incrementScoreSkipped=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState((function(e){return{score:Object(p.a)(Object(p.a)({},e.score),{},{skipped:e.score.skipped+1})}}),(function(){n.updatePrecision()})),n.showBadgeScoring("skip"),n.playSoundSkip();case 3:case"end":return e.stop()}}),e)}))),n.handleSkip=function(e){e.preventDefault(),n.incrementScoreSkipped().then((function(){n.resetFieldResult(),n.loadNewCalculus()}))},n.resetFieldResult=function(){n.setFieldResult("")},n.setFieldResult=function(e){n.setState({fieldResult:e})},n.isRightResult=function(e,t){return e===t},n.displayCalculus=function(){return n.state.calculus.members.join(" "+n.state.calculus.symbol+" ")},n.displayScore=function(){return i.a.createElement(O.a,{mt:4},i.a.createElement(xe.a,null,i.a.createElement(we.a,null,i.a.createElement(C.a,null,"R: ",n.state.score.right," - W: ",n.state.score.wrong," - S: ",n.state.score.skipped),i.a.createElement(C.a,null,"P: ",n.state.score.precision," %"))))},n.playSound=function(e){n.state.settings.soundOn&&e.play()},n.playSoundScoring=function(){var e=new Audio(U.a);n.playSound(e)},n.playSoundWrongAnswer=function(){var e=new Audio($.a);n.playSound(e)},n.playSoundSkip=function(){var e=new Audio(G.a);n.playSound(e)},n.displayNotification=function(){if(n.state.notification.state)return i.a.createElement(W.a,{open:n.state.notification.state,autoHideDuration:6e3,onClose:n.handleCloseNotification,anchorOrigin:{vertical:"top",horizontal:"center"}},i.a.createElement(H.a,{onClose:n.handleCloseNotification,severity:n.state.notification.type},n.state.notification.message))},n.newNotification=function(e,t){n.setState({notification:{state:!0,type:e,message:t}})},n.handleCloseNotification=function(){n.setState({notification:{state:!1,type:"",message:""}})},n.updateRules=function(e){n.toggleRulesDialog(),n.setState({rules:e},(function(){n.processRules(e).then((function(){n.loadNewCalculus()}))})),n.newNotification("success","The new rules have been saved")},n.updateSettings=function(e){n.toggleSettingsDialog(),n.props.handleDarkTheme(e.darkTheme),n.props.handleButtonsType(e.buttonsType),n.props.handleSoundOn(e.soundOn),n.setSettings(e),n.newNotification("success","The new settings have been saved")},n.setSettings=function(e){n.setState({settings:e})},n.showBadgeScoring=function(e){n.setState({badgeScoring:{state:!0,type:e}})},n.hideBadgeScore=function(){n.setState({badgeScoring:{state:!1,type:""}})},n.displayBadgeScoring=function(){var e;switch(n.state.badgeScoring.type){case"right":e="+1";break;case"wrong":e="X";break;case"skip":e="miss";break;default:e=""}return i.a.createElement(W.a,{open:n.state.badgeScoring.state,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:1e3,TransitionComponent:n.TransitionUp,onClose:n.hideBadgeScore},i.a.createElement(J.a,{badgeContent:e}))},n.TransitionUp=function(e){return i.a.createElement(te.a,Object.assign({},e,{direction:"up"}))},n.toggleRulesDialog=function(){n.setState((function(e){return{speedDial:Object(p.a)(Object(p.a)({},e.speedDial),{},{rules:!e.speedDial.rules})}}))},n.toggleSettingsDialog=function(){n.setState((function(e){return{speedDial:Object(p.a)(Object(p.a)({},e.speedDial),{},{settings:!e.speedDial.settings})}}))},n.toggleHome=function(){n.setState((function(e){return{speedDial:Object(p.a)(Object(p.a)({},e.speedDial),{},{home:!e.speedDial.home})}}))},n.goToHome=function(){if(n.state.speedDial.home)return i.a.createElement(d.a,{to:{pathname:"/"}})},n.handleSpeedDialMenu=function(e){switch(e){case"Home":n.toggleHome();break;case"Settings":n.toggleSettingsDialog();break;case"Rules":n.toggleRulesDialog()}},n.displayButtonsAction=function(){switch(n.state.settings.buttonsType){case"heavy":return i.a.createElement(O.a,{mt:2},i.a.createElement(ee.a,{color:"primary","aria-label":"add",style:{marginRight:"1rem"},onClick:n.handleSubmit},i.a.createElement(Q.a,{fontSize:"large"})),i.a.createElement(ee.a,{color:"secondary","aria-label":"add"},i.a.createElement(Z.a,{fontSize:"large",onClick:n.handleSkip})));case"light":return i.a.createElement(O.a,{mt:2},i.a.createElement(Ee.a,{"aria-label":"confirm",size:"large",color:"primary",style:{marginRight:"1rem"},onClick:n.handleSubmit},i.a.createElement(Q.a,{fontSize:"large"})),i.a.createElement(Ee.a,{"aria-label":"confirm",size:"large",color:"secondary",onClick:n.handleSkip},i.a.createElement(Z.a,{fontSize:"large"})));case"plainText":return i.a.createElement(O.a,{mt:2},i.a.createElement(u.a,{variant:"contained",color:"primary",size:"large",style:{marginRight:"1rem",minWidth:"7rem"},type:"submit",onClick:n.handleSubmit},"Confirm"),i.a.createElement(u.a,{variant:"contained",color:"secondary",size:"large",style:{minWidth:"7rem"},type:"submit",onClick:n.handleSkip},"Skip"));default:return i.a.createElement(O.a,{mt:2},i.a.createElement(ee.a,{color:"primary","aria-label":"add",style:{marginRight:"1rem"},onClick:n.handleSubmit},i.a.createElement(Q.a,{fontSize:"large"})),i.a.createElement(ee.a,{color:"secondary","aria-label":"add"},i.a.createElement(Z.a,{fontSize:"large",onClick:n.handleSkip})))}},n.displayDialogs=function(){return i.a.createElement(O.a,null,i.a.createElement(P,{open:n.state.speedDial.rules,handleNewRules:n.updateRules,handleClose:n.toggleRulesDialog}),i.a.createElement(Oe,{open:n.state.speedDial.settings,handleNewSettings:n.updateSettings,handleClose:n.toggleSettingsDialog,settings:n.state.settings}),i.a.createElement(pe,{handleAction:n.handleSpeedDialMenu}))},n.state={isLoading:!0,fieldResult:"",fieldError:{state:!1,message:""},score:{right:0,wrong:0,skipped:0,precision:0},membersMin:2,membersMax:105,nbMaxMembers:2,symbols:["+"],calculus:{members:[],realResult:0,symbol:""},rules:[],badgeScoring:{state:!1,type:""},speedDial:{settings:!1,rules:!1},notification:{state:!1,type:"",message:""}},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({settings:{darkTheme:this.props.settings.darkTheme,buttonsType:this.props.settings.buttonsType,soundOn:this.props.settings.soundOn}},(function(){e.setState({isLoading:!1})})),this.loadNewCalculus()}},{key:"render",value:function(){return this.state.isLoading?"Loading...":i.a.createElement("div",null,i.a.createElement(v.a,{maxWidth:"sm",className:"Calculus"},this.displayBadgeScoring(),i.a.createElement(O.a,{mb:5},i.a.createElement(C.a,{variant:"h3",component:"h2"},this.displayCalculus())),i.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},i.a.createElement(O.a,null,i.a.createElement(k.a,{id:"filled-basic",variant:"filled",type:"number",autoFocus:!0,value:this.state.fieldResult,onChange:this.handleChange,error:this.state.fieldError.state,helperText:this.state.fieldError.state?this.state.fieldError.message:" "})),this.displayButtonsAction()),this.displayScore()),this.displayDialogs(),this.goToHome(),this.displayNotification())}}]),a}(n.Component),Me=a(107),je=a(210),De=a(211),Te=!0,Ne="heavy",ze=!0;function Be(){return i.a.createElement(O.a,null,i.a.createElement(O.a,null,i.a.createElement(C.a,{variant:"h3",component:"h2"},"Welcome to Calculus")),i.a.createElement(O.a,{m:1},i.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"})),i.a.createElement(O.a,null,i.a.createElement(u.a,{variant:"contained",color:"primary",size:"large",component:m.b,to:"/play"},"Let's start !")))}var Ae=function(){var e=Object(n.useState)(Te),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(Ne),o=Object(l.a)(s,2),c=o[0],u=o[1],p=Object(n.useState)(ze),h=Object(l.a)(p,2),g=h[0],f=h[1],b=Object(Me.a)({palette:{type:a?"dark":"light",background:{default:a?"#282c34":"#fafafa"}}}),S={darkTheme:a,buttonsType:c,soundOn:g};return i.a.createElement(je.a,{theme:b},i.a.createElement(De.a,null),i.a.createElement(m.a,{basename:"/reactjs-calculus"},i.a.createElement("div",{className:"App"},i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/",exact:!0},i.a.createElement(Be,null)),i.a.createElement(d.b,{path:"/play",render:function(e){return i.a.createElement(Re,Object.assign({},e,{handleDarkTheme:r,settings:S,handleButtonsType:u,handleSoundOn:f}))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},94:function(e){e.exports=JSON.parse('{"rules":[{"id":0,"type":0,"title":"+ (addition)"},{"id":1,"type":0,"title":"- (substraction)"},{"id":2,"type":0,"title":"x (multiplication)"},{"id":3,"type":0,"title":"/ (division)"},{"id":4,"type":1,"title":"same tens digit (for multiplication)"}]}')},98:function(e,t,a){e.exports=a.p+"static/media/sfx_right.0482e8d8.wav"},99:function(e,t,a){e.exports=a.p+"static/media/sfx_wrong.2d714f36.wav"}},[[129,1,2]]]);
//# sourceMappingURL=main.5634227c.chunk.js.map