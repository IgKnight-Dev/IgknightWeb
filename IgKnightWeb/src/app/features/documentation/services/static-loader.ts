import { Topic, TopicContent } from '../../../models/topic.model';

// Lazy-load topics list
export async function loadStaticTopics(technology: string): Promise<Topic[]> {
  switch (technology) {
    case 'html': {
      const module = await import('../data/html/topics-data');
      return module.HtmlTopics;
    }
    case 'css': {
      const module = await import('../data/css/topics-data');
      return module.CssTopics;
    }
    case 'js': {
      const module = await import('../data/javascript/topics-data');
      return module.JavaScriptTopics;
    }
    case 'ts': {
      const module = await import('../data/typescript/topics-data');
      return module.TypeScriptTopics;
    }
    case 'dotnet': {
      const module = await import('../data/dotnet/topics-data');
      return module.DotNetTopics;
    }
    case 'python': {
      const module = await import('../data/python/topics-data');
      return module.PythonTopics;
    }
    case 'csharp': {
      const module = await import('../data/csharp/topics-data');
      return module.CSharpTopics;
    }
    case 'fullstack': {
      const module = await import('../data/fullstack/topics-data');
      return module.FullstackTopics;
    }
    default:
      return [];
  }
}

// Lazy-load specific topic content
export async function loadStaticContent(
  technology: string,
  slug: string
): Promise<TopicContent | undefined> {
  switch (technology) {
    case 'html': {
      const module = await import('../data/html/topics-data');
      return module.HtmlTopicContent(slug);
    }
    case 'css': {
      const module = await import('../data/css/topics-data');
      return module.CssTopicContent(slug);
    }
    case 'js': {
      const module = await import('../data/javascript/topics-data');
      return module.JavaScriptTopicContent(slug);
    }
    case 'ts': {
      const module = await import('../data/typescript/topics-data');
      return module.TypeScriptTopicContent(slug);
    }
    case 'dotnet': {
      const module = await import('../data/dotnet/topics-data');
      return module.DotNetTopicContent(slug);
    }
    case 'python': {
      const module = await import('../data/python/topics-data');
      return module.PythonTopicContent(slug);
    }
    case 'csharp': {
      const module = await import('../data/csharp/topics-data');
      return module.CSharpTopicsContent(slug);
    }
    case 'fullstack': {
      const module = await import('../data/fullstack/topics-data');
      return module.FullStackTopicContent(slug);
    }
    default:
      return undefined;
  }
}