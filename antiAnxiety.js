let track1 = new Audio('Dont_Worry.mp3');
let track2 = new Audio('Good_Feeling.mp3');

function antiAnxiety() {
    let anxiety = Math.random() < 0.5;
    if (anxiety) {
        track2.pause();
        track1.load();
        track1.volume = 1;
        track1.play();
        document.getElementById("anxiety-result").innerText = "Anxiety Exists";
        document.getElementById("now-playing").innerText = "Now Playing: " + "Dont_Worry.mp3";
    } else {
        track1.pause();
        track2.load();
        track2.volume = 1;
        track2.play();
        document.getElementById("anxiety-result").innerText = "Anxiety Does Not Exist";
        document.getElementById("now-playing").innerText = "Now Playing: " + "Good_Feeling.mp3";
    };
};

// by MITCH