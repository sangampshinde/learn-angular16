import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise22',
  templateUrl: './practise22.component.html',
  styleUrls: ['./practise22.component.css']
})
export class Practise22Component implements OnInit {
  title: string = "Top 5 Movies";
  movies: Movie[] = [];  // Explicitly define the type here
  mTitle: string = "";
  mDirector: string = "";

  ngOnInit() {
    this.Refresh();
  }

  remove(i: number) {
    this.movies.splice(i, 1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector });
    this.mTitle = "";
    this.mDirector = "";
  }

  Refresh() {
    console.log("refresh");
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore' },
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder' },
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo' },
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer' },
      { title: 'Warcraft', director: 'Duncan Jones' },
    ];
  }
}

class Movie {
  title: string;
  director: string;
}
