const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // JavaScript, CSS, 이미지 확장자 파일
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env']}
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pages/openapi.html', // 내가 만든 OpenAPI 페이지 파일명
      filename: 'index.html',           // 아웃풋 html 파일명
      minify: {
        removeAttributeQuotes: true, // html 속성 쿼트 제거
        collapseWhitespace: true,    // html 줄넘김을 한줄로
        removeComments: true         // 주석 제거
      },
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',    // 내가 만든 스타일
      chunkFilename: 'style.css', // 아웃풋 css 파일명
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // CSS 최적화
      new TerserPlugin({
        terserOptions: {
          mangle: {properties: true}, // 객체 속성 이름 난독화
          compress: {drop_console: true, pure_funcs: ['console.log']}, // 콘솔로그 제거
          format: {comments: false}, // 모든 주석 제거
          keep_fnames: true,
        }
      })
    ]
  },
  entry: './script.js', // 프론트엔드 스크립트
  output: {
    filename: 'script.js', // 아웃풋 파일명
    path: path.resolve(__dirname, 'dist'), // 아웃풋 폴더명
  },
  mode: 'production', // 배포 모드
};
