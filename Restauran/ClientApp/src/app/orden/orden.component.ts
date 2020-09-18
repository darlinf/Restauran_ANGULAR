import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { IFoods } from '../models/ifoods';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IFoodsLocal } from '../models/ifoodLocal';
import { group } from '@angular/animations';
import { CustomerService } from '../service/customer.service';
import { ICustomer } from '../models/icustomer';
import { IFacturacion } from '../models/ifacturacion';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  constructor(private serviceFood: FoodService,
    private fb: FormBuilder, private serviceCustomer: CustomerService) { }

  ngOnInit(): void {
    this.noOrder = ​Math.floor(Math.random() * 900000) + 100000;
    this.getFood();
    this.getCustomer();
    this.customerGroupReset();
  }

  customer: ICustomer[];
  noOrder: number;
  foods: IFoods[];
  foodPrice: number;
  formGroup: FormGroup;
  total: string;
  quantity: number;
  food: string;
  foodArray: Array<any>=[]; 
  grandTotal: number = 0;
  foodArra: Array<any>=[]; 
  foodAndId: Array<any> = [];

  customerGroupReset(){
    this.formGroup = this.fb.group({
      orderNo: this.noOrder,
      pMethod: '',
      gTotal: this.grandTotal,
      customerId: ''
    })
    
  }

  getCustomer(){
    this.serviceCustomer.getCustomer().subscribe(resurt =>{
      this.customer = resurt;
   },error => console.error(error))
  }

  priceSelect(value: number){
    this.serviceFood.getFoodById(value).subscribe( resurt => {
      this.foodPrice = resurt.price;
      this.food = resurt.food;
    },error => console.error(error))
  }
  
  totalCarcular(){
    this.total = ​(this.foodPrice * this.quantity).toFixed(2);
  }

  getFood(){
    this.serviceFood.getFoods().subscribe(result =>{
      this.foods = result;
      this.selecArrayOrdena(1);
      this.idAndFood();
    } ,error => console.error(error))
  }

  addItem(){
    let food = {
      food: this.food,
      price: this.foodPrice,
      quantity: this.quantity,
      total: this.total
    };
    this.foodArray.push(food);
    this.grandTotal += parseInt(this.total);
  }

  restart(){
    this.quantity = undefined; 
    this.total = undefined;
    this.foodPrice = undefined; 
  }

  deleteFoodItem(index: number){
    this.foodArray.splice(index, 1);
  }

  editFoodItem(i: number){
    this.quantity = this.foodArray[i].quantity;
    this.total = this.foodArray[i].total;
    this.foodPrice = this.foodArray[i].foodPrice;
    this.selecArrayOrdena(i);
  }
  
  selecArrayOrdena(id: number){
    this.foodAndId.unshift(...this.foodAndId.splice(id, 1))
  }

  idAndFood(){
    this.foodArra = this.foods as any;
    this.foodAndId = this.foodArra.map((x)=>{ 
      return {
        id: x.id,
        food: x.food
      }
    });
  }

  createOrder(){
   let facturacion: IFacturacion = Object.assign({}, this.formGroup.value);
   this.serviceCustomer.addFacturacion(facturacion).subscribe(result => {},
    error => console.error(error))
   console.log(facturacion)
  }
  
}
