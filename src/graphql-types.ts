import { FluidObject } from 'gatsby-image';

export interface Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
}

export interface ImageSharp extends Node {
  id: string;
  fluid: FluidObject | null;
}

export interface File extends Node {
  childImageSharp: ImageSharp | null;
}

export interface Social {
  twitter: string;
  weibo: string;
  github: string;
  yuque: string;
  zhihu: string
}

export interface SiteMetadata {
  title: string | null;
  author: string | null;
  description: string | null;
  siteUrl: string | null;
  // 社交信息
  social: Social
}

export interface Site extends Node {
  id: string;
  siteMetadata: SiteMetadata
}
