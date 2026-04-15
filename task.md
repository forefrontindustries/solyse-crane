# Crane Site Task State

## Deploy Script
Always run from `/home/user/crane-site/dist` with `.vercel` linked to `crane-worldwide`:
```
cd /home/user/crane-site && npx vite build && cp public/logo-crane.png public/logo-crane-white.png dist/ && echo '{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }' > dist/vercel.json && cd dist && source /home/user/crane-site/.env.local && vercel deploy . --token "$VERCEL_TOKEN" --yes --prod
```

## Live URL
https://crane-worldwide.vercel.app

## Industry Pages
- /industries/aerospace-defense
- /industries/automotive
- /industries/energy
- /industries/healthcare
- /industries/high-tech
- /industries/retail

## Completed
- Header: C-View link, Languages link, phone +1 888-870-2726, Track Shipments in top bar
- Logo links to homepage via React Router
- Industry page: minimal design per client feedback
  - Challenge cards: 2-col grid, clean bg, description text, subpage links
  - Services: 4 cards with green headers, bullets, learn more
  - C-View banner
  - Case studies with metrics
  - Green CTA bar
- All industries linked from nav dropdown
