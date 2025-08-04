This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Docker

This project includes Docker configuration for easy development and deployment.

### Development with Docker

To run the application in development mode with Docker:

```bash
# Start development environment
docker-compose --profile dev up

# Or build and run in one command
docker-compose --profile dev up --build
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production with Docker

To run the application in production mode:

```bash
# Build and start production container
docker-compose --profile prod up --build

# Or run in detached mode
docker-compose --profile prod up --build -d
```

### Production with Nginx Reverse Proxy

For production deployment with Nginx reverse proxy:

```bash
# Start with Nginx reverse proxy
docker-compose --profile nginx up --build

# Or run in detached mode
docker-compose --profile nginx up --build -d
```

The application will be available at [http://localhost](http://localhost) (port 80).

### Docker Commands

```bash
# Build the Docker image
docker build -t amnest-web-public-mn .

# Run the container
docker run -p 3000:3000 amnest-web-public-mn

# Stop all containers
docker-compose down

# View logs
docker-compose logs -f

# Clean up
docker-compose down -v --remove-orphans
```

### Environment Variables

Create a `.env` file in the root directory for environment variables:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```
