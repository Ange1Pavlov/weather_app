
## Getting Started

First run:
```bash
npm install
```

After that create a .env.local with the data:

```bash
NEXT_PUBLIC_WEATHER_API_KEY=fc151e957b21da1a5746a3e36303b51a
```

And run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For running tests:
```bash
npm run test
```

## API Used (with key):

API URI: https://api.openweathermap.org/data/2.5/weather?lat=42.697708&lon=23.321867&appid=fc151e957b21da1a5746a3e36303b51a
API URI FOR 5 DAYS: https://api.openweathermap.org/data/2.5/forecast?lat=42.697708&lon=23.321867&appidfc151e957b21da1a5746a3e36303b51a

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
