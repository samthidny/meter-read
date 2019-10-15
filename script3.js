console.log('index 2');

var prevLengths = {};

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

// Used to test if a character is a valid input character-  eg a number betweeen 0 - 9
function isValidChar(char) {
    var code = char.charCodeAt(0)
    // is a number char
    return code > 47 && code < 58;
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
        // TODO - this assumes there is only one type of marker character eg / for dates
        var separator = overlay.split(' ').join('').charAt(0);
        console.log('SEPARATOR ' + separator);

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
            console.log('SCENARIO 2 - deleting a marker so delte the markr and the char before');
            // Check what character we are about to delete, this is a bug that if you highlight a marker and then delete
            var charToDelete = event.target.value.charAt(event.target.value.length - 1);
            console.log('DO WE REMOVE: ' + charToDelete + ' ' + isValidChar(charToDelete));
            if(prevLengths[event.target]) {
                var prev = prevLengths[event.target];
                var diff = prev - event.target.value.length;
                // If we're only deleting the marker then remove the prev char as well
                if(diff === 1) {
                    event.target.value = event.target.value.substring(0, event.target.value.length - 1);
                }
            }

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
            var chars = (event.target.value.indexOf(separator) !== -1 ? event.target.value.split(separator).join('') : event.target.value).split('');
            console.log('FORMAT PRE  ' + chars);
            var str = '';
            var count = 0;
            chars.forEach((char, index) => {
                if (overlay[count] !== ' ') {
                    str += overlay[count];
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

            

            // If adding to the end of the string and there should be a marker next
            if(isOnMarker && isAdding && isAtEnd) { 
                console.log('Adding extra marker on the end!');
                str += overlay.charAt(str.length);
            }
            
            // If adding or deleting in the middle and the last char should be a marker then add it.
            if(isMid && overlay.charAt(str.length) !== ' ') {
                console.log('*** Add hyphen here!!!!');
                str += overlay.charAt(str.length);
            }
            

            console.log('FORMAT POST ' + str);
            
            event.target.value = str;

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

        prevLengths[event.target] = event.target.value.length;

        console.log('Set Cursor on ' + newCursor);
        event.target.setSelectionRange(newCursor, newCursor);
    });

    // Add input guide update listener
    document.getElementById(name).addEventListener('input', (event) => {
        fillPlaceholder(document.getElementById(name), document.getElementById(`${name}-back`), guide);
    });
    fillPlaceholder(document.getElementById(name), document.getElementById(`${name}-back`), guide);
}

setup('meter-input');
setup('dob-input');
setup('sort-input');