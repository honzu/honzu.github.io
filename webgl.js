var InitDemo = function () {
    console.log('Loaded');

    var canvas = document.getElementById('background');
    var gl = canvas.getContext('webgl');
    
    if (!gl) {
        console.log('using experimental webgl')
        gl = canvas.getContext('experimental-webgl')
    };
    
    if (!gl) {
        alert('webgl not supported')
    };

    gl.clearColor(0, 0, 0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}