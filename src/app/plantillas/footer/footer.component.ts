import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Estados: any[] = [
      { value: 'Estado', nombre: 'estados'},
      {value: 'Est', nombre: 'esta'},
  ];

  Municipios: any[] = [
    { value: 'Can', nombre: 'Candelaria'},
    {value: 'Esc', nombre: 'Escarcega'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
