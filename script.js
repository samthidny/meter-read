console.log('hello');

function select(input) {
    input.setSelectionRange(input.selectionStart, input.selectionStart + 1);
}


document.getElementById('meter-input').addEventListener('click', e => {
    log('click ' + e.target.selectionStart);
    var cursor = e.target.selectionStart;

    // Attempting to fix being able to select next char with mouse
    //e.target.setSelectionRange(-1, -1);
    e.target.setSelectionRange(cursor, cursor + 1);
    //e.preventDefault();
});

document.getElementById('meter-input').addEventListener('focus', e => {
    // On focus select character 1
    var cursor = e.target.selectionStart;
    e.target.setSelectionRange(0, 1);
});

document.getElementById('meter-input').addEventListener('keydown', e => {


    var length = e.target.maxLength;
    var cursor = e.target.selectionStart;
    e.preventDefault();

    // Right arrow select next character
    if (e.code === 'ArrowRight') {
        cursor++;
        cursor = Math.min(length - 1, cursor);
        e.target.setSelectionRange(cursor, cursor + 1);
    }

    // Left arrow select previous character
    if (e.code === 'ArrowLeft') {
        cursor--;
        cursor = Math.max(0, cursor);
        e.target.setSelectionRange(cursor, cursor + 1);
    }

    log('Keydown cursor ' + cursor);

    // Backspace
    if (e.code === 'Backspace') {
        log('You just deleted char ' + e.target.selectionStart);
        var cursor = e.target.selectionStart
        var arr = e.target.value.split('');
        arr.splice(e.target.selectionStart, 1, '-');
        start = Math.max(e.target.selectionStart - 1, 0);
        end = start + 1;

        e.target.value = arr.join('');
        e.target.setSelectionRange(start, end);

    }


    // Only handle numbers - cant use type = number as setSelectionRange won't work
    if (e.keyCode < 48 || e.keyCode > 57) {
        return;
    }

    var arr = e.target.value.split('');
    arr.splice(e.target.selectionStart, 1, e.key);
    e.target.value = arr.join('');
    e.target.setSelectionRange(cursor + 1, cursor + 2);


    // Don't allow anymore characters than max
    if (cursor === length - 1) {
        log('Too long!!!');
        e.target.setSelectionRange(length - 1, length);
    }


});

function log(msg) {
    document.getElementById('logger').value += msg + '\n';
}

// document.getElementById('meter-input').addEventListener('keyup', e => { 
//     // If entering the last character, then highlight last char instead of default
//     var length = e.target.maxLength;
//     var cursor = e.target.selectionStart;
//     if (cursor === length) {
//         e.target.setSelectionRange(length - 1, length);
//         console.log('Key up Too long!!!');
//         return;
//     }
//     e.preventDefault();
//     console.log('Keyup cursor ' + cursor);

// });


// document.getElementById('meter-input').addEventListener('keyup', e => {

//     return;
//     console.log('Key up: ', e.target.selectionStart);

//     var start = 0;
//     var end = 1;
//     var length = e.target.maxLength;

//     start = e.target.selectionStart;
//     end = e.target.selectionStart + 1;

//     if(e.code === 'Backspace') {
//         console.log('You just deleted char ' + e.target.selectionStart + 1);
//         var cursor = e.target.selectionStart
//         var arr = e.target.value.split('');
//         arr.splice(e.target.selectionStart, 0, '-');
//         start = Math.max(e.target.selectionStart - 1, 0);
//         end = start + 1;

//         e.target.value = arr.join('');
//         e.target.setSelectionRange(start, end);

//     }

//     if(e.target.selectionStart === length) {
//         start = length - 1;
//         end = length;
//     }
//     // if(e.code === 'ArrowRight') {

//     // } else 
//     if(e.code === 'ArrowLeft') {
//         if(e.target.selectionStart === 0) {
//             start = 0;
//             end = 1;
//         }
//         else {
//             start = e.target.selectionStart - 1;
//             end = e.target.selectionStart;
//         }    
//     }

//     e.target.setSelectionRange(start, end);
//     e.preventDefault();
// })