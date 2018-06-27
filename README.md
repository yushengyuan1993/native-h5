## 快哉学堂app v2.0 前端设计
*持续更新*

#### 1、安装Node环境

1. 请确保你的开发（test || uat || prod）环境中安装有 [Node.js](https://nodejs.org/zh-cn/) 环境，本项目依赖它构建；

2. 我们选择使用 [npm](https://www.npmjs.com/) 作为包管理工具，所以请安装 `npm` 到相关开发环境，由于一些众所周知的原因，请选择性的安装淘宝官方 `npm镜像`，[cnpm](http://npm.taobao.org/)；

#### 2、开始构建

1. 项目使用 [webpack](https://doc.webpack-china.org/) 作为打包工具，首先安装 `webpack`：
    ```sh
    # 建议全局安装 webpack
    npm install -g webpack
    ```

2. 我们使用 `vue-cli` 快速构建一个基于 `webpack` 的项目：
    ```sh
    # 安装 vue-cli
    npm install -g vue-cli
    ```

3. 生成项目：
    ```sh
    # 在当前目录下创建我们的项目，假设目录为 dst/
    vue init webpack dst

    # 进入到项目
    cd dst

    # 安装项目依赖
    cnpm install     # 建议使用淘宝npm镜像安装依赖

    # 启动项目
    npm run dev

    # 打包项目(一般在一个阶段工作完成，待交付时运行一次就行，日常开发不用频繁打包)
    npm run build
    ```

4. 项目目录简介：
    ```
    .
    ├── build/                      # webpack config files
    │   └── ...
    ├── config/
    │   ├── index.js                # main project config
    │   └── ...
    ├── src/
    │   ├── main.js                 # app entry file
    │   ├── App.vue                 # main app component
    │   ├── components/             # ui components
    │   │   └── ...
    │   └── assets/                 # module assets (processed by webpack)
    │       └── ...
    ├── static/                     # pure static assets (directly copied)
    ├── test/
    │   └── unit/                   # unit tests
    │   │   ├── specs/              # test spec files
    │   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
    │   │   ├── index.js            # test build entry file
    │   │   ├── jest.conf.js        # Config file when using Jest for unit tests
    │   │   └── karma.conf.js       # test runner config file when using Karma for unit tests
    │   │   ├── setup.js            # file that runs before Jest runs your unit tests
    │   └── e2e/                    # e2e tests
    │   │   ├── specs/              # test spec files
    │   │   ├── custom-assertions/  # custom assertions for e2e tests
    │   │   ├── runner.js           # test runner script
    │   │   └── nightwatch.conf.js  # test runner config file
    ├── .babelrc                    # babel config
    ├── .editorconfig               # indentation, spaces/tabs and similar settings for your editor
    ├── .eslintrc.js                # eslint config
    ├── .eslintignore               # eslint ignore rules
    ├── .gitignore                  # sensible defaults for gitignore
    ├── .postcssrc.js               # postcss config
    ├── index.html                  # index.html template
    ├── package.json                # build scripts and dependencies
    └── README.md                   # Default README file
    ```
    - `build/`：该目录保存的是开发和生产环境中的webpack配置，一般情况下是不需要进行修改的；当需要自定义webpack配置时，可以从webpack.base.conf.js开始研究。

    - `config/index.js`：这是项目构建时需要的一些最常用到的配置文件。

    - `src/`：这里存放的就是我们的业务代码了，我们可以根据项目需要自行配置。

    - `static/`：在这里，我们可以存放一些我们不希望webpack来处理的静态资源文件，在使用webpack来构建时，这里的文件将会直接复制到构建后的资源目录下。

    - `test/unit`：单元测试相关文件。

    - `test/e2e`：e2e测试相关文件。

    - `index.html`：基于vue.js的SPA单页应用的入口HTML模板，在开发、构建过程中，webpack将生成很多资源文件，文件之间的URL会被自动的注入到该index.html中。

    - `package.json`：npm包源文件，包含所有的构建依赖和构建命令。
#### 3、构建命令

> 所有的构建命令都是通过`npm`脚本执行的，见`package.json//scripts`。

1. 在本地开发环境启动项目：
    ```
    npm run dev
    ```
    - `webpack` + `vue-loader` 作用于vue的单文件组件
    - 状态保存，热加载
    - 使用`ESLint`检查js
    - 生成资源文件的sourcemap
    - ......

2. 在生产环境中构建资源：
    ```
    npm run build
    ```
    - 使用`UglifyJS v3`压缩JavaScript
    - 使用`html-minifier`压缩HTML
    - 使用`cssnano`将所有组件的CSS提取到一个文件中
    - 使用版本哈希编译所有的静态文件，以实现资源的持久缓存。为所有的资源自定生成合适的URL，最后注入到`index.html`中，完成整个工程的构建。

3. 使用Jest在JSDOM中运行单元测试：
    ```
    npm run unit
    ```

4. 运行ESLint并报告任何linting错误：
    ```
    npm run lint
    ```

> 更多构建命令请查阅相关资料

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
