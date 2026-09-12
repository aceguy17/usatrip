# USA Trip Dashboard

Standalone tabbed dashboard for the booked trip from Melbourne to Dreamforce 2026 in San Francisco, then a family visit in Birmingham, Alabama.

Open `index.html` in a browser. No build step or server is required.

This folder is also ready for GitHub Pages. Push it to a GitHub repository with the default branch named `main`; the included workflow deploys the static dashboard to Pages.

## Files

- `index.html` - dashboard structure
- `styles.css` - responsive visual design
- `app.js` - booked flight data, important travel notes, route timeline, checklist, and expense tracking
- `assets/favicon.svg` - dashboard browser favicon
- `assets/route-map.svg` - dashboard hero route visual
- `assets/docs/esta-confirmation.pdf` - official ESTA authorization confirmation
- `assets/docs/insurance-certificate-hmtib0345277.pdf` - travel insurance certificate
- `assets/docs/insurance-product-disclosure-statement-2026-02-10.pdf` - insurance Product Disclosure Statement
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Current Trip Details

- Event: Dreamforce 2026, San Francisco, September 15-17, 2026
- Flights: Webjet itinerary paid amount is A$3,071.43
- Accommodation: Aida Plaza Hotel, San Francisco, September 14-17, 2026
- ESTA: Authorization approved, application 18J5046Q25924Z69, valid until January 31, 2027
- Insurance: Certificate of Insurance HMTIB0345277 and Product Disclosure Statement dated February 10, 2026

The dashboard includes searchable tabs for flight legs, airline references, transit periods, baggage allowances, seat detail where provided, Booking.com accommodation details, ESTA confirmation details, insurance documents, Dreamforce agenda highlights, onsite Wi-Fi, live-catalog refresh for matching session timings/locations, ANZ Lounge invitation details, nearby halal dining and grocery options, three San Francisco day plans, USD-to-AUD trip expense tracking, and important travel reminders from the attached Webjet PDFs. Expenses, exchange rate, Dreamforce updates, and Dreamforce last-check time are saved in the browser using local storage.
