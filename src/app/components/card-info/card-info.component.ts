import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {

	@Input() info: any;

    constructor( private router: Router ) { }

	ngOnInit() {}
	
	showCategory() {
		this.router.navigateByUrl("/category");
	}

}
