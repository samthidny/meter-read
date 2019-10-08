console.log('index 2');


document.getElementById('meter-input').addEventListener('input', (event) => {
    if (event.target.value.length > event.target.maxLength) {
        event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
});


function fillPlaceholder(input, back) {
    var length = input.value.length;
    var maxlength = input.maxLength;
    var zeros = 2;
    var str = '';
    for(var i = 0; i < maxlength; i++) {
        str += i < zeros ? '0' : i < length ? ' ' : '-';
    }

    str += '.XXX';

    back.value = str;
}

document.getElementById('meter-input').addEventListener('input', (event) => {
    
    fillPlaceholder(document.getElementById('meter-input'), document.getElementById('meter-input-back'));
    
    // var length = event.target.value.length;
    // var maxlength = event.target.maxLength;
    // var str = '';
    // for(var i = 0; i < maxlength; i++) {
    //     str += i < length ? ' ' : '-';
    // }

    // str += '.XXX';

    // document.getElementById('meter-input-back').value = str;
})

fillPlaceholder(document.getElementById('meter-input'), document.getElementById('meter-input-back'));