import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-voted-facts-list',
  imports: [MatCard, MatCardTitle, MatCardContent, MatList, MatListItem],
  templateUrl: './voted-facts-list.html',
  styleUrl: './voted-facts-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotedFactsList {
}
