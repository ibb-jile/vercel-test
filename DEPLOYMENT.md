# Deployment na Vercel přes GitHub Actions

Tento repozitář obsahuje GitHub Action workflow pro automatické nasazování na Vercel.

## Nastavení

### 1. Získání Vercel tokenů

1. Přihlaste se na [Vercel](https://vercel.com)
2. Jděte do **Settings** → **Tokens**
3. Vytvořte nový token a zkopírujte ho

### 2. Získání Project ID a Org ID

Spusťte v root složce projektu:

```bash
npx vercel
```

Postupujte podle instrukcí pro nastavení projektu. Poté spusťte:

```bash
npx vercel link
```

Najděte soubory:
- `.vercel/project.json` - obsahuje `projectId`
- `.vercel/project.json` - obsahuje `orgId`

### 3. Nastavení GitHub Secrets

V GitHub repozitáři jděte do **Settings** → **Secrets and variables** → **Actions** a přidejte:

- `VERCEL_TOKEN` - token z kroku 1
- `VERCEL_ORG_ID` - orgId z `.vercel/project.json`
- `VERCEL_PROJECT_ID` - projectId z `.vercel/project.json`

## Jak to funguje

- **Pull Request** → Vytvoří preview deployment
- **Push na main** → Vytvoří production deployment

## Struktura workflow

```yaml
Deploy-Preview:   # Pro PR - preview prostředí
Deploy-Production: # Pro main branch - produkce
```

Oba joby:
1. Nastaví Node.js 18
2. Nainstalují Vercel CLI
3. Stáhnou Vercel konfiguraci
4. Buildnou projekt
5. Nasadí na Vercel

## Alternativa - Přímé připojení

Můžete také projekt připojit přímo ve Vercel dashboardu:
1. Import z GitHub
2. Automatické nasazování bez GitHub Actions