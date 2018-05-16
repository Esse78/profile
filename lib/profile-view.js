'use babel';

export default class ProfileView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('profile');

    // Create message element
    const message = document.createElement('div');
    const os = require('os');
    const fs = require("fs");

    var txtFile = os.homedir() + "/.atom/profileInfo.pi"
    var data = fs.readFileSync(txtFile);

    message.textContent = data.toString();
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
