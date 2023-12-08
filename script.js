// Function to rotate the compass
function rotateCompass(degree) {
    var needle = document.getElementById('needle');
    needle.style.transform = `translate(-50%, -100%) rotate(${degree}deg)`;
}

// Check for DeviceOrientationEvent support
if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha;
        rotateCompass(alpha);
    }, false);
} else {
    // DeviceOrientationEvent is not supported
    alert('Sorry, your device does not support Device Orientation');
}

