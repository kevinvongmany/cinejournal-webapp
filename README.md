# Project 2: Interactive Full-Stack Application
## CineJournal App

Projects play a key role in your journey to becoming a full-stack web developer. As you enter the last phase of the boot camp, you’ll begin to apply for development jobs. If you want to land interviews, your portfolio must feature high-quality deployed examples of your work—-and you can use your finished projects for that very purpose.

As your first opportunity to show employers your collaborative skills and coding abilities, this particular project will be a focal point of your portfolio. Employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed collaborative work you have in your portfolio, the more likely you are to get an interview and a job.

### Authored by Group 4 
[Kevin](https://github.com/kevinvongmany/), [Wendy](https://github.com/Wendyydxiao), [June](https://github.com/Lijujujune) & [Kate](https://github.com/KateHanSta17)

> "CineJournal - Your digital diary to track, rate, and remember every movie and show you’ve watched & loved (or hated)!"

### GitHub Repository
* [cinejournal web-app Github](https://github.com/kevinvongmany/cinejournal-webapp)

### Render Link
* [CineJournal Render](https://cinejournal-webapp.onrender.com/)

### Presentation Slide Deck
* [Google Slides Presentation Deck](https://docs.google.com/presentation/d/1Bj0qHjcBjgfG8bgPua0K_Woulp7lCghDiQBMSCB6z1I/edit?usp=sharing)

## Description

CineJournal is a digital journal to track your viewing history of Movies & Television Shows that you watch across multiple platforms; by title, date viewed, where viewed and rating.
The app will save your viewed history, allow you to view and continue to add new media as you view your way through your watch list. 
The app uses various [technologies](#technologies) further outlined below and the UI/UX was designed using Miro.

## Table of Contents

- [Design](#example-user-journey)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Project Requirements](#project-requirements)
- [License](#license)


## Example User-Journey
### Original Concept as designed in Miro
![Early Concept and UI design](./assets/images/cinejournal%20example.jpg)
* [Link to original Miro Board](https://miro.com/app/board/uXjVKj-YzjQ=/)


### Final CineJournal UI at Deployment:
![Login View](./assets/images/view%20copy.jpg)


## Usage

```bash
# Clone the repository
git clone https://github.com/kevinvongmany/cinejournal-webapp

# Navigate to the project directory
cd cinejournal-webapp

# Install dependencies
npm install
```

## Features

* Login / Account Creation
* Enter & save media to a watchlist
* Media is saved in account between visits 
* Add new Media from the watchlist page 
* Logout

## Technologies

cinejournal-webapp
* bcrypt@5.1.1
* connect-session-sequelize@7.1.7
* dotenv@8.6.0
* express-handlebars@5.3.5
* express-session@1.18.0
* express@4.19.2
* moment@2.30.1
* pg@8.12.0
* sequelize@6.37.3
* star-rating.js@4.3.1

-----------------------------

## Project Requirements
You and your group will use everything you’ve learned over the past six modules to create a real-world full-stack application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:


* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the template engine.
* Use PostgreSQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Be deployed using Render (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).