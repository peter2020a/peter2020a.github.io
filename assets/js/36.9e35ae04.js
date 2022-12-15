(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{308:function(a,t,r){"use strict";r.r(t);var s=r(13),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"centos7中根据文件大小排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7中根据文件大小排序"}},[a._v("#")]),a._v(" centos7中根据文件大小排序")]),a._v(" "),t("h3",{attrs:{id:"按照文件大小降序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照文件大小降序"}},[a._v("#")]),a._v(" 按照文件大小降序")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("du * -sh | sort -hr #h 表示以人可读的形式显示出来\n")])])]),t("h3",{attrs:{id:"按创建时间排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按创建时间排序"}},[a._v("#")]),a._v(" 按创建时间排序")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -alc # 按创建时间排序\n")])])]),t("h3",{attrs:{id:"查看文件大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件大小"}},[a._v("#")]),a._v(" 查看文件大小")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("du -sh # 查看文件大小\n")])])]),t("h3",{attrs:{id:"根据文件的创建时间-修改时间-排序升序-取前100条-并且指定匹配名称为数字的-并删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据文件的创建时间-修改时间-排序升序-取前100条-并且指定匹配名称为数字的-并删除"}},[a._v("#")]),a._v(" 根据文件的创建时间（修改时间）排序升序，取前100条，并且指定匹配名称为数字的，并删除")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm -rf `ls -lc | head -n 100 | grep -w '[1-9]'`\n")])])]),t("h3",{attrs:{id:"查询时间段为2016年3月01号到2017年4月8号内的名称为数字的目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询时间段为2016年3月01号到2017年4月8号内的名称为数字的目录"}},[a._v("#")]),a._v(" 查询时间段为2016年3月01号到2017年4月8号内的名称为数字的目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("find . -type d -newermt '01 Mar 2016' ! -newermt '08 Apr 2017' -print | grep -w '[1-9]*'\n")])])]),t("h3",{attrs:{id:"显示文件时-包含年月日"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示文件时-包含年月日"}},[a._v("#")]),a._v(" 显示文件时，包含年月日")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -l --time-style=full\n")])])]),t("p",[a._v("–time-style参数：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("full-iso 精确显示年月日时分秒纳秒及时区\nlong-iso 显示年月日时分\niso 默认就是iso，显示月日时分\nlocale 按当前系统环境区域设置显示\n+Format 自定义格式显示\n")])])]),t("h3",{attrs:{id:"full-iso显示效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-iso显示效果"}},[a._v("#")]),a._v(" full-iso显示效果：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -l --time-style=full-iso\n\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.912981382 +0800 公共\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.911981382 +0800 模板\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.912981382 +0800 视频\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.912981382 +0800 图片\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.912981382 +0800 文档\ndrwxr-xr-x. 2 yutao yutao 172 2017-04-05 18:51:58.592643038 +0800 下载\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.912981382 +0800 音乐\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02:00.911981382 +0800 桌面\n")])])]),t("h3",{attrs:{id:"long-iso显示效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#long-iso显示效果"}},[a._v("#")]),a._v(" long-iso显示效果")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -l --time-style=long-iso\n\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 公共\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 模板\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 视频\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 图片\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 文档\ndrwxr-xr-x. 2 yutao yutao 172 2017-04-05 18:51 下载\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 音乐\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:02 桌面\n")])])]),t("h3",{attrs:{id:"自定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[a._v("#")]),a._v(" 自定义")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ls -l --time-style="+%Y-%m-%d %H:%l:%S"\n\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 公共\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 模板\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 视频\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 图片\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 文档\ndrwxr-xr-x. 2 yutao yutao 172 2017-04-05 18: 6:58 下载\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 音乐\ndrwxr-xr-x. 2 yutao yutao   6 2017-03-21 11:11:00 桌面\n')])])]),t("h3",{attrs:{id:"查询7天前改动的文件夹-并列出详情、排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询7天前改动的文件夹-并列出详情、排序"}},[a._v("#")]),a._v(" 查询7天前改动的文件夹，并列出详情、排序")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@master01 builds]# find . -mtime +7 -type d -ls|sort\n\n435016    4 drwxr-xr-x   2 jenkins  jenkins      4096 Apr 10 16:42 ./456\n435045    4 drwxr-xr-x   2 jenkins  jenkins      4096 Apr 11 12:00 ./457\n435051    4 drwxr-xr-x   2 jenkins  jenkins      4096 Apr 11 13:56 ./458\n435062    4 drwxr-xr-x   2 jenkins  jenkins      4096 Apr 11 16:11 ./459\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);