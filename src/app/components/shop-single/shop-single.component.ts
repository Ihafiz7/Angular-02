import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.scss']
})
export class ShopSingleComponent implements OnInit {
  id: string | null = '';
  product = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'))
      this.product = "Product id is: " + this.id
    })
  }



  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = "Product id is: " + this.id
  }


}
