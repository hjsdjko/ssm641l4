(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinxinxi-add-or-update"],{"02b4":function(r,e,i){var t=i("93c9");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var n=i("4f06").default;n("9bcdec44",t,!0,{sourceMap:!1,shadowMode:!1})},"565d":function(r,e,i){"use strict";i.r(e);var t=i("89ca"),n=i("f9f4");for(var a in n)"default"!==a&&function(r){i.d(e,r,(function(){return n[r]}))}(a);i("bab5");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"0af9bac2",null,!1,t["a"],o);e["default"]=u.exports},"89ca":function(r,e,i){"use strict";var t={"w-picker":i("e2b1").default},n=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商品名称")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:r.ruleForm.shangpinmingcheng,callback:function(e){r.$set(r.ruleForm,"shangpinmingcheng",e)},expression:"ruleForm.shangpinmingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.shangpintupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[r._v("商品图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.shangpintupian?i("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:r.ruleForm.shangpintupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商品类型")]),i("v-uni-picker",{attrs:{value:r.shangpinleixingIndex,range:r.shangpinleixingOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.shangpinleixingChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.shangpinleixing?r.ruleForm.shangpinleixing:"请选择商品类型"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商家账号")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangjiazhanghao,placeholder:"商家账号"},model:{value:r.ruleForm.shangjiazhanghao,callback:function(e){r.$set(r.ruleForm,"shangjiazhanghao",e)},expression:"ruleForm.shangjiazhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商铺名称")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangpumingcheng,placeholder:"商铺名称"},model:{value:r.ruleForm.shangpumingcheng,callback:function(e){r.$set(r.ruleForm,"shangpumingcheng",e)},expression:"ruleForm.shangpumingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商品原价")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangpinyuanjia,placeholder:"商品原价"},model:{value:r.ruleForm.shangpinyuanjia,callback:function(e){r.$set(r.ruleForm,"shangpinyuanjia",e)},expression:"ruleForm.shangpinyuanjia"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商品现价")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangpinxianjia,placeholder:"商品现价"},model:{value:r.ruleForm.shangpinxianjia,callback:function(e){r.$set(r.ruleForm,"shangpinxianjia",e)},expression:"ruleForm.shangpinxianjia"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("团购最低人数")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.tuangouzuidirenshu,placeholder:"团购最低人数"},model:{value:r.ruleForm.tuangouzuidirenshu,callback:function(e){r.$set(r.ruleForm,"tuangouzuidirenshu",e)},expression:"ruleForm.tuangouzuidirenshu"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商品折扣")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shangpinzhekou,placeholder:"商品折扣"},model:{value:r.ruleForm.shangpinzhekou,callback:function(e){r.$set(r.ruleForm,"shangpinzhekou",e)},expression:"ruleForm.shangpinzhekou"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("团购开始时间")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"团购开始时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("tuangoukaishishijian")}},model:{value:r.ruleForm.tuangoukaishishijian,callback:function(e){r.$set(r.ruleForm,"tuangoukaishishijian",e)},expression:"ruleForm.tuangoukaishishijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("团购结束时间")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"团购结束时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("tuangoujieshushijian")}},model:{value:r.ruleForm.tuangoujieshushijian,callback:function(e){r.$set(r.ruleForm,"tuangoujieshushijian",e)},expression:"ruleForm.tuangoujieshushijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("可提货点")]),i("v-uni-picker",{attrs:{value:r.ketihuodianIndex,range:r.ketihuodianOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.ketihuodianChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.ketihuodian?r.ruleForm.ketihuodian:"请选择可提货点"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("积分")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.jifen,placeholder:"积分"},model:{value:r.ruleForm.jifen,callback:function(e){r.$set(r.ruleForm,"jifen",e)},expression:"ruleForm.jifen"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("价格")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.price,placeholder:"价格"},model:{value:r.ruleForm.price,callback:function(e){r.$set(r.ruleForm,"price",e)},expression:"ruleForm.price"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("商品描述")]),i("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"200rpx"},attrs:{placeholder:"商品描述"},model:{value:r.ruleForm.shangpinmiaoshu,callback:function(e){r.$set(r.ruleForm,"shangpinmiaoshu",e)},expression:"ruleForm.shangpinmiaoshu"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"tuangoukaishishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.tuangoukaishishijianConfirm.apply(void 0,arguments)}}}),i("w-picker",{ref:"tuangoujieshushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.tuangoujieshushijianConfirm.apply(void 0,arguments)}}}),i("w-picker",{ref:"reversetime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.reversetimeConfirm.apply(void 0,arguments)}}})],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},"93c9":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0af9bac2]{padding:%?20?%}.content[data-v-0af9bac2]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0af9bac2]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0af9bac2]{width:%?180?%}.avator[data-v-0af9bac2]{width:%?150?%;height:%?60?%}.right-input[data-v-0af9bac2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0af9bac2]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0af9bac2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0af9bac2]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0af9bac2]{border:0}.cu-form-group uni-input[data-v-0af9bac2]{padding:0 %?30?%}.uni-input[data-v-0af9bac2]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0af9bac2]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0af9bac2]::after{line-height:%?88?%}.select .uni-input[data-v-0af9bac2]{line-height:%?88?%}.input .right-input[data-v-0af9bac2]{line-height:%?60?%}',""]),r.exports=e},bab5:function(r,e,i){"use strict";var t=i("02b4"),n=i.n(t);n.a},c955:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o={data:function(){return{ruleForm:{shangpinmingcheng:"",shangpintupian:"",shangpinleixing:"",shangjiazhanghao:"",shangpumingcheng:"",shangpinyuanjia:"",shangpinxianjia:"",tuangouzuidirenshu:"",shangpinzhekou:"",tuangoukaishishijian:"",tuangoujieshushijian:"",shangpinmiaoshu:"",ketihuodian:"",reversetime:"",clicknum:"",jifen:"",price:""},shangpinleixingOptions:[],shangpinleixingIndex:0,ketihuodianOptions:[],ketihuodianIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpintupian:!1,shangpinleixing:!1,shangjiazhanghao:!1,shangpumingcheng:!1,shangpinyuanjia:!1,shangpinxianjia:!1,tuangouzuidirenshu:!1,shangpinzhekou:!1,tuangoukaishishijian:!1,tuangoujieshushijian:!1,shangpinmiaoshu:!1,ketihuodian:!1,reversetime:!1,clicknum:!1,jifen:!1,price:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var i,t,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:return t=r.sent,this.user=t.data,this.ruleForm.shangjiazhanghao=this.user.shangjiazhanghao,this.ruleForm.shangpumingcheng=this.user.shangpumingcheng,r.next=9,this.$api.option("shangpinfenlei","shangpinleixing",{});case 9:return t=r.sent,this.shangpinleixingOptions=t.data,r.next=13,this.$api.option("shequtihuodian","tihuodidian",{});case 13:if(t=r.sent,this.ketihuodianOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=23;break}return this.ruleForm.id=e.id,r.next=21,this.$api.info("shangpinxinxi",this.ruleForm.id);case 21:t=r.sent,this.ruleForm=t.data;case 23:if(!e.cross){r.next=98;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 26:if((r.t1=r.t0()).done){r.next=98;break}if(a=r.t1.value,"shangpinmingcheng"!=a){r.next=32;break}return this.ruleForm.shangpinmingcheng=n[a],this.ro.shangpinmingcheng=!0,r.abrupt("continue",26);case 32:if("shangpintupian"!=a){r.next=36;break}return this.ruleForm.shangpintupian=n[a],this.ro.shangpintupian=!0,r.abrupt("continue",26);case 36:if("shangpinleixing"!=a){r.next=40;break}return this.ruleForm.shangpinleixing=n[a],this.ro.shangpinleixing=!0,r.abrupt("continue",26);case 40:if("shangjiazhanghao"!=a){r.next=44;break}return this.ruleForm.shangjiazhanghao=n[a],this.ro.shangjiazhanghao=!0,r.abrupt("continue",26);case 44:if("shangpumingcheng"!=a){r.next=48;break}return this.ruleForm.shangpumingcheng=n[a],this.ro.shangpumingcheng=!0,r.abrupt("continue",26);case 48:if("shangpinyuanjia"!=a){r.next=52;break}return this.ruleForm.shangpinyuanjia=n[a],this.ro.shangpinyuanjia=!0,r.abrupt("continue",26);case 52:if("shangpinxianjia"!=a){r.next=56;break}return this.ruleForm.shangpinxianjia=n[a],this.ro.shangpinxianjia=!0,r.abrupt("continue",26);case 56:if("tuangouzuidirenshu"!=a){r.next=60;break}return this.ruleForm.tuangouzuidirenshu=n[a],this.ro.tuangouzuidirenshu=!0,r.abrupt("continue",26);case 60:if("shangpinzhekou"!=a){r.next=64;break}return this.ruleForm.shangpinzhekou=n[a],this.ro.shangpinzhekou=!0,r.abrupt("continue",26);case 64:if("tuangoukaishishijian"!=a){r.next=68;break}return this.ruleForm.tuangoukaishishijian=n[a],this.ro.tuangoukaishishijian=!0,r.abrupt("continue",26);case 68:if("tuangoujieshushijian"!=a){r.next=72;break}return this.ruleForm.tuangoujieshushijian=n[a],this.ro.tuangoujieshushijian=!0,r.abrupt("continue",26);case 72:if("shangpinmiaoshu"!=a){r.next=76;break}return this.ruleForm.shangpinmiaoshu=n[a],this.ro.shangpinmiaoshu=!0,r.abrupt("continue",26);case 76:if("ketihuodian"!=a){r.next=80;break}return this.ruleForm.ketihuodian=n[a],this.ro.ketihuodian=!0,r.abrupt("continue",26);case 80:if("reversetime"!=a){r.next=84;break}return this.ruleForm.reversetime=n[a],this.ro.reversetime=!0,r.abrupt("continue",26);case 84:if("clicknum"!=a){r.next=88;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,r.abrupt("continue",26);case 88:if("jifen"!=a){r.next=92;break}return this.ruleForm.jifen=n[a],this.ro.jifen=!0,r.abrupt("continue",26);case 92:if("price"!=a){r.next=96;break}return this.ruleForm.price=n[a],this.ro.price=!0,r.abrupt("continue",26);case 96:r.next=26;break;case 98:this.styleChange();case 99:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tuangoukaishishijianConfirm:function(r){console.log(r),this.ruleForm.tuangoukaishishijian=r.result,this.$forceUpdate()},tuangoujieshushijianConfirm:function(r){console.log(r),this.ruleForm.tuangoujieshushijian=r.result,this.$forceUpdate()},reversetimeConfirm:function(r){console.log(r),this.ruleForm.reversetime=r.result,this.$forceUpdate()},shangpinleixingChange:function(r){this.shangpinleixingIndex=r.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},ketihuodianChange:function(r){this.ketihuodianIndex=r.target.value,this.ruleForm.ketihuodian=this.ketihuodianOptions[this.ketihuodianIndex]},shangpintupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.shangpintupian=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.shangpinyuanjia||this.$validate.isIntNumer(this.ruleForm.shangpinyuanjia)){r.next=3;break}return this.$utils.msg("商品原价应输入整数"),r.abrupt("return");case 3:if(!this.ruleForm.shangpinxianjia||this.$validate.isIntNumer(this.ruleForm.shangpinxianjia)){r.next=6;break}return this.$utils.msg("商品现价应输入整数"),r.abrupt("return");case 6:if(!this.ruleForm.tuangouzuidirenshu||this.$validate.isIntNumer(this.ruleForm.tuangouzuidirenshu)){r.next=9;break}return this.$utils.msg("团购最低人数应输入整数"),r.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){r.next=12;break}return this.$utils.msg("点击次数应输入整数"),r.abrupt("return");case 12:if(!this.ruleForm.jifen||this.$validate.isIntNumer(this.ruleForm.jifen)){r.next=15;break}return this.$utils.msg("积分应输入整数"),r.abrupt("return");case 15:if(this.ruleForm.price){r.next=18;break}return this.$utils.msg("价格不能为空"),r.abrupt("return");case 18:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){r.next=21;break}return this.$utils.msg("价格应输入数字"),r.abrupt("return");case 21:if(!this.ruleForm.id){r.next=26;break}return r.next=24,this.$api.update("shangpinxinxi",this.ruleForm);case 24:r.next=28;break;case 26:return r.next=28,this.$api.add("shangpinxinxi",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,n=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},f9f4:function(r,e,i){"use strict";i.r(e);var t=i("c955"),n=i.n(t);for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);e["default"]=n.a}}]);