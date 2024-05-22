function validateDate() {
    var inputtedDate = document.querySelector('.calendar').value;
    var current = new Date();
    var date = new Date(inputtedDate);
    var ms1 = current.getTime();
    var ms2 = date.getTime();
    if (ms1 < ms2) {
        alert('You can\'t be negative years old. Enter a date before today.');
        return false;
    } else {
        return true;
    }
}