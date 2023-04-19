import { defineComponent as g, ref as f, onMounted as w, openBlock as $, createElementBlock as E, createElementVNode as x, renderSlot as _ } from "vue";
const k = /* @__PURE__ */ g({
  __name: "DragBox",
  props: {
    width: null,
    height: null,
    left: null,
    top: null
  },
  setup(l) {
    const a = l, o = f(null), c = f(null), i = f(null), y = (e) => {
      e.value.style.width = `${a.width}px`, e.value.style.height = `${a.height}px`, e.value.style.transform = `translate(${a.left}px, ${a.top}px)`;
    }, h = (e, p) => {
      let n = !1, t = { x: 0, y: 0 };
      p.value.addEventListener("mousedown", ({ offsetX: s, offsetY: r }) => {
        n = !0, t = { x: s, y: r };
      }), window.addEventListener("mouseup", () => {
        n = !1;
      }), window.addEventListener("mousemove", ({ x: s, y: r }) => {
        if (!n)
          return;
        const d = s - t.x, u = r - t.y;
        e.value.style.transform = `translate(${d}px, ${u}px)`;
      });
    }, m = (e, p) => {
      let n = !1, t = { x: 0, y: 0, sw: 0, sh: 0 };
      p.value.addEventListener("mousedown", ({ x: s, y: r }) => {
        n = !0;
        const d = Number(e.value.style.width.replace("px", "")), u = Number(e.value.style.height.replace("px", ""));
        t = { x: s, y: r, sw: d, sh: u };
      }), window.addEventListener("mouseup", () => {
        n = !1;
      }), window.addEventListener("mousemove", ({ x: s, y: r }) => {
        if (!n)
          return;
        const d = s - t.x + t.sw, u = r - t.y + t.sh;
        e.value.style.width = `${d}px`, e.value.style.height = `${u}px`;
      });
    };
    return w(() => {
      y(o), h(o, c), m(o, i);
    }), (e, p) => ($(), E("article", {
      class: "drag-box",
      ref_key: "dragBox",
      ref: o
    }, [
      x("header", {
        class: "drag-box__header",
        ref_key: "dragBoxHeader",
        ref: c
      }, [
        _(e.$slots, "header", {}, void 0, !0)
      ], 512),
      x("main", null, [
        _(e.$slots, "default", {}, void 0, !0)
      ]),
      x("footer", {
        class: "drag-box_footer",
        ref_key: "dragBoxFooter",
        ref: i
      }, null, 512)
    ], 512));
  }
});
const B = (l, a) => {
  const o = l.__vccOpts || l;
  for (const [c, i] of a)
    o[c] = i;
  return o;
}, v = /* @__PURE__ */ B(k, [["__scopeId", "data-v-fce18535"]]);
v.install = (l) => {
  l.component(v.name, v);
};
export {
  v as default
};
