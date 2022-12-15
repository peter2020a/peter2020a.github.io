(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{301:function(a,e,s){"use strict";s.r(e);var t=s(13),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker-快速安装jenkins完美教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-快速安装jenkins完美教程"}},[a._v("#")]),a._v(" Docker 快速安装Jenkins完美教程")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("有人问，为什么要用Jenkins,在一些中小型企业？我说下我以前开发的痛点，每次开发一个项目完成后，需要打包部署，可能没有专门的运维人员，只能开发人员去把项目打成一个war包，可能这个项目已经上线了，需要把服务关，在部署到服务器上，将项目启动起来，这个时候可能某个用户正在操作某些功能上的东西，如果你隔三差五的部署一下，这样的话对用户的体验也不好，自己也是烦的很，总是打包拖到服务器上。希望小型企业工作人员学习一下，配置可能复杂，但是你配置好了之后，你只需要把代码提交到Git或者Svn上，自动构建部署，非常方便。")]),a._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),e("ol",[e("li",[a._v("需要准备一台服务器，大家可以在网上买，个人学习的话还是建议大家去安装一个虚拟机，去装一个Linux系统。")]),a._v(" "),e("li",[a._v("需要准备一个远程连接工具，连接到Linux系统，作者采用的是：Xshell 工具。")]),a._v(" "),e("li",[a._v("安装好docker。")])]),a._v(" "),e("h2",{attrs:{id:"开始安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[a._v("#")]),a._v(" 开始安装")]),a._v(" "),e("ol",[e("li",[a._v("启动docker，下载Jenkins镜像文件")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull jenkins/jenkins\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("创建Jenkins挂载目录并授权权限（我们在服务器上先创建一个jenkins工作目录 /var/jenkins_mount，赋予相应权限，稍后我们将jenkins容器目录挂载到这个目录上，这样我们就可以很方便地对容器内的配置文件进行修改。 如果我们不这样做，那么如果需要修改容器配置文件，将会有点麻烦，因为虽然我们可以使用docker exec -it --user root 容器id /bin/bash 命令进入容器目录，但是连简单的 vi命令都不能使用）")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir -p /var/jenkins_mount\nchmod 777 /var/jenkins_mount\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("创建并启动Jenkins容器")])]),a._v(" "),e("p",[a._v("-d 后台运行镜像")]),a._v(" "),e("p",[a._v("-p 10240:8080 将镜像的8080端口映射到服务器的10240端口。")]),a._v(" "),e("p",[a._v("-p 10241:50000 将镜像的50000端口映射到服务器的10241端口")]),a._v(" "),e("p",[a._v("-v /var/jenkins_mount:/var/jenkins_mount /var/jenkins_home目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录。这里我们设置的就是上面我们创建的 /var/jenkins_mount目录")]),a._v(" "),e("p",[a._v("-v /etc/localtime:/etc/localtime让容器使用和服务器同样的时间设置。")]),a._v(" "),e("p",[a._v("--name myjenkins 给容器起一个别名")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -d -p 10240:8080 -p 10241:50000 -v /var/jenkins_mount:/var/jenkins_home -v /etc/localtime:/etc/localtime --name myjenkins jenkins/jenkins\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("查看jenkins是否启动成功，如下图出现端口号，就为启动成功了")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker ps -l\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("查看docker容器日志。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker logs myjenkins\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("配置镜像加速，进入 cd /var/jenkins_mount/ 目录。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd /var/jenkins_mount/\n")])])]),e("p",[a._v("修改 "),e("code",[a._v("vi hudson.model.UpdateCenter.xml")]),a._v("里的内容")]),a._v(" "),e("p",[a._v("将 url 修改为 清华大学官方镜像："),e("code",[a._v("https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json")])]),a._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[e("p",[a._v("访问Jenkins页面，输入你的ip加上10240")])]),a._v(" "),e("li",[e("p",[a._v("管理员密码获取方法，编辑initialAdminPassword文件查看，把密码输入登录中的密码即可，开始使用。")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vi /var/jenkins_mount/secrets/initialAdminPassword\n")])])]),e("ol",{attrs:{start:"9"}},[e("li",[a._v("到此以全部安装成功，尽情的使用吧！")])]),a._v(" "),e("h2",{attrs:{id:"jenkins的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins的配置"}},[a._v("#")]),a._v(" Jenkins的配置")]),a._v(" "),e("h3",{attrs:{id:"ssh免密登录配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密登录配置"}},[a._v("#")]),a._v(" ssh免密登录配置")]),a._v(" "),e("p",[a._v("1、进入jenkins容器")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it myjenkins /bin/bash\n")])])]),e("p",[a._v("如果想以root账户进入容器，则执行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it -u root myjenkins /bin/bash\n")])])]),e("p",[a._v("2、在容器中依次执行以下命令\n如果你是最新版本的docker镜像安装的jenkins容器，那么原因可能是容器内ssh版本太高，生成的私钥格式不被老版本ssh认可。解决方案是手动生成旧格式的秘钥")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd ~/.ssh\nssh-keygen -m PEM -t rsa -b 2048\n")])])]),e("p",[a._v("-m 参数指定密钥的格式，PEM是rsa之前使用的旧格式")]),a._v(" "),e("p",[a._v("-b 指定密钥长度。对于RSA密钥，最小要求768位，默认是2048位。")]),a._v(" "),e("h3",{attrs:{id:"maven配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven配置"}},[a._v("#")]),a._v(" maven配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd /var/jenkins_mount\nmkdir maven\ncd maven\nwget https://archive.apache.org/dist/maven/maven-3/3.6.1/binaries/apache-maven-3.6.1-bin.tar.gz --no-check-certificate\ntar -xzvf apache-maven-3.6.1-bin.tar.gz\n\ndocker exec -it -u root myjenkins /bin/bash\nln -s /var/jenkins_home/maven/apache-maven-3.6.1/bin/mvn /usr/local/bin\n")])])]),e("h3",{attrs:{id:"jdk8配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk8配置"}},[a._v("#")]),a._v(" jdk8配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('cd /var/jenkins_mount\nmkdir jdk\ncd jdk\nwget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u141-b15/336fa29ff2bb4ef291e347e091f7f4a7/jdk-8u141-linux-x64.tar.gz"\n\ntar -xzvf jdk-8u141-linux-x64.tar.gz\n')])])]),e("p",[a._v("然后在jenkins全局工具配置，新增jdk，并配置JAVA_HOME为")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/var/jenkins_home/jdk/jdk1.8.0_141\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);