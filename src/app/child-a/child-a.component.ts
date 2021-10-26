import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css'],
})
export class ChildAComponent implements OnInit {
  id: number = 0;
  uid: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.uid = Number(this.route.snapshot.paramMap.get('uid'));
    console.log(this.route.snapshot.paramMap.getAll('id'));
  }
}
