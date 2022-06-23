import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

const onSearch = (value) => console.log(value);

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>BUZZY</div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>HOME</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>내 프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search 
            placeholder="# 해시태그" 
            onSearch={onSearch} 
            style={{ verticalAlign: 'middle' }}
            enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>왼쪽 메뉴</Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href='https://github.com/hyeminem-Jo' target='_blank' rel='noreferrer noopener'>Cho Hye Jin</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
