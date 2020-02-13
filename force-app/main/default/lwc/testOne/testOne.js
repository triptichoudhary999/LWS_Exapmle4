import { LightningElement,track } from 'lwc';

export default class TestOne extends LightningElement {
   @track abc="World";
   abcc(event){
         this.abc=event.target.value;
   }
}