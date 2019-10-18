import React from 'react';
import Helmet from '@/components/Helmet';
import { graphql } from 'gatsby';
import ShortAbout, { ISocialInfo } from '@/components/ShortAbout';
import { File, Site, Social } from '@/graphql-types';

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
    <div>
      <Helmet title="首页" />
      Index Page
      <div style={{ width: 240 }}>
        <ShortAbout
          fluid={file.childImageSharp.fluid}
          author={site.siteMetadata.author}
          socialInfoList={socialInfoList}
        />
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
