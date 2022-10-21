const magicNumbers = [0x31,0x6e,0x84,0xc8,0x1fe,0x90,0x21b,0xb0,0xd8,0x3ac,0x3f4,0x45c,0x4d3,0x10a,0x483,0x150,0x51d,0x1b0,0x24d,0x5f0,0x666,0x1b8,0x256,0x2b8,0x76c,0xa90,0x402];

function checkOldFlag() {
    let flag = localStorage.getItem('flag_1');
    if (!flag) return false;
    if (!flag.startsWith("FLAG{")) return false;
    if (flag.charCodeAt(5) != 54) return false;
    if (flag.charCodeAt(6) != 57) return false;
    if (!flag.endsWith("};")) return false;
    
    return true;
}

if (!checkOldFlag()) {
    alert("You cheated!");
    window.location.assign('../1/')
}

const form = document.getElementById(`form`);
const input = document.getElementById('flag');

function checkFlag() {
    let flag = input.value;
    if (flag.length != magicNumbers.length) return false;
    for (let i = 0; i < magicNumbers.length; i++) {
        const e = magicNumbers[i];
        if (e/(i+1)+21 != flag.charCodeAt(i)) return false;
    }
    
    return true;
}

form.onsubmit = (e) => {
    e.preventDefault();

    if (checkFlag()) {
        localStorage.setItem('flag_2', input.value);
        window.location.assign(`../3/#${input.value}`);
    } else {
        alert('Wrong flag!')
    }
}