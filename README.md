# Tieme Ndo CRM

You can find the deployed project at [https://tiemendocrm.netlify.com/](https://tiemendocrm.netlify.com/).

## Contributors

|                                [Chase Garsee](https://github.com/chasegarsee)                                 |                                              [Dustin Bailey](https://github.com/dgbailey)                                               |                                                     [Jason Tyzzer](https://github.com/JTyzz)                                                     |                                             [Joshua Kersting](https://github.com/KerstingJ)                                              |                                               [Andrew Safran](https://github.com/AWSafran)                                               |
| :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|                [<img src="./team/Chase.jpg" width = "200" />](https://github.com/chasegarsee)                 |                              [<img src="./team/dustin.jpg" width = "200" />](https://github.com/dgbailey)                               | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/JTyzz) |                               [<img src="./team/Josh.jpg" width = "200" />](https://github.com/KerstingJ)                                |                               [<img src="./team/Andrew.jpg" width = "200" />](https://github.com/AWSafran)                               |
|           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/chasegarsee)            |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/dgbailey)                          |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JTyzz)                                |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KerstingJ)                          |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AWSafran)                           |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/dustin-bailey-758ab195/) |                  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                   | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/josh-kersting-86142911b/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/andrew-safran-5a1432114/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Java/Spring](https://img.shields.io/badge/Java/Spring-JDK_11-blue.svg)

## Project Overview

[Trello Board](https://trello.com/b/5Svtzpqc/labs13-agriculture)

[Product Canvas](https://docs.google.com/document/d/1_fGETRF4KUppUkOO7DZxUqPFMrWGGSpBdn_sash6JOA/edit?usp=sharing)

Tieme Ndo is an organizatino in Ghana, which works with local farmers, retailers, and organizations to support their businesses. This application is a Client Relationship Manager, or CRM, built to help them do so. Tieme Ndo can use this application to keep track of all of their existing clients, as well as leads, and make sure they can fulfill their needs to the best of their ability.

### Key Features

- Manage Users - Admin users have the ability to create, edit, and delete existing user accounts
- Client Search - Users can search for clients by name, location, and lead status for all client types (farmer, retailer, and organization)
- Add Client - Users can add a new record for a client if that client does not already exist within the system
- Inventory Management - Users can view and update Tieme-Ndo inventory items
- Client View - Users can view and interact with an individual client's data, including adding, deleting, or editing transactions and instalment payments.
- feature five

## Tech Stack

### Front end built using:

#### _React-Redux_

- Components allow reusability rather than repetition
- Class components allow for simple creation of complex interactions
- Redux Store allows simple access to data from any component
- Actions and reducers create easier to manage file and code structure

#### _Styled Components_

- Simple implementation of CSS within React.js files
- Ability to write styles in the same file as a component for readability, or export/import styles for reusability
- Nesting selectors for more intuitive writing of styles

#### _ReactStrap_

- Clean, professional design for a number of components
- Pre-built funcitonality for components such as Modals
- Consistent starting point for formatting and styling

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/labs13-agriculture/Tiemendo-Back-End) built using:

#### Java/Spring

- Strongly-typed Object-Oriented language helps prevent unintended behaviors
- Fast and easy creation of RESTful API controllers
- Behind-the-scenes configuration to ensure compatibility with other Java libraries

#### PostgreSQL

- Seamless integration with Spring Data JPA and Heroku backend deployment

# APIs

## Oauth 2.0

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_AUTH_CLIENT_ID - This is the Client ID for the OAuth 2.0 Server
    * REACT_APP_AUTH_CLIENT_SECRET - This is the Client Secre tfor the Oauth 2.0 Server

# Content Licenses

| Resource    | Source / Creator | License                                                  |
| ----------- | ---------------- | -------------------------------------------------------- |
| FontAwesome | Fonticons, Inc   | [Creative Commons](https://fontawesome.com/license/free) |

# Installation Instructions

- Clone this Repository to your local machine
- Use `yarn install` to install dependencies
- Use `yarn start` to start development server

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs13-agriculture/Tiemendo-Back-End/blob/master2/README.md) for details on the backend of our project.

See [Android Documentation](https://github.com/labs13-agriculture/android/blob/master/README.md) for details on the Android portion of our project.
