# Stripe Payment Link (simple setup)

No server needed. One button on your site opens your Stripe payment page.

## 1. Create the link in Stripe

1. Log in at [dashboard.stripe.com](https://dashboard.stripe.com)
2. Go to **Payment links** → **+ Create**
3. For **flexible amount** (client chooses how much to pay):
   - Create a product and enable **Let customers decide what to pay** (or similar wording in your dashboard)
4. Copy the link (looks like `https://buy.stripe.com/...` or `https://pay.stripe.com/...`)

## 2. Paste the link on your site

Open `i18n.js` and replace:

```javascript
window.TWR_STRIPE_PAY_LINK = "https://buy.stripe.com/YOUR_LINK_HERE";
```

That updates the **Pagar com Cartão** buttons on the home page and on the pricing page.

## 3. Test

Use Stripe **test mode** first. Pay with test card `4242 4242 4242 4242`.

When ready, create the link in **live mode** (no `test_` in the URL) and paste the live URL into `i18n.js`.

**Live link in use:** `https://buy.stripe.com/8x214mfFP7MpaLS7qveUU00`

## Invoices

You can still send fixed invoices from Stripe Dashboard for exact amounts. The payment link is for when the client pays the amount you agreed on WhatsApp.
