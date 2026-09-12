# Kofi Brown Digital — V8 Full-Stack Foundation

V8 upgrades the agency from a static front-end into a full-stack foundation.

### Included
- Next.js + TypeScript
- PostgreSQL + Prisma data model
- Working enquiry API
- Admin login/session foundation
- Live dashboard counts
- Enquiry management
- Client/project/proposal/invoice/testimonial models
- Paystack environment placeholders
- Responsive mobile-first UI
- PWA manifest

### Setup
1. Install Node.js 24+.
2. Copy `.env.example` to `.env`.
3. Create a PostgreSQL database and set `DATABASE_URL`.
4. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and a long random `SESSION_SECRET`.
5. Run `npm install`.
6. Run `npm run db:push`.
7. Run `npm run dev`.
8. Test `/contact`, then `/admin/login`.

External services are not claimed to be connected. Configure your own database, Paystack account, hosting, email provider and domain.

### V9 roadmap
Production-grade auth/roles, client portal, proposal builder, invoice generation, Paystack initialize/verify, email notifications, uploads, project tasks, analytics, GitHub deployment and custom domain.
