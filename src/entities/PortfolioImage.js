let nextId = 1;
function makeImage({ title, imageUrl, category, featured = false, order }) {
  return { id: nextId++, title, imageUrl, category, featured, order };
}

// Use Vite's new glob query syntax
const modules = import.meta.glob(
  '../assets/{headshot,fashion}/*.{jpg,png}',
  { eager: true, query: '?url', import: 'default' }
);

export function getAllPortfolioImages() {
  return Object.entries(modules).map(([path, url]) => {
    const parts = path.split('/');
    const fileName = parts.pop();
    const category = parts.pop(); // 'headshot' or 'fashion'
    const title = fileName.replace(/\.(jpg|png)$/, '').replace(/[-_]/g, ' ');
    const order = 0; // Customize if needed
    const featured = false;

    return makeImage({ title, imageUrl: url, category, featured, order });
  });
}

export const PortfolioImage = {
  filter: ({ category }) => {
    const all = getAllPortfolioImages();
    return all.filter(img => img.category === category);
  }
};
