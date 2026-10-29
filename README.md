# ClassKendra – Landing Page (Angular 19 + Tailwind)

## Run it

```bash
npm install
npm start          # opens http://localhost:4200
npm run build      # production build in dist/classkendra/browser
```

Requires Node.js 18.19+ (20 or 22 recommended).

## Structure

```
src/
  index.html            fonts, meta, favicon
  styles.css            Tailwind + shared classes (.btn-primary, .card, .section …)
  app/
    app.component.ts    page order – add/remove/reorder sections here
    sections/
      navbar            sticky nav, mobile menu
      hero              headline + WhatsApp preview
      highlights        4 quick product facts
      problem           pain points
      features          8 feature cards
      how-it-works      3 steps
      demo              interactive phone (Dashboard / Attendance / Parent view)
      ai                ClassKendra AI
      audience          who it's for
      comparison        Register vs ClassKendra
      pricing           monthly / yearly toggle
      faq               accordion
      contact           demo booking form (reactive form + validation)
      footer
```

Each section keeps its text in an array at the bottom of its file, so copy changes don't need template edits.

## To do before going live

- **Contact form**: `contact.component.ts` → `submit()` only logs to the console. Connect it to your backend, CRM, or a Google Sheet.
- **Links**: footer social / policy links are `#` placeholders.
- **Demo numbers** (₹45,000, 124 students, etc.) are sample data for the mockups.
