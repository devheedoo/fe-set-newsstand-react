# fe-set-newsstand-react-devheedoo

## Config

> without CRA

- Yarn
- Babel
- Webpack
- React
- Styled Component

## Install

```bash
$ yarn install
```

## Build

```bash
$ yarn build
```

## Start

```bash
$ yarn start
```

## History

### 1. Babel, Webpack, React

### 2. Styled Components

![make-styled-components](./history/make-styled-components.png)

### 3. File Structure

기능별로 분류하기 (기사 상세보기는 구현하지 않음)

Data:
- loadCategoryList()
- loadPressList()
- loadMyPressList()
- loadNewsList(pressId)
- subscribe(pressId)
- unsubscribe(pressId)

UI:
- setMode(all | my)
- setViewType(card | list)
- setPress(pressId) / setPressListPage(pageNumber)

결론:
- api/
- components/
    - Menubar/
        - LeftMenu/
        - RightMenu/
    - Contents/
        - ListView/
        - CardView/

