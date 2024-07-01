# LexipediaAPI
This is a repo that will house my attempt of a personal api that I can use to improve my vocabulary and possibly help me to re-learn portuguese. We are mostly just winging this thing.

## Objective
Create an API that will:
1) Query a database to see if the word has been persisted before.
2) If not, it will query another API/Website to retrieve the meaning of the word and persist it to the db
3) Show the meaning of the word, example of use with a sentence and  **possibly** synonyms

## Considerations
1) Auth on the API. Can't trust the world with a freely hosted API
2) Possible rate limit as a layer of extra protection from abuse
3) Logging all requests

## Tech Stack
*Still a working progress*

- .NET Core / or Node... Will make a decision soon
- SQLite database

# User stories
***These are being completed as we go along. No need to create stories for till completetion of the project. Eat the elephant in small chunks***

- As a developer, I want to create the initial application (03/07/2024)
    - Update backend framework to latest one. Simply upgrade from command prompt
    - Create new project
    - clone repository from GitHub
    - Add project to Repo
    - Ammend README file to reflect changes (especially tech stack)
    - Push repo to remote
    - Test: New Project is set up
    - Test: New Project compiles
    - Test: Repo is updated
    - Test: New Project shows up in remote repo

