# Light Nomad (Nomade Léger)

A minimalist, high-performance affiliate marketing website built with [Astro](https://astro.build).

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start local server**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Editing Content

All content is managed via JSON files in `src/content/`. No code changes required.

### 1. Affiliate Products
**File**: `src/content/affiliate-links.json`
- Add new products here.
- Key format: `unique-id` (e.g., "bag-01").
- **Important**: Update your Amazon Affiliate Tag in the URLs!

### 2. Articles
**File**: `src/content/articles.json`
- To add a new article, add a new object to the list:
  ```json
  {
    "id": "new-article-id",
    "title": "Titre de l'article",
    "slug": "url-slug-in-english",
    "section": "setup", // Must be one of: setup, tech, one-bag, focus-wifi
    "excerpt": "Short summary...",
    "content": "## Markdown Title\n\nArticle content...",
    "publishedDate": "2025-01-21",
    "featuredAffiliateProductIds": ["product-id-1"]
  }
  ```

### 3. "Money Pages" (Best Of)
**File**: `src/content/pages.json` (under "moneyPages")
- Define criteria, summary, and FAQs for product comparison pages.

### 4. Navigation
**File**: `src/content/navigation.json`
- Update menu items.

## 🌍 Adding Languages

To add a new language (e.g., English):
1. Duplicate the JSON files in `src/content/` (e.g., create `src/content/en/articles.json`).
2. Update `astro.config.mjs` to handle i18n routing (Astro has built-in i18n support).
3. Update components to load data based on the current locale.

## 🛠 Tech Stack
- **Framework**: Astro 5.0
- **Language**: TypeScript
- **Styles**: Minimalist CSS (no framework)
- **Deployment**: Static Site Generation (SSG) - deploy to Vercel, Netlify, or GitHub Pages.
