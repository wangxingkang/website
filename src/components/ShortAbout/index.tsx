import React from 'react';
import { Icon } from 'antd';
import Image, { FluidObject } from 'gatsby-image';
import styles from './index.module.less';

export interface ISocialInfo {
  icon: string,
  url: string
}

interface IProps {
  fluid: FluidObject;
  author: string;
  socialInfoList: ISocialInfo[];
}

const ShortAbout: React.FC<IProps> = (props) => {
  const { fluid, author, socialInfoList } = props;
  return (
    <div className={styles.main}>
      <div className={styles.avatar}>
        <Image fluid={fluid} />
      </div>
      <div className={styles.author}>
        {author}
      </div>
      <div className={styles.socialMedia}>
        {socialInfoList.map(item => {
          return (
            <a key={item.icon} target="_blank" href={item.url}>
              <Icon type={item.icon} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

ShortAbout.defaultProps = {
  socialInfoList: []
}

export default ShortAbout;
