import { NOTICE_TYPE } from "../constants.js";

const HIDE_DELAY = 3000;

export class Notice {
  constructor(element) {
    this.element = element;
    this.timer = null;
  }

  show(message, type = NOTICE_TYPE.SUCCESS) {
    clearTimeout(this.timer);
    this.element.textContent = message;
    this.element.className = `notice notice--${type}`;
    this.element.hidden = false;
    this.timer = setTimeout(() => this.hide(), HIDE_DELAY);
  }

  hide() {
    this.element.hidden = true;
  }
}
