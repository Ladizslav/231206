let countdownInterval;

        function updateHexClock(seconds) {
            const remainingTime = "#" + timeToHex(Math.floor(seconds / 3600)) +
                timeToHex(Math.floor((seconds % 3600) / 60)) +
                timeToHex(seconds % 60);

            document.body.style.backgroundColor = remainingTime;
            document.querySelector("#time").innerHTML = "Zbývá: " + remainingTime;
        }

        function startTimer() {
            const seconds = parseInt(document.getElementById('timerInput').value, 10);
            if (isNaN(seconds) || seconds <= 0) {
                alert('Zadejte platný čas v sekundách.');
                return;
            }

            document.getElementById('timerInput').style.display = 'none';
            document.getElementById('startButton').style.display = 'none';
            document.getElementById('cancelButton').style.display = 'none';

            let remainingSeconds = seconds;

            countdownInterval = setInterval(() => {
                updateHexClock(remainingSeconds);
                remainingSeconds--;

                if (remainingSeconds < 0) {
                    clearInterval(countdownInterval);
                    showTimerInput();
                }
            }, 1000);
        }

        function cancelTimer() {
            clearInterval(countdownInterval);

            document.getElementById('timerInput').style.display = 'none';
            document.getElementById('startButton').style.display = 'none';
            document.getElementById('cancelButton').style.display = 'none';

            updateHexClock(0);
        }

        function showTimerInput() {
            document.getElementById('timerInput').style.display = 'inline-block';
            document.getElementById('startButton').style.display = 'inline-block';
            document.getElementById('cancelButton').style.display = 'inline-block';
        }

        function timeToHex(digits) {
            return digits.toString().padStart(2, "0");
        }