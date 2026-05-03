import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // Important!

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-food',
  imports: [CommonModule, DecimalPipe,TranslateModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
constructor(private translate: TranslateService) {}
getPriceAsNumber(key: string): number {
    const translatedValue = this.translate.instant(key);
    return parseFloat(translatedValue) || 0;
  }

wrapItems: MenuItem[] = [
    { name: 'FOOD.WRAPS.EGYPTIAN.TITLE', price: 'FOOD.WRAPS.EGYPTIAN.PRICE', description: 'FOOD.WRAPS.EGYPTIAN.DESC' },
    { name: 'FOOD.WRAPS.GREEK.TITLE',price: 'FOOD.WRAPS.GREEK.PRICE', description: 'FOOD.WRAPS.GREEK.DESC'},
    { name: 'FOOD.WRAPS.SOYSTRIPS.TITLE',price: 'FOOD.WRAPS.SOYSTRIPS.PRICE', description: 'FOOD.WRAPS.SOYSTRIPS.DESC'},
    { name: 'FOOD.WRAPS.MUSTARTD.TITLE',price: 'FOOD.WRAPS.MUSTARTD.PRICE', description: 'FOOD.WRAPS.MUSTARTD.DESC'},
    { name: 'FOOD.WRAPS.KIMCHI.TITLE',price: 'FOOD.WRAPS.KIMCHI.PRICE', description: 'FOOD.WRAPS.KIMCHI.DESC'},
    { name: 'FOOD.WRAPS.AVOCADO.TITLE',price: 'FOOD.WRAPS.AVOCADO.PRICE', description: 'FOOD.WRAPS.AVOCADO.DESC'},
    { name: 'FOOD.WRAPS.SEITAN.TITLE',price: 'FOOD.WRAPS.SEITAN.PRICE', description: 'FOOD.WRAPS.SEITAN.DESC'},
    { name: 'FOOD.WRAPS.VEGE.TITLE',price: 'FOOD.WRAPS.VEGE.PRICE', description: 'FOOD.WRAPS.VEGE.DESC'}
  ];

saladItems: MenuItem[] = [
    { name: 'FOOD.SALADS.FALAFEL.TITLE', price: 'FOOD.SALADS.FALAFEL.PRICE', description: 'FOOD.SALADS.FALAFEL.DESC' },
    { name: 'FOOD.SALADS.SALADWITH.TITLE', price: 'FOOD.SALADS.SALADWITH.PRICE', description: 'FOOD.SALADS.SALADWITH.DESC' }
  ];

  grabItems: MenuItem[] = [
    { name: 'FOOD.GRABABITE.FRENCHFRIES.TITLE', price: 'FOOD.GRABABITE.FRENCHFRIES.PRICE', description: 'FOOD.GRABABITE.FRENCHFRIES.DESC' },
    { name: 'FOOD.GRABABITE.KIMCHI.TITLE', price: 'FOOD.GRABABITE.KIMCHI.PRICE', description: 'FOOD.GRABABITE.KIMCHI.DESC' },
    { name: 'FOOD.GRABABITE.TURKISHPICKLES.TITLE', price: 'FOOD.GRABABITE.TURKISHPICKLES.PRICE', description: 'FOOD.GRABABITE.TURKISHPICKLES.DESC' },
    { name: 'FOOD.GRABABITE.HUMMUS.TITLE', price: 'FOOD.GRABABITE.HUMMUS.PRICE', description: 'FOOD.GRABABITE.HUMMUS.DESC' }
  ];

    limitedItems: MenuItem[] = [
    { name: 'FOOD.LIMITED.ROLLON.TITLE', price: 'FOOD.LIMITED.ROLLON.PRICE', description: 'FOOD.LIMITED.ROLLON.DESC' }
  ];

  extraItems: MenuItem[] = [
    { name: 'FOOD.EXTRAS.FALAFEL.TITLE', price: 'FOOD.EXTRAS.FALAFEL.PRICE', description: 'FOOD.EXTRAS.FALAFEL.DESC' },
    { name: 'FOOD.EXTRAS.VEGANFETA.TITLE', price: 'FOOD.EXTRAS.VEGANFETA.PRICE', description: 'FOOD.EXTRAS.VEGANFETA.DESC' },
    { name: 'FOOD.EXTRAS.JALAPENO.TITLE', price: 'FOOD.EXTRAS.JALAPENO.PRICE', description: 'FOOD.EXTRAS.JALAPENO.DESC' },
    { name: 'FOOD.EXTRAS.OLIVES.TITLE', price: 'FOOD.EXTRAS.OLIVES.PRICE', description: 'FOOD.EXTRAS.OLIVES.DESC' },
    { name: 'FOOD.EXTRAS.CORN.TITLE', price: 'FOOD.EXTRAS.CORN.PRICE', description: 'FOOD.EXTRAS.CORN.DESC' },
    { name: 'FOOD.EXTRAS.SAUCE.TITLE', price: 'FOOD.EXTRAS.SAUCE.PRICE', description: 'FOOD.EXTRAS.SAUCE.DESC' }
  ];
}

