# tapNrun

tapNrun is a sports based game that we have created for our Makers Academy final project.  This game has been built using Javascript and HTML canvas and is hosted on Github pages.

## Getting Started
1. Clone this repository `git clone git@github.com:scass91/tapNrun.git`
2. Change into directory `cd tapNrun`
3. run npm to install dependencies `npm install`
4. Run the game `open -a "Google Chrome" index.html`

## Instructions for playing tapNrun

The goal of tapNrun is to reach the finish line of the 100m track in the fastest time possible!

If you are player 1:
* You will be positioned in lane 1 of the race track.
* In order to move, tap the key 'a' repeatedly. The faster you tap the key, the faster you will move.

If you are player 2:
* You will be positioned in lane 2 of the race track.
* In order to move, tap the key 'l' repeatedly. The faster you tap the key, the faster you will move.

There are two automated players in lane 3 and 4. Do not be deceived! These players are extremely speedy.
In addition, there will be a three second countdown before the game begins.

## Health Warning

Due to the addictive nature of the game, be aware of contracting repetitive strain injury (RSI) from tap tap tappin' ;)

## User Stories

```
As a user,
So that I can be identified,
I would like to enter my name before starting the game.

As a user,
So that I can play against another user,
I would like two players to play simultaneously.

As a user,
So that I can start playing the game,
I would like to click on the start button.

As a user,
So that I can see who is playing,
I would like the lanes and associated player names to appear bellow the track.

As a user,
So that I am ready to play the game,
I don't want to start racing until the 321 countdown is complete.

As a user,
So that my player can move across the track,
I would like to be able click a key to move my player.

As a user,
So that I know my time,
I would like my race time to appear when I cross the finish line.

As a user,
So that I can replay the game,
I would like to click on the 'Play again' button to restart.

```
## Testing

1. Run tests with the testing framework Jasmine `open -a "Google Chrome" SpecRunner.html`
2. Alternatively tests can be ran in Terminal using Karma `npm test`

## Code coverage

1. Globally install Karma `npm install -g karma-cli`. Might need to remove the `-g` flag if this does not work initially.
2. Install necessary dependencies `npm install`
3. Start Karma - tests will show in terminal, a window will open in Google Chrome `karma start`
4. Press control-c to close the tests within terminal `ctrl-c`

## Deployment
---
Our game is hosted on Github pages. [Tap N' Run](https://scass91.github.io/tapNrun)

## Technologies used

Tech | Description
------------- | -------------
[Javascript](https://www.javascript.com/) | Main language used
[HTML5 Canvas](https://www.w3schools.com/html/html5_canvas.asp) | Object display tool
[Travis CI](https://travis-ci.org/) | Continuous integration running tests and linters before merging branches
[Trello](https://trello.com/) | Tracking and organising workflow
[Karma](https://karma-runner.github.io/latest/index.html) | Javascript test runner
[Jasmine](https://jasmine.github.io) | Javascript testing framework
[Github pages](https://pages.github.com/) | Deployment
[Google draw](https://quickdraw.withgoogle.com/) | Drawing of assets

## Contributors

This game was built with contributions from
* [Simon Cass](https://github.com/scass91)
* [Tom Russell](https://github.com/tomlovesgithub)
* [Subomi Onanuga](https://github.com/subomionanuga)
* [Jacques Laffy](https://github.com/jlaffbabs)
* [Beatrice Courage](https://github.com/beacourage)
