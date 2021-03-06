# ð± å ä¸ªä½ ä¸ç¥éçGitå°å½ä»¤,æ¶è·å¿«ä¹ã

æ¬ææ¯å¯¹åæçç¿»è¯+å¹¶å¨åæåºç¡ä¸èªæå®è·µï¼è¿è¡äºå¤§éçè¡¥åã

[Git Commands You Didn't Know](https://dev.to/dephraiim/git-commands-you-probably-didn-t-know-3bcm?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email)

## åè¨

å³äº Git, ææåæ¬¢çå®çåå ä¹ä¸å°±æ¯å®æ¢ç®ååå¯èªå®ä¹ï¼`alias` åè½å°±æ¯å¶ä¸­çä»£è¡¨ã Git æ¯æ` alias`ï¼è¿æå³çä½ å¯ä»¥ç»å½ä»¤èªå®ä¹åå­ã å½ç¶ï¼ææ´åæ¬¢ä¸ºå¾é¿çå½ä»¤è®¾ç½®å«å(`alias`)ï¼é¿åæ¯æ¬¡éè¦ä»ä»¬çæ¶åï¼æè¦è±æ¶é´å»æç´¢å®ä»¬ã

> å«å(alias)æå¥½è®¾ç½®æä½ æä¹ æ¯çè¯­ä¹åæ¹å¼ï¼æ¯ç«å·¥å·åªæ¯å·¥å·ï¼æ¯å¸®å©æä»¬æé«æççï¼æä¸é¿ä¸²å½ä»¤ï¼æ²¡æå¿è¦ã :)  

Gitä¸­çå«å(alias)éç½®è§åæ¯è¿æ ·çã

```bash
git config --global alias.[new_alias] "[previous_git_command]"

# Example
git config --global alias.save commit
```

ä»ä¸é¢çç¤ºä¾ä¸­ï¼æå°ä¸åéè¦ git commitï¼ææ´ä¹ æ¯ç¨ git saveã

å¦æå½ä»¤æ¯å¤ä¸ªï¼åéè¦ç¨å¼å·åä½å¤ä¸ªéé¡¹ã

## `git recommit`

```bash
git config --global alias.recommit 'commit --amend -m'
```

`git commit --amend` åè®¸ä½ æ´æ¹æåçæäº¤ä¿¡æ¯(`message`)ã `recommit`å½ä»¤è®©æäº¤åå¾æ´ç®åï¼æ´å®¹æè®°ä½ã

```bash
# Change the last commit message with recommit
git recommit "New commit message"

# [master 64175390] New commit message
#  Date: Tue Sep 22 15:09:11 2020 +0000
#  1 file changed, 2 insertions(+)
#  create mode 100644 vue.js
```

## `git commend`

```bash
git config --global alias.commend 'commit --amend --no-edit'
```

ä½¿ç¨`--no-edit`æ å¿è¿è¡ä¿®æ¹ï¼å¯ä»¥å¨æè¿ä¸æ¬¡æäº¤æ¶å¨ä»åºä¸­æäº¤æ°çæ´æ¹ï¼ä½ ä¸éè¦åæ¬¡éå¤æäº¤æ¶æ¯ã

**ææ¥è§£éä¸ä¸è¿ä¸ªå½ä»¤**ï¼ä½ æ¯å¦æè¿ç§ç»åï¼åå®ä»£ç äº `git add .` ã `git commit xxx` ï¼ä¸é¡¿æä½ï¼åæ³` push` çæ¶ååç° æä¸ªæä»¶æ¼æ¹äºï¼åæ¯ `git add .` ã `git commit xxx` ä¸é¡¿æä½ï¼æ­¤æ¶ `commit` å°±ä¼æä¸¤æ¬¡è®°å½ï¼è¿å¯¹äºé¡¹ç®æ¥è¯´æ¯éå¸¸ä¸å¥½çï¼ä¸æ¬¡ `commit` è¢«åæäºä¸¤æ¬¡ï¼å¦æéå°éè¦` revert` ä½ å°±å»ç¼äºãè¿ä¸ªæ¶åä½ å°±å¯ä»¥ç¨è¿ä¸ªå½ä»¤è½»æ¾è§£å³ã

**ä»£ç æ¼ç¤º**

```
echo 'Hello world' > README.md
git add .
git commit -m "Hello Word"
git log --oneline
4b39c8a (HEAD -> master) Add README.md
```

```
echo 'Hello ç§é£' >> README.md
git commend
git log --oneline 
60c5190 (HEAD -> master) Add README.md
```

æ­¤æ¶`git log`ä¾ç¶åªæä¸æ¬¡è®°å½ã

## `git search`

```bash
git config --global alias.search 'grep'

# Example
git search [search_term]
```

`git grep`åè®¸ä½ å¨å­å¨åºä¸­æç´¢å³é®å­(ä¸æ¯ææ­£å)ï¼å¹¶è¿ååç§å¹éé¡¹ã è¿å¾é·ï¼ä½æ¯æä¸ç¥é `grep` çææï¼è¯·åè¯ææ¯å¦è¿æ ·åã ææ´åæ¬¢`search`ï¼å®æäºè®°ä½å¹¶ä¸æäºä½¿ç¨ã

```
git search createHotContext
```

![image-20201001204951416](https://s3.qiufeng.blue/blog/image-20201001204951416.png)

## `git here`

```
git config --global alias.here '!git init && git add . && git commit -m "init ð¦"'
```

éå¸¸ï¼å½æåå§åä¸ä¸ªæ°çä»åºæ¶ï¼æå°æå­æææä»¶ï¼å¹¶ä½¿ç¨åå§æäº¤æ¶æ¯è¿è¡æäº¤ã æä½¿ç¨`git here`ä¸æ­¥å°±å®æäºï¼è¿å¯¹äºå¼æºå·¥å·éåº¦ç±å¥½èï¼ççæ¯ç¦æï¼å¤ªç½äºï¼è°ç¨è°ç¥éï¼ã åªéå¨è¦åå»ºæ°ä»åºçæä»¶å¤¹ä¸­è¿è¡å®ï¼å°±å¯ä»¥äºã

> å°æå·§: åæå¨å¬å¸å¼åä»£ç éè¦æäº¤å°å¬å¸çç§æä»åºï¼å æ­¤å¨å±éç½®äºå¬å¸ç username å emailï¼å½æåæ¢å°å¼æºé¡¹ç®çæ¶åï¼èæ¯ä¼å¿è®°ä¿®æ¹åæ¥ï¼å æ­¤æä¼åå»ºä¸ä¸ª `git config user.name xxx \n git config user.email xxx@xx.com` çä¸ä¸ª shæä»¶ãå æ­¤æåå§åçæ¶åå¯ä»¥è¿æ · ã

```
git config --global alias.here '!git init && sh ~/my/git.sh && git add . && git commit -m "init ð¦"'
```

è¿æ ·å­ï¼æ¢å¯ä»¥æäº¤å°ç§æä»åºï¼åå»ºå¼æºé¡¹ç®çæ¶ååä¸è½è¯¯ã

ä¹æäººè¯´ï¼æä¸æ¹ä¹è½æäº¤åï¼=ã= ä¸ºå¥è¦æ¹ï¼é£æ¯ä½ ä¸ç¥éå¼ºè¿«ç....çå°è¿ç§ç°è²å¤´åçæäº¤ççæ¯å¿éç¦ç¼ã

![image-20201001210508185](https://s3.qiufeng.blue/blog/image-20201001210508185.png)

## `git who`

```bash
git config --global alias.who 'blame'

# Example
git who index.ts
# 641753902 (Ephraim Atta-Duncan 2020-09-22 15:09:11 +0000 1)
# 641753902 (Ephraim Atta-Duncan 2020-09-22 15:09:11 +0000 2) console.log("who?") 

```

`git blame` ç¨äºéè¡æ£æ¥æä»¶çåå®¹ï¼å¹¶æ¥çæ¯è¡çæåä¿®æ¹æ¶é´ä»¥åä¿®æ¹çä½èã å¦ææéè¯¯ï¼ä½ å¯ä»¥è¿½æº¯å°æä¸è¡çæ¹å¨æ¯è°ä¿®æ¹çãvscode æä»¶ `GitLens`ä¹æ¯åºäºæ­¤åçã

> æ»ç»: è¿½è¸ª bug å°è½æï¼ä»¥åè°ååºbugï¼è½»æ¾å®ä½æä¸è¡æ¯è°åçã

## `git zip`

```bash
git config --global alias.zip 'archive --format=tar.gz -o repo.tar.gz'

# Example
git zip [branch_name]
```

ä½¿ç¨ `archive`å½ä»¤å¯ä»¥åå»ºæ´ä¸ªæé¨åä»åºç `tarball` å` zip`ã `git zip` æ´å®¹æè®°ä½ã åªéæ·»å åæ¯åç§°ã

```bash
â  git-test2 git:(master) ls
README.md
â  git-test2 git:(master) git zip master
â  git-test2 git:(master) â ls
README.md   repo.tar.gz
```

## `git newbie`

```bash
git config --global alias.newbie 'checkout --orphan'

# Example
git newbie [new_branch_name]
```

å¸¦æ`--orphan` æ å¿ç`git checkout`åè®¸æ¨åå»ºä¸ä¸ªåæ¯ï¼èæ²¡ææ¥èªç¶åæ¯çä»»ä½åå²è®°å½ã

```bash
â  git-test2 git:(master) git newbie pages
Switched to a new branch 'pages'
â  git-test2 git:(pages) â ls
README.md
â  git-test2 git:(pages) â git log
fatal: your current branch 'pages' does not have any commits yet
â  git-test2 git:(pages) â
```

**å®è·µ**

é£ä¹å®çåºç¨åºæ¯æ¯ä»ä¹å¢?

è¿è®°å¾` github pages` åï¼å©ç¨ä»è½å¿«éåå»ºç«ç¹ï¼å¯ä»¥ç¨æä¸ªåæ¯æ¥å½åç«ç¹å±ç¤ºï¼ä½æ¯å¦ææä»¬ææºç åæååçæä»¶é½æ¾å¨ä¸ä¸ªåæ¯ï¼å°±ä¼æ¾å¾ç´¯èµä¸æ··ä¹±ï¼è¿ä¸ªæ¶åæä»¬å°±å¯ä»¥å©ç¨è¿ä¸ªç¹æ§æ¥åå»ºä¸ä¸ªå¨æ°æ  `commit` çåæ¯ãä¸¤ä¸ªå·¥ç¨ï¼ä¸ä¸ªæºæä»¶å·¥ç¨ï¼ä¸ä¸ªæååçå·¥ç¨ï¼æ¾å°åä¸ä¸ªä»åº(repo)ä¸­ã

**ä»£ç æ¼ç¤º**

```bash
â  git-test2 git:(master) git newbie pages
Switched to a new branch 'pages'
â  git-test2 git:(pages) â ls
README.md
â  git-test2 git:(pages) â git log
fatal: your current branch 'pages' does not have any commits yet
â  git-test2 git:(pages) â git st
On branch pages

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   README.md

â  git-test2 git:(pages) â
```

## `git clonely`

```
git config --global alias.clonely 'clone --single-branch --branch'

# Example
git clonely [branch_name] [remote_url]

git clonely v3 https://github.com/vuejs/vue-apollo
# Cloning into 'vue-apollo'...
# remote: Enumerating objects: 2841, done.
# remote: Total 2841 (delta 0), reused 0 (delta 0), pack-reused 2841
# Receiving objects: 100% (2841/2841), 1.92 MiB | 330.00 KiB/s, done.
# Resolving deltas: 100% (1743/1743), done.
```

å¸¦æ`--single-branch --branch`æ å¿ç`git clone `åè®¸ä½ ä»å­å¨åºä¸­` clone `ç¹å®åæ¯ï¼æ¯«ä¸å¤¸å¼ çè¯´ï¼è¿ä¸ªå½ä»¤æå¨ Google ä¸­æç´¢äº10å¤æ¬¡ã å«åï¼aliasï¼æ´å¥½ç¨ï¼æ´å¥½è®°å¿~

**è½å¹²åå¢ï¼**

å½ç¶æ¯åå°`clone`æ¶é´ï¼è¿å¯¹å¤§ä»åºèè¨ç®ç´æ¯ç¦æã

## `git plg`

```bash
git config --global alias.plg "log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative"

# Example
git plg # plg - Pretty Log

```

`git log`æ²¡ä»ä¹é®é¢ï¼é¤äºå®æç¹ä¸éï¼æ²¡æé¢è²å·®å¼ï¼å¦æè¦èªå®ä¹å®ï¼æä»¬éè¦å¨ google ä¸æ¥è¯¢ç¸å³çå½ä»¤ã å¹¸è¿çæ¯ï¼æä»¬æå«å(alias)ã ä½¿ç¨è¯¥å½ä»¤çå«åï¼ä½ å°è·å¾éå¸¸æ¼äº®çæ¥å¿ã

![image-20201001223111514](https://s3.qiufeng.blue/blog/image-20201001223111514.png)

## `git fresh`

```
git config --global alias.fresh "filter-branch --prune-empty --subdirectory-filter"

# Example
git fresh [subfolder] [branch_name]
git fresh src main # Don't do this unless you know what you are doing
```

éè¿ä¸ç³»ååæ°ï¼ä½¿ç¨`fresh`å½ä»¤ç¨äºä»å­æä»¶å¤¹ä¸­åå»ºæ°çå­å¨åºã å¸¦æå¤ä¸ªåæ°ç `filter-branch`è·åæå®å­æä»¶å¤¹çåå®¹ï¼å¹¶å°å¶ä¸­çåå®¹æ¿æ¢ä¸ºè¯¥å­æä»¶å¤¹çåå®¹ã

**å®è·µ**

åè®¾æè¿æ ·ä¸ä¸ªé¡¹ç®ï¼ç®å½ç»æå¦ä¸

```
.
âââ script
â   âââ index.js
âââ README.md
```

å¦ææä»¬éè¦æ¹é é¡¹ç®ï¼å° `script` ä½ä¸ºåç¬çé¡¹ç®ï¼ è¿ä¸ªæ¶åæä»¬éè¦å° `script` æåºæ¥ï¼æä»¬ä¸è¬ä¼éè¿æ·è´æ¥è§£å³ï¼è¿æ ·åæ²¡æä»ä¹é®é¢ï¼ä½æ¯ä½ å°ä¸¢å¤±` script `ç®å½ä»¥åå­æä»¶ææåå²ä¿®æ¹è®°å½ã

ç°å¨æä»¬æåå° `script` ç®å½ææäºåç¬çé¡¹ç®ã

![image-20201001224453823](https://s3.qiufeng.blue/blog/image-20201001224453823.png?imageView2/0/q/75|watermark/1/image/aHR0cHM6Ly9zMy5xaXVmZW5naC5jb20vd2F0ZXJtYXJrL3dhdGVybWFyay5wbmc=/dissolve/50/gravity/SouthEast/dx/0/dy/0)

åæ¥ç `commit` è®°å½ï¼ä¾æ§ä¿çäº` script` çç¸å³` commit `è®°å½ï¼å¯¹äºç®¡çé¡¹ç®æ¥è¯´éå¸¸æå¸®å©ã

```bash
commit 8b311558195684d6420baedce74e0f9951208038 (HEAD -> master)
Author: qiufeng <qiufeng@163.com>
Date:   Thu Oct 1 22:37:21 2020 +0800

    feat: script
(END)
```

å¦ææä»¬ä¸å°å¿æåéäºï¼è¿å¯ä»¥è¿è¡è¿åã

```
git reset --hard refs/original/refs/heads/{branch_name}
```

![image-20201001224735002](https://s3.qiufeng.blue/blog/image-20201001224735002.png?imageView2/0/q/75|watermark/1/image/aHR0cHM6Ly9zMy5xaXVmZW5naC5jb20vd2F0ZXJtYXJrL3dhdGVybWFyay5wbmc=/dissolve/50/gravity/SouthEast/dx/0/dy/0)

è¿å¯ä»¥ç»§ç»­æå,è¿ä¸ªæ¶åæåéè¦åæ¸é¤ä¸ä¸å¤ä»½~

```
git update-ref -d refs/original/refs/heads/master
```

ç¶åä»å¤´å¼å§ç»§ç»­æä½å³å¯~

## æå

å°æ­¤æ·»å å°ä½ ç `.gitconfig` æä»¶ã

```
[alias]
    recommit = commit --amend -m
    commend = commit --amend --no-edit
    here = !git init && git add . && git commit -m \"Initialized a new repository\"
    search = grep
    who = blame
    zip = archive --format=tar.gz -o ../repo.tar.gz
    lonely = clone --single-branch --branch
    plg = log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative
    fresh = filter-branch --prune-empty --subdirectory-filter
```