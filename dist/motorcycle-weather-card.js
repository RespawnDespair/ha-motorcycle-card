(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
  var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
  var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
  var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
  var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
  var __runInitializers = (array, flags, self, value) => {
    for (var i5 = 0, fns = array[flags >> 1], n5 = fns && fns.length; i5 < n5; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
    return value;
  };
  var __decorateElement = (array, flags, name, decorators, target, extra) => {
    var fn, it, done, ctx, access, k2 = flags & 7, s4 = !!(flags & 8), p3 = !!(flags & 16);
    var j2 = k2 > 3 ? array.length + 1 : k2 ? s4 ? 1 : 2 : 0, key = __decoratorStrings[k2 + 5];
    var initializers = k2 > 3 && (array[j2 - 1] = []), extraInitializers = array[j2] || (array[j2] = []);
    var desc = k2 && (!p3 && !s4 && (target = target.prototype), k2 < 5 && (k2 > 3 || !p3) && __getOwnPropDesc(k2 < 4 ? target : { get [name]() {
      return __privateGet(this, extra);
    }, set [name](x2) {
      return __privateSet(this, extra, x2);
    } }, name));
    k2 ? p3 && k2 < 4 && __name(extra, (k2 > 2 ? "set " : k2 > 1 ? "get " : "") + name) : __name(target, name);
    for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
      ctx = __decoratorContext(k2, name, done = {}, array[3], extraInitializers);
      if (k2) {
        ctx.static = s4, ctx.private = p3, access = ctx.access = { has: p3 ? (x2) => __privateIn(target, x2) : (x2) => name in x2 };
        if (k2 ^ 3) access.get = p3 ? (x2) => (k2 ^ 1 ? __privateGet : __privateMethod)(x2, target, k2 ^ 4 ? extra : desc.get) : (x2) => x2[name];
        if (k2 > 2) access.set = p3 ? (x2, y3) => __privateSet(x2, target, y3, k2 ^ 4 ? extra : desc.set) : (x2, y3) => x2[name] = y3;
      }
      it = (0, decorators[i5])(k2 ? k2 < 4 ? p3 ? extra : desc[key] : k2 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
      if (k2 ^ 4 || it === void 0) __expectFn(it) && (k2 > 4 ? initializers.unshift(it) : k2 ? p3 ? extra = it : desc[key] = it : target = it);
      else if (typeof it !== "object" || it === null) __typeError("Object expected");
      else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
    }
    return k2 || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p3 ? k2 ^ 4 ? extra : desc : target;
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e5, o6) {
      if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e5;
    }
    get styleSheet() {
      let t4 = this.o;
      const s4 = this.t;
      if (e && void 0 === t4) {
        const e5 = void 0 !== s4 && 1 === s4.length;
        e5 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s4, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e5) => {
    const o6 = 1 === t4.length ? t4[0] : e5.reduce((e6, s4, o7) => e6 + ((t5) => {
      if (true === t5._$cssResult$) return t5.cssText;
      if ("number" == typeof t5) return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t4[o7 + 1], t4[0]);
    return new n(o6, t4, s);
  };
  var S = (s4, o6) => {
    if (e) s4.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
    else for (const e5 of o6) {
      const o7 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s4.appendChild(o7);
    }
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e5 = "";
    for (const s4 of t5.cssRules) e5 += s4.cssText;
    return r(e5);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t4, s4) => t4;
  var u = { toAttribute(t4, s4) {
    switch (s4) {
      case Boolean:
        t4 = t4 ? l : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s4) {
    let i5 = t4;
    switch (s4) {
      case Boolean:
        i5 = null !== t4;
        break;
      case Number:
        i5 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t4);
        } catch (t5) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t4, s4) => !i2(t4, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t4) {
      this._$Ei(), (this.l ??= []).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
        const i5 = Symbol(), h3 = this.getPropertyDescriptor(t4, i5, s4);
        void 0 !== h3 && e2(this.prototype, t4, h3);
      }
    }
    static getPropertyDescriptor(t4, s4, i5) {
      const { get: e5, set: r5 } = h(this.prototype, t4) ?? { get() {
        return this[s4];
      }, set(t5) {
        this[s4] = t5;
      } };
      return { get: e5, set(s5) {
        const h3 = e5?.call(this);
        r5?.call(this, s5), this.requestUpdate(t4, h3, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
        for (const i5 of s4) this.createProperty(i5, t5[i5]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s4 = litPropertyMetadata.get(t4);
        if (void 0 !== s4) for (const [t5, i5] of s4) this.elementProperties.set(t5, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s4] of this.elementProperties) {
        const i5 = this._$Eu(t5, s4);
        void 0 !== i5 && this._$Eh.set(i5, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e5 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e5) i5.unshift(c(s5));
      } else void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t4, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
    }
    addController(t4) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
    }
    removeController(t4) {
      this._$EO?.delete(t4);
    }
    _$E_() {
      const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t4.set(i5, this[i5]), delete this[i5]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t4) => t4.hostDisconnected?.());
    }
    attributeChangedCallback(t4, s4, i5) {
      this._$AK(t4, i5);
    }
    _$ET(t4, s4) {
      const i5 = this.constructor.elementProperties.get(t4), e5 = this.constructor._$Eu(t4, i5);
      if (void 0 !== e5 && true === i5.reflect) {
        const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t4, null == h3 ? this.removeAttribute(e5) : this.setAttribute(e5, h3), this._$Em = null;
      }
    }
    _$AK(t4, s4) {
      const i5 = this.constructor, e5 = i5._$Eh.get(t4);
      if (void 0 !== e5 && this._$Em !== e5) {
        const t5 = i5.getPropertyOptions(e5), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
        this._$Em = e5, this[e5] = h3.fromAttribute(s4, t5.type) ?? this._$Ej?.get(e5) ?? null, this._$Em = null;
      }
    }
    requestUpdate(t4, s4, i5) {
      if (void 0 !== t4) {
        const e5 = this.constructor, h3 = this[t4];
        if (i5 ??= e5.getPropertyOptions(t4), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t4) && !this.hasAttribute(e5._$Eu(t4, i5)))) return;
        this.C(t4, s4, i5);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t4, s4, { useDefault: i5, reflect: e5, wrapped: h3 }, r5) {
      i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t4) && (this._$Ej.set(t4, r5 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r5) || (this._$AL.has(t4) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t4, s4)), true === e5 && this._$Em !== t4 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t4));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t6, s5] of this._$Ep) this[t6] = s5;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0) for (const [s5, i5] of t5) {
          const { wrapped: t6 } = i5, e5 = this[s5];
          true !== t6 || this._$AL.has(s5) || void 0 === e5 || this.C(s5, void 0, i5, e5);
        }
      }
      let t4 = false;
      const s4 = this._$AL;
      try {
        t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t4 = false, this._$EM(), s5;
      }
      t4 && this._$AE(s4);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
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
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Eq &&= this._$Eq.forEach((t5) => this._$ET(t5, this[t5])), this._$EM();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var a2 = Array.isArray;
  var u2 = (t4) => a2(t4) || "function" == typeof t4?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t4) => (i5, ...s4) => ({ _$litType$: t4, strings: i5, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t4, i5) {
    if (!a2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var V = (t4, i5) => {
    const s4 = t4.length - 1, o6 = [];
    let r5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t4[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); ) y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r5 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r5 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r5 = void 0);
      const x2 = c4 === m && t4[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o6.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [P(t4, l3 + (t4[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o6];
  };
  var N = class _N {
    constructor({ strings: t4, _$litType$: s4 }, n5) {
      let r5;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = V(t4, s4);
      if (this.el = _N.createElement(f3, n5), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r5 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r5.nodeType) {
          if (r5.hasAttributes()) for (const t5 of r5.getAttributeNames()) if (t5.endsWith(e3)) {
            const i5 = v2[a3++], s5 = r5.getAttribute(t5).split(h2), e5 = /([.?@])?(.*)/.exec(i5);
            d3.push({ type: 1, index: c4, name: e5[2], strings: s5, ctor: "." === e5[1] ? H : "?" === e5[1] ? I : "@" === e5[1] ? L : k }), r5.removeAttribute(t5);
          } else t5.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r5.removeAttribute(t5));
          if ($.test(r5.tagName)) {
            const t5 = r5.textContent.split(h2), s5 = t5.length - 1;
            if (s5 > 0) {
              r5.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++) r5.append(t5[i5], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r5.append(t5[s5], l2());
            }
          }
        } else if (8 === r5.nodeType) if (r5.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = r5.data.indexOf(h2, t5 + 1)); ) d3.push({ type: 7, index: c4 }), t5 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t4, i5) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t4, s4;
    }
  };
  function S2(t4, i5, s4 = t4, e5) {
    if (i5 === T) return i5;
    let h3 = void 0 !== e5 ? s4._$Co?.[e5] : s4._$Cl;
    const o6 = c3(i5) ? void 0 : i5._$litDirective$;
    return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t4), h3._$AT(t4, s4, e5)), void 0 !== e5 ? (s4._$Co ??= [])[e5] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = S2(t4, h3._$AS(t4, i5.values), h3, e5)), i5;
  }
  var M = class {
    constructor(t4, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e5 = (t4?.creationScope ?? r3).importNode(i5, true);
      C.currentNode = e5;
      let h3 = C.nextNode(), o6 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o6 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t4) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t4) : 6 === l3.type && (i6 = new z(h3, this, t4)), this._$AV.push(i6), l3 = s4[++n5];
        }
        o6 !== l3?.index && (h3 = C.nextNode(), o6++);
      }
      return C.currentNode = r3, e5;
    }
    p(t4) {
      let i5 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t4[i5])), i5++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t4, i5, s4, e5) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s4, this.options = e5, this._$Cv = e5?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t4?.nodeType && (t4 = i5.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i5 = this) {
      t4 = S2(this, t4, i5), c3(t4) ? t4 === E || null == t4 || "" === t4 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t4 !== this._$AH && t4 !== T && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : u2(t4) ? this.k(t4) : this._(t4);
    }
    O(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    _(t4) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(r3.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      const { values: i5, _$litType$: s4 } = t4, e5 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e5) this._$AH.p(i5);
      else {
        const t5 = new M(e5, this), s5 = t5.u(this.options);
        t5.p(i5), this.T(s5), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i5 = A.get(t4.strings);
      return void 0 === i5 && A.set(t4.strings, i5 = new N(t4)), i5;
    }
    k(t4) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e5 = 0;
      for (const h3 of t4) e5 === i5.length ? i5.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i5[e5], s4._$AI(h3), e5++;
      e5 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e5), i5.length = e5);
    }
    _$AR(t4 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t4 && t4 !== this._$AB; ) {
        const i6 = t4.nextSibling;
        t4.remove(), t4 = i6;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i5, s4, e5, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e5, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t4, i5 = this, s4, e5) {
      const h3 = this.strings;
      let o6 = false;
      if (void 0 === h3) t4 = S2(this, t4, i5, 0), o6 = !c3(t4) || t4 !== this._$AH && t4 !== T, o6 && (this._$AH = t4);
      else {
        const e6 = t4;
        let n5, r5;
        for (t4 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r5 = S2(this, e6[s4 + n5], i5, n5), r5 === T && (r5 = this._$AH[n5]), o6 ||= !c3(r5) || r5 !== this._$AH[n5], r5 === E ? t4 = E : t4 !== E && (t4 += (r5 ?? "") + h3[n5 + 1]), this._$AH[n5] = r5;
      }
      o6 && !e5 && this.j(t4);
    }
    j(t4) {
      t4 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === E ? void 0 : t4;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== E);
    }
  };
  var L = class extends k {
    constructor(t4, i5, s4, e5, h3) {
      super(t4, i5, s4, e5, h3), this.type = 5;
    }
    _$AI(t4, i5 = this) {
      if ((t4 = S2(this, t4, i5, 0) ?? E) === T) return;
      const s4 = this._$AH, e5 = t4 === E && s4 !== E || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== E && (s4 === E || e5);
      e5 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var z = class {
    constructor(t4, i5, s4) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      S2(this, t4);
    }
  };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ??= []).push("3.3.0");
  var B = (t4, i5, s4) => {
    const e5 = s4?.renderBefore ?? i5;
    let h3 = e5._$litPart$;
    if (void 0 === h3) {
      const t5 = s4?.renderBefore ?? null;
      e5._$litPart$ = h3 = new R(i5.insertBefore(l2(), t5), t5, void 0, s4 ?? {});
    }
    return h3._$AI(t4), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t4 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t4.firstChild, t4;
    }
    update(t4) {
      const r5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = B(r5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.0");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t3 = (t4) => (e5, o6) => {
    void 0 !== o6 ? o6.addInitializer(() => {
      customElements.define(t4, e5);
    }) : customElements.define(t4, e5);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = (t4 = o5, e5, r5) => {
    const { kind: n5, metadata: i5 } = r5;
    let s4 = globalThis.litPropertyMetadata.get(i5);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t4 = Object.create(t4)).wrapped = true), s4.set(r5.name, t4), "accessor" === n5) {
      const { name: o6 } = r5;
      return { set(r6) {
        const n6 = e5.get.call(this);
        e5.set.call(this, r6), this.requestUpdate(o6, n6, t4);
      }, init(e6) {
        return void 0 !== e6 && this.C(o6, void 0, t4, e6), e6;
      } };
    }
    if ("setter" === n5) {
      const { name: o6 } = r5;
      return function(r6) {
        const n6 = this[o6];
        e5.call(this, r6), this.requestUpdate(o6, n6, t4);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t4) {
    return (e5, o6) => "object" == typeof o6 ? r4(t4, e5, o6) : ((t5, e6, o7) => {
      const r5 = e6.hasOwnProperty(o7);
      return e6.constructor.createProperty(o7, t5), r5 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
    })(t4, e5, o6);
  }

  // src/motorcycle-weather-card-editor.js
  var _config_dec, _hass_dec, _a, _MotorcycleWeatherCardEditor_decorators, _init;
  _MotorcycleWeatherCardEditor_decorators = [t3("motorcycle-weather-card-editor")];
  var MotorcycleWeatherCardEditor = class extends (_a = i4, _hass_dec = [n4({ attribute: false })], _config_dec = [n4({ type: Object })], _a) {
    constructor() {
      super(...arguments);
      __publicField(this, "hass", __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
      __publicField(this, "config", __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
    }
    static get properties() {
      return { hass: {}, config: {} };
    }
    _valueChanged(ev) {
      if (!this.config || !this.hass) {
        return;
      }
      const target = ev.target;
      if (this.config[`${target.configValue}`] === target.value) {
        return;
      }
      if (target.configValue) {
        if (target.value === "") {
          delete this.config[target.configValue];
        } else {
          this.config = {
            ...this.config,
            [target.configValue]: target.checked !== void 0 && target.checked !== null ? target.checked : target.value
          };
        }
      }
      this.dispatchEvent(
        new CustomEvent("config-changed", { detail: { config: this.config } })
      );
    }
    _locationChanged(ev, locationType, field) {
      const value = ev.target.value;
      this.config = {
        ...this.config,
        [`${locationType}_location`]: {
          ...this.config[`${locationType}_location`],
          [field]: field === "name" ? value : parseFloat(value)
        }
      };
      this.dispatchEvent(
        new CustomEvent("config-changed", { detail: { config: this.config } })
      );
    }
    render() {
      if (!this.hass || !this.config) {
        return x``;
      }
      const { home_location, work_location, temperature_threshold, rain_threshold, travel_start_hour, travel_end_hour } = this.config;
      return x`
      <div class="card-config">
        <h3>Home Location</h3>
        <ha-textfield
          label="Name"
          .value="${home_location?.name || ""}"
          @change="${(ev) => this._locationChanged(ev, "home", "name")}"
        ></ha-textfield>
        <ha-selector-number
          label="Latitude"
          .value="${home_location?.latitude || ""}"
          .configValue="home_location.latitude"
          @change="${(ev) => this._locationChanged(ev, "home", "latitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -90, max: 90, step: 1e-4 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Longitude"
          .value="${home_location?.longitude || ""}"
          .configValue="home_location.longitude"
          @change="${(ev) => this._locationChanged(ev, "home", "longitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -180, max: 180, step: 1e-4 } }}"
        ></ha-selector-number>

        <h3>Work Location</h3>
        <ha-textfield
          label="Name"
          .value="${work_location?.name || ""}"
          @change="${(ev) => this._locationChanged(ev, "work", "name")}"
        ></ha-textfield>
        <ha-selector-number
          label="Latitude"
          .value="${work_location?.latitude || ""}"
          .configValue="work_location.latitude"
          @change="${(ev) => this._locationChanged(ev, "work", "latitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -90, max: 90, step: 1e-4 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Longitude"
          .value="${work_location?.longitude || ""}"
          .configValue="work_location.longitude"
          @change="${(ev) => this._locationChanged(ev, "work", "longitude")}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -180, max: 180, step: 1e-4 } }}"
        ></ha-selector-number>

        <h3>Criteria</h3>
        <ha-selector-number
          label="Minimum Temperature (°C)"
          .value="${temperature_threshold || 15}"
          .configValue="temperature_threshold"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: -20, max: 40, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Maximum Rain Probability (%)"
          .value="${rain_threshold || 20}"
          .configValue="rain_threshold"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: 0, max: 100, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Travel Start Hour (0-23)"
          .value="${travel_start_hour || 7}"
          .configValue="travel_start_hour"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: "box", min: 0, max: 23, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Travel End Hour (0-23)"
          .value="${travel_end_hour || 19}"
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
  _init = __decoratorStart(_a);
  __decorateElement(_init, 5, "hass", _hass_dec, MotorcycleWeatherCardEditor);
  __decorateElement(_init, 5, "config", _config_dec, MotorcycleWeatherCardEditor);
  MotorcycleWeatherCardEditor = __decorateElement(_init, 0, "MotorcycleWeatherCardEditor", _MotorcycleWeatherCardEditor_decorators, MotorcycleWeatherCardEditor);
  __runInitializers(_init, 1, MotorcycleWeatherCardEditor);

  // src/motorcycle-weather-card.js
  var _weather_dec, _config_dec2, _hass_dec2, _a2, _MotorcycleWeatherCard_decorators, _init2;
  _MotorcycleWeatherCard_decorators = [t3("motorcycle-weather-card")];
  var MotorcycleWeatherCard = class extends (_a2 = i4, _hass_dec2 = [n4({ attribute: false })], _config_dec2 = [n4({ type: Object })], _weather_dec = [n4({ state: true })], _a2) {
    constructor() {
      super(...arguments);
      __publicField(this, "hass", __runInitializers(_init2, 8, this)), __runInitializers(_init2, 11, this);
      __publicField(this, "config", __runInitializers(_init2, 12, this)), __runInitializers(_init2, 15, this);
      __publicField(this, "weather", __runInitializers(_init2, 16, this)), __runInitializers(_init2, 19, this);
    }
    setConfig(config) {
      this.config = {
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
        travel_end_hour: 19,
        ...config
      };
    }
    set hass(hass) {
      this.hass = hass;
      if (!this.weather) {
        this.fetchWeather();
      }
    }
    async fetchWeather() {
      const home = this.config.home_location;
      const work = this.config.work_location;
      const homeUrl = `https://api.open-meteo.com/v1/forecast?latitude=${home.latitude}&longitude=${home.longitude}&hourly=temperature_2m,precipitation_probability&daily=weathercode,temperature_2m_max`;
      const workUrl = `https://api.open-meteo.com/v1/forecast?latitude=${work.latitude}&longitude=${work.longitude}&hourly=temperature_2m,precipitation_probability`;
      try {
        const [homeResponse, workResponse] = await Promise.all([
          fetch(homeUrl),
          fetch(workUrl)
        ]);
        const homeData = await homeResponse.json();
        const workData = await workResponse.json();
        this.weather = this.evaluateWeather(homeData, workData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
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
  _init2 = __decoratorStart(_a2);
  __decorateElement(_init2, 5, "hass", _hass_dec2, MotorcycleWeatherCard);
  __decorateElement(_init2, 5, "config", _config_dec2, MotorcycleWeatherCard);
  __decorateElement(_init2, 5, "weather", _weather_dec, MotorcycleWeatherCard);
  MotorcycleWeatherCard = __decorateElement(_init2, 0, "MotorcycleWeatherCard", _MotorcycleWeatherCard_decorators, MotorcycleWeatherCard);
  __runInitializers(_init2, 1, MotorcycleWeatherCard);
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
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
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

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
