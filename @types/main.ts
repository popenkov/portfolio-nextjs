type Img = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

type MainObj = {
  title: string;
  title2: string;
  name: string;
  subtitle: string;
  img: Img;
};
export type MainState = {
  mainPage: MainObj;
};
