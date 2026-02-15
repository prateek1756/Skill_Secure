# SkillBridge Deployment Guide

This project is configured for deployment on both **Vercel** and **Netlify**.

## Prerequisites
- The project uses `pnpm`. Ensure you have it installed or that your deployment platform is configured to use it.
- Root directory should be set to the project root.

## Vercel Deployment

1. **Configure Project Settings**:
   - **Framework Preset**: Vite (should be auto-detected)
   - **Build Command**: `pnpm run build:client`
   - **Output Directory**: `dist/spa`
   - **Install Command**: `pnpm install`

2. **Environment Variables**:
   - Add any required variables (e.g., `PING_MESSAGE`) in Project Settings -> Environment Variables.

3. **API Handling**:
   - Vercel functions are located in the `api/` directory.
   - The handler is configured in `vercel.json` to route `/api/*` to `api/index.ts`.

## Netlify Deployment

1. **Configure Build Settings**:
   - **Build Command**: `pnpm run build:client`
   - **Publish Directory**: `dist/spa`
   - **Functions Directory**: `netlify/functions`

2. **Environment Variables**:
   - Add variables in Site Settings -> Environment Variables.

3. **API Handling**:
   - Netlify functions are in `netlify/functions/`.
   - The `netlify.toml` file handles routing from `/api/*` to the function.

## Troubleshooting

- **Build Failures**: Ensure `pnpm-lock.yaml` is up to date and checked into Git.
- **API 404s**: Verify that the rewrites/redirects in `vercel.json` or `netlify.toml` match your API path structure.
- **Missing Modules**: If a package is missing in the production build, ensure it is in `dependencies` (not `devDependencies`) if it's required at runtime by the server/functions.
