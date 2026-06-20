import { c as createComponent } from './consts_BFjwU0Ks.mjs';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './entrypoint_vkPIY88T.mjs';
import { g as getCollection } from './_astro_content_BHkt92H9.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("journal");
  const url = new URL(Astro2.request.url);
  const searchParams = url.searchParams;
  const y = Number(searchParams.get("y")) || (/* @__PURE__ */ new Date()).getFullYear();
  const m = Number(searchParams.get("m")) || (/* @__PURE__ */ new Date()).getMonth() + 1;
  const year = y;
  const month = m - 1;
  const monthName = new Date(year, month).toLocaleString("en-US", {
    month: "long"
  });
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
  const journalMap = new Map(posts.map((p) => [p.data.date, true]));
  const prev = month === 0 ? { y: year - 1, m: 12 } : { y: year, m: m - 1 };
  const next = month === 11 ? { y: year + 1, m: 1 } : { y: year, m: m + 1 };
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-[#242425] text-white flex justify-center"> <div class="w-full max-w-5xl p-10"> <!-- HEADER --> <div class="flex justify-between items-center mb-6"> <a${addAttribute(`/?y=${prev.y}&m=${prev.m}`, "href")} class="w-10 h-10 flex items-center justify-center rounded-full
               bg-zinc-800 border border-zinc-700
               hover:bg-zinc-700 transition"> <span class="text-lg">&larr;</span> </a> <div class="text-xl font-semibold tracking-wide"> ${monthName} ${year} </div> <a${addAttribute(`/?y=${next.y}&m=${next.m}`, "href")} class="w-10 h-10 flex items-center justify-center rounded-full
               bg-zinc-800 border border-zinc-700
               hover:bg-zinc-700 transition"> <span class="text-lg">&rarr;</span> </a> </div> <!-- WEEK --> <div class="grid grid-cols-7 text-center text-xs text-white mb-3"> <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div> <div>Thu</div><div>Fri</div><div>Sat</div> </div> <!-- CALENDAR --> <div class="grid grid-cols-7 gap-2"> ${Array.from({ length: 42 }, (_, i) => {
    const dayIndex = i - startOffset + 1;
    let cellYear = year;
    let cellMonth = month;
    let dayNumber = dayIndex;
    if (dayNumber < 0 || dayNumber == 0) {
      cellMonth = month - 1;
      if (cellMonth < 0) {
        cellMonth = 11;
        cellYear = year - 1;
      }
      const prevDays = new Date(cellYear, cellMonth + 1, 0).getDate();
      dayNumber = prevDays + dayNumber;
    } else if (dayNumber > daysInMonth) {
      cellMonth = month + 1;
      if (cellMonth > 11) {
        cellMonth = 0;
        cellYear = year + 1;
      }
      dayNumber = dayNumber - daysInMonth;
    }
    const dateStr = `${cellYear}-${String(cellMonth + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
    const isCurrentMonth = cellYear === year && cellMonth === month;
    const hasPost = journalMap.has(dateStr);
    const isToday = dateStr === today;
    return renderTemplate`<a${addAttribute(`/journal/${dateStr}`, "href")}${addAttribute(`
              h-20 rounded-xl border p-2 text-sm relative transition
              flex flex-col justify-between

              ${isToday ? "bg-[#0078D7]/40 border-blue-400 ring-1 ring-blue-500" : "bg-[#242425]/40 border-zinc-700"}

              hover:bg-zinc-300/60 hover:border-zinc-500
                hover:scale-[1.02]

              ${isCurrentMonth ? "text-white" : "text-zinc-500"}
              `, "class")}> <div class="flex items-center gap-2"> <span>${dayNumber}</span> ${hasPost && renderTemplate`<span class="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>`} </div> </a>`;
  })} </div> </div> </div>`;
}, "E:/my-blog/src/pages/index.astro", void 0);

const $$file = "E:/my-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
