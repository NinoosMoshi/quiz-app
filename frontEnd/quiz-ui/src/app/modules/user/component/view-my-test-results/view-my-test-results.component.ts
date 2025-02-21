import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-view-my-test-results',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './view-my-test-results.component.html',
  styleUrl: './view-my-test-results.component.scss'
})
export class ViewMyTestResultsComponent {

  dataSet:any;

    constructor(private testService:TestService) { }
    

     ngOnInit(): void {
        this.getMyTestResults();
     }

     getMyTestResults(){
      this.testService.getTestResults().subscribe(res => {
        this.dataSet = res;
        console.log(this.dataSet);
      });
     }

}
