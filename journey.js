
function scrollTo(element) {
    show(element, true);
    element.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}

function show(element, visible) {
    element.style.display = visible ? 'block' : 'none';
}

document.getElementById('find-address-button').addEventListener('click', (event) => {
    var button = event.target;
    button.setAttribute('loading', 'true');
    button.setAttribute('loadingmessage', 'Loading...');
    button.setAttribute('disabled', 'true');
    setTimeout(() => {
        console.log('SHOW IT!!!')
        button.removeAttribute('loading');
        button.removeAttribute('loadingmessage');
        button.removeAttribute('disabled');
        scrollTo(document.getElementById('address-selector'));
        // show(document.getElementById('address-selector'), true);
    }, 600);
});

document.querySelector('.address-select').addEventListener('change', () => {
    scrollTo(document.getElementById('q1'));
});


document.getElementById('continue1').addEventListener('click', () => {
    scrollTo(document.getElementById('q2'));
});


document.getElementById('meter-readings-type').addEventListener('change', (event) => {
    show(document.getElementById('ecomony-seven'), event.target.value !== 'gas');
});



document.getElementById('submit-button').addEventListener('click', () => {
    setTimeout(() => {
        document.location.href = 'thanks.html';
    }, 600);
    
});


function populateAddresses() {
    var select = document.querySelector('.address-select');
    var road = 'Kings Road, Townsford, Surrey, AB12 3CD';
    var number = 63;
    for(var i = 0; i < 10; i++) {
        var address = (number + i) + ' ' + road;
        var opt = document.createElement("option");
        opt.value = address;
        opt.innerHTML = address;
        select.appendChild(opt);
    }
    
}


function init() {
    show(document.getElementById('address-selector'), false);
    show(document.getElementById('q1'), false);
    show(document.getElementById('q2'), false);
    
    populateAddresses();

    document.querySelectorAll('#gas-meter-inputter').forEach((inputter) => {
        inputter.addEventListener('change', (event) => {
            console.log('Meter read change ' + event.target.value);
            var str = '' + event.target.value;
            if (str.charAt(0) !== 0 || str[1] !== 0) {
                console.log('WARNING!!!! TOLERANCE!!!!');
            }
        });
    });
}

init();

// address-selector

