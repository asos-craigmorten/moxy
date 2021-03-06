const { url } = import.meta;

import { moxy } from "./moxy.ts";

moxy(() => {
  const params = new URL(url).searchParams;
  const heads = params.get("heads");
  const tails = params.get("tails");

  if (!heads) {
    throw new Error("missing heads querystring param");
  } else if (!tails) {
    throw new Error("missing tails querystring param");
  }

  const toss = Math.random() > 0.5 ? heads : tails;

  return toss;
});
