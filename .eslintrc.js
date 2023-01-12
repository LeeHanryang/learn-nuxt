module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
        // https://prettier.io/docs/en/options.html
        // singleQuote: false,
        // semi: true,
        // useTabs: true,
        // tabWidth: 2,
        // trailingComma: "all",
        // printWidth: 80,
        // bracketSpacing: true,
        // arrowParens: "avoid",
        printWidth: 80, // 한 줄의 라인 수
        tabWidth: 2, // tab의 너비
        useTabs: false, // tab 사용 여부
        semi: true, // ; 사용 여부
        singleQuote: false, // 'string' 사용 여부
        quoteProps: 'consistent', // 객체 property의 따옴표 여부
        bracketSpacing: true, // Object literal에 띄어쓰기 사용 여부 (ex: { foo: bar })
        endOfLine: 'auto', // 라인 엔딩 지정
        arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
        htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정
        jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
        jsxSingleQuote: false, // JSX에 singe 쿼테이션 사용 여부
        proseWrap: 'preserve', // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
        trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
        vueIndentScriptAndStyle: true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
        parser: '', // 사용할 parser를 지정, 자동으로 지정됨
        filepath: '', // parser를 유추할 수 있는 파일을 지정
        rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
        rangeEnd: Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
        requirePragma: false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
        insertPragma: false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
        overrides: [
          {
            files: '*.json',
            options: {
              printWidth: 200
            }
          }
        ] // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
      }
    ]
  }
};
