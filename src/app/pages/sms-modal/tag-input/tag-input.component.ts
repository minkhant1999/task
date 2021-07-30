import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {

  tagItems = [
    {id: 1, title: "Number one"},
    {id: 2, title: "Number two"},
    {id: 3, title: "Number three"}
  ];

  selectedTagItems = [];
  isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

}