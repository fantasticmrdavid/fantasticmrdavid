if ! type "yarn" > /dev/null; then
  npm install
  npm i -g yarn
fi

yarn build

mkdir deploy
cp -R ./public/* ./deploy/
