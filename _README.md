# {{ project.Name }}

**Recommended**

- Node.js: 18+
- NPM: 9+

## Install

> NOTE: Since this project uses [Frontend Standards](https://github.com/ab-inbev-labs/frontend-standards) [HEXA](https://github.com/ab-inbev-labs/hexa-web), it requires their registry setup before installing

```
npm install
```

## Run

```
npm run dev
```

## Test

TBD

## Linting

```
npm run lint
```

## Docker
Copy your existing .nprmc to your working directory before running Docker commands
```
# Build the Docker image
docker build -t freight-factor-web:local --secret id=npmrc,src=.npmrc .

# Run the Docker container
docker run --rm -p 3000:3000 freight-factor-web
```
