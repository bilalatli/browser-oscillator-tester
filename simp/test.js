import Audio from "./audio.js";

document.querySelector('button').addEventListener('click', function () {
    window.sound = new Audio();
    window.freq = 100;

    window.changeCount = 0;
    sound.setWaveForm(sound.WAVEFORMS.SINE);

    setInterval(function () {
        sound.stop();

        window.changeCount++;
        window.freq += 10;
        window.freq = window.freq % 24000;

        if (changeCount >= 50) {
            sound.setWaveForm(sound.WAVEFORMS.TRIANGLE);
        } else if (changeCount >= 100) {
            sound.setWaveForm(sound.WAVEFORMS.SQUARE);
        } else if (changeCount >= 150) {
            sound.setWaveForm(sound.WAVEFORMS.SAWTOOTH);
        } else {
            sound.setWaveForm(sound.WAVEFORMS.SINE);
            window.changeCount = 0;
        }

        sound.play(freq)
    }, 20);
});