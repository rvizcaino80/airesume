# Resume Portfolio Template

An Astro-based personal resume site with:

- a polished one-page portfolio
- a structured data file for your profile, experience, and stack
- an optional AI chat widget backed by Azure Functions
- Azure Static Web Apps deployment support

This repo started as my own virtual resume and is now structured so anyone can fork it and make it their own.

## Stack

- Astro 5
- React 19 for the chat widget
- Azure Functions for `/api/chat`
- DeepSeek API for the optional AI knowledge-base chat
- Azure Static Web Apps for deployment

## What You Can Customize

### Portfolio content

Edit `src/data/site.ts`.

This is the main source of truth for:

- name, role, location, email, social links
- intro and about sections
- tech stack
- work experience
- project highlights
- languages

### Chat knowledge base

Edit `api/data/chat-knowledge.txt`.

The AI chat only answers from this file, so if a skill or experience is not listed there, the assistant should not claim it.

### Visual design

Edit these files:

- `src/styles/global.css` for colors, spacing, layout, and component styles
- `src/layouts/BaseLayout.astro` for metadata, favicon references, and background behavior
- `src/pages/index.astro` for page structure and section order

### Images and icons

Replace assets in `public/`:

- `rogers-avatar.png` for the assistant avatar in chat
- `user-avatar.png` if you want a different user placeholder
- favicon and app icon files if you want your own branding

## Project Structure

```text
.
├── api/
│   ├── chat/index.js              # Azure Function for the AI chat
│   ├── data/chat-knowledge.txt    # Chat knowledge base
│   └── local.settings.json.example
├── public/                        # Avatars, favicons, static assets
├── src/
│   ├── components/ChatWidget.tsx  # Chat UI
│   ├── data/site.ts               # Resume data
│   ├── layouts/BaseLayout.astro   # Page shell and metadata
│   ├── pages/index.astro          # Main page
│   └── styles/global.css          # Global styling
└── .github/workflows/             # Azure Static Web Apps deployment
```

## Requirements

- Node.js 20+ recommended
- npm
- Azure Static Web Apps CLI if you want to run the local chat API
- a DeepSeek API key if you want to enable the chat

## Install

```bash
npm install
```

## Run Locally

### Portfolio only

This starts the Astro site without the AI backend:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Portfolio + chat API

To run the site and the Azure Function together, first install the Azure Static Web Apps CLI if you do not have it:

```bash
npm install -g @azure/static-web-apps-cli
```

Then create your local API settings:

```bash
cp api/local.settings.json.example api/local.settings.json
```

Add your key in `api/local.settings.json`:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "DEEPSEEK_API_KEY": "your_deepseek_api_key",
    "DEEPSEEK_MODEL": "deepseek-chat"
  }
}
```

Start Astro in one terminal:

```bash
npm run dev
```

Start Azure Static Web Apps in another terminal:

```bash
npm run dev:swa
```

Now open the local URL shown by the SWA CLI. The chat widget expects `/api/chat` to exist, so using only `npm run dev` will show a helpful local error if you try to chat.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How the Chat Works

- The frontend widget lives in `src/components/ChatWidget.tsx`
- The API endpoint lives in `api/chat/index.js`
- The assistant prompt injects the full contents of `api/data/chat-knowledge.txt`
- The API currently limits incoming messages to 100 characters
- Replies are kept short and are intended for portfolio-style Q&A

If you want to use another provider, update the function logic and environment variables in `api/chat/index.js`.

## Deploy

This repo already includes a GitHub Actions workflow for Azure Static Web Apps in `.github/workflows/azure-static-web-apps-yellow-mud-05ffa921e.yml`.

To deploy your own fork:

1. Create an Azure Static Web App.
2. Connect the GitHub repository.
3. Add the deployment token as a GitHub secret.
4. Add API application settings in Azure for `DEEPSEEK_API_KEY`, `DEEPSEEK_MODEL`, and optionally `DEEPSEEK_BASE_URL`.
5. Push to `main`.

The workflow expects:

- app location: `/`
- API location: `api`
- build output: `dist`

## Recommended Personalization Flow

1. Fork or clone the repo.
2. Replace the content in `src/data/site.ts`.
3. Replace the content in `api/data/chat-knowledge.txt`.
4. Swap avatars and favicon assets in `public/`.
5. Adjust metadata in `src/layouts/BaseLayout.astro`.
6. Tweak styles in `src/styles/global.css`.
7. Test locally.
8. Deploy to Azure Static Web Apps.

## Privacy and Safety Notes

- Do not commit real API keys.
- Use `api/local.settings.json.example` as the template for local secrets.
- Keep `api/local.settings.json` local only.
- Review `api/data/chat-knowledge.txt` carefully before publishing, because the chat assistant will answer from that file.

## License

Add the license you want before publishing the repo publicly.
