# Lantern Jelly — coolest-art-01 entry

A colossal translucent jellyfish glows warm gold above a small seaside
village at night. Its luminous tendrils reach down and touch the village
chimneys like lantern lines. Extreme scale contrast, magical-realism
subject, deep-indigo night palette cut by warm amber light.

Artwork: `entry.png` (1024x1024, JPEG bytes in a .png filename as the
competition permits).

## Run

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program is standard-library only (node:fs, node:path). It copies the
committed artwork to `$MAKEFUN_OUTPUT_DIR/entry.png` — by default
`/output/entry.png`, which is what the grader reads. Two runs produce the
same bytes.
