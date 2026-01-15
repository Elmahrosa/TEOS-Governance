![CI](https://github.com/Elmahrosa/International-Civic-Blockchain-Constitution/actions/workflows/ci.yml/badge.svg?branch=main)

# TEOS‑Governance

Audit‑ready International Civic Blockchain Constitution  
Validator rules, governance schemas, CI tests, and compliance framework.

This repo contains the foundational governance documents for the TEOS civic blockchain ecosystem.

## Content

- **CONSTITUTION.md** — Civic blockchain constitution
- **governance/** — Validator rules, proposal schema, voting weights
- **compliance/** — Audit checklist
- **tests/** — Governance tests
- **.github/workflows** — CI test runner

## How to test

```bash
npm init -y
npm install ajv jest
npx jest
