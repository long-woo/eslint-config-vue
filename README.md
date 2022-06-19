# eslint-config-vue

🔧 一个 Vue 的 ESLint 配置，使用 Prettier 格式化代码。

> 如果只需要对 TypeScript 的代码进行格式化，可以使用 [@longwoo/eslint-config-typescript-prettier](https://github.com/long-woo/eslint-config-typescript-prettier)。

## 使用

1.安装依赖

```sh
pnpm add -D @longwoo/eslint-config-vue

# or
yarn add -D @longwoo/eslint-config-vue

# or
npm install --save-dev @longwoo/eslint-config-vue
```

2.配置 ESLint

```json
{
  "extends": "@longwoo/vue"
}
```

3.打开 `package.json` 文件，在 `scripts` 配置中添加 `eslint` 命令，运行 ESLint 校验代码。

```json
{
  "scripts": {
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  }
}
```
