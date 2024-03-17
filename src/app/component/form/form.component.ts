import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})




export class FormComponent {
  

  public isChecked!: boolean | false;
 //  public employeeForm: FormGroup;
 public submitted = true;

 cities: any[] = [];

 selectedCities: any =[];
 
 selectedDesignation: any = [];

 selectedGender:any;

 design: { name: string; code: string; }[];

 gender: { gndr: string; code: string; }[]=[];

 empTableData:any =[];

 //  @ViewChild('f') forms: NgForm | undefined;

 employee = {
  firstName: "Harish",
  mobileNumber: "8142209748",
  email: "test@gmail.com",
  gender: "",
  location: "",
  designation: "",
  address: "",
  pincode: "",
 }
  


 constructor( private fb: FormBuilder, 
  private _regSer: EmpService ){

    this._regSer.showEmpDetails().subscribe( (res:any)=> {
      this.empTableData = res;
      // console.log(res)
      // console.log(res[0].designation)
      // console.log(res[0].gender)
      // console.log(res[0].location)
    })


  this.cities = [
    {name: 'Bangalore', code: 'BNG'},
    {name: 'Chennai', code: 'CN'},
    {name: 'Hyderabad', code: 'HYD'},
    {name: 'Mumbai', code: 'MUM'},
    {name: 'Vizag', code: 'VIZ'}
 ];

  this.design = [
    {name: 'Consultant', code: 'Cons'},
    {name: 'Jr.Developer', code: 'Jr.Dev'},
    {name: 'Sr.Developer', code: 'Sr.Dev'},
    {name: 'Quality Analyst', code: 'QA'},
    {name: 'Data Analyst', code: 'DA'}
  ];

  this.gender = [
    {gndr: 'Male', code: 'M'},
    {gndr: 'Female', code: 'F'}
  ];
  
 }

 employeeForm = this.fb.group({
  firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  mobileNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  email: ['', [Validators.required, Validators.email]],
  designation: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  location: ['', [Validators.required]],
  address: ['', [Validators.required]],
  locality: ['', [Validators.required]],
  state: ['', [Validators.required]],
  pincode: ['', [Validators.required, Validators.maxLength(6)]]

 })


 onCheckboxChange($event: any) {
    if($event.target.checked){
      console.log('checkbox is checked');
    }else{
      console.log('checkbox is not checked');
    }
  }
  

    

      get firstName(){
       return this.employeeForm.controls['firstName']
      }
      get mobileNumber(){
        return this.employeeForm.controls['mobileNumber']
      }
      get email(){
        return this.employeeForm.controls['email']
      }
      get address(){
        return this.employeeForm.controls['address']
      }
      get designation(){
        return this.employeeForm.controls['designation']
      }
      get locality(){
        return this.employeeForm.controls['locality']
      }
      get state(){
        return this.employeeForm.controls['state']
      }
      get pincode(){
        return this.employeeForm.controls['pincode']
      }


      submit() {
        // console.log(this.employeeForm.value);

        const data = {...this.employeeForm.value}
        // console.log(data);

        this._regSer.registerEmpDetails(data).subscribe( (response:any) => {
          console.log(response);
        })

        // this._regSer.showEmpDetails().subscribe( (res:any)=> {
        //   console.log(res)
        // })
          // this.submitted = true;
          // this.employee.firstName = this.employeeForm.value.firstName;
          // this.employee.mobileNumber = this.employeeForm.value.mobileNumber;
          // this.employee.email = this.employeeForm.value.email;
          // this.employee.gender = this.employeeForm.value.gender;
          // this.employee.location = this.employeeForm.value.location;
          // this.employee.designation = this.employeeForm.value.designation;
          // this.employee.address = this.employeeForm.value.address;
          // this.employee.pincode = this.employeeForm.value.pincode;
          // console.log(this.employeeForm.value.firstName, this.employeeForm.value.mobileNumber, this.employeeForm.value.email, 
          // this.employeeForm.value.gender,this.employeeForm.value.location,this.employee.designation,this.employee.address,this.employee.pincode )
          // this.employeeForm.reset();
      }

      
      
}
      
    
      





