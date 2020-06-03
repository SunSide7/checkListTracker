const _inputs = document.querySelectorAll('input');

function refreshLocalStorage() {
    _inputs.forEach(item => item.addEventListener('change', () => {
        localStorage.clear();
        _inputs.forEach((item, i) => localStorage.setItem(`input ${i}`, item.checked));
    }))
}

function getInputValuesFromLocalStore(index) {
    if (localStorage.getItem(`input ${index}`) === 'true') {
        return true;
    }
    return false;
}


// Using functions
refreshLocalStorage();

_inputs.forEach((item, i) => {
    item.checked = getInputValuesFromLocalStore(i);
})