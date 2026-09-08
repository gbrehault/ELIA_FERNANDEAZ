# 🎨 Maison Elya — Site Vitrine Wedding Designer

## ✅ Projet Complété

Votre site vitrine premium ONE PAGE pour Wedding Designer est maintenant développé et prêt à fonctionner. Le projet est construit avec **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS** et intègre **Framer Motion** pour les animations.

---

## 📋 Structure du Projet

```
elia_fernandez/
├── app/
│   ├── api/
│   │   └── pexels/route.ts          # API Pexels
│   ├── layout.tsx                   # Layout principal
│   ├── page.tsx                     # Page d'accueil
│   └── globals.css                  # Styles globaux
├── components/
│   ├── Header.tsx                   # Header avec menu
│   ├── Hero.tsx                     # Section Hero
│   ├── About.tsx                    # Section À propos
│   ├── Expertise.tsx                # Section Expertise
│   ├── Projects.tsx                 # Section Projets
│   ├── Collaboration.tsx            # Section Collaboration
│   ├── Partners.tsx                 # Section Partenaires
│   ├── Contact.tsx                  # Section Contact & Formulaire
│   ├── Footer.tsx                   # Footer
│   ├── Reveal.tsx                   # Composant animation
│   └── SectionTitle.tsx             # Titre de section réutilisable
├── lib/
│   └── pexels.ts                    # Utilitaires API Pexels
├── data/
│   ├── services.ts                  # Services de la designer
│   ├── projects.ts                  # Projets
│   └── contact.ts                   # Infos contact
├── types/
│   └── pexels.ts                    # Types TypeScript
├── public/                          # Ressources publiques
├── tailwind.config.ts               # Config Tailwind
├── next.config.ts                   # Config Next.js
├── tsconfig.json                    # Config TypeScript
├── .env.local                       # Variables d'environnement
└── package.json                     # Dépendances
```

---

## 🚀 Comment Démarrer

### 1. **Installer les dépendances** (déjà fait ✅)

Les packages suivants ont été installés :

- `next@16.3.4`
- `react@19.2.8`
- `react-dom@19.2.8`
- `framer-motion@13.2.0`
- `lucide-react@1.42.0`
- `tailwindcss@4`

### 2. **Configurer la Clé API Pexels** 🔑

Le projet utilise l'API Pexels pour les photographies. Vous devez :

1. Aller sur [pexels.com/api](https://pexels.com/api)
2. Créer un compte et obtenir une clé API
3. Remplacer la valeur dans `.env.local` :

```env
PEXELS_API_KEY=votre_vraie_cle_api_ici
```

> **Note** : La clé API n'est jamais exposée côté client. Elle reste sécurisée côté serveur.

### 3. **Lancer le serveur de développement**

```bash
cd elia_fernandez
pnpm dev
```

Le site sera accessible à `http://localhost:3000`

### 4. **Build pour la production**

```bash
pnpm run build
pnpm run start
```

---

## 🎨 Caractéristiques Implémentées

### ✨ Design & UX

- **Minimaliste et élégant** — Inspiré par Kinfolk, Vogue Weddings, studios créatifs premium
- **Palette de couleurs sophistiquée** — Crème, taupe, sage, beige chaleureux
- **Typographies premium** — Cormorant Garamond (titres), Italianno (accents calligraphiques), Manrope (corps)
- **Animations fluides** — Framer Motion pour reveal, parallax, hover effects
- **Espaces négatifs** — Design épuré, pas d'éléments inutiles

### 📱 Responsive

- Desktop — Mise en page éditoriale complète
- Tablet — Composition adaptée
- Mobile — Une colonne, menu burger, confortable

### 🔧 Technique

- **Composants réutilisables** — Reveal, SectionTitle
- **TypeScript strict** — Type-safe sur tout le projet
- **Server Components** — Fetch Pexels côté serveur uniquement
- **Optimisation images** — Next.js Image avec lazy loading
- **SEO optimisé** — Métadonnées, structure HTML sémantique, un seul H1
- **Accessibilité** — Contraste, navigation clavier, aria-labels, focus visibles
- **Performance** — Caching Pexels, compression, lazy loading

### 📋 Sections Implémentées

1. **Header** — Minimaliste, transparent → ivoire au scroll
2. **Hero** — 95vh, image Pexels, parallax, CTA
3. **À propos** — Image + texte asymétrique
4. **Expertise** — Liste éditoriale 6 services avec hover
5. **Projets** — Galerie avec 4 mises en page différentes
6. **Collaboration** — Section dark, 4 types de collaborations
7. **Partenaires** — Logos + témoignage
8. **Contact** — Formulaire complet 2 colonnes avec validation
9. **Footer** — Navigation, réseaux, légal, année auto

### 🎯 Formulaire Contact

- Champs validés (nom, email, message requis)
- Select pour type de collaboration
- État loading et succès
- Prêt à connecter à Resend, Formspree, ou API personnalisée
- Structure séparée dans `data/contact.ts`

---

## 📝 Fichiers Modifiables

Vous pouvez facilement personnaliser :

**Infos Contact** → `data/contact.ts`

```typescript
export const contactInfo = {
  name: "MAISON ELYA", // Remplacer par votre nom
  email: "hello@maisonelya.fr", // Votre email
  phone: "+33 6 00 00 00 00", // Votre téléphone
  // ...
};
```

**Services** → `data/services.ts`
**Projets** → `data/projects.ts`

**Nombre de couleurs** → `tailwind.config.ts`
**Polices** → `app/layout.tsx`

---

## 🔗 Connexion Formulaire

Le formulaire est prêt à être connecté. Créez une route `/api/contact` :

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();

  // Option 1 : Resend
  // const email = await resend.emails.send({...})

  // Option 2 : Formspree
  // fetch('https://formspree.io/f/YOUR_ID', ...)

  // Option 3 : Votre API

  return Response.json({ success: true });
}
```

Puis décommentez et modifiez dans `components/Contact.tsx` (ligne ~96-100).

---

## ✅ Vérifications Faites

- ✅ **ESLint** — Aucune erreur
- ✅ **TypeScript** — Strict mode, compilé
- ✅ **Build** — `pnpm run build` réussit
- ✅ **Responsive** — Testé desktop, tablet, mobile
- ✅ **Performances** — Images optimisées, lazy loading
- ✅ **Accessibilité** — Navigation clavier, contraste WCAG AA

---

## 🎓 Utilisation de Pexels

Les images sont téléchargées via l'API Pexels :

- **Hero** — Recherche : "luxury wedding"
- **About** — Recherche : "wedding decoration"
- **Projects** — Recherche : "luxury wedding editorial" (8 images)

Les recherches peuvent être modifiées dans `lib/pexels.ts`.

Exemple de changement :

```typescript
export async function getHeroPhotos(): Promise<ProcessedPexelsPhoto[]> {
  return searchPexelsPhotos("wedding flowers", 1); // Nouvelle requête
}
```

---

## 🌐 Déploiement

Le site est prêt pour **Vercel**, **Netlify**, **AWS Amplify**, etc.

**Vercel** (recommandé pour Next.js) :

```bash
npm i -g vercel
vercel
```

Ajoutez la variable d'environnement dans le dashboard Vercel :

```
PEXELS_API_KEY = votre_cle
```

---

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Pexels API](https://www.pexels.com/api/)
- [Lucide Icons](https://lucide.dev)

---

## 💡 Prochaines Étapes (Optionnel)

1. **Connecter le formulaire** → Resend, Formspree, ou API personnalisée
2. **Remplacer les projets fictifs** → Ajouter vraies images/descriptions
3. **Ajouter Google Analytics** → Tracker les visites
4. **Darkmode** → Ajouter toggle theme (optionnel)
5. **Multilingue** → next-intl pour FR/EN
6. **Blog** → Ajouter section articles (optionnel)

---

## 🎨 Customisation Rapide

**Changer la palette de couleurs** :

```typescript
// tailwind.config.ts
colors: {
  background: '#F5F1EA',  // Votre couleur
  dark: '#211E1B',        // Votre noir
  // ...
}
```

**Changer le nom du site** :
Remplacer "MAISON ELYA" dans :

- `components/Header.tsx`
- `data/contact.ts`
- `components/Footer.tsx`

---

## ✨ Bon à Savoir

- Le site est **100% responsive** et fonctionne sur tous les appareils
- Les animations respectent `prefers-reduced-motion` pour l'accessibilité
- Toutes les images sont optimisées avec Next.js `<Image />`
- Le code est **bien organisé** et facile à maintenir
- Les composants sont **réutilisables** et typés en TypeScript

---

## 📞 Support

Si vous avez besoin de modifier le design, ajouter des sections, ou connecter le formulaire, n'hésitez pas à demander !

**Bon lancement ! 🚀**
