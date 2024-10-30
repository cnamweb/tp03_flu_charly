import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-boutique',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './boutique.component.html',
    styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {
    products: Observable<Produit[]> = new Observable<Produit[]>();
    productsFiltered: Observable<Produit[]> = new Observable<Produit[]>();

    differentCategories: string[] = [];
    selectedCategory : string = "All";

    search : string = "";

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.products = this.apiService.getProduits();
        this.productsFiltered = this.products;
        this.products.subscribe(products => {
            products.forEach(product => {
                product.categories.forEach(category => {
                    if (!this.differentCategories.includes(category)) {
                        this.differentCategories.push(category);
                    }
                });
            });
        });
    }

    filterProducts() {
        this.productsFiltered = this.products.pipe(
            map(products => products.filter(product => {
                if (this.selectedCategory != "All" && !product.categories.includes(this.selectedCategory)) {
                    return false;
                }
                if (this.search != "" && !product.product.toLowerCase().includes(this.search.toLowerCase())) {
                    return false;
                }
                
                return true;
            }))
        );
    }
}
