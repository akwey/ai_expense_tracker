
💰 ExpenseTracker AI

AI-powered expense tracking app with intelligent insights, smart categorization, and personalized financial recommendations.

✨ Features

📊 Expense Tracking – Log and manage daily expenses with categories and descriptions.

🤖 AI Insights – Automatically analyze spending patterns and provide actionable financial advice.

🧠 Smart Categorization – AI auto-detects expense categories (Food, Transport, Shopping, etc.).

🔐 Authentication – Secure login/signup with Clerk
.

📈 Visual Reports – Interactive charts powered by Chart.js.

☁️ Realtime Database – Expenses synced and stored with Firebase.

⚡ Next.js App Router – Modern app architecture with server & client components.

🛠️ Tech Stack

Frontend: Next.js 14
, React

Styling: TailwindCSS


Authentication: Clerk

Database: Firebase

AI Integration: OpenRouter
 (DeepSeek/other LLMs)

Charts & Visualization: react-chartjs-2

Deployment: Vercel

📂 Project Structure
app/
 ├─ actions/            # Server actions for AI & DB
 ├─ components/         # Reusable UI components (Navbar, Footer, ThemeToggle, Charts, etc.)
 ├─ contexts/           # ThemeContext (dark/light mode)
 ├─ lib/                # AI integration, Firebase, helpers
 ├─ layout.tsx          # Root layout with providers
 ├─ page.tsx            # Dashboard/Home
public/
 ├─ icons/ images...    # Static assets


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
