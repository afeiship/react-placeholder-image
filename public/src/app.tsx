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
      <div style={{ width: 300, height: 100, margin: '10px auto' }}>
        <PImg text='Hello World' width={300} height={100} devicePixelRatio={2} fullWidth fullHeight />
      </div>
    </Container>
  );
};
