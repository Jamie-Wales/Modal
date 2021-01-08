
const findOutMore = document.getElementById('findoutmore');
const modal = document.getElementById('modal');
let closeBtn = document.getElementById('close');





findOutMore.addEventListener('click', e => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', e => {
    modal.style.display = 'none';
})
