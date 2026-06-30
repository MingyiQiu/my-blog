import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const res = await next();

  res.headers.set("content-type", "text/html; charset=utf-8");

  return res;
};
