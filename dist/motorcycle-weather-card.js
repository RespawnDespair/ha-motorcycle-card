(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e4) {
          reject(e4);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e4) {
          reject(e4);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e4, o5) {
      if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s4 && 1 === s4.length;
        e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const o5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s4, o6) => e5 + ((t4) => {
      if (true === t4._$cssResult$) return t4.cssText;
      if ("number" == typeof t4) return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t3[o6 + 1], t3[0]);
    return new n(o5, t3, s);
  };
  var S = (s4, o5) => {
    if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else for (const e4 of o5) {
      const o6 = document.createElement("style"), n4 = t.litNonce;
      void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
    }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s4 of t4.cssRules) e4 += s4.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s4) => t3;
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i5 = t3;
    switch (s4) {
      case Boolean:
        i5 = null !== t3;
        break;
      case Number:
        i5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t3);
        } catch (t4) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t3, s4) => !i2(t3, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  var _a, _b;
  (_a = Symbol.metadata) != null ? _a : Symbol.metadata = Symbol("metadata"), (_b = a.litPropertyMetadata) != null ? _b : a.litPropertyMetadata = /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t3) {
      var _a6;
      this._$Ei(), ((_a6 = this.l) != null ? _a6 : this.l = []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
        void 0 !== h3 && e2(this.prototype, t3, h3);
      }
    }
    static getPropertyDescriptor(t3, s4, i5) {
      var _a6;
      const { get: e4, set: r4 } = (_a6 = h(this.prototype, t3)) != null ? _a6 : { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get: e4, set(s5) {
        const h3 = e4 == null ? void 0 : e4.call(this);
        r4 == null ? void 0 : r4.call(this, s5), this.requestUpdate(t3, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      var _a6;
      return (_a6 = this.elementProperties.get(t3)) != null ? _a6 : b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t3 = n2(this);
      t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
        for (const i5 of s4) this.createProperty(i5, t4[i5]);
      }
      const t3 = this[Symbol.metadata];
      if (null !== t3) {
        const s4 = litPropertyMetadata.get(t3);
        if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i5 = this._$Eu(t4, s4);
        void 0 !== i5 && this._$Eh.set(i5, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e4 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e4) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t3, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a6;
      this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a6 = this.constructor.l) == null ? void 0 : _a6.forEach((t3) => t3(this));
    }
    addController(t3) {
      var _a6, _b2;
      ((_a6 = this._$EO) != null ? _a6 : this._$EO = /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && ((_b2 = t3.hostConnected) == null ? void 0 : _b2.call(t3));
    }
    removeController(t3) {
      var _a6;
      (_a6 = this._$EO) == null ? void 0 : _a6.delete(t3);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      var _a6;
      const t3 = (_a6 = this.shadowRoot) != null ? _a6 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      var _a6, _b2;
      (_a6 = this.renderRoot) != null ? _a6 : this.renderRoot = this.createRenderRoot(), this.enableUpdating(true), (_b2 = this._$EO) == null ? void 0 : _b2.forEach((t3) => {
        var _a7;
        return (_a7 = t3.hostConnected) == null ? void 0 : _a7.call(t3);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var _a6;
      (_a6 = this._$EO) == null ? void 0 : _a6.forEach((t3) => {
        var _a7;
        return (_a7 = t3.hostDisconnected) == null ? void 0 : _a7.call(t3);
      });
    }
    attributeChangedCallback(t3, s4, i5) {
      this._$AK(t3, i5);
    }
    _$ET(t3, s4) {
      var _a6;
      const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
      if (void 0 !== e4 && true === i5.reflect) {
        const h3 = (void 0 !== ((_a6 = i5.converter) == null ? void 0 : _a6.toAttribute) ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      var _a6, _b2, _c, _d;
      const i5 = this.constructor, e4 = i5._$Eh.get(t3);
      if (void 0 !== e4 && this._$Em !== e4) {
        const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== ((_a6 = t4.converter) == null ? void 0 : _a6.fromAttribute) ? t4.converter : u;
        this._$Em = e4, this[e4] = (_d = (_c = h3.fromAttribute(s4, t4.type)) != null ? _c : (_b2 = this._$Ej) == null ? void 0 : _b2.get(e4)) != null ? _d : null, this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i5) {
      var _a6, _b2;
      if (void 0 !== t3) {
        const e4 = this.constructor, h3 = this[t3];
        if (i5 != null ? i5 : i5 = e4.getPropertyOptions(t3), !(((_a6 = i5.hasChanged) != null ? _a6 : f)(h3, s4) || i5.useDefault && i5.reflect && h3 === ((_b2 = this._$Ej) == null ? void 0 : _b2.get(t3)) && !this.hasAttribute(e4._$Eu(t3, i5)))) return;
        this.C(t3, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
      var _a6, _b2, _c;
      i5 && !((_a6 = this._$Ej) != null ? _a6 : this._$Ej = /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, (_b2 = r4 != null ? r4 : s4) != null ? _b2 : this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && ((_c = this._$Eq) != null ? _c : this._$Eq = /* @__PURE__ */ new Set()).add(t3));
    }
    _$EP() {
      return __async(this, null, function* () {
        this.isUpdatePending = true;
        try {
          yield this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && (yield t3), !this.isUpdatePending;
      });
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a6, _b2;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if ((_a6 = this.renderRoot) != null ? _a6 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
          for (const [t5, s5] of this._$Ep) this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0) for (const [s5, i5] of t4) {
          const { wrapped: t5 } = i5, e4 = this[s5];
          true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
        }
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), (_b2 = this._$EO) == null ? void 0 : _b2.forEach((t4) => {
          var _a7;
          return (_a7 = t4.hostUpdate) == null ? void 0 : _a7.call(t4);
        }), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t3 = false, this._$EM(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var _a6;
      (_a6 = this._$EO) == null ? void 0 : _a6.forEach((t4) => {
        var _a7;
        return (_a7 = t4.hostUpdated) == null ? void 0 : _a7.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((t4) => this._$ET(t4, this[t4]))), this._$EM();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  var _a2;
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p == null ? void 0 : p({ ReactiveElement: y }), ((_a2 = a.reactiveElementVersions) != null ? _a2 : a.reactiveElementVersions = []).push("2.1.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var a2 = Array.isArray;
  var u2 = (t3) => a2(t3) || "function" == typeof (t3 == null ? void 0 : t3[Symbol.iterator]);
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t3, i5) {
    if (!a2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var V = (t3, i5) => {
    const s4 = t3.length - 1, o5 = [];
    let r4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t3[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r4 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r4 != null ? r4 : f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r4 = void 0);
      const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o5.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o5];
  };
  var N = class _N {
    constructor({ strings: t3, _$litType$: s4 }, n4) {
      let r4;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = V(t3, s4);
      if (this.el = _N.createElement(f3, n4), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; null !== (r4 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r4.nodeType) {
          if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r4.getAttribute(t4).split(h2), e4 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e4[2], strings: s5, ctor: "." === e4[1] ? H : "?" === e4[1] ? I : "@" === e4[1] ? L : k }), r4.removeAttribute(t4);
          } else t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r4.removeAttribute(t4));
          if ($.test(r4.tagName)) {
            const t4 = r4.textContent.split(h2), s5 = t4.length - 1;
            if (s5 > 0) {
              r4.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r4.append(t4[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r4.append(t4[s5], l2());
            }
          }
        } else if (8 === r4.nodeType) if (r4.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = r4.data.indexOf(h2, t4 + 1)); ) d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t3, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function S2(t3, i5, s4 = t3, e4) {
    var _a6, _b2, _c;
    if (i5 === T) return i5;
    let h3 = void 0 !== e4 ? (_a6 = s4._$Co) == null ? void 0 : _a6[e4] : s4._$Cl;
    const o5 = c3(i5) ? void 0 : i5._$litDirective$;
    return (h3 == null ? void 0 : h3.constructor) !== o5 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b2.call(h3, false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? ((_c = s4._$Co) != null ? _c : s4._$Co = [])[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
  }
  var M = class {
    constructor(t3, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      var _a6;
      const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = ((_a6 = t3 == null ? void 0 : t3.creationScope) != null ? _a6 : r3).importNode(i5, true);
      C.currentNode = e4;
      let h3 = C.nextNode(), o5 = 0, n4 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o5 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new z(h3, this, t3)), this._$AV.push(i6), l3 = s4[++n4];
        }
        o5 !== (l3 == null ? void 0 : l3.index) && (h3 = C.nextNode(), o5++);
      }
      return C.currentNode = r3, e4;
    }
    p(t3) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
    }
  };
  var R = class _R {
    get _$AU() {
      var _a6, _b2;
      return (_b2 = (_a6 = this._$AM) == null ? void 0 : _a6._$AU) != null ? _b2 : this._$Cv;
    }
    constructor(t3, i5, s4, e4) {
      var _a6;
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = (_a6 = e4 == null ? void 0 : e4.isConnected) != null ? _a6 : true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === (t3 == null ? void 0 : t3.nodeType) && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = S2(this, t3, i5), c3(t3) ? t3 === E || null == t3 || "" === t3 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : u2(t3) ? this.k(t3) : this._(t3);
    }
    O(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    T(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
    }
    _(t3) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(r3.createTextNode(t3)), this._$AH = t3;
    }
    $(t3) {
      var _a6;
      const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (((_a6 = this._$AH) == null ? void 0 : _a6._$AD) === e4) this._$AH.p(i5);
      else {
        const t4 = new M(e4, this), s5 = t4.u(this.options);
        t4.p(i5), this.T(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = A.get(t3.strings);
      return void 0 === i5 && A.set(t3.strings, i5 = new N(t3)), i5;
    }
    k(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e4 = 0;
      for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
      e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      var _a6;
      for ((_a6 = this._$AP) == null ? void 0 : _a6.call(this, false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      var _a6;
      void 0 === this._$AM && (this._$Cv = t3, (_a6 = this._$AP) == null ? void 0 : _a6.call(this, t3));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i5, s4, e4, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t3, i5 = this, s4, e4) {
      const h3 = this.strings;
      let o5 = false;
      if (void 0 === h3) t3 = S2(this, t3, i5, 0), o5 = !c3(t3) || t3 !== this._$AH && t3 !== T, o5 && (this._$AH = t3);
      else {
        const e5 = t3;
        let n4, r4;
        for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = S2(this, e5[s4 + n4], i5, n4), r4 === T && (r4 = this._$AH[n4]), o5 || (o5 = !c3(r4) || r4 !== this._$AH[n4]), r4 === E ? t3 = E : t3 !== E && (t3 += (r4 != null ? r4 : "") + h3[n4 + 1]), this._$AH[n4] = r4;
      }
      o5 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === E ? void 0 : t3;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
    }
  };
  var L = class extends k {
    constructor(t3, i5, s4, e4, h3) {
      super(t3, i5, s4, e4, h3), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      var _a6;
      if ((t3 = (_a6 = S2(this, t3, i5, 0)) != null ? _a6 : E) === T) return;
      const s4 = this._$AH, e4 = t3 === E && s4 !== E || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== E && (s4 === E || e4);
      e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var _a6, _b2;
      "function" == typeof this._$AH ? this._$AH.call((_b2 = (_a6 = this.options) == null ? void 0 : _a6.host) != null ? _b2 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var z = class {
    constructor(t3, i5, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      S2(this, t3);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  var _a3;
  j == null ? void 0 : j(N, R), ((_a3 = t2.litHtmlVersions) != null ? _a3 : t2.litHtmlVersions = []).push("3.3.0");
  var B = (t3, i5, s4) => {
    var _a6, _b2;
    const e4 = (_a6 = s4 == null ? void 0 : s4.renderBefore) != null ? _a6 : i5;
    let h3 = e4._$litPart$;
    if (void 0 === h3) {
      const t4 = (_b2 = s4 == null ? void 0 : s4.renderBefore) != null ? _b2 : null;
      e4._$litPart$ = h3 = new R(i5.insertBefore(l2(), t4), t4, void 0, s4 != null ? s4 : {});
    }
    return h3._$AI(t3), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a6, _b2;
      const t3 = super.createRenderRoot();
      return (_b2 = (_a6 = this.renderOptions).renderBefore) != null ? _b2 : _a6.renderBefore = t3.firstChild, t3;
    }
    update(t3) {
      const r4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(r4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var _a6;
      super.connectedCallback(), (_a6 = this._$Do) == null ? void 0 : _a6.setConnected(true);
    }
    disconnectedCallback() {
      var _a6;
      super.disconnectedCallback(), (_a6 = this._$Do) == null ? void 0 : _a6.setConnected(false);
    }
    render() {
      return T;
    }
  };
  var _a4;
  i4._$litElement$ = true, i4["finalized"] = true, (_a4 = s3.litElementHydrateSupport) == null ? void 0 : _a4.call(s3, { LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4 == null ? void 0 : o4({ LitElement: i4 });
  var _a5;
  ((_a5 = s3.litElementVersions) != null ? _a5 : s3.litElementVersions = []).push("4.2.0");

  // src/motorcycle-weather-card-editor.js
  var MotorcycleWeatherCardEditor = class extends i4 {
    static get properties() {
      return { hass: { type: Object }, _config: { type: Object } };
    }
    setConfig(config) {
      var _a6, _b2, _c, _d;
      console.log("Editor setConfig called with:", config);
      this._config = __spreadProps(__spreadValues({}, config), {
        home_location: __spreadValues({
          name: "",
          latitude: 0,
          longitude: 0
        }, config.home_location || {}),
        work_location: __spreadValues({
          name: "",
          latitude: 0,
          longitude: 0
        }, config.work_location || {}),
        temperature_threshold: (_a6 = config.temperature_threshold) != null ? _a6 : 15,
        rain_threshold: (_b2 = config.rain_threshold) != null ? _b2 : 20,
        travel_start_hour: (_c = config.travel_start_hour) != null ? _c : 7,
        travel_end_hour: (_d = config.travel_end_hour) != null ? _d : 19
      });
    }
    _valueChanged(ev) {
      if (!this._config || !this.hass) {
        return;
      }
      const target = ev.target;
      if (this._config[`${target.configValue}`] === target.value) {
        return;
      }
      if (target.configValue) {
        if (target.value === "") {
          delete this._config[target.configValue];
        } else {
          this._config = __spreadProps(__spreadValues({}, this._config), {
            [target.configValue]: target.checked !== void 0 && target.checked !== null ? target.checked : target.value
          });
        }
      }
      this.dispatchEvent(
        new CustomEvent("config-changed", { detail: { config: this._config } })
      );
    }
    _locationChanged(ev, locationType, field) {
      const value = ev.target.value;
      this._config = __spreadProps(__spreadValues({}, this._config), {
        [`${locationType}_location`]: __spreadProps(__spreadValues({}, this._config[`${locationType}_location`]), {
          [field]: field === "name" ? value : parseFloat(value)
        })
      });
      this.dispatchEvent(
        new CustomEvent("config-changed", { detail: { config: this._config } })
      );
    }
    render() {
      var _a6, _b2, _c, _d;
      if (!this.hass || !this._config) {
        return x``;
      }
      const { home_location, work_location, temperature_threshold, rain_threshold, travel_start_hour, travel_end_hour } = this._config;
      return x`
      <div class="card-config">
        <h3>Home Location</h3>
        <ha-textfield
          label="Name"
          .value="${(home_location == null ? void 0 : home_location.name) || ""}"
          @change="${(ev) => this._locationChanged(ev, "home", "name")}"
        ></ha-textfield>
        <ha-selector-number
          label="Latitude"
          .value="${(_a6 = home_location == null ? void 0 : home_location.latitude) != null ? _a6 : 0}"
          .configValue="home_location.latitude"
          @change="${(ev) => this._locationChanged(ev, "home", "latitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -90, max: 90, step: 1e-4 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Longitude"
          .value="${(_b2 = home_location == null ? void 0 : home_location.longitude) != null ? _b2 : 0}"
          .configValue="home_location.longitude"
          @change="${(ev) => this._locationChanged(ev, "home", "longitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -180, max: 180, step: 1e-4 } }}"
        ></ha-selector-number>

        <h3>Work Location</h3>
        <ha-textfield
          label="Name"
          .value="${(work_location == null ? void 0 : work_location.name) || ""}"
          @change="${(ev) => this._locationChanged(ev, "work", "name")}"
        ></ha-textfield>
        <ha-selector-number
          label="Latitude"
          .value="${(_c = work_location == null ? void 0 : work_location.latitude) != null ? _c : 0}"
          .configValue="work_location.latitude"
          @change="${(ev) => this._locationChanged(ev, "work", "latitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -90, max: 90, step: 1e-4 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Longitude"
          .value="${(_d = work_location == null ? void 0 : work_location.longitude) != null ? _d : 0}"
          .configValue="work_location.longitude"
          @change="${(ev) => this._locationChanged(ev, "work", "longitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -180, max: 180, step: 1e-4 } }}"
        ></ha-selector-number>

        <h3>Criteria</h3>
        <ha-selector-number
          label="Minimum Temperature (°C)"
          .value="${temperature_threshold != null ? temperature_threshold : 15}"
          .configValue="temperature_threshold"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -20, max: 40, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Maximum Rain Probability (%)"
          .value="${rain_threshold != null ? rain_threshold : 20}"
          .configValue="rain_threshold"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: 0, max: 100, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Travel Start Hour (0-23)"
          .value="${travel_start_hour != null ? travel_start_hour : 7}"
          .configValue="travel_start_hour"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: 0, max: 23, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Travel End Hour (0-23)"
          .value="${travel_end_hour != null ? travel_end_hour : 19}"
          .configValue="travel_end_hour"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: 0, max: 23, step: 1 } }}"
        ></ha-selector-number>
      </div>
    `;
    }
    static get styles() {
      return i`
      .card-config {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 16px;
      }
      h3 {
        margin-bottom: 0;
      }
      ha-textfield,
      ha-selector-number {
        width: 100%;
      }
    `;
    }
  };
  customElements.define("motorcycle-weather-card-editor", MotorcycleWeatherCardEditor);

  // src/motorcycle-weather-card.js
  var MotorcycleWeatherCard = class extends i4 {
    static get properties() {
      return {
        hass: { type: Object },
        config: { type: Object },
        weather: { state: true }
      };
    }
    setConfig(config) {
      this.config = __spreadValues({
        home_location: {
          name: "Stellendam",
          latitude: 51.77,
          longitude: 4.04
        },
        work_location: {
          name: "Middelharnis",
          latitude: 51.75,
          longitude: 4.17
        },
        temperature_threshold: 15,
        rain_threshold: 20,
        travel_start_hour: 7,
        travel_end_hour: 19
      }, config);
    }
    set hass(hass) {
      this._hass = hass;
      if (!this.weather) {
        this.fetchWeather();
      }
    }
    fetchWeather() {
      return __async(this, null, function* () {
        const home = this.config.home_location;
        const work = this.config.work_location;
        const homeUrl = `https://api.open-meteo.com/v1/forecast?latitude=${home.latitude}&longitude=${home.longitude}&hourly=temperature_2m,precipitation_probability&daily=weathercode,temperature_2m_max`;
        const workUrl = `https://api.open-meteo.com/v1/forecast?latitude=${work.latitude}&longitude=${work.longitude}&hourly=temperature_2m,precipitation_probability`;
        try {
          const [homeResponse, workResponse] = yield Promise.all([
            fetch(homeUrl),
            fetch(workUrl)
          ]);
          const homeData = yield homeResponse.json();
          const workData = yield workResponse.json();
          this.weather = this.evaluateWeather(homeData, workData);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    }
    evaluateWeather(homeData, workData) {
      const dailyWeather = [];
      const { temperature_threshold, rain_threshold, travel_start_hour, travel_end_hour } = this.config;
      for (let i5 = 0; i5 < 7; i5++) {
        const day = {
          date: /* @__PURE__ */ new Date(),
          weatherIcon: this.getWeatherIcon(homeData.daily.weathercode[i5]),
          maxTemp: homeData.daily.temperature_2m_max[i5],
          canRide: true,
          reason: ""
        };
        day.date.setDate(day.date.getDate() + i5);
        const travelHours = [];
        for (let h3 = travel_start_hour; h3 <= travel_end_hour; h3++) {
          travelHours.push(h3);
        }
        let homeGo = true;
        let workGo = true;
        for (const location of ["home", "work"]) {
          const data = location === "home" ? homeData : workData;
          for (const hour of travelHours) {
            const index = i5 * 24 + hour;
            const temp = data.hourly.temperature_2m[index];
            const rain = data.hourly.precipitation_probability[index];
            if (temp <= temperature_threshold) {
              if (location === "home") homeGo = false;
              else workGo = false;
              break;
            }
            if (rain > rain_threshold) {
              if (location === "home") homeGo = false;
              else workGo = false;
              break;
            }
          }
        }
        if (!homeGo || !workGo) {
          day.canRide = false;
          day.reason = "Conditions not met";
        }
        dailyWeather.push(day);
      }
      return dailyWeather;
    }
    getWeatherIcon(wmoCode) {
      const iconMap = {
        0: "mdi:weather-sunny",
        1: "mdi:weather-partly-cloudy",
        2: "mdi:weather-cloudy",
        3: "mdi:weather-cloudy",
        45: "mdi:weather-fog",
        48: "mdi:weather-fog",
        51: "mdi:weather-rainy",
        53: "mdi:weather-rainy",
        55: "mdi:weather-rainy",
        61: "mdi:weather-pouring",
        63: "mdi:weather-pouring",
        65: "mdi:weather-pouring",
        80: "mdi:weather-pouring",
        81: "mdi:weather-pouring",
        82: "mdi:weather-pouring",
        95: "mdi:weather-lightning-rainy",
        96: "mdi:weather-lightning-rainy",
        99: "mdi:weather-lightning-rainy"
      };
      return iconMap[wmoCode] || "mdi:weather-sunny";
    }
    render() {
      if (!this.weather) {
        return x`<ha-card header="Motorcycle Weather"><div class="card-content"><p>Loading weather...</p></div></ha-card>`;
      }
      return x`
      <ha-card header="Motorcycle Weather">
        <div class="card-content">
          <div class="calendar">
            ${this.weather.map((day) => x`
              <div class="day">
                <div class="date">${day.date.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" })}</div>
                <div class="icon-container">
                    <ha-icon icon="${day.weatherIcon}"></ha-icon>
                </div>
                <div class="temp">${Math.round(day.maxTemp)}°C</div>
                <div class="rideable-status">
                  <span class="icon">${day.canRide ? "\u2705" : "\u274C"}</span>
                </div>
              </div>
            `)}
          </div>
        </div>
      </ha-card>
    `;
    }
    static get styles() {
      return i`
      .calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
      }
      .day {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 8px;
        border-radius: 8px;
        background-color: var(--ha-card-background, var(--card-background-color, white));
        box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));
      }
      .date {
        font-weight: bold;
        margin-bottom: 4px;
        font-size: 0.9em;
      }
      .icon-container {
        margin-bottom: 4px;
      }
      ha-icon {
        --mdc-icon-size: 32px;
      }
      .temp {
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 4px;
      }
      .rideable-status .icon {
        font-size: 24px;
      }

      @media (max-width: 600px) {
        .calendar {
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
      }
    `;
    }
    static getConfigElement() {
      return document.createElement("motorcycle-weather-card-editor");
    }
    static getStubConfig() {
      return {
        home_location: {
          name: "Stellendam",
          latitude: 51.77,
          longitude: 4.04
        },
        work_location: {
          name: "Middelharnis",
          latitude: 51.75,
          longitude: 4.17
        },
        temperature_threshold: 15,
        rain_threshold: 20,
        travel_start_hour: 7,
        travel_end_hour: 19
      };
    }
  };
  customElements.define("motorcycle-weather-card", MotorcycleWeatherCard);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
