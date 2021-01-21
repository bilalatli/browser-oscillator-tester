/**
 *
 * @author : Bilal ATLI
 * @date   : 23.12.2020
 * @time   : 13:58
 * @mail   : <ytbilalatli@gmail.com>
 * @phone  : +90 0-542-433-09-19
 *
 */

class Audio {
    /**
     * Oscillator Wave Forms
     *
     * @type {{SQUARE: string, TRIANGLE: string, SINE: string, SAWTOOTH: string}}
     */
    WAVEFORMS = {
        SINE: 'sine',
        SQUARE: 'square',
        SAWTOOTH: 'sawtooth',
        TRIANGLE: 'triangle'
    }

    /**
     * Audio Constructor
     *
     * @description https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
     */
    constructor() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;

        this.audioContext = new AudioContext();
        this.gain = this.audioContext.createGain();
        this.finish = this.audioContext.destination;
        this.gain.connect(this.finish);

        this.defaultFrequency = 480;
    }

    /**
     * Create Oscillator & Set Frequency & Frequency Wave Form
     *
     * @param frequency
     */
    play(frequency) {
        if (this.audioContext && !this.oscillator) {
            this.oscillator = this.audioContext.createOscillator();

            this.setFrequency(frequency);

            /**
             * Oscillator Wave Forms [sine, square, sawtooth, triangle]
             * or use `custom` to PeriodicWave
             *
             * @description https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
             * @description https://developer.mozilla.org/en-US/docs/Web/API/PeriodicWave
             */
            this.setWaveForm(this.WAVEFORMS.SQUARE)

            this.oscillator.connect(this.gain);
            this.oscillator.start();
        }
    }

    /**
     * Wave Form
     *
     * @param waveForm
     */
    setWaveForm(waveForm) {
        if (this.oscillator) {
            this.oscillator.type = waveForm;
        }
    }

    /**
     * Set Oscillator Frequency
     *
     * @param frequency
     */
    setFrequency(frequency) {
        if (this.oscillator) {
            this.oscillator.frequency.setValueAtTime(frequency || this.defaultFrequency, this.audioContext.currentTime);
        }
    }

    /**
     * Stop & Delete Oscillator
     */
    stop() {
        if (this.oscillator) {
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null;
        }
    }
}

export default Audio;