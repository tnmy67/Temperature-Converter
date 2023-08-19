window.addEventListener('DOMContentLoaded', () => {
    const celciusInput = document.querySelector('#celcius > input');
    const farenheitInput = document.querySelector('#farenheit > input');
    const kelvinInput = document.querySelector('#kelvin > input');
    const clearButton = document.querySelector('.button button');

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    celciusInput.addEventListener('input', () => {
        const cTemp = parseFloat(celciusInput.value);
        const fTemp = (cTemp * 9/5) + 32;
        const kTemp = cTemp + 273.15;

        farenheitInput.value = roundNumber(fTemp);
        kelvinInput.value = roundNumber(kTemp);
    });

    farenheitInput.addEventListener('input', () => {
        const fTemp = parseFloat(farenheitInput.value);
        const cTemp = (fTemp - 32) * (5/9);
        const kTemp = (fTemp - 32) * (5/9) + 273.15;

        celciusInput.value = roundNumber(cTemp);
        kelvinInput.value = roundNumber(kTemp);
    });
    
    kelvinInput.addEventListener('input', () => {
        const kTemp = parseFloat(kelvinInput.value);
        const cTemp = kTemp - 273.15
        const fTemp = (kTemp - 273.15) * 9/5 + 32

        celciusInput.value = roundNumber(cTemp);
        farenheitInput.value = roundNumber(fTemp);
    });
    


    clearButton.addEventListener('click', () => {
        celciusInput.value = '';
        farenheitInput.value = '';
        kelvinInput.value = '';
    });
});