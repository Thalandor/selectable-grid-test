# Frontend test

This project was created using CRA (no time to waste configuring webpack/babel and co)

## To start the project

This is a standard CRA project, to start it follow the next steps

### `yarn`

Install the dependencies of the application

### `yarn start`

Launch the application on localhost:3000
There is no testing, I didn't have enough time :/

## General decisions

Usually on this kind of developments using react there are two options:

- Make the components as independent as possible (it's the one I followed)
- Make the classic dummy child components with a parent who controls everything.

The component Cell is the one in control and it knows what it has to do by itself without depending of its parent, the advantage of this approach is that with the use of context we could separate the Board and the Cell components of each other quite easily. However I completely forgot about the requestbin step until the end and that messed a bit the approach. If I had to start again I would probably go for the other one.

## Known bugs

- I didn't control the mouse release button outside the board, so I'm quite sure it causes a bug.

## Other things

- Double click hook isn't mine, I took it from some page where they were talking about how to implement a double click.
