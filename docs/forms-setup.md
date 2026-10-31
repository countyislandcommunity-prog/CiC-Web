# Connecting the website forms to a Google Sheet

The Join, Contact and Newsletter forms send each submission to a Google Sheet. Each form gets its own tab, and a row is added for every submission. Setup takes about 5 minutes and only needs to be done once.

## 1. Create the sheet

1. Signed in to the Google account CIC will use, create a new Google Sheet. Name it something like **CIC Website Submissions**.
2. Share it with any volunteers who should see signups.

## 2. Add the script

1. In the sheet, open **Extensions → Apps Script**.
2. Delete everything in `Code.gs`, then paste in the contents of [`apps-script/Code.gs`](../apps-script/Code.gs) from this repo.
3. Optional: to get an email for each submission, set `NOTIFY_EMAIL` at the top, for example `var NOTIFY_EMAIL = 'you@example.com';`.
4. Click **Save**.

## 3. Deploy it

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**. "Anyone" lets website visitors submit forms. It does not let them see the sheet.
4. Click **Deploy** and approve the permissions Google asks for. The script needs to edit this sheet, and send email if you turned that on.
5. Copy the **Web app URL**. It ends in `/exec`.

## 4. Point the website at it

In Vercel, open the **cic-web** project, go to **Settings → Environment Variables** and add:

| Name | Value |
|---|---|
| `PUBLIC_FORM_ENDPOINT` | the Web app URL from step 3 |

Then redeploy: go to **Deployments**, open the latest one, and choose **⋯ → Redeploy**.

You can paste the URL into `formHandler` in `src/site.ts` instead, if you prefer.

## 5. Test it

Submit each form on the site once. Rows should appear in new **Join**, **Contact** and **Newsletter** tabs within a few seconds.

## Notes

- **If you change the script,** use **Deploy → Manage deployments → Edit → Version: New version**. That keeps the same URL. A brand-new deployment gets a new URL.
- **New form fields** are added as new columns automatically.
- **Spam:** a hidden field catches simple bots, and anything it catches is dropped without being saved.
- **Formulas:** values that start with `=`, `+`, `-` or `@` are stored as plain text, so they can't run as formulas.
