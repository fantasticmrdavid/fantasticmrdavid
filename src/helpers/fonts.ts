import FontFaceObserver from 'fontfaceobserver';

export const LoadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Josefin+Slab:400,600|Nunito+Sans:300,600';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const josefin = new FontFaceObserver('Josefin Slab');
  const nunito = new FontFaceObserver('Nunito Sans');

  josefin.load();
  nunito.load();
};
