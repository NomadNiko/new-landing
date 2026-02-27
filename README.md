This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form URL Parameters

The contact form supports URL query parameters to prefill form fields. This is useful for linking from iOS apps or other websites.

### Supported Parameters

- `firstName` or `firstname` - User's first name
- `lastName` or `lastname` - User's last name
- `email` - User's email address
- `application` or `app` - Application name (e.g., "BarVibez", "Fridge Raid")
- `revenueCatId` or `rcId` - RevenueCat user ID

### Example URLs

```
https://nomadsoft.us/contact?firstName=John&lastName=Doe&email=john@example.com&application=BarVibez&revenueCatId=abc123

https://nomadsoft.us/#contact?app=Fridge%20Raid&rcId=xyz789&email=user@example.com
```

All parameters are optional. The form will automatically populate with any provided values when the page loads.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
