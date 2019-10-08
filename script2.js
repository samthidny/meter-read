console.log('index 2');


document.getElementById('meter-input').addEventListener('input', (event) => {
    if (event.target.value.length > 4) {
        event.target.value = event.target.value.slice(0,4); 
    }
});


document.getElementById('meter-input').addEventListener('input', (event) => {
    var length = event.target.value.length;
    var maxlength = event.target.maxLength;
    var str = '';
    for(var i = 0; i < maxlength; i++) {
        str += i < length ? ' ' : '-';
    }
    document.getElementById('meter-input-back').value = str;
})