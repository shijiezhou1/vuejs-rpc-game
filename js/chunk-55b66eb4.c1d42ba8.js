(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55b66eb4"],{"0db9":function(t,e,s){t.exports=s.p+"img/paper.f62eb127.png"},"347f":function(t,e,s){},6345:function(t,e,s){"use strict";var c=s("347f"),o=s.n(c);o.a},"75ea":function(t,e,s){t.exports=s.p+"img/rock.ff9755e5.png"},"98eb":function(t,e,s){t.exports=s.p+"img/scissors.064637ec.png"},b301:function(t,e,s){"use strict";var c=s("d039");t.exports=function(t,e){var s=[][t];return!s||!c((function(){s.call(null,e||function(){throw 1},1)}))}},c975:function(t,e,s){"use strict";var c=s("23e7"),o=s("4d64").indexOf,r=s("b301"),n=[].indexOf,i=!!n&&1/[1].indexOf(1,-0)<0,l=r("indexOf");c({target:"Array",proto:!0,forced:i||l},{indexOf:function(t){return i?n.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d025:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("svg",{staticClass:"progress-ring",attrs:{width:"120",height:"120"}},[c("circle",{staticClass:"progress-ring__circle",attrs:{stroke:"white","stroke-width":"10",fill:"transparent",r:"52",cx:"60",cy:"60"}}),c("text",{attrs:{x:"50%",y:"50%","text-anchor":"middle",stroke:"white","text-size":""}},[t._v(" "+t._s(t.clock)+" ")]),c("text",{attrs:{x:"50%",y:"70%","text-anchor":"middle",stroke:"white"}},[t._v("Timer")])]),c("h3",[t._v("Computer")]),c("hr"),c("h3",[t._v("Player")]),c("h3",{staticClass:"choose"},[t._v("Choose your move")]),c("button",{on:{click:function(e){return t.choose("rock")}}},[c("img",{staticClass:"gameIcons",attrs:{src:s("75ea")}})]),c("button",{on:{click:function(e){return t.choose("paper")}}},[c("img",{staticClass:"gameIcons",attrs:{src:s("0db9")}})]),c("button",{on:{click:function(e){return t.choose("scissors")}}},[c("img",{staticClass:"gameIcons",attrs:{src:s("98eb")}})])])},o=[],r=(s("c975"),{data:function(){return{gameMode:"playercomputer",userSelect:null,userSelectIndex:null,computerSelect:null,computerSelectIndex:null,selections:["rock","paper","scissors"],resultMsg:{t:"Tie",w:"You Win!",l:"You Lose!"},results:[["t","w","l"],["l","t","w"],["w","l","t"]],clock:null}},created:function(){this.clock=5,this.computerRandomSelect(),this.clockCountDown()},methods:{choose:function(t){this.userSelect=t,this.userSelectIndex=this.selections.indexOf(this.userSelect),this.results[this.computerSelectIndex][this.userSelectIndex]},computerRandomSelect:function(){this.computerSelect=this.selections[Math.floor(Math.random()*this.selections.length)],this.computerSelectIndex=this.selections.indexOf(this.computerSelect)},clockCountDown:function(){var t=this;setInterval((function(){0!=t.clock&&(t.clock-=1,t.clock<=0&&(t.clock=0,t.redirectAndStoreResult(t)))}),1e3)},redirectAndStoreResult:function(t){t.$store.commit("setGameMode",{gameMode:this.gameMode,userPick:this.userSelect,computerPick:this.computerSelect,result:this.results[this.computerSelectIndex][this.userSelectIndex],msg:this.resultMsg[this.results[this.computerSelectIndex][this.userSelectIndex]]}),t.$router.push({path:"/result"})}}}),n=r,i=(s("6345"),s("2877")),l=Object(i["a"])(n,c,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-55b66eb4.c1d42ba8.js.map