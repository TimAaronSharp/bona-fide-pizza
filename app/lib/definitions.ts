
export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type LinkInfo = {
  name: string;
  href: string;
}

export type LinkObject = {
  link: LinkInfo;
  image: ImageType;
}