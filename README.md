# @wevns/preprocess-webpack-loader

This package provides a loader for webpack that runs files
through [preprocess](https://www.npmjs.com/package/preprocess), allowing you to create preprocessor directives in your
program!

This package exists because [preprocess-loader](https://www.npmjs.com/package/preprocess-loader) uses an outdated
version of preprocess.

## Installation

`npm i -D @wevns/preprocess-webpack-loader`

or

`yarn add -D @wevns/preprocess-webpack-loader`

## Usage

Add it to your existing rules

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: [
          // your existing loaders...
          {
            loader: '@wevns/preprocess-webpack-loader',
            options: {
              // this is optional,
              // preprocess auto detects this using the
              // file's extension but you can also
              // explicitly state it!
              type: 'js',
              context: {
                // by default context already contains all your
                // environment variables
                DEV_MODE: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

Preprocess doesn'
