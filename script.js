navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        const video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = function () {
            video.play();
            detectHand();
        };
    })
    .catch(function (error) {
        console.error('Error accessing the webcam:', error);
    });

async function detectHand() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');

    const model = await handpose.load();
    const predictions = await model.estimateHands(video);

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (predictions.length > 0) {
        predictions.forEach(prediction => {
            prediction.landmarks.forEach((landmark) => {
                ctx.beginPath();
                ctx.arc(landmark[0], landmark[1], 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
            });
        });
    }

    requestAnimationFrame(detectHand);
}
