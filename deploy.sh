npm ci
npm run build
mkdir deploy
cp -R ./public/* ./deploy/
