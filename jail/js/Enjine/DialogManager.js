/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Gères la listes des dialogues, permet de sauter un dialogue au clic de la souris
Ou bien de passer à un dialogue suivant si le dialogue actuel est finit.
*/
var DialogManager = (function () {
    function DialogManager() {
        this.currentKeyDialog = 0;
        this.dialogs = [];
    }
    DialogManager.prototype.MouseDown = function (event) {
        if (this.dialogs) {
            if (this.dialogs[this.currentKeyDialog].done) {
                this.NextDialog();
            }
            else {
                if (this.dialogs[this.currentKeyDialog].currentChar > 4) {
                    this.dialogs[this.currentKeyDialog].CompleteDialog();
                }
            }
        }
    };
    DialogManager.prototype.Load = function (pathJson) {
        var _this = this;
        Data.JSONLoader.Exec(pathJson, function (data) {
            for (var i = 0; i < data.dialog.length; i++) {
                _this.AddDialog(new Dialog(data.dialog[i], 50));
            }
        });
    };
    DialogManager.prototype.AddDialog = function (dialog) {
        this.dialogs.push(dialog);
    };
    DialogManager.prototype.Draw = function (context) {
        if (this.dialogs) {
            context.save();
            context.fillStyle = "white";
            if (this.dialogs[this.currentKeyDialog]) {
                this.dialogs[this.currentKeyDialog].Draw(context);
            }
            context.restore();
        }
    };
    DialogManager.prototype.NextDialog = function () {
    };
    DialogManager.prototype.Clear = function () {
        delete this.currentKeyDialog;
        for (var key in this.dialogs) {
            this.dialogs[key].Clear();
        }
        delete this.dialogs;
    };
    return DialogManager;
})();
//# sourceMappingURL=DialogManager.js.map