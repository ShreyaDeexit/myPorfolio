import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    const target = document.querySelector('.tw')

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 127,
      deleteSpeed: 127,
      typeColor: '#fc6d6d'
    })

    writer
    .changeCursorColor('white')
  .type(' Software Developer')
  .rest(2500)
  .changeCursorColor('white')
  .changeOps({ deleteSpeed: 127 })
  .remove(18)
  .type(' Urbanite')
  .rest(3000)
  .changeCursorColor('white')
  .remove(8)
  .type(' Foodie')
  .rest(2500)
  .changeCursorColor('white')
  .changeOps({ deleteSpeed: 127 })
  .remove(6)
  .type(' Explorer')
  .rest(2500)
  .clear()
  .start()
      
  }

}
