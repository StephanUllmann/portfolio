type Image = {
  src: string;
  alt: string;
  x?: number;
  y?: number;
};

type Project = {
  title: string;
  tags: string[];
  deployedLink: string;
  ghLink: string;
  image: Image;
  images: Image[];
  description: string;
  publishDate: Date;
  relatedPosts?: string[];
};
