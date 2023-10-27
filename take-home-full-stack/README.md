# Introduction

Hello 👋,

Thanks for taking the time to complete this brief take-home assignment. While this challenge is tailored to be completed in <ins>under 3 hours</ins>, feel free to take as long as you need up to the deadline provided.

The goal of this exercise is to evaluate your skills in developing a basic full-stack application in TypeScript (React, Node, Express, 3rd-party integration). Feel free to make any assumptions, simplifications, or other changes to the problems - though please state those in your write up when you submit this assignment. Please use as many libraries as is reasonable - there is no sense in rebuilding what has been built. Feel at liberty to structure the project in a way that satisfies you.

Before getting started, please read this document carefully.

**Good luck 🙃**

# Directions

📓 Document all design decisions in `DESIGN_EXPLANATION.md`

**Backend**: Using Node and Express, you will create a single **REST** endpoint to retrieve a list of Magic cards from the Scryfall API based on a provided search string from the client.

- Read the Scryfall API url from a .env file.

**Frontend**: Using React, you will use the included _create-react-app_ skeleton (located at `/client`) to build:

1. A search bar for the user to input a card name to search. Using the input string, make a call to your Node endpoint to lookup cards. The search should work <ins>without</ins> the user needing to click a button. And it should be impossible for a user to submit more than 1 API request per second using this search bar.

2. Display the card results to the user in the most user friendly way you can come up with. Feel free to be creative. All cards must display the following: The card's image(s), name, set name, number, and rarity.

# What counts?

- All functional requirements must be satisfied
- Clean, minimal, Production level code
- General TypeScript/ES6 knowledge
- **Bonus**: Node endpoint tested using a framework of your choice
- **Bonus**: Frontend pagination/sorting
- **Bonus**: Design aesthetically pleasing and responsive in the browser
- **Bonus**: Entire interface is styled using [Tailwindcss](https://tailwindcss.com) exclusively

# Submission

Once you're satisfied with what you've built. Invite _fated-x_ to your repo and email your recruiter to inform the dev team.

# Getting started

With the latest Node LTS installed, run the following commands:

```bash
npm install
cd ./client
npm install
```

To start the Node/React servers, from the project root just run:

```bash
npm start
```

You should now have:

- A Node server running on port **3001**,
- A create-react-app server running on port **3000**

## What will you find inside this boilerplate

In this boilerplate, you will find:

- The main entry file: `index.js`
- A `DESIGN_EXPLANATION.md` file to document your comments and design decisions
- A `client` directory containing a clean bootstrapped copy of **create-react-app**
- Inside the Node `package.json`, we added the following packages:

  - `@swc/core` to transpile our TypeScript (makes it an order of magnitude faster than vanilla transpileOnly)
  - `@tsconfig/node16-strictest` to have the strictest tsconfig options for Node v16.
  - `@types/express` for Express typings
  - `express`
  - `@typescript-eslint/eslint-plugin` to provide TypeScript lint rules
  - `@typescript-eslint/parser` to allow for ESLint to lint TypeScript source code
  - `concurrently` to allow us to run 2 npm scripts at the same time from **npm start**
  - `eslint` to enforce coding best practices
  - `eslint-config-airbnb-base` to enforce Airbnb's ESLint rules
  - `eslint-config-airbnb-typescript` to enforce Airbnb's ESLint rules with TypeScript support
  - `eslint-config-prettier` to turn off all rules conflicting with Prettier
  - `nodemon` to auto-restart the Node server every time a change is made
  - `ts-node` to run TypeScript directly
  - `typescript` to allow us to write TypeScript code

# Scryfall API

### GET /cards/search

https://scryfall.com/docs/api/cards/search

Returns a List object containing Cards found using a fulltext search string.
