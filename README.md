# insightscs-landing-page

Starter repository template for InsightSCS's landing page.

Powered by NextJS's static site export. [https://nextjs.org/features/static-exporting](https://nextjs.org/features/static-exporting)

## Setup & Installation

Requirements:

- node v11
- `yarn` or `npm`

1. Clone this repository
2. `cd` into directory and run `yarn install` (or `npm` if you don't have yarn installed)
3. Run `yarn dev` to start developing locally

## Production & Deployment

Run `yarn export` or `npm run export` to export production code. You can get the files inside the `out` folder. You can upload this to your AWS S3 bucket, deploy it on Netlify, or in your webserver.

**NOTE :** Don't forget to change the `PRODUCTION_URL` variable inside the `next.config.js` file. This will route all assets/resources/links properly.
