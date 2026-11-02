# Hope Haven Community Centre - WEDE5020 POE Part 3
**Student:** Hope Haven Community Centre Mbombela
**Module:** WEDE5020

### PART 3 CHANGELOG - Working through Feedback from Part 2

**Problem from Part 2 feedback:**
Website didn't work / white page / CSS not loading.

**Root Cause Found:**
1. Folder structure was wrong - HTML files were inside `css/New folder` 
2. CSS file was named `css.txt` instead of `style.css`
3. Link was `css/New folder/style.css` but file was at `css.txt`
4. No `js` folder for JavaScript, no robots.txt / sitemap.xml

**Fixes Implemented (Part 3):**
1. **Folder Structure Fixed:**
   - Moved all HTML files from `New folder/css/New folder` back to root (next to css folder)
   - Deleted empty `New folder`
   - Renamed `css.txt` -> `style.css` inside `css` folder
   - Correct link now: `<link rel="stylesheet" href="css/style.css">`
   - Result: Site is now colourful and working

2. **JavaScript Enhancements (Part 3 Requirement):**
   - Created new folder `js/` with `script.js`
   - Added Accordions (FAQs in about.html), Tabs (Mission/Vision/Team), Modals (Welcome popup), Interactive Map (Leaflet.js Mbombela -25.4753,30.9694), Gallery Lightbox, Animations (fadeIn), DOM Manipulation
   - Dynamic Content: services loaded via JS array into #dynamic-services
   - Search functionality: filter services by title

3. **SEO (Part 3 Requirement):**
   - Title tags unique per page, Meta descriptions 150 chars, Header tags H1/H2/H3 hierarchy, Image alt text, Clean URLs, Internal linking, Mobile-friendly (viewport meta + responsive CSS + hamburger menu)
   - robots.txt created in root with Allow and Sitemap link
   - sitemap.xml created in root with 5 pages
   - Local SEO: Mbombela address, map, keywords "community centre Mbombela", "food parcels Mpumalanga"
   - Page speed: optimized CSS, Leaflet CDN, compressed images

4. **Forms (Part 3 Requirement):**
   - enquiry.html: name, email, phone (10-15 digits), type (volunteer/sponsor/services), message. Client-side validation regex, error messages .error.show, AJAX simulation with setTimeout showing cost/availability (Volunteer=Free weekends, Sponsor=R250/month)
   - contact.html: name, email, subject, message, validation, compiles mailto to info@hopehaven.org.za

5. **GitHub & Deployment:**
   - Commits with messages: "Fix folder structure", "Add js functionality", "Add SEO files"
   - Ready to deploy to Netlify by dragging folder

### How to Run
Open index.html with Live Server in VS Code. All links: css/style.css, js/script.js, robots.txt, sitemap.xml must be in root.

### References
- Leaflet.js https://leafletjs.com
- OpenStreetMap for Mbombela coordinates