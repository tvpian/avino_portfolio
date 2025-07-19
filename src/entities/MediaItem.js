// src/entities/MediaItem.js

import { desc } from "framer-motion/client";

// Automatically load all images under assets/thumbnails
const thumbModules = import.meta.glob(
  '../assets/thumbnails/*.{jpg,png}',
  { eager: true, import: 'default', query: '?url' }
);

export const mediaItems = [
  {
    id: 1,
    title: "Paksha",
    embedUrl: "https://www.youtube.com/embed/9HcSpPW0DvY",
    thumbnailUrl: thumbModules['../assets/thumbnails/thumbnails1.png'],
    description: "A captivating short film exploring the themes of love and loss.",
    mediaType: "video",
    category: "short_film",
    year: "2025",
    role: "Sample Role",
    featured: true,
    order: 1,
  },
  {
    id: 2,
    title: "Leaked",
    embedUrl: "https://www.youtube.com/embed/1EXcMi56d90",
    thumbnailUrl: thumbModules['../assets/thumbnails/thumbnails2.png'],
    description: "A gripping short film about secrets and revelations in a digital age.",
    mediaType: "video",
    category: "short_film",
    year: "2025",
    role: "Sample Role",
    featured: false,
    order: 2,
  },
  // Add more items similarly
];

// Keep list & filter logic unchanged
export const MediaItem = {
  list: (sortKey = "order") =>
    mediaItems.slice().sort((a, b) => (a[sortKey] ?? 0) - (b[sortKey] ?? 0)),
  filter: ({ category }, sortKey = "order") =>
    mediaItems
      .filter(item => item.category === category)
      .sort((a, b) => (a[sortKey] ?? 0) - (b[sortKey] ?? 0)),
};
