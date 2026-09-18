# AUREN development workflow

1. Understand the requirement.
2. Choose the simplest technically correct solution.
3. Implement one coherent unit of change.
4. Run the relevant checks.
5. Review the diff.
6. Commit with a meaningful message.
7. Push to GitHub.

## Validation command

```bash
npm run verify
```

## Commit examples

```text
chore: initialize frontend foundation
feat: add product showcase
feat: add request flow
fix: correct mobile navigation
perf: reduce product page payload
```

Do not bundle unrelated changes into one commit.
