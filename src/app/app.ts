import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatFactFetcher } from './cat-fact-fetcher/cat-fact-fetcher';
import { VotedFactsList } from './voted-facts-list/voted-facts-list';

@Component({
  selector: 'app-root',
  imports: [CatFactFetcher, VotedFactsList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
