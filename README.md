# Google Books Search 

### A single page search app by Rachel Jacobson

  A front-end only application built in React.js. State is managed via Redux. It consumes the Google Books API and returns a paginated list of books based on the input query.  Users can filter results by language. This app fulfills all technical & functional requirements for the Lucidworks SPA search application coding challenge (React substituted for Angular as discussed during phone screen).
App has been tested in IE11, Firefox, and Chrome. 
The [react-paginate](https://github.com/AdeleD/react-paginate) library is used to create pagination controls - all other components are built from scratch.
No use of Bootstrap, Foundation or any other CSS framework. No jQuery - The axios library is used to make API calls. The app is written entirely in ES6 and makes use of ES6 features like classes and arrow functions.
### [Live Demo!!](https://rjacobson16.github.io/Search-Results-SPA-coding-challenge/)

## Setup

To run the app from your local machine:

`$ git clone https://github.com/rjacobson16/Search-Results-SPA-coding-challenge.git`

`$ cd Search-Results-SPA-coding-challenge`

* Because the app is deployed via github pages, the *bundle.js file is included in the repo*, and so you can simply `open index.html`

If you want to delete the already-bundled output:

`$ npm install`
`$ webpack` 
`$ open index.html`

## Improvements needed

* Responsiveness - This app uses flexbox which results in a mildly responsive UI (Small laptop screens to large monitors), but is not fully mobile responsive.
Given more time, I would use media queries for a completely mobile-friendly UI. 

* Security: This app makes cross-origin HTTP requests directly from the frontend to the Google Books API. While this is fine for a coding challenge,
if I were to deploy to production, I would implement a simple backend in order to protect my Google Books API key

* Testing: No unit tests. Given more time, I would write tests with Jest. 

## Wireframe

![wf](https://user-images.githubusercontent.com/26705787/34119059-a3ef3e9a-e3d5-11e7-94f6-ef63c4e8cfce.png)
