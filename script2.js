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
        var value = event.target.value;

        var overlay = document.getElementById(`${name}-back`).getAttribute('overlay');

        console.log('Current data: ' + value + ' (' + value.length + '/' + event.target.maxLength + ') type:' + event.inputType + ' cursor char:' + value.charAt(cursor) + ' overlay char:' + overlay.charAt(cursor) + ' ' + value.length);


        // Adding a character at the end of the text, when next character is a marker then insert marker and move cursor on by 1
        if (cursor === value.length && event.inputType !== 'deleteContentBackward' && overlay.charAt(cursor) !== ' ') {
            console.log('SCENARIO 1 - next char is marker so insert marker and move cursor right');
            console.log('Put a marker in now and move cursor right by 1');
            event.target.value += overlay.charAt(cursor);
            event.target.setSelectionRange(cursor + 1, cursor + 1);
        }

        // Deletion

        //If you are on the last character and it is after a guide marker (eg '00-^' on sort code) then delete slash
        if (cursor === value.length && event.inputType === 'deleteContentBackward' && overlay.charAt(cursor) !== ' ') {
            console.log('SCENARIO 2 - when at end of text deleting a marker, so remove marker and character to the left of marker');
            console.log('You are deleting a template character!!!! ' + cursor + ' ' + overlay.charCodeAt(cursor - 1));
            var arr = event.target.value.split('');
            arr.pop();
            event.target.value = arr.join('');
        }

        // MID TEXT DELETION

        // Deleting a valid character when cursor is mid text
        // We delete it and replace it with a special character that means deleted '_' (for now)
        // In order to do this we add an extra char to maxLength (temporarily) in case it is full
        // TODO - only add the spare maxChar if it is full?
        if (cursor < value.length && event.inputType === 'deleteContentBackward' && overlay.charAt(cursor) === ' ') {
            console.log('SCENARIO 3 - mid text deletion, replace with a _ (deleted character)');
            console.log('MID You are deleting a template character!!!! ' + cursor + ' ' + overlay.charCodeAt(cursor - 1));
            var arr = event.target.value.split('');
            // insert blank where we just deleted
            arr.splice(cursor, 0, '_');
            event.target.maxLength++;
            console.log('maxLength ' + event.target.maxLength);
            //console.log('maxLength ' + event.target.maxLength);
            event.target.value = arr.join('');
            event.target.setSelectionRange(cursor, cursor);
        }

        // MID DELETE A MARKER
        if (cursor < value.length && event.inputType === 'deleteContentBackward' && overlay.charAt(cursor) !== ' ') {
            console.log('SCENARIO 4 - mid delete a marker, also delete the character to its left');
            var arr = event.target.value.split('');
            //debugger;
            arr.splice(cursor-1, 1, '_', overlay.charAt(cursor));
            event.target.value = arr.join('');
            event.target.setSelectionRange(cursor-1, cursor-1);
            event.target.maxLength++;
            console.log('maxLength ' + event.target.maxLength);
        }

        // SCENARIO 5 - mid typing just before a marker, you just tried to type over a marker, so replace new char with marker
        if (cursor < value.length && event.inputType === 'insertText' && overlay.charAt(cursor-1) !== ' ') {
            console.log('SCENARIO 5 - mid typing just before a marker');
            
            // DELETE THIS NEW CHAR AND REPLACE FOR THE MARKER
            var arr = event.target.value.split('');
            var deletedCharacter = arr.splice(cursor-1, 1);
            event.target.value = arr.join('');
            event.target.setSelectionRange(cursor, cursor);
            
            // If the next space is empty (deleted _ ) then add character there, else undo typing
            if(value.charAt(cursor + 1) === '_') {
                console.log('SCNARIO 5b - typing before a marker that is blank on the other side "^-_" ');
                var arr = event.target.value.split('');
                arr.splice(cursor, 1, deletedCharacter);
                event.target.value = arr.join('');
                event.target.setSelectionRange(cursor + 1, cursor + 1);
                event.target.maxLength--;
                console.log('maxLength subtract');
                console.log('maxLength ' + event.target.maxLength);
                //debugger;
            }


        }


        // SCENARIO 6 - attempt to type over a valid character
        if (cursor < value.length && event.inputType === 'insertText' && overlay.charAt(cursor-1) === ' ' && value.charAt(cursor) !== '_' ) {
            console.log('SCENARIO 6 - you tried to type over a valid character: ' + value.charAt(cursor));
            // DELETE THIS NEW CHAR
            // TODO - DRY - deleteLastChar()
            var arr = event.target.value.split('');
            arr.splice(cursor-1, 1);
            event.target.value = arr.join('');
            
        }



        // If you delete some chars from the end and then try to type mid text, only insert char if it is a DELETED
        
        if (cursor < value.length && event.inputType === 'insertText' && value.charAt(cursor) === '_') {
            console.log('SCENARIO 7 - mid typing over a deleted character');
            // Delete current char
            var arr = event.target.value.split('');
            arr.splice(cursor, 1);
            event.target.value = arr.join('');

            // If next is a marker then skip it
            if(overlay.charAt(cursor) !== ' ') {
                console.log('SCENARIO 7b mid typed but next char is a marker, so move cursor after marker');
                event.target.setSelectionRange(cursor + 1, cursor + 1);
            } else {
                event.target.setSelectionRange(cursor, cursor);
            }

            // event.target.setSelectionRange(cursor, cursor);
            event.target.maxLength--;
            console.log('maxLength subtract');
            console.log('maxLength ' + event.target.maxLength);
        }

        if(cursor > overlay.length) {
            console.log('SCENARIO 8 - trying to type over borrowed maxChars, clip input to overlay.length (original maxchars)');
            // Clip end chars off
            event.target.value = event.target.value.substring(0, overlay.length);
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

// setup('meter-input');
// setup('dob-input');
setup('sort-input');