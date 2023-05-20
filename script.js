const timerDisplay = document.querySelector('.timer__part');
let setTimer = 9;

timerDisplay.innerHTML = `00:${setTimer}`;

displayTime(setTimer);

const countDown = setInterval (() => {
    setTimer--;
    timerDisplay.innerHTML = `00:${setTimer}`;

    displayTime(setTimer);

    if ( setTimer <= 0 || setTimer < 1)
    {
        // endTime();
        clearInterval(countDown);

    }

}, 1000);

function displayTime(second)
{
    const minute = Math.floor(second / 60) ;
    const sec = Math.floor( second % 60 );

    timerDisplay.innerHTML = `${minute<10 ? '0' : ''}${minute} : ${sec<10 ? '0' : ''}${sec}`;
}

