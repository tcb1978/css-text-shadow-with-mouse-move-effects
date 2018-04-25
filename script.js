const earthquake = document.querySelector('.earthquake');
const text = document.querySelector('h1');

shadow = (event) => {
    const { offsetWidth: width, offsetHeight: height } = earthquake;
    let { offsetX: x, offsetY: y } = event;
}

earthquake.addEventListener('mousemove', shadow);