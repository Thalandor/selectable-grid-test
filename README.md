# Frontend test

This project was created using CRA (no time to waste configuring webpack/babel and co.)

## Live demo

A live demo can be find on the following url:  
https://thalandor.github.io/selectable-grid-test/

## Prerequisites

To start the project an .env file needs to be created. The content needs to be the following:

| Name                     | Description                      |
| ------------------------ | -------------------------------- |
| REACT_APP_GRID_ROWS      | Number of rows of the board.     |
| REACT_APP_GRID_COLUMNS   | Number of columns of the board.  |
| REACT_APP_REQUESTBIN_URL | Url for RequestBin Post actions. |

## How to start

This is a standard CRA project, to start it use the next commands

`yarn`

Install the dependencies of the application

`yarn start`

Launch the application on localhost:3000

There is no testing, I didn't have enough time :/

## General decisions

Usually on this kind of developments using react there are two options:

- Make the components as independent as possible (it's the one I followed)
- Make the classic dummy child components with a parent who controls everything.

The component Cell is the one in control and it knows what it has to do by itself without depending of its parent, the advantage of this approach is that with the use of context we could separate the Board and the Cell components of each other quite easily and I though I could gain some performance if I could avoid rerendering the whole. However I completely forgot about the requestbin step until the end and that messed a bit the approach. If I had to start again I would go for the other one as both elements are too binded one to the other.

## Known bugs

- I didn't control the mouse release button outside the board, so I'm quite sure it causes a bug.
- Some times the long press is not working properly, I couldn't catch the repro steps to try to fix it.

## Other things

- 'useDoubleClick' isn't mine, I took it from some page where they were talking about how to implement a double click.
- 'useCell' custom hook is inside the cell folder component in purpouse, it does not make sense to put it on the general hooks folder as it will be only used there.
- 'BoardProvider' was created at the end to have a place to mantain the general state to send to requestbin. I didn't want to put the methods inside the CellProvider because conceptually it didn't make any sense (cell provider is for cell thingies, board provider for more general concepts).
- The separation between 'Cell' and 'Cellbody' was basically to gain a bit of performance on rerendering. (on a high number of cells it)
