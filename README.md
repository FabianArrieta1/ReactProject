This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project View

This is a Home Rental Dashboard simulating the admin side. It includes a login and a principal dashboard.
The dashboard includes a list of properties and their details and price.
Once you select an item a card will show you more images an a full description, including features and the current weather at the location of the property, this posible with `WeatherAPI`.
The main dashboard includes a menu and a filter. With the filter you can look for properties based on property name or location.
The menu includes a location filter and social media.

## External tools

This project use bootstrap, lucide-react, antd and react-icons/si. You can install them in the server:

```bash
npm install bootstrap
npm install lucide-react
npm install antd
npm install react-icons
```

## Getting Started with LocalHost

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

## Login Credentials

To access the dashboard you'll need to use the test credential.These credentials are included in the code and can be changed at any time.

```bash
Email: admin@oceansproperties.com
Password: admin123
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
