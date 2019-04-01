# tocca_ts_app

- https://tocca-project-9f4fc.firebaseio.com
- https://tocca-project-9f4fc.firebaseapp.com/

> My ultimate Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# .env

for [direnv/direnv](https://github.com/direnv/direnv)

```
$ touch .envrc
```

```
export FIREBASE_API_KEY=<API KEY>
```

```
$ direnv allow
```

# firebase

```
$ firebase login
$ firebase init

Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.
$ Hosting

What do you want to use as your public directory?
$ dist

Configure as a single-page app (rewrite all urls to /index.html)?
$ N
```

# deploy

```
$ yarn build
$ firebase deploy
```
