module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    process: true,
    Plyr: true,
    AMap: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'off', // 是否禁止调用console对象的方法
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 是否禁用 debugger
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
     * 代码中可能的错误或逻辑错误
     */
    'no-cond-assign': ['error', 'always'], // 禁止条件表达式中出现赋值操作符
    'no-constant-condition': ['error', { checkLoops: true }], // 禁止在条件中使用常量表达式
    'no-control-regex': ['error'], // 禁止在正则表达式中使用控制字符
    'no-dupe-args': ['error'], // 禁止 function 定义中出现重名参数
    'no-dupe-keys': ['error'], // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': ['error'], // 禁止出现重复的 case 标签
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止出现空语句块
    'no-empty-character-class': ['error'], // 禁止在正则表达式中使用空字符集
    'no-ex-assign': ['error'], // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': ['error'], // 禁止不必要的布尔转换
    'no-extra-semi': ['error'], // 禁止不必要的分号
    'no-func-assign': ['warn'], // 禁止对 function 声明重新赋值
    'no-inner-declarations': ['error'], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }], // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': ['error'], // 禁止在字符串和注释之外不规则的空白
    'no-obj-calls': ['error'], // 禁止把全局对象作为函数调用
    'no-regex-spaces': ['error'], // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': ['error'], // 禁用稀疏数组
    'no-unexpected-multiline': ['error'], // 禁止出现令人困惑的多行表达式
    'no-unsafe-finally': ['error'], // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': ['error'], // 禁止对关系运算符的左操作数使用否定操作符
    'use-isnan': ['error'], // 要求使用 isNaN() 检查 NaN

    /**
     * 最佳实践
     */
    'default-case': ['error'], // 要求 switch 语句中有 default 分支
    'dot-notation': ['error'], // 强制尽可能地使用点号
    'eqeqeq': ['warn'], // 要求使用 === 和 !==
    'no-caller': ['error'], // 禁用 arguments.caller 或 arguments.callee
    'no-case-declarations': ['error'], // 不允许在 case 子句中使用词法声明
    'no-empty-function': ['error'], // 禁止出现空函数
    'no-empty-pattern': ['error'], // 禁止使用空解构模式
    'no-eval': ['error'], // 禁用 eval()
    'no-global-assign': ['error'], // 禁止对原生对象或只读的全局对象进行赋值
    // "no-magic-numbers": ["error", { "ignoreArrayIndexes": true }], // 禁用魔术数字
    'no-redeclare': ['error', { builtinGlobals: true }], // 禁止重新声明变量
    'no-self-assign': ['error', { props: true }], // 禁止自我赋值
    'no-unused-labels': ['error'], // 禁用出现未使用过的标
    'no-useless-escape': ['error'], // 禁用不必要的转义字符
    'radix': ['error'], // 强制在parseInt()使用基数参数

    /**
     * 变量声明
     */
    'no-delete-var': ['error'], // 禁止删除变量
    'no-undef': ['error'], // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-unused-vars': ['error'], // 禁止出现未使用过的变量
    'no-use-before-define': ['error'], // 禁止在变量定义之前使用它们

    /**
     * 风格指南
     */
    'array-bracket-newline': ['error', { multiline: true }], // 在数组开括号后和闭括号前强制换行
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空2
    'block-spacing': [2, 'never'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // 强制在代码块中使用一致的大括号风格
    'camelcase': [0, { properties: 'always' }], // 强制驼峰法命名
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号
    'comma-spacing': ['error', { before: false, after: true }], // 强制在逗号前后使用一致的空格
    'comma-style': ['error', 'last'], // 强制使用一致的逗号风格
    'computed-property-spacing': ['error', 'never'], // 强制在计算的属性的方括号中使用一致的空格
    'consistent-this': ['error', 'that'], // 当获取当前执行环境的上下文时，强制使用一致的命名
    'eol-last': ['error', 'always'], // 要求或禁止文件末尾存在空行
    'func-call-spacing': ['error', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
    'func-names': ['error', 'always'], // 要求或禁止使用命名的 function 表达式
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 强制一致地使用 function 声明或表达式
    'implicit-arrow-linebreak': ['error', 'beside'], // 强制隐式返回的箭头函数体的位置
    'indent': ['error', 2, { SwitchCase: 1 }], // 两个空格缩进
    'jsx-quotes': ['error', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'linebreak-style': ['error', 'unix'], // 换行符风格
    'max-depth': ['error', 4], // 强制可嵌套的块的最大深度
    'max-nested-callbacks': ['error', 3], // 强制回调函数最大嵌套深度
    'max-params': ['error', 6], // 强制函数定义中最多允许的参数数量
    'multiline-comment-style': ['error', 'starred-block'], // 强制对多行注释使用特定风格
    'multiline-ternary': ['error', 'always-multiline'], // 要求或禁止在三元操作数中间换行
    'new-cap': ['error', { capIsNew: false }], // 要求构造函数首字母大写
    'no-array-constructor': ['error'], // 禁用 Array 构造函数
    'no-mixed-operators': ['error'], // 禁止混合使用不同的操作符
    'no-mixed-spaces-and-tabs': ['error'], // 禁止空格和 tab 的混合缩进
    'no-multiple-empty-lines': ['error'], // 禁止出现多行空行
    'no-new-object': ['error'], // 禁用 Object 的构造函数
    'no-tabs': ['error'], // 禁用 tab
    'no-trailing-spaces': ['error',{ skipBlankLines: false, ignoreComments: false }], // 禁用行尾空白
    'no-whitespace-before-property': ['error'], // 禁止属性前有空白
    'nonblock-statement-body-position': ['error', 'beside'], // 强制单个语句的位置
    'object-curly-spacing': [2, 'always'], // 不允许大括号内的空格
    'operator-linebreak': ['error', 'after'], // 强制操作符使用一致的换行符
    'padded-blocks': [2, 'never'], // 要求或禁止块内填充
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }], // 强制使用一致的反勾号、双引号或单引号
    'semi': [2, 'never'], // 要求或禁止使用分号代替": 2, // ASI
    'semi-spacing': [2, { before: false, after: true }], // 强制分号之前和之后使用一致的空格
    'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': ['error', 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': ['error'], // 要求操作符周围有空格
    'space-unary-ops': ['error', { words: true, nonwords: false }], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': ['error', 'always'], // 强制在注释中 // 或 /* 使用一致的空格

    /**
     * ECMAScript 6
     */
    'arrow-spacing': [2, { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
    'no-var': ['error'], // 要求使用 let 或 const 而不是 var
    'object-shorthand': ['error', 'always'], // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }] // 要求回调函数使用箭头函数
  }
}
