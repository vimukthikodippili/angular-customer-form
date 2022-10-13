import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../share/services/customer.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  allCustomer: Array<any> = [
    {id:'C001',name:'Vimukthi',address:'Horana',salary:15000},
    {id:'C002',name:'Saranga',address:'Rambukkana',salary:0},
    {id:'C003',name:'Kavindu',address:'Udugama',salary:15000}
  ]

  saveCustomer = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      address: new FormControl(''),
      salary: new FormControl(''),
    }
  )

  updateCustomer = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      address: new FormControl(''),
      salary: new FormControl(''),
    }
  )
  deleteCustomer = new FormGroup({
    id: new FormControl(''),

  });

  constructor(private customerService:CustomerService) {
    console.log(this.allCustomer[0]?.id);
    console.log(this.allCustomer[2]?.address);
  }

  ngOnInit(): void {
    this.loadData();
  }

  submitData() {

    let id = this.saveCustomer.get('id')?.value;
    let name = this.saveCustomer.get('name')?.value;
    let address = this.saveCustomer.get('address')?.value;
    let salary = this.saveCustomer.get('salary')?.value;

    console.log(id+" " +name+" " +address+" " +salary)

    this.customerService.newCustomer(
      id,name,address,salary
    ).subscribe(response => {
      console.log(response)
      if (response.code === 201) {
        alert(response.message)
      } else {
        alert('error')
      }
    })

  }
  updateData(){
    let id = this.saveCustomer.get('id')?.value;
    let name = this.saveCustomer.get('name')?.value;
    let address = this.saveCustomer.get('address')?.value;
    let salary = this.saveCustomer.get('salary')?.value;

    console.log(id+" " +name+" " +address+" " +salary)

    this.customerService.updateCustomer(
      id,name,address,salary
    ).subscribe(response => {
      console.log(response)
      if (response.code === 201) {
        alert(response.message)
      } else {
        alert('error')
      }
    })


  }


  deleteData() {
    let id = this.saveCustomer.get('id')?.value;

    console.log(id+" " )

    this.customerService.deleteCustomer(
      id
    ).subscribe(response => {
      console.log(response)
      if (response.code === 201) {
        alert(response.message)
      } else {
        alert('error')
      }
    })
  }

  loadData() {
    this.customerService.getAllCustomer().subscribe(response => {
      console.log(response)
      this.allCustomer = response.data
      if (response.code === 201) {
        alert(response.message)
      } else {
        alert('error')
      }
    })
  }
}

// response
// this.allCustomer = response.data
