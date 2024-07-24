import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeSincePipe } from 'ngx-time-since';

@Component({
  selector: 'cbc-root',
  standalone: true,
  imports: [
    DatePipe,
    RouterOutlet,
    TimeSincePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngx-time-since-demo';
  readonly SECOND: number = 1000;
  readonly MINUTE: number = this.SECOND * 60;
  readonly HOUR: number = this.MINUTE * 60;
  readonly DAY: number = this.HOUR * 24;
  readonly WEEK: number = this.DAY * 7;
  readonly MONTH: number = this.DAY * 30;
  readonly YEAR: number = this.DAY * 365;
  readonly NOW: Date = new Date();
  examples: Date[] = [
    new Date(this.NOW.getTime() - (this.SECOND * 30)),
    new Date(this.NOW.getTime() - this.MINUTE),
    new Date(this.NOW.getTime() - (this.MINUTE * 5)),
    new Date(this.NOW.getTime() - this.HOUR),
    new Date(this.NOW.getTime() - (this.HOUR * 21)),
    new Date(this.NOW.getTime() - this.DAY),
    new Date(this.NOW.getTime() - (this.DAY *5)),
    new Date(this.NOW.getTime() - this.WEEK),
    new Date(this.NOW.getTime() - (this.WEEK * 3)),
    new Date(this.NOW.getTime() - this.MONTH),
    new Date(this.NOW.getTime() - (this.MONTH * 11)),
    new Date(this.NOW.getTime() - this.YEAR),
    new Date(this.NOW.getTime() - (this.YEAR * 25)),
  ];
  copyright: string = '';

  ngOnInit(): void {
    this.copyright = this.setCopyright();
  }

  setCopyright(): string {
    return this.NOW.getFullYear() > 2024 ? `2024-${this.NOW.getFullYear()}` : `2024`;
  }
}
