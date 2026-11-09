# County Island Community website

Community site for countyislandcommunity.com. Several people edit it through Claude Code, all signed in to the same GitHub account.

## At the start of each session

1. **Know who's editing.** Run `git config user.name`. If it's empty, set it from what you already know about the user (their Claude account name or email), or ask "Who's making changes today?" Then save it for this computer only:
   `git config user.name "<their name>"` and `git config user.email "<their email>"`.
   If a name is already set but the user says they're someone else, update it.
2. **Get the latest.** Run `git pull` before making changes, so you don't overwrite someone else's edits.

## Making changes

- Pushing to `main` puts the change live on the website within about a minute (Vercel). Commit with a plain-English message saying what changed, then push.
- The README explains where things live (site settings, news posts, forms).
