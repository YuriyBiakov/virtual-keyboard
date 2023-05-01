'use strict'
const body = document.querySelector('body');

function createNode(tagName, className) {
    const node = document.createElement(tagName);
    node.setAttribute('class', className);
    return node;
};

function createBaseLayOut () {
    let textWindow = createNode('textarea', 'textWindow');
    textWindow.setAttribute('placeholder', 'input your text');
    textWindow.setAttribute('rows', '25');
    let keyboard = createNode('div', 'keyboard');
    let description = createNode('div', 'description');
    description.innerHTML = 'Created on Windows. For change language press Ctrl + Shift';
    body.append(textWindow, keyboard, description);
}
createBaseLayOut ();

let engKeyArray = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "&#8592;",
    "Tab ↹",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Del",
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Enter",
    "Shift",
    "\\",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "&#9650;",
    "Shift",
    "Ctrl",
    "⊞",
    "Alt",
    "Space",
    "Alt",
    "&#9668;",
    "&#9660;",
    "&#9658;"
];

let engCapsKeyArray = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "&#8592;",
    "Tab ↹",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    "\\",
    "Del",
    "CapsLock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ";",
    "'",
    "Enter",
    "Shift",
    "\\",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    "&#9650;",
    "Shift",
    "Ctrl",
    "⊞",
    "Alt",
    "Space",
    "Alt",
    "&#9668;",
    "&#9660;",
    "&#9658;"
];

let rusKeyArray = [
    "ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "&#8592;",
    "Tab ↹",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "Del",
    "CapsLock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "Enter",
    "Shift",
    "\\",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    "/",
    "&#9650;",
    "Shift",
    "Ctrl",
    "⊞",
    "Alt",
    "Space",
    "Alt",
    "&#9668;",
    "&#9660;",
    "&#9658;"
];

let rusCapsKeyArray = [
    "Ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "&#8592;",
    "Tab ↹",
    "Й",
    "Ц",
    "У",
    "К",
    "Е",
    "Н",
    "Г",
    "Ш",
    "Щ",
    "З",
    "Х",
    "Ъ",
    "\\",
    "Del",
    "CapsLock",
    "Ф",
    "Ы",
    "В",
    "А",
    "П",
    "Р",
    "О",
    "Л",
    "Д",
    "Ж",
    "Э",
    "Enter",
    "Shift",
    "\\",
    "Я",
    "Ч",
    "С",
    "М",
    "И",
    "Т",
    "Ь",
    "Б",
    "Ю",
    "/",
    "&#9650;",
    "Shift",
    "Ctrl",
    "⊞",
    "Alt",
    "Space",
    "Alt",
    "&#9668;",
    "&#9660;",
    "&#9658;"
];

function createKeyboard () {
    let keyboard = document.querySelector('.keyboard');
    for (let i = 0; i < keyArray.length; i++) {
        let key = createNode('span', 'key');
        key.innerHTML = keyArray[i];
        keyboard.append(key);
    }
}

createKeyboard();

