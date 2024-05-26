import ke, { useState as J, useRef as ae, useEffect as G, useCallback as lr, useLayoutEffect as dr, forwardRef as vr, useImperativeHandle as pr } from "react";
var ie = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function hr() {
  if (Ae)
    return N;
  Ae = 1;
  var d = ke, v = Symbol.for("react.element"), w = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, g = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(o, c, f) {
    var n, u = {}, p = null, T = null;
    f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (T = c.ref);
    for (n in c)
      E.call(c, n) && !R.hasOwnProperty(n) && (u[n] = c[n]);
    if (o && o.defaultProps)
      for (n in c = o.defaultProps, c)
        u[n] === void 0 && (u[n] = c[n]);
    return { $$typeof: v, type: o, key: p, ref: T, props: u, _owner: g.current };
  }
  return N.Fragment = w, N.jsx = b, N.jsxs = b, N;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function mr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var d = ke, v = Symbol.for("react.element"), w = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), P = Symbol.iterator, A = "@@iterator";
    function y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[A];
      return typeof r == "function" ? r : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        O("error", e, t);
      }
    }
    function O(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var m = t.map(function(s) {
          return String(s);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var j = !1, Fe = !1, Ie = !1, $e = !1, Ye = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === R || Ye || e === g || e === f || e === n || $e || e === T || j || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === u || e.$$typeof === b || e.$$typeof === o || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case w:
          return "Portal";
        case R:
          return "Profiler";
        case g:
          return "StrictMode";
        case f:
          return "Suspense";
        case n:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return se(r) + ".Consumer";
          case b:
            var t = e;
            return se(t._context) + ".Provider";
          case c:
            return Le(e, e.render, "ForwardRef");
          case u:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case p: {
            var l = e, m = l._payload, s = l._init;
            try {
              return k(s(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, M = 0, ce, fe, le, de, ve, pe, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ne() {
      {
        if (M === 0) {
          ce = console.log, fe = console.info, le = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ve() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: fe
            }),
            warn: I({}, e, {
              value: le
            }),
            error: I({}, e, {
              value: de
            }),
            group: I({}, e, {
              value: ve
            }),
            groupCollapsed: I({}, e, {
              value: pe
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        M < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = S.ReactCurrentDispatcher, K;
    function W(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, B;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      B = new We();
    }
    function ge(e, r) {
      if (!e || X)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      X = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = H.current, H.current = null, Ne();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (F) {
              a = F;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (F) {
              a = F;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            a = F;
          }
          e();
        }
      } catch (F) {
        if (F && a && typeof F.stack == "string") {
          for (var i = F.stack.split(`
`), C = a.stack.split(`
`), _ = i.length - 1, x = C.length - 1; _ >= 1 && x >= 0 && i[_] !== C[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (i[_] !== C[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || i[_] !== C[x]) {
                    var D = `
` + i[_].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, D), D;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = m, Ve(), Error.prepareStackTrace = l;
      }
      var Y = e ? e.displayName || e.name : "", je = Y ? W(Y) : "";
      return typeof e == "function" && B.set(e, je), je;
    }
    function Be(e, r, t) {
      return ge(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ue(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case f:
          return W("Suspense");
        case n:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Be(e.render);
          case u:
            return U(e.type, r, t);
          case p: {
            var a = e, l = a._payload, m = a._init;
            try {
              return U(m(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, Re = S.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function ze(e, r, t, a, l) {
      {
        var m = Function.call.bind(z);
        for (var s in e)
          if (m(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var C = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              i = _;
            }
            i && !(i instanceof Error) && (q(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), q(null)), i instanceof Error && !(i.message in ye) && (ye[i.message] = !0, q(l), h("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var qe = Array.isArray;
    function Z(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ge(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Ee(e);
    }
    var L = S.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, xe, Q;
    Q = {};
    function Ke(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = k(L.current.type);
        Q[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(L.current.type), e.ref), Q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          xe || (xe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, a, l, m, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function tr(e, r, t, a, l) {
      {
        var m, s = {}, i = null, C = null;
        t !== void 0 && (_e(t), i = "" + t), Xe(r) && (_e(r.key), i = "" + r.key), Ke(r) && (C = r.ref, Ze(r, l));
        for (m in r)
          z.call(r, m) && !He.hasOwnProperty(m) && (s[m] = r[m]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (m in _)
            s[m] === void 0 && (s[m] = _[m]);
        }
        if (i || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Qe(s, x), C && er(s, x);
        }
        return rr(e, i, C, l, a, L.current, s);
      }
    }
    var ee = S.ReactCurrentOwner, we = S.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function Te() {
      {
        if (ee.current) {
          var e = k(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Se = {};
    function ar(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ee.current && (a = " It was passed a child from " + k(e._owner.type) + "."), $(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), $(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            te(a) && Oe(a, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = y(e);
          if (typeof l == "function" && l !== e.entries)
            for (var m = l.call(e), s; !(s = m.next()).done; )
              te(s.value) && Oe(s.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === u))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = k(r);
          ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var l = k(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            $(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Pe(e, r, t, a, l, m) {
      {
        var s = Me(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = nr(l);
          C ? i += C : i += Te();
          var _;
          e === null ? _ = "null" : Z(e) ? _ = "array" : e !== void 0 && e.$$typeof === v ? (_ = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, i);
        }
        var x = tr(e, r, t, l, m);
        if (x == null)
          return x;
        if (s) {
          var D = r.children;
          if (D !== void 0)
            if (a)
              if (Z(D)) {
                for (var Y = 0; Y < D.length; Y++)
                  Ce(D[Y], e);
                Object.freeze && Object.freeze(D);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(D, e);
        }
        return e === E ? or(x) : ir(x), x;
      }
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var cr = sr, fr = ur;
    V.Fragment = E, V.jsx = cr, V.jsxs = fr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ie.exports = hr() : ie.exports = mr();
var oe = ie.exports;
const gr = (d, v, w, E) => {
  let g = v / (w + E), R = Math.floor(d.length / g);
  g > d.length && (g = d.length, R = 1);
  const b = [];
  for (let o = 0; o < g; o++) {
    let c = 0;
    for (let f = 0; f < R && o * R + f < d.length; f++)
      c += d[o * R + f];
    b.push(c / R);
  }
  return b;
}, yr = (d, v, w, E, g, R) => {
  const b = v.height / 2, o = v.getContext("2d");
  o && (o.clearRect(0, 0, v.width, v.height), g !== "transparent" && (o.fillStyle = g, o.fillRect(0, 0, v.width, v.height)), d.forEach((c, f) => {
    o.fillStyle = R;
    const n = f * (w + E), u = b - c / 2, p = w, T = c || 1;
    o.beginPath(), o.roundRect ? (o.roundRect(n, u, p, T, 50), o.fill()) : o.fillRect(n, u, p, T);
  }));
}, br = ({
  mediaRecorder: d,
  barWidth: v = 2,
  gap: w = 1,
  backgroundColor: E = "transparent",
  barColor: g = "rgb(160, 198, 255)",
  fftSize: R = 1024,
  maxDecibels: b = -10,
  minDecibels: o = -90,
  smoothingTimeConstant: c = 0.4
}) => {
  const [f] = J(() => new AudioContext()), [n, u] = J(), p = ae(null);
  G(() => {
    if (!d.stream)
      return;
    const y = f.createAnalyser();
    u(y), y.fftSize = R, y.minDecibels = o, y.maxDecibels = b, y.smoothingTimeConstant = c, f.createMediaStreamSource(d.stream).connect(y);
  }, [d.stream]), G(() => {
    n && d.state === "recording" && T();
  }, [n, d.state]);
  const T = lr(() => {
    if (!n)
      return;
    const y = new Uint8Array(n == null ? void 0 : n.frequencyBinCount);
    d.state === "recording" ? (n == null || n.getByteFrequencyData(y), P(y), requestAnimationFrame(T)) : d.state === "paused" ? P(y) : d.state === "inactive" && f.state !== "closed" && f.close();
  }, [n, f.state]), P = (y) => {
    if (!p.current)
      return;
    const S = gr(
      y,
      p.current.width,
      v,
      w
    );
    yr(
      S,
      p.current,
      v,
      w,
      E,
      g
    );
  }, A = ae(null);
  return dr(() => {
    if (!A.current)
      return;
    const y = new ResizeObserver((S) => {
      for (const h of S)
        p.current && (p.current.width = h.contentRect.width, p.current.height = h.contentRect.height);
    });
    return y.observe(A.current), () => {
      y.disconnect();
    };
  }, []), /* @__PURE__ */ oe.jsx("div", { ref: A, style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ oe.jsx("canvas", { ref: p }) });
}, Rr = (d, v, w, E, g) => {
  const R = d.getChannelData(0), b = w / (E + g), o = Math.floor(R.length / b), c = v / 2;
  let f = [], n = 0;
  for (let u = 0; u < b; u++) {
    const p = [];
    let T = 0;
    const P = [];
    let A = 0;
    for (let O = 0; O < o && u * o + O < d.length; O++) {
      const j = R[u * o + O];
      j <= 0 && (p.push(j), T++), j > 0 && (P.push(j), A++);
    }
    const y = p.reduce((O, j) => O + j, 0) / T, h = { max: P.reduce((O, j) => O + j, 0) / A, min: y };
    h.max > n && (n = h.max), Math.abs(h.min) > n && (n = Math.abs(h.min)), f.push(h);
  }
  if (c * 0.8 > n * c) {
    const u = c * 0.8 / n;
    f = f.map((p) => ({
      max: p.max * u,
      min: p.min * u
    }));
  }
  return f;
}, ne = (d, v, w, E, g, R, b, o = 0, c = 1) => {
  const f = v.height / 2, n = v.getContext("2d");
  if (!n)
    return;
  n.clearRect(0, 0, v.width, v.height), g !== "transparent" && (n.fillStyle = g, n.fillRect(0, 0, v.width, v.height));
  const u = (o || 0) / c;
  d.forEach((p, T) => {
    const P = T / d.length, A = u > P;
    n.fillStyle = A && b ? b : R;
    const y = T * (w + E), S = f + p.min, h = w, O = f + p.max - S;
    n.beginPath(), n.roundRect ? (n.roundRect(y, S, h, O, 50), n.fill()) : n.fillRect(y, S, h, O);
  });
}, Er = vr(
  ({
    blob: d,
    width: v,
    height: w,
    barWidth: E = 2,
    gap: g = 1,
    currentTime: R,
    style: b,
    backgroundColor: o = "transparent",
    barColor: c = "rgb(184, 184, 184)",
    barPlayedColor: f = "rgb(160, 198, 255)"
  }, n) => {
    const u = ae(null), [p, T] = J([]), [P, A] = J(0);
    return pr(
      n,
      () => u.current,
      []
    ), G(() => {
      (async () => {
        if (!u.current)
          return;
        if (!d) {
          const O = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ne(
            O,
            u.current,
            E,
            g,
            o,
            c,
            f
          );
          return;
        }
        const S = await d.arrayBuffer();
        await new AudioContext().decodeAudioData(S, (O) => {
          if (!u.current)
            return;
          A(O.duration);
          const j = Rr(
            O,
            w,
            v,
            E,
            g
          );
          T(j), ne(
            j,
            u.current,
            E,
            g,
            o,
            c,
            f
          );
        });
      })();
    }, [d, u.current]), G(() => {
      u.current && ne(
        p,
        u.current,
        E,
        g,
        o,
        c,
        f,
        R,
        P
      );
    }, [R, P]), /* @__PURE__ */ oe.jsx(
      "canvas",
      {
        ref: u,
        width: v,
        height: w,
        style: {
          ...b
        }
      }
    );
  }
);
Er.displayName = "AudioVisualizer";
export {
  Er as AudioVisualizer,
  br as LiveAudioVisualizer
};
