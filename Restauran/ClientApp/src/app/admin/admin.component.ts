import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { IFoods } from '../models/ifoods';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private serviceFood: FoodService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.get();
    this.foodGroupReset();
  }
  foodGroupReset(){
    this.formGroud = this.fb.group({
      food: "",
      price: "",
      quantity: ""
    });
  }
  foods: IFoods[];
  formGroud: FormGroup;
  modeEdit: boolean = false;
  id: number;

  get(){
    this.serviceFood.getFoods().subscribe(result => this.foods = result,
      error => console.error(error));
  }
  delete(id: number){
    this.serviceFood.deleteFood(id).subscribe(result => this.get(), 
    error => console.error(error))
  }
  add(){
    let food = Object.assign({}, this.formGroud.value);
    if(!this.modeEdit){  
      this.serviceFood.addFood(food).subscribe(resurt => this.get(),
      error => console.error(error));
    }else{
      this.serviceFood.editFood(this.id,food).subscribe(resurt => this.get(),
      error => console.error(error))
    }
  }
  edit(id: number){
    this.id=id;
    this.modeEdit = true;
    let food: IFoods; 
    this.serviceFood.getFoodById(id).subscribe(resurt =>{ 
      food = resurt;
      this.formGroud = this.fb.group({
        food: food.food,
        price: food.price,
        quantity: food.quantity
      });
    },
      error => console.error(error));
  }

}
