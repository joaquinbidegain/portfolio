import { Post } from "../types/post"; // Importa la interfaz desde types.ts
  
export const _posts: Post[] = [
  {
    id: "1",
    title: "Desarrollador Java Backend - Interfase",
    description: "Trabajo en Interfase desde Octubre 2022, desarrollando aplicaciones en Java con Spring Boot, implementando despliegues en servidores Linux y garantizando la seguridad en el desarrollo.",
    category: "Trabajo",
    coverUrl: "/assets/images/cover/interfase.webp",
    postedAt: "11/08/2023",
    totalViews: Math.floor(Math.random() * 10000),
    totalFavorites: Math.floor(Math.random() * 5000),
    author: {
      name: "Joaquín Bidegain",
      avatarUrl: "/assets/images/avatar/avatar-1.webp"
    }
  },
  {
    id: "2",
    title: "Ingeniería en Computación - UDELAR",
    description: "Actualmente cursando el 3er año en la Facultad de Ingeniería, con enfoque en sistemas, desarrollo de software y metodologías ágiles.",
    category: "Estudios",
    coverUrl: "/assets/images/cover/udelar.webp",
    postedAt: "09/12/2023",
    totalViews: Math.floor(Math.random() * 10000),
    totalFavorites: Math.floor(Math.random() * 5000),
    author: {
      name: "Joaquín Bidegain",
      avatarUrl: "/assets/images/avatar/avatar-1.webp"
    }
  },
  {
    id: "3",
    title: "Cursos y Certificaciones",
    description: "Formación en Desarrollo Web, Front-End con ReactJS y Machine Learning. Actualización constante para mejorar habilidades en el desarrollo de software.",
    category: "Estudios",
    coverUrl: "/assets/images/cover/cursos.webp",
    postedAt: "01/01/2024",
    totalViews: Math.floor(Math.random() * 10000),
    totalFavorites: Math.floor(Math.random() * 5000),
    author: {
      name: "Joaquín Bidegain",
      avatarUrl: "/assets/images/avatar/avatar-1.webp"
    }
  },
  {
    id: "4",
    title: "Skills y Tecnologías",
    description: "Experiencia en Java (Spring, Maven, Gradle), Git, Linux, Python, C++, JavaScript y ReactJS, entre otros.",
    category: "Skills",
    coverUrl: "/assets/images/cover/skills.webp",
    postedAt: "04/23/2024",
    totalViews: Math.floor(Math.random() * 10000),
    totalFavorites: Math.floor(Math.random() * 5000),
    author: {
      name: "Joaquín Bidegain",
      avatarUrl: "/assets/images/avatar/avatar-1.webp"
    }
  },
  {
    id: "5",
    title: "Proyectos Open Source",
    description: "He desarrollado proyectos personales en GitHub, incluyendo herramientas en Python y sistemas de validación de distribuciones.",
    category: "Proyectos",
    coverUrl: "/assets/images/cover/proyectos.webp",
    postedAt: "02/29/2024",
    totalViews: Math.floor(Math.random() * 10000),
    totalFavorites: Math.floor(Math.random() * 5000),
    author: {
      name: "Joaquín Bidegain",
      avatarUrl: "/assets/images/avatar/avatar-1.webp"
    }
  }
];
