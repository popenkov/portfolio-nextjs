type ImgType = {
  src: string;
  width: string;
  height: string;
};

export type PostType = {
  img: ImgType;
  title: string;
  date: string;
  preview: string;
  href: string;
  id: number;
};

export type BlogState = {
  blog: PostType[];
};
