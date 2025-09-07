import { Component, ViewChild } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { ItemsFilterComponent } from "../items-filter/items-filter.component";
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { CardModule } from 'primeng/card';
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
  selector: 'app-items',
  imports: [ItemCardComponent, ItemsFilterComponent

    ,
    ButtonModule
    ,
    PopoverModule, CardModule, ScrollPanel
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

    books:any = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '100',
    description: 'A Handbook of Agile Software Craftsmanship. This book offers practical advice on writing clean and maintainable code.',
    categories: ['Programming', 'Software Engineering']
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '120',
    description: 'Your journey to mastery. Learn the habits and mindset of effective programmers.',
    categories: ['Programming', 'Career']
  },
  {
    title: 'Design Patterns',
    author: 'Erich Gamma et al.',
    imageUrl: 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '150',
    description: 'Elements of Reusable Object-Oriented Software. The classic book on design patterns.',
    categories: ['Software Design', 'OOP']
  },
  {
    title: 'Refactoring',
    author: 'Martin Fowler',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '140',
    description: 'Improving the design of existing code while preserving behavior.',
    categories: ['Refactoring', 'Clean Code']
  },
  {
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    imageUrl: 'https://images.unsplash.com/photo-1581091870620-5a4f29c154f1?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '90',
    description: 'Deep dive into JavaScript. Unlock the intricacies of the language.',
    categories: ['JavaScript', 'Web Development']
  },
  {
    title: 'Effective Java',
    author: 'Joshua Bloch',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '110',
    description: 'Best practices and idioms for writing robust Java code.',
    categories: ['Java', 'Best Practices']
  },
  {
    title: 'Head First Design Patterns',
    author: 'Eric Freeman',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '130',
    description: 'A fun, visual approach to learning design patterns.',
    categories: ['Design Patterns', 'Software Design']
  },
  {
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    imageUrl: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '160',
    description: '189 programming questions and solutions for job interviews.',
    categories: ['Interviews', 'Data Structures']
  },
  {
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fm=jpg&q=60&w=3000',
    rating: 3,
    price: '95',
    description: 'Essays on software engineering and project management.',
    categories: ['Software Management', 'Productivity']
  },
  {
    title: 'Soft Skills',
    author: 'John Sonmez',
    imageUrl: 'https://images.unsplash.com/photo-1573164574237-cb89e39749b4?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '105',
    description: 'The software developer\'s life manual for career, personal growth, and productivity.',
    categories: ['Self-Help', 'Career']
  },
  {
    title: 'Code Complete',
    author: 'Steve McConnell',
    imageUrl: 'https://images.unsplash.com/photo-1562072549-1b7f6e52fc51?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '180',
    description: 'A practical handbook of software construction.',
    categories: ['Coding', 'Best Practices']
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson',
    imageUrl: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '135',
    description: 'A classic text in computer science and programming theory.',
    categories: ['Theory', 'Computer Science']
  },
  {
    title: 'Grokking Algorithms',
    author: 'Aditya Bhargava',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '95',
    description: 'A friendly illustrated guide to algorithms.',
    categories: ['Algorithms', 'Data Structures']
  },
  {
    title: 'Introduction to the Theory of Computation',
    author: 'Michael Sipser',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '145',
    description: 'A well-known book covering the fundamentals of theoretical computer science.',
    categories: ['Theory', 'Mathematics']
  },
  {
    title: 'The Art of Computer Programming',
    author: 'Donald Knuth',
    imageUrl: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '200',
    description: 'A comprehensive monograph written by the legendary computer scientist.',
    categories: ['Algorithms', 'Foundations']
  },
  {
    title: 'The Clean Coder',
    author: 'Robert C. Martin',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '115',
    description: 'A code of conduct for professional programmers.',
    categories: ['Clean Code', 'Discipline']
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    imageUrl: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '85',
    description: 'Unearth the elegant parts of JavaScript.',
    categories: ['JavaScript', 'Web']
  },
  {
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    imageUrl: 'https://images.unsplash.com/photo-1616627987555-8b3f7b3d4f0e?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '100',
    description: 'A hands-on, project-based introduction to programming.',
    categories: ['Python', 'Beginner']
  },
  {
    title: 'Fluent Python',
    author: 'Luciano Ramalho',
    imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b8b50e89?fm=jpg&q=60&w=3000',
    rating: 4,
    price: '160',
    description: 'Clear, concise Pythonic code and best practices.',
    categories: ['Python', 'Advanced']
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    imageUrl: 'https://images.unsplash.com/photo-1543966888-0187c49f0d20?fm=jpg&q=60&w=3000',
    rating: 5,
    price: '170',
    description: 'The “CLRS” bible for learning algorithms and data structures.',
    categories: ['Algorithms', 'Textbook']
  }
];

}
