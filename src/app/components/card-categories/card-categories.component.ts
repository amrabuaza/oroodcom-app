import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss'],
})
export class CardCategoriesComponent implements OnInit {

  	constructor(private router: Router) { }

	ngOnInit() {}

	showProfile() {
		this.router.navigateByUrl("/shop");
	}

}
