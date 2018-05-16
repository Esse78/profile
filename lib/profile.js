'use babel';

import ProfileView from './profile-view';
import { CompositeDisposable } from 'atom';

export default {

  profileView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.profileView = new ProfileView(state.profileViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.profileView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'profile:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.profileView.destroy();
  },

  serialize() {
    return {
      profileViewState: this.profileView.serialize()
    };
  },

  toggle() {
    console.log('Profile was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
