# BostonHacks Registration Portal 2023

[![Actions Status](https://github.com/bostonhacks/bostonhacks-2022/workflows/Production%20Workflow/badge.svg)](https://github.com/Bostonhacks/BostonHacks-2022/actions)
[![License](http://img.shields.io/badge/License-MIT-brightgreen.svg)](./LICENSE)

## Project setup

```bash
npm install
npm run dev
```

The dev server should open on [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

## Github Workflows

Github workflows is set up on this project so that there is an automatic deployment to the [BostonHacks staging site](staging.bostonhacks.io) so changes can be seen on the site after each merge.

## Deploying the Website to Production

After running the buildscript, run the following command.

```bash
firebase deploy --only hosting:production
```

Open [https://bostonhacks.io](https://bostonhacks.io/) to view production
