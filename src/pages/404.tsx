import React from 'react';
import { Link } from 'gatsby';
import { Result, Button, Layout } from 'antd';
import Helmet from '@/components/Helmet';
import UFooter from '@/components/Footer';
import styles from './404.module.less';

const Content = Layout.Content;
const Footer = Layout.Footer;

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout className={styles.main}>
        <Content>
          <Helmet title="404" />
          <Result
            status="404"
            title="404"
            subTitle="抱歉，你访问的页面不存在。"
            extra={
              <Link to="/">
                <Button type="primary">返回首页</Button>
              </Link>
            }
          />
        </Content>
        <Footer>
          <UFooter />
        </Footer>
      </Layout>
    )
  }
}

export default NotFoundPage
