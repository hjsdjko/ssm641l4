(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"008b":function(e,r,t){var i=t("fcd1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("3e05ada5",i,!0,{sourceMap:!1,shadowMode:!1})},"1a55":function(e,r,t){"use strict";var i=t("008b"),n=t.n(i);n.a},3735:function(e,r,t){"use strict";t.r(r);var i=t("69e2"),n=t("48c7");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("1a55");var o,u=t("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"42633004",null,!1,i["a"],o);r["default"]=l.exports},"48c7":function(e,r,t){"use strict";t.r(r);var i=t("4e2d"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},"4e2d":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("96cf");var n=i(t("3b8d")),a={data:function(){return{ruleForm:{},tableName:""}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],r=uni.getStorageSync("loginTable"),this.tableName=r,this.styleChange();case 4:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.huiyuanzhanghao||"huiyuan"!=this.tableName){e.next=3;break}return this.$utils.msg("会员账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"huiyuan"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("huiyuan"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=9;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 9:if("huiyuan"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 12:if("huiyuan"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=15;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 15:if("huiyuan"!=this.tableName||!this.ruleForm.jifen||this.$validate.isNumber(this.ruleForm.jifen)){e.next=18;break}return this.$utils.msg("积分应输入数字"),e.abrupt("return");case 18:if("huiyuan"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){e.next=21;break}return this.$utils.msg("余额应输入数字"),e.abrupt("return");case 21:if("shangjia"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=24;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 24:if("shangjia"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=27;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 27:if("shangjia"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=30;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 30:if("shangjia"!=this.tableName||!this.ruleForm.jifen||this.$validate.isNumber(this.ruleForm.jifen)){e.next=33;break}return this.$utils.msg("积分应输入数字"),e.abrupt("return");case 33:if("shangjia"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){e.next=36;break}return this.$utils.msg("余额应输入数字"),e.abrupt("return");case 36:return e.next=38,this.$api.register("".concat(this.tableName),this.ruleForm);case 38:this.$utils.msgBack("注册成功");case 40:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()}};r.default=a},"69e2":function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[e._e(),"huiyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"会员账号"},model:{value:e.ruleForm.huiyuanzhanghao,callback:function(r){e.$set(e.ruleForm,"huiyuanzhanghao",r)},expression:"ruleForm.huiyuanzhanghao"}})],1):e._e(),"huiyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1):e._e(),"huiyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"会员姓名"},model:{value:e.ruleForm.huiyuanxingming,callback:function(r){e.$set(e.ruleForm,"huiyuanxingming",r)},expression:"ruleForm.huiyuanxingming"}})],1):e._e(),"huiyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1):e._e(),"huiyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(r){e.$set(e.ruleForm,"youxiang",r)},expression:"ruleForm.youxiang"}})],1):e._e(),"huiyuan"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:e.ruleForm.shenfenzheng,callback:function(r){e.$set(e.ruleForm,"shenfenzheng",r)},expression:"ruleForm.shenfenzheng"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"商家账号"},model:{value:e.ruleForm.shangjiazhanghao,callback:function(r){e.$set(e.ruleForm,"shangjiazhanghao",r)},expression:"ruleForm.shangjiazhanghao"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(r){e.$set(e.ruleForm,"youxiang",r)},expression:"ruleForm.youxiang"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:e.ruleForm.shenfenzheng,callback:function(r){e.$set(e.ruleForm,"shenfenzheng",r)},expression:"ruleForm.shenfenzheng"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"商铺名称"},model:{value:e.ruleForm.shangpumingcheng,callback:function(r){e.$set(e.ruleForm,"shangpumingcheng",r)},expression:"ruleForm.shangpumingcheng"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"商铺地址"},model:{value:e.ruleForm.shangpudizhi,callback:function(r){e.$set(e.ruleForm,"shangpudizhi",r)},expression:"ruleForm.shangpudizhi"}})],1):e._e(),"shangjia"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"经营范围"},model:{value:e.ruleForm.jingyingfanwei,callback:function(r){e.$set(e.ruleForm,"jingyingfanwei",r)},expression:"ruleForm.jingyingfanwei"}})],1):e._e(),t("v-uni-view",[t("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(242, 199, 68, 1)",borderRadius:"6rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0px",fontSize:"30rpx",borderStyle:"solid",height:"76rpx"},attrs:{type:"primary"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},fcd1:function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-42633004]{padding:%?100?%}.content[data-v-42633004]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20210319/b8394cadb54b46f3b5bdcad6f3ad3aa9.jpg);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-42633004]{text-align:center}.logo uni-image[data-v-42633004]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-42633004]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-42633004]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-42633004]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-42633004]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-42633004]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-42633004]{color:#b49950}.picker-select-input[data-v-42633004]{line-height:%?80?%}',""]),e.exports=r}}]);