// Function to rotate the compass
function rotateCompass(degree) {
    var needle = document.getElementById('needle');
    needle.style.transform = `translate(-50%, -100%) rotate(${degree}deg)`;
    announceDirection(degree);
}

// Function to announce the direction
function announceDirection(degree) {
    var direction = getDirection(degree);
    var utterance = new SpeechSynthesisUtterance(direction);
    window.speechSynthesis.speak(utterance);
}

// Function to determine the compass direction based on degree
function getDirection(degree) {
    if (degree >= 22.5 && degree < 67.5) {
        return "North East";
    } else if (degree >= 67.5 && degree < 112.5) {
        return "East";
    } else if (degree >= 112.5 && degree < 157.5) {
        return "South East";
    } else if (degree >= 157.5 && degree < 202.5) {
        return "South";
    } else if (degree >= 202.5 && degree < 247.5) {
        return "South West";
    } else if (degree >= 247.5 && degree < 292.5) {
        return "West";
    } else if (degree >= 292.5 && degree < 337.5) {
        return "North West";
    } else {
        return "North";
    }
}

// Check for DeviceOrientationEvent support
if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha; // Alpha represents the compass direction
        rotateCompass(alpha);
    }, false);
} else {
    // DeviceOrientationEvent is not supported
    alert('Sorry, your device does not support Device Orientation');
}
