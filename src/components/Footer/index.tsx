import React from 'react';
import { Icon } from 'antd';
import styles from './index.module.less';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright <Icon type="copyright" /> WangXingKang Blog 2019
      </div>
    </div>
  )
};

export default Footer;
