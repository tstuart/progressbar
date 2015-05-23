
var ProgressBar = function() {
    this.onStartCallback = null;
    this.onProgressCallback = null;
    this.onEndCallback = null;
    this._start = 1;
    this._end = 100;
};

ProgressBar.prototype.onStart = function(callback) {
    this.onStartCallback = callback;
};

ProgressBar.prototype.onProgress = function(callback) {
    this.onProgressCallback = callback;
};

ProgressBar.prototype.onEnd = function(callback) {
    this.onEndCallback = callback;
};

ProgressBar.prototype.start = function() {
    if (!this.onStartCallback || !this.onProgressCallback || !this.onEndCallback) {
        return;
    }

    this.onStartCallback();

    for (i = this._start; i <= this._end; i++) {
        if ( ((i % 10 ) ===0) ) {
            this.onProgressCallback(i);
        }
    }

    this.onEndCallback();
};

var progress = new ProgressBar();
progress.onStart(function() {
    console.log('Progress Started');
});

progress.onProgress(function(currentProgress) {
    console.log('Current Progress: ', currentProgress);
});

progress.onEnd(function(status) {
    console.log('Progress Ended')
});
progress.start();
