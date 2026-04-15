#!/bin/bash
set -e
cd /home/user/crane-site

# Save .vercel link if it exists
[ -d dist/.vercel ] && cp -r dist/.vercel /tmp/.vercel-crane-backup

# Build
npx vite build
cp public/logo-crane.png public/logo-crane-white.png dist/
echo '{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }' > dist/vercel.json

# Restore .vercel link
if [ -d /tmp/.vercel-crane-backup ]; then
  cp -r /tmp/.vercel-crane-backup dist/.vercel
fi

# Deploy
cd dist
source /home/user/crane-site/.env.local
vercel deploy . --token "$VERCEL_TOKEN" --yes --prod 2>&1
