#### 一、搭建Git个人主页：

> Github上创建项目的名称为 jiangjiesheng.github.io 
> settings > pages > 选择一下即可，根目录中必须有首页index.html

> Gitee上创建 则直接用户名，即jiangjiesheng
> 服务 > pages 设置启动，根目录可以是index.html 或者 README.MD

>     （如果是预览某个项目的线上效果，只需要设置pages页就可以）

    Gitee码云和GitHub对比：
- 1、码云可以免费设置项目为私有项目，不被公开；GitHub若设置私有项目，则需要收费。
（码云中的项目设置为私有时，主页仍然可以访问）
- 2、码云服务器在国内，响应速度快；Github在国外，访问速度实测非常慢，且不稳定。
 

#### 二、提交代码到多个Git仓库

> Git项目目录下有个隐藏的.git 文件夹，其中有个config文件，使用编辑器打开

        [remote] 节点表示远程仓库，默认有个origin仓库地址，
	    新增一个[remote] ，并指定名称为“mirror”，作为镜像仓库。
	
	    ([branch ]为分页节点，这里可以忽略)
	
**示例：**
```
    [remote "origin"]
	    url = git@github.com:jiangjiesheng/jiangjiesheng.github.io.git
	    fetch = +refs/heads/*:refs/remotes/origin/*
    [remote "mirror"]
	    url = https://gitee.com/jiangjiesheng/jiangjiesheng.git
	    fetch = +refs/heads/*:refs/remotes/origin/*
    [branch "master"]
	    remote = origin
	    merge = refs/heads/master
```

    **pull拉取操作**
> 分别从两个远程仓库pull：
```
    git pull origin master 
    git pull mirror master
```
    **push提交操作**
> 分别push到两个远程仓库：
```
    git push origin master 
    git push mirror master
```
####三、效果展示：
> Git仓库地址：

- Gitee 码云： [https://gitee.com/jiangjiesheng/jiangjiesheng](https://gitee.com/jiangjiesheng/jiangjiesheng "Gitee 码云")
- GitHub： [https://github.com/jiangjiesheng/jiangjiesheng.github.io](https://github.com/jiangjiesheng/jiangjiesheng.github.io "GitHub") 

- Gitee码云Pages主页：  [https://jiangjiesheng.gitee.io](https://jiangjiesheng.gitee.io "Gitee码云Pages主页")   (响应快)
- GitHub Pages主页： [https://jiangjiesheng.github.io](https://jiangjiesheng.github.io "GitHub Pages主页")    (响应慢)

- 个人网站： [http://www.jiangjiesheng.com](http://www.jiangjiesheng.com "个人网站")