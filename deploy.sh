npm install
npm run build
mkdir deploy
cp ./src/client/*.html ./deploy/
cp -R ./src/client/public/ ./deploy/public/
