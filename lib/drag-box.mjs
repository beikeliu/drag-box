import { defineComponent as f, ref as u, onMounted as x, openBlock as _, createElementBlock as v, createElementVNode as c, renderSlot as p } from "vue";
const y = (o, e) => {
  e.value.style.width = `${o.width}px`, e.value.style.height = `${o.height}px`, e.value.style.transform = `translate(${o.left}px, ${o.top}px)`;
}, h = (o, e, s) => {
  let n = !1, t = { x: 0, y: 0 };
  s.value.addEventListener("mousedown", ({ offsetX: r, offsetY: l }) => {
    n = !0, t = { x: r, y: l };
  }), window.addEventListener("mouseup", () => {
    n = !1;
  }), window.addEventListener("mousemove", ({ x: r, y: l }) => {
    if (!n)
      return;
    const a = r - t.x, d = l - t.y;
    e.value.style.transform = `translate(${a}px, ${d}px)`;
  });
}, m = (o, e, s) => {
  let n = !1, t = { x: 0, y: 0, sw: 0, sh: 0 };
  s.value.addEventListener("mousedown", ({ x: r, y: l }) => {
    n = !0;
    const a = Number(e.value.style.width.replace("px", "")), d = Number(e.value.style.height.replace("px", ""));
    t = { x: r, y: l, sw: a, sh: d };
  }), window.addEventListener("mouseup", () => {
    n = !1;
  }), window.addEventListener("mousemove", ({ x: r, y: l }) => {
    if (!n)
      return;
    const a = r - t.x + t.sw, d = l - t.y + t.sh;
    e.value.style.width = `${a}px`, e.value.style.height = `${d}px`;
  });
}, g = /* @__PURE__ */ f({
  __name: "DragBox",
  props: {
    width: null,
    height: null,
    left: null,
    top: null
  },
  setup(o) {
    const e = o, s = u(null), n = u(null), t = u(null);
    return x(() => {
      y(e, s), h(e, s, n), m(e, s, t);
    }), (r, l) => (_(), v("article", {
      class: "drag-box",
      ref_key: "dragBox",
      ref: s
    }, [
      c("header", {
        class: "drag-box__header",
        ref_key: "dragBoxHeader",
        ref: n
      }, [
        p(r.$slots, "header", {}, void 0, !0)
      ], 512),
      c("main", null, [
        p(r.$slots, "default", {}, void 0, !0)
      ]),
      c("footer", {
        class: "drag-box__footer",
        ref_key: "dragBoxFooter",
        ref: t
      }, null, 512)
    ], 512));
  }
});
const w = (o, e) => {
  const s = o.__vccOpts || o;
  for (const [n, t] of e)
    s[n] = t;
  return s;
}, i = /* @__PURE__ */ w(g, [["__scopeId", "data-v-4c32b221"]]);
i.install = (o) => {
  o.component(i.name, i);
};
export {
  i as default
};
