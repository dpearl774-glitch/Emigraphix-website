EMIGRAPHIX PHASE 1 TEST SITE

This is a local test build. Do not replace the live site until you have reviewed it.

Open index.html with VS Code Live Server.

New pages:
- services.html — General graphic design services and packages
- health.html — Health & wellness specialist design packages
- resources.html — Resource/blog landing page
- qr-tools.html — Working free QR generator prototype

Preserved:
- Existing Tally order embed on index.html
- review.html
- Google verification file
- robots.txt and sitemap.xml
- Existing WebP portfolio images

The QR premium GHS 5 payment is intentionally NOT connected yet.


HYBRID ORDER FLOW - TALLY SETUP (manual)
----------------------------------------
Keep Tally as the project brief collector. Shorten it to essentials: name, contact, business/brand (optional), service/package, brief, deadline (optional), uploads (optional).

Add final question:
How would you like to proceed?
- I'm ready to pay now
- I'd like Emigraphix to contact me first

Suggested logic:
- Fixed-price package + Pay now -> redirect to the relevant Paystack payment page.
- Contact me first -> normal form completion; follow up by WhatsApp/email.
- Variable/custom service -> quote-first; do not force payment before scope is confirmed.
- For larger custom jobs, consider deposit terms after quoting rather than full upfront payment.

Website buttons now support this model: package-specific WhatsApp messages, Start/Send Brief buttons, and quote-first wording for variable services.
