# monorepo-example

NOTES:

-   Work in progress!
-   swapi.api is down! https://dev.to/fullstackchris/public-service-announcement-the-star-wars-api-swapi-co-is-down-3pdm,
    which is why I used https://anapioficeandfire.com/ to get Game of Thrones characters. In the initial phase the focus is on the architecture and ss the project is still in WIP, I've still got some stuff to do, namely displaying character details (instead of Star Wars movie details), general styling & unit and integration testing.

On the structure:

-   I've decided to go with a small server running as a proxy between the React app and the external API (anapioficeandfire.com). I find this to be a good approach when I'm communicating with 3rd party API's and I like the overall structure as it's nicely separated and the frontend remains clutter free.

-   Install Lerna as a dev dependency, at repo root level: yarn add --dev lerna

-   In the root of the repository execute 'yarn lerna:clean:install' and after that:

    Root api/:

-   start the server with 'yarn dev'

    Root apps/got:

-   start the react app with 'yarn dev'
-   host
    http://localhost:4000/
