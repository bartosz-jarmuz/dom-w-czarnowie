#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."

declare -a MAP=(
  "Wiatrołap 6 m²|wiatrolap"
  "Korytarz 3 m²|korytarz"
  "Garderoba 3 m²|garderoba"
  "Łazienka 3 m²|lazienka-mala"
  "Kuchnia 7 m²|kuchnia"
  "Salon 28 m²|salon"
  "Pokój 8 m²|pokoj-8"
  "Klatka schodowa 3 m²|klatka-schodowa"
  "Przedpokój 6 m²|przedpokoj"
  "Schowek 3 m²|schowek"
  "Łazienka 6 m²|lazienka-duza"
  "Pokój 9 m²|pokoj-9"
  "Pokój 17 m²|pokoj-17"
  "Pokój 13 m²|pokoj-13"
  "sauna|sauna"
  "Budynek gospodarczy|budynek-gospodarczy"
  "wiata|wiata"
  "Ogród i otoczenie|ogrod"
  "opis|opis"
  "rzuty|rzuty"
)

# Exact near-duplicate source shots to skip when (re)generating images/ogrod.
EXCLUDE_OGROD=("IMG_6208.HEIC" "IMG_9238.HEIC")

# NOTE: this wipes and regenerates images/ from photos/ — any manual edit made
# directly on a file under images/ (e.g. the face-sticker on pokoj-9) is lost
# on rerun and must be reapplied by hand afterwards.
rm -rf images
mkdir -p images

for entry in "${MAP[@]}"; do
  src="${entry%%|*}"
  slug="${entry##*|}"
  srcdir="photos/$src"
  outdir="images/$slug"
  [ -d "$srcdir" ] || { echo "MISSING: $srcdir"; continue; }
  mkdir -p "$outdir"
  find "$srcdir" -maxdepth 1 -type f \( -iname '*.heic' -o -iname '*.jpg' -o -iname '*.jpeg' \) | sort | while IFS= read -r f; do
    base=$(basename "$f")
    if [ "$slug" = "ogrod" ]; then
      for skip in "${EXCLUDE_OGROD[@]}"; do
        [ "$base" = "$skip" ] && continue 2
      done
    fi
    name="${base%.*}"
    safe_name=$(echo "$name" | tr ' ()' '___')
    out="$outdir/${safe_name}.jpg"
    ext="${f##*.}"
    ext_lower=$(echo "$ext" | tr 'A-Z' 'a-z')
    if [ "$ext_lower" = "heic" ]; then
      sips -s format jpeg -s formatOptions 82 "$f" --out "$out" >/dev/null 2>&1
    else
      cp "$f" "$out"
    fi
    if [ "$slug" = "opis" ] || [ "$slug" = "rzuty" ]; then
      sips -Z 1800 -s formatOptions 88 "$out" >/dev/null 2>&1
    else
      sips -Z 1920 -s formatOptions 80 "$out" >/dev/null 2>&1
    fi
  done
  echo "done: $slug ($(ls "$outdir" | wc -l | tr -d ' ') files)"
done
