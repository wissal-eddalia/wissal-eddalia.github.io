# Wissal Eddalia: Portfolio

## Structure
- `index.html`: page layout (rarely needs editing)
- `css/style.css`: emerald theme (colors are variables at the top)
- `js/data.js`: **your content**: projects, certificates, blog posts, experience, skills
- `js/app.js`: rendering and chatbot logic
- `assets/`: photo and certificate images

## Add a project
Open `js/data.js`, copy one entry in `PROJECTS`, and give it a unique `slug` plus its `desc`, `method` and `results`. Project cards link to the detail page automatically. Add an optional `demo` URL and screenshot `image` path when available.

Project details are shown at `project.html?id=<slug>`. If no demo URL or screenshot is supplied (or the image file is missing), the page handles it without a broken link or image.

## Change your picture
Replace `assets/photo.jpg` (square, at least 400x400).

## Add a certificate
Add an entry to `CERTS` in `js/data.js`. To show a scan, save it in `assets/` and link it with `link: "assets/my-cert.pdf"`.

## Write a blog post
Add an entry to `POSTS` in `js/data.js` (newest first).

## Chatbot
It answers from the data in `js/data.js`, so updating your content updates the bot too.

## Publish free on GitHub Pages
1. Create a repo named `wissal-eddalia.github.io`
2. Upload all files and folders
3. Settings > Pages > Branch: main > Save

## Download CV button
The button uses `assets/Wissal_Eddalia_CV.pdf`. To update your CV, replace that file (keep the same name).

## Contact form (Formspree, free)
1. Sign up at https://formspree.io and create a new form with your email.
2. Copy the form URL (like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `FORM_ENDPOINT` in `js/data.js`.
Until you do, the form falls back to opening the visitor's email app.

## Other files
- `favicon.svg`: browser tab icon
- `404.html`: shown for broken links on GitHub Pages
- `.nojekyll`: makes GitHub Pages serve the files as-is

## Project screenshots
Put JPGs in `assets/projects/` using the names in `assets/projects/README.txt`. Missing images are hidden automatically.

## Language
The site content and interface are in English. Update interface text in `js/i18n.js` and portfolio content in `js/data.js`.

## Google Analytics (optional)
Paste your GA4 ID (`G-XXXXXXXXXX`) in `GA_ID` in `js/data.js`. Visitors get an Accept/Decline banner and nothing loads before they accept.
