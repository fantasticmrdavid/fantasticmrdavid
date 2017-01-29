npm install
npm run build
mkdir deploy
cp ./src/client/index.html ./deploy/index.html
cp -r ./src/client/public/* ./deploy/public
