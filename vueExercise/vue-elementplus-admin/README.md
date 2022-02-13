# vue-elementplus-admin

基于 Vue3 最新标准，实现后台前端综合解决方案

# 约定式提交规范

https://www.conventionalcommits.org/

## 提交说明的结构

```md
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

```md
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

提交说明包含了下面的结构化元素，以向类库使用者表明其意图：

1. fix: 类型 为 fix 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 PATCH 相对应）。
2. feat: 类型 为 feat 的提交表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）。
3. BREAKING CHANGE: 在脚注中包含 BREAKING CHANGE: 或 <类型>(范围) 后面有一个 ! 的提交，表示引入了破坏性 API 变更（这和语义化版本中的 MAJOR 相对应）。 破坏性变更可以是任意 类型 提交的一部分。
4. 除 fix: 和 feat: 之外，也可以使用其它提交 类型 ，例如 @commitlint/config-conventional（基于 Angular 约定）中推荐的 build:、chore:、 ci:、docs:、style:、refactor:、perf:、test:，等等。
5. 脚注中除了 BREAKING CHANGE: <description> ，其它条目应该采用类似 git trailer format 这样的惯例。
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211118090215.png)
   ![](https://output66.oss-cn-beijing.aliyuncs.com/img/20211118090245.png)

## Vue3.0

### Vue3.0 最新特性及其最新语法

- Composition APi
- 响应式变更
- 全新的全家桶
- 新的 TS 支持
- Vite

### RFC

```js
<script setup">
```

### 组件状态驱动的动态 CSS 值

https://v3.vuejs.org/api/sfc-style.html#state-driven-dynamic-css

### 处理 keep-alive 数据不加载

```js
// 处理数据不重新加载的问题
onActivated(getListData)
```
