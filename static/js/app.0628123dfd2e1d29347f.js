webpackJsonp([1],{"5egf":function(t,e){},Cu31:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),r=s("mvHQ"),n=s.n(r),a=s("fZjL"),o=s.n(a),l={components:{},data:function(){return{}},props:{results:{type:Object,required:!0}},methods:{getStringMedia:function(t){var e=this.parseWidth(t);return e[0]+"px to "+e[1]+"px"},parseWidth:function(t){return t.split("x")},clearResults:function(t){this.$emit("on-clear",t)},removeRow:function(t,e){var s="row"+t+"_"+e;console.log(this.$refs[s]),this.$refs[s][0].className+=" will-remove",this.$emit("on-remove",t,e)},isEmptyObject:function(t){return 0===o()(t).length},formatCopyString:function(t,e){var s=this.parseWidth(e),i=this.getDiffInSizes(t),r=this.getDiffInWidth(s);return"font-size: calc("+t.minSize+"px + "+i+" * (100vw - "+s[0]+"px) / "+r+")"},getDiffInSizes:function(t){return t.maxSize-t.minSize},getDiffInWidth:function(t){return t[0]-t[1]},copySuccess:function(t){var e=this;this.$refs[t][0].className+=" copied",setTimeout(function(){try{e.$refs[t][0].classList.remove("copied")}catch(t){console.log(t)}},2e3)}}},c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.results,function(e,i){return s("div",{key:i,staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h6",{staticClass:"text-muted text-uppercase m-b-0"},[t._v(t._s(t.getStringMedia(i)))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"results-block"},[s("div",{staticClass:"results-table"},[s("div",{staticClass:"results-table-row"},[s("div",{staticClass:"results-table-column"},[t._v("Max Size")]),t._v(" "),s("div",{staticClass:"results-table-column"},[t._v("Min Size")]),t._v(" "),s("div",{staticClass:"results-table-column"},[t._v("CSS String")]),t._v(" "),s("div",{staticClass:"results-table-column text-right"},[s("span",[t._v(" ")]),t._v(" "),s("button",{staticClass:"clear-btn",attrs:{title:"Remove"},on:{click:function(e){e.preventDefault(),t.clearResults(i)}}},[t._v("x")])])]),t._v(" "),t._l(e,function(e,r){return s("div",{key:r,ref:"row"+i+"_"+r,refInFor:!0,staticClass:"results-table-row"},[s("div",{staticClass:"results-table-column"},[t._v(t._s(e.maxSize)+"px")]),t._v(" "),s("div",{staticClass:"results-table-column"},[t._v(t._s(e.minSize)+"px")]),t._v(" "),s("div",{staticClass:"results-table-column"},[s("pre",[t._v(t._s(t.formatCopyString(e,i)))])]),t._v(" "),s("div",{staticClass:"results-table-column text-right"},[s("div",{staticClass:"btn-group-custom"},[s("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.formatCopyString(e,i),expression:"formatCopyString(sizes, index)"}],ref:i+"_"+r,refInFor:!0,staticClass:"btn btn-primary btn-sm",on:{success:function(e){t.copySuccess(i+"_"+r)}}},[t._v("Copy")]),t._v(" "),s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){e.preventDefault(),t.removeRow(i,r)}}},[t._v("Remove")])])])])}),t._v(" "),t._m(0,!0,!1)],2)])])])}))},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider"},[s("hr")])}],m={render:c,staticRenderFns:u},d=m,f=s("VU/8"),v=f(l,d,!1,null,null,null),h=v.exports,p={data:function(){return{isLoaded:!1,hidden:!1}},props:{isInLoading:{type:Boolean,required:!0}},mounted:function(){},methods:{hide:function(){var t=this;setTimeout(function(){t.isLoaded=!0,setTimeout(function(){t.hidden=!0,t.$emit("hideLoader")},500)},1e3)}},watch:{isInLoading:function(t){t||this.hide(),this.hidden=t}}},_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"loader",staticClass:"loader",class:{ready:t.isLoaded},style:{display:t.hidden?"none":"block"}},[s("div",{staticClass:"circle first-circle"}),t._v(" "),s("div",{staticClass:"circle second-circle"})])},b=[],g={render:_,staticRenderFns:b},C=g,x=s("VU/8"),S=x(p,C,!1,null,null,null),y=S.exports,w={components:{ResultsBlock:h,Loader:y},name:"Home",data:function(){return{form:{minWidth:1200,maxWidth:1920,maxSize:28,minSize:16,isReset:!1},results:{},count:1,isInLoading:!0}},mounted:function(){this.fetchResultsFormLocalStorage()},computed:{isValid:function(){for(var t in this.form)if(""===this.form[t]||null===this.form[t])return!1;return!(this.form.minWidth>=this.form.maxWidth||this.form.minSize>=this.form.maxSize)}},methods:{removeRow:function(t,e){var s=this;1===o()(this.results[t]).length?(this.$delete(this.results[t],e),o()(this.results[t]).length||this.$delete(this.results,t),this.updateResultsInLocalStorage()):setTimeout(function(){s.$delete(s.results[t],e),o()(s.results[t]).length||s.$delete(s.results,t),s.updateResultsInLocalStorage()},500)},clearResults:function(t){this.$delete(this.results,t),this.updateResultsInLocalStorage()},fetchResultsFormLocalStorage:function(){var t=void 0;if(window.hasOwnProperty("localStorage"))try{if(t=localStorage.getItem("_results")){var e=JSON.parse(t);this.results=e,this.hideLoader()}else this.hideLoader()}catch(t){console.error(t)}else this.hideLoader()},hideLoader:function(){var t=this;this.$nextTick(function(){t.isInLoading=!1})},updateResultsInLocalStorage:function(){if(window.hasOwnProperty("localStorage"))try{localStorage.setItem("_results",n()(this.results))}catch(t){console.log(t)}},isEmptyObject:function(t){return 0===o()(t).length},resetForm:function(){for(var t in this.form)this.form[t]="isReset"===t?this.form[t]:null},saveForm:function(){if(!this.isValid)return!1;var t=this.form.maxWidth+"x"+this.form.minWidth;this.results.hasOwnProperty(t)||this.$set(this.results,t,{});var e=o()(this.results[t])[o()(this.results[t]).length-1];e=void 0===e?0:parseInt(e)+1;this.results[t];this.$set(this.results[t],e,{maxSize:this.form.maxSize,minSize:this.form.minSize}),this.updateResultsInLocalStorage(),this.form.isReset&&this.resetForm()},isMoreThanFourSymbols:function(t,e,s){t>9999&&(this.form[s]=e)}},watch:{"form.maxWidth":function(t,e){this.isMoreThanFourSymbols(t,e,"maxWidth")},"form.minWidth":function(t,e){this.isMoreThanFourSymbols(t,e,"minWidth")},"form.maxSize":function(t,e){this.isMoreThanFourSymbols(t,e,"maxSize")},"form.minSize":function(t,e){this.isMoreThanFourSymbols(t,e,"minSize")}}},R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Loader",{attrs:{isInLoading:t.isInLoading}}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-4 col-lg-4 col-xl-3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("form",{attrs:{action:"#"}},[s("fieldset",{staticClass:"form-group"},[s("legend",[t._v("Window width:")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"input-group"},[t._m(0,!1,!1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.maxWidth,expression:"form.maxWidth",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"1920",id:"width_max"},domProps:{value:t.form.maxWidth},on:{input:function(e){e.target.composing||t.$set(t.form,"maxWidth",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"input-group"},[t._m(1,!1,!1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.minWidth,expression:"form.minWidth",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"1200",id:"width_min"},domProps:{value:t.form.minWidth},on:{input:function(e){e.target.composing||t.$set(t.form,"minWidth",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])])])]),t._v(" "),s("fieldset",{staticClass:"form-group"},[s("legend",[t._v("Font-size:")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"input-group"},[t._m(2,!1,!1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.maxSize,expression:"form.maxSize",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"28",id:"font_max"},domProps:{value:t.form.maxSize},on:{input:function(e){e.target.composing||t.$set(t.form,"maxSize",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"input-group"},[t._m(3,!1,!1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.minSize,expression:"form.minSize",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"18",id:"font_min"},domProps:{value:t.form.minSize},on:{input:function(e){e.target.composing||t.$set(t.form,"minSize",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.isReset,expression:"form.isReset"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isreset"},domProps:{checked:Array.isArray(t.form.isReset)?t._i(t.form.isReset,null)>-1:t.form.isReset},on:{change:function(e){var s=t.form.isReset,i=e.target,r=!!i.checked;if(Array.isArray(s)){var n=t._i(s,null);i.checked?n<0&&(t.form.isReset=s.concat([null])):n>-1&&(t.form.isReset=s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.form,"isReset",r)}}}),t._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"isreset"}},[t._v("Reset form after save")])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-danger btn-sm btn-block",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.resetForm()}}},[t._v("Reset")])]),t._v(" "),s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-success btn-sm btn-block",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.saveForm()}}},[t._v("OK")])])])])])])]),t._v(" "),s("div",{staticClass:"col-xs-12 col-md-8 col-lg-8 col-xl-9"},[s("transition",{staticClass:"alert-wrapper",attrs:{name:"fade",mode:"out-in"}},[t.isEmptyObject(t.results)?s("div",{staticClass:"alert text-center",attrs:{role:"alert"}},[t._v("Nothing yet")]):t._e()]),t._v(" "),s("ResultsBlock",{attrs:{results:t.results},on:{"on-remove":t.removeRow,"on-clear":t.clearResults}})],1)])],1)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon",attrs:{id:"winWidthMax"}},[s("label",{staticClass:"m-b-0",attrs:{for:"width_max"}},[t._v("Max")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon",attrs:{id:"winWidthMin"}},[s("label",{staticClass:"m-b-0",attrs:{for:"width_min"}},[t._v("Min")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon",attrs:{id:"winWidthMax"}},[s("label",{staticClass:"m-b-0",attrs:{for:"font_max"}},[t._v("Max")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon",attrs:{id:"winWidthMin"}},[s("label",{staticClass:"m-b-0",attrs:{for:"font_min"}},[t._v("Min")])])}],z={render:R,staticRenderFns:$},W=z,L=s("VU/8"),k=L(w,W,!1,null,null,null),I=k.exports,F={name:"app",components:{Home:I}},M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Home")],1)},N=[],E={render:M,staticRenderFns:N},T=E,O=s("VU/8"),P=O(F,T,!1,null,null,null),D=P.exports,U=s("Yk46"),j=s.n(U);s("Cu31"),s("5egf"),s("NYWk");i.a.config.productionTip=!1,i.a.use(j.a),new i.a({el:"#app",template:"<App/>",components:{App:D}})},NYWk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0628123dfd2e1d29347f.js.map