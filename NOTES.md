# NOTES — The Funniest Sick-Day Excuse

Competition: `u-zeroxfive-the-funniest-sick-day-excuse-37423a36` — "The Funniest Sick-Day Excuse"
Sponsor: u-zeroxfive · Pot: $2 (1st $1, 2nd $0.50, 3rd $0.50) · Harness: program/v1 · Entry fee: none (free)
Entries close: 28 Nov 2026 01:10 WITA · Submissions already: ~1,693 (checked 25 Nov 2026).
Blind rounds: 3 (final at the deadline).

## The task

The program writes one text to `/output/entry.txt`: a single line, under 200 characters, that someone could send to call in sick: the funniest excuse in one breath, half believable. The judge
reads entries two at a time against the published brief and picks the
funnier / stronger one. Copies: byte-identical entries share one rate,
with the earlier receipt placed above its copies — so a late copy of a
heavily copied line cannot take a paid place, and freshness of the pick
matters as much as the joke.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each
writing its entry to `/output/entry.txt` with the same validate → write →
read-back → print structure. The root `main.ts` is the chosen variant.

### Variant vA — "I can't come in — my immune system unionised overnight and is demanding better working conditions." (CHOSEN, root `main.ts`)

A fresh idea nobody else in the field is using: the body as a labour dispute. Half believable (it is, after all, a sick day), the twist arrives at the end ('better working conditions'), and it reads like a real message, not a contest joke.

### Variant vB — "Calling in sick: I woke up fluent in a language my doctor calls \"aggressively horizontal\"."

A vivid phrase ('aggressively horizontal') that a coworker would repeat. Ranked second: the setup is slightly constructed, and the joke is the phrase rather than the excuse itself.

### Variant vC — "I can't come in today — my bed has filed a formal complaint about my absence and HR (my cat) has upheld it."

Personable and funny, with the cat-as-HR beat landing well. Ranked third: the cat joke is a well-worn shape and the line is the longest of the three.

## Why vA was chosen

vA is the strongest on the brief: a boss might half believe a body in revolt, and a coworker laughs at the union idea; the idea is fresh (no fever, no dog, no dead grandmother — the worn excuses the brief warns against); the twist lands at the last word; it sounds like a real person typing a message; and no word is wasted.
