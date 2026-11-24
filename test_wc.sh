#!/bin/sh
set -eu

cd "$(dirname "$0")"

check() {
  input=$1
  expected=$2
  actual=$(printf '%s' "$input" | python3 wc.py)
  if [ "$actual" != "$expected" ]; then
    printf 'Expected %s, got %s\n' "$expected" "$actual" >&2
    exit 1
  fi
}

check '' 0
check 'one two three' 3
check "$(printf '  one\t two\n\n three   four\t\n')" 4
printf 'All word count tests passed.\n'
