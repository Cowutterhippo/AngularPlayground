# CommonUi

This Article Helped me out.
TODO: Move this whole project into a new repository;

https://www.willtaylor.blog/complete-guide-to-angular-libraries/

local:
ng build --project=playground-common-ui
cd dist/playground-common-ui
npm link
ng build --project=playground-common-ui
ng serve

In Production
For production, we will publish our library to npm, and then have it installed into the application using npm install.

First, you will need to create an npm account. Now login from the command line:

npm login
From the project root folder:

cd dist/playground-common-ui
npm publish
Our package is now published on npm (publicly), and we can install it by adding it to our application’s package.json dependencies and running npm install:

"dependencies": {
    ...
    "playground-common-ui": "~0.0.1"
}
Library dependencies

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Code scaffolding

Run `ng generate component component-name --project common-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project common-ui`.
> Note: Don't forget to add `--project common-ui` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build common-ui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build common-ui`, go to the dist folder `cd dist/common-ui` and run `npm publish`.

## Running unit tests

Run `ng test common-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
