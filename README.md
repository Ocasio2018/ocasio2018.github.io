![Build Status](https://gitlab.com/pages/nuxt/badges/master/build.svg)

# Ocasio2018 Call Page
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Building locally](#building-locally)
- [Deploying to Netlify](#deploying-to-netlify)
- [Creating New Landing Pages](#creating-new-landing-pages)
- [Project Structure](#project-structure)
  - [Assets](#assets)
  - [Components](#components)
  - [Layouts](#layouts)
  - [Middleware](#middleware)
  - [Pages](#pages)
  - [Plugins](#plugins)
  - [Static](#static)
  - [The Store Directory](#the-store-directory)
  - [The nuxt.config.js File](#the-nuxtconfigjs-file)
  - [The package.json File](#the-packagejson-file)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Run the following command on your terminal `git clone https://github.com/aceable/mkt-driving-landing-pages.git`
2. cd into directory and run `npm install`
3. Generate and preview the website with hot-reloading: `npm run dev` or `nuxt`
4. Create New Landing Pages in the /pages directory

Read more at Nuxt's [documentation].

## Deploying to [Netlify](https://www.netlify.com/)

Page is currently temporarily deployed using [app.netlify.com/aceable](https://app.netlify.com/).

## Project Structure
### Assets

The assets directory contains your un-compiled assets such as LESS, SASS, or JavaScript files.

### Components

The components directory contains your Vue.js Components. These can be imported and used in creating pages.

### Layouts

The layouts directory contains your all layouts/templates.

_This directory can not be renamed._

More documentation about Layouts integration

### Middleware

The middleware directory contains your Application Middleware. The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).

_Use of directory will likely not be needing for purposes of building landing pages._

### Pages

The pages directory contains your Application Views and Routes. The framework reads all the .vue files inside this directory and create the router of your application.

All landing pages live in this directory and are grouped in state level sub-directories.

Within the state level directories, all landing pages are stand alone ``.vue`` files.

_This directory can not be renamed._

### Plugins

The plugins directory contains your Javascript plugins that you want to run before instantiating the root vue.js application.

### Static

The static directory contains your static files. Each file inside this directory is mapped to /.

Example: /static/robots.txt is mapped as /robots.txt

_This directory can not be renamed._

### The Store Directory

The store directory contains your Vuex Store files. Vuex Store option is implemented in the Nuxt.js framework. Creating a index.js file in this directory activate the option in the framework automatically.

_This directory can not be renamed._

More documentation about Store integration

### The nuxt.config.js File

The nuxt.config.js file contains your Nuxt.js custom configuration.

_This file can not be renamed._

More documentation about nuxt.config.js integration

### The package.json File

The package.json file contains your Application dependencies and scripts.

_This file can not be renamed._
