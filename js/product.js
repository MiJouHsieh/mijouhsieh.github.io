let tasteFliter = document.querySelector('.product-taste').children;
let tasteItem = document.querySelector('.product').children;

for (let i = 0; i < tasteFliter.length; i++) {
    tasteFliter[i].addEventListener('click', function () {
        for (let j = 0; j < tasteFliter.length; j++) {
            let checkTaste = tasteFliter[j].querySelector('input[type="checkbox"]');
            checkTaste.checked = false;
        }

        tasteFliter[i].querySelector('input[type="checkbox"]').checked = true;

        let tasteDate = this.getAttribute('data-taste_target');

        for (let t = 0; t < tasteItem.length; t++) {
            tasteItem[t].classList.remove('active');
            tasteItem[t].classList.add('delete');

            if (tasteItem[t].getAttribute('data-taste') == tasteDate || tasteDate == 'all') {
                tasteItem[t].classList.remove('delete');
                tasteItem[t].classList.add('active');
            }
        }
    })
}

