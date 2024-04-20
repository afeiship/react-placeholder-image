# react-placeholder-image
> A placeholder image component.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-placeholder-image
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-placeholder-image/dist/style.css";

  // or use sass
  @import "~@jswork/react-placeholder-image/dist/style.scss";

  // customize your styles:
  $react-placeholder-image-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import PImg from '../../src/main';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;

    img {
      margin: 20px auto;
      vertical-align: middle;
      display: block;
    }
  `;

  export default () => {
    return (
      <Container>
        <PImg size={100} text='aric' color='FF0000' bg='000000' />
        <PImg size={200} text='Hello World' />
        <PImg width={300} height={100} text='Hello World' color='#ff0000' />
        <PImg text size={200} />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-placeholder-image/

## license
Code released under [the MIT license](https://github.com/afeiship/react-placeholder-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-placeholder-image
[version-url]: https://npmjs.org/package/@jswork/react-placeholder-image

[license-image]: https://img.shields.io/npm/l/@jswork/react-placeholder-image
[license-url]: https://github.com/afeiship/react-placeholder-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-placeholder-image
[size-url]: https://github.com/afeiship/react-placeholder-image/blob/master/dist/react-placeholder-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-placeholder-image
[download-url]: https://www.npmjs.com/package/@jswork/react-placeholder-image
