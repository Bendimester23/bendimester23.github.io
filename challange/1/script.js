const form = document.getElementById(`form`);
const input = document.getElementById('flag');

function checkFlag() {
    let flag = input.value;
    if (!flag.startsWith("FLAG{")) return false;
    if (flag.charCodeAt(5) != 54) return false;
    if (flag.charCodeAt(6) != 57) return false;
    if (!flag.endsWith("};")) return false;

    return true;
}

form.onsubmit = (e) => {
    e.preventDefault();

    if (checkFlag()) {
        localStorage.setItem('flag_1', input.value);
        window.location.assign(`../2/#${input.value}`);
    } else {
        alert('Wrong flag!')
    }
}