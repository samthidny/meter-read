console.log('index 2');

function fillPlaceholder(input, back, guide) {
    var length = input.value.length;
    var maxlength = input.maxLength;
    //var guide = '00----'
    var str = '';
    for (var i = 0; i < maxlength; i++) {
        str += i < length ? ' ' : guide.charAt(i);
    }

    if (back.getAttribute('post')) {
        str += back.getAttribute('post');
    }

    back.value = str;
}

function setup(name) {

    var guide = document.getElementById(`${name}-back`).value;

    // Restrict length
    document.getElementById(name).addEventListener('input', (event) => {

        // Start template format test

        var cursor = event.target.selectionStart;
        var newCursor = cursor;
        var value = event.target.value;

        var overlay = document.getElementById(`${name}-back`).getAttribute('overlay');

        console.log('Current data: ' + value + ' (' + value.length + '/' + event.target.maxLength + ') type:' + event.inputType + ' cursor char:' + value.charAt(cursor) + ' overlay char:' + overlay.charAt(cursor) + ' ' + value.length);

        var isDeleting = event.inputType === 'deleteContentBackward';
        var isAdding = event.inputType !== 'deleteContentBackward';
        var isMid = cursor < value.length;
        var isAtEnd = cursor === value.length;
        var isOnMarker = overlay.charAt(cursor) !== ' ';
        var isMarkerLeft = overlay.charAt(cursor-1) !== ' ';

        console.log(`isAdding: ${isAdding} - isAtEnd: ${isAtEnd} - isOnMarker: ${isOnMarker}`)


        // // Adding a character at the end of the text, when next character is a marker then insert marker and move cursor on by 1
        if (isAdding && isAtEnd && isOnMarker) {
            console.log('SCENARIO 1 - adding a char and next char is marker so insert marker and move cursor right');
            event.target.value += overlay.charAt(cursor);
            newCursor = cursor + 1;
        }

        if (isAdding && isAtEnd && !isOnMarker) {
            console.log('SCENARIO 6');
            //event.target.value += overlay.charAt(cursor);
            newCursor = cursor + 1;
        }

        if (isAdding && isMid && isMarkerLeft) {
            console.log('SCENARIO 7');
            // event.target.value += overlay.charAt(cursor);
            newCursor = cursor + 1;
        } else if (isAdding && isMid && !isOnMarker) {
            console.log('SCENARIO 5');
            // event.target.value += overlay.charAt(cursor);
            //newCursor = cursor + 1;
        }

        // If at end and deleting a marker
        if (isDeleting && isAtEnd && isOnMarker) {
            console.log('SCENARIO 2 - deleting a marker so delte the markar and the char before');
            event.target.value = event.target.value.substring(0, event.target.value.length - 1);
        }

        //mid deletion over char
        if (isDeleting && isMid && !isOnMarker) {
            console.log('SCENARIO 3 - deleting mid ' + event.target.value);
            var arr = event.target.value.split('');
            //arr.splice(cursor, 1);
            event.target.value = arr.join('');
            // newCursor = cursor;
        }

        //mid deletion over marker
        if (isDeleting && isMid && isOnMarker) {
            console.log('SCENARIO 4 - deleting mid marker ' + event.target.value);
            var arr = event.target.value.split('');
            arr.splice(cursor-1, 1);
            event.target.value = arr.join('');
            newCursor = cursor - 1;
        }

        if (isAdding && isMid) {

        }

        // Jons suggested method, dont delete and leave spaces just treat as input but add markers
        
        //if (event.inputType === 'insertText') {
            //Remove any existing markers
            var chars = (event.target.value.indexOf('-') !== -1 ? event.target.value.split('-').join('') : event.target.value).split('');
            console.log('FORMAT PRE  ' + chars);
            var str = '';
            var count = 0;
            chars.forEach((char, index) => {
                if (overlay[count] !== ' ') {
                    str += "-";
                    count++;
                    //newCursor = cursor + 1;
                }
                str += char;
                count++;
            });

            // //Check if next char is a marker
            // if(overlay.charAt(cursor) !== ' ') {
            //     str += overlay.charAt(cursor);
            // }

            

            if(isOnMarker && isAdding) { 
                str += '-';
            }
            

            console.log('FORMAT POST ' + str);
            
            event.target.value = str;

            // if (cursor === event.target.value.length) {
            //     newCursor = cursor + 1;
            //     // event.target.setSelectionRange(cursor + 1, cursor + 1);
            // } else {
            //     // event.target.setSelectionRange(cursor, cursor);
            // }
        //}


        // POST formatting functions

        if(isDeleting && isAtEnd && !isOnMarker && isMarkerLeft) {
            // Removed last character leaving a marker, re-add it
            console.log('SCENARIO 8');
            event.target.value += overlay.charAt(cursor-1);
        }


        if (event.target.value.length > event.target.maxLength) {
            console.log('XXXX')
            event.target.value = event.target.value.slice(0, event.target.maxLength);
            
        }

        console.log('Set Cursor on ' + newCursor);
        event.target.setSelectionRange(newCursor, newCursor);
    });

    // Add input guide update listener
    document.getElementById(name).addEventListener('input', (event) => {
        fillPlaceholder(document.getElementById(name), document.getElementById(`${name}-back`), guide);
    });
    fillPlaceholder(document.getElementById(name), document.getElementById(`${name}-back`), guide);
}

// setup('meter-input');
// setup('dob-input');
setup('sort-input');