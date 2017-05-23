/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var BallManager = (function () {
    function BallManager() {
        this.balls = [];
    }
    BallManager.prototype.Update = function (deltaTime) {
        for (var key in this.balls) {
            this.balls[key].Update(deltaTime);
        }
    };
    BallManager.prototype.Draw = function (context) {
        for (var key in this.balls) {
            this.balls[key].Draw(context);
        }
    };
    BallManager.prototype.Add = function (ball) {
        if (ball) {
            this.balls.push(ball);
        }
    };
    BallManager.prototype.Remove = function (sprite) {
    };
    BallManager.prototype.Clear = function () { };
    return BallManager;
})();
//# sourceMappingURL=BallManager.js.map