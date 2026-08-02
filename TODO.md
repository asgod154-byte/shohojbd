# CloudCannon Complete Removal - TODO

## Plan Steps

- [x] 1. Remove `editableRegions` integration from `astro.config.mjs`
- [x] 2. Remove `@cloudcannon/editable-regions` dependency from `package.json`
- [x] 3. Remove CloudCannon script block from `src/layouts/Layout.astro`
- [x] 4. Delete `src/scripts/register-components.js`
- [x] 5. Bump CACHE_NAME to 'shohojbd-v3' in `public/sw.js`
- [x] 6. Delete leftover CloudCannon files: `cloudcannon.json`, `CLOUDCANNON_SETUP.md`, `docs/shohojbd_cloudcannon_editable_regions.md`, `docs/shohojbd_FINAL_MASTER_COMMAND.md`
- [x] 7. Remove CloudCannon references from `README.md`
- [x] 8. Clean up temp scan files
- [x] 9. `npm install` then `npm run build` to verify build succeeds
- [x] 10. Verify no CloudCannon traces remain anywhere
- [ ] 11. Commit and push with message: "fix: remove CloudCannon traces causing mobile layout on desktop"
