type Image = {
  name: string,
  src: string,
}

interface Props {
  images: Image[],
  stopLoading: () => void,
}

export default ({ images, stopLoading }: Props) => {
  images.map((i: Image) => {
    const img = new Image();
    img.onload = () => {
      stopLoading();
    };
    img.src = i.src;

    return img;
  });

  return null;
};
