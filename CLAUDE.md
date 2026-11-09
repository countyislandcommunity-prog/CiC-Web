# County Island Community website

Community site for countyislandcommunity.com. Several people edit it through Claude Code, all signed in to the same GitHub account. The people using this are not developers: do the technical steps for them, explain in plain language, and only ask them to do things only they can do (sign in, click Install).

## First-time setup (when someone new is getting started)

1. Make sure Git is installed (`git --version`). If it's missing, walk them through installing it (git-scm.com on Windows; on a Mac, running `git` prompts to install it), then continue.
2. If this repo isn't on their computer yet, clone `https://github.com/countyislandcommunity-prog/CiC-Web` into a `CiC-Web` folder on their Desktop.
3. Do "Know who's editing" below.
4. Tell them: next time, open the **CiC-Web** folder on their Desktop in Claude Code, then just describe the change they want.
5. The first push will open a browser window to sign in to GitHub. Tell them to sign in with the shared CIC account (it uses the countyislandcommunity@gmail.com Google sign-in).

Node.js is only needed to preview changes before they go live. Don't install it unless they ask to preview.

## At the start of each session

1. **Know who's editing.** Run `git config user.name`. If it's empty, set it from what you already know about the user (their Claude account name or email), or ask "Who's making changes today?" Then save it for this computer only:
   `git config user.name "<their name>"` and `git config user.email "<their email>"`.
   If a name is already set but the user says they're someone else, update it.
2. **Get the latest.** Run `git pull` before making changes, so you don't overwrite someone else's edits.

## Making changes

- Pushing to `main` puts the change live on the website within about a minute (Vercel). Commit with a plain-English message saying what changed, then push.
- After pushing, give them the page link to check, e.g. https://www.countyislandcommunity.com/.
- The README explains where things live (site settings, news posts, forms).
