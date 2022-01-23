# Testhy Entry Task

## Setting up Giphy API Key for app

Check `.env.example` file to see environment variables structure for `dev` or `production`.

To use for `dev`, create environment file with name `.env.local` and set keys by given example.

## Running project

Make sure you have installed `yarn` to your machine before running app.

-   Windows - <https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable>
-   MacOS using `brew` - <https://formulae.brew.sh/formula/yarn>

To run project in `dev` mode run `yarn start`.

To run project in `prod` mode run `yarn start:prod` (it will run build and serve ). You can also separate commands: `yarn build` to create prod build files, `yarn serve:prod` to serve builded files.

## Technical

-   ReactJs;
-   React Context for global state management;
-   Chakra UI as component library;
-   Local Storage to keep locked gifs;
