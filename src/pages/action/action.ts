import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-action',
  templateUrl: 'action.html'
})

export class ActionPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController
  ) { }

  
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Fun Lee, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [{
          name: 'title',
          placeholder: 'Title'
        }],
      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }]
    });
    prompt.present();
  }

  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [{
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }]
    });
    confirm.present()
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });
    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });
    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });
    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });
    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    actionSheet.present();
  }

}