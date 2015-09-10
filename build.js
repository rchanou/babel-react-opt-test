var webpack = require('webpack');
var path = require('path');


const config = {
  entry: [
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //loader: 'babel?{ "stage": 0 }',
        loader: `babel?{
          "stage": 0,
          "optional": ["optimisation.react.inlineElements"]
        }`,
        include: path.join(__dirname, 'src')
      }
    ]
  }
};


const compiler = webpack(config);

console.log('Starting file-watching and build process. Press Ctrl+C to exit.');

compiler.watch(333, (err, stats) => {
  if (stats){
    if (stats.hasErrors()){
      stats.toJson().errors.forEach(e => { console.error(e); });
      console.log('----------------------------------------------------------');
    } else {
      console.log('Build done at ' + new Date().toString() );
    }
  }
});
