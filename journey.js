
function scrollTo(element) {
    show(element, true);
    element.scrollIntoView();
    /*{
        block: "start",
        behavior: "smooth"
    }*/
}

function show(element, visible) {
    element.style.display = visible ? 'block' : 'none';
}

function showSection(element, visible) {
    show(element, visible);

    console.log('showSection ' + element + ' ' + visible + ' ' + element.childElementCount);

    // Disable validation on all child inputters
    for (var i = 0; i < element.childElementCount; i++) {
        if(element.children[i].enableValidation) {
            element.children[i].enableValidation(visible);
        }
    }
}

document.getElementById('find-address-button').addEventListener('click', (event) => {
    var button = event.target;
    button.setAttribute('loading', 'true');
    button.setAttribute('loadingmessage', 'Loading...');
    button.setAttribute('disabled', 'true');
    setTimeout(() => {
        console.log('SHOW IT!!!');
        populateAddresses();
        button.removeAttribute('loading');
        button.removeAttribute('loadingmessage');
        button.removeAttribute('disabled');
        scrollTo(document.getElementById('address-selector'));
        show(document.getElementById('address-selector'), true);
    }, 100);
});



document.getElementById('meter-readings-type').addEventListener('change', (event) => {

    //show(document.getElementById('ecomony-seven'), event.target.value !== 'gas');
    console.log('Meter - readings');
    // Default just show ingle elec
    showSection(document.getElementById('electricity-meter-reading'), event.target.value !== 'gas');

    // hide gas if elec only
    showSection(document.getElementById('gas-meter-reading'), event.target.value !== 'electricity');

    // If its gas only hide all elec meters
    
    if (event.target.value === 'gas') {
        showSection(document.getElementById('electricity-meter-reading'), false);
        showSection(document.getElementById('economy7-meter-readings'), false);
        showSection(document.getElementById('ecomony-seven'), false);
        //document.getElementById('').enableValidation(false);
    } else {
        showSection(document.getElementById('ecomony-seven'), true);
    }
    
});


document.getElementById('ecomony-seven').addEventListener('change', (event) => {
    showSection(document.getElementById('electricity-meter-reading'), event.target.value === 'no');
    showSection(document.getElementById('economy7-meter-readings'), event.target.value === 'yes');
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

var forms = ['address-form', 'fuel-type-form', 'meter-reading-form', 'summary-form'];

function showForm(name) {
    
    var currentIndex = forms.indexOf(name);

    forms.forEach((name, index) => {
        show(document.getElementById(`${name}`), false);
        var summary = document.getElementById(`${name}-summary`);
        if (summary) {
            // show summaries beforre this form only
            show(summary, index < currentIndex);
        }
    });

    show(document.getElementById(`${name}`), true);
    var summary = document.getElementById(`${name}-summary`);
    if(summary) {
        show(summary, false);
    }

    // Scroll to form
    console.log('SCROLL INTO VIEW ' + name);
    document.getElementById(`${name}`).scrollIntoView();
    // setTimeout(() => {
        
    // }, 100);
    

}

function setSummary(name, summary) {
    // document.getElementById(`${name}`).querySelector('div').innerHTML = `<p>${summary}</p>`;
    document.getElementById(`${name}`).summary = `<p>${summary}</p>`;
}

function init() {

    forms.forEach((name) => {
        var summary = document.getElementById(`${name}-summary`);
        if  (summary) {
            summary.addEventListener('click', (event) => {
                var name = event.target.id.replace('-summary', '');
                showForm(name);
            });
        }
    });

    showForm('address-form');

    // Hide all summaries
    forms.forEach((name, index) => {
        var summary = document.getElementById(`${name}-summary`);
        if (summary) {
            // show summaries beforre this form only
            show(summary, false);
        }
    });

    show(document.getElementById('address-selector'), false);
    //populateAddresses();

    document.querySelectorAll('#gas-meter-inputter').forEach((inputter) => {
        inputter.addEventListener('change', (event) => {
            var str = '' + event.target.value;
            if (!(str.length < 2) && (str.charAt(0) !== '0' || str[1] !== '0')) {
                console.log('WARNING!!!! TOLERANCE!!!!');
            }
        });
    });
}

init();

// User selects an address
document.querySelector('.select-address-button').addEventListener('click', (event) => {
    setSummary('address-form-summary', `${document.querySelector('.address-select').value}`);
    showForm('fuel-type-form');
});


// User selects Fuel type
document.getElementById('fuel-type-submit').addEventListener('click', () => {
    var form = document.getElementById('fuel-type-form');
    var validation = form.validate();
    
    if(validation.isValid) {
        var fuels = {
            'gas': 'Gas only',
            'electricity': 'Electricity only',
            'both': 'Gas and Electricity'
        }
        var fuel = fuels[validation.fieldsByName['fuel-type'].value];
        var economy7 = validation.fieldsByName['fuel-type'].value !== 'gas' ? validation.fieldsByName['economy-seven'].value === 'yes' ? 'Economy 7' : 'Regular Electricity' : '';
        var summary = `${fuel}. ${economy7}`;
        setSummary('fuel-type-form-summary', summary);
        showForm('meter-reading-form');
    }
});

// User enters Meter readings
document.getElementById('meter-reading-submit').addEventListener('click', () => {
    var form = document.getElementById('meter-reading-form');
    var validation = form.validate();
    
    var trans = {
        'gas-meter-reading': 'Gas meter reading',
        'electricity-meter-reading': 'Electricity meter reading',
        'electricity-meter-reading-(day)': 'Electricity meter reading (day)',
        'electricity-meter-reading-(night)': 'Electricity meter reading (night)'
    }

    if(validation.isValid) {
        var summary = validation.fields.filter((field) => {
            return field.input.validationEnabled;
        }).map((field) => {
            return trans[field.name] + ': ' + field.value;
        }).join('. ');
        setSummary('meter-reading-form-summary', summary);
        showForm('summary-form');
    }
});


// Final Submit button on Summary form

document.getElementById('submit-button').addEventListener('click', () => {
    var form = document.getElementById('meter-reading-form');
    var validation = form.validate();
    
    if(validation.isValid) {
        // setSummary('fuel-type-form-summary', `You have X and Y`);
        // showForm('meter-reading-form');
    }
    
    
    // setTimeout(() => {
    //     document.location.href = 'thanks.html';
    // }, 100);
    
});

