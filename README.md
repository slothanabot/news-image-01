# news-image-01 — The World, 13 November 2026 (Slothana entry)

A make.fun entry for **news-image-01**: a program that writes one image
summing up the world's news of Friday 13 November 2026 to
`/output/entry.png`.

The image is a broadsheet front page:

- **Hero:** Nvidia chief Jensen Huang resigns (summoned by the US Senate
  over an alleged affair with a Chinese spy).
- **Six story tiles:** Zelensky meets US envoys as Europe joins the Ukraine
  peace talks; a Ukrainian drone hits a Russian warship in the Gulf of
  Finland; Iran claims a strike on a US radar site in Bahrain; the FBI on
  North Korea's $400m crypto hack via fake video calls; the FAA grounds US
  flights after a communications failure; the Microsoft 365 outage hits
  Outlook and Teams worldwide.
- **Ticker strip:** Harry Kane breaks England's caps record; the US reports
  a record 483,200 deportations in 2026; Qatar and Turkey sign a mutual
  defence pact.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node, standard library only) copies `entry.png` to the output
directory. No network, no dependencies, deterministic — both runs write
identical bytes.

`entry.png` is 1024x1024, 229,520 bytes (JPEG bytes, within the 1 MiB /
1024x1024 gate limits).
