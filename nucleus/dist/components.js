
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncIterator = function (iterable) {
  if (typeof Symbol === "function") {
    if (Symbol.asyncIterator) {
      var method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      return iterable[Symbol.iterator]();
    }
  }

  throw new TypeError("Object is not async iterable");
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var asyncGeneratorDelegate = function (inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  if (typeof Symbol === "function" && Symbol.iterator) {
    iter[Symbol.iterator] = function () {
      return this;
    };
  }

  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }

    return pump("next", value);
  };

  if (typeof inner.throw === "function") {
    iter.throw = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }

      return pump("throw", value);
    };
  }

  if (typeof inner.return === "function") {
    iter.return = function (value) {
      return pump("return", value);
    };
  }

  return iter;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }

  return obj;
};

var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};

var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var selfGlobal = typeof global === "undefined" ? self : global;

var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var babelHelpers = /*#__PURE__*/Object.freeze({
  jsx: jsx,
  asyncIterator: asyncIterator,
  asyncGenerator: asyncGenerator,
  asyncGeneratorDelegate: asyncGeneratorDelegate,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  typeof: _typeof,
  extends: _extends,
  instanceof: _instanceof
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self;
}() || Function("return this")());

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var node = start;
    while (node !== end) {
        var n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
var removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var node = startNode;
    while (node !== endNode) {
        var n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
//# sourceMappingURL=dom.js.map

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
var nothing = {};
//# sourceMappingURL=part.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
var nodeMarker = '<!--' + marker + '-->';
var markerRegex = new RegExp(marker + '|' + nodeMarker);
/**
 * Suffix appended to all bound attribute names.
 */
var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
var Template = function Template(result, element) {
    var _this = this;

    classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];
    var _prepareTemplate = function _prepareTemplate(template) {
        var content = template.content;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        var lastPartIndex = 0;
        while (walker.nextNode()) {
            index++;
            var node = walker.currentNode;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        var attributes = node.attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondance between part index and attribute index.
                        var count = 0;
                        for (var i = 0; i < attributes.length; i++) {
                            if (attributes[i].value.indexOf(marker) >= 0) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            var stringForPart = result.strings[partIndex];
                            // Find the attribute name
                            var name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            var attributeValue = node.getAttribute(attributeLookupName);
                            var strings = attributeValue.split(markerRegex);
                            _this.parts.push({ type: 'attribute', index: index, name: name, strings: strings });
                            node.removeAttribute(attributeLookupName);
                            partIndex += strings.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        _prepareTemplate(node);
                    }
                } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    var data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        var parent = node.parentNode;
                        var _strings = data.split(markerRegex);
                        var lastIndex = _strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (var _i = 0; _i < lastIndex; _i++) {
                            parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);
                            _this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (_strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        } else {
                            node.data = _strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                } else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        var _parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            _parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        _this.parts.push({ type: 'node', index: index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        } else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    } else {
                        var _i2 = -1;
                        while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            _this.parts.push({ type: 'node', index: -1 });
                        }
                    }
                }
        }
    };
    _prepareTemplate(element);
    // Remove text binding nodes after the walk to not disturb the TreeWalker
    for (var _iterator = nodesToRemove, _isArray = Array.isArray(_iterator), _i3 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i3 >= _iterator.length) break;
            _ref = _iterator[_i3++];
        } else {
            _i3 = _iterator.next();
            if (_i3.done) break;
            _ref = _i3.value;
        }

        var n = _ref;

        n.parentNode.removeChild(n);
    }
};
var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
};
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
var createMarker = function createMarker() {
    return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
var TemplateInstance = function () {
    function TemplateInstance(template, processor, options) {
        classCallCheck(this, TemplateInstance);

        this._parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }

    TemplateInstance.prototype.update = function update(values) {
        var i = 0;
        for (var _iterator = this._parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var part = _ref;

            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (var _iterator2 = this._parts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }

            var _part = _ref2;

            if (_part !== undefined) {
                _part.commit();
            }
        }
    };

    TemplateInstance.prototype._clone = function _clone() {
        var _this = this;

        // When using the Custom Elements polyfill, clone the node, rather than
        // importing it, to keep the fragment in the template's document. This
        // leaves the fragment inert so custom elements won't upgrade and
        // potentially modify their contents by creating a polyfilled ShadowRoot
        // while we traverse the tree.
        var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        var parts = this.template.parts;
        var partIndex = 0;
        var nodeIndex = 0;
        var _prepareInstance = function _prepareInstance(fragment) {
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            var walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            var node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length && node !== null) {
                var part = parts[partIndex];
                // Consecutive Parts may have the same node index, in the case of
                // multiple bound attributes on an element. So each iteration we either
                // increment the nodeIndex, if we aren't on a node with a part, or the
                // partIndex if we are. By not incrementing the nodeIndex when we find a
                // part, we allow for the next part to be associated with the current
                // node if neccessasry.
                if (!isTemplatePartActive(part)) {
                    _this._parts.push(undefined);
                    partIndex++;
                } else if (nodeIndex === part.index) {
                    if (part.type === 'node') {
                        var _part2 = _this.processor.handleTextExpression(_this.options);
                        _part2.insertAfterNode(node.previousSibling);
                        _this._parts.push(_part2);
                    } else {
                        var _parts;

                        (_parts = _this._parts).push.apply(_parts, _this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options));
                    }
                    partIndex++;
                } else {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        _prepareInstance(node.content);
                    }
                    node = walker.nextNode();
                }
            }
        };
        _prepareInstance(fragment);
        if (isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    };

    return TemplateInstance;
}();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult = function () {
    function TemplateResult(strings, values, type, processor) {
        classCallCheck(this, TemplateResult);

        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    TemplateResult.prototype.getHTML = function getHTML() {
        var endIndex = this.strings.length - 1;
        var html = '';
        for (var i = 0; i < endIndex; i++) {
            var s = this.strings[i];
            // This exec() call does two things:
            // 1) Appends a suffix to the bound attribute name to opt out of special
            // attribute value parsing that IE11 and Edge do, like for style and
            // many SVG attributes. The Template class also appends the same suffix
            // when looking up attributes to create Parts.
            // 2) Adds an unquoted-attribute-safe marker for the first expression in
            // an attribute. Subsequent attribute expressions will use node markers,
            // and this is safe since attributes with multiple expressions are
            // guaranteed to be quoted.
            var match = lastAttributeNameRegex.exec(s);
            if (match) {
                // We're starting a new bound attribute.
                // Add the safe attribute suffix, and use unquoted-attribute-safe
                // marker.
                html += s.substr(0, match.index) + match[1] + match[2] + boundAttributeSuffix + match[3] + marker;
            } else {
                // We're either in a bound node, or trailing bound attribute.
                // Either way, nodeMarker is safe to use.
                html += s + nodeMarker;
            }
        }
        return html + this.strings[endIndex];
    };

    TemplateResult.prototype.getTemplateElement = function getTemplateElement() {
        var template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    };

    return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
var SVGTemplateResult = function (_TemplateResult) {
    inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
        classCallCheck(this, SVGTemplateResult);
        return possibleConstructorReturn(this, _TemplateResult.apply(this, arguments));
    }

    SVGTemplateResult.prototype.getHTML = function getHTML() {
        return '<svg>' + _TemplateResult.prototype.getHTML.call(this) + '</svg>';
    };

    SVGTemplateResult.prototype.getTemplateElement = function getTemplateElement() {
        var template = _TemplateResult.prototype.getTemplateElement.call(this);
        var content = template.content;
        var svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
    };

    return SVGTemplateResult;
}(TemplateResult);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var isPrimitive = function isPrimitive(value) {
    return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */
var AttributeCommitter = function () {
    function AttributeCommitter(element, name, strings) {
        classCallCheck(this, AttributeCommitter);

        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (var i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    AttributeCommitter.prototype._createPart = function _createPart() {
        return new AttributePart(this);
    };

    AttributeCommitter.prototype._getValue = function _getValue() {
        var strings = this.strings;
        var l = strings.length - 1;
        var text = '';
        for (var i = 0; i < l; i++) {
            text += strings[i];
            var part = this.parts[i];
            if (part !== undefined) {
                var v = part.value;
                if (v != null && (Array.isArray(v) ||
                // tslint:disable-next-line:no-any
                typeof v !== 'string' && v[Symbol.iterator])) {
                    for (var _iterator = v, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }

                        var t = _ref;

                        text += typeof t === 'string' ? t : String(t);
                    }
                } else {
                    text += typeof v === 'string' ? v : String(v);
                }
            }
        }
        text += strings[l];
        return text;
    };

    AttributeCommitter.prototype.commit = function commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    };

    return AttributeCommitter;
}();
var AttributePart = function () {
    function AttributePart(comitter) {
        classCallCheck(this, AttributePart);

        this.value = undefined;
        this.committer = comitter;
    }

    AttributePart.prototype.setValue = function setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!isDirective(value)) {
                this.committer.dirty = true;
            }
        }
    };

    AttributePart.prototype.commit = function commit() {
        while (isDirective(this.value)) {
            var directive = this.value;
            this.value = noChange;
            directive(this);
        }
        if (this.value === noChange) {
            return;
        }
        this.committer.commit();
    };

    return AttributePart;
}();
var NodePart = function () {
    function NodePart(options) {
        classCallCheck(this, NodePart);

        this.value = undefined;
        this._pendingValue = undefined;
        this.options = options;
    }
    /**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    NodePart.prototype.appendInto = function appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
    };
    /**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    NodePart.prototype.insertAfterNode = function insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    };
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    NodePart.prototype.appendIntoPart = function appendIntoPart(part) {
        part._insert(this.startNode = createMarker());
        part._insert(this.endNode = createMarker());
    };
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    NodePart.prototype.insertAfterPart = function insertAfterPart(ref) {
        ref._insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    };

    NodePart.prototype.setValue = function setValue(value) {
        this._pendingValue = value;
    };

    NodePart.prototype.commit = function commit() {
        while (isDirective(this._pendingValue)) {
            var directive = this._pendingValue;
            this._pendingValue = noChange;
            directive(this);
        }
        var value = this._pendingValue;
        if (value === noChange) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this._commitText(value);
            }
        } else if (value instanceof TemplateResult) {
            this._commitTemplateResult(value);
        } else if (value instanceof Node) {
            this._commitNode(value);
        } else if (Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        value[Symbol.iterator]) {
            this._commitIterable(value);
        } else if (value === nothing) {
            this.value = nothing;
            this.clear();
        } else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    };

    NodePart.prototype._insert = function _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    };

    NodePart.prototype._commitNode = function _commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this._insert(value);
        this.value = value;
    };

    NodePart.prototype._commitText = function _commitText(value) {
        var node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        if (node === this.endNode.previousSibling && node.nodeType === 3 /* Node.TEXT_NODE */) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.data = value;
            } else {
            this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
        }
        this.value = value;
    };

    NodePart.prototype._commitTemplateResult = function _commitTemplateResult(value) {
        var template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance && this.value.template === template) {
            this.value.update(value.values);
        } else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            var instance = new TemplateInstance(template, value.processor, this.options);
            var fragment = instance._clone();
            instance.update(value.values);
            this._commitNode(fragment);
            this.value = instance;
        }
    };

    NodePart.prototype._commitIterable = function _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        var itemParts = this.value;
        var partIndex = 0;
        var itemPart = void 0;
        for (var _iterator2 = value, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }

            var item = _ref2;

            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                } else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    };

    NodePart.prototype.clear = function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    };

    return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
var BooleanAttributePart = function () {
    function BooleanAttributePart(element, name, strings) {
        classCallCheck(this, BooleanAttributePart);

        this.value = undefined;
        this._pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }

    BooleanAttributePart.prototype.setValue = function setValue(value) {
        this._pendingValue = value;
    };

    BooleanAttributePart.prototype.commit = function commit() {
        while (isDirective(this._pendingValue)) {
            var directive = this._pendingValue;
            this._pendingValue = noChange;
            directive(this);
        }
        if (this._pendingValue === noChange) {
            return;
        }
        var value = !!this._pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            } else {
                this.element.removeAttribute(this.name);
            }
        }
        this.value = value;
        this._pendingValue = noChange;
    };

    return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
var PropertyCommitter = function (_AttributeCommitter) {
    inherits(PropertyCommitter, _AttributeCommitter);

    function PropertyCommitter(element, name, strings) {
        classCallCheck(this, PropertyCommitter);

        var _this = possibleConstructorReturn(this, _AttributeCommitter.call(this, element, name, strings));

        _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
        return _this;
    }

    PropertyCommitter.prototype._createPart = function _createPart() {
        return new PropertyPart(this);
    };

    PropertyCommitter.prototype._getValue = function _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return _AttributeCommitter.prototype._getValue.call(this);
    };

    PropertyCommitter.prototype.commit = function commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    };

    return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart = function (_AttributePart) {
    inherits(PropertyPart, _AttributePart);

    function PropertyPart() {
        classCallCheck(this, PropertyPart);
        return possibleConstructorReturn(this, _AttributePart.apply(this, arguments));
    }

    return PropertyPart;
}(AttributePart);
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
var eventOptionsSupported = false;
try {
    var options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
} catch (_e) {}
var EventPart = function () {
    function EventPart(element, eventName, eventContext) {
        var _this3 = this;

        classCallCheck(this, EventPart);

        this.value = undefined;
        this._pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this._boundHandleEvent = function (e) {
            return _this3.handleEvent(e);
        };
    }

    EventPart.prototype.setValue = function setValue(value) {
        this._pendingValue = value;
    };

    EventPart.prototype.commit = function commit() {
        while (isDirective(this._pendingValue)) {
            var directive = this._pendingValue;
            this._pendingValue = noChange;
            directive(this);
        }
        if (this._pendingValue === noChange) {
            return;
        }
        var newListener = this._pendingValue;
        var oldListener = this.value;
        var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
        }
        if (shouldAddListener) {
            this._options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
        }
        this.value = newListener;
        this._pendingValue = noChange;
    };

    EventPart.prototype.handleEvent = function handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        } else {
            this.value.handleEvent(event);
        }
    };

    return EventPart;
}();
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? { capture: o.capture, passive: o.passive, once: o.once } : o.capture);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Creates Parts when a template is instantiated.
 */
var DefaultTemplateProcessor = function () {
    function DefaultTemplateProcessor() {
        classCallCheck(this, DefaultTemplateProcessor);
    }

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    DefaultTemplateProcessor.prototype.handleAttributeExpressions = function handleAttributeExpressions(element, name, strings, options) {
        var prefix = name[0];
        if (prefix === '.') {
            var _comitter = new PropertyCommitter(element, name.slice(1), strings);
            return _comitter.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        var comitter = new AttributeCommitter(element, name, strings);
        return comitter.parts;
    };
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */


    DefaultTemplateProcessor.prototype.handleTextExpression = function handleTextExpression(options) {
        return new NodePart(options);
    };

    return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    var template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    var key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
var templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
var render = function render(result, container, options) {
  var part = parts.get(container);
  if (part === undefined) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({ templateFactory: templateFactory }, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};
//# sourceMappingURL=render.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
var html = function html(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
};
//# sourceMappingURL=lit-html.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
        parts = template.parts;

    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var part = parts[partIndex];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        var node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach(function (n) {
        return n.parentNode.removeChild(n);
    });
}
var countNodes = function countNodes(node) {
    var count = node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ ? 0 : 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var i = startIndex + 1; i < parts.length; i++) {
        var part = parts[i];
        if (isTemplatePartActive(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
        parts = template.parts;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.

    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        var walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// Get a key to lookup in `templateCaches`.
var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return type + '--' + scopeName;
};
var compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn('Incompatible ShadyCSS version detected.' + 'Please update to at least @webcomponents/webcomponentsjs@2.0.2 and' + '@webcomponents/shadycss@1.3.1.');
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
        var cacheKey = getTemplateCacheKey(result.type, scopeName);
        var templateCache = templateCaches.get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(cacheKey, templateCache);
        }
        var template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        var key = result.strings.join(marker);
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            var element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) {
                window.ShadyCSS.prepareTemplateDom(element, scopeName);
            }
            template = new Template(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    };
};
var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
        var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach(function (template) {
                var content = template.element.content;
                // IE 11 doesn't support the iterable param Set constructor

                var styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach(function (s) {
                    styles.add(s);
                });
                removeNodesFromTemplate(template, styles);
            });
        }
    });
};
var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
    shadyRenderSet.add(scopeName);
    // Move styles out of rendered DOM and store.
    var styles = renderedDOM.querySelectorAll('style');
    // If there are no styles, skip unnecessary work
    if (styles.length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
        return;
    }
    var condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (var i = 0; i < styles.length; i++) {
        var style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    insertNodeIntoTemplate(template, condensedStyle, template.element.content.firstChild);
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    if (window.ShadyCSS.nativeShadow) {
        // When in native Shadow DOM, re-add styling to rendered content using
        // the style ShadyCSS produced.
        var _style = template.element.content.querySelector('style');
        renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
    } else {
        // When not in native Shadow DOM, at this point ShadyCSS will have
        // removed the style from the lit template and parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
        var removes = new Set();
        removes.add(condensedStyle);
        removeNodesFromTemplate(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
var render$1 = function render$1(result, container, options) {
    var scopeName = options.scopeName;
    var hasRendered = parts.has(container);
    var needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof TemplateResult;
    // Handle first render to a scope specially...
    var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        var part = parts.get(renderContainer);
        parts.delete(renderContainer);
        if (part.value instanceof TemplateInstance) {
            prepareTemplateStyles(renderContainer, part.value.template, scopeName);
        }
        removeNodes(container, container.firstChild);
        container.appendChild(renderContainer);
        parts.set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
//# sourceMappingURL=shady-render.js.map

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty = function (prop, _obj) {
    return prop;
};
var defaultConverter = {
    toAttribute: function toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute: function fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
var notEqual = function notEqual(value, old) {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
var microtaskPromise = Promise.resolve(true);
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */
var UpdatingElement = function (_HTMLElement) {
    inherits(UpdatingElement, _HTMLElement);

    function UpdatingElement() {
        classCallCheck(this, UpdatingElement);

        var _this = possibleConstructorReturn(this, _HTMLElement.call(this));

        _this._updateState = 0;
        _this._instanceProperties = undefined;
        _this._updatePromise = microtaskPromise;
        _this._hasConnectedResolver = undefined;
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */
        _this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */
        _this._reflectingProperties = undefined;
        _this.initialize();
        return _this;
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */


    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    UpdatingElement._ensureClassProperties = function _ensureClassProperties() {
        var _this2 = this;

        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            var superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach(function (v, k) {
                    return _this2._classProperties.set(k, v);
                });
            }
        }
    };
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */


    UpdatingElement.createProperty = function createProperty(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        var key = (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'symbol' ? Symbol() : '__' + name;
        Object.defineProperty(this.prototype, name, {
            // tslint:disable-next-line:no-any no symbol in index
            get: function get() {
                return this[key];
            },
            set: function set(value) {
                // tslint:disable-next-line:no-any no symbol in index
                var oldValue = this[name];
                // tslint:disable-next-line:no-any no symbol in index
                this[key] = value;
                this._requestUpdate(name, oldValue);
            },

            configurable: true,
            enumerable: true
        });
    };
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */


    UpdatingElement.finalize = function finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
            return;
        }
        // finalize any superclasses
        var superCtor = Object.getPrototypeOf(this);
        if (typeof superCtor.finalize === 'function') {
            superCtor.finalize();
        }
        this.finalized = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            var props = this.properties;
            // support symbols in properties (IE11 does not support this)
            var propKeys = [].concat(Object.getOwnPropertyNames(props), typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : []);
            // This for/of is ok because propKeys is an array
            for (var _iterator = propKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var p = _ref;

                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    };
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */


    UpdatingElement._attributeNameForProperty = function _attributeNameForProperty(name, options) {
        var attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    };
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */


    UpdatingElement._valueHasChanged = function _valueHasChanged(value, old) {
        var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;

        return hasChanged(value, old);
    };
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */


    UpdatingElement._propertyValueFromAttribute = function _propertyValueFromAttribute(value, options) {
        var type = options.type;
        var converter = options.converter || defaultConverter;
        var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
    };
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */


    UpdatingElement._propertyValueToAttribute = function _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        var type = options.type;
        var converter = options.converter;
        var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
    };
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */


    UpdatingElement.prototype.initialize = function initialize() {
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of `updateComplete`
        this._requestUpdate();
    };
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */


    UpdatingElement.prototype._saveInstanceProperties = function _saveInstanceProperties() {
        var _this3 = this;

        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor._classProperties.forEach(function (_v, p) {
            if (_this3.hasOwnProperty(p)) {
                var value = _this3[p];
                delete _this3[p];
                if (!_this3._instanceProperties) {
                    _this3._instanceProperties = new Map();
                }
                _this3._instanceProperties.set(p, value);
            }
        });
    };
    /**
     * Applies previously saved instance properties.
     */


    UpdatingElement.prototype._applyInstanceProperties = function _applyInstanceProperties() {
        var _this4 = this;

        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach(function (v, p) {
            return _this4[p] = v;
        });
        this._instanceProperties = undefined;
    };

    UpdatingElement.prototype.connectedCallback = function connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED;
        // Ensure first connection completes an update. Updates cannot complete before
        // connection and if one is pending connection the `_hasConnectionResolver`
        // will exist. If so, resolve it to complete the update, otherwise
        // requestUpdate.
        if (this._hasConnectedResolver) {
            this._hasConnectedResolver();
            this._hasConnectedResolver = undefined;
        }
    };
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */


    UpdatingElement.prototype.disconnectedCallback = function disconnectedCallback() {};
    /**
     * Synchronizes property values when attributes change.
     */


    UpdatingElement.prototype.attributeChangedCallback = function attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    };

    UpdatingElement.prototype._propertyToAttribute = function _propertyToAttribute(name, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;

        var ctor = this.constructor;
        var attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            var attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            } else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    };

    UpdatingElement.prototype._attributeToProperty = function _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        var ctor = this.constructor;
        var propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
            // tslint:disable-next-line:no-any
            ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    };
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */


    UpdatingElement.prototype._requestUpdate = function _requestUpdate(name, oldValue) {
        var shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            var ctor = this.constructor;
            var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            } else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._enqueueUpdate();
        }
    };
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */


    UpdatingElement.prototype.requestUpdate = function requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);
        return this.updateComplete;
    };
    /**
     * Sets up the element to asynchronously update.
     */


    UpdatingElement.prototype._enqueueUpdate = function () {
        var _ref2 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var resolve, reject, previousUpdatePromise, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // Mark state updating...
                            this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                            resolve = void 0;
                            reject = void 0;
                            previousUpdatePromise = this._updatePromise;

                            this._updatePromise = new Promise(function (res, rej) {
                                resolve = res;
                                reject = rej;
                            });
                            _context.prev = 5;
                            _context.next = 8;
                            return previousUpdatePromise;

                        case 8:
                            _context.next = 12;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](5);

                        case 12:
                            if (this._hasConnected) {
                                _context.next = 15;
                                break;
                            }

                            _context.next = 15;
                            return new Promise(function (res) {
                                return _this5._hasConnectedResolver = res;
                            });

                        case 15:
                            _context.prev = 15;
                            result = this.performUpdate();
                            // If `performUpdate` returns a Promise, we await it. This is done to
                            // enable coordinating updates with a scheduler. Note, the result is
                            // checked to avoid delaying an additional microtask unless we need to.

                            if (!(result != null)) {
                                _context.next = 20;
                                break;
                            }

                            _context.next = 20;
                            return result;

                        case 20:
                            _context.next = 25;
                            break;

                        case 22:
                            _context.prev = 22;
                            _context.t1 = _context['catch'](15);

                            reject(_context.t1);

                        case 25:
                            resolve(!this._hasRequestedUpdate);

                        case 26:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[5, 10], [15, 22]]);
        }));

        function _enqueueUpdate() {
            return _ref2.apply(this, arguments);
        }

        return _enqueueUpdate;
    }();

    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    UpdatingElement.prototype.performUpdate = function performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        var shouldUpdate = false;
        var changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
        } catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            throw e;
        } finally {
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    };

    UpdatingElement.prototype._markUpdated = function _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    };
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */


    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    UpdatingElement.prototype.shouldUpdate = function shouldUpdate(_changedProperties) {
        return true;
    };
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */


    UpdatingElement.prototype.update = function update(_changedProperties) {
        var _this6 = this;

        if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach(function (v, k) {
                return _this6._propertyToAttribute(k, _this6[k], v);
            });
            this._reflectingProperties = undefined;
        }
    };
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */


    UpdatingElement.prototype.updated = function updated(_changedProperties) {};
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */


    UpdatingElement.prototype.firstUpdated = function firstUpdated(_changedProperties) {};

    createClass(UpdatingElement, [{
        key: '_hasConnected',
        get: function get() {
            return this._updateState & STATE_HAS_CONNECTED;
        }
    }, {
        key: '_hasRequestedUpdate',
        get: function get() {
            return this._updateState & STATE_UPDATE_REQUESTED;
        }
    }, {
        key: 'hasUpdated',
        get: function get() {
            return this._updateState & STATE_HAS_UPDATED;
        }
    }, {
        key: 'updateComplete',
        get: function get() {
            return this._updatePromise;
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            var _this7 = this;

            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            var attributes = [];
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this._classProperties.forEach(function (v, p) {
                var attr = _this7._attributeNameForProperty(p, v);
                if (attr !== undefined) {
                    _this7._attributeToPropertyMap.set(attr, p);
                    attributes.push(attr);
                }
            });
            return attributes;
        }
    }]);
    return UpdatingElement;
}(HTMLElement);
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement.finalized = true;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
//# sourceMappingURL=decorators.js.map

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult = function () {
    function CSSResult(cssText, safeToken) {
        classCallCheck(this, CSSResult);

        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.


    CSSResult.prototype.toString = function toString() {
        return this.cssText;
    };

    createClass(CSSResult, [{
        key: 'styleSheet',
        get: function get() {
            if (this._styleSheet === undefined) {
                // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
                // is constructable.
                if (supportsAdoptingStyleSheets) {
                    this._styleSheet = new CSSStyleSheet();
                    this._styleSheet.replaceSync(this.cssText);
                } else {
                    this._styleSheet = null;
                }
            }
            return this._styleSheet;
        }
    }]);
    return CSSResult;
}();
var textFromCSSResult = function textFromCSSResult(value) {
    if (value instanceof CSSResult) {
        return value.cssText;
    } else {
        throw new Error('Value passed to \'css\' function must be a \'css\' function result: ' + value + '. Use \'unsafeCSS\' to pass non-literal values, but\n            take care to ensure page security.');
    }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */
var css = function css(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    var cssText = values.reduce(function (acc, v, idx) {
        return acc + textFromCSSResult(v) + strings[idx + 1];
    }, strings[0]);
    return new CSSResult(cssText, constructionToken);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.0.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */
function arrayFlat(styles) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    for (var i = 0, length = styles.length; i < length; i++) {
        var value = styles[i];
        if (Array.isArray(value)) {
            arrayFlat(value, result);
        } else {
            result.push(value);
        }
    }
    return result;
}
/** Deeply flattens styles array. Uses native flat if available. */
var flattenStyles = function flattenStyles(styles) {
    return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
};
var LitElement = function (_UpdatingElement) {
    inherits(LitElement, _UpdatingElement);

    function LitElement() {
        classCallCheck(this, LitElement);
        return possibleConstructorReturn(this, _UpdatingElement.apply(this, arguments));
    }

    /** @nocollapse */
    LitElement.finalize = function finalize() {
        _UpdatingElement.finalize.call(this);
        // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.
        this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
    };
    /** @nocollapse */


    LitElement._getUniqueStyles = function _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        var userStyles = this.styles;
        var styles = [];
        if (Array.isArray(userStyles)) {
            var flatStyles = flattenStyles(userStyles);
            // As a performance optimization to avoid duplicated styling that can
            // occur especially when composing via subclassing, de-duplicate styles
            // preserving the last item in the list. The last item is kept to
            // try to preserve cascade order with the assumption that it's most
            // important that last added styles override previous styles.
            var styleSet = flatStyles.reduceRight(function (set, s) {
                set.add(s);
                // on IE set.add does not return the set.
                return set;
            }, new Set());
            // Array.from does not work on Set in IE
            styleSet.forEach(function (v) {
                return styles.unshift(v);
            });
        } else if (userStyles) {
            styles.push(userStyles);
        }
        return styles;
    };
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */


    LitElement.prototype.initialize = function initialize() {
        _UpdatingElement.prototype.initialize.call(this);
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    };
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */


    LitElement.prototype.createRenderRoot = function createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    };
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */


    LitElement.prototype.adoptStyles = function adoptStyles() {
        var styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
                return s.cssText;
            }), this.localName);
        } else if (supportsAdoptingStyleSheets) {
            this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
                return s.styleSheet;
            });
        } else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    };

    LitElement.prototype.connectedCallback = function connectedCallback() {
        _UpdatingElement.prototype.connectedCallback.call(this);
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    };
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */


    LitElement.prototype.update = function update(changedProperties) {
        var _this2 = this;

        _UpdatingElement.prototype.update.call(this, changedProperties);
        var templateResult = this.render();
        if (templateResult instanceof TemplateResult) {
            this.constructor.render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach(function (s) {
                var style = document.createElement('style');
                style.textContent = s.cssText;
                _this2.renderRoot.appendChild(style);
            });
        }
    };
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */


    LitElement.prototype.render = function render() {};

    return LitElement;
}(UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */
LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */
LitElement.render = render$1;

var styles = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .heading ::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature,:host .heading ::slotted(*){font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature,:host .heading ::slotted(*){font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature,:host .heading ::slotted(*){font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block!important}:host .expand-holder{width:100%;border-bottom:1px solid #c8c9c7}";

var nsAccordion = function (_LitElement) {
  inherits(nsAccordion, _LitElement);

  function nsAccordion() {
    classCallCheck(this, nsAccordion);
    return possibleConstructorReturn(this, _LitElement.apply(this, arguments));
  }

  nsAccordion.prototype.firstUpdated = function firstUpdated() {
    this.setAttribute('role', 'tablist');
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsAccordion.prototype.render = function render() {
    return html(['\n      <div class="heading">\n        <slot name="heading"></slot>\n      </div>\n      <div class="expand-holder">\n        <slot></slot>\n      </div>\n    ']);
  };

  createClass(nsAccordion, null, [{
    key: 'styles',


    // Public property API that triggers re-render (synced with attributes)
    // static get properties() {
    //   return {
    //     open: {type: String}
    //   };
    // }

    get: function get() {
      return css(['' + styles]);
    }
  }]);
  return nsAccordion;
}(LitElement);

customElements.define('ns-accordion', nsAccordion);

var styles$1 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.section .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}:host .card.nav .content .paragraph-holder ::slotted(*){font-family:\"BG Flame Regular\",sans-serif}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),:host .card.section .heading-holder ::slotted(*),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),:host .card.section .heading-holder ::slotted(*),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),:host .card.section .heading-holder ::slotted(*),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),:host .card.nav .content .heading-holder ::slotted(*),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),:host .card.nav .content .heading-holder ::slotted(*),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),:host .card.nav .content .heading-holder ::slotted(*),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal,:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal,:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal,:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host .card.nav .content .paragraph-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host .card.nav .content .paragraph-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host .card.nav .content .paragraph-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{width:100%;display:-ms-grid;display:grid}:host .card{background-color:#fff;color:#333f48}:host .card .illustration-holder ns-illustration{display:block}:host .card[class*=basic-] .content .heading-holder ::slotted(*){font-size:1em}:host .card[class*=basic-lock] .content .heading-holder ::slotted(*){max-width:none}:host .card.section{margin-top:1.42382813em;border-radius:0 0 1em;background-clip:padding-box;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);padding:1em 1em 1em 5.3%}:host .card.section .illustration-holder{float:right;-webkit-transform:translateX(33.3%);transform:translateX(33.3%);margin-top:-2.84765625em;margin-right:-.71191406em;width:5.6953125em;height:5.6953125em}@media only screen and (min-width:480px){:host .card.section{padding:1em;display:-ms-grid;display:grid;-ms-grid-columns:-webkit-min-content 1fr;-ms-grid-columns:min-content 1fr;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;grid-template-areas:\"a b\" \". c\"}:host .card.section .illustration-holder{margin-right:0;margin-left:-.71191406em;float:none;-webkit-transform:none;transform:none;grid-area:a;-ms-grid-row:1;-ms-grid-column:1}:host .card.section .content{padding-left:.71191406em;grid-area:b;-ms-grid-row:1;-ms-grid-column:2}:host .card.section .cta-holder{grid-area:c;-ms-grid-row-align:end;align-self:end;margin-bottom:-2em;padding-left:.71191406em;-ms-grid-row:2;-ms-grid-column:2}}@media only screen and (min-width:720px){:host .card.section{margin-top:1.728em;padding:1.31453414em;border-radius:0 1em 1em;background-clip:padding-box}:host .card.section .illustration-holder{margin-top:-3.456em;margin-right:.864em;margin-left:-.864em;width:6.912em;height:6.912em}:host .card.section .content{padding-left:0;padding-bottom:.864em}:host .card.section .cta-holder{padding-left:0;margin-bottom:-2.62906828em}}@media only screen and (min-width:1080px) and (max-width:1619px){:host .card.section{display:block;position:relative;border-radius:0 .5em .5em;background-clip:padding-box}:host .card.section .illustration-holder{float:right;margin:-3.456em -1.728em .65726707em .65726707em}:host .card.section .cta-holder{position:absolute;bottom:0;margin-bottom:-1.728em}}@media only screen and (min-width:1620px){:host .card.section{margin-top:1.953125em;padding:1.74692811em 1.74692811em 1.74692811em 0}:host .card.section .illustration-holder{margin-top:-3.90625em;margin-right:.9765625em;margin-left:.9765625em;width:7.8125em;height:7.8125em}:host .card.section .cta-holder{margin-bottom:-3.49385621em}}:host .card.support{-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15)}:host .card.support .image-holder .img{display:block;width:100%}@media only screen and (min-width:0){:host .card.support{border-radius:0 0 1em;background-clip:padding-box}:host .card.support .content{padding:1em}}@media only screen and (min-width:480px){:host .card.support{border-radius:0 0 .5em;background-clip:padding-box}}@media only screen and (min-width:1080px){:host .card.support.has-image{-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr}:host .card.support .content{padding:1.74692811em}:host .card.flat,:host .card.nav,:host .card.support{-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:1fr;grid-template-rows:1fr}}@media only screen and (min-width:720px) and (max-width:1079px){:host .card.support.has-image{background-color:transparent;-ms-grid-columns:50% 1fr;grid-template-columns:50% 1fr;-webkit-box-shadow:unset;box-shadow:unset}:host .card.support.has-image .content{-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);background-color:#fff}:host .card.support .content{padding:1.31453414em;border-radius:0 0 .5em;background-clip:padding-box}}:host .card.flat,:host .card.nav,:host .card.support{display:-ms-grid;display:grid;-ms-grid-rows:1fr;grid-template-rows:1fr}:host .card.flat .content,:host .card.nav .content,:host .card.support .content{display:-ms-grid;display:grid;-ms-grid-rows:auto auto 1fr;grid-template-rows:auto auto 1fr;-webkit-box-align:start;-ms-flex-align:start;align-items:start}:host .card.support .cta-holder{-ms-flex-item-align:end;-ms-grid-row-align:end;align-self:end}:host .card.flat,:host .card.nav{background:0 0;color:inherit}:host .card.flat .content,:host .card.nav .content{background:0 0;-webkit-box-shadow:none;box-shadow:none}:host .basic-landmark{display:-ms-grid;display:grid;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);border-radius:0 0 1.5em;background-clip:padding-box;padding:1.42382813em 5%}:host .basic-landmark .content .cta-holder{margin-top:1.42382813em}@media only screen and (max-width:720px){:host .basic-landmark{padding-top:calc(1.42382813em + 2.5%)}}@media only screen and (min-width:720px){:host .basic-landmark{border-radius:0 1.5em 0 0;background-clip:padding-box;padding:1.728em 1.728em 1.728em 8%}:host .basic-landmark .content{padding-top:0}:host .basic-landmark .content .cta-holder{margin-top:1.728em}}@media only screen and (min-width:1080px){:host .basic-landmark{padding:1.953125em;border-radius:1.5em 1.5em 1.5em 0;background-clip:padding-box}:host .basic-landmark .content .cta-holder{margin-top:1.953125em}}@media only screen and (min-width:1620px){:host .basic-landmark{padding:3.81469727em}}:host .section-landmark{display:-ms-grid;display:grid;padding:1.42382813em;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);border-radius:0 1em 1em;background-clip:padding-box}:host .section-landmark .content .cta-holder{margin-top:1.42382813em}@media only screen and (min-width:720px){:host .section-landmark{padding:1.728em;border-radius:0 1.5em 1.5em;background-clip:padding-box}:host .section-landmark .content{padding-top:0}:host .section-landmark .content .cta-holder{margin-top:1.728em}}@media only screen and (min-width:1080px){:host .section-landmark{padding:1.953125em}:host .section-landmark .content .cta-holder{margin-top:1.953125em}}@media only screen and (min-width:1620px){:host .section-landmark{padding:3.81469727em}}:host [class*=basic-lockjaw]{display:-ms-grid;display:grid;background-color:transparent;color:inherit}:host [class*=basic-lockjaw] .content .cta-holder{margin-top:1.42382813em}:host [class*=basic-lockjaw] .image-holder{display:none}@media only screen and (min-width:720px){:host [class*=basic-lockjaw] .content .cta-holder{margin-top:1.728em}}@media only screen and (min-width:1080px){:host [class*=basic-lockjaw] .content .cta-holder{margin-top:1.953125em}}:host [class*=basic-locknut]{background-color:transparent;color:inherit}:host [class*=basic-locknut] .content .cta-holder{margin-top:1.42382813em}@media only screen and (min-width:720px){:host [class*=basic-locknut] .content .cta-holder{margin-top:1.728em}}@media only screen and (min-width:1080px){:host [class*=basic-locknut] .content .cta-holder{margin-top:1.953125em}}:host [class*=basic-lockbox]{margin-top:-25%;padding-top:calc(25% + 1.42382813em);padding-right:5%;padding-bottom:1.42382813em;padding-left:5%;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);border-radius:0 0 1.5em;background-clip:padding-box}:host [class*=basic-lockbox] .content .cta-holder{margin-top:1.42382813em}@media only screen and (min-width:720px){:host [class*=basic-lockbox]{padding-top:calc(25% + 2.985984em);padding-right:12.5%;padding-bottom:2.985984em;padding-left:12.5%;border-radius:1.5em 1.5em 0;background-clip:padding-box}:host [class*=basic-lockbox] .content .cta-holder{margin-top:1.728em}:host .basic-lockbox-reverse{border-radius:1.5em 1.5em 1.5em 0;background-clip:padding-box}}@media only screen and (min-width:1080px){:host [class*=basic-lockbox]{margin-top:0;padding:3.81469727em}:host [class*=basic-lockbox] .content .cta-holder{margin-top:1.953125em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .flat.has-image .image-holder,:host .nav.has-image .image-holder,:host .support.has-image .image-holder,:host [class*=basic-].has-image .image-holder{-ms-grid-row:1}:host .flat.has-image .content,:host .nav.has-image .content,:host .support.has-image .content,:host [class*=basic-].has-image .content{-ms-grid-row:2}:host .flat .content,:host .nav .content,:host .support .content,:host [class*=basic-] .content{-ms-grid-row:1;padding-bottom:1.42382813em}:host .flat .content .heading-holder,:host .nav .content .heading-holder,:host .support .content .heading-holder,:host [class*=basic-] .content .heading-holder{-ms-grid-row:1}:host .flat .content .paragraph-holder,:host .nav .content .paragraph-holder,:host .support .content .paragraph-holder,:host [class*=basic-] .content .paragraph-holder{-ms-grid-row:2}:host .flat .content .cta-holder,:host .nav .content .cta-holder,:host .support .content .cta-holder,:host [class*=basic-] .content .cta-holder{-ms-grid-row:3}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .flat.has-image .image-holder,:host .nav.has-image .image-holder,:host .support.has-image .image-holder,:host [class*=basic-].has-image .image-holder{-ms-grid-row:1}:host .flat.has-image .content,:host .nav.has-image .content,:host .support.has-image .content,:host [class*=basic-].has-image .content{-ms-grid-row:2}:host .flat .content,:host .nav .content,:host .support .content,:host [class*=basic-] .content{-ms-grid-row:1;padding-bottom:1.42382813em}:host .flat .content .heading-holder,:host .nav .content .heading-holder,:host .support .content .heading-holder,:host [class*=basic-] .content .heading-holder{-ms-grid-row:1}:host .flat .content .paragraph-holder,:host .nav .content .paragraph-holder,:host .support .content .paragraph-holder,:host [class*=basic-] .content .paragraph-holder{-ms-grid-row:2}:host .flat .content .cta-holder,:host .nav .content .cta-holder,:host .support .content .cta-holder,:host [class*=basic-] .content .cta-holder{-ms-grid-row:3}}@media only screen and (min-width:0) and (max-width:1079px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .section .illustration-holder{-ms-grid-column:1}:host .section .content{padding-bottom:1.728em;-ms-grid-column:2}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){@media only screen and (min-width:0) and (max-width:1079px){:host .section .illustration-holder{-ms-grid-column:1}:host .section .content{padding-bottom:1.728em;-ms-grid-column:2}}}@media only screen and (min-width:720px) and (max-width:1079px){:host .support.has-image .image-holder{-ms-grid-column:1}:host .support.has-image .content{padding-bottom:1.953125em;-ms-grid-column:2;-ms-grid-row:1!important}}";

var nsCard = function (_LitElement) {
  inherits(nsCard, _LitElement);
  createClass(nsCard, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String }, // basic, section, functional, support, flat, deep, nav
        decoration: { type: String }, // for icon or illustration
        image: { type: String },
        alt: { type: String }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$1]);
    }
  }]);

  function nsCard() {
    classCallCheck(this, nsCard);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'section';
    _this.alt = '';
    return _this;
  }

  nsCard.prototype.addHeading = function addHeading() {
    return '<div class="heading-holder">\n              <slot name="heading"></slot>\n            </div>';
  };

  nsCard.prototype.addImage = function addImage() {
    if (this.image && this.type === 'support') {
      return '<div class="image-holder">\n                <ns-image ratio="4x3" src="' + this.image + '" alt="' + this.alt + '"></ns-image>\n              </div>';
    }

    return '';
  };

  nsCard.prototype.addIllustration = function addIllustration() {
    if (this.type === 'section' && this.decoration !== 'undefined') {
      return '<div class="illustration-holder">\n                <ns-illustration type="' + this.decoration + '"></ns-illustration>\n              </div>';
    }

    return '';
  };

  nsCard.prototype.addCTA = function addCTA() {
    var regex = /support|basic-|section-|section|flat/g;
    var canHave = this.type.search(regex);

    if (canHave !== -1) {
      return '<div class="cta-holder">\n                <slot name="cta"></slot>\n              </div>';
    }

    return '<ns-icon size="2" type=\'arrow-right\'></ns-icon>';
  };

  nsCard.prototype.outSideCTA = function outSideCTA() {
    if (this.type === 'section') {
      return '' + this.addCTA();
    }

    return '';
  };

  nsCard.prototype.addContent = function addContent() {
    var regex = /support|basic-|section|flat|nav/g;
    var ctaRegex = /support|basic-|section-|flat/g;
    var canHave = this.type.search(regex);
    var ctaCanHave = this.type.search(ctaRegex);
    var ctaHasSlot = this.querySelectorAll('[slot="cta"]').length > 0;
    if (canHave !== -1) {
      return '\n        <div class="paragraph-holder">\n          <slot name="paragraph"></slot>\n        </div>\n        ' + (ctaHasSlot && ctaCanHave !== -1 ? this.addCTA() : '') + '\n      ';
    }

    return '';
  };

  nsCard.prototype.updated = function updated() {
    var _this2 = this;

    var slots = Array.from(this.shadowRoot.querySelectorAll('slot'));

    slots.forEach(function (slot) {
      slot.assignedNodes().forEach(function (el) {
        var slotType = el.getAttribute && el.getAttribute('slot') || '';

        if (slotType === 'heading' && _this2.type !== 'basic') {
          el.setAttribute('role', 'heading');
          el.setAttribute('aria-level', '3');
        }
      });
    });
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsCard.prototype.render = function render() {
    var hasImage = this.image && this.image.length > 0;
    return html(['\n      <div class="card ' + this.type + ' ' + (hasImage ? 'has-image' : '') + '">\n        ' + this.addImage() + '\n        ' + this.addIllustration() + '\n        <div class="content">\n          ' + this.addHeading() + '\n          ' + this.addContent() + '\n        </div>\n        ' + this.outSideCTA() + '\n      </div>\n    ']);
  };

  return nsCard;
}(LitElement);

customElements.define('ns-card', nsCard);

var styles$2 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2{font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2,h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2,h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2,h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2,h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2,h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2,h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host ns-panel.alert .caveat-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host ns-panel.alert .caveat-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host ns-panel.alert .caveat-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block}:host ns-panel{background:#f7f7f7;color:#333f48}:host ns-panel .message{display:-ms-grid;display:grid}:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2{font-family:\"BG Flame Regular\",sans-serif;margin-bottom:0}:host ns-panel.alert .message{grid-row-gap:unset}:host ns-panel.alert .caveat-holder ::slotted(*){font-family:\"BG Flame Regular\",sans-serif;max-width:none}@media only screen and (min-width:1080px){:host .message{padding-left:12.5%;padding-right:12.5%}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:10%;padding-right:10%}:host .alert .heading-holder,:host .standard .heading-holder{-ms-grid-row:1;margin-bottom:2em}:host .alert .caveat-holder,:host .standard .caveat-holder{-ms-grid-row:2}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:10%;padding-right:10%}:host .alert .heading-holder,:host .standard .heading-holder{-ms-grid-row:1;margin-bottom:2em}:host .alert .caveat-holder,:host .standard .caveat-holder{-ms-grid-row:2}@media only screen and (min-width:0) and (max-width:1079px){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:0;padding-right:0}}}@media only screen and (min-width:0) and (max-width:1079px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:0;padding-right:0}}";

var nsCaveat = function (_LitElement) {
  inherits(nsCaveat, _LitElement);
  createClass(nsCaveat, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String } // standard, alert
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$2]);
    }
  }]);

  function nsCaveat() {
    classCallCheck(this, nsCaveat);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'standard';
    return _this;
  }

  nsCaveat.prototype.addHeading = function addHeading() {
    return '<div class="heading-holder">\n              <slot name="heading"><h2>Information</h2></slot>\n            </div>';
  };

  nsCaveat.prototype.addCaveat = function addCaveat() {
    return '<div class="caveat-holder">\n              <slot name="caveat"></slot>\n            </div>';
  };

  nsCaveat.prototype.updated = function updated() {
    if (this.type === 'standard') {
      this.setAttribute('id', 'caveat'); // id to scroll to
    }
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsCaveat.prototype.render = function render() {
    return html(['\n      <ns-panel class="' + this.type + '">\n        <div class="splish message">\n          ' + this.addHeading() + '\n          ' + this.addCaveat() + '\n        </div>\n      </ns-panel>\n      ']);
  };

  return nsCaveat;
}(LitElement);

customElements.define('ns-caveat', nsCaveat);

var styles$3 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host([disabled]){cursor:auto;pointer-events:none}:host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .nds-cta{position:relative;background-color:transparent;text-align:left;cursor:pointer;font-size:.8em;text-decoration:none}:host .nds-cta::-moz-focus-inner{border:0}:host .nds-cta .label-holder{font-family:\"BG Flame Bold\",sans-serif;font-size:1.25em}:host .nds-cta .icon{position:absolute;text-indent:0}:host .nds-cta .icon svg{position:absolute;top:0;right:0;bottom:0;left:0;fill:currentColor}:host .nds-cta .icon [icon=loading] svg{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner}:host .nds-cta:active .icon [icon=arrow-right] svg,:host .nds-cta:focus .icon [icon=arrow-right] svg,:host .nds-cta:hover .icon [icon=arrow-right] svg{-webkit-transform:translateX(.25em);transform:translateX(.25em)}:host .nds-cta:active .icon [icon=download] svg path:nth-child(1),:host .nds-cta:focus .icon [icon=download] svg path:nth-child(1),:host .nds-cta:hover .icon [icon=download] svg path:nth-child(1){-webkit-transform:translateY(.15em);transform:translateY(.15em)}:host .nds-cta.direct{display:inline-block;background:-webkit-gradient(linear,left top,left bottom,color-stop(-75%,#09f),to(#005eb8));background:linear-gradient(#09f -75%,#005eb8 100%);color:#fff;border-top-right-radius:.5em;border-bottom-right-radius:.5em;border-bottom-left-radius:.5em;-webkit-box-shadow:0 .75em 1.5em 0 rgba(51,63,72,.15);box-shadow:0 .75em 1.5em 0 rgba(51,63,72,.15);min-width:15em;padding:.8125em 3.5em .8125em 2em}:host .nds-cta.direct:active,:host .nds-cta.direct:focus,:host .nds-cta.direct:hover{color:#fff;-webkit-box-shadow:0 .5em 1em 0 rgba(51,63,72,.15);box-shadow:0 .5em 1em 0 rgba(51,63,72,.15)}:host .nds-cta.direct:focus,:host .nds-cta.direct:hover{background:-webkit-gradient(linear,left top,left bottom,color-stop(-125%,#09f),color-stop(75%,#005eb8));background:linear-gradient(#09f -125%,#005eb8 75%)}:host .nds-cta.direct:focus{outline:0;-webkit-box-shadow:0 0 0 .1875em #ffdd57;box-shadow:0 0 0 .1875em #ffdd57}:host .nds-cta.direct:active{background:#005eb8;-webkit-box-shadow:none;box-shadow:none}:host .nds-cta.direct .icon{right:1em;bottom:.75em;width:2em;height:2em}:host .nds-cta.direct .cta{display:block;min-height:1.875em}:host .nds-cta.text{outline:0;display:inline-block;padding-right:.5em;padding-left:1.5em;text-indent:-1.5em;color:#005eb8}:host .nds-cta.text .icon{position:relative;display:inline-block;top:.25em;width:1.25em;height:1.25em}:host .nds-cta.text:focus,:host .nds-cta.text:hover{color:#333f48;text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host .nds-cta.text:focus{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto;-webkit-text-decoration-color:rgba(0,60,113,.5);text-decoration-color:rgba(0,60,113,.5)}:host .nds-cta.text:focus .cta{background-color:#ffdd57;-webkit-box-shadow:0 0 0 .35em #ffdd57;box-shadow:0 0 0 .35em #ffdd57;border-top-right-radius:.035em;border-bottom-right-radius:.035em;border-bottom-left-radius:.035em}:host .nds-cta[disabled]{pointer-events:none}:host .nds-cta[disabled].direct{background:#005eb8;-webkit-box-shadow:none;box-shadow:none}@media only screen and (min-width:320px) and (max-width:479px){:host{display:block}:host .nds-cta{width:100%}}@media only screen and (min-width:720px){:host .nds-cta{font-size:.9em}}@media only screen and (min-width:1080px){:host .nds-cta{font-size:1em}}";

var nsCta = function (_LitElement) {
  inherits(nsCta, _LitElement);
  createClass(nsCta, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String }, // direct, text,
        loading: { type: String }, // true, false
        loadingMessage: { type: String }, // Loading...
        icon: { type: String }, // arrow-right
        href: { type: String // https://britishgas.co.uk
        } };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$3]);
    }
  }]);

  function nsCta() {
    classCallCheck(this, nsCta);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'direct';
    _this.loading = 'false';
    _this.loadingMessage = 'Loading...';
    _this.icon = 'arrow-right';
    return _this;
  }

  nsCta.prototype.addIcon = function addIcon(icon, position) {
    return '\n    <span class="icon icon-' + position + '">\n      <ns-icon type="' + icon + '"></ns-icon>\n    </span>\n    ';
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsCta.prototype.render = function render() {
    var isLoading = this.loading === 'true';
    var icon = this.loading === 'true' ? 'loading' : this.icon;
    var iconPosition = this.type === 'text' ? 'left' : 'right';
    var iconRight = iconPosition === 'right' ? this.addIcon(icon, 'right') : '';
    var iconLeft = iconPosition === 'left' ? this.addIcon(icon, 'left') : '';
    var text = this.textContent;
    var isInLink = this.parentElement && this.parentElement.nodeName === 'A' && this.parentElement.hasAttribute('href');
    var tabIndex = isInLink ? -1 : 0;
    var element = 'button';

    if (this.href && this.href.length > 0 && this.href !== 'undefined') {
      element = 'a';
    } else if (!this.cta) {
      element = 'button';
    }

    var isHref = element === 'a' ? 'href="' + this.href + '"' : '';

    if (isLoading) {
      this.setAttribute('disabled', 'true');
    } else {
      this.removeAttribute('disabled');
    }

    return html(['\n      <' + element + ' ' + ('tabindex=' + tabIndex) + ' ' + isHref + ' ' + (isLoading ? 'disabled' : '') + ' class="nds-cta ' + this.type + ' animated" aria-label="' + text + '">\n          <span class="cta">\n            ' + iconLeft + '\n            <span class="label-holder">\n              ' + (isLoading ? this.loadingMessage : '<slot></slot>') + '\n            </span>\n            ' + iconRight + '\n          </span>\n      </' + element + '>\n    ']);
  };

  return nsCta;
}(LitElement);

customElements.define('ns-cta', nsCta);

var decorations = {
  invertConcave: ['163', 'm1620.00005,162.97225c-49.44304,-14.91199 -548.27817,-161.94442 -994.9824,-161.94442c-308.39748,0 -517.51274,55.72275 -625.01765,94.12936l0.00005,-95.12936l1620,0l0,162.94442z'],
  invertConvex: ['51', 'm1620,48.08336l0,2.91664l-1620,0l0,-3.06237c249.95348,-27.44039 526.27345,-47.93763 794.02262,-47.93763c345.2406,0 622.02663,22.39195 825.97738,48.08336z'],
  invertRamp: ['163', 'm1620.00005,0.34961c-49.44304,14.8875 -548.27817,161.67842 -994.9824,161.67842c-308.39748,0 -517.51274,-55.63122 -625.01765,-93.97475l0.00005,94.97311l1620,0l0,-162.67678z'],
  invertBridge: ['51', 'M0,47.9C250,20.5,526.3,0,794,0H0V47.9z', 'M794,0c345.2,0,622,22.4,826,48.1V0H794z'],
  circleYellow: 'orange',
  circleGreen: 'green-light'
};

var generateInvert = function generateInvert(decoration) {
  var paths = Object.assign(decorations[decoration]);
  var viewSize = paths[0];
  var inner = paths.slice(1).map(function (path) {
    return '<path d="' + path + '"/>';
  }).join('');

  return {
    viewBox: '0 0 1620 ' + viewSize,
    inner: inner
  };
};

var generateCircle = function generateCircle(decoration) {
  var primaryColour = decoration.replace('circle', '').toLowerCase();
  var secondaryColour = decorations[decoration];

  var inner = '<defs>\n    <linearGradient id="' + primaryColour + '-colour" x1="0%" y1="0%" x2="0%" y2="100%">\n      <stop offset="0%" class="' + primaryColour + '" />\n      <stop offset="100%" class="' + secondaryColour + '" />\n    </linearGradient>\n  </defs>\n  <circle cx="50" cy="50" r="50" fill="url(#' + primaryColour + '-colour)" />';

  return {
    viewBox: '0 0 100 100',
    inner: inner
  };
};

var generateSVG = function generateSVG() {
  var decoration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invert-concave';

  var blocks = {};

  if (decoration.indexOf('invert') > -1) {
    blocks = generateInvert(decoration);
  } else if (decoration.indexOf('circle') > -1) {
    blocks = generateCircle(decoration);
  }
  return '\n<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="' + blocks.viewBox + '" preserveAspectRatio="xMinYMin">\n  ' + blocks.inner + '\n</svg>\n  ';
};

var styles$4 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host([position=bottom]),:host([position=top]){position:absolute;right:0;left:0}:host([position=bottom]) .decoration-holder svg,:host([position=top]) .decoration-holder svg{margin-left:-1em;margin-right:-1em}:host([position=top]){top:-1px}:host([position=bottom]){bottom:-1px}:host([position=left]),:host([position=right]){position:absolute;z-index:-1;top:15%;width:85%}@media only screen and (min-width:480px){:host([position=left]),:host([position=right]){top:25%;width:80%}}@media only screen and (min-width:720px){:host([position=left]),:host([position=right]){top:25%;width:70%}}@media only screen and (min-width:1080px){:host([position=left]),:host([position=right]){top:50%;width:50%}}@media only screen and (min-width:1620px){:host([position=left]),:host([position=right]){width:45%}}:host([position=left]){left:-5%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}:host([position=right]){right:-5%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}@media only screen and (max-width:719px){:host([position=right]){-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:-5%}}@media only screen and (min-width:2430px){:host([position=left]){left:5%}:host([position=right]){right:5%}}:host([type*=invert]){overflow:hidden}:host{display:block}:host .decoration-holder svg{display:block}:host .decoration-holder svg path{fill:currentColor}:host .decoration-holder .yellow{stop-color:#ffc72c;stop-opacity:1}:host .decoration-holder .orange{stop-color:#ff7a00;stop-opacity:1}:host .decoration-holder .green{stop-color:#009639;stop-opacity:1}:host .decoration-holder .green-light{stop-color:#b4e100;stop-opacity:1}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host{display:none}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host{display:none}}@supports (-ms-ime-align:auto){:host([position=bottom]) .decoration-holder svg,:host([position=top]) .decoration-holder svg{margin-left:0;margin-right:0}}";

var nsDecoration = function (_LitElement) {
  inherits(nsDecoration, _LitElement);
  createClass(nsDecoration, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String },
        position: { type: String }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$4]);
    }
  }]);

  function nsDecoration() {
    classCallCheck(this, nsDecoration);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'invert-concave';
    _this.position = '';
    return _this;
  }

  nsDecoration.prototype.camelCase = function camelCase(string) {
    return string.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsDecoration.prototype.render = function render() {
    return html(['\n      <div class="decoration-holder">\n        ' + generateSVG(this.camelCase(this.type)) + '\n      </div>\n    ']);
  };

  return nsDecoration;
}(LitElement);

customElements.define('ns-decoration', nsDecoration);

var styles$5 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block}:host [name=heading]{font-size:1em;max-width:none}:host ns-image{width:60%;margin-bottom:1.19324269em;border-radius:1em 1em 1em 0;background-clip:padding-box}@media only screen and (max-width:719px){:host .splosh{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;row-gap:normal}:host .splosh [name=heading]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}:host .splosh ns-image{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}:host .splosh .column{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}@media only screen and (min-width:480px){:host ns-image{width:45%}}@media only screen and (min-width:720px){:host ns-image{margin-left:2.985984em;margin-bottom:1.31453414em;float:right;width:40%}}@media only screen and (min-width:1080px){:host ns-image{margin-left:3.81469727em;margin-bottom:1.39754249em}:host:host([reverse]) ns-image{margin-left:0;margin-right:3.81469727em;border-radius:1em 1em 0;background-clip:padding-box;float:left}:host:host([reverse]) .column{margin-left:calc(40% + 3.81469727em)}}";

var nsEditorial = function (_LitElement) {
  inherits(nsEditorial, _LitElement);
  createClass(nsEditorial, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        image: { type: String },
        reverse: { type: Boolean }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$5]);
    }
  }]);

  function nsEditorial() {
    classCallCheck(this, nsEditorial);
    return possibleConstructorReturn(this, _LitElement.call(this));
  }

  nsEditorial.prototype.render = function render() {

    var imageMarkup = this.image ? '<ns-image src="' + this.image + '" ratio="4x3" alt="" backgroundsize=""></ns-image>' : '';

    return html(['\n      <ns-panel>\n        <div class="splosh">\n          ' + imageMarkup + '\n          <slot name="heading"></slot>\n          <div class="column">\n            <slot></slot>\n          </div>\n        </div>\n      </ns-panel>\n    ']);
  };

  return nsEditorial;
}(LitElement);

customElements.define('ns-editorial', nsEditorial);

var styles$6 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .heading .heading-title ::slotted(*){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}:host .panel ::slotted(*){font-family:\"BG Flame Regular\",sans-serif}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host .heading .heading-title ::slotted(*),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host .heading .heading-title ::slotted(*),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host .heading .heading-title ::slotted(*),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host .panel ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host .panel ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host .panel ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block;width:100%}:host .heading{cursor:pointer;width:100%;border-top:1px solid #c8c9c7;background:#fff;color:#333f48}:host .heading.expanded,:host .heading:active,:host .heading:focus,:host .heading:hover{background:#f7f7f7;color:#333f48}:host .heading:focus{outline-offset:0;border-top-color:transparent;outline:#ffdd57 solid .1875em}:host .heading .heading-title{pointer-events:none;padding:1em;display:block}:host .heading .heading-title ::slotted(*){margin-top:0;margin-bottom:0}:host .heading .icon{display:block;float:right;pointer-events:none;width:2em;height:2em;margin:1em 1em 0}:host .panel{overflow:hidden;padding:1em;background:#fff;color:#333f48}:host .panel[hidden]{padding:0;max-height:0}";

var randomId = (function () {
  // Although HTML5 relaxed id restrictions, it is preferable that
  // they start with a letter (not number) since methods such as
  // querySelector() will still reject such ids
  return "nsid-" + Math.random().toString(36).substring(2, 15);
});

/*
  Story is inside <ns-accordion>
 */

var nsExpander = function (_LitElement) {
  inherits(nsExpander, _LitElement);

  nsExpander.prototype.openToggle = function openToggle() {
    this.open = this.open === 'true' ? 'false' : 'true';
  };

  createClass(nsExpander, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        open: { type: String }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$6]);
    }
  }]);

  function nsExpander() {
    classCallCheck(this, nsExpander);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.open = 'false';
    _this.tabID = randomId() + '-tab';
    _this.panelID = randomId() + '-panel';
    return _this;
  }

  nsExpander.prototype.addHeading = function addHeading() {
    return '<slot name="heading"></slot>';
  };

  nsExpander.prototype.addPanelAnimation = function addPanelAnimation() {
    var panel = this.shadowRoot.getElementById(this.panelID);

    if (this.open === 'true') {
      var panelHeight = panel.scrollHeight;

      panel.style.height = panelHeight + 'px';
    } else {
      panel.style.height = '0';
    }
  };

  nsExpander.prototype.updated = function updated(props) {
    var _this2 = this;

    var heading = this.shadowRoot.getElementById(this.tabID);

    // this.addPanelAnimation();

    props.forEach(function (oldValue, propName) {
      if (propName === 'open' && oldValue === 'false') {
        heading.focus(); // on re-render and open changes (i.e. click or enter) keep focused
      }
    });

    heading.addEventListener('click', function (e) {
      _this2.openToggle();
    });

    heading.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        _this2.openToggle();
      }
    });
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsExpander.prototype.render = function render() {
    var isHidden = this.open === 'false';
    var icon = isHidden ? 'chevron-down' : 'chevron-up';

    return html(['\n      <div role="tab" tabindex="0" aria-expanded="' + !isHidden + '" aria-controls="' + this.panelID + '" id="' + this.tabID + '" class="heading ' + (!isHidden ? 'expanded' : '') + '">\n        <span class="icon">\n          <ns-icon type="' + icon + '">\n        </span>\n        <span class="heading-title">\n          ' + this.addHeading() + '\n        </span>\n      </div>\n\n      <div role="tabpanel" aria-labelledby="' + this.tabID + '" id="' + this.panelID + '" class="panel" ' + (isHidden ? 'hidden' : '') + '>\n        <slot></slot>\n      </div>\n    ']);
  };

  return nsExpander;
}(LitElement);

customElements.define('ns-expander', nsExpander);

var styles$7 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.h1,.h2,.h3,.h4,.h5,h1:not([slot]),h2:not([slot]),h3:not([slot]),h4:not([slot]),h5:not([slot]){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}.h6,.p-caption,h6:not([slot]){font-family:\"BG Flame Regular\",sans-serif}:not([slot]) .enlighten{font-family:\"BG Flame Light\",sans-serif}:not([slot]) .enlighten .embolden:not([slot]),:not([slot]) .enlighten b:not([slot]),:not([slot]) .enlighten em:not([slot]),:not([slot]) .enlighten i:not([slot]),:not([slot]) .enlighten strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}.p-feature,.p-large,.p-normal{font-family:\"BG Flame Light\",sans-serif}.p-caption,.p-small{font-family:\"BG Flame Regular\",sans-serif}p{margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}p b:not([slot]),p strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}p+:not(p):not([slot]){margin-top:3rem!important}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}ns-panel .splash:last-child,ns-panel .splish:last-child{margin-bottom:0!important}a{font-family:\"BG Flame Bold\",sans-serif;font-weight:400;color:#005eb8;text-decoration:underline;-webkit-text-decoration-color:#005eb8;text-decoration-color:#005eb8;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}a:focus{outline-offset:0;background-color:#ffdd57;-webkit-text-decoration-color:transparent;text-decoration-color:transparent;outline:#ffdd57 solid .1875em}a:active,a:hover{color:#003c71;-webkit-text-decoration-color:rgba(0,60,113,.25);text-decoration-color:rgba(0,60,113,.25)}a:visited,a:visited:focus{color:#333f48;-webkit-text-decoration-color:#333f48;text-decoration-color:#333f48}a:visited:hover{color:#333f48;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}a[slot=cta]{display:inline-block}@media only screen and (min-width:320px) and (max-width:479px){a[slot=cta]{display:block}}a[slot=cta]:focus{outline-offset:.1875em;outline-width:.25em;background-color:transparent}a[href=\"#caveat\"]{position:relative;display:inline-block;font-size:.8em;line-height:1.2;background-color:#005eb8;color:#fff;text-decoration:none;border-radius:.1875em;top:-.15em;padding-left:.3em;padding-right:.3em;font-family:\"BG Flame Bold\",sans-serif}a[href=\"#caveat\"]::after{position:absolute;content:'';top:-.75em;right:-.75em;bottom:-.75em;left:-.75em}a[href=\"#caveat\"]:focus{outline-offset:.1875em;outline-width:.25em}a[href=\"#caveat\"]:active,a[href=\"#caveat\"]:hover,a[href=\"#caveat\"]:visited,a[href=\"#caveat\"]:visited:focus,a[href=\"#caveat\"]:visited:hover{color:#fff}:host{display:block}:host ul{list-style-type:none;margin:0;padding:0}:host .nav-footer ul{padding-top:1em;padding-bottom:1em}:host .nav-footer ul li{color:#f7f7f7}:host .nav-footer ul li a{color:#f7f7f7;-webkit-text-decoration-color:#f7f7f7;text-decoration-color:#f7f7f7}:host .nav-footer ul li a:focus{outline-offset:-1em;background-color:unset;-webkit-text-decoration-color:transparent;text-decoration-color:transparent}:host .nav-footer ul li a:active,:host .nav-footer ul li a:hover{color:#fff;-webkit-text-decoration-color:rgba(247,247,247,.5);text-decoration-color:rgba(247,247,247,.5)}:host .nav-footer ul .more a{position:relative;padding-right:3em}:host .nav-footer ul .more a::after{pointer-events:none;position:absolute;content:\"\";top:50%;right:1.5em;width:.875em;height:.875em;-webkit-transform:translateY(-75%) rotate(45deg);transform:translateY(-75%) rotate(45deg);border-right:.125em solid #fff;border-bottom:.125em solid #fff}:host .nav-footer ul .last{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:auto}:host .nav-footer ul .last span{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .nav-footer ul .last img{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;width:3em;margin-left:1em}@media only screen and (min-width:1080px){:host .nav-footer ul{padding-top:0;padding-bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex}:host .nav-footer ul li:first-child a{margin-left:-1.25em}:host .nav-footer ul li a{display:block;padding:1em 1.25em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host ul{margin-bottom:0!important;padding-left:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host ul{margin-bottom:0!important;padding-left:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto){:host ul{margin-bottom:0!important;padding-left:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}";

var nsFooter = function (_LitElement) {
  inherits(nsFooter, _LitElement);
  createClass(nsFooter, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        collapsed: { type: Boolean }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$7]);
    }
  }]);

  function nsFooter() {
    classCallCheck(this, nsFooter);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.collapsed = false;
    return _this;
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsFooter.prototype.render = function render() {
    return html(['\n      <footer>\n        <div class="nav-footer">\n          <ns-panel type="nav" decoration="invert-bridge-blue">\n            <nav class="splash">\n              <ul>\n                <li><a href="/terms-and-conditions.html">Terms &amp; conditions</a></li>\n                <li><a href="/privacy-policy.html">Privacy policy</a></li>\n                <li><a href="/global-maintenance/cookies-policy.html">Cookie policy</a></li>\n                <li class="last">\n                  <span>&copy; British Gas 2019</span>\n                </li>\n              </ul>\n            </nav>\n          </ns-panel>\n        </div>\n        <div ' + (this.collapsed ? 'hidden' : '') + '>\n          <ns-panel decoration="invert-bridge-grey-light">\n            <nav class="splash triple">\n              <ns-card type="nav">\n                <h2 slot="heading">The Company</h2>\n                <ul slot="paragraph">\n                  <li><a href="/about-us.html">About us</a></li>\n                  <li><a href="/business/">British Gas Business</a></li>\n                  <li><a href="https://www.hivehome.com/">Hive Active Heating</a></li>\n                  <li><a href="https://www.centrica.com/">Centrica PLC</a></li>\n                  <li><a href="/youraccount/discover/app.html">Download our app</a></li>\n                </ul>\n              </ns-card>\n              <ns-card type="nav">\n                <h2 slot="heading">Information</h2>\n                <ul slot="paragraph">\n                  <li><a href="/legal-information.html">Legal information</a></li>\n                  <li><a href="/accessibility.html">Access for all</a></li>\n                  <li><a href="https://www.centrica.com/responsibility/our-approach/modern-slavery-act-statement">Modern slavery transparency statement</a></li>\n                </ul>\n              </ns-card>\n              <ns-card type="nav">\n                <h2 slot="heading">Support</h2>\n                <ul slot="paragraph">\n                  <li><a href="/guaranteed-standards-of-performance.html">Performance standards</a></li>\n                  <li><a href="/complaints.html">Complaints</a></li>\n                  <li><a href="/complaints/performance.html">Complaints performance</a></li>\n                  <li><a href="/help-and-support/emergencies">Emergencies</a></li>\n                </ul>\n              </ns-card>\n            </nav>\n          </ns-panel>\n        </div>\n      </footer>\n    ']);
  };

  return nsFooter;
}(LitElement);

customElements.define('ns-footer', nsFooter);

var styles$8 = ":host{display:block}";

var nsForm = function (_LitElement) {
  inherits(nsForm, _LitElement);
  createClass(nsForm, [{
    key: 'isValid',
    get: function get() {
      return this.validate().isValid;
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {};
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$8]);
    }
  }]);

  function nsForm() {
    classCallCheck(this, nsForm);
    return possibleConstructorReturn(this, _LitElement.call(this));
  }

  nsForm.prototype.render = function render() {
    return html(['\n      <div class="form-holder">\n        <form>\n          <slot></slot>\n        </form>\n      </div>\n    ']);
  };

  nsForm.prototype.validate = function validate() {
    var inputs = this.querySelectorAll('ns-inputter');
    var isValid = true;
    var fields = [];
    var fieldsByName = {};
    inputs.forEach(function (input) {
      var field = {
        name: input.attributes.name.value,
        isValid: input.validity.valid,
        value: input.value,
        error: input.error,
        input: input
      };
      fields.push(field);
      fieldsByName[field.name] = field;
      if (!input.validity.valid) {
        isValid = false;
      }
      input.setAttribute('execute', true);
    });

    var validation = {
      isValid: isValid,
      fields: fields,
      fieldsByName: fieldsByName
    };
    var event = new CustomEvent('validated', {
      bubbles: true,
      composed: true,
      detail: {
        validation: validation
      }
    });
    this.dispatchEvent(event);

    return validation;
  };

  return nsForm;
}(LitElement);

customElements.define('ns-form', nsForm);

var styles$9 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.h1,.h2,.h3,.h4,.h5,h1:not([slot]),h2:not([slot]),h3:not([slot]),h4:not([slot]),h5:not([slot]){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}.h6,.p-caption,h6:not([slot]){font-family:\"BG Flame Regular\",sans-serif}:not([slot]) .enlighten{font-family:\"BG Flame Light\",sans-serif}:not([slot]) .enlighten .embolden:not([slot]),:not([slot]) .enlighten b:not([slot]),:not([slot]) .enlighten em:not([slot]),:not([slot]) .enlighten i:not([slot]),:not([slot]) .enlighten strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}.p-feature,.p-large,.p-normal{font-family:\"BG Flame Light\",sans-serif}.p-caption,.p-small{font-family:\"BG Flame Regular\",sans-serif}p{margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}p b:not([slot]),p strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}p+:not(p):not([slot]){margin-top:3rem!important}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}ns-panel .splash:last-child,ns-panel .splish:last-child{margin-bottom:0!important}a{font-family:\"BG Flame Bold\",sans-serif;font-weight:400;color:#005eb8;text-decoration:underline;-webkit-text-decoration-color:#005eb8;text-decoration-color:#005eb8;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}a:focus{outline-offset:0;background-color:#ffdd57;-webkit-text-decoration-color:transparent;text-decoration-color:transparent;outline:#ffdd57 solid .1875em}a:active,a:hover{color:#003c71;-webkit-text-decoration-color:rgba(0,60,113,.25);text-decoration-color:rgba(0,60,113,.25)}a:visited,a:visited:focus{color:#333f48;-webkit-text-decoration-color:#333f48;text-decoration-color:#333f48}a:visited:hover{color:#333f48;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}a[slot=cta]{display:inline-block}@media only screen and (min-width:320px) and (max-width:479px){a[slot=cta]{display:block}}a[slot=cta]:focus{outline-offset:.1875em;outline-width:.25em;background-color:transparent}a[href=\"#caveat\"]{position:relative;display:inline-block;font-size:.8em;line-height:1.2;background-color:#005eb8;color:#fff;text-decoration:none;border-radius:.1875em;top:-.15em;padding-left:.3em;padding-right:.3em;font-family:\"BG Flame Bold\",sans-serif}a[href=\"#caveat\"]::after{position:absolute;content:'';top:-.75em;right:-.75em;bottom:-.75em;left:-.75em}a[href=\"#caveat\"]:focus{outline-offset:.1875em;outline-width:.25em}a[href=\"#caveat\"]:active,a[href=\"#caveat\"]:hover,a[href=\"#caveat\"]:visited,a[href=\"#caveat\"]:visited:focus,a[href=\"#caveat\"]:visited:hover{color:#fff}:host{display:block;font-size:1.25em}:host ul{list-style-type:none;padding:0;margin:0}:host .cookie-message{font-size:.8em;border-bottom:1px solid #c8c9c7;margin-bottom:.25em}:host .cookie-message .message{max-width:inherit;margin-top:.5em;margin-bottom:.5em}:host .cookie-message .message::before{content:\"\";float:right;width:2em;height:2em}:host .cookie-message .splash{position:relative}:host .cookie-message .cookie-close{position:absolute;cursor:pointer;right:0;top:.25em;width:2em;height:2em}:host .cookie-message .cookie-close:focus{outline-offset:-.25em;outline:#ffdd57 solid .25em}:host .cookie-message .cookie-close::before{position:absolute;content:\"\";top:-.5em;right:-.5em;bottom:-.5em;left:-.5em}:host .cookie-message .cookie-close ns-icon{display:block}:host header{font-size:.8em;height:4.5em;position:relative;z-index:3;background-color:#fff}:host header .logo-holder{display:block;margin-top:.5em;margin-bottom:.5em;outline:unset}:host header .logo-holder :first-child{width:100%;display:block}:host header .logo-holder:focus{background-color:transparent}:host header .logo-holder:focus :first-child{outline-offset:.25em;outline:#ffdd57 solid .25em}:host header .nav-skip{display:-ms-grid;display:grid;-ms-grid-columns:5% 25% 1fr 5%;grid-template-columns:5% 25% 1fr 5%;font-size:.8em}:host header .nav-skip ul{-ms-grid-column:3;grid-column-start:3;position:relative}:host header .nav-skip ul a{position:absolute;top:-200em;text-decoration:none;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;padding:.25em .5em}:host header .nav-skip ul a:focus{background-color:transparent;display:block;top:0;outline-offset:-.25em;outline:#ffdd57 solid .25em}:host header .nav-desktop{border-bottom:1px solid #c8c9c7;position:relative}:host header .nav-desktop .nav-top{display:-ms-grid;display:grid;-ms-grid-columns:5% 8em 1fr 5%;grid-template-columns:5% 8em 1fr 5%;height:4.5em;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}:host header .nav-desktop .nav-top .logo-holder{-ms-grid-column:2;grid-column-start:2}:host header .nav-desktop li{position:inherit}:host header .nav-desktop li .nav-flyout{background-color:#f7f7f7;border-top:1px solid #c8c9c7;border-bottom:1px solid #c8c9c7;font-size:.8em;position:absolute;left:0;width:100vw}:host header .nav-desktop li .nav-flyout[aria-expanded=false]{display:none}:host header .nav-desktop .side-headers{font-size:.8em;position:absolute;top:0;right:0;left:0;display:-ms-grid;display:grid;-ms-grid-columns:5% 16% 1fr 5%;grid-template-columns:5% 16% 1fr 5%;max-width:1600px;margin-left:auto;margin-right:auto;-ms-grid-column:3;grid-column-start:3}:host header .nav-desktop .side-headers ul{-ms-grid-column:3;grid-column-start:3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:-.5em}:host header .nav-desktop .side-headers ul li a{text-decoration:none;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;display:block;padding:.25em .5em}:host header .nav-desktop .side-headers ul li a:focus{background-color:transparent;outline-offset:-.25em;outline:#ffdd57 solid .25em}:host header .nav-desktop .side-headers ul li a:hover{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host header .nav-desktop .menu-headers{height:4.5em;-ms-grid-column:3;grid-column-start:3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:-1em}:host header .nav-desktop .menu-headers>li{margin-top:auto;-ms-flex-item-align:end;align-self:flex-end}:host header .nav-desktop .menu-headers>li .button-link{font-family:\"BG Flame Bold\",sans-serif;cursor:pointer;padding:.5em 1em}:host header .nav-desktop .menu-headers>li .button-link:focus{outline-offset:-.25em;outline:#ffdd57 solid .25em}:host header .nav-desktop .menu-headers>li .button-link:hover{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host header .nav-mobile{border-bottom:1px solid #c8c9c7;display:-ms-grid;display:grid;-ms-grid-columns:5% 1fr 5%;grid-template-columns:5% 1fr 5%;-ms-grid-rows:4.5em 1fr;grid-template-rows:4.5em 1fr}:host header .nav-mobile .nav-top{display:-ms-grid;display:grid;-ms-grid-columns:8em 1fr 3em;grid-template-columns:8em 1fr 3em;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;position:relative;-ms-grid-row:1;grid-row-start:1}:host header .nav-mobile .nav-top .nav-toggle{z-index:1;position:relative;-ms-grid-column:3;grid-column-start:3;background-color:transparent;display:block;width:3em;cursor:pointer}:host header .nav-mobile .nav-top .nav-toggle ns-icon{z-index:1;position:absolute;top:0;right:0;width:3em;height:3em}:host header .nav-mobile .nav-top .nav-toggle .nav-label{position:absolute;bottom:0;right:0;left:0;text-align:center}:host header .nav-mobile .nav-top .nav-toggle::before{position:absolute;content:\"\";top:0;right:-1em;bottom:0;left:-1em}:host header .nav-mobile .nav-heading{display:-ms-grid;display:grid;-ms-grid-columns:3em 1fr 3em;grid-template-columns:3em 1fr 3em;position:relative;-ms-grid-row:1;grid-row-start:1;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;background-color:#fff;border-bottom:1px solid #c8c9c7}:host header .nav-mobile .nav-heading .nav-back{display:block;position:absolute;top:0;left:0;width:3em;height:4.5em;cursor:pointer}:host header .nav-mobile .nav-heading .nav-back ns-icon{position:absolute;top:0;right:0;width:3em;height:3em}:host header .nav-mobile .nav-heading .nav-back .nav-label{position:absolute;bottom:0;right:0;left:0;text-align:center}:host header .nav-mobile .nav-heading .nav-back::before{position:absolute;content:\"\";top:0;right:-1em;bottom:0;left:-2.5em}:host header .nav-mobile .nav-heading .heading-text{font-size:1.25em;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;font-family:\"BG Flame Bold\",sans-serif;line-height:1.2;margin-bottom:0;padding:.5em;display:-webkit-box;display:-ms-flexbox;display:flex;vertical-align:middle;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host header .nav-panel{height:calc(100vh - 4.5em);height:calc((var(--vh,1vh) * 100) - 4.5em);background:#f7f7f7;position:absolute;left:0;right:0;overflow-y:auto;-webkit-overflow-scrolling:touch}:host header .nav-panel .button-link{display:block;border-bottom:1px solid #c8c9c7;padding:1em .5em 1em 5%}:host header .nav-panel .button-link .label-holder{font-family:\"BG Flame Bold\",sans-serif;font-size:1.25em;line-height:1.2;pointer-events:none}:host header .nav-panel .button-link .icon{display:block;float:right;pointer-events:none;width:2em;height:2em;margin-left:.5em;margin-top:-.25em}:host header .nav-panel .button-link.link{background:#fff;text-decoration:none;color:#003c71}:host header .nav-panel .button-link.link:visited{color:#003c71}:host header .nav-panel .button-link.link .icon{float:left;width:1.5625em;height:1.5625em;margin-top:0;margin-right:.5em;margin-left:-.5em}:host header .nav-panel .side-headers{margin-top:2em}:host header .nav-panel .headers-link{margin-top:2em}@media only screen and (min-width:720px){:host .cookie-message,:host header{font-size:.9em}}@media only screen and (min-width:1080px){:host .cookie-message,:host header{font-size:1em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host ul{padding-left:0!important;margin-bottom:0!important;margin-top:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host ul{padding-left:0!important;margin-bottom:0!important;margin-top:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto){:host ul{padding-left:0!important;margin-bottom:0!important;margin-top:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}";

var getCookie = (function (cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');

  var cvalue = '';
  var i = 0;
  var c = void 0;

  for (i; i < ca.length; i += 1) {
    c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) !== -1) {
      cvalue = decodeURIComponent(c.substring(name.length, c.length));
      break;
    }
  }

  return cvalue;
});

var setCookie = (function (name, value, expires, path, domain, secure) {
  var cookie = '';

  if (expires && expires instanceof Date) {
    expires = 'expires=' + expires.toUTCString() + ';';
  } else {
    expires = '';
  }

  value = encodeURIComponent(value);
  path = path || '/';
  domain = domain || window.location.hostname;
  secure = secure ? 'secure' : '';

  cookie = name + '=' + value + '; ' + (expires + ' path=' + path + '; domain=' + domain + '; ' + secure);

  document.cookie = cookie;
});

var toJSON = function toJSON(node) {
  if (node.tagName === 'UL') {
    return Array.from(node.children).map(function (n) {
      return toJSON(n);
    });
  }

  if (node.tagName === 'LI') {
    return Array.from(node.children).map(function (n) {
      return toJSON(n);
    });
  }

  var attrs = node.attributes;
  var obj = {};
  if (attrs) {
    var arr = obj.attributes = new Array(attrs.length);

    for (var i = 0; i < attrs.length; i++) {
      var _arr$i;

      var attr = attrs[i];
      arr[i] = (_arr$i = {}, _arr$i[attr.nodeName] = attr.nodeValue, _arr$i);
    }
  }

  if (!node.children || node.children.length < 1) {
    obj.text = node.textContent;
  } else {
    return Array.from(node.children).map(function (n) {
      return toJSON(n);
    });
  }

  return _extends({
    tagName: node.tagName.toLowerCase()
  }, obj);
};
var timeout = null;
var cookieName = 'BG_cookieWarningMessageShown';

var nsHeader = function (_LitElement) {
  inherits(nsHeader, _LitElement);

  nsHeader.prototype.setVerticalHeight = function setVerticalHeight() {
    var height = navigator.userAgent.indexOf('Chrome') !== -1 ? window.innerHeight : document.documentElement.clientHeight; // because ios and everyone else do different things for viewport height
    var vh = height * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px'); // set vertical height to fix vh issue https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  };

  createClass(nsHeader, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String // header, nav
        } };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$9]);
    }
  }]);

  function nsHeader() {
    classCallCheck(this, nsHeader);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'header';
    _this.heading = undefined;
    _this.viewport = undefined;
    _this.content = _this.list;
    _this.mobileOpen = false;
    _this.viewType = 'header';
    _this.viewId = undefined;
    _this.previousViewIds = [];
    _this.previousHeadings = [];

    _this.setVerticalHeight();
    return _this;
  }

  nsHeader.prototype.createLinkContent = function createLinkContent(text, icon) {
    var addIcon = function addIcon() {
      if (icon) {
        return '\n        <span class="icon">\n          <ns-icon type="' + icon + '">\n        </span>';
      }
      return '';
    };

    return '\n    ' + addIcon() + '\n    <span class="label-holder">\n      ' + text + '\n    </span>\n    ';
  };

  nsHeader.prototype.closeMenuPanels = function closeMenuPanels() {
    var flyouts = Array.from(this.shadowRoot.querySelectorAll('.nav-flyout'));

    clearTimeout(timeout);

    setTimeout(function () {
      flyouts.forEach(function (flyout, index) {
        flyout.setAttribute('aria-expanded', 'false');
        flyout.querySelector('.menu-panel').setAttribute('hidden', 'true');
      });
    }, 250);
  };

  nsHeader.prototype.openMenuPanel = function openMenuPanel(id) {
    var _this2 = this;

    timeout = setTimeout(function () {
      var flyouts = Array.from(_this2.shadowRoot.querySelectorAll('.nav-flyout'));

      flyouts.forEach(function (flyout, index) {
        if (index === parseInt(id)) {
          flyout.setAttribute('aria-expanded', 'true');
          flyout.querySelector('.menu-panel').removeAttribute('hidden');
        } else {
          flyout.setAttribute('aria-expanded', 'false');
          flyout.querySelector('.menu-panel').setAttribute('hidden', 'true');
        }
      });
    }, 250);
  };

  nsHeader.prototype.toggleMobileBodyStyles = function toggleMobileBodyStyles() {
    if (this.mobileOpen) {
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'inherit';
    }
  };

  nsHeader.prototype.resetMobileView = function resetMobileView() {
    this.viewType = 'header';
    this.viewId = undefined;
    this.previousViewIds = [];
    this.previousHeadings = [];
  };

  nsHeader.prototype.mobileToggle = function mobileToggle() {
    var nav = this.shadowRoot.querySelector('.nav-panel');
    var icon = this.shadowRoot.querySelector('.nav-toggle').querySelector('ns-icon');
    var iconType = icon.getAttribute('type');

    if (this.mobileOpen) {
      this.resetMobileView();
    }

    this.mobileOpen = !this.mobileOpen;

    this.toggleMobileBodyStyles();
    this.requestUpdate();
  };

  nsHeader.prototype.firstUpdated = function firstUpdated() {
    var _this3 = this;

    this.viewport = this.viewportType;

    window.addEventListener('resize', function (e) {
      _this3.setVerticalHeight();

      if (_this3.viewport !== _this3.viewportType) {
        _this3.viewport = _this3.viewportType;
        _this3.requestUpdate();
      }
    });
  };

  nsHeader.prototype.addCookie = function addCookie() {
    var date = new Date();

    date.setMonth(date.getMonth() + 1);
    setCookie(cookieName, true, date);
  };

  nsHeader.prototype.updated = function updated() {
    var _this4 = this;

    Array.from(this.shadowRoot.querySelectorAll('.button-link-list')).forEach(function (li) {
      li.addEventListener('focusout', function (e) {
        if (_this4.viewportType === 'desktop') {
          setTimeout(function () {
            var node = document.getSelection().anchorNode;
            var isNavButton = node.classList && node.classList.contains('button-link') || false;

            if (isNavButton) {
              _this4.closeMenuPanels();
            }
          }, 0);
        }
      });

      li.addEventListener('mouseleave', function (e) {
        if (_this4.viewportType === 'desktop') {
          _this4.closeMenuPanels();
        }
      });
    });

    Array.from(this.shadowRoot.querySelectorAll('.button-link')).forEach(function (link) {
      var types = {
        header: 'subheader',
        subheader: 'links',
        link: undefined
      };

      var type = link.getAttribute('data-type');
      var headingText = link.textContent.trim();
      var key = link.getAttribute('data-key');

      link.addEventListener('click', function (e) {

        if (_this4.viewportType === 'mobile') {
          var location = types[type];

          if (location) {
            _this4.previousViewIds.push(_this4.viewId);

            _this4.viewType = location;
            _this4.viewId = key;
            _this4.headingText = headingText;
            _this4.previousHeadings.push(_this4.headingText);
          } else {
            _this4.mobileToggle();
          }

          _this4.requestUpdate();
        }

        if (_this4.viewportType === 'desktop') {
          _this4.openMenuPanel(key);
        }
      });

      link.addEventListener('mouseenter', function (e) {
        if (_this4.viewportType === 'desktop') {
          _this4.openMenuPanel(key);
        }
      });

      link.addEventListener('keypress', function (e) {
        var keyCode = e.which || e.keyCode;

        if (_this4.viewportType === 'desktop' && keyCode === 13) {
          _this4.openMenuPanel(key);
        }
      });
    });

    this.shadowRoot.querySelector('.cookie-close') && this.shadowRoot.querySelector('.cookie-close').addEventListener('click', function () {

      _this4.addCookie();
      _this4.requestUpdate();
    });

    this.shadowRoot.querySelector('.nav-back') && this.shadowRoot.querySelector('.nav-back').addEventListener('click', function () {
      var types = {
        links: 'subheader',
        subheader: 'header'
      };

      var headingText = _this4.previousHeadings[_this4.previousHeadings.length - 2];
      var previousId = _this4.previousViewIds[_this4.previousViewIds.length - 1];

      _this4.previousHeadings.pop();
      _this4.previousViewIds.pop();

      _this4.headingText = headingText;
      _this4.viewType = types[_this4.viewType];
      _this4.viewId = previousId;

      _this4.requestUpdate();
    });

    this.shadowRoot.querySelector('.nav-toggle') && this.shadowRoot.querySelector('.nav-toggle').addEventListener('click', function () {
      _this4.mobileToggle();
    });

    this.setVerticalHeight();
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  nsHeader.prototype.render = function render() {
    return html(['\n      ' + this.cookieMessage + '\n      <header>\n        ' + this.skipLinks + '\n        ' + this.desktopView + '\n        ' + this.mobileView + '\n      </header>\n    ']);
  };

  createClass(nsHeader, [{
    key: 'viewportType',
    get: function get() {
      var width = window.innerWidth;

      return width >= 720 ? 'desktop' : 'mobile';
    }

    /*
      Organise the JSON to work out what is a header, subheader and link
    */

  }, {
    key: 'list',
    get: function get() {
      if (this.children && this.children.length > 0) {
        var content = toJSON(this.children[0]);

        var headers = [];
        var headerLinks = [];
        var subheaders = [];
        var links = [];

        content.forEach(function (list, key) {
          if (list[0] && list[0][0] && list[0][0].tagName === 'a' && list[0][0].text) {
            headers.push(list[0][0].text);
            headerLinks.push(list[0][0].attributes[0].href);
          }
          var subs = [];
          list[1] && list[1].forEach(function (sub, key) {
            if (sub[0] && sub[0].tagName === 'h3' && sub[0].text) {
              subs.push(sub[0].text);
            }
            var sublinks = [];

            sub[1] && sub[1].forEach(function (link) {
              if (link[0] && link[0].tagName === 'a' && link[0].text) {
                sublinks.push({
                  text: link[0].text,
                  href: link[0].attributes[0].href,
                  sub: key
                });
              }
            });

            links.push(sublinks);
          });
          subheaders.push(subs);
        });

        return {
          headers: headers,
          subheaders: subheaders,
          headerLinks: headerLinks,
          links: links
        };
      }
    }
  }, {
    key: 'links',
    get: function get() {
      var _this5 = this;

      var list = this.content && this.content.links;
      var viewport = this.viewportType;

      return list && list.map(function (links, key) {
        var isShown = _this5.viewType === 'links' && parseInt(_this5.viewId) === key;

        var allLinks = links.map(function (link, key) {
          var icon = viewport === 'mobile' ? 'arrow-right' : undefined;
          var content = _this5.createLinkContent(link.text, icon);

          return '\n          <li>\n            <a data-type="link" href="' + link.href + '" class="link button-link" data-key=' + key + ' role="button">\n              ' + content + '\n            </a>\n          </li>';
        }).join('');

        return '\n        <ul class="menu-links" data-key=' + key + ' ' + (isShown ? '' : 'hidden') + '>\n          ' + allLinks + '\n        </ul>\n      ';
      }).filter(function (node) {
        return node;
      }).join('') || '';
    }
  }, {
    key: 'subHeaders',
    get: function get() {
      var _this6 = this;

      var list = this.content && this.content.subheaders;
      var viewport = this.viewportType;
      var key = 0;

      return list && list.map(function (subheaders, num) {
        var isShown = _this6.viewType === 'subheader' && parseInt(_this6.viewId) === num;
        var headerLinkContent = _this6.headerLinks[num];
        var headerLink = '<li class="headers-link">\n        <a data-type="link" href="' + headerLinkContent.link + '" class="link button-link">\n          ' + _this6.createLinkContent(headerLinkContent.text, 'arrow-right') + '\n        </a>\n      </li>';

        var subhead = subheaders.map(function (sub) {
          var icon = viewport === 'mobile' ? 'chevron-right' : undefined;
          var content = _this6.createLinkContent(sub, icon);

          var li = '\n          <li>\n            <div data-type="subheader" class="subheader button-link" data-key=' + key + ' role="button">\n              ' + content + '\n            </div>\n          </li>';

          key += 1;

          return li;
        }).join('');

        return '\n        <ul class="menu-subheaders" data-key="' + num + '" ' + (isShown ? '' : 'hidden') + '>\n          ' + subhead + '\n          ' + (viewport === 'mobile' ? '' + headerLink : '') + '\n        </ul>\n      ';
      }).filter(function (node) {
        return node;
      }).join('') || '';
    }
  }, {
    key: 'headers',
    get: function get() {
      var _this7 = this;

      var headers = this.content && this.content.headers;
      var viewport = this.viewportType;
      var isShown = this.viewType === 'header';
      var panels = this.menuPanels;

      var headerList = headers && headers.map(function (header, key) {
        var icon = viewport === 'mobile' ? 'chevron-right' : undefined;
        var content = _this7.createLinkContent(header, icon);
        var desktopAria = 'aria-haspopup="true" aria-controls="menu-panel-' + key + '"';

        return '\n        <li class="button-link-list">\n          <div data-type="header" ' + (viewport === 'desktop' ? desktopAria : '') + ' class="button-link" data-key=' + key + ' role="button" tabindex="0">\n            ' + content + '\n          </div>\n          ' + (viewport === 'desktop' ? panels[key] : '') + '\n        </li>';
      }).join('') || '';

      return '\n    <ul class="menu-headers" ' + (isShown ? '' : 'hidden') + '>\n      ' + headerList + '\n    </ul>\n    ';
    }
  }, {
    key: 'secondaryHeaders',
    get: function get() {
      var viewport = this.viewportType;
      var icon = viewport === 'mobile' ? 'arrow-right' : undefined;

      return '\n    <nav class="side-headers">\n      <ul>\n        <li><a data-type="link" class="link button-link" href="/help-and-support">' + this.createLinkContent('Help &amp; Support', icon) + '</a></li>\n        <li><a data-type="link" class="link button-link" href="/business">' + this.createLinkContent('My Business', icon) + '</a></li>\n        <li><a data-type="link" class="link button-link" href="/my-account">' + this.createLinkContent('Manage Account', icon) + '</a></li>\n      </ul>\n    </nav>\n    ';
    }
  }, {
    key: 'headerLinks',
    get: function get() {
      var headerLinks = this.content.headerLinks;
      var headers = this.content.headers;

      return headers.map(function (header, key) {
        var headerLink = headerLinks[key];

        return {
          link: headerLink,
          text: 'Find out more about ' + header.toLowerCase()
        };
      });
    }
  }, {
    key: 'menuPanels',
    get: function get() {
      var _this8 = this;

      var list = this.content && this.content.subheaders;
      var links = this.content && this.content.links;
      var viewport = this.viewportType;
      var i = 0;

      var panels = list && list.map(function (panel, key) {
        var headerLink = _this8.headerLinks[key];
        var panelContent = panel.map(function (subheadings) {
          var linkList = links[i].map(function (link) {
            return '<li><a href="' + link.href + '">' + link.text + '</a></li>';
          }).join('');

          i += 1;

          return '\n        <ns-card type="nav">\n          <h2 slot="heading">' + subheadings + '</h2>\n          <ul slot="paragraph">\n            ' + linkList + '\n          </ul>\n        </ns-card>';
        }).join('');

        return '\n      <div id="menu-panel-' + key + '" class="nav-flyout" aria-expanded="false">\n        <ns-panel class="menu-panel" hidden>\n          <div class="splash triple">\n            ' + panelContent + '\n          </div>\n          <div class="splash">\n            <ns-cta href="' + headerLink.link + '" type="text">' + headerLink.text + '</ns-cta>\n          </div>\n        </ns-panel>\n      </div>';
      }) || '';

      return viewport === 'desktop' ? panels : '';
    }
  }, {
    key: 'logoHolder',
    get: function get() {
      var isMobile = this.viewportType === 'mobile';
      var source = isMobile ? 'content/dam/british-gas/beta/images/bg-logo-mobile.svg' : 'content/dam/british-gas/beta/images/bg-logo-mobile.svg';

      return '\n      <a class="logo-holder" href="/"><img src="https://www.britishgas.co.uk/' + source + '" alt="British Gas" /></a>\n    ';
    }
  }, {
    key: 'heading',
    get: function get() {
      if (this.mobileOpen && this.headingText && this.headingText.length > 0) {
        return '\n      <div class="nav-heading">\n        <div class="nav-back">\n          <ns-icon type="chevron-left"></ns-icon>\n          <div class="nav-label">Back</div>\n        </div>\n        <h2 class="heading-text">' + this.headingText + '</h2>\n      </div>\n      ';
      }

      this.headingText = undefined; // clear text if does not exist

      return '';
    }
  }, {
    key: 'desktopView',
    get: function get() {
      if (this.viewportType !== 'desktop') {
        return '';
      }

      // find a better place for this
      if (this.mobileOpen) {
        this.mobileOpen = false;
        this.resetMobileView();
        this.toggleMobileBodyStyles();
      }

      return '\n      <nav class="nav-desktop">\n        <div class="nav-top">\n          ' + this.logoHolder + '\n          ' + this.secondaryHeaders + '\n          ' + this.headers + '\n        </div>\n      </nav>\n    ';
    }
  }, {
    key: 'mobileView',
    get: function get() {
      if (this.viewportType !== 'mobile') {
        return '';
      }

      var iconType = this.mobileOpen ? 'cross' : 'menu';
      var message = this.mobileOpen ? 'Close' : 'Menu';

      return '\n      <div class="nav-mobile">\n        <div class="nav-top">\n          ' + this.logoHolder + '\n          <button class="nav-toggle">\n            <ns-icon type="' + iconType + '"></ns-icon>\n            <div class="nav-label">' + message + '</div>\n          </button>\n        </div>\n        ' + this.heading + '\n      </div>\n\n      <nav class="nav-panel" ' + (this.mobileOpen ? '' : 'hidden') + '>\n        ' + this.headers + '\n        ' + this.subHeaders + '\n        ' + this.links + '\n        ' + this.secondaryHeaders + '\n      </nav>\n    ';
    }
  }, {
    key: 'skipLinks',
    get: function get() {
      return '\n      <nav class="nav-skip">\n        <ul>\n          <li><a href="#content">Skip to content</a></li>\n          <li><a href="#footer">Skip to footer</a></li>\n        </ul>\n      </nav>\n    ';
    }
  }, {
    key: 'cookieMessage',
    get: function get() {
      var cookie = getCookie(cookieName);

      if (!(cookie && cookie === 'true')) {
        this.addCookie();

        return '\n      <div class="cookie-message">\n        <ns-panel type="nav" decoration="invert-bridge-grey-light">\n          <div class="splash">\n            <div class="message">We use cookies to provide a better experience. Carry on browsing if you\'re happy with this, or <a href="/global-maintenance/cookies-policy.html">manage cookies</a>.</div>\n            <div class="cookie-close" tabindex="0" role="button" aria-label="Close cookie message">\n              <ns-icon type="cross"></ns-icon>\n            </div>\n          </div>\n        </ns-panel>\n      </div>\n      ';
      }

      return '';
    }
  }]);
  return nsHeader;
}(LitElement);

customElements.define('ns-header', nsHeader);

var downToUp = 'transform="translate(0, 30)  scale(1, -1)"';
var rightToLeft = 'transform="translate(30, 0) scale(-1, 1)"';

/*
  Icons paths as an array
  Functional icons
 */
var icons = {
  plus: ['M17 6 15 6 15 15 6 15 6 17 15 17 15 26 17 26 17 17 26 17 26 15 17 15 17 6z'],
  minus: ['M6,15H26V17H6Z'],
  cross: ['M24 6.59 16 14.59 8 6.59 6.59 8 14.59 16 6.59 24 8 25.41 16 17.41 24 25.41 25.41 24 17.41 16 25.41 8 24 6.59z'],
  arrow: ['M16.15 6.59 14.73 8.01 21.73 15.01 7.15 15.01 7.15 17.01 21.73 17.01 14.73 24.01 16.15 25.42 25.56 16.01 16.15 6.59z'],
  chevron: ['M11.74 8 19.74 16 11.74 24 13.15 25.41 22.56 16 13.15 6.59 11.74 8z'],
  chevronDown: ['M16 19.59 8 11.59 6.59 13.01 16 22.42 25.41 13.01 24 11.59 16 19.59z'],
  download: ['M24 13.41 22.59 12 17 17.59 17 5 15 5 15 17.59 9.41 12 8 13.41 16 21.41 24 13.41z', 'M26,20v4a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V20H4v4a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V20Z'],
  tick: ['M13 24.41 6.59 18 8 16.59 13 21.59 25 9.59 26.41 11 13 24.41z'],
  hive: ['M25.41,15.16a5,5,0,0,0,.9-.19.75.75,0,0,0,.55-.73.74.74,0,0,0-.55-.73,2.48,2.48,0,0,0-.9,0L17,14.36a11,11,0,0,1-2.15,0l-8.39-.84a2.48,2.48,0,0,0-.9,0,.75.75,0,0,0-.55.73.76.76,0,0,0,.55.73,5.17,5.17,0,0,0,.9.19l8,1.29a9.21,9.21,0,0,0,2.87,0Z', 'M23.94,11.3a5.27,5.27,0,0,0,.9-.11.76.76,0,0,0,.55-.73.77.77,0,0,0-.55-.74,3.82,3.82,0,0,0-.9-.06H8a3.91,3.91,0,0,0-.91.06.77.77,0,0,0-.55.74.76.76,0,0,0,.55.73A5.39,5.39,0,0,0,8,11.3l7.1.5a13.07,13.07,0,0,0,1.77,0Z', 'M18.45,5.14a22.09,22.09,0,0,0-5,0l-2.5.29a5.27,5.27,0,0,0-.9.12.78.78,0,0,0-.55.74A.75.75,0,0,0,10,7a3.86,3.86,0,0,0,.9.07H21a3.91,3.91,0,0,0,.9-.07.76.76,0,0,0,.55-.73.79.79,0,0,0-.55-.74,5.41,5.41,0,0,0-.9-.12Z', 'M14.29,21.07a6.86,6.86,0,0,0,3.31,0l7.29-1.79c.46-.11.64-.15.9-.23a.77.77,0,0,0,.55-.74.78.78,0,0,0-.55-.74,2.3,2.3,0,0,0-.9.08L17,19.05a5.81,5.81,0,0,1-2.12,0L7,17.65a2.32,2.32,0,0,0-.9-.08.78.78,0,0,0-.55.74.77.77,0,0,0,.55.74c.26.08.44.12.9.23Z', 'M22.72,24a7.5,7.5,0,0,0,.9-.34.78.78,0,0,0,.55-.74.77.77,0,0,0-.55-.74,1.83,1.83,0,0,0-.9.11l-4.93,1.33a7.1,7.1,0,0,1-3.69,0L9.18,22.29a1.83,1.83,0,0,0-.9-.11.77.77,0,0,0-.55.74.78.78,0,0,0,.55.74,7.5,7.5,0,0,0,.9.34l4.67,1.63a6.4,6.4,0,0,0,4.19,0Z'],
  settings: ['M17.27,28H14.68a2.85,2.85,0,0,1-2.53-2.66,1.08,1.08,0,0,0-.45-.51l-1.27-.78a.61.61,0,0,0-.48,0,2.76,2.76,0,0,1-3.39-1.12c0-.07-1.07-2.1-1.3-2.53l0-.1a2.92,2.92,0,0,1,1.06-3.5.75.75,0,0,0,.28-.54v-.59a.68.68,0,0,0-.3-.47,2.93,2.93,0,0,1-1-3.49l0-.09L6.52,9.16A2.78,2.78,0,0,1,10,8a.6.6,0,0,0,.52,0l1.25-.77a1,1,0,0,0,.43-.52A2.82,2.82,0,0,1,14.68,4h2.64a2.85,2.85,0,0,1,2.53,2.66,1.08,1.08,0,0,0,.45.51L21.57,8a.61.61,0,0,0,.48,0,2.76,2.76,0,0,1,3.39,1.12l1.3,2.54.05.09a2.92,2.92,0,0,1-1.06,3.5.75.75,0,0,0-.28.54v.6a.72.72,0,0,0,.29.46,2.93,2.93,0,0,1,1,3.49l-.05.1c-.23.43-1.26,2.46-1.26,2.46A2.78,2.78,0,0,1,22,24.05a.63.63,0,0,0-.52,0l-1.25.77a1,1,0,0,0-.43.52A2.82,2.82,0,0,1,17.32,28Zm-2.43-2h2.32a.86.86,0,0,0,.69-.8,3,3,0,0,1,1.34-2l1.33-.82a2.68,2.68,0,0,1,2.27-.16.76.76,0,0,0,.95-.31S24.67,20,25,19.52a.9.9,0,0,0-.34-1.06l0,0a2.76,2.76,0,0,1-1.13-2v-.76a2.78,2.78,0,0,1,1.13-2.1A.91.91,0,0,0,25,12.5L23.7,10.06a.75.75,0,0,0-.9-.25,2.61,2.61,0,0,1-2.22-.12l-1.36-.83a3,3,0,0,1-1.37-2A.86.86,0,0,0,17.16,6H14.84a.84.84,0,0,0-.69.79,3,3,0,0,1-1.34,2l-1.33.82a2.68,2.68,0,0,1-2.27.16.75.75,0,0,0-1,.32S7.33,12,7.05,12.5a.91.91,0,0,0,.34,1.06,2.76,2.76,0,0,1,1.15,2v.77a2.78,2.78,0,0,1-1.13,2.09.92.92,0,0,0-.36,1.08C7.33,20.05,8.3,22,8.3,22a.76.76,0,0,0,.9.25,2.61,2.61,0,0,1,2.22.12l1.36.83a3,3,0,0,1,1.37,2A.87.87,0,0,0,14.84,26Z', 'M16,21c-3.41,0-5-1.59-5-5s1.59-5,5-5,5,1.63,5,5S19.36,21,16,21Zm0-8c-2.33,0-3,.67-3,3s.67,3,3,3,3-.73,3-3S18.27,13,16,13Z'],
  loading: ['M25,7v3.6A10.5,10.5,0,0,0,5.5,16h2a8.49,8.49,0,0,1,16-4H20v2h7V7Z', 'M24.5,16a8.49,8.49,0,0,1-16,4H12V18H5v7H7v-3.6A10.5,10.5,0,0,0,26.5,16Z'],
  warning: ['M27.08,29H4.92a2.87,2.87,0,0,1-2.49-1.44,3,3,0,0,1-.05-3l11.08-20a2.88,2.88,0,0,1,5.08,0l11.08,20a3,3,0,0,1-.05,3A2.87,2.87,0,0,1,27.08,29ZM16,5a.89.89,0,0,0-.79.49l-11.08,20a1.08,1.08,0,0,0,0,1.06.89.89,0,0,0,.77.46H27.08a.89.89,0,0,0,.77-.46,1.08,1.08,0,0,0,0-1.06l-11.08-20A.89.89,0,0,0,16,5Z', 'M16.07,21.3c1.21,0,1.67.47,1.67,1.58s-.46,1.59-1.67,1.59-1.66-.46-1.66-1.59S14.89,21.3,16.07,21.3ZM14.69,10.87c0-.55.24-.74.81-.74h2l-.13,9.66H14.83Z'],
  menu: ['M5 7h22v2H5z', 'M5 15h22v2H5z', 'M5 23h22v2H5z']
};

var duplicateIcons = {
  chevronRight: icons['chevron'],
  arrowRight: icons['arrow'],
  arrowLeft: icons['arrow'],
  chevronLeft: icons['chevron'],
  chevronUp: icons['chevronDown']
};

var transforms = {
  arrowLeft: rightToLeft,
  chevronLeft: rightToLeft,
  chevronUp: downToUp
};

/*
  Solid decorative icons
 */
var solid = {
  appliance: ['M26,1H6A3,3,0,0,0,3,4V31H26a3,3,0,0,0,3-3V4A3,3,0,0,0,26,1ZM8.12,8c0-1,.4-1.44,1.44-1.44S11,7,11,8s-.44,1.44-1.44,1.44S8.12,9,8.12,8ZM9.5,19.5c0-4.64,1.81-6.5,6.5-6.5,2.9,0,4.75.77,5.71,2.56C20,20.57,13.52,21,9.56,20.83,9.52,20.41,9.5,20,9.5,19.5ZM16,26c-3.33,0-5.2-.94-6-3.15l1,0c5.34,0,9.31-1.59,11.41-4.48,0,.35.05.71.05,1.1C22.5,24.14,20.51,26,16,26ZM23,8.88H17a1,1,0,1,1,0-2h6a1,1,0,1,1,0,2Z'],
  bill: ['M23.21,7h4.63L22.05,1.15V5.81A1.16,1.16,0,0,0,23.21,7Z', 'M23.21,9a3.17,3.17,0,0,1-3.16-3.16V1H9A3,3,0,0,0,6,4V31H25a3,3,0,0,0,3-3V9ZM18.4,26H11V20h0a1,1,0,0,1,0-2h0V14.89a3.61,3.61,0,0,1,1-2.72A3.75,3.75,0,0,1,14.71,11a3.85,3.85,0,0,1,3.82,3.89,1,1,0,0,1-1,1,1,1,0,0,1-1-1,1.88,1.88,0,0,0-1.82-2A1.71,1.71,0,0,0,13,14.83V18h3.1a1,1,0,0,1,0,2H13v4H18.4a1,1,0,0,1,0,2Z'],
  boiler: ['M9.66,23A42.33,42.33,0,0,1,5,22.74V31H24a3,3,0,0,0,3-3V15.56C24,20.37,17.9,23,9.66,23Zm8,4.76c-1,0-1.39-.4-1.39-1.39S16.62,25,17.62,25,19,25.4,19,26.38,18.58,27.77,17.62,27.77Zm4.76,0c-1,0-1.38-.4-1.38-1.39S21.39,25,22.38,25s1.39.4,1.39,1.38S23.35,27.77,22.38,27.77Z', 'M24,1H8A3,3,0,0,0,5,4V20.76s.07,0,.11,0C22.92,22.69,26.35,13.87,27,9.91V4A3,3,0,0,0,24,1ZM20,8H12a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z'],
  electricity: ['M27,12.11a11,11,0,1,0-22,0,11.17,11.17,0,0,0,2.92,7.55,38.91,38.91,0,0,1,2.62,3.41,10.26,10.26,0,0,1,1.79,4.25v.87A2.79,2.79,0,0,0,15.08,31h1.84a2.79,2.79,0,0,0,2.75-2.81v-.87c0-1.2.92-2.6,1.75-3.95l.19-.3c.84-1.37,2.45-3.39,2.45-3.39h0A11.17,11.17,0,0,0,27,12.11Zm-15.54.14a.92.92,0,1,1-1.83,0A6.45,6.45,0,0,1,16,5.74a.94.94,0,0,1,0,1.87A4.6,4.6,0,0,0,11.46,12.25Zm6.37,15.94a.92.92,0,0,1-.91.93H15.08a.92.92,0,0,1-.91-.93V26.31h3.66Z'],
  gas: ['M24.83,13.32a22.24,22.24,0,0,0-1.5-1.87A18,18,0,0,1,21.48,9a7.88,7.88,0,0,1-1.06-6.47L21,1l-1.63.29a11.86,11.86,0,0,0-6.63,4.14C10,9,10.74,13.94,11.34,16.55a8,8,0,0,1-2.15-3.46l-.6-1.64L7.53,12.83A11.64,11.64,0,0,0,5,19.93a11,11,0,1,0,19.83-6.61Zm-9.1,12.89a1,1,0,0,1,0-1.92,4.58,4.58,0,0,0,4.57-4.58,1,1,0,0,1,1.92,0A6.5,6.5,0,0,1,15.73,26.21Z'],
  home: ['M28.31,11.08,18.24,1.88a3.43,3.43,0,0,0-4.62,0L3.81,11.09A5.43,5.43,0,0,0,2.08,15V27.76A3.3,3.3,0,0,0,5.43,31H13V22.42c0-2.15.83-3,3-3s3,.85,3,3V31h7.74a3.3,3.3,0,0,0,3.34-3.24V15.06A5.4,5.4,0,0,0,28.31,11.08Z'],
  protect: ['M16.76,1.11a2.7,2.7,0,0,0-2.05,0l-11,4.46V6.2c0,.33,0,8,1.14,12.6s4.3,8.12,10.39,11.82l.47.29.48-.29c6.08-3.7,9.29-7.35,10.39-11.82S27.73,6.53,27.73,6.2V5.57Zm3.11,19.38a1,1,0,0,1-1,.94H16.65V19.57a.92.92,0,1,0-1.83,0v1.86H12.63a1,1,0,0,1-1-.94V16.72a.91.91,0,0,1,.31-.68L15,13.31a1.11,1.11,0,0,1,1.43,0l.73.63L19.55,16a.93.93,0,0,1,.32.68Zm1.23-9.74a.9.9,0,0,1-.66.28.89.89,0,0,1-.64-.26,5.68,5.68,0,0,0-7.91,0,.9.9,0,0,1-1.29,0,.93.93,0,0,1,0-1.32,7.5,7.5,0,0,1,10.46,0A1,1,0,0,1,21.1,10.75Z'],
  meter: ['M28,5H4A3,3,0,0,0,1,8V25H28a3,3,0,0,0,3-3V8A3,3,0,0,0,28,5Zm0,13a1,1,0,0,1-1,1H24.93a.53.53,0,0,0,0-.12V17a1,1,0,0,0-2,0v1.88S23,19,23,19H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h8.07a.53.53,0,0,0,0,.12V13a1,1,0,0,0,2,0V11.12S15,11,15,11H27a1,1,0,0,1,1,1Z', 'M9.08,13.12a1,1,0,0,0-1,1V16a1,1,0,0,0,2,0V14.12A1,1,0,0,0,9.08,13.12Z', 'M19,12.94a1,1,0,0,0-1,1v1.87a1,1,0,1,0,2,0V13.94A1,1,0,0,0,19,12.94Z'],
  rewards: ['M18,10.78V31h7.63a2.49,2.49,0,0,0,2.49-2.49V15.45h.94A2.49,2.49,0,0,0,31.55,13V11.71a2.49,2.49,0,0,0-2.48-2.49H23a4.68,4.68,0,0,0,2.42-4.08A4.28,4.28,0,0,0,21.55,1C18.4.83,16.79,4.16,16,6.88,15.24,4.23,13.69,1,10.7,1h-.25A4.28,4.28,0,0,0,6.58,5.14,4.68,4.68,0,0,0,9,9.22H2.93A2.49,2.49,0,0,0,.45,11.71V13a2.49,2.49,0,0,0,2.48,2.49h.94V28.51A2.49,2.49,0,0,0,6.36,31H14V10.78ZM10.56,2.87c1.41-.07,3.15,1.49,4,6h-.41c-2.82-.33-5.8-1.48-5.73-3.71A2.4,2.4,0,0,1,10.56,2.87Zm10.88,0A2.4,2.4,0,0,1,23.55,5.2c.07,2.23-2.91,3.38-5.73,3.71h-.41C18.29,4.36,20,2.8,21.44,2.87Z'],
  energy: ['M30.15,14.83a1,1,0,0,0-1-.72H17.05l10-11.46A1,1,0,0,0,26.33,1H12.45a1,1,0,0,0-.88.52L1.93,19.18a1,1,0,0,0,.88,1.47h7.33L5.29,29.53A1,1,0,0,0,6.17,31a1,1,0,0,0,.54-.16l23-14.9A1,1,0,0,0,30.15,14.83ZM15.48,6l-4.21,7.72a.87.87,0,0,1-.77.45.83.83,0,0,1-.42-.11.87.87,0,0,1-.34-1.18L14,5.16A.87.87,0,0,1,15.48,6Z']
};

/*
  Outline decorative icons
 */
var outline = {
  appliance: ['M23,8.88H17a1,1,0,1,1,0-2h6a1,1,0,1,1,0,2Z', 'M9.56,6.5600000000000005A1.44,1.44,0,0,1,9.56,9.44A1.44,1.44,0,0,1,9.56,6.5600000000000005Z', 'M26,31H3V4A3,3,0,0,1,6,1H26a3,3,0,0,1,3,3V28A3,3,0,0,1,26,31ZM5,29H26a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H6A1,1,0,0,0,5,4Z', 'M16,12c-4.71,0-7,2.29-7,7s2.29,7,7,7,7-2.36,7-7S20.64,12,16,12Zm0,2c1.89,0,3.19.45,4,1.41-.78,4.28-5.94,4.62-8.94,4.45A7.81,7.81,0,0,1,11,19C11,15.43,12.39,14,16,14Zm0,10c-2.4,0-3.8-.65-4.48-2.12l.71,0c4.13,0,7.18-1.27,8.73-3.59,0,.23,0,.44,0,.69C21,22.57,19.47,24,16,24Z'],
  bill: ['M18.4,24H13V20H16.1a1,1,0,0,0,0-2H13V14.83A1.71,1.71,0,0,1,14.71,13a1.88,1.88,0,0,1,1.82,2,1,1,0,0,0,1,1,1,1,0,0,0,1-1A3.85,3.85,0,0,0,14.71,11,3.75,3.75,0,0,0,12,12.17a3.59,3.59,0,0,0-1,2.72V18h0a1,1,0,0,0,0,2h0v6H18.4a1,1,0,0,0,0-2Z', 'M21.41,1H9A3,3,0,0,0,6,4V31H25a3,3,0,0,0,3-3V7.59ZM21,3.41,25.59,8H22a1,1,0,0,1-1-1ZM25,29H8V4A1,1,0,0,1,9,3H19V7a3,3,0,0,0,3,3h4V28A1,1,0,0,1,25,29Z'],
  boiler: ['M21.62,24A1.38,1.38,0,0,1,21.62,26.759999999999998A1.38,1.38,0,0,1,21.62,24Z', 'M17.62,24A1.38,1.38,0,0,1,17.62,26.759999999999998A1.38,1.38,0,0,1,17.62,24Z', 'M20,8H12a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z', 'M24,1H8A3,3,0,0,0,5,4V31H24a3,3,0,0,0,3-3V4A3,3,0,0,0,24,1ZM8,3H24a1,1,0,0,1,1,1v6.9c-1.55,9.54-12.47,9.87-18,9.4V4A1,1,0,0,1,8,3ZM24,29H7V22.3c1.05.08,2.07.14,3.05.14,7,0,12.21-2.19,15-6.19V28A1,1,0,0,1,24,29Z'],
  electricity: ['M16,5.74a6.45,6.45,0,0,0-6.37,6.51.92.92,0,1,0,1.83,0A4.6,4.6,0,0,1,16,7.61a.94.94,0,0,0,0-1.87Z', 'M27,12.11a11,11,0,1,0-22,0,11.17,11.17,0,0,0,2.92,7.55,38.91,38.91,0,0,1,2.62,3.41,10.26,10.26,0,0,1,1.79,4.25v.87A2.79,2.79,0,0,0,15.08,31h1.84a2.79,2.79,0,0,0,2.75-2.81v-.87c0-1.2.92-2.6,1.75-3.95l.19-.3c.84-1.37,2.45-3.39,2.45-3.39h0A11.17,11.17,0,0,0,27,12.11ZM17.83,28.19a.92.92,0,0,1-.91.93H15.08a.92.92,0,0,1-.91-.93V26.31h3.66Zm2.23-6.12-.19.3c-.4.65-.83,1.35-1.19,2.07H13.39a22.8,22.8,0,0,0-1.3-2.37A44.15,44.15,0,0,0,9.3,18.42l0,0a9.2,9.2,0,1,1,15.9-6.28,9.29,9.29,0,0,1-2.49,6.33A44.11,44.11,0,0,0,20.06,22.07Z'],
  gas: ['M16,31A11,11,0,0,1,5,19.93a11.61,11.61,0,0,1,2.53-7.1l1.06-1.38.6,1.64a8,8,0,0,0,2.15,3.46C10.74,13.94,10,9,12.72,5.43a11.86,11.86,0,0,1,6.63-4.14L21,1l-.56,1.56A7.88,7.88,0,0,0,21.48,9a18,18,0,0,0,1.85,2.42,22.24,22.24,0,0,1,1.5,1.87A11.09,11.09,0,0,1,16,31ZM8.12,15.41a9.29,9.29,0,0,0-1.21,4.52,9.09,9.09,0,1,0,18.18,0,9.24,9.24,0,0,0-.94-4.06h0a13.83,13.83,0,0,0-.86-1.43,8.67,8.67,0,0,0-.62-.74l0,0q-.4-.49-.81-1a18.69,18.69,0,0,1-2-2.67,10.3,10.3,0,0,1-1.62-6.39,9.78,9.78,0,0,0-4,3C11.6,10,13,15.2,13.46,17.17c.2.74.27,1,.09,1.39a1.09,1.09,0,0,1-1.13.59C11.5,19.1,9.59,18.22,8.12,15.41Z', 'M15.73,26.21a1,1,0,0,1,0-1.92A4.59,4.59,0,0,0,20.3,19.7a1,1,0,0,1,1.92,0A6.51,6.51,0,0,1,15.73,26.21Z'],
  home: ['M26.66,31H18V23.11c0-1.64-.45-2.11-2-2.11s-2,.43-2,2.11V31H5.34A3.29,3.29,0,0,1,2,27.79V15.06a5.43,5.43,0,0,1,1.73-3.94l9.81-9.18a3.42,3.42,0,0,1,4.61,0l10.07,9.2a5.41,5.41,0,0,1,1.78,4V27.79A3.29,3.29,0,0,1,26.66,31ZM20,29h6.64A1.3,1.3,0,0,0,28,27.79V15.1a3.4,3.4,0,0,0-1.13-2.51L16.8,3.39a1.42,1.42,0,0,0-1.89,0L5.09,12.58A3.44,3.44,0,0,0,4,15.06V27.79A1.3,1.3,0,0,0,5.34,29H12V23.11C12,20.34,13.29,19,16,19s4,1.38,4,4.11Z'],
  protect: ['M16,31l-.47-.29C9.44,27,6.24,23.36,5.14,18.89S4,6.62,4,6.29V5.66L15,1.2a2.67,2.67,0,0,1,2,0L28,5.66v.63c0,.33,0,8-1.14,12.6S22.56,27,16.47,30.71ZM5.84,6.92A63,63,0,0,0,6.92,18.44c1,3.89,3.68,7,9.08,10.38,5.4-3.36,8.12-6.49,9.08-10.38A63,63,0,0,0,26.16,6.92l-9.82-4a.89.89,0,0,0-.68,0Z', 'M20.71,11.12a.89.89,0,0,1-.64-.26,5.68,5.68,0,0,0-7.91,0,.91.91,0,0,1-1.3,0,.94.94,0,0,1,0-1.32,7.49,7.49,0,0,1,10.45,0,.94.94,0,0,1,0,1.32A.9.9,0,0,1,20.71,11.12Z', 'M20.41,15.47l-3.14-2.71a2,2,0,0,0-2.64,0l-3.06,2.71A1.85,1.85,0,0,0,11,16.85v3.74a1.91,1.91,0,0,0,2,1.86h6.2a1.91,1.91,0,0,0,1.95-1.86V16.86A1.83,1.83,0,0,0,20.41,15.47ZM19.1,20.59H16.92v-2a.92.92,0,1,0-1.84,0v2H12.9a.41.41,0,0,1-.1,0h0v-3.7l3.06-2.7a.21.21,0,0,1,.24,0l3.13,2.68v3.69S19.18,20.59,19.1,20.59Z'],
  meter: ['M28,26H1V9A3,3,0,0,1,4,6H28a3,3,0,0,1,3,3V23A3,3,0,0,1,28,26ZM3,24H28a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H4A1,1,0,0,0,3,9Z', 'M10,17.81a1,1,0,0,1-1-1V14.94a1,1,0,1,1,2,0v1.87A1,1,0,0,1,10,17.81Z', 'M18,17.81a1,1,0,0,1-1-1V14.94a1,1,0,1,1,2,0v1.87A1,1,0,0,1,18,17.81Z', 'M26,10.69H6a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V11.69A1,1,0,0,0,26,10.69ZM25,19H23a1.06,1.06,0,0,0,0-.19V16.94a1,1,0,1,0-2,0v1.87A1.06,1.06,0,0,0,21,19H7V12.69h6.05a1,1,0,0,0-.05.25v1.87a1,1,0,1,0,2,0V12.94a1,1,0,0,0-.05-.25H25Z'],
  rewards: ['M29.07,9.22H23a4.68,4.68,0,0,0,2.42-4.08A4.28,4.28,0,0,0,21.55,1C18.4.83,16.79,4.16,16,6.88,15.24,4.23,13.69,1,10.7,1h-.25A4.28,4.28,0,0,0,6.58,5.14,4.68,4.68,0,0,0,9,9.22H2.93A2.49,2.49,0,0,0,.45,11.71V13a2.49,2.49,0,0,0,2.48,2.49h.94V28.51A2.49,2.49,0,0,0,6.36,31h8.4V10.78h2.48V31h8.4a2.49,2.49,0,0,0,2.49-2.49V15.45h.94A2.49,2.49,0,0,0,31.55,13V11.71A2.49,2.49,0,0,0,29.07,9.22ZM10.56,2.87c1.41-.07,3.15,1.49,4,6h-.41c-2.82-.33-5.8-1.48-5.73-3.71A2.4,2.4,0,0,1,10.56,2.87Zm2.33,26.26H6.36a.63.63,0,0,1-.63-.62V15.45h7.16Zm-9-15.55H2.93A.62.62,0,0,1,2.31,13V11.71a.62.62,0,0,1,.62-.62h10v2.49ZM21.44,2.87A2.4,2.4,0,0,1,23.55,5.2c.07,2.23-2.91,3.38-5.73,3.71h-.41C18.29,4.36,20,2.8,21.44,2.87Zm4.83,25.64a.63.63,0,0,1-.63.62H19.11V15.45h7.16ZM29.69,13a.62.62,0,0,1-.62.62h-10V11.09h10a.62.62,0,0,1,.62.62Z'],
  energy: ['M24.69,2.74,15.74,13a1.74,1.74,0,0,0-.28,1.86,1.75,1.75,0,0,0,1.59,1h9.62L8.23,27.78l3.44-6.3a1.74,1.74,0,0,0-1.53-2.57H4.06L12.89,2.74h11.8M26.33,1H12.45a1,1,0,0,0-.88.52L1.93,19.18a1,1,0,0,0,.88,1.47h7.33L5.29,29.53a1,1,0,0,0,.2,1.2,1,1,0,0,0,.68.27,1,1,0,0,0,.54-.16l23-14.9a1,1,0,0,0,.42-1.11,1,1,0,0,0-1-.72H17.05l10-11.46A1,1,0,0,0,26.33,1Z', 'M10.5,14.16a.83.83,0,0,1-.42-.11.87.87,0,0,1-.34-1.18L14,5.16A.87.87,0,0,1,15.48,6l-4.21,7.72A.87.87,0,0,1,10.5,14.16Z']
};

Object.keys(solid).forEach(function (icon) {
  icons[icon] = solid[icon];
  icons[icon + 'Solid'] = solid[icon];
});

Object.keys(duplicateIcons).forEach(function (icon) {
  icons['' + icon] = duplicateIcons[icon];
});

Object.keys(outline).forEach(function (icon) {
  icons[icon + 'Outline'] = outline[icon];
});

var generateSVG$1 = function generateSVG() {
  var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'arrowRight';
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '100%';

  var paths = icons[icon];
  var inner = paths.map(function (path) {
    return '<path d="' + path + '"/>';
  }).join('');
  var transform = transforms[icon] || '';

  return '\n<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="' + size + '" height="' + size + '" preserveAspectRatio="xMidYMid meet">\n  <g ' + transform + '>\n    ' + inner + '\n  </g>\n</svg>\n  ';
};

var styles$a = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host-context(.animated:hover) .arrow svg,:host-context(.animated:hover) .arrow-right svg{-webkit-transform:translateX(.25em);transform:translateX(.25em);-webkit-transition:.3s;transition:.3s}:host-context(.animated:hover) .download svg path:nth-child(1){-webkit-transform:translateY(.15em);transform:translateY(.15em);-webkit-transition:.3s;transition:.3s}:host{display:inline-block}:host svg{display:block;fill:currentColor}:host .loading svg{-webkit-animation:1.5s linear infinite spinner;animation:1.5s linear infinite spinner}";

var nsIcon = function (_LitElement) {
  inherits(nsIcon, _LitElement);

  nsIcon.prototype.sizes = function sizes(size) {
    size -= 1;
    var sizes = [16, 32, 48, 64, 72];
    return sizes[size] || '100%';
  };

  createClass(nsIcon, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String },
        size: { type: Number }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$a]);
    }
  }]);

  function nsIcon() {
    classCallCheck(this, nsIcon);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'arrow';
    return _this;
  }

  nsIcon.prototype.camelCase = function camelCase(string) {
    return string.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  nsIcon.prototype.updated = function updated() {
    this.setAttribute('aria-hidden', 'true');
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsIcon.prototype.render = function render() {
    var computedSize = this.sizes(this.size);
    var size = computedSize === '100%' ? computedSize : computedSize + 'px';

    return html(['\n      <style>\n        :host, :host .icon {\n          max-width: ' + size + ';\n          height: ' + size + ';\n        }\n      </style>\n      <div class="icon ' + this.type + '">\n        ' + generateSVG$1(this.camelCase(this.type), computedSize) + '\n      </div>\n    ']);
  };

  return nsIcon;
}(LitElement);

customElements.define('ns-icon', nsIcon);

var illustrations = {};

illustrations.appliance = '<defs><linearGradient id="appliance-linear-gradient" x1="32.97" y1="1070.49" x2="62.77" y2="1005.77" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#003c71"/><stop offset="1" stop-color="#005eb8"/></linearGradient><linearGradient id="appliance-linear-gradient-2" x1="46.32" y1="1059.65" x2="-3.09" y2="999.23" xlink:href="#appliance-linear-gradient"/><linearGradient id="appliance-linear-gradient-3" x1="44.5" y1="1061.12" x2="50.38" y2="1032.77" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#083f6f"/><stop offset="0.2" stop-color="#084178"/><stop offset="0.53" stop-color="#084692"/><stop offset="0.94" stop-color="#094fbb"/><stop offset="1" stop-color="#0950c1"/></linearGradient><linearGradient id="appliance-linear-gradient-4" x1="66.44" y1="968.92" x2="41.8" y2="1009.91" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8ed8f8"/><stop offset="1" stop-color="#12a1fe"/></linearGradient><linearGradient id="appliance-linear-gradient-5" x1="10.19" y1="974.04" x2="34.81" y2="1007.16" xlink:href="#appliance-linear-gradient-4"/></defs><path d="M10,84.1a9,9,0,0,0,9,9H77a9,9,0,0,0,9-9V25.6H10Z" style="fill:url(#appliance-linear-gradient)"/><path d="M10,25.6V84.1a9,9,0,0,0,9,9H48V25.6Z" style="fill:url(#appliance-linear-gradient-2)"/><circle cx="48" cy="59" r="24" style="fill:#4db8ff"/><path d="M59.1,61.2a14.32,14.32,0,0,1-11.8.6c-1.7-.7-3.2-1.7-4.8-2.3a14.23,14.23,0,0,0-12.4.9c.2,6.1,1.4,10.3,3.7,12.7l.1.1c2.6,2.5,7.2,3.8,14.2,3.8,6.8,0,11.4-1.3,14-3.8s4-7.3,4-14.2c0-1.5-.1-3.1-.2-4.6A16.5,16.5,0,0,1,59.1,61.2Z" style="fill:url(#appliance-linear-gradient-3)"/><path d="M86,25.6H10V12.1a9,9,0,0,1,9-9H77a9,9,0,0,1,9,9Z" style="fill:url(#appliance-linear-gradient-4)"/><path d="M48,25.6H10V12.1a9,9,0,0,1,9-9H39a9,9,0,0,1,9,9Z" style="fill:url(#appliance-linear-gradient-5)"/><path d="M71.3,12.6h-12c-2.7,0-3.8,1.1-3.8,3.8s1,3.8,3.8,3.8h12c2.6,0,3.8-1.1,3.8-3.8S73.9,12.6,71.3,12.6Z" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="22.2" cy="16.3" r="3.8" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="23.6" cy="14.3" r="3.8" style="fill:#fff"/><circle cx="35.5" cy="16.3" r="3.8" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="36.9" cy="14.3" r="3.8" style="fill:#fff"/><path d="M72.7,10.6h-12c-2.7,0-3.7,1.1-3.7,3.8s1,3.8,3.8,3.8h12c2.6,0,3.8-1.1,3.8-3.8S75.3,10.6,72.7,10.6Z" style="fill:#fff"/><path d="M44.9,43.7c7,0,11.8,1.3,14.6,4.1s4.2,7.6,4.2,14.7-1.4,11.9-4.2,14.7S52,81.3,44.9,81.3s-12.1-1.3-14.8-4c-1-1-4-4-4-14.7s3-13.7,4-14.7c2.7-2.9,7.5-4.1,14.8-4.2m.9-6.4c-17.3,0-20.3,6.5-20.3,23.7s6.8,20.3,20.3,20.3c16.6,0,24-2.9,24-20s-7.4-24-24-24Z" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><path d="M48,41c6.8,0,11.4,1.3,14,3.8S66,52,66,59s-1.3,11.5-4,14.1S54.8,77,48,77c-7,0-11.7-1.2-14.2-3.8S30,66,30,59s1.2-11.7,3.8-14.2S41,41,48,41m0-6c-17.3,0-24,6.9-24,24s6.7,24,24,24c16.7,0,24-6.9,24-24S64.7,35,48,35Z" style="fill:#fff"/>';

illustrations.oven = '<defs><linearGradient id="oven-linear-gradient" x1="28.4" y1="83.92" x2="32.68" y2="92.32" gradientTransform="matrix(1, 0, 0, -1, 0, 98)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#003c71"/><stop offset="1" stop-color="#005eb8"/></linearGradient><linearGradient id="oven-linear-gradient-2" x1="61.4" y1="83.92" x2="65.68" y2="92.32" xlink:href="#oven-linear-gradient"/><linearGradient id="oven-linear-gradient-3" x1="19.85" y1="-8.22" x2="58.7" y2="68.03" xlink:href="#oven-linear-gradient"/><linearGradient id="oven-linear-gradient-4" x1="62.64" y1="8.54" x2="19.65" y2="61.64" xlink:href="#oven-linear-gradient"/><linearGradient id="oven-linear-gradient-5" x1="6.5" y1="81" x2="63.8" y2="81" gradientTransform="matrix(1, 0, 0, -1, 0, 98)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8ed8f8"/><stop offset="1" stop-color="#12a1fe"/></linearGradient></defs><rect x="21.5" y="7" width="20" height="2" style="fill:url(#oven-linear-gradient)"/><rect x="54.5" y="7" width="20" height="2" style="fill:url(#oven-linear-gradient-2)"/><path d="M72,93H24a9,9,0,0,1-9-9V18a9,9,0,0,1,9-9H72a9,9,0,0,1,9,9V84A9.09,9.09,0,0,1,72,93Z" style="fill:url(#oven-linear-gradient-3)"/><path d="M39,93H24a9,9,0,0,1-9-9V18a9,9,0,0,1,9-9H39a9,9,0,0,1,9,9V84A9,9,0,0,1,39,93Z" style="fill:url(#oven-linear-gradient-4)"/><rect x="15" y="9" width="66" height="16" style="fill:url(#oven-linear-gradient-5)"/><circle cx="68" cy="19.1" r="3.8" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="70" cy="17.1" r="3.8" style="fill:#fff"/><circle cx="24" cy="19.1" r="3.8" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="26" cy="17.1" r="3.8" style="fill:#fff"/><circle cx="38.7" cy="19.1" r="3.8" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="40.7" cy="17.1" r="3.8" style="fill:#fff"/><circle cx="53.3" cy="19.1" r="3.8" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><circle cx="55.3" cy="17.1" r="3.8" style="fill:#fff"/><path d="M64.1,34H31.9A10.93,10.93,0,0,0,21,44.9V67.3c0,7.3,4.9,13.2,10.9,13.2H64.1c6,0,10.9-5.9,10.9-13.2V45A11,11,0,0,0,64.1,34Z" style="fill:#4db8ff"/><path d="M31.9,34A10.93,10.93,0,0,0,21,44.9V69.7A10.93,10.93,0,0,0,31.9,80.6H48V34Z" style="fill:#003c71;opacity:0.15000000596046448;isolation:isolate"/><rect x="16" y="46" width="60" height="4" style="fill:#003c71;opacity:0.30000001192092896;isolation:isolate"/><rect x="18" y="44" width="60" height="4" style="fill:#fff"/>';

illustrations.boiler = '<defs><linearGradient id="boiler-linear-gradient" x1="69.41" y1="1956.81" x2="31.67" y2="2050.11" gradientTransform="translate(0 -1964)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5dbc64"/><stop offset="1" stop-color="#00493b"/></linearGradient><linearGradient id="boiler-linear-gradient-2" x1="44.63" y1="999.69" x2="44.92" y2="999.04" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#003c71"/><stop offset="1" stop-color="#005eb8"/></linearGradient></defs><path d="M25.7,93H66.2a4.49,4.49,0,0,0,4.5-4.46v0h-45Z" style="fill:#c0e300"/><g style="opacity:0.20000000298023224"><rect x="25.7" y="88.5" width="22.5" height="4.5" style="fill:#42505a"/></g><path d="M72,88.5H24a9,9,0,0,1-9-9V12a9,9,0,0,1,9-9H72a9,9,0,0,1,9,9V79.5A9,9,0,0,1,72,88.5Z" style="fill:url(#boiler-linear-gradient)"/><rect x="15" y="66.8" width="66" height="4.5" style="fill:#c0e300"/><rect x="15" y="66.8" width="33" height="4.5" style="fill:#42505a;opacity:0.20000000298023224;isolation:isolate"/><path d="M72,3H24a9,9,0,0,0-9,9V59.3h.3C68.8,65.1,79.1,38.6,81,26.7V12A9,9,0,0,0,72,3Z" style="opacity:0.15;isolation:isolate"/><circle cx="66.1" cy="81.4" r="3.8" style="opacity:0.25;isolation:isolate"/><circle cx="67.6" cy="79.4" r="3.8" style="fill:#fff"/><circle cx="53.1" cy="81.4" r="3.8" style="opacity:0.25;isolation:isolate"/><circle cx="54.5" cy="79.4" r="3.8" style="fill:#fff"/><path d="M44.66,17.52a2.7,2.7,0,0,0,.35-.59A2.7,2.7,0,0,1,44.66,17.52Z" style="fill:url(#boiler-linear-gradient-2)"/><path d="M56.38,28.89c-.11-.2-.23-.4-.35-.6L56,28.16l-.49-.72h0a20.13,20.13,0,0,0-1.61-2.07,17.57,17.57,0,0,1-2-2.6,8.35,8.35,0,0,1-1.15-6.95l.63-1.67h0l-.19,0h0l-1.54.27a12.87,12.87,0,0,0-7.16,4.46c-2.61,3.32-2.94,8.55-1.4,12.22a7,7,0,0,0,.71,1.28h0A11.09,11.09,0,0,1,39,28.57a6.76,6.76,0,0,1-.36-1.24l0-.19v0a8,8,0,0,1-.13-2.18,4.4,4.4,0,0,0-.5.46l0,.05a16.56,16.56,0,0,0-1.61,2.11,11.68,11.68,0,0,0-.66,1.06,12.3,12.3,0,0,0-1.57,5.9,11.88,11.88,0,1,0,22.31-5.62Z" style="opacity:0.25;isolation:isolate"/><path d="M58.38,26.89c-.11-.2-.23-.4-.35-.6L58,26.16l-.49-.72h0a20.13,20.13,0,0,0-1.61-2.07,17.57,17.57,0,0,1-2-2.6,8.35,8.35,0,0,1-1.15-6.95l.63-1.67h0l-.19,0h0l-1.54.27a12.87,12.87,0,0,0-7.16,4.46c-2.61,3.32-2.94,8.55-1.4,12.22a7,7,0,0,0,.71,1.28h0A11.09,11.09,0,0,1,41,26.57a6.76,6.76,0,0,1-.36-1.24l0-.19v0a8,8,0,0,1-.13-2.18,4.4,4.4,0,0,0-.5.46l0,.05a16.56,16.56,0,0,0-1.61,2.11,11.68,11.68,0,0,0-.66,1.06,12.3,12.3,0,0,0-1.57,5.9,11.88,11.88,0,1,0,22.31-5.62Z" style="fill:#c0e300"/><path d="M47.07,44.34l.45,0,.27-.14c5.05-2.63,5.05-7.71,3.16-11.89-1.32-2.92-3-3.83-4.41-7.77s1-10.4,6.54-12.37l-1.54.27a12.87,12.87,0,0,0-7.16,4.46c-2.61,3.32-2.94,8.55-1.4,12.22,1.47,3.51,6,5.38,6.44,9.55C49.71,41.72,48.51,43.44,47.07,44.34Z" style="fill:#fff"/>';

illustrations.bulb = '<defs><linearGradient id="bulb-linear-gradient" x1="25.64" y1="1053.76" x2="78.02" y2="970.51" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff7a00"/><stop offset="1" stop-color="#ffe500"/></linearGradient><linearGradient id="bulb-linear-gradient-2" x1="39.45" y1="1070.12" x2="54.09" y2="1049.6" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8b0304"/><stop offset="1" stop-color="#ee3124"/></linearGradient></defs><path d="M48.78,93H47.26a4.48,4.48,0,0,1-4.47-4.48H53.25A4.48,4.48,0,0,1,48.78,93Z" style="fill:#ffa800"/><path d="M48,3A32.93,32.93,0,0,0,15,35.79a32.53,32.53,0,0,0,8.83,22.32h0s4.82,6,7.35,10l.56.9c2.5,4,5.09,8.11,5.26,11.64V81H59v-.37c.19-3.91,2.88-8.52,5.39-12.54A126.75,126.75,0,0,1,72.19,58,32.51,32.51,0,0,0,81,35.79,32.93,32.93,0,0,0,48,3Z" style="fill:url(#bulb-linear-gradient)"/><path d="M81,35.79A33,33,0,0,0,31.58,7.34a32.51,32.51,0,0,0,42.3,48.73A32.57,32.57,0,0,0,81,35.79Z" style="fill:#ffc600;opacity:0.7"/><path d="M33.75,72.32c1.7,2.9,3.09,5.76,3.21,8.31v-.38c0,4.58,1.26,8.3,5.8,8.3h10.5c4.55,0,5.7-3.72,5.7-8.3v.38c.12-2.59,1.35-5.48,2.88-8.31Z" style="fill:url(#bulb-linear-gradient-2)"/><path d="M33.75,72.32c1.7,2.9,3.09,5.76,3.21,8.31v-.38c0,4.58,1.26,8.3,5.8,8.3h10.5c4.55,0,5.7-3.72,5.7-8.3v.38c.12-2.59,1.35-5.48,2.88-8.31Z" style="fill:url(#bulb-linear-gradient-2)"/><path d="M49.39,19.46a2.82,2.82,0,0,1,0-5.63A19.34,19.34,0,0,1,68.5,33.37a2.75,2.75,0,1,1-5.5,0h0A13.78,13.78,0,0,0,49.39,19.46Z" style="fill:#fff"/><rect width="96" height="96" style="fill:none"/><path d="M48,88.52H42.79A4.48,4.48,0,0,0,47.26,93H48Z" style="fill:#ff7a00;opacity:0.5"/><path d="M33.75,72.32c1.7,2.9,3.09,5.76,3.21,8.31v-.38c0,4.58,1.26,8.3,5.8,8.3H48V72.32Z" style="opacity:0.12"/>';

illustrations.clock = '<defs><linearGradient id="clock-linear-gradient" x1="73.74" y1="956.39" x2="35.66" y2="1064.89" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5dbc64"/><stop offset="1" stop-color="#00493b"/></linearGradient></defs><path d="M88,48c0,28.56-12.23,40-40,40C19.12,88,8,76.56,8,48S19.12,8,48,8C75.77,8,88,19.44,88,48Z" style="fill:url(#clock-linear-gradient)"/><path d="M48,8h.16V88H48C19.12,88,8,76.56,8,48S19.12,8,48,8Z" style="fill:#00493b;opacity:0.3"/><path d="M39.84,53.23c-1-2.06-.5-3.29,1.47-4.22L63.45,38.3c2-1,3.23-.51,4.2,1.55s.57,3.26-1.48,4.22L44,54.78C42.06,55.71,40.81,55.29,39.84,53.23Z" style="opacity:0.25;isolation:isolate"/><path d="M40.69,51.53c-1-2.06-.5-3.29,1.47-4.22L64.3,36.6c2-1,3.23-.51,4.2,1.55s.57,3.26-1.48,4.22L44.88,53.08C42.91,54,41.66,53.59,40.69,51.53Z" style="fill:#c0e300"/><path d="M53.13,54.68c-1.66,1.56-3,1.49-4.47-.1L24.88,29.78c-1.55-1.65-1.48-2.91.17-4.47s2.92-1.55,4.48.1L53.3,50.21C54.79,51.8,54.79,53.12,53.13,54.68Z" style="opacity:0.25;isolation:isolate"/><path d="M54,53c-1.66,1.56-3,1.49-4.47-.1L25.73,28.08c-1.55-1.65-1.48-2.91.17-4.47s2.92-1.55,4.48.1l23.77,24.8C55.64,50.1,55.64,51.42,54,53Z" style="fill:#fff"/><path d="M46.93,13.85c2.17,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13S43.8,19.21,43.8,17,44.67,13.85,46.93,13.85Z" style="opacity:0.25;isolation:isolate"/><path d="M48,12.81c2.18,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13-3.12-.9-3.12-3.13S45.72,12.81,48,12.81Z" style="fill:#fff"/><path d="M79.46,45.82c2.18,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13-3.12-.9-3.12-3.13S77.21,45.82,79.46,45.82Z" style="opacity:0.25;isolation:isolate"/><path d="M80.51,44.78c2.17,0,3.12.89,3.12,3.13S82.68,51,80.51,51s-3.13-.89-3.13-3.12S78.25,44.78,80.51,44.78Z" style="fill:#fff"/><path d="M46.93,78.13c2.17,0,3.13.89,3.13,3.13s-1,3.12-3.13,3.12-3.13-.89-3.13-3.12S44.67,78.13,46.93,78.13Z" style="opacity:0.25;isolation:isolate"/><path d="M48,77.09c2.18,0,3.13.89,3.13,3.12s-1,3.13-3.13,3.13-3.12-.89-3.12-3.13S45.72,77.09,48,77.09Z" style="fill:#fff"/><path d="M14.4,45.82c2.17,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13-3.13-.9-3.13-3.13S12.14,45.82,14.4,45.82Z" style="opacity:0.25;isolation:isolate"/><path d="M15.44,44.78c2.17,0,3.13.89,3.13,3.13S17.61,51,15.44,51s-3.13-.89-3.13-3.12S13.18,44.78,15.44,44.78Z" style="fill:#fff"/><path d="M48,3C15.51,3,3,15.87,3,48S15.51,93,48,93c31.24,0,45-12.87,45-45S79.24,3,48,3Zm0,85C19.12,88,8,76.56,8,48S19.12,8,48,8C75.77,8,88,19.44,88,48S75.77,88,48,88Z" style="fill:#c0e300"/><rect width="96" height="96" style="fill:none"/>';

illustrations.gas = '<defs><linearGradient id="gas-linear-gradient" x1="24.96" y1="109.7" x2="68.74" y2="13.99" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#003c71"/><stop offset="0.21" stop-color="#003f77"/><stop offset="0.49" stop-color="#004788"/><stop offset="0.8" stop-color="#0054a3"/><stop offset="1" stop-color="#005eb8"/></linearGradient><linearGradient id="gas-linear-gradient-2" x1="63.09" y1="-25.08" x2="39.32" y2="81.68" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8ed8f8"/><stop offset="1" stop-color="#12a1fe"/></linearGradient></defs><path d="M77.13,43.51c-.31-.57-.63-1.13-1-1.68l-.23-.37c-.43-.68-.89-1.35-1.37-2h0A52.53,52.53,0,0,0,70,33.68a52.84,52.84,0,0,1-5.64-7.26A23.39,23.39,0,0,1,61.2,7L63,2.33h0l-.54.09-.08,0L58,3.2A35.9,35.9,0,0,0,38,15.65c-7.3,9.28-8.22,23.88-3.91,34.15a20.36,20.36,0,0,0,2,3.57h0A31.14,31.14,0,0,1,28.5,42.62a22.17,22.17,0,0,1-1-3.47l-.09-.53v-.08a23,23,0,0,1-.36-6.09,10.62,10.62,0,0,0-1.39,1.29l-.1.12a44.5,44.5,0,0,0-4.5,5.91,34.55,34.55,0,0,0-6.24,19.42A33.18,33.18,0,1,0,77.13,43.51Z" style="fill:url(#gas-linear-gradient)"/><path d="M45.55,92.24l1.25.06.75-.39c14.1-7.35,14.1-21.54,8.83-33.22C52.7,50.53,48.13,48,44.07,37S46.72,7.94,62.32,2.44L58,3.2A35.9,35.9,0,0,0,38,15.65c-7.3,9.28-8.22,23.88-3.91,34.15,4.11,9.79,16.83,15,18,26.66C52.93,84.91,49.58,89.73,45.55,92.24Z" style="fill:url(#gas-linear-gradient-2)"/>';

illustrations.home = '<defs><linearGradient id="home-linear-gradient" x1="39.94" y1="1070.8" x2="65.01" y2="990.8" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff7a00"/><stop offset="0.85" stop-color="#ffd500"/><stop offset="1" stop-color="#ffe500"/></linearGradient><linearGradient id="home-linear-gradient-2" x1="27.72" y1="1096.89" x2="65.82" y2="1023.74" gradientTransform="translate(0 -982)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8b0304"/><stop offset="1" stop-color="#ee3124"/></linearGradient></defs><path d="M72.55,93H23.48a9.2,9.2,0,0,1-9.2-9.2V40.87L48,13.27l33.74,27.6V83.8A9.2,9.2,0,0,1,72.55,93Z" style="fill:url(#home-linear-gradient)"/><path d="M48,13.27,14.28,40.87V83.8a9.2,9.2,0,0,0,9.2,9.2H48Z" style="fill:#ff7a00;opacity:0.35"/><path d="M63.46,64.26C63.43,53.39,58.74,49,48.13,49c-11,0-15.3,4.37-15.33,15.24h0V93H63.46Z" style="fill:url(#home-linear-gradient-2)"/><path d="M63.46,64.26C63.43,53.39,58.74,49,48.13,49,41.46,49,37.28,50.63,35,54.29c2.4-1.5,5.69-2.2,10.06-2.2,10.62,0,15.31,3.34,15.34,14.22V93h3.06Z" style="opacity:0.12"/><g style="opacity:0.20000000298023224"><circle cx="54.79" cy="72.23" r="3.07"/></g><circle cx="55.82" cy="71.21" r="3.07" style="fill:#fff"/><path d="M87.53,50.07a6.43,6.43,0,0,1-4.13-1.5L48,19.08,12.63,48.57a6.44,6.44,0,0,1-9.07-.81l-.06-.07a6.57,6.57,0,0,1,.87-9.2L43.88,5.57a6.44,6.44,0,0,1,8.26,0L91.66,38.49a6.57,6.57,0,0,1,.87,9.2A6.42,6.42,0,0,1,87.53,50.07Z" style="fill:#d7261d"/><rect width="96" height="96" style="fill:none"/><path d="M48,4.07a6.4,6.4,0,0,0-4.12,1.5L4.37,38.49a6.57,6.57,0,0,0-.87,9.2l.06.07a6.44,6.44,0,0,0,9.07.81L48,19.08Z" style="opacity:0.12"/>';

illustrations.protect = '<defs><linearGradient id="protect-linear-gradient" x1="20.71" y1="-979.23" x2="60.7" y2="-889.04" gradientTransform="matrix(1, 0, 0, -1, 0, -884)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8b0304"/><stop offset="1" stop-color="#ee3124"/></linearGradient><linearGradient id="protect-linear-gradient-2" x1="49.01" y1="-969.36" x2="11.06" y2="-849.39" xlink:href="#protect-linear-gradient"/><linearGradient id="protect-linear-gradient-3" x1="29.08" y1="50.62" x2="62.92" y2="50.62" gradientTransform="matrix(1, 0, 0, -1, 0, 98)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8b0304"/><stop offset="1" stop-color="#8b0304" stop-opacity="0.5"/></linearGradient><linearGradient id="protect-linear-gradient-4" x1="31.32" y1="-941.86" x2="68.87" y2="-907.65" gradientTransform="matrix(1, 0, 0, -1, 0, -884)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff7a00"/><stop offset="0.85" stop-color="#ffd500"/><stop offset="1" stop-color="#ffe500"/></linearGradient></defs><path d="M51.1,3.6a8.31,8.31,0,0,0-6.2,0L11.5,17.1V19c0,1,0,24.1,3.5,37.8S28,81,46.6,92.1L48,93l1.4-.9C67.9,80.9,77.7,70.1,81,56.6s3.5-36.8,3.5-37.8V17Z" style="fill:url(#protect-linear-gradient)"/><path d="M48,3a8.15,8.15,0,0,0-3.1.6L11.5,17.1V19c0,1,0,24.1,3.5,37.8S28,81,46.6,92.1L48,93h0Z" style="fill:url(#protect-linear-gradient-2)"/><path d="M62.9,60.4a4.2,4.2,0,0,1-4.4,3.8H49.6V56.7a3.8,3.8,0,1,0-7.6,0h0v7.5H33.1a4.08,4.08,0,0,1-4.2-3.8V45.3a4,4,0,0,1,1.2-2.7l12.6-11a4.67,4.67,0,0,1,5.9,0l2.9,2.5,9.9,8.5a3.51,3.51,0,0,1,1.3,2.7V60.4Z" style="fill:url(#protect-linear-gradient-3)"/><path d="M64.9,58.4a4.2,4.2,0,0,1-4.4,3.8H51.6V54.7a3.8,3.8,0,1,0-7.6,0h0v7.5H35.1a4.08,4.08,0,0,1-4.2-3.8V43.3a4,4,0,0,1,1.2-2.7l12.6-11a4.67,4.67,0,0,1,5.9,0l2.9,2.5,9.9,8.5a3.51,3.51,0,0,1,1.3,2.7V58.4Z" style="fill:#fff"/><path d="M67.8,45.8a3.77,3.77,0,0,1-2.1-.7L48.1,30.3,30.4,45.1a3.17,3.17,0,0,1-4.5-.4h0a3.4,3.4,0,0,1,.4-4.6L46,23.6a3.18,3.18,0,0,1,4.1,0L69.9,40a3.21,3.21,0,0,1,.4,4.6A3,3,0,0,1,67.8,45.8Z" style="fill:url(#protect-linear-gradient-4)"/>';

illustrations.tap = '<defs><linearGradient id="tap-linear-gradient" x1="28.43%" x2="100%" y1="56.37%" y2="46.88%"><stop offset="0%" stop-color="#09F"/><stop offset="100%" stop-color="#09F"/></linearGradient><linearGradient id="tap-linear-gradient-2" x1="28.43%" x2="100%" y1="51.59%" y2="49.22%"><stop offset="0%" stop-color="#09F"/><stop offset="100%" stop-color="#8ED8F8"/></linearGradient><linearGradient id="tap-linear-gradient-3" x1="36.19%" x2="82%" y1="151.96%" y2="0%"><stop offset="0%" stop-color="#09F"/><stop offset="100%" stop-color="#8ED8F8"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="#005EB8" d="M44 20h8v5h-8z"/><path fill="url(#tap-linear-gradient)" d="M28 22h8v2h-8z" transform="translate(16 3)"/><path fill="#005EB8" d="M40 27h16a8 8 0 0 1 8 8v11H32V35a8 8 0 0 1 8-8z"/><path fill="#333F48" d="M40 27h8v19H32V35a8 8 0 0 1 8-8z" opacity=".24"/><path fill="url(#tap-linear-gradient-2)" d="M16 43h32l4 5H12z" transform="translate(16 3)"/><path fill="#333F48" d="M32 46h16v5H28z" opacity=".24"/><path fill="#005EB8" d="M28 55.5V51h40v4.5c0 1.38-8.95 2.5-20 2.5s-20-1.12-20-2.5z"/><path fill="#333F48" d="M28 55.5V51h20v7c-11.05 0-20-1.12-20-2.5z" opacity=".24"/><path fill="url(#tap-linear-gradient-3)" d="M32 90c-6.63 0-12-5.32-12-11.88C20 71.57 31.99 60 31.99 60S44 71.57 44 78.12C44 84.68 38.63 90 32 90z" transform="translate(16 3)"/><path fill="#333F48" d="M48.05 63.06C44.5 66.94 39 73.68 39 78.12 39 84.68 44.37 90 51 90c2.57 0 4.94-.8 6.9-2.15A12.02 12.02 0 0 1 48 93c-6.63 0-12-5.32-12-11.88C36 74.57 47.99 63 47.99 63l.06.06zM44 20h4v7h-4z" opacity=".24"/><path fill="#333F48" d="M44 20h8l-8 5z" opacity=".5"/><path fill="#005EB8" d="M25.14 21.29a9.14 9.14 0 1 1 7.7-14.08 4.57 4.57 0 0 0 7.46 0 9.14 9.14 0 0 1 15.4 0 4.57 4.57 0 0 0 7.46 0 9.14 9.14 0 1 1 0 9.86 4.57 4.57 0 0 0-7.46 0 9.14 9.14 0 0 1-15.4 0 4.57 4.57 0 0 0-7.46 0 9.14 9.14 0 0 1-7.7 4.22z"/><path fill="#333F48" d="M25.14 21.29a9.14 9.14 0 1 1 7.7-14.08 4.57 4.57 0 0 0 7.46 0A9.14 9.14 0 0 1 48 3v18.29a9.14 9.14 0 0 1-7.7-4.22 4.57 4.57 0 0 0-7.46 0 9.14 9.14 0 0 1-7.7 4.22z" opacity=".24"/></g>';

var generateSVG$2 = function generateSVG() {
  var illustration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gas';
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '100%';

  var inner = illustrations[illustration];

  return '\n<?xml version="1.0" encoding="UTF-8"?>\n<svg id="illustration-' + illustration + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96 96" width="' + size + '" height="' + size + '" preserveAspectRatio="xMidYMid meet">\n' + inner + '\n</svg>\n  ';
};

var styles$b = ":host{display:inline-block}:host .illustration{line-height:0}:host .grey{-webkit-filter:grayscale(1);filter:grayscale(1)}";

var nsIllustration = function (_LitElement) {
  inherits(nsIllustration, _LitElement);

  nsIllustration.prototype.sizes = function sizes(size) {
    size -= 1;
    var sizes = [64, 96, 128, 144, 256];
    return sizes[size] || '100%';
  };

  createClass(nsIllustration, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String },
        size: { type: Number }, // 1, 2, 3,4,5
        inactive: { type: String // true or false
        } };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$b]);
    }
  }]);

  function nsIllustration() {
    classCallCheck(this, nsIllustration);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'gas';
    _this.inactive = 'false';
    return _this;
  }

  nsIllustration.prototype.camelCase = function camelCase(string) {
    return string.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  nsIllustration.prototype.updated = function updated() {
    this.setAttribute('aria-hidden', 'true');
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsIllustration.prototype.render = function render() {
    var isGrey = this.inactive === 'true';

    return html(['\n      <div class="illustration ' + (isGrey ? 'grey' : '') + '">\n        ' + generateSVG$2(this.camelCase(this.type), this.sizes(this.size)) + '\n      </div>\n    ']);
  };

  return nsIllustration;
}(LitElement);

customElements.define('ns-illustration', nsIllustration);

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function (window, document) {

  // Exits early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }
    return;
  }

  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect;

    // Calculates the intersection ratio.
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;

    // Sets intersection ratio.
    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }

  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
  function IntersectionObserver(callback, opt_options) {

    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    }

    // Binds and throttles `this._checkForIntersections`.
    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

    // Private properties.
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);

    // Public properties.
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }

  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;

  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
  IntersectionObserver.prototype.POLL_INTERVAL = null;

  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;

  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();
    this._observationTargets.push({ element: target, entry: null });
    this._monitorIntersections();
    this._checkForIntersections();
  };

  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {

      return item.element != target;
    });
    if (!this._observationTargets.length) {
      this._unmonitorIntersections();
      this._unregisterInstance();
    }
  };

  /**
   * Stops observing all target elements for intersection changes.
   */
  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];
    this._unmonitorIntersections();
    this._unregisterInstance();
  };

  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };

  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];

    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };

  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return { value: parseFloat(parts[1]), unit: parts[2] };
    });

    // Handles shorthand.
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];

    return margins;
  };

  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */
  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true;

      // If a poll interval is set, use polling instead of listening to
      // resize and scroll events or DOM mutations.
      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);

        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);
          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };

  /**
   * Stops polling for intersection changes.
   * @private
   */
  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;

      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;

      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);

      if (this._domObserver) {
        this._domObserver.disconnect();
        this._domObserver = null;
      }
    }
  };

  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };

  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {

    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;

    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};

      // If the parent isn't displayed, an intersection can't happen.
      if (parentComputedStyle.display == 'none') return;

      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }

      // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);

        if (!intersectionRect) break;
      }
      parent = getParentNode(parent);
    }
    return intersectionRect;
  };

  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */
  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };

  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */
  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;

    return newRect;
  };

  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {

    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;

    // Ignore unchanged ratios
    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];

      // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };

  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };

  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };

  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
  IntersectionObserver.prototype._registerInstance = function () {
  };

  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */
  IntersectionObserver.prototype._unregisterInstance = function () {
  };

  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
  function now() {
    return window.performance && performance.now && performance.now();
  }

  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */
  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }

  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }

  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }

  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;

    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }

  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */
  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
      // Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect();

    // Older IE
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }

  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }

  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;

      node = getParentNode(node);
    }
    return false;
  }

  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
  function getParentNode(node) {
    var parent = node.parentNode;

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }
    return parent;
  }

  // Exposes the constructors globally.
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})(window, document);

var styles$c = ":host{display:block}:host,:host .image .image-holder,:host .image .image-lazy{display:block;width:100%;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host .image{-webkit-transition:.5s;transition:.5s;position:relative}:host .image::before{pointer-events:none;position:absolute;top:0;bottom:0;left:0;right:0;content:''}:host .image.ar16x9 .image-holder,:host .image.ar16x9::before{padding-bottom:56.25%}:host .image.ar1x1 .image-holder,:host .image.ar1x1::before{padding-bottom:100%}:host .image.ar4x3 .image-holder,:host .image.ar4x3::before{padding-bottom:75%}:host .image.blur{-webkit-filter:blur(.7em);filter:blur(.7em);-webkit-transform:scale(1.03);transform:scale(1.03);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}:host .image .image-holder{background-repeat:no-repeat;background-position:center center}";

/*
  - Story in playground
 */

var nsImage = function (_LitElement) {
  inherits(nsImage, _LitElement);
  createClass(nsImage, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        background: { type: Boolean },
        backgroundsize: { type: String },
        src: { type: String, reflect: true },
        alt: { type: String },
        ratio: { type: String // 1x1, 4x3, 16x9
        } };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$c]);
    }
  }]);

  function nsImage() {
    classCallCheck(this, nsImage);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.background = false;
    _this.backgroundsize = 'cover'; // cover, contain
    _this.ratio = '16x9';
    return _this;
  }

  nsImage.prototype.updated = function updated() {
    var _this2 = this;

    var options = {
      threshold: 0.01,
      rootMargin: "150px"
    };

    var src = this.src;

    if (src) {

      var fetchImage = function fetchImage(url) {
        return new Promise(function (resolve, reject) {
          var image = new Image();

          image.src = url;
          image.onload = resolve;
          image.onerror = reject;
        });
      };

      var elementView = function elementView(target, image) {
        target.style.backgroundImage = 'url(' + image + ')';
        target.style.backgroundSize = '' + _this2.backgroundsize;
      };

      var imgView = function imgView(target, image) {
        target.src = image;
        target.alt = _this2.alt || '';
      };

      var switchImage = function switchImage(target, image, io) {
        _this2.background ? elementView(target, image) : imgView(target, image);

        var blurElem = _this2.shadowRoot.querySelector('.blur');

        if (io && target) {
          io.unobserve(target); // only unobserve after the image has loaded
        }

        if (blurElem) {
          blurElem.classList.remove('blur');
        }
      };

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            var target = entry.target;

            fetchImage(src + '/jcr:content/renditions/original').then(function () {
              switchImage(target, src + '/jcr:content/renditions/original', io);
            }).catch(function () {
              fetchImage(src).then(function () {
                switchImage(target, src, io);
              }).catch(function (e) {
                console.info(e); // to stop headless builds from breaking
              });
            });
          }
        });
      }, options);

      var targetElements = this.shadowRoot.querySelectorAll('.image-lazy, .image-holder');
      for (var _iterator = targetElements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var element = _ref;

        io.observe(element);
      }
    }
  };

  nsImage.prototype.backgroundStyles = function backgroundStyles() {
    var preImg = this.src + '/jcr:content/renditions/cq5dam.thumbnail.48.48.png';

    return '\n    <style>\n    :host .image .image-holder {\n      background-image: url(' + preImg + ');\n      background-size: ' + this.backgroundsize + ';\n    }\n    </style>\n    ';
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsImage.prototype.render = function render() {
    var isBackground = this.background;

    if (this.src && this.src.length > 0) {
      var preImg = this.src + '/jcr:content/renditions/cq5dam.thumbnail.48.48.png';

      return html(['\n        ' + (isBackground ? this.backgroundStyles() : '') + '\n        <div class="image blur ar' + this.ratio + '">\n          ' + (isBackground ? '<div class="image-holder"></div>' : '<img class="image-lazy" src="' + preImg + '" alt="" />') + '\n        </div>\n      ']);
    } else {
      return html(['<div></div>']);
    }
  };

  return nsImage;
}(LitElement);

customElements.define('ns-image', nsImage);

var styles$d = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .inputter-container #input-heading{font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host .inputter-container #input-heading,h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host .inputter-container #input-heading,h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host .inputter-container #input-heading,h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block;font-size:.8em;margin-bottom:1.42382813em}:host .select-arrow{display:inline-block;position:relative}:host .select-arrow::after{pointer-events:none;position:absolute;content:\"\";top:50%;right:1.5em;width:.875em;height:.875em;-webkit-transform:translateY(-75%) rotate(45deg);transform:translateY(-75%) rotate(45deg);border-right:.125em solid #005eb8;border-bottom:.125em solid #005eb8}:host .select-arrow:hover::after{border-color:#333f48}:host .inputter-container.is-single ::slotted(label){font-size:1.25em;font-family:\"BG Flame Bold\",sans-serif;display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%;padding-bottom:.5em}:host .inputter-container .helper-content{margin-bottom:1em}:host .inputter-container details{display:inline-block}:host .inputter-container details summary{cursor:pointer}:host .inputter-container details summary:active .message,:host .inputter-container details summary:hover .message{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host .inputter-container details:not([open])>:not(summary){display:none}:host .inputter-container details summary::before{content:\"\"}:host .inputter-container details[open]>summary::before{content:\"\"}:host .inputter-container details[open] .helper-message .icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .inputter-container details slot .helper-message{padding-left:1.5em;padding-right:.5em;cursor:pointer;position:relative}:host .inputter-container details slot .helper-message .icon{display:block}:host .inputter-container details .helper-message::-webkit-details-marker{display:none}:host .inputter-container .helper-message,:host .inputter-container .validation-message{display:inline-block;position:relative}:host .inputter-container .helper-message .message,:host .inputter-container .validation-message .message{position:relative;font-size:1em;padding-right:1.5em}:host .inputter-container .helper-message .icon,:host .inputter-container .validation-message .icon{position:absolute;top:0;width:1.5em;height:1.5em}:host .inputter-container .helper-message:focus{outline-offset:0;outline:#ffdd57 solid .2em}:host .inputter-container .helper-message .icon{pointer-events:none;right:0;color:#005eb8}:host .inputter-container .validation-message{color:#eb002f;padding-left:1.5em;margin-top:.5em}:host .inputter-container .validation-message .icon{left:0}:host .inputter-container .validation-hidden{display:none}@media only screen and (min-width:720px){:host{font-size:.9em;margin-bottom:1.728em}}@media only screen and (min-width:1080px){:host{font-size:1em;margin-bottom:1.953125em}}";

var regularExpressions = {
  // eslint-disable-next-line no-useless-escape
  email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  // eslint-disable-next-line no-useless-escape
  phone: /^([\+]?1\s*[-\/\.]?\s*)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT]?[\.]?|extension)\s*([#*\d]+))*$/,
  // eslint-disable-next-line no-useless-escape
  url: /(?:([A-Za-z]+):)?(\/{0,3})[a-zA-Z0-9][a-zA-Z-0-9]*(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-{}]*[\w@?^=%&amp;\/~+#-{}])??/
};

var isRequired = function isRequired(value) {
  return (value === undefined || value.length === 0) && 'This field is required';
};

var isNumber = function isNumber(value) {
  var val = Number(value);
  var isNum = typeof val === 'number' && !isNaN(val);
  return value.length > 0 && !isNum && 'Needs to be a number';
};

var isInteger = function isInteger(value) {
  var val = Number(value);
  var isInt = typeof val === 'number' && isFinite(val) && Math.floor(val) === val;

  return value.length > 0 && !isInt && 'Needs to be a whole number';
};

var isPostcode = function isPostcode(value) {
  var checkPostcode = function checkPostcode(str) {
    var postcodeRegexp = new RegExp(['^((([A-PR-UWYZ][0-9])', '([A-PR-UWYZ][0-9][0-9])', '([A-PR-UWYZ][A-HK-Y][0-9])', '([A-PR-UWYZ][A-HK-Y][0-9][0-9])', '([A-PR-UWYZ][0-9][A-HJKSTUW])', '([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\\s?([0-9][ABD-HJLNP-UW-Z]{2})', '(GIR)\\s?(0AA))\\ ?$'].join('|'), 'i');

    return postcodeRegexp.test(str);
  };

  return value.length > 0 && !checkPostcode(value) && 'Not a valid postcode';
};

var isFirstName = function isFirstName(value) {
  var isName = /^[a-z\-\s]{1,24}$/i.test(value);

  return value.length > 0 && !isName && 'Your First Name does not look right';
};

var isLastName = function isLastName(value) {
  var isName = /^[a-z\-\s']{1,32}$/i.test(value);

  return value.length > 0 && !isName && 'Your Last Name does not look right';
};

var isTitle = function isTitle(value) {
  var title = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Sir', 'Reverend', 'Dame', 'Lady', 'Professor', 'Lord'];

  return value.length > 0 && !title.includes(value) && 'Your title does not look right';
};

var isEmail = function isEmail(value) {
  var emailRegexp = new RegExp(regularExpressions.email, 'i');
  return value.length > 0 && !emailRegexp.test(value) && 'Your email does not look right';
};

var phoneValidation = function phoneValidation(value, isMobile) {
  var isCorrectlyFormatted = function isCorrectlyFormatted(number) {
    var regexPhoneFormat = /^0[0-9]{10}$/;

    return regexPhoneFormat.test(number);
  };

  var isNotReserved = function isNotReserved(number) {
    var dramaRegexes = [/^(0113|0114|0115|0116|0117|0118|0121|0131|0141|0151|0161)(4960)[0-9]{3}$/, /^02079460[0-9]{3}$/, /^01914980[0-9]{3}$/, /^02890180[0-9]{3}$/, /^02920180[0-9]{3}$/, /^01632960[0-9]{3}$/, /^07700900[0-9]{3}$/, /^08081570[0-9]{3}$/, /^09098790[0-9]{3}$/, /^03069990[0-9]{3}$/];

    // check if telephoneNumber matches any of the disallowed numbers
    for (var i = 0; i < dramaRegexes.length; i += 1) {
      if (dramaRegexes[i].test(number)) {
        return false;
      }
    }

    return true;
  };

  var isValidlyPrefixed = function isValidlyPrefixed(num) {
    if (isMobile) {
      return (/^0(70|71|72|73|74|75|7624|77|78|79)/.test(num)
      );
    }

    var regexValidPrefix = /^0(1|2|3|5|70|71|72|73|74|75|7624|77|78|79)/;
    return regexValidPrefix.test(num);
  };

  var isValidNumber = function isValidNumber(number) {
    return isCorrectlyFormatted(number) && isValidlyPrefixed(number) && isNotReserved(number);
  };

  return value.length > 0 && !isValidNumber(value) && 'Your number does not look right';
};

var minLength = function minLength(value, min) {
  return value.length < min ? 'Length must be at least ' + min + ' characters' : '';
};

var maxLength = function maxLength(value, max) {
  return value.length > max ? 'Length must be no longer than ' + max + ' characters' : '';
};

var isBetween = function isBetween(value, min, max) {
  return value.length < min || value.length > max ? 'Length must be between ' + min + ' and ' + max + ' characters' : '';
};

var isPhoneNumber = function isPhoneNumber(value) {
  return phoneValidation(value);
};

var isMobileNumber = function isMobileNumber(value) {
  return phoneValidation(value, true);
};

var isDateOfBirth = function isDateOfBirth(value) {
  var DATEISO_REGEX = /(\d{4})-(\d{2})-(\d{2})$/;
  var isDate = DATEISO_REGEX.test(value);
  return value.length > 0 && !isDate && 'Your date of birth does not look right';
};

var validations = /*#__PURE__*/Object.freeze({
  isRequired: isRequired,
  isNumber: isNumber,
  isInteger: isInteger,
  isPostcode: isPostcode,
  isFirstName: isFirstName,
  isLastName: isLastName,
  isTitle: isTitle,
  isEmail: isEmail,
  isPhoneNumber: isPhoneNumber,
  isMobileNumber: isMobileNumber,
  isDateOfBirth: isDateOfBirth,
  minLength: minLength,
  maxLength: maxLength,
  isBetween: isBetween
});

/*
Details Element Polyfill 2.3.1
Copyright © 2019 Javan Makhmali
 */
(function () {

  var element = document.createElement("details");
  element.innerHTML = "<summary>a</summary>b";
  element.setAttribute("style", "position: absolute; left: -9999px");
  var support = {
    open: "open" in element && elementExpands(),
    toggle: "ontoggle" in element
  };
  function elementExpands() {
    (document.body || document.documentElement).appendChild(element);
    var closedHeight = element.offsetHeight;
    element.open = true;
    var openedHeight = element.offsetHeight;
    element.parentNode.removeChild(element);
    return closedHeight != openedHeight;
  }
  var styles = '\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "▼";\n}\n';
  var _ref = [],
      forEach = _ref.forEach,
      slice = _ref.slice;
  if (!support.open) {
    polyfillStyles();
    polyfillProperties();
    polyfillToggle();
    polyfillAccessibility();
  }
  if (support.open && !support.toggle) {
    polyfillToggleEvent();
  }
  function polyfillStyles() {
    document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "</style>");
  }
  function polyfillProperties() {
    var prototype = document.createElement("details").constructor.prototype;
    var setAttribute = prototype.setAttribute,
        removeAttribute = prototype.removeAttribute;
    var open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
      open: {
        get: function get() {
          if (this.tagName == "DETAILS") {
            return this.hasAttribute("open");
          } else {
            if (open && open.get) {
              return open.get.call(this);
            }
          }
        },
        set: function set(value) {
          if (this.tagName == "DETAILS") {
            return value ? this.setAttribute("open", "") : this.removeAttribute("open");
          } else {
            if (open && open.set) {
              return open.set.call(this, value);
            }
          }
        }
      },
      setAttribute: {
        value: function value(name, _value) {
          var _this = this;
          var call = function call() {
            return setAttribute.call(_this, name, _value);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (!wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", true);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      },
      removeAttribute: {
        value: function value(name) {
          var _this2 = this;
          var call = function call() {
            return removeAttribute.call(_this2, name);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", false);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      }
    });
  }
  function polyfillToggle() {
    onTogglingTrigger(function (element) {
      element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", "");
    });
  }
  function polyfillToggleEvent() {
    if (window.MutationObserver) {
      new MutationObserver(function (mutations) {
        forEach.call(mutations, function (mutation) {
          var target = mutation.target,
              attributeName = mutation.attributeName;
          if (target.tagName == "DETAILS" && attributeName == "open") {
            triggerToggle(target);
          }
        });
      }).observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    } else {
      onTogglingTrigger(function (element) {
        var wasOpen = element.getAttribute("open");
        setTimeout(function () {
          var isOpen = element.getAttribute("open");
          if (wasOpen != isOpen) {
            triggerToggle(element);
          }
        }, 1);
      });
    }
  }
  function polyfillAccessibility() {
    setAccessibilityAttributes(document);
    if (window.MutationObserver) {
      new MutationObserver(function (mutations) {
        forEach.call(mutations, function (mutation) {
          forEach.call(mutation.addedNodes, setAccessibilityAttributes);
        });
      }).observe(document.documentElement, {
        subtree: true,
        childList: true
      });
    } else {
      document.addEventListener("DOMNodeInserted", function (event) {
        setAccessibilityAttributes(event.target);
      });
    }
  }
  function setAccessibilityAttributes(root) {
    findElementsWithTagName(root, "SUMMARY").forEach(function (summary) {
      var details = findClosestElementWithTagName(summary, "DETAILS");
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0");
      if (!summary.hasAttribute("role")) summary.setAttribute("role", "button");
    });
  }
  function eventIsSignificant(event) {
    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);
  }
  function onTogglingTrigger(callback) {
    addEventListener("click", function (event) {
      if (eventIsSignificant(event)) {
        if (event.which <= 1) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
          }
        }
      }
    }, false);
    addEventListener("keydown", function (event) {
      if (eventIsSignificant(event)) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
            event.preventDefault();
          }
        }
      }
    }, false);
  }
  function triggerToggle(element) {
    var event = document.createEvent("Event");
    event.initEvent("toggle", false, false);
    element.dispatchEvent(event);
  }
  function findElementsWithTagName(root, tagName) {
    return (root.tagName == tagName ? [root] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []);
  }
  function findClosestElementWithTagName(element, tagName) {
    if (typeof element.closest == "function") {
      return element.closest(tagName);
    } else {
      while (element) {
        if (element.tagName == tagName) {
          return element;
        } else {
          element = element.parentNode;
        }
      }
    }
  }
})();

var nsInputter = function (_LitElement) {
  inherits(nsInputter, _LitElement);

  nsInputter.prototype.randomID = function randomID() {
    return Math.random().toString(36).substring(2, 15);
  };

  nsInputter.prototype.setIDFor = function setIDFor() {
    if (this.inputType === 'single' || this.inputType === 'select') {
      try {
        this.inputID = this.inputLike && this.inputLike.getAttribute('id') || this.inputID;
        this.shadowRoot.querySelector('.inputter-container').classList.add('is-single');
        var input = this.inputLike || this.querySelector('select');
        input.setAttribute('id', this.inputID);
        this.querySelector('label').setAttribute('for', this.inputID); // can we make sure that this is a `<label>` element?
      } catch (e) {
        throw new Error('Missing label: ' + e);
      }
    }
  };

  nsInputter.prototype.autoName = function autoName() {
    if (!this.getAttribute('name')) {
      var label = this.querySelector('label') && this.querySelector('label').textContent || this.inputLike && this.inputLike.name;
      if (label) {
        var name = label.split(' ').join('-').toLowerCase();
        this.setAttribute('name', name);
      }
    }
  };

  nsInputter.prototype.getSlotInputs = function getSlotInputs() {
    var slot = this.childNodes;
    return Array.from(slot).map(function (node) {
      if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA' || node.nodeName === 'NS-METER-READ') {
        return node;
      }
    }).filter(function (node) {
      return node;
    }) || [];
  };

  nsInputter.prototype.getSlotInputTypes = function getSlotInputTypes() {
    return Array.from(this.getSlotInputs()).map(function (node) {
      return node.getAttribute('type');
    }) || [];
  };

  nsInputter.prototype.getValidationFunction = function getValidationFunction(validation) {
    var params = [];
    var arr = validation.split('(');
    var functionName = arr[0];
    var paramString = arr.length > 1 && arr[1].split(')')[0];
    if (paramString) {
      params = paramString.split(',').map(function (value) {
        return parseInt(value, 10);
      });
    }
    return { functionName: functionName, params: params };
  };

  nsInputter.prototype.checkErrors = function checkErrors(target, value) {
    var _this3 = this;

    var comp = this;
    var oldError = this.error;
    this.validity = target.validity;

    if (this.inputType === 'multiple' || this.inputType === 'select') {
      value = this.value;
    }

    if (this.validation) {
      var validation = this.validation;
      // This is what is breaking radio button validation
      //const value = target.value;
      var message = validation.map(function (val) {
        var vf = comp.getValidationFunction(val);
        var functionName = vf.functionName;
        var params = [value].concat(vf.params);
        return validations[functionName].apply(_this3, params);
      }).filter(function (val) {
        return val;
      }).map(function (message, index) {
        return (index > 0 ? ' ' : '') + message;
      }).toString() || '';

      target.setCustomValidity(message);
      this.error = message.length > 0 ? message : undefined;
    } else {
      this.error = target.validity.valid ? undefined : oldError;
      target.setCustomValidity('');
    }

    // if native error exists show it as a message
    if (target.validity && !target.validity.valid && !this.error) {
      this.error = target.validationMessage;
    }

    if (this.error !== oldError) {
      this.requestUpdate();
    }
  };

  createClass(nsInputter, [{
    key: 'inputLike',
    get: function get() {
      return this.querySelector('input') || this.querySelector('textarea') || this.querySelector('ns-meter-read');
    }
  }], [{
    key: 'properties',

    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        heading: { type: String }, // only for groups (checkbox and radio)
        labelID: { type: String }, // to override the need for a label, incase it is somewhere else on the page
        helper: { type: String }, // to show a message to help the user
        execute: { type: Boolean }, // execute the validation
        validation: {
          type: Array
        },
        value: {
          type: String
        }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$d]);
    }
  }]);

  function nsInputter() {
    classCallCheck(this, nsInputter);

    var _this2 = possibleConstructorReturn(this, _LitElement.call(this));

    _this2.labelID = '';
    _this2.heading = '';
    _this2.execute = false;
    _this2.setup = false;

    _this2.error = undefined;
    _this2.inputType = _this2.getSlotInputTypes().indexOf('radio') !== -1 || _this2.getSlotInputTypes().indexOf('checkbox') !== -1 ? 'multiple' : 'single';
    if (_this2.querySelector('select')) {
      _this2.inputType = 'select';
    }
    _this2.inputID = _this2.randomID() + '-input';
    _this2.dirty = false;
    _this2.pristine = true;
    return _this2;
  }

  nsInputter.prototype.addGroupLabel = function addGroupLabel() {
    var _this4 = this;

    var isGroup = this.inputType === 'multiple';
    if (isGroup) {
      var container = this.shadowRoot.querySelector('.inputter-container');
      // Should probably check to see if the labelID exists on the page?
      var labelby = this.labelID.length > 0 ? this.labelID : 'input-heading';

      container.setAttribute('role', 'group');
      container.setAttribute('aria-labelledby', labelby);
    } else if (this.labelID.length > 0) {
      // add labelid to input
      this.getSlotInputs().forEach(function (slot) {
        slot.setAttribute('aria-labelledby', _this4.labelID);
      });
    }
  };

  nsInputter.prototype.refocus = function refocus(target) {
    // weird bug in IE and Edge losing focus when rerendered
    target.focus();
    setTimeout(function () {
      return target.focus();
    }, 0);
  };

  nsInputter.prototype.checkboxValue = function checkboxValue() {
    var value = Array.from(this.getSlotInputs()).map(function (input) {
      if (input.checked) {
        return input.getAttribute('value');
      }
    }).filter(function (input) {
      return input;
    }) || [];
    this.value = value;
  };

  // silent is for updating the value without triggering validation and change events


  nsInputter.prototype.updateValue = function updateValue(target, silent) {

    if (target.type === 'checkbox') {
      if (target.getAttribute('checked') !== null) {
        target.removeAttribute('checked');
      } else {
        target.setAttribute('checked', '');
      }
      this.checkboxValue();
    } else {
      this.value = target.value;
    }

    this.pristine = false;
    this.dirty = true;

    if (!silent) {
      this.checkErrors(target, this.value);
      this.dispatchEvent(new CustomEvent('change'));
    }
  };

  nsInputter.prototype.trackValueSet = function trackValueSet(node) {
    var descriptor = Object.getOwnPropertyDescriptor(node.__proto__, 'value');
    var originalSet = descriptor.set;
    var _this = this;
    // track if value gets set
    descriptor.set = function (val) {
      originalSet.apply(this, arguments);

      if (_this.value !== val && this.getAttribute('id') === _this.inputID) {
        _this.updateValue(this);
      }
    };

    Object.defineProperty(node.__proto__, 'value', descriptor);
  };

  nsInputter.prototype.updateHandler = function updateHandler(e) {
    var input = e.target;
    if (input.value !== this.value) {
      this.updateValue(input);
      this.refocus(input);
    }
  };

  nsInputter.prototype.observeValue = function observeValue(node) {

    if (node.nodeName === 'INPUT' || node.nodeName === 'SELECT' || node.nodeName === 'TEXTAREA' || node.nodeName === 'NS-METER-READ') {
      // fix date issue in old browsers/safari
      if (node.getAttribute('type') === 'date') {
        node.setAttribute('placeholder', 'yyyy-mm-dd');
      }

      // check initial validation errors
      this.checkErrors(node, node.value);

      // setup inital value and add listeners to inputs
      if (this.inputType === 'multiple' || this.inputType === 'select') {
        if (node.getAttribute('type') === 'radio') {
          if (node.checked) {
            this.value = node.getAttribute('value');
          }
        }
        if (node.getAttribute('type') === 'checkbox') {
          this.checkboxValue();
        }

        node.addEventListener('change', this.updateHandler.bind(this));
      } else {

        //this.trackValueSet(node);
        node.value = this.value ? this.value : node.value;

        if (node.value !== this.value) {
          this.value = node.value;
        }

        node.addEventListener('input', this.updateHandler.bind(this));
      }

      this.setup = true;
      console.log('set up to true');
    }
  };

  nsInputter.prototype.detailsListener = function detailsListener() {
    if (this.helper && this.shadowRoot.querySelector('details')) {
      // Fix an issue in the polyfill for IE11 and older versions of Edge
      this.shadowRoot.querySelector('details').addEventListener('click', function (e) {
        e.preventDefault();
        var targetClicked = e.target;
        var targetElement = targetClicked;
        if (targetClicked.nodeName !== 'DETAILS') {
          targetElement = targetClicked.parentElement.nodeName === 'DETAILS' ? targetClicked.parentElement : targetClicked.parentElement.parentElement;
        }
        targetElement.hasAttribute('open') ? targetElement.removeAttribute('open') : targetElement.setAttribute('open', '');
      });
    }
  };

  nsInputter.prototype.firstUpdated = function firstUpdated() {

    this.error = undefined;
    this.inputType = this.getSlotInputTypes().indexOf('radio') !== -1 || this.getSlotInputTypes().indexOf('checkbox') !== -1 ? 'multiple' : 'single';
    if (this.querySelector('select')) {
      this.inputType = 'select';
    }
    this.inputID = this.randomID() + '-input';
    this.dirty = false;
    this.pristine = true;
    this.autoName();

    this.detailsListener();

    // Fix for Firefox autocomplate not working
    if (this.inputType === 'single') {
      var input = this.querySelector('input');
      this.updateValue(input, true);
    }
  };

  nsInputter.prototype.updated = function updated(changed) {
    var _this5 = this;

    var slot = this.getSlotInputs();

    if (this.inputType === 'select') {
      slot = [this.querySelector('select')];
    }

    var inputType = this.inputType;

    changed.forEach(function (oldValue, propName) {
      if (propName === 'value') {

        if (inputType === 'select') {
          var node = _this5.querySelector('select');
          _this5.checkErrors(node);
        }

        slot.forEach(function (node) {
          if ((node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA' || node.nodeName === 'NS-METER-READ') && node.value !== _this5.value && !(node.getAttribute('type') === 'radio' || node.getAttribute('type') === 'checkbox')) {
            // This is where autocomlete value is being cleared
            node.value = _this5.value;
            _this5.checkErrors(node, _this5.value);
          }
        });
      }
    });
    if (slot && slot.length > 0 && this.pristine && !this.setup) {
      slot.forEach(function (node) {
        _this5.observeValue(node);
      });

      this.dirty = false;
      this.pristine = true;
    }

    // work out if it is a group of inputs
    this.addGroupLabel();
    this.setIDFor();

    // we only want to manually run validation on untouched components
    if (this.execute && this.pristine) {
      this.pristine = false;
      this.requestUpdate();
    }
  };

  nsInputter.prototype.helperContent = function helperContent() {
    if (this.helper) {
      if (this.details) {
        return '\n        <div class="helper-content">\n          <details>\n            <summary class="helper-message">\n              <span class="message">\n                ' + this.helper + '\n              </span>\n              <span class="icon">\n                <ns-icon type="chevron-down"></ns-icon>\n              </span>\n            </summary>\n            <slot name="tip-details"></slot>\n          </details>\n        </div>\n        ';
      } else {
        return '\n        <div class="helper-content">\n          <div class="helper-message">\n            <span class="message">' + this.helper + '</span>\n          </div>\n        </div>\n        ';
      }
    }

    return '';
  };

  nsInputter.prototype.showErrorMessage = function showErrorMessage() {
    var showError = this.error && !this.pristine;
    return '\n    <div class="' + (showError ? 'validation-message' : 'validation-hidden') + '">\n      <span class="icon">\n        <ns-icon type="warning"></ns-icon>\n      </span>\n      <span class="message">\n        ' + this.error + '\n      </span>\n    </div>';
  };

  nsInputter.prototype.showLabel = function showLabel() {
    if (this.labelID.length === 0) {
      // should only show span for multiple inputs
      return this.heading.length > 0 && this.inputType === 'multiple' ? '<span id="input-heading">' + this.heading + '</span>' : '<slot name="label"></slot>';
    }

    return '';
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsInputter.prototype.render = function render() {
    var _this6 = this;

    this.childNodes.forEach(function (node) {
      if (node.slot === 'tip-details') {
        _this6.details = true;
      }
    });

    if (this.inputType === 'select') {
      return html(['\n      <div class="inputter-container ' + (this.pristine ? 'is-pristine' : 'is-dirty') + '">\n        ' + this.showLabel() + '\n        ' + this.helperContent() + '\n        <div class="slotted-content">\n          <div class="select-arrow">\n            <slot></slot>\n          </div>\n        </div>\n        ' + this.showErrorMessage() + '\n      </div>\n    ']);
    }

    return html(['\n      <div class="inputter-container ' + (this.pristine ? 'is-pristine' : 'is-dirty') + '">\n        ' + this.showLabel() + '\n        ' + this.helperContent() + '\n        <div class="slotted-content">\n          <slot></slot>\n        </div>\n        ' + this.showErrorMessage() + '\n      </div>\n    ']);
  };

  return nsInputter;
}(LitElement);

customElements.define('ns-inputter', nsInputter);

var styles$e = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature,:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature,:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature,:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block}:host .card-holder{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}:host .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:-2;grid-column-end:-1}:host .landmark{display:-ms-grid;display:grid}:host .landmark .landmark-container{position:relative;display:-ms-grid;display:grid}:host .landmark .landmark-container .image-holder{max-height:50vh;overflow:hidden}:host .landmark .landmark-container .image-holder ns-image{width:100vw;position:relative;top:33.3%;-webkit-transform:translateY(-33.3%);transform:translateY(-33.3%)}:host .landmark .landmark-container .decoration{position:absolute;right:0;left:0;bottom:0;z-index:2;padding-bottom:19.8%;background-repeat:no-repeat;background-size:cover;background-position:bottom;background-image:url(https://www.britishgas.co.uk/aem6/content/dam/britishgas/images/ns/homepage/fp-superflame.png);-webkit-transform:translateY(12%);transform:translateY(12%)}:host .landmark .layout{position:relative;z-index:1}:host .landmark .layout.summit .card-holder [slot=heading]::slotted(*){font-size:1em;margin-top:0;margin-bottom:0}@media only screen and (min-width:720px){:host .landmark .landmark-container{-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:0;grid-row-end:1;-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:-2;grid-column-end:-1;-ms-grid-row-align:start;align-self:start;margin-bottom:2.5%}:host .landmark .landmark-container .decoration{z-index:1}:host .landmark .layout.summit{-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:0;grid-row-end:1;-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:0;grid-column-end:1;display:-ms-grid;display:grid;-ms-grid-columns:5% minmax(auto,1600px) 5%;grid-template-columns:5% minmax(auto,1600px) 5%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1;margin-top:2.985984em}:host .landmark .layout.summit .card-holder{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:2;grid-column-end:3;display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);-ms-grid-row-align:start;align-self:start}:host .landmark .layout.summit .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:2;grid-column-end:3}}@media only screen and (min-width:1080px){:host .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:2;grid-column-end:3}:host .landmark .layout.summit{margin-top:3.81469727em}:host .landmark .layout.summit .card-holder{-ms-grid-column:2;grid-column-start:2;-ms-grid-columns:(1fr)[2];grid-template-columns:repeat(2,1fr)}:host .landmark .layout.summit .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .landmark .landmark-container{display:block}:host .landmark .landmark-container .image-holder ns-image{-webkit-transform:none;transform:none}}@media only screen and (min-width:0) and (max-width:719px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .landmark-container{-ms-grid-row:1}:host .landmark .layout{-ms-grid-row:2}}@media only screen and (min-width:720px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .layout.summit{margin-left:5%;margin-right:5%}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .landmark .landmark-container{display:block}:host .landmark .landmark-container .image-holder ns-image{-webkit-transform:none;transform:none}@media only screen and (min-width:0) and (max-width:719px){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .landmark-container{-ms-grid-row:1}:host .landmark .layout{-ms-grid-row:2}}@media only screen and (min-width:720px){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .layout.summit{margin-left:5%;margin-right:5%}}@media only screen and (min-width:1080px){:host .card-holder ns-card{-ms-grid-column-span:2}}}@media only screen and (min-width:1080px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .card-holder ns-card{-ms-grid-column-span:2}}";

var nsLandmark = function (_LitElement) {
  inherits(nsLandmark, _LitElement);
  createClass(nsLandmark, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String }, // summit, hillside
        image: { type: String }, // background image passed
        gradient: { type: String }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$e]);
    }
  }]);

  function nsLandmark() {
    classCallCheck(this, nsLandmark);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'summit';
    _this.gradient = 'invert-ramp-cyan';
    return _this;
  }

  nsLandmark.prototype.addCard = function addCard(hasCTA) {
    var type = this.type === 'summit' ? 'basic' : 'section';

    return '\n    <ns-card type="' + type + '-landmark">\n       <slot slot="heading" name="heading"></slot>\n       <slot slot="paragraph" name="paragraph"></slot>\n       ' + (hasCTA ? '<slot slot="cta" name="cta"></slot>' : '') + '\n     </ns-card>';
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  nsLandmark.prototype.render = function render() {
    return html(['\n        ' + this.summit + '\n        ' + this.hillside + '\n    ']);
  };

  createClass(nsLandmark, [{
    key: 'summit',
    get: function get() {
      if (this.type === 'summit') {
        return '<div class="landmark">\n      <div class="landmark-container">\n        <div class="image-holder">\n          <ns-image background src="' + this.image + '"></ns-image>\n        </div>\n        <div class="decoration"></div>\n      </div>\n      <div class="layout ' + this.type + '">\n        <div class="card-holder">\n          ' + this.addCard(true) + '\n        </div>\n      </div>\n    </div>';
      }

      return '';
    }
  }, {
    key: 'hillside',
    get: function get() {
      if (this.type === 'hillside') {
        return '\n        <ns-panel decoration="' + this.gradient + '">\n            <div class="card-holder">\n              ' + this.addCard() + '\n            </div>\n        </ns-panel>\n        <div class="decoration"></div>\n      ';
      }

      return '';
    }
  }]);
  return nsLandmark;
}(LitElement);

customElements.define('ns-landmark', nsLandmark);

var styles$f = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .lockup .card-holder [slot=paragraph]::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature,:host .lockup .card-holder [slot=paragraph]::slotted(*){font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature,:host .lockup .card-holder [slot=paragraph]::slotted(*){font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature,:host .lockup .card-holder [slot=paragraph]::slotted(*){font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host([type=lockjaw]){-ms-grid-column:1!important;grid-column-start:1!important;-ms-grid-column-span:-2!important;grid-column-end:-1!important}@media only screen and (min-width:720px){:host([type=lockjaw]){-ms-grid-column:2!important;grid-column-start:2!important;-ms-grid-column-span:-4!important;grid-column-end:-2!important}}@media only screen and (min-width:1080px) and (max-width:1619px){:host([type=lockjaw]){-ms-grid-column-span:-1!important;grid-column-end:-1!important}:host([type=lockjaw]):host([reverse]){-ms-grid-column:1!important;grid-column-start:1!important;-ms-grid-column-span:-3!important;grid-column-end:-2!important}}@media only screen and (max-width:720px){:host([type=lockbox]){-ms-grid-column:1!important;grid-column-start:1!important;-ms-grid-column-span:-2!important;grid-column-end:-1!important}}:host{display:block;width:100%}:host .lockup{display:-ms-grid;display:grid;grid-template-areas:\"b b\" \"a a\";-ms-grid-columns:(auto)[2];grid-template-columns:repeat(2,auto);-ms-grid-rows:(auto)[2];grid-template-rows:repeat(2,auto)}:host .lockup .card-holder{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2;display:-ms-grid;display:grid;grid-area:a}:host .lockup .card-holder [slot=heading]::slotted(*){font-size:1em;max-width:initial}:host .lockup .image-holder{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;position:relative;grid-area:b}:host .lockup .image-holder [name=image]{display:block;overflow:hidden}:host .lockup .image-holder .illustration-holder{z-index:1;position:absolute;width:5.6953125em;height:5.6953125em}:host .lockup .image-holder .illustration-holder ns-illustration{display:block}@media only screen and (min-width:720px){:host .lockup .image-holder{margin-right:12.5%;margin-left:12.5%}:host .lockup .image-holder .illustration-holder{width:6.912em;height:6.912em}:host .lockup .card-holder{margin-right:12.5%;margin-left:12.5%}}@media only screen and (min-width:1080px){:host .lockup{grid-template-areas:\"a b\" \"a b\"}:host .lockup.reverse{grid-template-areas:\"b a\" \"b a\"}:host .lockup .image-holder .illustration-holder{width:7.8125em;height:7.8125em}:host .lockup .card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}:host .lockup.reverse>.card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .lockup .image-holder{margin-left:0;margin-right:0;-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .lockup.reverse>.image-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}}:host .lockjaw .image-holder{margin-left:5%;-ms-flex-item-align:start;-ms-grid-row-align:start;align-self:start}:host .lockjaw .image-holder [name=image]{border-radius:1.5em 0 0;background-clip:padding-box}:host .lockjaw .image-holder .illustration-holder{right:2.84765625em;bottom:-1.42382812em}:host .lockjaw .card-holder{padding-top:1.42382813em;margin-right:5%;padding-bottom:1.42382813em;margin-left:5%}@media only screen and (min-width:720px){:host .lockjaw .image-holder{margin-left:12.5%;margin-right:12.5%}:host .lockjaw .image-holder [name=image]{border-radius:1.5em 0 0;background-clip:padding-box}:host .lockjaw .image-holder .illustration-holder{right:3.456em;bottom:-1.728em}:host .lockjaw.reverse .image-holder [name=image]{border-radius:0 1.5em 0 0;background-clip:padding-box}:host .lockjaw .card-holder{margin-left:12.5%;margin-right:12.5%;padding-top:2.985984em;padding-bottom:2.985984em}}@media only screen and (min-width:1080px){:host .lockjaw{-ms-grid-columns:50% 50%;grid-template-columns:50% 50%}:host .lockjaw .image-holder{margin-right:0;margin-left:0}:host .lockjaw .image-holder .illustration-holder{left:-2.9296875em;bottom:3.90625em}:host .lockjaw .card-holder{margin-left:0;margin-right:3.81469727em}:host .lockjaw.reverse .image-holder .illustration-holder{left:unset;right:-2.9296875em}:host .lockjaw.reverse .card-holder{margin-right:0;margin-left:3.81469727em}}:host .locknut .image-holder .illustration-holder{left:0;bottom:1.42382813em}:host .locknut .card-holder{padding-top:1.42382813em;padding-bottom:1.42382813em}@media only screen and (min-width:720px){:host .locknut .image-holder .illustration-holder{bottom:1.728em}:host .locknut .card-holder{padding-top:2.985984em;padding-bottom:2.985984em}}@media only screen and (min-width:1080px){:host .locknut{grid-template-areas:\"a b\" \"a b\";-ms-grid-columns:50% 50%;grid-template-columns:50% 50%}:host .locknut .image-holder .illustration-holder{bottom:1.953125em}:host .locknut .card-holder{padding-top:3.81469727em;margin-right:3.81469727em;padding-bottom:3.81469727em;margin-left:0}:host .locknut.reverse{grid-template-areas:\"b a\" \"b a\"}:host .locknut.reverse .image-holder .illustration-holder{left:unset;right:0}:host .locknut.reverse .card-holder{margin-left:3.81469727em;margin-right:0}:host .locknut>.card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}:host .locknut.reverse>.card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .locknut>.image-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .locknut.reverse>.image-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}}:host .lockbox .image-holder{margin-right:5%}:host .lockbox .image-holder [name=image]{border-radius:0 1.5em 0 0;background-clip:padding-box}@media only screen and (min-width:320px){:host :host-context(.fq-tools) .lockup{background-color:rgba(255,165,0,.25)}}@media only screen and (min-width:480px){:host :host-context(.fq-tools) .lockup{background-color:rgba(0,128,0,.25)}}@media only screen and (min-width:720px){:host .lockbox .image-holder{margin-right:12.5%}:host .lockbox .image-holder [name=image]{border-radius:0 1.5em 0 0;background-clip:padding-box}:host .lockbox .card-holder{margin-right:0;margin-left:0}:host .lockbox.reverse .image-holder [name=image]{border-radius:1.5em 0 0;background-clip:padding-box}:host :host-context(.fq-tools) .lockup{background-color:rgba(0,0,255,.25)}}@media only screen and (min-width:1080px){:host .lockbox{-ms-grid-columns:60% 40%;grid-template-columns:60% 40%}:host .lockbox .image-holder{margin-right:0;-ms-flex-item-align:end;-ms-grid-row-align:end;align-self:end;margin-top:5em}:host .lockbox .card-holder{margin-right:0;margin-left:0}:host .lockbox.reverse{-ms-grid-columns:40% 60%;grid-template-columns:40% 60%}:host :host-context(.fq-tools) .lockup{background-color:rgba(255,0,0,.25)}}@media only screen and (min-width:1620px){:host([type=locknut]){padding-left:9.31322575em;padding-right:9.31322575em}:host .lockjaw{padding-left:9.31322575em}:host .lockjaw.reverse{padding-left:0;padding-right:9.31322575em}:host :host-context(.fq-tools) .lockup{background-color:rgba(0,128,128,.25)}}@media only screen and (min-width:2430px){:host :host-context(.fq-tools) .lockup{background-color:rgba(255,255,0,.25)}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .lockjaw.reverse .image-holder .illustration-holder{left:auto!important;right:-2.9296875em!important}:host .locknut.reverse .image-holder .illustration-holder{left:auto!important;right:0!important}}@media only screen and (min-width:0) and (max-width:720px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockbox]){-ms-grid-column:2!important}}@media only screen and (min-width:0) and (max-width:1079px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockjaw]) .lockjaw.reverse .image-holder .illustration-holder{right:0!important}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .lockjaw.reverse .image-holder .illustration-holder{left:auto!important;right:-2.9296875em!important}:host .locknut.reverse .image-holder .illustration-holder{left:auto!important;right:0!important}@media only screen and (min-width:0) and (max-width:720px){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockbox]){-ms-grid-column:2!important}}@media only screen and (min-width:0) and (max-width:1079px){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockjaw]) .lockjaw.reverse .image-holder .illustration-holder{right:0!important}}}";

var nsLockup = function (_LitElement) {
  inherits(nsLockup, _LitElement);
  createClass(nsLockup, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String }, // lockbox, locknut
        decoration: { type: String },
        ratio: { type: String }, // 1x1, 4x3
        reverse: { type: Boolean }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$f]);
    }
  }]);

  function nsLockup() {
    classCallCheck(this, nsLockup);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.ratio = '4x3';
    _this.type = 'lockbox';
    _this.layered = false;
    _this.reverse = false;
    return _this;
  }

  nsLockup.prototype.addIllustration = function addIllustration() {
    if (this.decoration && this.type !== 'lockbox') {
      return '<div class="illustration-holder">\n        <ns-illustration type="' + this.decoration + '"></ns-illustration>\n      </div>';
    }

    return '';
  };

  nsLockup.prototype.cardLayout = function cardLayout() {
    // need to pass details to card for shadow and border...
    var suffix = this.reverse ? this.type + '-reverse' : this.type;
    var type = 'basic-' + suffix;

    return '\n      <div class="card-holder">\n        <ns-card type="' + type + '">\n          <slot slot="heading" name="heading"></slot>\n          <slot slot="paragraph" name="paragraph"></slot>\n          <slot slot="cta" name="cta"></slot>\n        </ns-card>\n      </div>\n    ';
  };

  nsLockup.prototype.imageLayout = function imageLayout() {
    return '\n      <div class="image-holder ar' + this.ratio + '">\n        ' + this.addIllustration() + '\n        <slot name="image"></slot>\n      </div>\n    ';
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsLockup.prototype.render = function render() {
    return html(['\n      <div class="lockup ' + (this.reverse ? 'reverse' : '') + ' lockup' + this.ratio + ' ' + this.type + '">\n        ' + this.cardLayout() + '\n        ' + this.imageLayout() + '\n      </div>\n    ']);
  };

  return nsLockup;
}(LitElement);

customElements.define('ns-lockup', nsLockup);

var styles$g = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block;position:relative}:host ::slotted(label){font-size:1.25em!important;font-family:\"BG Flame Bold\",sans-serif!important;display:block!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;max-width:100%!important;padding-bottom:.5em!important}:host ::slotted(input){font-family:monospace!important}:host ::slotted(input[maxlength=\"12\"]){max-width:9em!important}:host ::slotted(input[maxlength=\"11\"]){max-width:8.4em!important}:host ::slotted(input[maxlength=\"10\"]){max-width:7.8em!important}:host ::slotted(input[maxlength=\"9\"]){max-width:7.2em!important}:host ::slotted(input[maxlength=\"8\"]){max-width:6.8em!important}:host ::slotted(input[maxlength=\"7\"]){max-width:6.2em!important}:host ::slotted(input[maxlength=\"6\"]){max-width:5.6em!important}:host ::slotted(input[maxlength=\"5\"]){max-width:5em!important}:host input{pointer-events:none;color:#c8c9c7;font-family:monospace;position:absolute;left:0;background-color:transparent;min-height:2.8em;font-size:1.25em;-webkit-box-shadow:unset;box-shadow:unset;outline:unset;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:.4em .8em;border:.15em solid transparent}";

var nsMeterRead = function (_LitElement) {
  inherits(nsMeterRead, _LitElement);
  createClass(nsMeterRead, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        mask: {
          type: String
        },
        guide: {
          type: String
        },
        maxlength: {
          type: Number
        }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$g]);
    }
  }]);

  function nsMeterRead() {
    classCallCheck(this, nsMeterRead);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.lastValue = '';
    _this.prevLength = 0;
    _this.insertingMarker = false;
    _this.value = '';
    _this.label = 'init value';
    _this.inputID = Math.random().toString(36).substring(2, 15);
    _this.addEventListener('focus', function (event) {
      console.log('Focus!!! ');
      _this.shadowRoot.querySelector('#' + _this.inputID).focus();
      event.preventDefault();
    });

    return _this;
  }

  nsMeterRead.prototype.setCustomValidity = function setCustomValidity(message) {
    console.log('setCustomValidity ' + message);
  };

  // addMarkers(text) {
  //   var chars = text.split('');
  //   console.log('FORMAT PRE  ' + chars);
  //   var str = '';
  //   var count = 0;
  //   chars.forEach((char, index) => {
  //     if (overlay[count] !== ' ') {
  //       str += overlay[count];
  //       this.insertingMarker = true;
  //       count++;
  //     }
  //     str += char;
  //     count++;
  //   });
  //   return str;
  // }

  // Removes markers from text


  nsMeterRead.prototype.cleanText = function cleanText(text) {
    // TODO - assumes 1 separator only for now
    var separator = this.mask.split(' ').join('').charAt(0);
    return text.split(separator).join('');
  };

  nsMeterRead.prototype.setText = function setText(input, text) {
    // Check if mask starts with markers eg 000---
    var startsWithMarkers = 0;
    if (this.mask.charAt(0) !== ' ') {
      startsWithMarkers = this.mask.indexOf(' ');
    }

    // Insert markers at beginning of string
    for (var i = 0; i < startsWithMarkers; i++) {
      var arr = text.split('');
      arr.splice(i, 1, this.mask.charAt(i));
      text = arr.join('');
    }

    // Compare new and old text without markers, so that auto-added markers dont get treated as errors
    var char = this.getDiff(this.cleanText(this.lastValue), this.cleanText(text));

    // Catch invalid characters
    if (char) {
      if (char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58) {
        console.log('Valid Number ' + char);
      } else {
        console.log('INVALID CHAR ' + char);
        input.value = this.lastValue;
        return;
      }
    }

    input.value = text;
    this.lastValue = text;
    this.value = text;
    this.dispatchEvent(new CustomEvent('input'));
  };

  // Returns the first character that is different


  nsMeterRead.prototype.getDiff = function getDiff(str1, str2) {
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    var max = Math.max(arr1.length, arr2.length);
    for (var i = 0; i < max; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr2[i];
      }
    }
  };

  // Clears guide characters where a character exists in input


  nsMeterRead.prototype.fillPlaceholder = function fillPlaceholder(input, back, guide) {

    var length = input.value.length;
    var maxLength = input.maxLength;
    //var guide = '00----'
    var str = '';
    for (var i = 0; i < maxLength; i++) {
      str += i < length ? ' ' : guide.charAt(i);
    }

    if (back.getAttribute('post')) {
      str += back.getAttribute('post');
    }

    console.log('fillPlaceholder ' + input.value + ' ' + str + ' ' + back);

    back.value = str;
  };

  nsMeterRead.prototype.setup = function setup(name) {
    var _this2 = this;

    console.log('ANDY - setup()');
    // var guide = this.shadowRoot.getElementById(`${name}-back`).value;
    // this.shadowRoot.getElementById(name).addEventListener...
    var input = this.getSlottedNodeById(name);
    var guide = this.shadowRoot.getElementById(name + '-back'); //this.getSlottedNodeById(`${name}-back`);
    if (input.value) {
      this.value = input.value;
    }
    input.addEventListener('input', function (event) {

      console.log('ANDY - input ' + event.target.value);

      // Start template format test
      var cursor = event.target.selectionStart;
      var newCursor = cursor;
      var value = event.target.value;
      var overlay = _this2.mask; //this.shadowRoot.getElementById(`${name}-back`).getAttribute('mask');
      var isDeleting = event.inputType === 'deleteContentBackward';
      var isAdding = event.inputType !== 'deleteContentBackward';
      var isMid = cursor < value.length;
      var isAtEnd = cursor === value.length;
      var isOnMarker = overlay.charAt(cursor) !== ' ';
      var isMarkerLeft = overlay.charAt(cursor - 1) !== ' ';
      // TODO - this assumes there is only one type of marker character eg / for dates
      var separator = overlay.split(' ').join('').charAt(0);

      // // Adding a character at the end of the text, when next character is a marker then insert marker and move cursor on by 1
      if (isAdding && isAtEnd && isOnMarker) {
        _this2.setText(event.target, event.target.value + overlay.charAt(cursor));
        newCursor = cursor + 1;
      }

      if (isAdding && isAtEnd && !isOnMarker) {
        console.log('SCENARIO 6');
        newCursor = cursor + 1;
      }

      if (isAdding && isMid && isMarkerLeft) {
        console.log('SCENARIO 7');
        newCursor = cursor + 1;
      }

      // If at end and deleting a marker
      if (isDeleting && isAtEnd && isOnMarker) {
        console.log('SCENARIO 2 - deleting a marker so delte the markr and the char before');
        // Check what character we are about to delete, this is a bug that if you highlight a marker and then delete
        var charToDelete = event.target.value.charAt(event.target.value.length - 1);
        if (_this2.prevLength) {
          var prev = _this2.prevLength;
          var diff = prev - event.target.value.length;
          // If we're only deleting the marker then remove the prev char as well
          if (diff === 1) {
            _this2.setText(event.target, event.target.value.substring(0, event.target.value.length - 1));
          }
        }
      }

      //mid deletion over char
      if (isDeleting && isMid && !isOnMarker) {
        console.log('SCENARIO 3 - deleting mid ' + event.target.value);
        var arr = event.target.value.split('');
        _this2.setText(event.target, arr.join(''));
      }

      //mid deletion over marker
      if (isDeleting && isMid && isOnMarker) {
        console.log('SCENARIO 4 - deleting mid marker ' + event.target.value);
        var arr = event.target.value.split('');
        arr.splice(cursor - 1, 1);
        _this2.setText(event.target, arr.join(''));
        newCursor = cursor - 1;
      }

      //Remove any existing markers and then add them again
      var chars = (event.target.value.indexOf(separator) !== -1 ? event.target.value.split(separator).join('') : event.target.value).split('');
      console.log('FORMAT PRE  ' + chars);
      var str = '';
      var count = 0;
      chars.forEach(function (char, index) {
        while (overlay[count] !== ' ' && count < overlay.length) {
          str += overlay[count];
          count++;
          console.log('STR ' + str);
        }
        // only insert if allowed
        if (overlay[count] === ' ') {
          str += char;
          count++;
        }
      });

      // If adding to the end of the string and there should be a marker next
      if (isOnMarker && isAdding && isAtEnd) {

        str += overlay.charAt(str.length);

        count = str.length;
        // ## if multiple markers add them all
        while (overlay[count] !== ' ' && count < overlay.length) {
          str += overlay[count];
          count++;
          console.log('#STR ' + str);
          newCursor = count;
        }
      }

      // If adding or deleting in the middle and the last char should be a marker then add it.
      if (isMid && overlay.charAt(str.length) !== ' ') {
        str += overlay.charAt(str.length);
      }

      console.log('FORMAT POST ' + str);

      _this2.setText(event.target, str);

      // POST formatting functions

      if (isDeleting && isAtEnd && !isOnMarker && isMarkerLeft) {
        // Removed last character leaving a marker, re-add it
        console.log('SCENARIO 8');
        // event.target.value += overlay.charAt(cursor-1);
        _this2.setText(event.target, event.target.value + overlay.charAt(cursor - 1));
      }

      if (event.target.value.length > event.target.maxLength) {
        console.log('XXXX');
        //event.target.value = event.target.value.slice(0, event.target.maxLength);
        _this2.setText(event.target, event.target.value.slice(0, event.target.maxLength));
      }

      _this2.prevLength = event.target.value.length;

      console.log('Set Cursor on ' + newCursor);
      event.target.setSelectionRange(newCursor, newCursor);
    });

    // Add input guide update listener
    //this.shadowRoot.getElementById(name)
    input.addEventListener('input', function (event) {
      _this2.fillPlaceholder(input, guide, _this2.getAttribute('guide'));
    });

    this.fillPlaceholder(input, guide, this.getAttribute('guide'));
    this.setText(input, this.value);
  };

  nsMeterRead.prototype.firstUpdated = function firstUpdated() {

    var slots = this.shadowRoot.querySelectorAll('slot')[0].assignedNodes();
    var input = slots.find(function (node) {
      return node.nodeName === 'INPUT';
    });
    //const label = slots.find((node) => { return node.nodeName === 'LABEL'});

    input.setAttribute('id', this.inputID);
    //label.setAttribute('for', this.inputID);

    this.maxLength = this.querySelector('input').maxLength;
    if (!this.mask || this.mask === '') {
      this.mask = ' '.repeat(this.maxLength);
    }
    if (!this.guide) {
      this.guide = ' '.repeat(this.maxLength);
    }

    this.doUpdate();

    this.setup(this.inputID);
  };

  // updated() {
  //   this.doUpdate();
  // }

  nsMeterRead.prototype.doUpdate = function doUpdate() {
    var input = this.getSlottedNodeById(this.inputID);
    var inputBack = this.shadowRoot.getElementById(this.inputID + '-back'); // this.getSlottedNodeById('input-back');
    //input.maxLength = this.maxLength;
    input.setAttribute('pattern', '\d*');
    input.setAttribute('inputmode', 'numeric');
    input.setAttribute('maxlength', this.maxLength);

    inputBack.value = this.guide;
    //inputBack.maxLength = this.maxLength;
    inputBack.setAttribute('readonly', '');
    inputBack.setAttribute('tabindex', -1);
    inputBack.setAttribute('maxlength', this.maxLength);
    inputBack.classList.add('input-guide');
  };

  nsMeterRead.prototype.getSlottedNodeById = function getSlottedNodeById(id) {
    return this.shadowRoot.querySelector('slot').assignedNodes().find(function (node) {
      return node.id === id;
    });
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsMeterRead.prototype.render = function render() {
    return html(['\n    <slot></slot>\n    <input id="' + this.inputID + '-back" readonly tabindex="-1" class="input-guide" type="text"/>\n    ']);
  };

  /**
   * <input id="input-back" readonly tabindex="-1" class="input-guide" type="text" value="${this.guide}" maxlength="${this.maxlength}" />
    <input id="input" type="text" value="" pattern="\d*" inputmode="numeric" maxlength="${this.maxlength}" />
   */

  return nsMeterRead;
}(LitElement);

customElements.define('ns-meter-read', nsMeterRead);

var styles$h = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.white-decoration{background-image:linear-gradient(205deg,#fff,#f7f7f7 150%);color:#333f48}.yellow-decoration{background-image:linear-gradient(205deg,#ffc72c,#ff7a00 150%);color:#333f48}.cyan-decoration{background-image:linear-gradient(205deg,#09f,#005eb8 150%);color:#fff}.green-light-decoration{background-image:linear-gradient(205deg,#b4e100,#009639 150%);color:#333f48}.grey-light-decoration{background-image:linear-gradient(205deg,#f7f7f7,#fff 150%);color:#333f48}.blue-decoration{background-image:linear-gradient(205deg,#005eb8,#003c71 150%);color:#fff}.white{color:#fff}.white-background{background:#fff;color:#333f48}.slate{color:#333f48}.slate-background{background:#333f48;color:#fff}.cyan{color:#09f}.cyan-background{background:#09f;color:#333f48}.red{color:#d50032}.red-background{background:#d50032;color:#fff}.red-dark{color:#862633}.red-dark-background{background:#862633;color:#fff}.orange{color:#ff7a00}.orange-background{background:#ff7a00;color:#333f48}.yellow{color:#ffc72c}.yellow-background{background:#ffc72c;color:#333f48}.green-light{color:#b4e100}.green-light-background{background:#b4e100;color:#333f48}.green{color:#009639}.green-background{background:#009639;color:#fff}.green-dark{color:#006f44}.green-dark-background{background:#006f44;color:#fff}.blue{color:#005eb8}.blue-background{background:#005eb8;color:#fff}.blue-dark{color:#003c71}.blue-dark-background{background:#003c71;color:#fff}.grey-light{color:#f7f7f7}.grey-light-background{background:#f7f7f7;color:#333f48}.grey{color:#c8c9c7}.grey-background{background:#c8c9c7;color:#333f48}.grey-dark{color:#888b8d}.grey-dark-background{background:#888b8d;color:#fff}.info{color:#209cee}.info-background{background:#209cee;color:#333f48}.success{color:#23d160}.success-background{background:#23d160;color:#333f48}.warning{color:#ffdd57}.warning-background{background:#ffdd57;color:#333f48}.danger{color:#eb002f}.danger-background{background:#eb002f;color:#fff}:host{display:block}:host .panel{display:-ms-grid;display:grid;position:relative}:host .panel .layout{display:-ms-grid;display:grid;-ms-grid-columns:5% 1fr 5%;grid-template-columns:5% 1fr 5%;position:relative}:host .panel .layout.type-panel{margin-top:2.02728653em;margin-bottom:2.02728653em}:host .panel .layout.type-nav{margin-top:0;margin-bottom:0}:host .panel .layout .decorate{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}:host .panel .layout ::slotted(*){display:-ms-grid;display:grid;width:100%;-ms-grid-column-align:center;justify-self:center;max-width:1600px;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;grid-column-gap:1.42382813em;grid-row-gap:1.42382813em}:host .panel .layout ::slotted(.splash),:host .panel .layout ::slotted(.splish){display:block;margin-bottom:1.42382813em}:host .panel .layout ::slotted(.splash.triple),:host .panel .layout ::slotted(.splish.triple){display:-ms-grid;display:grid}:host .panel .layout ::slotted(.splish.triple){-ms-grid-column:1;grid-column-start:1}:host .panel .layout ::slotted(.splosh){display:block}@media only screen and (min-width:720px){:host .panel .layout.type-panel{margin-top:2.985984em;margin-bottom:2.985984em}:host .panel .layout ::slotted(*){grid-column-gap:1.728em;grid-row-gap:1.728em}:host .panel .layout ::slotted(.splash),:host .panel .layout ::slotted(.splish){margin-bottom:1.728em}:host .panel .layout ::slotted(.splish){padding-left:12.5%;padding-right:12.5%}:host .panel .layout ::slotted(.splish.triple){-ms-grid-column:2;grid-column-start:2}:host .panel .layout ::slotted(.splosh){padding-left:12.5%;padding-right:12.5%}}@media only screen and (min-width:1080px){:host .panel .layout.type-panel{margin-top:3.81469727em;margin-bottom:3.81469727em}:host .panel .layout ::slotted(*){grid-column-gap:1.953125em;grid-row-gap:1.953125em}:host .panel .layout ::slotted(.splash),:host .panel .layout ::slotted(.splish){margin-bottom:1.953125em}:host .panel .layout ::slotted(.splish){padding-left:inherit;padding-right:inherit}:host .panel .layout ::slotted(.triple){-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}}@media only screen and (min-width:1620px){:host .panel .layout ::slotted(.splash){padding-left:9.31322575em;padding-right:9.31322575em}:host .panel .layout ::slotted(.splosh){padding-left:11.5em;padding-right:11.5em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .panel .layout{width:100vw}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .panel .layout{width:100vw}}:host([hidden]){display:none}";

var nsPanel = function (_LitElement) {
  inherits(nsPanel, _LitElement);

  nsPanel.prototype.checkSiblings = function checkSiblings() {
    // remove the top or bottom decoration based on where it is on the page
    if (this.previousElementSibling && this.previousElementSibling.tagName === 'NS-LANDMARK' || !this.previousElementSibling) {
      this.hasPrevious = true;
      this.hideTop = true;
    } else {
      this.hasPrevious = false;
      this.hideTop = false;
    }
    if (this.nextElementSibling && (this.nextElementSibling.tagName === 'FOOTER' || this.nextElementSibling.tagName === 'NS-CAVEAT') || !this.nextElementSibling) {
      this.hasNext = true;
      this.hideBottom = true;
    } else {
      this.hasNext = false;
      this.hideBottom = false;
    }
  };

  createClass(nsPanel, null, [{
    key: 'properties',


    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        type: { type: String }, // panel, nav
        decoration: { type: String }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$h]);
    }
  }]);

  function nsPanel() {
    classCallCheck(this, nsPanel);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.type = 'panel';

    var callback = function callback(mutationsList, observer) {
      var previousElement = _this.previousElementSibling !== null;
      var nextElement = _this.nextElementSibling !== null;

      if (previousElement === _this.hasPrevious || nextElement === _this.hasNext) {
        _this.checkSiblings();
        _this.requestUpdate();
      }
    };

    var observer = new MutationObserver(callback);

    observer.observe(document, {
      childList: true,
      subtree: true
    });

    _this.checkSiblings();
    return _this;
  }

  nsPanel.prototype.decorationType = function decorationType() {
    return this.decoration && this.decoration.split('-')[0];
  };

  nsPanel.prototype.decorationSuffix = function decorationSuffix(looking) {
    var parts = this.decoration && this.decoration.split('-');

    if (looking) {
      return parts && parts[parts.length - 1] === looking;
    }

    return parts && parts[parts.length - 1];
  };

  nsPanel.prototype.invertType = function invertType(position, name) {
    var pos = position === 'top' ? 0 : 1;
    var type = {
      concave: ['concave', 'convex'],
      bridge: ['bridge', 'convex'],
      ramp: ['concave', 'ramp']
    };

    return type[name] && type[name][pos] || '';
  };

  nsPanel.prototype.backgroundColour = function backgroundColour() {
    if (this.decorationType() === 'invert') {
      var parts = this.decoration && this.decoration.split('-');
      return parts && this.decoration.replace(parts[0] + '-', '').replace(parts[1] + '-', '');
    }
  };

  nsPanel.prototype.addDecoration = function addDecoration(where) {
    var position = void 0;
    var type = void 0;

    switch (where) {
      case "left":

        if (this.decorationSuffix('left') && this.decorationType() === 'circle') {
          position = 'left';
          type = this.decoration.replace('-left', '');
        }
        break;

      case "right":

        if (this.decorationSuffix('right') && this.decorationType() === 'circle') {
          position = 'right';
          type = this.decoration.replace('-right', '');
        }
        break;

      case "top":
        if (this.decorationType() === 'invert') {
          position = 'top';
          var name = this.decoration.replace('-' + this.backgroundColour(), '').replace('invert-', '');
          var suffixType = this.invertType(position, name);
          type = 'invert-' + suffixType;
        }
        break;

      case "bottom":
        if (this.decorationType() === 'invert') {
          position = 'bottom';
          var _name = this.decoration.replace('-' + this.backgroundColour(), '').replace('invert-', '');
          var _suffixType = this.invertType(position, _name);
          type = 'invert-' + _suffixType;
        }
        break;
    }

    if (position && type) {
      var prefix = '';
      var suffix = '';
      if (position === 'left' || position === 'right') {
        prefix = '<div class="decorate">';
        suffix = '</div>';
      }
      return prefix + '<ns-decoration position="' + position + '" class="white" type="' + type + '"></ns-decoration>' + suffix;
    }

    return '';
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsPanel.prototype.render = function render() {
    var background = this.backgroundColour() ? this.backgroundColour() + '-decoration' : '';

    return html(['\n      <div class="panel ' + background + '">\n        ' + (!this.hideTop ? this.addDecoration('top') : '') + '\n        ' + (!this.hideBottom ? this.addDecoration('bottom') : '') + '\n        <div class="layout type-' + this.type + '">\n          <slot></slot>\n          ' + this.addDecoration('left') + '\n          ' + this.addDecoration('right') + '\n        </div>\n      </div>\n    ']);
  };

  return nsPanel;
}(LitElement);

customElements.define('ns-panel', nsPanel);

var styles$i = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:inline-block}:host button{position:relative;text-align:left;background-color:#fff;cursor:pointer;outline:unset;margin-top:.2em;margin-right:.2em;margin-left:.2em;-webkit-box-shadow:inset 0 -.15em 0 0 #c8c9c7;box-shadow:inset 0 -.15em 0 0 #c8c9c7;padding:.8125em 1.8em}:host button:focus,:host button[selected]{margin-top:0;margin-right:0;margin-left:0;border-color:#c8c9c7;border-width:.2em;border-top-right-radius:.5em;-webkit-box-shadow:unset;box-shadow:unset;border-style:solid solid none}:host button:focus,:host button:focus .label-holder,:host button[selected],:host button[selected] .label-holder{color:#005eb8}:host button:focus{border-color:#005eb8;-webkit-box-shadow:inset 0 .1em 0 #005eb8,inset -.1em 0 0 #005eb8,inset .1em 0 0 #005eb8,inset 0 -.1em 0 0 #fff;box-shadow:inset 0 .1em 0 #005eb8,inset -.1em 0 0 #005eb8,inset .1em 0 0 #005eb8,inset 0 -.1em 0 0 #fff}:host button:active{color:inherit}:host button:hover{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host button::-moz-focus-inner{border:0}:host button .label-holder{font-family:\"BG Flame Bold\",sans-serif;font-size:1.25em;width:-webkit-min-content;width:-moz-min-content;width:min-content}:host button.has-icon{padding-left:4em}:host button .icon{position:absolute;left:1em;bottom:.75em;width:2em;height:2em;text-indent:0}:host button .icon svg{position:absolute;top:0;right:0;bottom:0;left:0;fill:currentColor}";

var nsTab = function (_LitElement) {
  inherits(nsTab, _LitElement);
  createClass(nsTab, null, [{
    key: 'properties',
    get: function get() {
      return {
        selected: { type: Boolean },
        icon: { type: String }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$i]);
    }
  }]);

  function nsTab() {
    classCallCheck(this, nsTab);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.selected = false;
    _this.icon = '';
    return _this;
  }

  nsTab.prototype.firstUpdated = function firstUpdated() {
    var host = this.shadowRoot.host;

    host.setAttribute('role', 'tab');
  };

  nsTab.prototype.updated = function updated(changedProperties) {
    var host = this.shadowRoot.host;
    var selected = this.selected;
    var prevSelected = changedProperties.selected;


    if (!prevSelected && selected) {
      this.dispatchSelectedEvent();
    }

    if (selected) {
      host.setAttribute('aria-selected', 'true');
    } else {
      host.removeAttribute('aria-selected');
    }
  };

  nsTab.prototype.dispatchSelectedEvent = function dispatchSelectedEvent() {
    var event = new CustomEvent('tabselected', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  };

  nsTab.prototype.addIcon = function addIcon() {
    if (this.icon && this.icon.length > 0) {
      return '<span class="icon">\n        <ns-icon type="' + this.icon + '" aria-hidden="true"></ns-icon>\n      </span>';
    }

    return '';
  };

  nsTab.prototype.render = function render() {
    var selected = this.selected;

    var isSelected = selected ? 'selected' : '';
    var tabIndexAttr = selected ? '' : 'tabindex="-1"';
    var hasIcon = this.icon && this.icon.length > 0;

    return html(['\n      <button ' + isSelected + ' ' + tabIndexAttr + ' class="' + (hasIcon ? 'has-icon' : '') + '">\n        ' + this.addIcon() + '\n        <span class="label-holder">\n          <slot></slot>\n        </span>\n      </button>\n    ']);
  };

  return nsTab;
}(LitElement);

customElements.define('ns-tab', nsTab);

var styles$j = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff'),url(./fonts/BGFlameWeb-Light.woff2) format('woff2'),url(./fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff'),url(./fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(./fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff'),url(./fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(./fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host{display:block}:host .layout{display:-ms-grid;display:grid;-ms-grid-columns:5% 1fr 5%;grid-template-columns:5% 1fr 5%;margin-top:2.02728653em;white-space:nowrap;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}:host .layout .tabs-holder{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}:host .layout .tabs{position:relative;background-color:#fff;font-size:.8em;-webkit-box-shadow:inset 0 -.15em 0 0 #c8c9c7;box-shadow:inset 0 -.15em 0 0 #c8c9c7}:host .layout .tabs::after{position:absolute;content:\"\";right:0;bottom:0;left:0;border-bottom:.2em solid transparent}@media only screen and (min-width:720px){:host .layout{margin-top:2.985984em}:host .layout .tabs{font-size:.9em}}@media only screen and (min-width:1080px){:host .layout{margin-top:3.81469727em}:host .layout .tabs{font-size:1em}}@media only screen and (min-width:1620px){:host .layout .tabs-holder{padding-left:9.31322575em;padding-right:9.31322575em}}";

var _direction;

var keys = {
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  ARROW_UP: 38,
  END: 35,
  HOME: 36
};

var direction = (_direction = {}, _direction[keys.ARROW_DOWN] = 1, _direction[keys.ARROW_LEFT] = -1, _direction[keys.ARROW_RIGHT] = 1, _direction[keys.ARROW_UP] = -1, _direction);

var assignId = function assignId(element) {
  if (!element.id) {
    element.id = randomId();
  }
  return element.id;
};

// https://stackoverflow.com/questions/4467539
var modulo = function modulo(a, b) {
  return (a % b + b) % b;
};

var nsTabs = function (_LitElement) {
  inherits(nsTabs, _LitElement);
  createClass(nsTabs, [{
    key: 'panels',
    get: function get() {
      return Array.from(this.querySelectorAll('[slot="panel"]'));
    }
  }, {
    key: 'tabs',
    get: function get() {
      return Array.from(this.querySelectorAll('[slot="tab"]'));
    }
  }], [{
    key: 'properties',
    get: function get() {
      return {
        open: { type: Number }
      };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$j]);
    }
  }]);

  function nsTabs() {
    classCallCheck(this, nsTabs);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.open = 0;
    return _this;
  }

  nsTabs.prototype.firstUpdated = function firstUpdated() {
    var _this2 = this;

    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
    this.shadowRoot.addEventListener('slotchange', function () {
      _this2.initSlotElements();
      _this2.updateTabsAndPanels();
    });
  };

  nsTabs.prototype.updated = function updated() {
    this.updateTabsAndPanels();
  };

  nsTabs.prototype.dispatchChangeEvent = function dispatchChangeEvent(targetTab) {
    var event = new CustomEvent('tabchange', {
      bubbles: true,
      composed: true
    });
    targetTab.dispatchEvent(event);
  };

  nsTabs.prototype.focusTab = function focusTab(tabElement) {
    this.updateComplete.then(function () {
      tabElement.shadowRoot.firstElementChild.focus();
    });
  };

  nsTabs.prototype.getTabElement = function getTabElement(index) {
    return this.tabs[index];
  };

  nsTabs.prototype.getTabPosition = function getTabPosition(tab) {
    return this.tabs.indexOf(tab);
  };

  nsTabs.prototype.handleClick = function handleClick(event) {
    var target = event.target;

    var tabPos = this.getTabPosition(target);
    if (tabPos > -1) {
      this.open = tabPos;
      this.focusTab(target);
      this.dispatchChangeEvent(target);
    }
  };

  nsTabs.prototype.handleKeyDown = function handleKeyDown(event) {
    var nextOpen = null;
    var keyCode = event.keyCode;

    var tabCount = this.tabs.length;
    if (!tabCount) return;

    switch (keyCode) {
      case keys.HOME:
        nextOpen = 0;
        break;
      case keys.END:
        nextOpen = tabCount - 1;
        break;
      default:
        var offset = direction[keyCode];
        if (offset) {
          nextOpen = modulo(this.open + offset, tabCount);
        }
    }

    if (nextOpen !== null) {
      event.preventDefault();
      this.open = nextOpen;
      var nextTab = this.getTabElement(nextOpen);
      this.focusTab(nextTab);
      this.dispatchChangeEvent(nextTab);
    }
  };

  nsTabs.prototype.initSlotElements = function initSlotElements() {
    var tabs = this.tabs,
        panels = this.panels;


    panels.forEach(function (panel, index) {
      var tab = tabs[index];
      panel.setAttribute('role', 'tabpanel');

      if (tab) {
        var panelId = assignId(panel);
        var tabId = assignId(tab);

        if (!tab.hasAttribute('aria-controls')) {
          tab.setAttribute('aria-controls', panelId);
        }

        if (!panel.hasAttribute('aria-labelledby')) {
          panel.setAttribute('aria-labelledby', tabId);
        }
      }
    });
  };

  nsTabs.prototype.updatePanels = function updatePanels() {
    var _this3 = this;

    this.panels.forEach(function (panel, index) {
      if (index === _this3.open) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  };

  nsTabs.prototype.updateTabs = function updateTabs() {
    var _this4 = this;

    this.tabs.forEach(function (tab, index) {
      if (index === _this4.open) {
        tab.setAttribute('selected', 'true');
      } else {
        tab.removeAttribute('selected');
      }
    });
  };

  nsTabs.prototype.updateTabsAndPanels = function updateTabsAndPanels() {
    this.updateTabs();
    this.updatePanels();
  };

  nsTabs.prototype.render = function render() {
    return html(['\n      <div class="layout">\n        <div role="tablist" class="tabs-holder">\n          <div class="tabs">\n            <slot name="tab"></slot>\n          </div>\n        </div>\n      </div>\n      <slot name="panel"></slot>\n    ']);
  };

  return nsTabs;
}(LitElement);

customElements.define('ns-tabs', nsTabs);

var styles$k = ":host{display:block}:host .video-container{display:block;width:100%}";

var nsVideo = function (_LitElement) {
  inherits(nsVideo, _LitElement);
  createClass(nsVideo, null, [{
    key: 'properties',


    /*
      - Future:
      - YouTube iframe title: https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${this.id}&format=json
      - Pull the title to add to the iframe.
     */

    // Public property API that triggers re-render (synced with attributes)
    get: function get() {
      return {
        id: { type: String }, // YouTube video id
        ratio: { type: String }, // 16x9, 4x3, 1x1
        title: { type: String // Video title
        } };
    }
  }, {
    key: 'styles',
    get: function get() {
      return css(['' + styles$k]);
    }
  }]);

  function nsVideo() {
    classCallCheck(this, nsVideo);

    var _this = possibleConstructorReturn(this, _LitElement.call(this));

    _this.id = '';
    _this.ratio = '16x9';
    _this.title = 'YouTube video';
    return _this;
  }

  nsVideo.prototype.checkRatio = function checkRatio() {
    var exceptedRatios = ['16x9', '4x3', '1x1']; // following the same rules as ns-image

    if (!exceptedRatios.includes(this.ratio)) {
      this.ratio = '16x9';
    }
  };

  nsVideo.prototype.setHeight = function setHeight() {
    var width = this.clientWidth;
    var parts = this.ratio.split('x');
    var height = width / parts[0] * parts[1];
    var container = this.shadowRoot.querySelector('.video-container');

    container.style.height = height + 'px';
  };

  nsVideo.prototype.firstUpdated = function firstUpdated() {
    var _this2 = this;

    this.shadowRoot.querySelector('iframe').addEventListener('load', function () {
      _this2.setHeight();
    });

    window.addEventListener('resize', function () {
      _this2.setHeight();
    });
  };

  nsVideo.prototype.updated = function updated() {
    this.setHeight();
  };

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  nsVideo.prototype.render = function render() {
    this.checkRatio();

    return html(['\n      <div class="video-container">\n        <iframe\n          title="' + this.title + '"\n          width="100%"\n          height="100%"\n          src="https://www.youtube-nocookie.com/embed/' + this.id + '?rel=0"\n          frameborder="0"\n          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n        >\n        </iframe>\n      </div>\n    ']);
  };

  return nsVideo;
}(LitElement);

customElements.define('ns-video', nsVideo);
