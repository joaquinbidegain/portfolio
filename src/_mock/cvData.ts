import { useTranslation } from "react-i18next";
import { TypePost } from "../types/post";

type Category = "Trabajo" | "Estudios" | "Skills" | "Proyectos"; // Asegúrate de que este tipo coincide

export const usePosts = (): TypePost[] => {
  const { t } = useTranslation();

  return [
    {
      id: "1",
      title: t("posts.1.title"),
      description: t("posts.1.description"),
      category: t("posts.1.category") as Category, // 👈 Casting a Category
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
      title: t("posts.2.title"),
      description: t("posts.2.description"),
      category: t("posts.2.category") as Category,
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
      title: t("posts.3.title"),
      description: t("posts.3.description"),
      category: t("posts.3.category") as Category,
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
      title: t("posts.4.title"),
      description: t("posts.4.description"),
      category: t("posts.4.category") as Category,
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
      title: t("posts.5.title"),
      description: t("posts.5.description"),
      category: t("posts.5.category") as Category,
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
};
