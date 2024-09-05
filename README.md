# Module 14 Mini-Project: CineJournal App

In this mini-project, you will work with a group to build a full-stack crowdfunding app using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.

### Authored by Group 4 
[Kevin](https://github.com/kevinvongmany/), [Wendy](https://github.com/Wendyydxiao), [June](https://github.com/Lijujujune) & [Kate](https://github.com/KateHanSta17)

## Description

CineJournal is a digital journal to track your viewing history of Movies & Television Shows that you watch across multiple platforms; by title, date viewed, where viewed and rating.
The app will save your viewed history, allow you to view and continue to add new media as you view your way through your watch list. 
The app uses [packages] & [frameworks] further outlined belo and the UI/UX was designed using Miro.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

Provide step-by-step instructions on how to set up and install the project on a local machine.

## Example User-Journey
![Early Concept and UI design](./assets/images/cinejournal%20example.jpg)
* [Link to original Miro Board](https://miro.com/app/board/uXjVKj-YzjQ=/)

## Usage

```bash
# Clone the repository
git clone https://github.com/kevinvongmany/cinejournal-webapp

# Navigate to the project directory
cd cinejournal-webapp

# Install dependencies
npm install
```

-----------------------------

## User Stories

* As a user, I want to see a list of current projects seeking funding.

* As a user, I want to be able to create an account.

* As a registered user, I want to post my own projects to ask for funding.

### Acceptance Criteria

* It's done when the `/` homepage route renders a list of all projects from the database.

* It's done when the `/project/:id` route renders an individual project's details based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/profile` route renders the logged-in user's projects and a form to create a new project.

* It's done when only a logged in user can visit the `/profile` route.

* It's done when a logged in user is redirected to `/profile` when they try to visit `/login` again.

* It's done when a user on the profile page can use the form to create a new project in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Specifications

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `Project`

    * `id`: primary key

    * `name`

    * `description`

    * `date_created`

    * `needed_funding`

    * `user_id`: foreign key that references `User.id`

  * Users have many projects, and projects belong to a user.

    * If a user is deleted, all associated projects are also deleted.

---

## Getting Started

The following should be created for the Mini-Project:

* Be sure to change the `.env.EXAMPLE` file to just `.env` and update the credentials correctly. 

* Create a `Views` folder to setup the folder structure to follow the MVC paradigm.

* Be sure to review over the [Express Handlebars](https://www.npmjs.com/package/express-handlebars) if you need a refresher on how to set up Handlebars for your `Views` folder. 

* Consider the task based on the Acceptance Criteria. Which folder should you work to see data returning from an API call?

## 💡 Hints

* What tools can you use to test the existing API routes if you don't yet have a front end?

* Where would you place the client-side JavaScript for capturing form data?

* How can middleware help protect routes from non logged-in users?

* How can Handlebars.js helpers (both built-in and custom) be used to render the desired results?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Add an `/edit/:id` route for logged in users to update their projects' details. Then deploy the app to Render!

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
