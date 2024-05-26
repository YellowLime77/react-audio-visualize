import Ae, { useState as J, useRef as De, useEffect as G, useCallback as fr, forwardRef as dr, useImperativeHandle as vr } from "react";
var ae = { exports: {} }, V = {};
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
    return V;
  Pe = 1;
  var d = Ae, v = Symbol.for("react.element"), w = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, g = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(o, c, l) {
    var n, u = {}, h = null, T = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (T = c.ref);
    for (n in c)
      R.call(c, n) && !y.hasOwnProperty(n) && (u[n] = c[n]);
    if (o && o.defaultProps)
      for (n in c = o.defaultProps, c)
        u[n] === void 0 && (u[n] = c[n]);
    return { $$typeof: v, type: o, key: h, ref: T, props: u, _owner: g.current };
  }
  return V.Fragment = w, V.jsx = b, V.jsxs = b, V;
}
var L = {};
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
function hr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Ae, v = Symbol.for("react.element"), w = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), O = Symbol.iterator, E = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[E];
      return typeof r == "function" ? r : null;
    }
    var P = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        S("error", e, t);
      }
    }
    function S(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var p = t.map(function(s) {
          return String(s);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var j = !1, Fe = !1, Ie = !1, $e = !1, Ye = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === y || Ye || e === g || e === l || e === n || $e || e === T || j || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === u || e.$$typeof === b || e.$$typeof === o || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
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
        case R:
          return "Fragment";
        case w:
          return "Portal";
        case y:
          return "Profiler";
        case g:
          return "StrictMode";
        case l:
          return "Suspense";
        case n:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return oe(r) + ".Consumer";
          case b:
            var t = e;
            return oe(t._context) + ".Provider";
          case c:
            return Ne(e, e.render, "ForwardRef");
          case u:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case h: {
            var f = e, p = f._payload, s = f._init;
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
    function Ve() {
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
    function Le() {
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
    var H = P.ReactCurrentDispatcher, K;
    function W(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
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
    function he(e, r) {
      if (!e || X)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      X = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = H.current, H.current = null, Ve();
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
                    var A = `
` + i[_].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, A), A;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = p, Le(), Error.prepareStackTrace = f;
      }
      var Y = e ? e.displayName || e.name : "", Oe = Y ? W(Y) : "";
      return typeof e == "function" && B.set(e, Oe), Oe;
    }
    function Be(e, r, t) {
      return he(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ue(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case l:
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
          case h: {
            var a = e, f = a._payload, p = a._init;
            try {
              return U(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, me = {}, ge = P.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function ze(e, r, t, a, f) {
      {
        var p = Function.call.bind(z);
        for (var s in e)
          if (p(e, s)) {
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
            i && !(i instanceof Error) && (q(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), q(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, q(f), m("Failed %s type: %s", t, i.message), q(null));
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
    function Re(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ye(e);
    }
    var N = P.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, _e, Q;
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
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = k(N.current.type);
        Q[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(N.current.type), e.ref), Q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
    var rr = function(e, r, t, a, f, p, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: p
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
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function tr(e, r, t, a, f) {
      {
        var p, s = {}, i = null, C = null;
        t !== void 0 && (Re(t), i = "" + t), Xe(r) && (Re(r.key), i = "" + r.key), Ke(r) && (C = r.ref, Ze(r, f));
        for (p in r)
          z.call(r, p) && !He.hasOwnProperty(p) && (s[p] = r[p]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (p in _)
            s[p] === void 0 && (s[p] = _[p]);
        }
        if (i || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Qe(s, x), C && er(s, x);
        }
        return rr(e, i, C, f, a, N.current, s);
      }
    }
    var ee = P.ReactCurrentOwner, be = P.ReactDebugCurrentFrame;
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
      return typeof e == "object" && e !== null && e.$$typeof === v;
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
        var a = "";
        e && e._owner && e._owner !== ee.current && (a = " It was passed a child from " + k(e._owner.type) + "."), $(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), $(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            te(a) && Te(a, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = D(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), s; !(s = p.next()).done; )
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
        r.$$typeof === u))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = k(r);
          ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var f = k(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            $(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Ce(e, r, t, a, f, p) {
      {
        var s = Me(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = nr(f);
          C ? i += C : i += xe();
          var _;
          e === null ? _ = "null" : Z(e) ? _ = "array" : e !== void 0 && e.$$typeof === v ? (_ = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, i);
        }
        var x = tr(e, r, t, f, p);
        if (x == null)
          return x;
        if (s) {
          var A = r.children;
          if (A !== void 0)
            if (a)
              if (Z(A)) {
                for (var Y = 0; Y < A.length; Y++)
                  Se(A[Y], e);
                Object.freeze && Object.freeze(A);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(A, e);
        }
        return e === R ? or(x) : ir(x), x;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = sr, lr = ur;
    L.Fragment = R, L.jsx = cr, L.jsxs = lr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ae.exports = pr() : ae.exports = hr();
var ke = ae.exports;
const mr = (d, v, w, R) => {
  let g = v / (w + R), y = Math.floor(d.length / g);
  g > d.length && (g = d.length, y = 1);
  const b = [];
  for (let o = 0; o < g; o++) {
    let c = 0;
    for (let l = 0; l < y && o * y + l < d.length; l++)
      c += d[o * y + l];
    b.push(c / y);
  }
  return b;
}, gr = (d, v, w, R, g, y) => {
  const b = v.height / 2, o = v.getContext("2d");
  o && (o.clearRect(0, 0, v.width, v.height), g !== "transparent" && (o.fillStyle = g, o.fillRect(0, 0, v.width, v.height)), d.forEach((c, l) => {
    o.fillStyle = y;
    const n = l * (w + R), u = b - c / 2, h = w, T = c || 1;
    o.beginPath(), o.roundRect ? (o.roundRect(n, u, h, T, 50), o.fill()) : o.fillRect(n, u, h, T);
  }));
}, _r = ({
  mediaRecorder: d,
  barWidth: v = 2,
  gap: w = 1,
  backgroundColor: R = "transparent",
  barColor: g = "rgb(160, 198, 255)",
  fftSize: y = 1024,
  maxDecibels: b = -10,
  minDecibels: o = -90,
  smoothingTimeConstant: c = 0.4
}) => {
  const [l] = J(() => new AudioContext()), [n, u] = J(), h = De(null);
  G(() => {
    if (!d.stream)
      return;
    const E = l.createAnalyser();
    u(E), E.fftSize = y, E.minDecibels = o, E.maxDecibels = b, E.smoothingTimeConstant = c, l.createMediaStreamSource(d.stream).connect(E);
  }, [d.stream]), G(() => {
    n && d.state === "recording" && T();
  }, [n, d.state]);
  const T = fr(() => {
    if (!n)
      return;
    const E = new Uint8Array(n == null ? void 0 : n.frequencyBinCount);
    d.state === "recording" ? (n == null || n.getByteFrequencyData(E), O(E), requestAnimationFrame(T)) : d.state === "paused" ? O(E) : d.state === "inactive" && l.state !== "closed" && l.close();
  }, [n, l.state]), O = (E) => {
    if (!h.current)
      return;
    const D = mr(
      E,
      h.current.width,
      v,
      w
    );
    gr(
      D,
      h.current,
      v,
      w,
      R,
      g
    );
  };
  return /* @__PURE__ */ ke.jsx(
    "canvas",
    {
      ref: h,
      style: {
        width: "100%",
        height: "100%",
        aspectRatio: "unset"
      }
    }
  );
}, yr = (d, v, w, R, g) => {
  const y = d.getChannelData(0), b = w / (R + g), o = Math.floor(y.length / b), c = v / 2;
  let l = [], n = 0;
  for (let u = 0; u < b; u++) {
    const h = [];
    let T = 0;
    const O = [];
    let E = 0;
    for (let S = 0; S < o && u * o + S < d.length; S++) {
      const j = y[u * o + S];
      j <= 0 && (h.push(j), T++), j > 0 && (O.push(j), E++);
    }
    const D = h.reduce((S, j) => S + j, 0) / T, m = { max: O.reduce((S, j) => S + j, 0) / E, min: D };
    m.max > n && (n = m.max), Math.abs(m.min) > n && (n = Math.abs(m.min)), l.push(m);
  }
  if (c * 0.8 > n * c) {
    const u = c * 0.8 / n;
    l = l.map((h) => ({
      max: h.max * u,
      min: h.min * u
    }));
  }
  return l;
}, ne = (d, v, w, R, g, y, b, o = 0, c = 1) => {
  const l = v.height / 2, n = v.getContext("2d");
  if (!n)
    return;
  n.clearRect(0, 0, v.width, v.height), g !== "transparent" && (n.fillStyle = g, n.fillRect(0, 0, v.width, v.height));
  const u = (o || 0) / c;
  d.forEach((h, T) => {
    const O = T / d.length, E = u > O;
    n.fillStyle = E && b ? b : y;
    const D = T * (w + R), P = l + h.min, m = w, S = l + h.max - P;
    n.beginPath(), n.roundRect ? (n.roundRect(D, P, m, S, 50), n.fill()) : n.fillRect(D, P, m, S);
  });
}, Rr = dr(
  ({
    blob: d,
    width: v,
    height: w,
    barWidth: R = 2,
    gap: g = 1,
    currentTime: y,
    style: b,
    backgroundColor: o = "transparent",
    barColor: c = "rgb(184, 184, 184)",
    barPlayedColor: l = "rgb(160, 198, 255)"
  }, n) => {
    const u = De(null), [h, T] = J([]), [O, E] = J(0);
    return vr(
      n,
      () => u.current,
      []
    ), G(() => {
      (async () => {
        if (!u.current)
          return;
        if (!d) {
          const S = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ne(
            S,
            u.current,
            R,
            g,
            o,
            c,
            l
          );
          return;
        }
        const P = await d.arrayBuffer();
        await new AudioContext().decodeAudioData(P, (S) => {
          if (!u.current)
            return;
          E(S.duration);
          const j = yr(
            S,
            w,
            v,
            R,
            g
          );
          T(j), ne(
            j,
            u.current,
            R,
            g,
            o,
            c,
            l
          );
        });
      })();
    }, [d, u.current]), G(() => {
      u.current && ne(
        h,
        u.current,
        R,
        g,
        o,
        c,
        l,
        y,
        O
      );
    }, [y, O]), /* @__PURE__ */ ke.jsx(
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
Rr.displayName = "AudioVisualizer";
export {
  Rr as AudioVisualizer,
  _r as LiveAudioVisualizer
};
