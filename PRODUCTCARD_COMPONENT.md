# ProductCard Component - Documentation

## Vue d'ensemble

Le composant `ProductCard` est une version compacte et visuelle du composant `AffiliateBlock`, conçu pour afficher les produits de manière élégante dans un format carte.

## Utilisation

### Dans les Kits (`/kits`)
Les produits sont affichés dans une grille responsive (1 colonne mobile, 2 colonnes tablette, 3 colonnes desktop).

```astro
<ProductCard productId="roost-v3" />
```

### Dans les Articles (Section "Produits mentionnés")
Les produits référencés dans `featuredAffiliateProductIds` sont automatiquement affichés à la fin de chaque article.

## Structure du Composant

### Éléments affichés :
1. **Image du produit** - 180px de hauteur, fond gris clair
2. **Category tag** - Petit badge en majuscules (ex: "setup", "tech")
3. **Nom du produit** - Titre principal
4. **3 Facts** - Liste à puces avec les caractéristiques techniques
5. **Bouton Amazon** - CTA noir avec icône externe

### Responsive Design :
- **Mobile** : 1 colonne
- **Tablette (≥640px)** : 2 colonnes
- **Desktop (≥1024px)** : 3 colonnes

## Différences avec AffiliateBlock

| Caractéristique | AffiliateBlock | ProductCard |
|----------------|----------------|-------------|
| Layout | Horizontal (desktop) | Vertical (carte) |
| Taille | Grande, détaillée | Compacte |
| Contenu | shortBenefit + facts + idealFor/notFor | Seulement facts |
| Usage | Pages produit dédiées | Grilles, listes |
| Notes badge | Oui | Non |

## Fichiers modifiés

1. **Nouveau composant** : `/src/components/ProductCard.astro`
2. **KitBlock mis à jour** : `/src/components/KitBlock.astro` - Utilise maintenant ProductCard
3. **Page article mise à jour** : `/src/pages/[section]/[slug].astro` - Affiche les produits avec ProductCard

## Exemple de rendu

```
┌─────────────────────┐
│                     │
│   [Image produit]   │
│                     │
├─────────────────────┤
│ SETUP               │
│ Roost V3            │
│                     │
│ → 164,5g            │
│ → Hauteur: 15-36cm  │
│ → Compatible PC+Mac │
│                     │
│ [Voir sur Amazon →] │
└─────────────────────┘
```

## Notes importantes

- Le composant utilise les données de `affiliate-links.json`
- Les images sont lazy-loaded pour les performances
- Les liens Amazon s'ouvrent dans un nouvel onglet avec `rel="noopener noreferrer"`
- Le hover effect inclut une légère élévation et un changement de bordure
