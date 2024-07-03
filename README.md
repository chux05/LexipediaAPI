# LexipediaAPI

This is a repo that will house my attempt of a personal api that I can use to improve my vocabulary and possibly help me to re-learn portuguese. We are mostly just winging this thing.

## Objective

Create an API that will:

1. Query a database to see if the word has been persisted before.
2. If not, it will query another API/Website to retrieve the meaning of the word and persist it to the db
3. Show the meaning of the word, example of use with a sentence and **possibly** synonyms

## Considerations

1. Auth on the API. Can't trust the world with a freely hosted API
2. Possible rate limit as a layer of extra protection from abuse
3. Logging all requests

## Tech Stack

_Still a working progress_

- Express.js (Node)
- Database: Still to be decided. Leaning towards MongoDB.
- ORM? depends on database
- Docker?

# How to run
- Clone repo
- Run the following commands on CMD (Windows). If you use a different OS, please use this link to find instructions on how to run the project. https://expressjs.com/en/starter/generator.html
> $ cd src
> 
> $ cd lexipediapi
> 
> $ npm install
> 
> $ set DEBUG=lexipediapi:* & npm start

# User stories

**_These are being completed as we go along. No need to create stories for till completetion of the project. Eat the elephant in small chunks_**

- As a developer, I want to create the initial application (03/07/2024)

  - ~Create new project~
  - ~clone repository from GitHub~
  - ~Add project to Repo~
  - ~Ammend README file to reflect changes (especially tech stack)~
  - ~Push repo to remote~
  - ~Test: New Project is set up~
  - ~Test: New Project compiles~
  - ~Test: Repo is updated~
  - ~Test: New Project shows up in remote repo~

- As a developer, I want to set up basic data store for the API (06/07/2024)

  - Download MongoDB (still isn't on the PC)
  - Download either Mongoose or native driver
  - Create Mongo server and db
  - Create data models and objects neccessary
  - Commit and push changes
  - Test: Server and Database run
  - Test: Database can be accessed
  - Test: Model objects are created
  - Test: Data can be persisted
  - Test: Data can be read

- As a developer, I want to set up basic routing for the API (09/07/2024)
