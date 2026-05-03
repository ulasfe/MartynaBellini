import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-drinks',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
coldDrinks: MenuItem[] = [
    { name: 'Carafe of Water', price: 12.00, description: '750 ml' },
    { name: 'Orange DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Rhumbar DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Lime DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Ginger DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Yerba Mate DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Mango DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Kolanko DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Pear DOBRY MATERIAL', price: 12.00, description: '330 ml' },
    { name: 'Kukakola DOBRY MATERIAL', price: 12.00, description: '330 ml' },  
    { name: 'Non-Alcholic beer', price: 15.50, description: '330 ml' }
  ];

  hotDrinks : MenuItem[] = [
    { name: 'BLACK TEA', price: 9.00, description: '250 ml' },
    { name: 'BLACK TEA WITH SPICES', price: 16.00, description: '(clove, cinnamon, fresh mint) 500 ml' },
    { name: 'WINTER TEA', price: 16.00, description: '(orange, cinnamon, cloves, fresh rosemary) 500 ml' },
    { name: 'BLOOMING TEA', price: 16.00, description: '(Jasmine Lychee Tea) 500 ml' },
    { name: 'BLOOMING TEA', price: 16.00, description: '(White Tea Lychee & Coconut) 500 ml' },
    { name: 'BLOOMING TEA', price: 16.00, description: '(White Oriental Tea) 500 ml' },
    { name: 'AMERICANO', price: 9.00, description: '200 ml' },
    { name: 'ESPRESSO', price: 7.00, description: '60 ml' },
    { name: 'CAPPUCCINO WITH PLANT-BASED MILK', price: 15.00, description: 'Soy or oat milk' },
    { name: 'SPICED COFFEE', price: 15.00, description: '(black coffee, cardamom, cinnamon)' },
    { name: 'PUMPKIN SPICED COFFEE', price: 19.00, description: '(2x espresso, soy milk, pumpkin spiced syrup, cardamom,cinnamon, vegan whipped cread)' }
  ];
}
