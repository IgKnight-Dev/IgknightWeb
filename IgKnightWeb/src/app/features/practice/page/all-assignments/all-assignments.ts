import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsOverviewDataDto } from '../../../../models/assignment.model';
import { DifficultyLevel, Technologies } from '../../../../models/Enums';
import { GuestAssignmentApiService } from '../../../../content/services/guest-api.service';

@Component({
  selector: 'app-all-assignments',
  standalone: false,
  templateUrl: './all-assignments.html',
  styleUrl: './all-assignments.scss'
})
export class AllAssignments {
  selectedTech: string = 'All';
  searchTerm: string = '';
  assignments : AssignmentsOverviewDataDto[] = [];
  technologies = Object.keys(Technologies).filter(key => isNaN(Number(key)));;
  difficultyLevels = Object.keys(DifficultyLevel).filter(key => isNaN(Number(key)));
  selectedDifficulty: string = 'All';

  difficultyMap = {
    [DifficultyLevel.Easy]: { label: 'Beginner', class: 'bg-green-100 text-green-700' },
    [DifficultyLevel.Medium]: { label: 'Intermediate', class: 'bg-yellow-100 text-yellow-700' },
    [DifficultyLevel.Hard]: { label: 'Expert', class: 'bg-red-100 text-red-600' },
  };
  
  constructor(private guestApiService: GuestAssignmentApiService, private route: ActivatedRoute, private router: Router) {}
    
  ngOnInit(): void {
    this.loadAssignments();
  }

get filteredAssignments() {
  return this.assignments.filter(a => {
    const techMatches = this.selectedTech === 'All' || Technologies[a.technology] === this.selectedTech;
    const difficultyMatches = this.selectedDifficulty === 'All' || DifficultyLevel[a.difficultyLevel] === this.selectedDifficulty;
    const searchMatches = !this.searchTerm || a.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    return techMatches && difficultyMatches && searchMatches;
  });
}

getTechnologyLabel(techValue: number): string {
  return Technologies[techValue]; // Enum reverse mapping
}

getDifficultyLabel(diffValue: number): string {
  return DifficultyLevel[diffValue]; // Enum reverse mapping
}


  goToQuiz(id: string) {
    this.router.navigate(['/practice/intercative-quizzes'], {
      queryParams: { assignmentId: id }
    });
  }

  loadAssignments(): void {
    this.guestApiService.getAllAssignments().then(assignments => {
      this.assignments = assignments;
    }).catch(err => {
      console.error('Failed to load assignments', err);
    });
  }
}
