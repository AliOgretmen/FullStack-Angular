import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]

})
export class AboutComponent implements OnInit {

  leaders: Leader [];
  leadersErrMess: string;

  constructor(
    private LeaderService: LeaderService, @Inject ('BaseURL') private BaseURL) {  }

  ngOnInit() {
    this.LeaderService.getLeaders().subscribe(leaders => this.leaders = leaders, leadersErrMess => this.leadersErrMess = <any>leadersErrMess);
   
  }

}
