# Carasti assignment

### Folder Structure

```
carasti-test/
  node_modules/
  public/
    index.html
    logo-sm.svg
  src/
    assets/
        fonts/
        icons/
        images/
        styles/
    components/
        breadcrumb/
        button/
        card/
        dashboard-layout/
        header/
        icons/
        progress-bar/
        sidebar/
        skeletons/
        tag/
    hooks/
    pages/
        TfoDetails/
    utils/
        chart.ts
        formatter.ts
    App.tsx
    index.scss
    index.tsx
    
  README.md
  package.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


#### Notes: 
- Most of the components built from scratch to keep the project smother.
- I didn't add routes library because we have only one page now.
- In the components folder we have a small design system.
- There was an issue with the icons in Figma, and I was not able to convert the icon to font icon using icomoon tool that's why I exported them as svg file.
- The design in figma has been built with large screen, so I tried to change a bit with the spacing to have a responsive design.
- I've added setTimeout for loading the data to show card loader.
