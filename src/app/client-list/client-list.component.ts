import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  //create the product form group
  productCategory: FormGroup;

  //create an array of product categories
  productCategories=[{
    id:1,
    name:'Beverages',
    description:'Tea, Coffee, Soft drinks'
  },{
    id:2,
    name:'Sandwiches',
    description:'Ham, Cheese, Salad'
  },{
    id:3,
    name:'Pastries',
    description:'Bun, Macaroons'
  }]

  //injec the form builder
  constructor(private fb: FormBuilder){}

  ngOnInit() {

    //create the form builder group and specifiy requirements
		this.productCategory = this.fb.group({
			productCategory: [null, Validators.required]
		});

    //get the array where category.id == the value to look for
    const toSelect = this.productCategories.find(c => c.id == 2);
    
    //set the product value
    this.productCategory.get('productCategory').setValue(toSelect);
	}
}