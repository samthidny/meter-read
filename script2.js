console.log('index 2');

function fillPlaceholder(input, back, guide) {
    var length = input.value.length;
    var maxlength = input.maxLength;
    //var guide = '00----'
    var str = '';
    for(var i = 0; i < maxlength; i++) {
        str += i < length ? ' ' : guide.charAt(i);
    }

    if(back.getAttribute('post')) {
        str += back.getAttribute('post');
    }

    back.value = str;
}

function setup(name, guide) {
    // Restrict length
    document.getElementById(name).addEventListener('input', (event) => {
        
        // Start template format test

        var cursor = event.target.selectionStart;
        var value = event.target.value;

        var overlay = document.getElementById(`${name}-back`).getAttribute('overlay');

        if (cursor === value.length && event.inputType !== 'deleteContentBackward' && overlay.charAt(cursor) !== ' ') {
            console.log('Put a slash in now!');
            event.target.value += overlay.charAt(cursor);
            event.target.setSelectionRange(cursor + 1, cursor + 1);
        }

        //If you are on the last character and it is after a / then delte slash
        if(cursor === value.length && event.inputType === 'deleteContentBackward' && overlay.charAt(cursor) !== ' ') {
            console.log('You are deleting a template character!!!! ' + cursor + ' ' + overlay.charCodeAt(cursor - 1));
            var arr = event.target.value.split('');
            arr.pop();
            event.target.value = arr.join('');
        }


        // If you have just deleted a slash and then you type, we need to add the slash back
        if(cursor === value.length && event.inputType === 'insertText' && overlay.charAt(cursor - 1) !== ' ') {
            var arr = event.target.value.split('');
            arr.splice(arr.length - 1, 0, overlay.charAt(cursor - 1));
            event.target.value = arr.join('');
        }

        // End template format test
        
        if (event.target.value.length > event.target.maxLength) {
            event.target.value = event.target.value.slice(0, event.target.maxLength);
        }
    });
    
    // Add input guide update listener
    document.getElementById(name).addEventListener('input', (event) => {
        fillPlaceholder(document.getElementById(name), document.getElementById(`${name}-back`), guide);
    });
    fillPlaceholder(document.getElementById(name), document.getElementById(`${name}-back`), guide);  
}

setup('meter-input', '00----');
setup('dob-input', 'DD/MM/YYYY');
setup('sort-input', '00-00-00');