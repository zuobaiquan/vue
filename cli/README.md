脚手架生成器demo，实现了核心功能

根据package.json 中 bin指定的cli，全局暴露 i-cli
根据用户选择，生成自定义的项目名称、简介、创建项目
template.json 文件中 path 指向了 vue 脚手架的项目仓库，
用户init后动态download该仓库中存放的脚手架