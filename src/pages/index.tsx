import React from 'react';
import { Row, Col } from 'antd';
import Helmet from '@/components/Helmet';
import { graphql } from 'gatsby';
import ShortAbout, { ISocialInfo } from '@/components/ShortAbout';
import { File, Site, Social } from '@/graphql-types';
import styles from './index.module.less';

interface IProps {
  data: {
    file?: File;
    site?: Site
  }
}

const IndexPage: React.FC<IProps> = (props) => {
  const {
    data: { file, site },
  } = props;

  const social: Social = site.siteMetadata.social;

  const socialInfoList: ISocialInfo[] = Object.keys(social)
    .map(item => {
      return {
        icon: item,
        // @ts-ignore
        url: social[item]
      }
    })

  return (
    <div className={styles.main}>
      <Helmet title="首页" />
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>{site.siteMetadata.title}</h1>
          <span className="subheading">
            静下心来敲一行代码
          </span>
        </div>
      </header>
      <div className={styles.container}>
        <Row>
          <Col span={18}>
            123
          </Col>
          <Col span={6}>
            <div className={styles.aside}>
              <ShortAbout
                fluid={file.childImageSharp.fluid}
                author={site.siteMetadata.author}
                socialInfoList={socialInfoList}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

IndexPage.defaultProps = {
  data: {}
}

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    site {
      siteMetadata {
        title
        author
        social {
          twitter
          weibo
          github
          yuque
          zhihu
        }
      }
    }
  }
`

export default IndexPage;
