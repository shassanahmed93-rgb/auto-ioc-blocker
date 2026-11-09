import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["proposed"], 1);
console.log("Fixture passed");
const comparison = {
  "allowlist": [
    "192.0.2.5"
  ],
  "indicators": [
    {
      "ip": "192.0.2.5",
      "confidence": 99,
      "sources": 4
    },
    {
      "ip": "192.0.2.5",
      "confidence": 99,
      "sources": 4
    },
    {
      "ip": "999.0.0.1",
      "confidence": 99,
      "sources": 4
    }
  ]
};
assert.deepEqual(analyze(comparison)["proposed"], 0);
console.log("Comparison fixture passed");
