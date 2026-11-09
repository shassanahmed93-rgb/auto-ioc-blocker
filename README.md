# Auto IOC Blocker

Evaluate indicators against allowlists, confidence, and corroborating sources in dry run.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/auto-ioc-blocker/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "mode": "dry run",
  "proposed": 1,
  "decisions": [
    {
      "ip": "192.0.2.5",
      "action": "allowlisted"
    },
    {
      "ip": "203.0.113.25",
      "action": "propose block"
    },
    {
      "ip": "198.51.100.4",
      "action": "review"
    }
  ]
}
```

## Scope

Dry-run simulator. It produces proposed block decisions without changing a firewall.

## What this demonstrates

**Show how response automation protects legitimate traffic.** Check that an allowlist overrides an otherwise eligible indicator and that duplicate entries yield a single decision. The lab records proposals and does not touch live firewall rules.

[Reference guidance](https://csrc.nist.gov/pubs/sp/800/61/r3/final)
