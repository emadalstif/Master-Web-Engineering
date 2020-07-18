self.addEventListener('message', function(e) {
    data = e.data;
    data.sort(function(a, b) {
        return a - b;
    });
    console.log(data);
    var start = Date.now(); // milliseconds
    var x = 0;
    for (var i = 0; i < 200000000; i++) {
        x = x + i;
    }
    self.postMessage(data);
    console.log('ended in : ', -(start - Date.now()) / 1000, ' seconds');
});