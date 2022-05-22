import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  medName ="";
  mrp = "";

  isEntersuccess = false;
  isEditoperation = false;

  medicinesList:any = [];

  selectedIndex:any ;
  selectedObject:any ;

  constructor(){
    let data = localStorage.getItem('MEDICINE_LIST');
    if(data){
      this.medicinesList = JSON.parse(data);
    }
  }



  sSubmit(){
   
    let medicine ={
     medName: this.medName,
     mrp: this.mrp 
    }

    this.medicinesList.push(medicine);
    console.log("Medicine name",this.medicinesList);
    localStorage.setItem("MEDICINE_LIST",JSON.stringify(this.medicinesList));
    this.isEntersuccess = true;
    this.clear();
  }

  sUpdate(){
    this.isEditoperation = false;
    
    console.log('Selected Index',this.medName );
    console.log('Selected Object',this.mrp);

    this.medicinesList[this.selectedIndex].medName = this.medName;
    this.medicinesList[this.selectedIndex].mrp = this.mrp;
    localStorage.setItem("MEDICINE_LIST",JSON.stringify(this.medicinesList));
    alert("Submitted Successfully");
    this.clear();
  }

  mEdit(index:any,obj:any){
    this.isEditoperation = true;
    this.selectedIndex = index;
    this.selectedObject = obj;


    this.medName = obj.medName,
    this.mrp = obj.mrp
    
  }

  mDelete(index:any){
    this.medicinesList.splice(index,1);
    localStorage.setItem("MEDICINE_LIST",JSON.stringify(this.medicinesList));
    
  }




  clear(){
    this.medName ='';
    this.mrp = '';
  }
















































}
