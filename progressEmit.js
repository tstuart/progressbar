
// Not sure if this is what the assignment was
// asking, but here is what I think
var events = require('events');
var pBar = new events.EventEmitter();

var uiStart = function() {
    console.log('Progress Started');
};

var uiUpdate = function(curProg) {
    console.log('Current Progress: ', curProg);
};

var uiEnd = function() {
    console.log('Progress Ended');
}

var pbStart = function(start, end, step) {
    for (i = start; i <= end; i += step) {
        if ( ((i % 10 ) ===0) ) {
            pBar.emit('update', i);
        }
    }
    pBar.emit('end');
};

pBar.on('start', uiStart);
pBar.on('start', pbStart);
pBar.on('update', uiUpdate);

pBar.on('end', uiEnd);

//pBar.removeListener('start', uiStart);
//pBar.removeListener('start', pbStart);
//pBar.removeListener('update', uiUpdate);
//pBar.removeListener('end', uiEnd);

pBar.emit('start', 1, 50, 1);
