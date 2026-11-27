# FreshCart — Next.js

Node.js 20+ recommended. In PowerShell inside this folder:

```powershell
npm.cmd install
Copy-Item .env.example .env.local
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Paste the generated secret into NEXTAUTH_SECRET in .env.local, then run `npm.cmd run dev` and open http://localhost:3000. Run `npm.cmd run typecheck` and `npm.cmd run build` before submission. For Vercel set NEXTAUTH_SECRET and NEXTAUTH_URL to the deployed URL. Never commit .env.local.

## Mentor requirements
App Router pages and TypeScript types; NextAuth credentials provider; React Hook Form and Zod in login, registration and checkout; Server Actions for registration, cart, wishlist and cash checkout, with server-side validation and authentication. Catalog reads are server components. API paths carried over from previous project.

## Verification status
Dependency installation was blocked by network DNS in the creation environment; build and live API flows are not verified. Test registration, login, cart add/remove/quantity, wishlist, cash checkout and orders with a test account before submission. Online payment and exact demo parity are not implemented.
