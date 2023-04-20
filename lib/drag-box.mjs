import { defineComponent as p, ref as d, onMounted as m, openBlock as v, createElementBlock as x, createElementVNode as c, renderSlot as i } from "vue";
const _ = (t, r) => {
  const { width: e, height: n, left: o, top: s } = t;
  r.style.width = `${e}px`, r.style.height = `${n}px`, r.style.transform = `translate(${o}px, ${s}px)`;
}, f = (t, r) => {
  let e = { x: 0, y: 0 };
  r.addEventListener("mousedown", ({ offsetX: o, offsetY: s }) => {
    e = { x: o, y: s }, window.addEventListener("mousemove", n);
  }), window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", n);
  });
  function n({ x: o, y: s }) {
    const l = o - e.x, a = s - e.y;
    t.style.transform = `translate(${l}px, ${a}px)`;
  }
}, h = (t, r) => {
  let e = { x: 0, y: 0, sw: 0, sh: 0 };
  r.addEventListener("mousedown", ({ x: o, y: s }) => {
    const l = Number(t.style.width.replace("px", "")), a = Number(t.style.height.replace("px", ""));
    e = { x: o, y: s, sw: l, sh: a }, window.addEventListener("mousemove", n);
  }), window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", n);
  });
  function n({ x: o, y: s }) {
    const l = o - e.x + e.sw, a = s - e.y + e.sh;
    t.style.width = `${l}px`, t.style.height = `${a}px`;
  }
}, y = /* @__PURE__ */ p({
  __name: "DragBox",
  props: {
    width: null,
    height: null,
    left: null,
    top: null
  },
  setup(t) {
    const r = t, e = d(null), n = d(null), o = d(null);
    return m(() => {
      _(r, e.value), f(e.value, n.value), h(e.value, o.value);
    }), (s, l) => (v(), x("article", {
      class: "drag-box",
      ref_key: "dragBox",
      ref: e
    }, [
      c("header", {
        class: "drag-box__header",
        ref_key: "dragBoxHeader",
        ref: n
      }, [
        i(s.$slots, "header", {}, void 0, !0)
      ], 512),
      c("main", null, [
        i(s.$slots, "default", {}, void 0, !0)
      ]),
      c("footer", {
        class: "drag-box__footer",
        ref_key: "dragBoxFooter",
        ref: o
      }, null, 512)
    ], 512));
  }
});
const w = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [n, o] of r)
    e[n] = o;
  return e;
}, u = /* @__PURE__ */ w(y, [["__scopeId", "data-v-aec85435"]]);
u.install = (t) => {
  t.component(u.name, u);
};
export {
  u as default
};
