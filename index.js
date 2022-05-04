const keyLayout = [
  [
    {
      key: { ru: "ё", en: "`" },
      shift: { ru: "Ё", en: "~" },
      code: "Backquote",
    },
    { key: { ru: "1", en: "1" }, shift: { ru: "!", en: "!" }, code: "Digit1" },
    { key: { ru: "2", en: "2" }, shift: { ru: '"', en: "@" }, code: "Digit2" },
    { key: { ru: "3", en: "3" }, shift: { ru: "№", en: "#" }, code: "Digit3" },
    { key: { ru: "4", en: "4" }, shift: { ru: ";", en: "$" }, code: "Digit4" },
    { key: { ru: "5", en: "5" }, shift: { ru: "%", en: "%" }, code: "Digit5" },
    { key: { ru: "6", en: "6" }, shift: { ru: ":", en: "^" }, code: "Digit6" },
    { key: { ru: "7", en: "7" }, shift: { ru: "?", en: "&" }, code: "Digit7" },
    { key: { ru: "8", en: "8" }, shift: { ru: "*", en: "*" }, code: "Digit8" },
    { key: { ru: "9", en: "9" }, shift: { ru: "(", en: "(" }, code: "Digit9" },
    { key: { ru: "0", en: "0" }, shift: { ru: ")", en: ")" }, code: "Digit0" },
    { key: { ru: "-", en: "-" }, shift: { ru: "_", en: "_" }, code: "Minus" },
    { key: { ru: "=", en: "=" }, shift: { ru: "+", en: "+" }, code: "Equal" },
    {
      key: "Backspace",
      code: "Backspace",
      class: "key-backspace",
      noType: true,
    },
  ],
  [
    {
      key: "Tab",
      code: "Tab",
      class: "key-tab",
      noType: true,
    },
    { key: { ru: "й", en: "q" }, shift: { ru: "Й", en: "Q" }, code: "KeyQ" },
    { key: { ru: "ц", en: "w" }, shift: { ru: "Ц", en: "W" }, code: "KeyW" },
    { key: { ru: "у", en: "e" }, shift: { ru: "У", en: "E" }, code: "KeyE" },
    { key: { ru: "к", en: "r" }, shift: { ru: "К", en: "R" }, code: "KeyR" },
    { key: { ru: "е", en: "t" }, shift: { ru: "Е", en: "T" }, code: "KeyT" },
    { key: { ru: "н", en: "y" }, shift: { ru: "Н", en: "Y" }, code: "KeyY" },
    { key: { ru: "г", en: "u" }, shift: { ru: "Г", en: "U" }, code: "KeyU" },
    { key: { ru: "ш", en: "i" }, shift: { ru: "Ш", en: "I" }, code: "KeyI" },
    { key: { ru: "щ", en: "o" }, shift: { ru: "Щ", en: "O" }, code: "KeyO" },
    { key: { ru: "з", en: "p" }, shift: { ru: "З", en: "P" }, code: "KeyP" },
    {
      key: { ru: "х", en: "[" },
      shift: { ru: "Х", en: "{" },
      code: "BracketLeft",
    },
    {
      key: { ru: "ъ", en: "]" },
      shift: { ru: "Ъ", en: "}" },
      code: "BracketRight",
    },
    {
      key: { ru: "\\", en: "\\" },
      shift: { ru: "|", en: "|" },
      code: "Backslash",
    },
  ],
  [
    {
      key: "CapsLock",
      code: "CapsLock",
      class: "key-capslock",
      noType: true,
    },
    { key: { ru: "ф", en: "a" }, shift: { ru: "Ф", en: "A" }, code: "KeyA" },
    { key: { ru: "ы", en: "s" }, shift: { ru: "Ы", en: "S" }, code: "KeyS" },
    { key: { ru: "в", en: "d" }, shift: { ru: "В", en: "D" }, code: "KeyD" },
    { key: { ru: "а", en: "f" }, shift: { ru: "А", en: "F" }, code: "KeyF" },
    { key: { ru: "п", en: "g" }, shift: { ru: "П", en: "G" }, code: "KeyG" },
    { key: { ru: "р", en: "h" }, shift: { ru: "Р", en: "H" }, code: "KeyH" },
    { key: { ru: "о", en: "j" }, shift: { ru: "О", en: "J" }, code: "KeyJ" },
    { key: { ru: "л", en: "k" }, shift: { ru: "Л", en: "K" }, code: "KeyK" },
    { key: { ru: "д", en: "l" }, shift: { ru: "Д", en: "L" }, code: "KeyL" },
    {
      key: { ru: "ж", en: ";" },
      shift: { ru: "Ж", en: ":" },
      code: "Semicolon",
    },
    { key: { ru: "э", en: "'" }, shift: { ru: "Э", en: '"' }, code: "Quote" },
    {
      key: "Enter",
      code: "Enter",
      class: "key-enter",
      noType: true,
    },
  ],
  [
    {
      key: "Shift",
      code: "ShiftLeft",
      class: "key-leftshift",
      noType: true,
    },
    { key: { ru: "я", en: "z" }, shift: { ru: "Я", en: "Z" }, code: "KeyZ" },
    { key: { ru: "ч", en: "x" }, shift: { ru: "Ч", en: "X" }, code: "KeyX" },
    { key: { ru: "с", en: "c" }, shift: { ru: "С", en: "C" }, code: "KeyC" },
    { key: { ru: "м", en: "v" }, shift: { ru: "М", en: "V" }, code: "KeyV" },
    { key: { ru: "и", en: "b" }, shift: { ru: "И", en: "B" }, code: "KeyB" },
    { key: { ru: "т", en: "n" }, shift: { ru: "Т", en: "N" }, code: "KeyN" },
    { key: { ru: "ь", en: "m" }, shift: { ru: "Ь", en: "M" }, code: "KeyM" },
    { key: { ru: "б", en: "," }, shift: { ru: "Б", en: "<" }, code: "Comma" },
    { key: { ru: "ю", en: "." }, shift: { ru: "Ю", en: ">" }, code: "Period" },
    { key: { ru: ".", en: "/" }, shift: { ru: ",", en: "?" }, code: "Slash" },
    {
      key: "Shift",
      code: "ShiftRight",
      class: "key-rightshift",
      noType: true,
    },
    { key: "▲", code: "ArrowUp", noType: true },
  ],
  [
    {
      key: "Ctrl",
      code: "ControlLeft",
      class: "key-leftctrl",
      noType: true,
    },
    {
      key: "Alt",
      code: "AltLeft",
      class: "key-leftalt",
      noType: true,
    },
    { key: " ", code: "Space", class: "key-space" },
    {
      key: "Alt",
      code: "AltRight",
      class: "key-rightalt",
      noType: true,
    },
    {
      key: "Ctrl",
      code: "ControlRight",
      class: "key-rightctrl",
      noType: true,
    },
    { key: "◄", code: "ArrowLeft", noType: true },
    { key: "▼", code: "ArrowDown", noType: true },
    { key: "►", code: "ArrowRight", noType: true },
    {
      key: { ru: "🇷🇺", en: "🇺🇸" },
      code: "Lang",
      class: "key-lang",
      noType: true,
    },
  ],
];

class Keyboard {
  constructor() {
    this.lang = "en";
    this.capsLock = false;
    this.shift = false;
  }

  // Check language and caps from local storage
  languageCheck() {
    if (localStorage.getItem("lang")) {
      this.lang = localStorage.getItem("lang");
    } else {
      localStorage.setItem("lang", this.lang);
    }
  }

  // Change language (if Shift+Alt) and save new one to local storage
  languageSwitch(event) {
    if (this.lang === "en") {
      this.lang = "ru";
    } else {
      this.lang = "en";
    }
    localStorage.setItem("lang", this.lang);
    this.updateKeyboard(event);
  }

  // Caps Lock interaction
  capsActivateKey() {
    if (this.caps) {
      document.querySelector(".key-capslock").classList.add("caps_on");
    } else {
      document.querySelector(".key-capslock").classList.remove("caps_on");
    }
  }

  capsSwitch(event) {
    if (this.caps) {
      this.caps = false;
    } else {
      this.caps = true;
    }
    this.capsActivateKey();
    this.updateKeyboard(event);
  }

  // Update keyboard if switch language or pressing Shift
  updateKeyboard(event) {
    const { lang } = this;
    if (event.shiftKey || this.shift) {
      document.querySelectorAll(".key").forEach((e) => {
        if (e.dataset[`${lang}Shift`]) {
          if (this.caps) {
            e.innerHTML = e.dataset[`${lang}Shift`].toLowerCase();
          } else e.innerHTML = e.dataset[`${lang}Shift`];
        } else if (e.dataset[lang]) e.innerHTML = e.dataset[lang];
      });
    } else {
      document.querySelectorAll(".key").forEach((e) => {
        if (e.dataset[lang]) {
          if (this.caps && !(event.shiftKey || this.shift)) {
            e.innerHTML = e.dataset[lang].toUpperCase();
          } else e.innerHTML = e.dataset[lang];
        }
      });
    }
  }

  removeShift(event) {
    if (this.shift) {
      this.shift = !this.shift;
      document.querySelector(".key-leftshift").classList.remove("active");
      document.querySelector(".key-rightshift").classList.remove("active");
      this.updateKeyboard(event);
    }
  }

  generateKeyboard() {
    const keyboard = createElement("div", "", "keyboard");
    const container = createElement("div", "", "keyboard-container");
    this.languageCheck();
    // Create keyboard row by row
    for (let i = 0; i < keyLayout.length; i += 1) {
      const row = createElement("div", "", "keyboard-row");
      keyLayout[i].forEach((e) => {
        // Create basic key
        const keyLabel = e.key.ru && e.key.en ? e.key[this.lang] : e.key;
        const key = createElement("div", keyLabel, "key");
        // Add extra classes
        if (e.class) key.classList.add(e.class);
        // Add datasets to switch language and change with shift
        key.dataset.code = e.code;
        if (e.key.ru && e.key.en) {
          key.dataset.ru = e.key.ru;
          key.dataset.en = e.key.en;
        }
        if (e.shift) {
          key.dataset.ruShift = e.shift.ru;
          key.dataset.enShift = e.shift.en;
        }
        if (e.noType) {
          key.dataset.noType = true;
        }
        row.append(key);
      });
      container.append(row);
    }
    keyboard.append(container);
    return keyboard;
  }
}

const createElement = (element, innerHTML, ...classes) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...classes);
  newElement.innerHTML = innerHTML;
  return newElement;
};
const testCapsLock = (event) => {
  if (event.getModifierState("CapsLock")) {
    document.querySelector(".caps_icon").classList.add("caps_on");
  } else {
    document.querySelector(".caps_icon").classList.remove("caps_on");
  }
};

const textField = createElement("textarea", "", "textarea");
const notes = createElement(
  "div",
  "<p>Change language: Shift + Alt</p>",
  "notes"
);
const keyboard = new Keyboard();

const keyPress = (event, button, code) => {
  let text = "";
  let cursor = textField.selectionStart;
  event.preventDefault();
  textField.focus();
  if (code === "CapsLock") keyboard.capsSwitch(event);
  if (
    (code === "AltLeft" && (event.shiftKey || keyboard.shift)) ||
    (code === "AltRight" && (event.shiftKey || keyboard.shift)) ||
    (code === "ShiftLeft" && event.altKey) ||
    (code === "ShiftRight" && event.altKey) ||
    code === "Lang"
  ) {
    keyboard.languageSwitch(event);
    keyboard.removeShift(event);
  }
  if (code === "ShiftLeft" || code === "ShiftRight")
    keyboard.updateKeyboard(event);
  if (code === "ArrowLeft" && cursor > 0)
    textField.setSelectionRange(cursor - 1, cursor - 1);
  if (code === "ArrowRight") {
    cursor = textField.selectionEnd;
    textField.setSelectionRange(cursor + 1, cursor + 1);
  }

  if (code === "ArrowUp") {
    const textBeforeCursor = textField.value.substring(0, cursor).split("\n");
    // if no Enters or line is longer than 57 symbols
    if (
      textBeforeCursor.length === 1 ||
      textBeforeCursor[textBeforeCursor.length - 1].length >= 69
    ) {
      cursor -= 69;
      // if prev line is longer than cursor position in current line
    } else if (
      textBeforeCursor[textBeforeCursor.length - 1].length <=
      textBeforeCursor[textBeforeCursor.length - 2].length % 69
    ) {
      cursor -= (textBeforeCursor[textBeforeCursor.length - 2].length % 69) + 1;
      // if prev line is shorter than cursor position in the current line
    } else {
      cursor -= textBeforeCursor[textBeforeCursor.length - 1].length + 1;
    }
    if (cursor < 0) cursor = 0;
    textField.setSelectionRange(cursor, cursor);
  }

  if (code === "ArrowDown") {
    cursor = textField.selectionEnd;
    const textBeforeCursor = textField.value.substring(0, cursor).split("\n");
    const textAfterCursor = textField.value
      .substring(textField.selectionEnd)
      .split("\n");
    // if no Enters or next line is longer than 57 symbols
    if (textAfterCursor.length === 1 || textAfterCursor[0].length >= 69) {
      cursor += 69;
      // if next line shorter than cursor position
    } else if (
      textBeforeCursor[textBeforeCursor.length - 1].length % 69 >
      textAfterCursor[1].length
    ) {
      cursor += textAfterCursor[0].length + textAfterCursor[1].length + 1;
      // if current line is very long
    } else if (
      textBeforeCursor[textBeforeCursor.length - 1].length +
        textAfterCursor[0].length >
      57
    ) {
      cursor += textAfterCursor[0].length;
      // if next line longer than cursor position
    } else {
      cursor +=
        (textBeforeCursor[textBeforeCursor.length - 1].length % 69) +
        textAfterCursor[0].length +
        1;
    }
    textField.setSelectionRange(cursor, cursor);
  }
  if (code === "Tab") text = "    ";
  if (code === "Enter") text = "\n";
  if (code === "Backspace") text = "-1";
  if (!button.dataset.noType) {
    text = button.textContent;
    keyboard.removeShift(event);
  }

  if (text) {
    let textBeforeCursor = textField.value.substring(0, cursor);
    const textAfterCursor = textField.value.substring(textField.selectionEnd);
    if (text === "-1") {
      text = "";
      if (cursor === textField.selectionEnd) {
        textBeforeCursor = textBeforeCursor.slice(0, -1);
        cursor -= cursor > 0 ? 2 : 1;
      } else cursor -= 1;
    }
    textField.value = textBeforeCursor + text + textAfterCursor;
    textField.setSelectionRange(cursor + 1, cursor + 1);
    if (text === "    ") textField.setSelectionRange(cursor + 4, cursor + 4);
  }
};

window.onload = () => {
  // Create DOM
  document.body.append(notes);

  document.body.append(textField);

  // Create keyboard
  document.body.append(keyboard.generateKeyboard());

  // Physical keyboard interaction
  document.addEventListener("keydown", (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.add("active");
      keyPress(event, button, event.code);
    }
  });

  document.addEventListener("keyup", (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.remove("active");
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        keyboard.removeShift(event);
        keyboard.updateKeyboard(event);
      }
    }
  });

  // Mouse interaction
  document.querySelector(".keyboard").addEventListener("click", (event) => {
    if (event.target.closest(".key")) {
      const button = event.target.closest(".key");
      if (
        button.dataset.code === "ShiftLeft" ||
        button.dataset.code === "ShiftRight"
      ) {
        keyboard.shift = !keyboard.shift;
        button.classList.toggle("active");
      }
      keyPress(event, button, button.dataset.code);
    }
  });
};
