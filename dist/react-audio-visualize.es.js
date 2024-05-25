import Ae, { useState as J, useRef as De, useEffect as G, useCallback as fr, forwardRef as dr, useImperativeHandle as vr } from "react";
var ae = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function pr() {
  if (Pe)
    return L;
  Pe = 1;
  var f = Ae, d = Symbol.for("react.element"), T = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(u, c, v) {
    var i, a = {}, g = null, b = null;
    v !== void 0 && (g = "" + v), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (i in c)
      y.call(c, i) && !E.hasOwnProperty(i) && (a[i] = c[i]);
    if (u && u.defaultProps)
      for (i in c = u.defaultProps, c)
        a[i] === void 0 && (a[i] = c[i]);
    return { $$typeof: d, type: u, key: g, ref: b, props: a, _owner: h.current };
  }
  return L.Fragment = T, L.jsx = _, L.jsxs = _, L;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function mr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Ae, d = Symbol.for("react.element"), T = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), P = Symbol.iterator, D = "@@iterator";
    function x(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[D];
      return typeof r == "function" ? r : null;
    }
    var C = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        S("error", e, t);
      }
    }
    function S(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var p = t.map(function(s) {
          return String(s);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var j = !1, Fe = !1, Ie = !1, $e = !1, Ye = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === E || Ye || e === h || e === v || e === i || $e || e === b || j || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === a || e.$$typeof === _ || e.$$typeof === u || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case T:
          return "Portal";
        case E:
          return "Profiler";
        case h:
          return "StrictMode";
        case v:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var r = e;
            return oe(r) + ".Consumer";
          case _:
            var t = e;
            return oe(t._context) + ".Provider";
          case c:
            return Ve(e, e.render, "ForwardRef");
          case a:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case g: {
            var l = e, p = l._payload, s = l._init;
            try {
              return k(s(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, M = 0, ue, se, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Le() {
      {
        if (M === 0) {
          ue = console.log, se = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
    function Ne() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ue
            }),
            info: I({}, e, {
              value: se
            }),
            warn: I({}, e, {
              value: ce
            }),
            error: I({}, e, {
              value: le
            }),
            group: I({}, e, {
              value: fe
            }),
            groupCollapsed: I({}, e, {
              value: de
            }),
            groupEnd: I({}, e, {
              value: ve
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = C.ReactCurrentDispatcher, K;
    function W(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
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
    function me(e, r) {
      if (!e || X)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = H.current, H.current = null, Le();
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
              n = F;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (F) {
              n = F;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            n = F;
          }
          e();
        }
      } catch (F) {
        if (F && n && typeof F.stack == "string") {
          for (var o = F.stack.split(`
`), O = n.stack.split(`
`), R = o.length - 1, w = O.length - 1; R >= 1 && w >= 0 && o[R] !== O[w]; )
            w--;
          for (; R >= 1 && w >= 0; R--, w--)
            if (o[R] !== O[w]) {
              if (R !== 1 || w !== 1)
                do
                  if (R--, w--, w < 0 || o[R] !== O[w]) {
                    var A = `
` + o[R].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, A), A;
                  }
                while (R >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = p, Ne(), Error.prepareStackTrace = l;
      }
      var Y = e ? e.displayName || e.name : "", Oe = Y ? W(Y) : "";
      return typeof e == "function" && B.set(e, Oe), Oe;
    }
    function Be(e, r, t) {
      return me(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ue(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case v:
          return W("Suspense");
        case i:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Be(e.render);
          case a:
            return U(e.type, r, t);
          case g: {
            var n = e, l = n._payload, p = n._init;
            try {
              return U(p(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, he = {}, ge = C.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, l) {
      {
        var p = Function.call.bind(z);
        for (var s in e)
          if (p(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var O = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              o = R;
            }
            o && !(o instanceof Error) && (q(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), q(null)), o instanceof Error && !(o.message in he) && (he[o.message] = !0, q(l), m("Failed %s type: %s", t, o.message), q(null));
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
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ye(e);
    }
    var V = C.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e, Q;
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
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var t = k(V.current.type);
        Q[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(V.current.type), e.ref), Q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Re || (Re = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, l, p, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function tr(e, r, t, n, l) {
      {
        var p, s = {}, o = null, O = null;
        t !== void 0 && (Ee(t), o = "" + t), Xe(r) && (Ee(r.key), o = "" + r.key), Ke(r) && (O = r.ref, Ze(r, l));
        for (p in r)
          z.call(r, p) && !He.hasOwnProperty(p) && (s[p] = r[p]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (p in R)
            s[p] === void 0 && (s[p] = R[p]);
        }
        if (o || O) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Qe(s, w), O && er(s, w);
        }
        return rr(e, o, O, l, n, V.current, s);
      }
    }
    var ee = C.ReactCurrentOwner, be = C.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function xe() {
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
    var we = {};
    function ar(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + k(e._owner.type) + "."), $(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Te(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = x(e);
          if (typeof l == "function" && l !== e.entries)
            for (var p = l.call(e), s; !(s = p.next()).done; )
              te(s.value) && Te(s.value, r);
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
        r.$$typeof === a))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var l = k(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Ce(e, r, t, n, l, p) {
      {
        var s = Me(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = nr(l);
          O ? o += O : o += xe();
          var R;
          e === null ? R = "null" : Z(e) ? R = "array" : e !== void 0 && e.$$typeof === d ? (R = "<" + (k(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, o);
        }
        var w = tr(e, r, t, l, p);
        if (w == null)
          return w;
        if (s) {
          var A = r.children;
          if (A !== void 0)
            if (n)
              if (Z(A)) {
                for (var Y = 0; Y < A.length; Y++)
                  Se(A[Y], e);
                Object.freeze && Object.freeze(A);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(A, e);
        }
        return e === y ? or(w) : ir(w), w;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = sr, lr = ur;
    N.Fragment = y, N.jsx = cr, N.jsxs = lr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ae.exports = pr() : ae.exports = mr();
var ke = ae.exports;
const hr = (f, d, T, y) => {
  let h = d / (T + y), E = Math.floor(f.length / h);
  h > f.length && (h = f.length, E = 1);
  const _ = [];
  for (let u = 0; u < h; u++) {
    let c = 0;
    for (let v = 0; v < E && u * E + v < f.length; v++)
      c += f[u * E + v];
    _.push(c / E);
  }
  return _;
}, gr = (f, d, T, y, h, E) => {
  const _ = d.height / 2, u = d.getContext("2d");
  u && (u.clearRect(0, 0, d.width, d.height), h !== "transparent" && (u.fillStyle = h, u.fillRect(0, 0, d.width, d.height)), f.forEach((c, v) => {
    u.fillStyle = E;
    const i = v * (T + y), a = _ - c / 2, g = T, b = c || 1;
    u.beginPath(), u.roundRect ? (u.roundRect(i, a, g, b, 50), u.fill()) : u.fillRect(i, a, g, b);
  }));
};
const _r = ({
  mediaRecorder: f,
  height: d = "100%",
  barWidth: T = 2,
  gap: y = 1,
  backgroundColor: h = "transparent",
  barColor: E = "rgb(160, 198, 255)",
  fftSize: _ = 1024,
  maxDecibels: u = -10,
  minDecibels: c = -90,
  smoothingTimeConstant: v = 0.4
}) => {
  const [i] = J(() => new AudioContext()), [a, g] = J(), b = De(null);
  G(() => {
    if (!f.stream)
      return;
    const x = i.createAnalyser();
    g(x), x.fftSize = _, x.minDecibels = c, x.maxDecibels = u, x.smoothingTimeConstant = v, i.createMediaStreamSource(f.stream).connect(x);
  }, [f.stream]), G(() => {
    a && f.state === "recording" && P();
  }, [a, f.state]);
  const P = fr(() => {
    if (!a)
      return;
    const x = new Uint8Array(a == null ? void 0 : a.frequencyBinCount);
    f.state === "recording" ? (a == null || a.getByteFrequencyData(x), D(x), requestAnimationFrame(P)) : f.state === "paused" ? D(x) : f.state === "inactive" && i.state !== "closed" && i.close();
  }, [a, i.state]), D = (x) => {
    if (!b.current)
      return;
    const C = hr(
      x,
      b.current.width,
      T,
      y
    );
    gr(
      C,
      b.current,
      T,
      y,
      h,
      E
    );
  };
  return /* @__PURE__ */ ke.jsx(
    "canvas",
    {
      ref: b,
      height: d
    }
  );
}, yr = (f, d, T, y, h) => {
  const E = f.getChannelData(0), _ = T / (y + h), u = Math.floor(E.length / _), c = d / 2;
  let v = [], i = 0;
  for (let a = 0; a < _; a++) {
    const g = [];
    let b = 0;
    const P = [];
    let D = 0;
    for (let S = 0; S < u && a * u + S < f.length; S++) {
      const j = E[a * u + S];
      j <= 0 && (g.push(j), b++), j > 0 && (P.push(j), D++);
    }
    const x = g.reduce((S, j) => S + j, 0) / b, m = { max: P.reduce((S, j) => S + j, 0) / D, min: x };
    m.max > i && (i = m.max), Math.abs(m.min) > i && (i = Math.abs(m.min)), v.push(m);
  }
  if (c * 0.8 > i * c) {
    const a = c * 0.8 / i;
    v = v.map((g) => ({
      max: g.max * a,
      min: g.min * a
    }));
  }
  return v;
}, ne = (f, d, T, y, h, E, _, u = 0, c = 1) => {
  const v = d.height / 2, i = d.getContext("2d");
  if (!i)
    return;
  i.clearRect(0, 0, d.width, d.height), h !== "transparent" && (i.fillStyle = h, i.fillRect(0, 0, d.width, d.height));
  const a = (u || 0) / c;
  f.forEach((g, b) => {
    const P = b / f.length, D = a > P;
    i.fillStyle = D && _ ? _ : E;
    const x = b * (T + y), C = v + g.min, m = T, S = v + g.max - C;
    i.beginPath(), i.roundRect ? (i.roundRect(x, C, m, S, 50), i.fill()) : i.fillRect(x, C, m, S);
  });
}, Er = dr(
  ({
    blob: f,
    width: d,
    height: T,
    barWidth: y = 2,
    gap: h = 1,
    currentTime: E,
    style: _,
    backgroundColor: u = "transparent",
    barColor: c = "rgb(184, 184, 184)",
    barPlayedColor: v = "rgb(160, 198, 255)"
  }, i) => {
    const a = De(null), [g, b] = J([]), [P, D] = J(0);
    return vr(
      i,
      () => a.current,
      []
    ), G(() => {
      (async () => {
        if (!a.current)
          return;
        if (!f) {
          const S = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ne(
            S,
            a.current,
            y,
            h,
            u,
            c,
            v
          );
          return;
        }
        const C = await f.arrayBuffer();
        await new AudioContext().decodeAudioData(C, (S) => {
          if (!a.current)
            return;
          D(S.duration);
          const j = yr(
            S,
            T,
            d,
            y,
            h
          );
          b(j), ne(
            j,
            a.current,
            y,
            h,
            u,
            c,
            v
          );
        });
      })();
    }, [f, a.current]), G(() => {
      a.current && ne(
        g,
        a.current,
        y,
        h,
        u,
        c,
        v,
        E,
        P
      );
    }, [E, P]), /* @__PURE__ */ ke.jsx(
      "canvas",
      {
        ref: a,
        width: d,
        height: T,
        style: {
          ..._
        }
      }
    );
  }
);
Er.displayName = "AudioVisualizer";
export {
  Er as AudioVisualizer,
  _r as LiveAudioVisualizer
};
