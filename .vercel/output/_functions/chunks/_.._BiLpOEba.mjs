import { c as createComponent } from './consts_BFjwU0Ks.mjs';
import { c as renderHead, d as renderComponent, r as renderTemplate } from './entrypoint_vkPIY88T.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_BHkt92H9.mjs';

async function getStaticPaths() {
  const posts = await getCollection("journal");
  return posts.map((post) => ({
    params: {
      slug: post.id
    },
    props: {
      post
    }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>${post.data.title}</title>${renderHead()}</head> <body> <a href="/">&larr; Back</a> <h1>${post.data.title}</h1> <p>${post.data.date.toString()}</p> <hr> ${renderComponent($$result, "Content", Content, {})} </body></html>`;
}, "E:/my-blog/src/pages/journal/[...slug].astro", void 0);

const $$file = "E:/my-blog/src/pages/journal/[...slug].astro";
const $$url = "/journal/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
