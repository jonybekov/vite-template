# React Typescript Vite Template
⚡Vite template with opinionated folder structure

# Features
- Vitest & RTL for unit testing
- UnoCSS - Atomic css library for styling
- React Router v6+ for routing

# How to scaffold
Replace ``my-app`` with the name you want. Or put omit it to copy to current directory

```
npx degit jonybekov/vite-template my-app
```

# Project structure 🏗

The project structure follows the idea from https://github.com/oldboyxx/jira_clone

There are two special root folders in `src`: `app` and `shared` (described below). All other root folders in `src` (in our case only one: `home`) should follow the structure of the routes. We can call these folders modules.

The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from `src/shared`.** This makes the codebase easier to understand, and if you're fiddling with code in one module, you will never introduce a bug in another module.

<br>

| File or folder   | Description                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/main.tsx`  | The entry file. This is where we import babel polyfills and render the App into the root DOM node.                                                                                                   |
| `src/index.html` | The only HTML file in our App. All scripts and styles will be injected here by Webpack.                                                                                                              |
| `src/app`        | Main application routes, components that need to be mounted at all times regardless of current route, global css styles, fonts, etc. Basically anything considered global / ancestor of all modules. |                                                                                                                                                                  
| `src/home`       | Home module     |                                                                                                                                                                    
| `src/shared`     | Components, constants, utils, hooks, styles etc. that can be used anywhere in the codebase. Any module is allowed to import from shared. |
