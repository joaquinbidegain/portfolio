// src/types.ts
export interface Post {
    id: string;
    title: string;
    description: string;
    totalViews: number;
    totalFavorites: number;
    postedAt: string | number | null;
    coverUrl: string;
    category: "Trabajo" | "Estudios" | "Skills" | "Proyectos";
    author: {
      name: string;
      avatarUrl: string;
    };
  }
  
  export interface Colors {
    main: string;
    light: string;
    pattern: string;
  }
  