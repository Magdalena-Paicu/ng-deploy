import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user1',
  standalone: true,
  imports: [],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.scss',
})
export class User1Component implements OnInit {
  activatedRouter = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.params['id']);

    this.activatedRouter.paramMap.subscribe((values) => {
      console.log(values);
    });
  }
}
