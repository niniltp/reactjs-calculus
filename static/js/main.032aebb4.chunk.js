(this.webpackJsonpcalculus=this.webpackJsonpcalculus||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/sfx_wrong.2d714f36.wav"},101:function(e,t,a){e.exports=a.p+"static/media/sfx_swipe.805998a9.wav"},129:function(e,t,a){e.exports=a(142)},134:function(e,t,a){},135:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(11),r=a.n(s),l=(a(134),a(43)),o=(a(135),a(94)),c=a.n(o),u=a(200),m=a(73),d=a(15),p=a(14),h=a(30),g=a.n(h),f=a(55),b=a(45),S=a(46),E=a(52),y=a(51),v=a(211),k=a(214),C=a(109),O=a(215),x=a(62),R=a(197),w=a(95),j=a(219),M=a(143),D=a(192),T=a(198),N=a(190),z=a(226),B=a(191),F=a(221),A=a(195),I=a(199),L=a(196),W=a(220),H=a(216),V=w.rules,P=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleOpen=function(){n.props.handleClose()},n.areRulesValid=function(){return void 0!==n.state.rulesCheckbox.find((function(e){return 0===e.type&&!0===e.checked}))},n.completeRules=function(e){4===e&&n.state.rulesCheckbox[e].checked&&n.setCheckbox(2,!0)},n.handleSave=function(){if(n.areRulesValid()){var e=V.filter((function(e){return n.state.rulesCheckbox[e.id].checked})),t={id:-1,type:-1,title:"max",value:n.state.valueMembersMax};e.push(t),n.props.handleNewRules(e)}else n.newNotification("error","At least one rule must be selected")},n.newNotification=function(e,t){n.setState({notification:{state:!0,type:e,message:t}})},n.setCheckbox=function(e,t){var a=n.state.rulesCheckbox;a[e].checked=t,n.setState({rulesCheckbox:a})},n.handleCheckbox=function(e){n.setCheckbox(e,!n.state.rulesCheckbox[e].checked),n.completeRules(e)},n.setValueMembersMax=function(e){n.setState({valueMembersMax:e})},n.handleSliderChange=function(e,t){n.setValueMembersMax(t)},n.handleInputChange=function(e){n.setValueMembersMax(""===e.target.value?"":Number(e.target.value))},n.handleBlur=function(){n.state.valueMembersMax<0?n.setValueMembersMax(2):n.state.valueMembersMax>1e3&&n.setValueMembersMax(1e3)},n.displaySliderMembersMax=function(){return i.a.createElement(M.a,null,i.a.createElement(N.a,{container:!0,spacing:2,alignItems:"center"},i.a.createElement(N.a,{item:!0},i.a.createElement(C.a,{id:"input-slider",gutterBottom:!0},"Max")),i.a.createElement(N.a,{item:!0,xs:!0},i.a.createElement(z.a,{value:"number"===typeof n.state.valueMembersMax?n.state.valueMembersMax:0,onChange:n.handleSliderChange,"aria-labelledby":"input-slider",min:2,max:1e3,step:10,marks:!0})),i.a.createElement(N.a,{item:!0},i.a.createElement(B.a,{value:n.state.valueMembersMax,margin:"dense",onChange:n.handleInputChange,onBlur:n.handleBlur,inputProps:{step:10,min:2,max:1e3,type:"number","aria-labelledby":"input-slider"}}))))},n.displayRulesCheckbox=function(){return i.a.createElement(M.a,null,n.state.rulesCheckbox.map((function(e){return i.a.createElement(D.a,{key:e.id,control:i.a.createElement(j.a,{name:e.title}),label:e.title,checked:e.checked,onChange:n.handleCheckbox.bind(Object(x.a)(n),e.id)})})))},n.handleCloseNotification=function(){n.setState({notification:{state:!1,type:"",message:""}})},n.displayNotification=function(){if(n.state.notification.state)return i.a.createElement(W.a,{open:n.state.notification.state,autoHideDuration:6e3,onClose:n.handleCloseNotification,anchorOrigin:{vertical:"top",horizontal:"center"}},i.a.createElement(H.a,{onClose:n.handleCloseNotification,severity:n.state.notification.type},n.state.notification.message))},n.displayRules=function(){return i.a.createElement(F.a,{onClose:n.handleOpen,"aria-labelledby":"simple-dialog-title",open:n.props.open},i.a.createElement(O.a,{m:2},i.a.createElement(A.a,null,i.a.createElement(C.a,null,"Rules")),i.a.createElement(L.a,null,i.a.createElement(R.a,{component:"fieldset"},n.displaySliderMembersMax(),n.displayRulesCheckbox())),i.a.createElement(T.a,null),i.a.createElement(I.a,null,i.a.createElement(u.a,{size:"large",onClick:n.handleOpen},"Cancel"),i.a.createElement(u.a,{size:"large",color:"primary",onClick:n.handleSave},"Save"))),n.displayNotification())},n.state={open:!1,rulesCheckbox:[],valueMembersMax:105,notification:{state:!1,type:"",message:""}},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<V.length;t++)e[V[t].id]=Object(p.a)(Object(p.a)({},V[t]),{},{checked:!1});this.setState({rulesCheckbox:e})}},{key:"render",value:function(){return i.a.createElement(O.a,null,this.displayRules())}}]),a}(n.Component),J=a(209),_=a(99),U=a.n(_),X=a(100),$=a.n(X),q=a(101),G=a.n(q),K=a(75),Q=a.n(K),Y=a(76),Z=a.n(Y),ee=a(203),te=a(210),ae=a(38),ne=a(201),ie=a(19),se=a(202),re=a(224),le=a(225),oe=a(222),ce=a(102),ue=a.n(ce),me=a(103),de=a.n(me),pe=a(104),he=a.n(pe),ge=Object(ne.a)((function(e){var t;return{speedDial:(t={position:"absolute"},Object(ae.a)(t,e.breakpoints.only("xs"),{top:e.spacing(2),right:e.spacing(2),direction:"left"}),Object(ae.a)(t,e.breakpoints.up("sm"),{bottom:e.spacing(2),right:e.spacing(2),direction:"up"}),t)}}));function fe(e){var t=Object(ie.a)(),a=Object(se.a)(t.breakpoints.only("xs")),n=ge(),s=i.a.useState(!1),r=Object(l.a)(s,2),o=r[0],c=r[1],u=i.a.useState("up"),m=Object(l.a)(u,2),d=m[0],p=m[1],h=[{icon:i.a.createElement(ue.a,null),name:"Home"},{icon:i.a.createElement(de.a,null),name:"Settings"},{icon:i.a.createElement(he.a,null),name:"Rules"}],g=function(){c(!1)};return i.a.useEffect((function(){p(a?"left":"up")})),i.a.createElement("div",null,i.a.createElement(re.a,{ariaLabel:"SpeedDial openIcon example",className:n.speedDial,hidden:!1,icon:i.a.createElement(le.a,null),onClose:g,onOpen:function(){c(!0)},open:o,direction:d},h.map((function(t){return i.a.createElement(oe.a,{key:t.name,icon:t.icon,tooltipTitle:t.name,onClick:function(){return a=t.name,e.handleAction(a),void g();var a},title:t.name})}))))}var be=a(205),Se=a(217),Ee=a(204),ye=a(206),ve=a(146),ke=a(106),Ce=a.n(ke),Oe=a(107),xe=a.n(Oe),Re=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).handleOpen=function(){n.props.handleClose()},n.handleSave=function(){var e={darkTheme:n.state.settings.darkTheme,buttonsType:n.state.settings.buttonsType,soundOn:n.state.settings.soundOn};n.props.handleNewSettings(e)},n.handleChangeRadio=function(e){var t=e.target;n.setState((function(e){return{settings:Object(p.a)(Object(p.a)({},e.settings),{},Object(ae.a)({},t.name,t.checked))}}))},n.handleChangeSelect=function(e){var t=e.target;n.setState((function(e){return{settings:Object(p.a)(Object(p.a)({},e.settings),{},Object(ae.a)({},t.name,t.value))}}))},n.toggleSound=function(){n.setState((function(e){return{settings:Object(p.a)(Object(p.a)({},e.settings),{},{soundOn:!e.settings.soundOn})}}))},n.displaySettings=function(){return n.state.isLoading?"Loading...":i.a.createElement(F.a,{onClose:n.handleOpen,"aria-labelledby":"simple-dialog-title",open:n.props.open},i.a.createElement(O.a,{m:2},i.a.createElement(A.a,null,i.a.createElement(C.a,null,"Settings")),i.a.createElement(L.a,null,i.a.createElement(O.a,null,i.a.createElement(R.a,{component:"fieldset"},i.a.createElement(Ee.a,{component:"legend"},"Theme"),i.a.createElement(D.a,{control:i.a.createElement(be.a,{color:"primary",checked:n.state.settings.darkTheme,onChange:n.handleChangeRadio,name:"darkTheme"}),label:"Dark Theme"}))),i.a.createElement(O.a,null,i.a.createElement(R.a,{component:"fieldset"},i.a.createElement(Ee.a,{component:"legend"},"Buttons type"),i.a.createElement(ye.a,{row:!0,"aria-label":"position",name:"buttonsType",value:n.state.settings.buttonsType,onChange:n.handleChangeSelect},i.a.createElement(D.a,{value:"heavy",control:i.a.createElement(Se.a,{color:"primary"}),label:"Heavy"}),i.a.createElement(D.a,{value:"light",control:i.a.createElement(Se.a,{color:"primary"}),label:"Light"}),i.a.createElement(D.a,{value:"plainText",control:i.a.createElement(Se.a,{color:"primary"}),label:"Plain text"})))),i.a.createElement(O.a,null,i.a.createElement(R.a,{component:"fieldset"},i.a.createElement(Ee.a,{component:"legend"},"Sound"),i.a.createElement(ve.a,{"aria-label":"confirm",size:"medium",color:"default",onClick:n.toggleSound},n.state.settings.soundOn?i.a.createElement(Ce.a,{fontSize:"inherit"}):i.a.createElement(xe.a,{fontSize:"inherit"}))))),i.a.createElement(T.a,null),i.a.createElement(I.a,null,i.a.createElement(u.a,{size:"large",onClick:n.handleOpen},"Cancel"),i.a.createElement(u.a,{size:"large",color:"primary",onClick:n.handleSave},"Save"))))},n.state={open:!1,isLoading:!0},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({settings:this.props.settings},(function(){e.setState({isLoading:!1})}))}},{key:"render",value:function(){return i.a.createElement(O.a,null,this.displaySettings())}}]),a}(n.Component),we=a(207),je=a(208),Me=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).processRules=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],i=0;case 2:if(!(i<t.length)){e.next=20;break}e.t0=t[i].id,e.next=-1===e.t0?6:0===e.t0?8:1===e.t0?10:2===e.t0?12:3===e.t0?14:16;break;case 6:return n.setState({membersMax:t[i].value}),e.abrupt("break",17);case 8:return a.push("+"),e.abrupt("break",17);case 10:return a.push("-"),e.abrupt("break",17);case 12:return a.push("x"),e.abrupt("break",17);case 14:return a.push("/"),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:i++,e.next=2;break;case 20:a.length>0&&n.setState({symbols:a});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t+1-e))+e},n.hasRule=function(e){for(var t=0;t<n.state.rules.length;t++)if(n.state.rules[t].id===e)return!0;return!1},n.addAllSymbols=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=[]).push("+"),t.push("-"),t.push("x"),t.push("/"),n.setState({symbols:t});case 6:case"end":return e.stop()}}),e)}))),n.loadNewCalculus=function(){var e,t,a,i,s=[],r=0;if(n.state.symbols.length<1?n.addAllSymbols().then((function(){r=n.state.symbols[n.getRandomInt(0,n.state.symbols.length-1)]})):r=n.state.symbols[n.getRandomInt(0,n.state.symbols.length-1)],e="+"===r||"-"===r?0:1,"/"===r)for(i=n.state.membersMax,a=2,s.push(n.getRandomInt(a,i)),s.push(n.getRandomInt(a,i)),s.sort((function(e,t){return t-e})),e=s[0]/s[1];e%1!==0||s[0]===s[1];)s[1]=n.getRandomInt(a,i),s.sort((function(e,t){return t-e})),e=s[0]/s[1];else if("x"===r&&n.hasRule(4)){console.log("Special rule tens digit"),t=n.state.nbMaxMembers,a=n.state.membersMin,i=Math.floor(n.state.membersMax/10);for(var l=n.getRandomInt(a,i),o=0;o<t;o++){var c=void 0;do{c=10*l+n.getRandomInt(1,9)}while(c>n.state.membersMax);s.push(c),e*=s[o]}}else{t=n.state.nbMaxMembers,a=n.state.membersMin,i=n.state.membersMax;for(var u=0;u<t;u++)switch(s.push(n.getRandomInt(a,i)),r){case"+":e+=s[u];break;case"-":0===u?e=s[0]:e-=s[u];break;case"x":e*=s[u]}}n.setState({calculus:{members:s,realResult:e,symbol:r}})},n.handleChange=function(e){var t=e.target.value;n.setFieldResult(t),n.setFieldError(!1,"")},n.handleSubmit=function(e){e.preventDefault(),void 0!==n.state.fieldResult&&""!==n.state.fieldResult?(n.isRightResult(parseFloat(n.state.fieldResult),n.state.calculus.realResult)?n.incrementScoreRight().then((function(){n.updatePrecision(),n.resetFieldResult(),n.loadNewCalculus()})):n.incrementScoreWrong().then((function(){n.updatePrecision()})),n.focusFieldResult()):n.setFieldError(!0,"Empty field")},n.setFieldError=function(e,t){n.setState({fieldError:{state:e,message:t}})},n.updatePrecision=function(){var e;e=n.state.score.right/(n.state.score.right+n.state.score.wrong+n.state.score.skipped)*100,n.setState((function(t){return{score:Object(p.a)(Object(p.a)({},t.score),{},{precision:e.toFixed(2)})}}))},n.incrementScoreRight=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState((function(e){return{score:Object(p.a)(Object(p.a)({},e.score),{},{right:e.score.right+1})}})),n.showBadgeScoring("right"),n.playSoundScoring();case 3:case"end":return e.stop()}}),e)}))),n.incrementScoreWrong=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState((function(e){return{score:Object(p.a)(Object(p.a)({},e.score),{},{wrong:e.score.wrong+1})}})),n.showBadgeScoring("wrong"),n.playSoundWrongAnswer();case 3:case"end":return e.stop()}}),e)}))),n.incrementScoreSkipped=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState((function(e){return{score:Object(p.a)(Object(p.a)({},e.score),{},{skipped:e.score.skipped+1})}}),(function(){n.updatePrecision()})),n.showBadgeScoring("skip"),n.playSoundSkip();case 3:case"end":return e.stop()}}),e)}))),n.handleSkip=function(e){e.preventDefault(),n.incrementScoreSkipped().then((function(){n.resetFieldResult(),n.loadNewCalculus()}))},n.resetFieldResult=function(){n.setFieldResult("")},n.focusFieldResult=function(){n.fieldResult.current.focus()},n.setFieldResult=function(e){n.setState({fieldResult:e})},n.isRightResult=function(e,t){return e===t},n.displayCalculus=function(){return n.state.calculus.members.join(" "+n.state.calculus.symbol+" ")},n.displayScore=function(){return i.a.createElement(O.a,{mt:4},i.a.createElement(we.a,null,i.a.createElement(je.a,null,i.a.createElement(C.a,null,"R: ",n.state.score.right," - W: ",n.state.score.wrong," - S: ",n.state.score.skipped),i.a.createElement(C.a,null,"P: ",n.state.score.precision," %"))))},n.playSound=function(e){n.state.settings.soundOn&&e.play()},n.playSoundScoring=function(){var e=new Audio(U.a);n.playSound(e)},n.playSoundWrongAnswer=function(){var e=new Audio($.a);n.playSound(e)},n.playSoundSkip=function(){var e=new Audio(G.a);n.playSound(e)},n.displayNotification=function(){if(n.state.notification.state)return i.a.createElement(W.a,{open:n.state.notification.state,autoHideDuration:6e3,onClose:n.handleCloseNotification,anchorOrigin:{vertical:"top",horizontal:"center"}},i.a.createElement(H.a,{onClose:n.handleCloseNotification,severity:n.state.notification.type},n.state.notification.message))},n.newNotification=function(e,t){n.setState({notification:{state:!0,type:e,message:t}})},n.handleCloseNotification=function(){n.setState({notification:{state:!1,type:"",message:""}})},n.updateRules=function(e){n.toggleRulesDialog(),n.setState({rules:e},(function(){n.processRules(e).then((function(){n.loadNewCalculus()}))})),n.newNotification("success","The new rules have been saved")},n.updateSettings=function(e){n.toggleSettingsDialog(),n.props.handleDarkTheme(e.darkTheme),n.props.handleButtonsType(e.buttonsType),n.props.handleSoundOn(e.soundOn),n.setSettings(e),n.newNotification("success","The new settings have been saved")},n.setSettings=function(e){n.setState({settings:e})},n.showBadgeScoring=function(e){n.setState({badgeScoring:{state:!0,type:e}})},n.hideBadgeScore=function(){n.setState({badgeScoring:{state:!1,type:""}})},n.displayBadgeScoring=function(){var e;switch(n.state.badgeScoring.type){case"right":e="+1";break;case"wrong":e="X";break;case"skip":e="miss";break;default:e=""}return i.a.createElement(W.a,{open:n.state.badgeScoring.state,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:1e3,TransitionComponent:n.TransitionUp,onClose:n.hideBadgeScore},i.a.createElement(J.a,{badgeContent:e}))},n.TransitionUp=function(e){return i.a.createElement(te.a,Object.assign({},e,{direction:"up"}))},n.toggleRulesDialog=function(){n.setState((function(e){return{speedDial:Object(p.a)(Object(p.a)({},e.speedDial),{},{rules:!e.speedDial.rules})}}))},n.toggleSettingsDialog=function(){n.setState((function(e){return{speedDial:Object(p.a)(Object(p.a)({},e.speedDial),{},{settings:!e.speedDial.settings})}}))},n.toggleHome=function(){n.setState((function(e){return{speedDial:Object(p.a)(Object(p.a)({},e.speedDial),{},{home:!e.speedDial.home})}}))},n.goToHome=function(){if(n.state.speedDial.home)return i.a.createElement(d.a,{to:{pathname:"/"}})},n.handleSpeedDialMenu=function(e){switch(e){case"Home":n.toggleHome();break;case"Settings":n.toggleSettingsDialog();break;case"Rules":n.toggleRulesDialog()}},n.displayButtonsAction=function(){switch(n.state.settings.buttonsType){case"heavy":return i.a.createElement(O.a,{mt:2},i.a.createElement(ee.a,{color:"primary","aria-label":"add",style:{marginRight:"1rem"},onClick:n.handleSubmit},i.a.createElement(Q.a,{fontSize:"large"})),i.a.createElement(ee.a,{color:"secondary","aria-label":"add"},i.a.createElement(Z.a,{fontSize:"large",onClick:n.handleSkip})));case"light":return i.a.createElement(O.a,{mt:2},i.a.createElement(ve.a,{"aria-label":"confirm",size:"large",color:"primary",style:{marginRight:"1rem"},onClick:n.handleSubmit},i.a.createElement(Q.a,{fontSize:"large"})),i.a.createElement(ve.a,{"aria-label":"confirm",size:"large",color:"secondary",onClick:n.handleSkip},i.a.createElement(Z.a,{fontSize:"large"})));case"plainText":return i.a.createElement(O.a,{mt:2},i.a.createElement(u.a,{variant:"contained",color:"primary",size:"large",style:{marginRight:"1rem",minWidth:"7rem"},type:"submit",onClick:n.handleSubmit},"Confirm"),i.a.createElement(u.a,{variant:"contained",color:"secondary",size:"large",style:{minWidth:"7rem"},type:"submit",onClick:n.handleSkip},"Skip"));default:return i.a.createElement(O.a,{mt:2},i.a.createElement(ee.a,{color:"primary","aria-label":"add",style:{marginRight:"1rem"},onClick:n.handleSubmit},i.a.createElement(Q.a,{fontSize:"large"})),i.a.createElement(ee.a,{color:"secondary","aria-label":"add"},i.a.createElement(Z.a,{fontSize:"large",onClick:n.handleSkip})))}},n.displayDialogs=function(){return i.a.createElement(O.a,null,i.a.createElement(P,{open:n.state.speedDial.rules,handleNewRules:n.updateRules,handleClose:n.toggleRulesDialog}),i.a.createElement(Re,{open:n.state.speedDial.settings,handleNewSettings:n.updateSettings,handleClose:n.toggleSettingsDialog,settings:n.state.settings}),i.a.createElement(fe,{handleAction:n.handleSpeedDialMenu}))},n.state={isLoading:!0,fieldResult:"",fieldError:{state:!1,message:""},score:{right:0,wrong:0,skipped:0,precision:0},membersMin:2,membersMax:105,nbMaxMembers:2,symbols:["+"],calculus:{members:[],realResult:0,symbol:""},rules:[],badgeScoring:{state:!1,type:""},speedDial:{settings:!1,rules:!1},notification:{state:!1,type:"",message:""}},n.fieldResult=i.a.createRef(),n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({settings:{darkTheme:this.props.settings.darkTheme,buttonsType:this.props.settings.buttonsType,soundOn:this.props.settings.soundOn}},(function(){e.setState({isLoading:!1})})),this.loadNewCalculus()}},{key:"render",value:function(){return this.state.isLoading?"Loading...":i.a.createElement("div",null,i.a.createElement(v.a,{maxWidth:"sm",className:"Calculus"},this.displayBadgeScoring(),i.a.createElement(O.a,{mb:5},i.a.createElement(C.a,{variant:"h3",component:"h2"},this.displayCalculus())),i.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},i.a.createElement(O.a,null,i.a.createElement(k.a,{id:"filled-basic",variant:"filled",type:"number",autoFocus:!0,value:this.state.fieldResult,onChange:this.handleChange,error:this.state.fieldError.state,helperText:this.state.fieldError.state?this.state.fieldError.message:" ",ref:this.fieldResult})),this.displayButtonsAction()),this.displayScore()),this.displayDialogs(),this.goToHome(),this.displayNotification())}}]),a}(n.Component),De=a(108),Te=a(212),Ne=a(213),ze=!0,Be="heavy",Fe=!0;function Ae(){return i.a.createElement(O.a,null,i.a.createElement(O.a,{px:5},i.a.createElement(C.a,{variant:"h3",component:"h2"},"Welcome to Calculus")),i.a.createElement(O.a,{m:1},i.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"})),i.a.createElement(O.a,null,i.a.createElement(u.a,{variant:"contained",color:"primary",size:"large",component:m.b,to:"/play"},"Let's start !")))}var Ie=function(){var e=Object(n.useState)(ze),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(Be),o=Object(l.a)(r,2),c=o[0],u=o[1],p=Object(n.useState)(Fe),h=Object(l.a)(p,2),g=h[0],f=h[1],b=Object(De.a)({palette:{type:a?"dark":"light",background:{default:a?"#282c34":"#fafafa"}}}),S={darkTheme:a,buttonsType:c,soundOn:g};return i.a.createElement(Te.a,{theme:b},i.a.createElement(Ne.a,null),i.a.createElement(m.a,{basename:"/reactjs-calculus"},i.a.createElement("div",{className:"App"},i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/",exact:!0},i.a.createElement(Ae,null)),i.a.createElement(d.b,{path:"/play",render:function(e){return i.a.createElement(Me,Object.assign({},e,{handleDarkTheme:s,settings:S,handleButtonsType:u,handleSoundOn:f}))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},95:function(e){e.exports=JSON.parse('{"rules":[{"id":0,"type":0,"title":"+ (addition)"},{"id":1,"type":0,"title":"- (substraction)"},{"id":2,"type":0,"title":"x (multiplication)"},{"id":3,"type":0,"title":"/ (division)"},{"id":4,"type":1,"title":"same tens digit (for multiplication)"}]}')},99:function(e,t,a){e.exports=a.p+"static/media/sfx_right.0482e8d8.wav"}},[[129,1,2]]]);
//# sourceMappingURL=main.032aebb4.chunk.js.map