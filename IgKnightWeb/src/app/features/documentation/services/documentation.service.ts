import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { Topic, TopicContent } from '../../../models/topic.model';
import { loadStaticContent, loadStaticTopics } from './static-loader';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  // Toggle between static data and API
  private readonly useStatic = true;

  constructor(private http: HttpClient) {}

  /**
   * Get list of topics for a given technology
   */
  getTopics(technology: string): Observable<Topic[]> {
    if (this.useStatic) {
      return from(loadStaticTopics(technology));
    } else {
      return this.http.get<Topic[]>(`/api/docs/${technology}`);
    }
  }

  /**
   * Get topic content (markdown, HTML, or JSON data)
   */
  getTopicContent(technology: string, slug: string): Observable<TopicContent | undefined> {
    if (this.useStatic) {
      return from(loadStaticContent(technology, slug)); // async lazy load
    } else {
      return this.http.get<TopicContent>(`/api/docs/${technology}/${slug}`);
    }
  }
}
