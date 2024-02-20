function rotateCompass(degree) {
    var needle = document.getElementById('needle');
    needle.style.transform = `translate(-50%, -100%) rotate(${degree}deg)`;
}

if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha;
        rotateCompass(alpha);
    }, false);
} else {
    alert('Device Orientation is not supported by your device.');
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    document.getElementById('latitude').textContent = position.coords.latitude.toFixed(5);
    document.getElementById('longitude').textContent = position.coords.longitude.toFixed(5);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

window.onload = getLocation;
