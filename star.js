const canvas = document.getElementById('star-bg');
const ctx = canvas.getContext('2d');
let stars = [];
const numStars = 100; // 星の数

function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;

    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            size: Math.random() > 0.8 ? 2 : 1, // まれに2pxの星を混ぜる
            state: Math.floor(Math.random() * 2),
            timer: Math.floor(Math.random() * 30),
            speed: Math.floor(Math.random() * 40) + 20
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let star of stars) {
        star.timer++;
        if (star.timer > star.speed) {
            // 0と1を切り替える
            star.state = star.state === 0 ? 1 : 0;
            star.timer = 0;
        }
        
        // stateが1の時だけ描画（白い四角）
        if (star.state === 1) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(star.x, star.y, star.size, star.size);
        }
    }
    requestAnimationFrame(animate);
}

initStars();
animate();

window.addEventListener('resize', initStars);