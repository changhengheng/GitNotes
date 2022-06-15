(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{424:function(t,i,v){t.exports=v.p+"assets/img/areas.93c7eec3.png"},438:function(t,i,v){"use strict";v.r(i);var _=v(65),a=Object(_.a)({},(function(){var t=this,i=t.$createElement,_=t._self._c||i;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"git是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git是什么"}},[t._v("#")]),t._v(" Git是什么")]),t._v(" "),_("p",[t._v("Git 把数据看作是对小型文件系统的一系列"),_("strong",[t._v("快照")]),t._v("。 在 Git 中，每当你提交更新或保存项目状态时，它基本上就会对当时的全部文件创建一个快照并保存这个快照的"),_("strong",[t._v("索引")]),t._v("。 为了效率，如果文件没有修改，Git 不再重新存储该文件，而是只保留"),_("strong",[t._v("一个链接")]),t._v("指向之前存储的文件。 Git 对待数据更像是一个"),_("strong",[t._v("快照流")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"近乎所有操作都是本地执行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#近乎所有操作都是本地执行"}},[t._v("#")]),t._v(" 近乎所有操作都是本地执行")]),t._v(" "),_("p",[t._v("在 Git 中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其它计算机的信息。在本地磁盘上就有项目的完整历史，所以大部分操作看起来瞬间完成。")]),t._v(" "),_("p",[t._v("这也意味着你在离线或者没有 VPN 时，几乎可以进行任何操作，因为本地仓库包含了一个项目的完整历史。")]),t._v(" "),_("h2",{attrs:{id:"索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),_("p",[t._v("Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名")]),t._v(" "),_("h2",{attrs:{id:"git-一般只添加数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-一般只添加数据"}},[t._v("#")]),t._v(" Git 一般只添加数据")]),t._v(" "),_("p",[t._v("你执行的 Git 操作，几乎只往 Git 数据库中添加数据。你很难使用 Git 从数据库中删除数据，也就是说 Git 几乎不会执行任何可能导致文件不可恢复的操作。")]),t._v(" "),_("h2",{attrs:{id:"三种状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三种状态"}},[t._v("#")]),t._v(" 三种状态")]),t._v(" "),_("p",[t._v("请记住下面这些关于 Git 的概念。 Git 有三种状态，你的文件可能处于其中之一： 已提交（committed）、已修改（modified） 和 已暂存（staged）。")]),t._v(" "),_("ul",[_("li",[t._v("已修改表示修改了文件，但还没保存到数据库中。")]),t._v(" "),_("li",[t._v("已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。")]),t._v(" "),_("li",[t._v("已提交表示数据已经安全地保存在本地数据库中。")])]),t._v(" "),_("p",[t._v("这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。\n"),_("img",{attrs:{src:v(424),alt:"工作目录、暂存区域以及 Git 仓库"}})]),t._v(" "),_("p",[t._v("工作区是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。")]),t._v(" "),_("p",[t._v("暂存区是一个文件，保存了下次将要提交的文件列表信息，一般在 Git 仓库目录中。 按照 Git 的术语叫做“索引”，不过一般说法还是叫“暂存区”。")]),t._v(" "),_("p",[t._v("Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，复制的就是这里的数据。")]),t._v(" "),_("p",[t._v("基本的 Git 工作流程如下：")]),t._v(" "),_("ol",[_("li",[t._v("在工作区中修改文件。")]),t._v(" "),_("li",[t._v("将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。")]),t._v(" "),_("li",[t._v("提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。")])]),t._v(" "),_("p",[t._v("如果 Git 目录中保存着特定版本的文件，就属于 已提交 状态。 如果文件已修改并放入暂存区，就属于 已暂存 状态。 如果自上次检出后，作了修改但还没有放到暂存区域，就是 已修改 状态。")])])}),[],!1,null,null,null);i.default=a.exports}}]);