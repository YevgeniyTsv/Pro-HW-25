import { Component, OnInit } from '@angular/core';
import ISchool from './modules/ISchool';
import { school } from './modules/school';
import { CourseName } from './modules/courseName';
import ICourses from './modules/ICourses';
import { ICompany, company } from './modules/ICompany';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))


//1) заходим в app.components.ts добавляем implements OnChanges к AppComponent затем добавляем функцию ngOnInit и там пишем весь код
// d app.components.html создайте div с id куда будете запихивать результат! 
//  Для примера https://github.com/Serge0111/lesson-25 вот репозиторий как стартер!
//  - Создать enum из значений courseName! Пример enum
// enum CourseName {
//     EPAM = 'EPAM',
//     GLOBAL_LOGIC = 'GlobalLogic',
//     DATA_ART = 'DataArt',
//     SOFT_SERVE = 'SoftServe'
// }
//  доступ таким образом CourseName.EPAM
// - Написать код для генерации рандомного числа от 0 до 4
// - school.courses[rand] равен javascript basic то создаем в доме блок  с id, courseName, price! И при клике на этот блок добавляем description в этот блок
// 

export class AppComponent implements OnInit, Partial<ISchool> {
  title: string = 'RB-home-work-app';
  courses: ICourses[];
  constructor() {
    this.courses = school.courses;
  }
  ngOnInit() {
    let rand: number = this.random(0, 3),
      course: ICourses = this.courses[rand];

    const wrapper: HTMLElement = document.getElementById('wrapper');
    if (course.courseName === CourseName.JavascriptBasic) {
      for (const [key, value] of Object.entries(course)) {
        let div: HTMLDivElement = document.createElement('div');
        div.innerHTML = `<span>${key}:</span> ${value}`;
        div.classList.add(key);
        wrapper.append(div);
      }
      const desc: HTMLDivElement = document.querySelector('.description');
      desc.classList.toggle('hidden');
      wrapper.addEventListener('click', () => desc.classList.toggle('hidden'));
    } else {
      let div: HTMLDivElement = document.createElement('div');
      div.innerHTML = `No courses to show`;
      div.classList.add('warn');
      wrapper.append(div);
    }
  }

  private random(from: number, to: number): number {
    let rand: number = from + Math.random() * (to + 1 - from);
    return Math.floor(rand);
  }

}

// 2) Здесь вспоминаем основы и всплытие)!
var t = 32;
function calc() {
  t = 3;
  console.log(t);
  return 21;
  var t = 12;
}
calc();
console.log(t);// почему 32 а не 3??
/* 
Внешняя переменная t не будет переприсвоена, поскольку в функции calc, будет браться из лексического окружения.
Переменная t, внутри функции, обьявлена с помощью директивы var, поэтому происходит всплытие переменной,
и выражение t = 3; будет присваивать значение внутренней переменной.
console.log(t) - возмет глобальную переменную, у которой значение осталось без изменений - 32. 
*/
// 3) Пишем интерфейс для этого класса! 
// Интерфейсы используются для типизации обьектом, а также для указания какие методы и/или свойства класс должен реализовать!
class Company implements ICompany {
  public readonly company: company = {
    name: 'GlobalLogic',
    personnel: 4000,
    rating: 3
  }; // протипизировать company!
  constructor() {
  }
  getCompanyName(): string {
    return this.company.name;
  }
  getCompanyPersonnel(): number {
    return this.company.personnel;
  }
}