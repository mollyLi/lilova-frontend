This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Staging: <https://lilova-frontend.vercel.app/>

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Shadcn/ui

Shadcn/ui is a component library for React, built using Tailwind CSS for styling and Radix UI for accessibility and primitives. It provides a set of highly customizable, accessible, and production-ready UI components that are easy to use and integrate into React projects.

[Docs](https://ui.shadcn.com/)
[Next Install](https://ui.shadcn.com/docs/installation/next)

  - ui
  - navbar

### Zod

Zod is a JavaScript library for building schemas and validating data, providing type safety and error handling.

```sh
npm install zod
```

- create utils/schemas.ts

```ts
import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
});
```

- create utils/actions.ts
- import in profile/create page.tsx

```ts
'use server';

import { profileSchema } from './schemas';

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return { message: 'Profile Created' };
  } catch (error) {
    console.log(error);
    return { message: 'there was an error...' };
  }
};
```

### Clerk

Clerk is a user authentication and management platform that provides a set of tools and services to handle user authentication in web and mobile applications.

[Clerk Docs](https://clerk.com/)
[Clerk + Next.js Setup](https://clerk.com/docs/quickstarts/nextjs)

### Direct User

 After a user signs up, Clerk will handle the redirection. If there’s no specific redirect set up during the sign-up process, Clerk will fall back to the URL provided in this environment variable (`/profile/create`).

.env.local

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/profile/create
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile/create
```

### Supabase

Supabase is an open source Firebase alternative with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

[Supabase Doc](https://supabase.com/docs/guides/getting-started)

### Prisma

- install prisma vs-code extension

Prisma ORM is a database toolkit that simplifies database access in web applications. It allows developers to interact with databases using a type-safe and auto-generated API, making database operations easier and more secure.

- Prisma server: A standalone infrastructure component sitting on top of your database.
- Prisma client: An auto-generated library that connects to the Prisma server and lets you read, write and stream data in your database. It is used for data access in your applications.

```sh
npm install prisma --save-dev
npm install @prisma/client
```

```sh
npx prisma init
```

### Connect Supabase with Prisma

[Useful Info](https://supabase.com/partners/integrations/prisma)

- add to .env

```bash
DATABASE_URL=""
DIRECT_URL=""
```

- DATABASE_URL : Transaction + Password + "?pgbouncer=true&connection_limit=1"
- DIRECT_URL : Session + Password

For production-ready database schema that you want to track over time.
This migration file is stored in `prisma/migration`s directory and is versioned (each migration has a unique timestamp and name).

```bash
npx prisma migrate dev --name init
```

For prototyping, testing, or quick changes during the early stages of development where you don’t need to track schema changes.

```bash
npx prisma db push
```

If you are not looking to create a new migration and only want to generate new Prisma Client code after updating the schema, you can simply run:

```bash
npx prisma generate
```

[Prisma Studio](https://www.prisma.io/docs/orm/tools/prisma-studio) is a visual editor for the data in your database. 

```bash
npx prisma studio
```