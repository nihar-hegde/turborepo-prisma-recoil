# Turborepo starter

This is an official starter Turborepo.

## Notes for setting up shadcnui and tailwindcss in a turborepo.

Run the following command to start a default turborepo:

```sh
npx create-turbo@latest
```

1.  Go to packages/ui and install tailwindcss.

    ```sh
    npm install -D tailwindcss postcss autoprefixer
    ```

    create tailwind.config.ts file and postcss.config.js files

        add the below to postcss.config.js

        ```javascript
         // eslint-disable-next-line no-undef

        module.exports = {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
        };
        ```

2.  Now install schadcnui cli

    ```sh
     npx shadcn-ui@latest init
    ```

    -> choose the default options (will change later)

    -> copy the components folder and lib folder (auto created while installing shadcn ui.) inside the src.
    -> create a styles folder inside src.
    -> copy the globals.css file inside the styles folder.

3.  Inside packages/tsconfig.json add the follwing:

    ```json
    "baseUrl": ".",
    "paths": {
    "@ui/*": ["./src/*"],
    "@ui/components/ui*": ["./src/components/ui*"]
    }
    ```

    mine looks like this

    ```json
    {
      "extends": "@repo/typescript-config/react-library.json",
      "compilerOptions": {
        "outDir": "dist",
        "baseUrl": ".",
        "paths": {
          "@ui/_": ["./src/_"],
          "@ui/components/ui*": ["./src/components/ui*"]
        }
      },
      "include": ["src"],
      "exclude": ["node_modules", "dist"]
    }
    ```

4.  Change the path for css and aliases inside packages/components.json
    ```json
    {
      "$schema": "https://ui.shadcn.com/schema.json",
      "style": "default",
      "rsc": true,
      "tsx": true,
      "tailwind": {
        "config": "tailwind.config.ts",
        "css": "src/styles/globals.css",
        "baseColor": "slate",
        "cssVariables": true,
        "prefix": ""
      },
      "aliases": {
        "components": "@ui/components",
        "utils": "@ui/lib/utils"
      }
    }
    ```
5.  inside packages/typescript-config/nextjs.json change the paths
    add the follwing path

    ```json
    "paths": {
      "@ui/*": ["../../packages/ui/src/*"]
    }
    ```

6.  inside your next.js app apps/appname

    ### make sure that inside package.json dependencies you have `"@repo/ui": "*",`

    -> install tailwindcss

    ```sh
        npm install -D tailwindcss postcss autoprefixer
    ```

    -> inside tailwind.config.ts
    export \* from "@repo/ui/tailwind.config";

    -> inside postcss.config.js
    module.exports = require("@repo/ui/postcss.config");

    -> in app/layout.tsx change the globals.css import
    `import "@repo/ui/globals.css";`

Do a npm install in the root folder just for good Measures.

## Installing shadcn components

    ### run the install command from the shadcn document inside packages/ui.
