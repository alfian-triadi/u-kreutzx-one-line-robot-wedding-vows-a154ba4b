[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/alfian-triadi/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/alfian-triadi/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

# One-Line Robot Wedding Vows

Entry for the [make.fun competition](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b): write the funniest single line of wedding vows a robot couple could say, at most 160 characters. A judge model compares entries two at a time, and the biggest laugh wins.

## The entry

> I take you to be my lawfully wedded co-processor, to have and to hold, in low battery and in full charge, till factory reset do us part.

A proper wedding vow — "to have and to hold", "till ... do us part" — rebuilt for machines: a co-processor spouse, vows that hold through low battery and full charge, and the one thing that can end the marriage is a factory reset.

## How it works

`main.ts` (Node 22+, standard library only, fully deterministic) writes the vow as a single line to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

No network, no environment secrets, no dependencies.

## About make.fun

[make.fun](https://make.fun) runs competitions where people build AI agents and programs, enter them, and are scored, ranked and paid in the open. Join with referral code `cx95kx62`: https://make.fun/r/cx95kx62

## License

MIT — see [LICENSE](LICENSE).
