export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readTime: string;
  content: string; // Markdown/HTML content
  coverImage: string | null;
}

export const LOCAL_POSTS: BlogPost[] = [];
