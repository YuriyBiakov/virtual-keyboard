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

let keyCodeArray = [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
    "ShiftLeft",
    "Backslash",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ArrowUp",
    "ShiftRight",
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight"
]

let engSymArray = [
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
    "Caps Lock",
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

let engCapsSymArray = [
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
    "Caps Lock",
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

let rusSymArray = [
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
    "Caps Lock",
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

let rusCapsSymArray = [
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
    "Caps Lock",
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
    let line1 = createNode('div', 'line line1');
    let line2 = createNode('div', 'line line2');
    let line3 = createNode('div', 'line line3');
    let line4 = createNode('div', 'line line4');
    let line5 = createNode('div', 'line line5');
    keyboard.append(line1, line2, line3, line4, line5);

    for (let i = 0; i < 64; i++) {
        let keyClassName = `key ${keyCodeArray[i][0].toLowerCase() + keyCodeArray[i].slice(1)}`;
        let key = createNode('div', keyClassName);

        let engKey = createNode('span', 'symbol');
        engKey.innerHTML = `${engSymArray[i]}`;

        let engCapsKey = createNode('span', 'symbol inactive');
        engCapsKey.innerHTML = `${engCapsSymArray[i]}`;

        let rusKey = createNode('span', 'symbol inactive');
        rusKey.innerHTML = `${rusSymArray[i]}`;

        let rusCapsKey = createNode('span', 'symbol inactive');
        rusCapsKey.innerHTML = `${rusCapsSymArray[i]}`;
        
        key.append(engKey, engCapsKey, rusKey, rusCapsKey);
        if (i < 14) {
        line1.append(key);
    } else if (i < 29) {
        line2.append(key);
    } else if (i < 42) {
        line3.append(key);
    } else if (i < 56) {
        line4.append(key);
    } else line5.append(key);
    }
}

createKeyboard();


// для полученеия массива кодов кнопок путем "прокликивания"

// let keyCodeArray = [];

// document.addEventListener("keydown", (event) => {
//     keyCodeArray.push(event.code);
//     console.log(keyCodeArray);
// })