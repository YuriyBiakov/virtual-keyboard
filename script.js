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
    description.innerHTML = 'Created on Windows.  To change the layout of the VIRTUAL keyboard, press ⊞';
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

let functionalButtonsIndex = [13, 14, 28, 29, 41, 42, 54, 55, 56, 57, 58, 59, 60, 61, 62 ,63];

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

        let engKey = createNode('div', 'symbol eng');
        engKey.innerHTML = `${engSymArray[i]}`;

        let engCapsKey = createNode('div', 'symbol eng capsed inactive');
        engCapsKey.innerHTML = `${engCapsSymArray[i]}`;

        let rusKey = createNode('div', 'symbol rus inactive');
        rusKey.innerHTML = `${rusSymArray[i]}`;

        let rusCapsKey = createNode('div', 'symbol rus capsed inactive');
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

        // добавляем классы к элементам, которые будут печататься
        if (functionalButtonsIndex.indexOf(i) === -1) {
            engKey.classList.add('type-key');
            engCapsKey.classList.add('type-key');
            rusKey.classList.add('type-key');
            rusCapsKey.classList.add('type-key');
        } 
    }
}

createKeyboard();

// связываем нажатия по физической клавиатуре с виртуальной 

let textWindow = document.querySelector('.textWindow');

document.addEventListener("keydown", (event) => {
    if (textWindow === document.activeElement) {
    let pushedPhysicalButton = event.code;
    let keyClassName ='.' + pushedPhysicalButton[0].toLowerCase() + pushedPhysicalButton.slice(1);
    let highlightButton = document.querySelector(keyClassName);
    highlightButton.classList.add('pushed');
    }
});

document.addEventListener("keyup", (event) => {
    let pushedPhysicalButton = event.code;
    console.log(pushedPhysicalButton);

    let keyClassName ='.' + pushedPhysicalButton[0].toLowerCase() + pushedPhysicalButton.slice(1);
    console.log(keyClassName);
    let highlightButton = document.querySelector(keyClassName);
    highlightButton.classList.remove('pushed');
});

// связываем нажатия по виртуальной клавиатуре с текстовым полем 


let typingButtons = document.querySelectorAll('.type-key');
typingButtons.forEach((element) => {
    element.addEventListener("click", (event) =>
    textWindow.innerHTML += event.target.innerHTML);
})

// функция языка и CapsLock
// let language = 'en';
// let capsLocked = false;

// let winKey = document.querySelector(".metaLeft");

// function changeLayout() {
//     if (language === 'en' &&& capsLocked === false) {
//         language = 'ru';
//     }
//     else language = 'en';
// }




// для полученеия массива кодов кнопок путем "прокликивания"
// let keyCodeArray = [];

// document.addEventListener("keydown", (event) => {
//     keyCodeArray.push(event.code);
//     console.log(keyCodeArray);
// })