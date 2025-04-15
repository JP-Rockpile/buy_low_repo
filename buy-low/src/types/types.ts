export interface WebsiteLink {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  image?: string;
}

export type Tag = {
  id: string;
  name: string;
} 