function setEffect(button, effectClass){
    const img = document.getElementById('flowerImage');

    img.className = '';
    img.classList.add(effectClass);

    const buttons= document.querySelectorAll('.button-group button');
    buttons.forEach(btn=>btn.classList.remove('active'));
    buttons.classList.add('active');
}