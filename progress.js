
// added ability to set start, end, and
// step of progress bar.  I did not add
// steps to ensure that start was less than
// end and step was >= 1.
var ProgressBar = function(start, end, step) {
    this.onStartCallback = null;
    this.onProgressCallback = null;
    this.onEndCallback = null;
    this._start = start;
    this._end = end;
    this._step = step;
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

    for (i = this._start; i <= this._end; i += this._step) {
        if ( ((i % 10 ) ===0) ) {
            this.onProgressCallback(i);
        }
    }

    this.onEndCallback();
};

var progress = new ProgressBar(1, 1000, 1);
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
