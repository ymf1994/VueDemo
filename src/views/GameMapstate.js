function TrexRunnerBot() {

    const makeKeyArgs = (keyCode) => {
        const preventDefault = () => void 0;
        return {
            keyCode,
            preventDefault
        };
    };

    const upKeyArgs = makeKeyArgs(38);
    const downKeyArgs = makeKeyArgs(40);
    const startArgs = makeKeyArgs(32);

    if (!Runner().playing) {
        Runner().onKeyDown(startArgs);
        setTimeout(() => {
            Runner().onKeyUp(startArgs);
        }, 500);
    }

    function conquerTheGame() {
        if (!Runner || !Runner().horizon.obstacles[0]) return;

        const obstacle = Runner().horizon.obstacles[0];

        if (obstacle.typeConfig && obstacle.typeConfig.type === 'SNACK') return;

        if (needsToTackle(obstacle) && closeEnoughToTackle(obstacle)) tackle(obstacle);
    }

    function needsToTackle(obstacle) {
        return obstacle.yPos !== 50;
    }

    function closeEnoughToTackle(obstacle) {
        return obstacle.xPos <= Runner().currentSpeed * 18;
    }

    function tackle(obstacle) {
        if (isDuckable(obstacle)) {
            duck();
        } else {
            jumpOver(obstacle);
        }
    }

    function isDuckable(obstacle) {
        return obstacle.yPos === 50;
    }

    function duck() {
        Runner().onKeyDown(downKeyArgs);

        setTimeout(() => {
            Runner().onKeyUp(downKeyArgs);
        }, 500);
    }

    function jumpOver(obstacle) {
        if (isNextObstacleCloseTo(obstacle))
            jumpFast();
        else
            Runner().onKeyDown(upKeyArgs);
    }

    function isNextObstacleCloseTo(currentObstacle) {
        const nextObstacle = Runner().horizon.obstacles[1];

        return nextObstacle && nextObstacle.xPos - currentObstacle.xPos <= Runner().currentSpeed * 42;
    }

    function jumpFast() {
        Runner().onKeyDown(upKeyArgs);
        Runner().onKeyUp(upKeyArgs);
    }

    return {
        conquerTheGame: conquerTheGame
    };
}

let bot = TrexRunnerBot();
let botInterval = setInterval(bot.conquerTheGame, 2);
//破分工具
let hackScore = 0;

Object.defineProperty(Runner.instance_, 'distanceRan', {
  get: () => hackScore,
  set: (value) => hackScore = value + Math.floor(Math.random() * 1000),
  configurable: true,
  enumerable: true,
});