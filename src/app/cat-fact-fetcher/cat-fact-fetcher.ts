import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cat-fact-fetcher',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './cat-fact-fetcher.html',
  styleUrl: './cat-fact-fetcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactFetcher {}
