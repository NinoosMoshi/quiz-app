import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-test-results',
  standalone: true,
  imports: [],
  templateUrl: './view-test-results.component.html',
  styleUrl: './view-test-results.component.scss'
})
export class ViewTestResultsComponent implements OnInit {

  resultsData:any;

  constructor(private adminService:AdminService) { }


  ngOnInit(): void {
    this.getAllTestResults();
  }

  getAllTestResults(){
    this.adminService.getAllTestResults().subscribe(res=>{
      this.resultsData=res;
      console.log(this.resultsData);
    })
  }

}
