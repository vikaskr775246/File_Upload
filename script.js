//selecter Start
const file = document.getElementById('file');
const file_extension = document.getElementById('extension');
const file_last = document.getElementById('file_last');
const file_name = document.querySelectorAll('.file_name');
const file_size = document.querySelectorAll('.file_size');
const info = document.getElementById('info');
const ul = document.querySelector('#menu');
const close = document.getElementById('close');
const btn_click = document.getElementById('btn_click');
//selecter end
file.onchange = function (e) {
    ul.classList.add('active');
    let path = this.files[0];
    let name = path.name;
    let extension = name.slice(name.length - 3);
    file_extension.innerText = extension;
    name = name.slice(0, -4);
    let size = path.size;
    let value = formatSizeUnits(size);
    file_name.forEach((elm, idx) => {
        file_name[idx].innerText = name;
        file_size[idx].innerText = value;
    });
    let date = setfulldate(path);
    file_last.innerText = date;
};
function setfulldate(path) {
    let d = path.lastModifiedDate;
    let ndate = new Date(d);
    let day = ndate.getDay();
    let date = ndate.getDate();
    let month = ndate.getMonth();
    let year = ndate.getFullYear();

    day = getday(day);
    month = getmonth(month)
    const fullDate = (date + ' ' + month + ' ' + year + ' ' + day).toString();
    return fullDate;
}
function getmonth(key) {
    switch (key) {
        case 0:
            return 'January'
            break;
        case 1:
            return 'February'
            break;
        case 2:
            return 'March'
            break;
        case 3:
            return 'April'
            break;
        case 4:
            return 'May'
            break;
        case 5:
            return 'June'
            break;
        case 6:
            return 'July'
            break;
        case 7:
            return 'August'
            break;
        case 8:
            return 'September'
            break;
        case 9:
            return 'October'
            break;
        case 10:
            return 'November'
            break;
        case 11:
            return 'December'
            break;
    }
}
function getday(key) {
    switch (key) {
        case 0:
            return 'Sunday'
            break;
        case 1:
            return 'Monday'
            break;
        case 2:
            return 'Tuesday'
            break;
        case 3:
            return 'Wednesday'
            break;
        case 4:
            return 'Thursday'
            break;
        case 5:
            return 'Friday'
            break;
        case 6:
            return 'Saturday'
            break;
    }
}
function formatSizeUnits(bytes) {
    if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1) { bytes = bytes + " bytes"; }
    else if (bytes == 1) { bytes = bytes + " byte"; }
    else { bytes = "0 bytes"; }
    return bytes;
}

close.onclick = (e) => {
    btn_click.classList.remove('active');
}
info.onclick = (e) => {
    btn_click.classList.toggle('active');
}