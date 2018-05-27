import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  private result_one:any;
  private result_two:any;

  constructor(private _CustomerService:CustomerService,
              private _CountriesService:CountriesService) { }

  ngOnInit() {
    this._CustomerService.getCustomer().subscribe(res=>{
      this.result_one=res;
      this._CountriesService.getCountries().subscribe(res=>{
        this.result_two=res;
      })
      err=>{
        console.log(err);
      }
    })
  }

}
