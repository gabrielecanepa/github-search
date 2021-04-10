## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:gabrielecanepa/js-plugins-101.git my-js-project
cd my-js-project
rm -rf .git
yarn install
stt # open this folder in Sublime Text
# or
code . # in VSCode
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint src
webpack-dev-server
```
