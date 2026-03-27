import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const stylesheet = readFileSync(
  new URL("../docs/css/design-system.css", import.meta.url),
  "utf8",
);

test("mobile code blocks use tighter spacing and smaller type", () => {
  const mobileStylesMatch = stylesheet.match(
    /@media\s*\(max-width:\s*48rem\)\s*\{([\s\S]*?)\n\}/,
  );

  assert.ok(mobileStylesMatch, "expected a max-width 48rem responsive block");

  const mobileStyles = mobileStylesMatch[1];

  assert.match(
    mobileStyles,
    /pre\s*\{[\s\S]*padding:\s*var\(--space-md\);/,
    "expected mobile pre blocks to reduce padding",
  );

  assert.match(
    mobileStyles,
    /pre code\s*\{[\s\S]*font-size:\s*0\.8125rem;/,
    "expected mobile pre code to use a smaller font size",
  );
});
