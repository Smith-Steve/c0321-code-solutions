#!/
npm init --yes
npm install react
npm install react-dom
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install @babel-core --save-dev
npm install babel-loader --save-dev
npm install @babel/plugin-transform-react-jsx --save-dev
touch webpack.config.js
Location1=$(pwd)
mkdir src
cd src
touch index.jsx
cd ..
mkdir dist
cd dist
Location2=$(pwd)
touch index.html
touch styles.css
cd ..
cd ..
cp html_skeleton.txt $Location2/'index.html'
cp webpack_config_javascript.txt $Location1/'webpack.config.js'
