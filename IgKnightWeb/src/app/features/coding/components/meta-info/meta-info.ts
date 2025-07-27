import { Component, Input } from '@angular/core';
import { CodingChallenge } from '../../../../models/coding-challenge.model';

@Component({
  selector: 'app-meta-info',
  standalone: false,
  templateUrl: './meta-info.html',
  styleUrl: './meta-info.scss'
})
export class MetaInfo {
@Input() challenge!: CodingChallenge;
}