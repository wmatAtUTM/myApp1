import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Toast } from '@ionic-native/toast';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  scanFlag:boolean = false;
  scannedCode: any;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner, 
              private toast: Toast,
              public dataService: DataServiceProvider) {
    this.dataService.getProducts()
      .subscribe((response) => {
        this.products = response['results'];
        console.log(this.products);
      });
  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
      this.scanFlag = true;
      this.scannedCode = barcodeData.text;
      if (this.selectedProduct !== undefined) {
        this.productFound = true;
      } else {
        this.productFound = false;
        this.toast.show('Product not found', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    },

    );
  }

}
