# link-stations-power

A program that solves the most suitable (with most power) link station for a device at given point [x,y]

## Tech choices

- Use Snowpack as a trial, as it can speed up development time
- Use Material-UI, since it add extra UI features and animation automatically.

## Features

Features that are in the app

- Show the best station for all the points
- Show a map with the stations and points as a visual proof of the calculation
- The user can click the points in the list or in the map to highlight it
- Unit test for the getBestStation function

Potential improvements
- Add more tests for the visual part
- Add an Input to allow adding extra points on the map

## Instructions

### To start developing

Run `npm start`
This runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### To test

Run `npm test`

### To build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.
