const earthquake = document.querySelector('.earthquake');
const text = document.querySelector('h1');
const stretchShadow = 75; //100px

shadow = (event) => {
    const { offsetWidth: width, offsetHeight: height } = earthquake;
    let { offsetX: x, offsetY: y } = event;
    // normalize
    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }
    // how far shadow should be stretched
    const xShadow = Math.round((x / width * stretchShadow) - (stretchShadow / 2));
    const yShadow = Math.round((y / height * stretchShadow) - (stretchShadow / 2));
    text.style.textShadow = `
    ${xShadow}px ${yShadow}px 0 rgba(255, 0, 255, 0.7),
    ${xShadow * -1}px ${yShadow}px 0 rgba(0, 255, 255, 0.7),
    ${yShadow}px ${xShadow * -1}px 0 rgba(0, 255, 0, 0.7),
    ${yShadow * -1}px ${xShadow}px 0 rgba(0, 0, 255, 0.7)`;
}

earthquake.addEventListener('mousemove', shadow);