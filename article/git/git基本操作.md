### git bash

#### 配置git
1. 配置用户名: git config --global user.name "自己的名字"
2. 配置邮箱: git config --global user.email "自己的邮箱"

#### 链接远程git服务
1. 生成rsa秘钥: ssh-keygen -t rsa
2. 将秘钥添加到github，gitlab等远程git服务仓库中，关联本地git操作。

#### git操作

1. 查看本地文件状态: git status
2. 添加文件到本地暂存区: git add 文件
3. 添加所有文件到本地暂存区: git add .
4. 将本地代码保存到本地仓库: git commit -m "注释"
5. 将代码推送到远程仓库: git push
6. 从远程仓库更新代码: git pull
7. 从代码仓库克隆代码到本地: git clone 'URL地址'
8. 切换代码分支: git checkout '分支名称'
9. 创建分支: git branch '分支名称'
