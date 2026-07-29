# CloudCannon Setup for shohojbd

This file documents how to connect and configure CloudCannon for this Astro site.

## Overview
- Repository: https://github.com/asgod154-byte/shohojbd
- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Node version: >= 22.12.0 (declared in `package.json`)

## Files added
- `cloudcannon.json` — main CloudCannon configuration (collections, media, structures)

## CloudCannon connection
1. Log in to CloudCannon and create a new site.
2. Select "Connect repository" and choose this GitHub repository (`asgod154-byte/shohojbd`).
3. In the site settings set:
   - Branch: `main`
   - Build command: `npm ci && npm run build`
   - Publish directory: `dist`
   - Node version: select Node 22 (or use `>=22.12.0`)

## Media
- Uploaded images will be stored under `src/assets/images`.
- `cloudcannon.json` configures `media_folder` to `src/assets/images` and `public_folder` to `/assets/images`.

## Collections
- `govt-guides` — `src/content/govt-guides` (frontmatter `md` files)
- `exam-guides` — `src/content/exam-guides`
- `local-guides` — `src/content/local-guides`

Each collection includes fields for title, description, author, tags, dates, draft flag, and cover image. `local-guides` also exposes place-specific fields (`placeType`, `division`, `district`, `lat`, `lng`).

## Editing
- Editors can create, edit, and delete markdown entries from the CloudCannon UI.
- Front matter fields are presented with appropriate widgets (`string`, `text`, `datetime`, `boolean`, `select`, `image`, `list`).

## Preview
- CloudCannon's preview will run the site's build command and serve from the `dist` folder. Previews aim to match production output; however, ensure environment variables (if any) are set in CloudCannon site settings.

## Environment variables
- If your site requires any runtime environment variables for builds (API keys, analytics), configure them in CloudCannon's site settings under Environment Variables.

## Troubleshooting
- If builds fail on CloudCannon, check the Actions log (build output) and ensure Node version is set to 22.
- Ensure the `src/content` folders exist; CloudCannon will create new files there when editors add content.

## Best practices
- Avoid editing layout or component files in CloudCannon unless you intend to change site code.
- Use descriptive `title` and `description` values for SEO.
- Keep images under `src/assets/images` and reference them using front matter `coverImage` (relative path).

## Manual steps inside CloudCannon dashboard
- Review the collections in the CloudCannon UI after connecting the repo. CloudCannon auto-discovers `cloudcannon.json` but you may need to re-open the site or clear cache.
