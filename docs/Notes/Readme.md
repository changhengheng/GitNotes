# 概览

## 一些链接

[Git官网](https://git-scm.com)  

[Git下载](https://git-scm.com/download/win)  

[Git官方文档](https://git-scm.com/docs)  

[Pro Git 第二版（2014）中文版](https://git-scm.com/book/zh/v2)

## 常用命令

- git init 初始化仓库
- `git init name` 在当前目录下创建一个名字叫做name的仓库，需要使用`cd name`进入仓库后操作
- git status 查看文件的状态
  - 红色：工作区修改新增删除等操作，没有提交到暂存区

- git add .(*) :提交所有的工作区修改到暂存区  git add 文件名：把某个文件提交到暂存区
- git commit -m '注释信息'：把暂存区的内容 提交到了仓库区，生成一个新的版本
- git commit -am ’注释信息‘：可以自动直接把工作区修改提交到暂存区并提交到仓库生成新的版本（只能操作修改的文件，新增文件是不能直接这样操作的）
- git commit 直接进入到vim中书写注释信息，并且提交到仓库区

- git restore 文件名/.  撤销工作区的修改 恢复到上一次的提交

- git restore --staged ./文件名 撤销暂存区的修改，回退到工作修改

- 新增文件不能使用git restore撤回，直接删除即可

- git rm 文件  ：删除了工作区和暂存区的文件

- git rm --cached 文件：删除了暂存区的文件

- git rm -f 文件：当工作区和暂存区不一致的时候，强制删除工作区和暂存区中的某个文件

- git mv 01.txt 02.txt:把工作区和暂存区的01.txt命名为02.txt

- git log ：打印所有的历史操作
- git log --oneline 打印所有历史操作 简略显示
- git log -p 展示历史操作及差异
- git log -p -2 展示历史操作及差异 最近两次

- git diff 查看工作区和暂存区的差异 （无法比较新增文件）
- git diff --cached 比较暂存区和仓库区最新版本的差异
- git diff a b 比较两个版本的差异

- git reset --hard/--mixed/--soft 版本号：回退到某个版本号
  - --hard 版本区回退 重置工作区和暂存区
  - --mixed 版本去回退 重置暂存区
  - --soft 版本区回退 不会重置工作区和暂存区
- git reflog --oneline ：查看所有的提交及回退操作
- git reset --hard HEAD^:一个^代表回退一个
- git reset --hard HEAD~2:~后边的数字代表回退几个

- 配置忽略：
  - 如果是一个只存在工作区的文件，则直接使用.gitignore配置会略即可
  - 如果仓库已经提交了当前的文件，则先把暂存区的被忽略的文件删除（git rm --cached 文件：删除了暂存区的文件），把删除被忽略文件后的暂存区提交给仓库区，此时工作区的这个文件就是未跟踪状态，可以再去配置忽略

- git  branch 分支名：创建分支
- git branch：查看所有分支及当前所在分支
- git checkout 分支名：切换某个分支（切换分支前一定要提交当前的代码）
- git checkout -b 分支名：创建并切换到某个分支
- git checkout -B 分支名：创建并切换分支，但是如果已经有同名分支 则直接强制覆盖
- git checkout -b 分支名 commitID：从指定的版本创建分支
- git checkout --orphan 分支名：创建一个裸分支
- git branch -d 分支名 ：删除某个分支
- git branch -D 分支名 ：强制删除某个分支

- git merge 分支名：合并其他分支

## 一些工作流
**1**

> 1. 项目经理创建文件架构
> 2. 项目经理创建A和B分支
> 3. A开发 并提交
> 4. B开发并提交
> 5. 到主分支上 分别合并A和B分支 （如果出现冲突 则需要解决冲突，解决完冲突 切记要提交）
> 6. A上班了，首先要把主分支的代码合并到自己的分支上
> 7. B上班了，首先要把主分支的代码合并到自己的分支上
> 8. 。。。。。

**2**

> 本地有仓库，远程没有仓库
>
> - 创建远程仓库
> - git remote add origin 仓库地址：把本地仓库和远程仓库进行关联
> - git push -u origin master 推送master分支
> - git push -u origin --all  推送所有的分支
>
> git remote：展示当前本地仓库关联的所有的远程仓库
>
> git remote rm 别名：删除某个关联
>
> git clone 地址：克隆远程仓库
>
> git pull origin master:更新master分支（一般在推送之前先拉取更新，然后处理冲突之后再推送，否则推送可能失败）
>
> git push origin master（拉取更新处理冲突之后，提交到本地仓库 然后再推送到远程仓库）
>
> git pull origin A:A: 在本地创建一个A分支 然后拉取A分支到本地
>
> - 项目组长在本地创建的项目的架构，并创建远程仓库 推送远程仓库
>   - git init 初始化本地仓库
>   - git add .    git commit -m ‘初始化’：把本地初始化代码提交到本地仓库
>   - git remote add origin 地址：把本地仓库和远程仓库关联
>   - git push origin master ：把本地仓库的master分支推送到远程仓库
>   - git branch A     git branch B  ：在本地创建A和B分支
>   - git push origin --all 把本地所有的分支都推送到远程仓库
> - A从远程仓库拉取代码，在自己的分支上进行开发工作
>   - git clone XXX：先克隆远程代码
>   - git pull origin A:A ：拉取A分支
>   - git checkout A：要切换到A分支 开始工作
>   - git add .  git commit -m 'XX'：当A分支开发完毕，提交本地的A分支
> - B从远程仓库拉取代码 在自己的分支上进行开发换工作
>   - git clone XXX：先克隆远程代码
>   - git pull origin B ：拉取B分支
>   - git checkout B：要切换到B分支 开始工作
>   - git add .  git commit -m 'XX'：当B分支开发完毕，提交本地的B分支
> - A和B开发完成之后，把自己的代码推送到远程仓库
>   - git  push origin A：把自己的分支修改推到远程 然后下班
>   - git  push origin B：把自己的分支修改推到远程 然后下班
> - 项目组长合并A和B的代码，并更新至远程仓库
>   - git pull origin A：拉取A分支的更新 并合并到master上
>   - git pull origin B：拉取B分支的更新，并合并到master
>   - git add .  git commit -m 'xXX':合并分支 的时候可能会出现冲突，解决完冲突之后，要处理冲突并重新提交
>   - git push origin master：把最新的合并的完成代码推送到远程仓库
> - A和B第二天上班 拉取新的代码，然后继续各自开发
>   - git pull origin master：在各自的分支上拉取master的更新，并且直接合并到自己的代码中，然后可以开始第二天的开发