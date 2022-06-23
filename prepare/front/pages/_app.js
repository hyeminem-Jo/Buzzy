import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const Buzzy = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Buzzy</title>
      </Head>
      <Component />
    </>
  );
};

Buzzy.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Buzzy;
