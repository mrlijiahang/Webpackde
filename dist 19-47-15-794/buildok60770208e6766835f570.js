/*! 百望股份 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(8);
var has = __webpack_require__(10);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2);
var core = __webpack_require__(0);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(7);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(84);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(14) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(74)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(14);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(49);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(75);
var setToStringTag = __webpack_require__(18);
var getPrototypeOf = __webpack_require__(78);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var global = __webpack_require__(1);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(85);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(17)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(15);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(14);
var wksExt = __webpack_require__(21);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(76)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(15);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(42);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(44);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(45).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(17);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(147);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('style-loader!css-loader!./main.css');
// import './main.less'
// console.log(jq)
// console.log(ljh)
//lijiahang
var num = 1;
// import ljh from './test1.js'
// const jq =require('./test1.js');

// 引入css
// import './main.css'


var a = function a() {};

new _vue2.default({
    el: '#app', //挂在到哪上？对应 indexhtml中的id=app
    components: {
        app: _app2.default //声明有那些组件
    },
    template: '<app/>' //使用了哪个组件

});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _toStringTag = __webpack_require__(67);

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _isFrozen = __webpack_require__(69);

var _isFrozen2 = _interopRequireDefault(_isFrozen);

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _setImmediate2 = __webpack_require__(91);

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

var _getOwnPropertyDescriptor = __webpack_require__(94);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _isExtensible = __webpack_require__(97);

var _isExtensible2 = _interopRequireDefault(_isExtensible);

var _getOwnPropertyNames = __webpack_require__(100);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _defineProperties = __webpack_require__(103);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _set = __webpack_require__(106);

var _set2 = _interopRequireDefault(_set);

var _ownKeys = __webpack_require__(121);

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _symbol = __webpack_require__(63);

var _symbol2 = _interopRequireDefault(_symbol);

var _defineProperty = __webpack_require__(130);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = __webpack_require__(133);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(136);

var _create2 = _interopRequireDefault(_create);

var _stringify = __webpack_require__(139);

var _stringify2 = _interopRequireDefault(_stringify);

var _freeze = __webpack_require__(141);

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = __webpack_require__(144);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
})(undefined, function () {
  'use strict';

  /*  */

  var emptyObject = (0, _freeze2.default)({});

  // these helpers produces better vm code in JS engines due to their
  // explicitness and function inlining
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' ||
    // $flow-disable-line
    (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'symbol' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
  }

  /**
   * Get the raw type string of a value e.g. [object Object]
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' ? (0, _stringify2.default)(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = (0, _create2.default)(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if a attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = (0, _create2.default)(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind polyfill for environments that do not support it... e.g.
   * PhantomJS 1.x. Technically we don't need this anymore since native bind is
   * now more performant in most browsers, but removing it would be breaking for
   * code that was able to run in PhantomJS 1.x, so this must be kept for
   * backwards compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function no(a, b, c) {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (!isArrayA && !isArrayB) {
          var keysA = (0, _keys2.default)(a);
          var keysB = (0, _keys2.default)(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: (0, _create2.default)(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: (0, _create2.default)(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    (0, _defineProperty2.default)(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof _symbol2.default !== 'undefined' && isNative(_symbol2.default) && typeof Reflect !== 'undefined' && isNative(_ownKeys2.default);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof _set2.default !== 'undefined' && isNative(_set2.default)) {
    // use native Set when available.
    _Set = _set2.default;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = (0, _create2.default)(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = (0, _create2.default)(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  (0, _defineProperties2.default)(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.isCloned = true;
    return cloned;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = (0, _create2.default)(arrayProto);

  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = (0, _getOwnPropertyNames2.default)(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src, keys) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && (0, _isExtensible2.default)(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = (0, _getOwnPropertyDescriptor2.default)(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    if (!getter && arguments.length === 2) {
      val = obj[key];
    }
    var setter = property && property.set;

    var childOb = !shallow && observe(val);
    (0, _defineProperty2.default)(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = (0, _keys2.default)(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = (0, _create2.default)(parentVal || null);
    if (childVal) {
      "development" !== 'production' && assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return (0, _create2.default)(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = (0, _create2.default)(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject) {
      return;
    }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ("development" !== 'production' && isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
    return -1;
  }

  /*  */

  function handleError(err, vm, info) {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */
  /* globals MessageChannel */

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both microtasks and (macro) tasks.
  // In < 2.4 we used microtasks everywhere, but there are some scenarios where
  // microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using (macro) tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use microtask by default, but expose a way to force (macro) task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof _setImmediate3.default !== 'undefined' && isNative(_setImmediate3.default)) {
    macroTimerFunc = function macroTimerFunc() {
      (0, _setImmediate3.default)(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]')) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function macroTimerFunc() {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function macroTimerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine microtask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof _promise2.default !== 'undefined' && isNative(_promise2.default)) {
    var p = _promise2.default.resolve();
    microTimerFunc = function microTimerFunc() {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a (macro) task instead of a microtask.
   */
  function withMacroTask(fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      var res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    });
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof _promise2.default !== 'undefined') {
      return new _promise2.default(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || (0, _isFrozen2.default)(val) || val instanceof VNode) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = (0, _keys2.default)(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, def, cur, old, event;
    for (name in on) {
      def = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      /* istanbul ignore if */
      if (isUndef(cur)) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[_toStringTag2.default] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function forceRender() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function (reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = (0, _create2.default)(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once) {
    if (once) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = (0, _create2.default)(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$off(event[i], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break;
          }
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, "event handler for \"" + event + "\"");
          }
        }
      }
      return vm;
    };
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }

  function resolveScopedSlots(fns, // see flow/vnode
  res) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
        // no need for the ref nodes after initial patch
        // this prevents keeping a detached DOM tree in memory (#5851)
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$1 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$1; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    (0, _defineProperty2.default)(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive(props, key, value, function () {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = (0, _keys2.default)(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = (0, _create2.default)(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if ("development" !== 'production' && getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    (0, _defineProperty2.default)(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (methods[key] == null) {
          warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      (0, _keys2.default)(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = (0, _create2.default)(null);
      var keys = hasSymbol ? (0, _ownKeys2.default)(inject).filter(function (key) {
        /* istanbul ignore next */
        return (0, _getOwnPropertyDescriptor2.default)(inject, key).enumerable;
      }) : (0, _keys2.default)(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = (0, _keys2.default)(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      ret._isVList = true;
    }
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if ("development" !== 'production' && !isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes) {
        if ("development" !== 'production' && slotNodes._rendered) {
          warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
        }
        slotNodes._rendered = true;
      }
      nodes = slotNodes || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        "development" !== 'production' && warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = (0, _create2.default)(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      return resolveSlots(children, parent);
    };

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
      }
      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  // Register the component hook to weex native render engine.
  // The hook will be triggered by native, not javascript.


  // Updates the state of the component to weex native render engine.

  /*  */

  // https://github.com/Hanks10100/weex-native-directive/tree/master/component

  // listening on native callback

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = (0, _keys2.default)(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

    // Weex specific: invoke recycle-list optimized @render function for
    // extracting cell-slot template.
    // https://github.com/Hanks10100/weex-native-directive/tree/master/component
    /* istanbul ignore if */
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var options = {
      _isComponent: true,
      parent: parent,
      _parentVnode: vnode,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      hooks[key] = componentVNodeHooks[key];
    }
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + (0, _stringify2.default)(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }
      if (isDef(data)) {
        registerDeepBindings(data);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      // reset _rendered flag on slots for duplicate slot check
      {
        for (var key in vm.$slots) {
          // $flow-disable-line
          vm.$slots[key]._rendered = false;
        }
      }

      if (_parentVnode) {
        vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          if (vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = (0, _create2.default)(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    } else {
      return latest;
    }
  }

  function Vue(options) {
    if ("development" !== 'production' && !(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      if ("development" !== 'production' && name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = (0, _create2.default)(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if ("development" !== 'production' && type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = (0, _create2.default)(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache, key, this$1.keys);
      }
    },

    mounted: function mounted() {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },

    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
        // not included
        include && (!name || !matches(include, name)) ||
        // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || slot && slot[0];
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive

    /*  */

  };function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = (0, _create2.default)(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = (0, _create2.default)(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.5.17';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = (0, _create2.default)(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        "development" !== 'production' && warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = (0, _freeze2.default)({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove() {
        if (--remove.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove.listeners = listeners;
      return remove;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }

        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = (0, _create2.default)(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = (0, _create2.default)(null);
    if (!dirs) {
      // $flow-disable-line
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + (0, _keys2.default)(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
        var blocker = function blocker(e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs

    /*  */

  };function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass

    /*  */

  };var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
    }
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue compiler]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
    el.plain = false;
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr(el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
    el.plain = false;
  }

  function addHandler(el, name, value, modifiers, important, warn) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ("development" !== 'production' && warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (name === 'click') {
      if (modifiers.right) {
        name = 'contextmenu';
        delete modifiers.right;
      } else if (modifiers.middle) {
        name = 'mouseup';
      }
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = {
      value: value.trim()
    };
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return (0, _stringify2.default)(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: "\"" + value + "\"",
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally');
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler(handler, event, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  function add$1(event, handler, once$$1, capture, passive) {
    handler = withMacroTask(handler);
    if (once$$1) {
      handler = createOnceHandler(handler, event, capture);
    }
    target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners

    /*  */

  };function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.lazy) {
        // inputs with lazy should only be updated when not in focus
        return false;
      }
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps

    /*  */

  };var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle

    /*  */

    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
  };function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def) {
    if (!def) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def === 'undefined' ? 'undefined' : (0, _typeof3.default)(def)) === 'object') {
      var res = {};
      if (def.css !== false) {
        extend(res, autoCssTransition(def.name || 'v'));
      }
      extend(res, def);
      return res;
    } else if (typeof def === 'string') {
      return autoCssTransition(def);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if ("development" !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + (0, _stringify2.default)(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show

    /*  */

    // Provides transition support for a single element/component.
    // supports transition mode (out-in / in-out)

  };var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag || isAsyncPlaceholder(c);
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }

    /*  */

    // Provides transition support for list items.
    // supports move transitions using the FLIP technique.

    // Because the vdom's children update algorithm is "unstable" - i.e.
    // it doesn't guarantee the relative positioning of removed elements,
    // we force transition-group to update its children into two passes:
    // in the first pass, we remove all nodes that need to be removed,
    // triggering their leaving transition; in the second pass, we insert/move
    // into the final desired state. This way in the second pass removed
    // nodes will remain where they should be.

  };var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = (0, _create2.default)(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup

    /*  */

    // install platform specific utils
  };Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else if ("development" !== 'production' && "development" !== 'test' && isChrome) {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }
      if ("development" !== 'production' && "development" !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push((0, _stringify2.default)(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push((0, _stringify2.default)(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = (0, _stringify2.default)(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData

    /*  */

  };function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = (0, _stringify2.default)(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1

    /*  */

  };var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }

    /*  */

  };var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(lastTag, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ("development" !== 'production' && !stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function closeElement(element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        closeElement(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.');
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.");
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var res;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment(text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: (0, _stringify2.default)(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      return;
    }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '');
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ("development" !== 'production' && slotScope) {
          warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
        /* istanbul ignore if */
        if ("development" !== 'production' && el.attrsMap['v-for']) {
          warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", true);
        }
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
            }
          }
          if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, (0, _stringify2.default)(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  /**
   * Expand input[v-model] with dyanmic type bindings into v-if-else chains
   * Turn this:
   *   <input v-model="data[type]" :type="type">
   * into this:
   *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
   *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
   *   <input v-else :type="type" v-model="data[type]">
   */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return;
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$2 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$2];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html

    /*  */

  };var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && (0, _keys2.default)(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    esc: 'Escape',
    tab: 'Tab',
    enter: 'Enter',
    space: ' ',
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    'delete': ['Backspace', 'Delete']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }
      /* istanbul ignore if */
      return "function($event){" + handler.value + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : handler.value;
      /* istanbul ignore if */
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return "_k($event.keyCode," + (0, _stringify2.default)(key) + "," + (0, _stringify2.default)(keyCode) + "," + "$event.key," + "" + (0, _stringify2.default)(keyName) + ")";
  }

  /*  */

  function on(el, dir) {
    if ("development" !== 'production' && dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop

    /*  */

  };var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data = el.plain ? undefined : genData$2(el, state);

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if ("development" !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false, state.warn) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true, state.warn) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + (0, _stringify2.default)(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + (0, _stringify2.default)(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length !== 1 || ast.type !== 1)) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots, state) {
    return "scopedSlots:_u([" + (0, _keys2.default)(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state);
    }).join(',') + "])";
  }

  function genScopedSlot(key, el, state) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state);
    }
    var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    return "{key:" + key + ",fn:" + fn + "}";
  }

  function genForScopedSlot(key, el, state) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return (altGenElement || genElement)(el$1, state);
      }
      var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    }if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines((0, _stringify2.default)(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + (0, _stringify2.default)(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      /* istanbul ignore if */
      {
        res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
      }
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
      }
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
      } else {
        errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
      }
    }
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = (0, _create2.default)(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = (0, _create2.default)(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend((0, _create2.default)(baseOptions.directives || null), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(21).f('toStringTag');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
module.exports = __webpack_require__(0).Object.isFrozen;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(12)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(30);
__webpack_require__(38);
__webpack_require__(81);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var defined = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(24);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(18);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(77);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80);
var step = __webpack_require__(54);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(14);
var global = __webpack_require__(1);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(39);
var $export = __webpack_require__(2);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(15);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(19);
var speciesConstructor = __webpack_require__(55);
var task = __webpack_require__(41).set;
var microtask = __webpack_require__(86)();
var newPromiseCapabilityModule = __webpack_require__(42);
var perform = __webpack_require__(56);
var userAgent = __webpack_require__(87);
var promiseResolve = __webpack_require__(57);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(43)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(18)($Promise, PROMISE);
__webpack_require__(58)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(88)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(39);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(41).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(17)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(2);
var core = __webpack_require__(0);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(55);
var promiseResolve = __webpack_require__(57);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(2);
var newPromiseCapability = __webpack_require__(42);
var perform = __webpack_require__(56);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(0).setImmediate;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
var $task = __webpack_require__(41);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(11);
var $getOwnPropertyDescriptor = __webpack_require__(59).f;

__webpack_require__(12)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(0).Object.isExtensible;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(12)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(12)('getOwnPropertyNames', function () {
  return __webpack_require__(60).f;
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperties: __webpack_require__(50) });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(30);
__webpack_require__(38);
__webpack_require__(108);
__webpack_require__(114);
__webpack_require__(117);
__webpack_require__(119);
module.exports = __webpack_require__(0).Set;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(109);
var validate = __webpack_require__(61);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(110)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(6).f;
var create = __webpack_require__(24);
var redefineAll = __webpack_require__(43);
var ctx = __webpack_require__(9);
var anInstance = __webpack_require__(40);
var forOf = __webpack_require__(19);
var $iterDefine = __webpack_require__(33);
var step = __webpack_require__(54);
var setSpecies = __webpack_require__(58);
var DESCRIPTORS = __webpack_require__(5);
var fastKey = __webpack_require__(26).fastKey;
var validate = __webpack_require__(61);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var $export = __webpack_require__(2);
var meta = __webpack_require__(26);
var fails = __webpack_require__(13);
var hide = __webpack_require__(8);
var redefineAll = __webpack_require__(43);
var forOf = __webpack_require__(19);
var anInstance = __webpack_require__(40);
var isObject = __webpack_require__(4);
var setToStringTag = __webpack_require__(18);
var dP = __webpack_require__(6).f;
var each = __webpack_require__(111)(0);
var DESCRIPTORS = __webpack_require__(5);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(9);
var IObject = __webpack_require__(52);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(34);
var asc = __webpack_require__(112);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(113);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(62);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(2);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(115)('Set') });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(39);
var from = __webpack_require__(116);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(19);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(118)('Set');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(120)('Set');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(2);
var aFunction = __webpack_require__(15);
var ctx = __webpack_require__(9);
var forOf = __webpack_require__(19);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(0).Reflect.ownKeys;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(2);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(124) });


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(45);
var gOPS = __webpack_require__(46);
var anObject = __webpack_require__(7);
var Reflect = __webpack_require__(1).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(20);
__webpack_require__(128);
__webpack_require__(129);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(49);
var META = __webpack_require__(26).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(27);
var setToStringTag = __webpack_require__(18);
var uid = __webpack_require__(22);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(21);
var wksDefine = __webpack_require__(47);
var enumKeys = __webpack_require__(127);
var isArray = __webpack_require__(62);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(24);
var gOPNExt = __webpack_require__(60);
var $GOPD = __webpack_require__(59);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(25);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(45).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(44).f = $propertyIsEnumerable;
  __webpack_require__(46).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(14)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(46);
var pIE = __webpack_require__(44);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('asyncIterator');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('observable');


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(37);
var $keys = __webpack_require__(25);

__webpack_require__(12)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(24) });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
module.exports = __webpack_require__(0).Object.freeze;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(12)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(145);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(63);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(38);
module.exports = __webpack_require__(21).f('iterator');


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ = __webpack_require__(148);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var img = require('url-loader!./1.jpg')
// var img = require('./1.jpg')

exports.default = {
    // template:'<div>我我我我我12345</div>',
    template: '<div><img :src="imgSrc"/></div> ',
    data: function data() {
        return {
            imgSrc: _2.default
        };
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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paSgBaKSloAKSlpKAPyC+Df/ACmR+O3/AGJln/6I0Gv1+r8gPg3/AMpkfjt/2Jln/wCiNBr9fv8APWgD/9L9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PtfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAPyC+Mn/KZH4E/9iZef+iNer9fq/ID4yf8pkvgT/2Jl5/6I16v1/oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKAPyA+Df/KZL47f9iZZ/wDojQa/X/mvyA+Df/KZH47f9iZZ/wDojQa/X6gD/9P9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PlfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloA/ID4yf8AKZH4E/8AYmXn/ojXq/X6vyB+Mn/KZL4E/wDYmXn/AKI16v1+oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgD8gvg3/wApkfjt/wBiZZ/+iNBr9fq/ID4N/wDKZH47f9iZZ/8AojQa/X7/AD1oA//U/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T7X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgD8gvjJ/ymR+BP/YmXn/ojXq/X6vyA+Mn/KZL4E/9iZef+iNer9f6ACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigD8gPg3/ymS+O3/YmWf8A6I0Gv1/5r8gPg3/ymR+O3/YmWf8A6I0Gv1+oA//V/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T5X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaAPyA+Mn/ACmR+BP/AGJl5/6I16v1+r8gfjJ/ymS+BP8A2Jl5/wCiNer9fqAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoA/IL4N/8AKZH47f8AYmWf/ojQa/X6vyA+Df8AymR+O3/YmWf/AKI0Gv1+/wA9aAP/1v38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+1/MF/wRV/5Om8U/8AYmX3/px06v6faACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoA/IL4yf8pkfgT/2Jl5/6I16v1+r8gPjJ/ymS+BP/YmXn/ojXq/X+gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooA/ID4N/8pkvjt/2Jln/AOiNBr9f+a/ID4N/8pkfjt/2Jln/AOiNBr9fqAP/1/38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+V/MF/wRV/5Om8U/8AYmX3/px06v6faAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKS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AKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoA/IL4yf8pkfgT/2Jl5/6I16v1+r8gPjJ/ymS+BP/YmXn/ojXq/X+gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooA/ID4N/8pkvjt/2Jln/AOiNBr9f+a/ID4N/8pkfjt/2Jln/AOiNBr9fqAP/0/38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+V/MF/wRV/5Om8U/8AYmX3/px06v6faAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgD8gPjJ/wApkfgT/wBiZef+iNer9fq/IH4yf8pkvgT/ANiZef8AojXq/X6gBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAPyC+Df/ACmR+O3/AGJln/6I0Gv1+r8gPg3/AMpkfjt/2Jln/wCiNBr9fv8APWgD/9T9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PtfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAPyC+Mn/KZH4E/9iZef+iNer9fq/ID4yf8pkvgT/2Jl5/6I16v1/oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKAPyA+Df/KZL47f9iZZ/wDojQa/X/mvyA+Df/KZH47f9iZZ/wDojQa/X6gD/9X9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PlfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloA/ID4yf8AKZH4E/8AYmXn/ojXq/X6vyB+Mn/KZL4E/wDYmXn/AKI16v1+oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgD8gvg3/wApkfjt/wBiZZ/+iNBr9fq/ID4N/wDKZH47f9iZZ/8AojQa/X7/AD1oA//W/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T7X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgD8gvjJ/ymR+BP/YmXn/ojXq/X6vyA+Mn/KZL4E/9iZef+iNer9f6ACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigD8gPg3/ymS+O3/YmWf8A6I0Gv1/5r8gPg3/ymR+O3/YmWf8A6I0Gv1+oA//X/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T5X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaAPyA+Mn/ACmR+BP/AGJl5/6I16v1+r8gfjJ/ymS+BP8A2Jl5/wCiNer9fqAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoA/IL4N/8AKZH47f8AYmWf/ojQa/X6vyA+Df8AymR+O3/YmWf/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pKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloA/ID4yf8AKZH4E/8AYmXn/ojXq/X6vyB+Mn/KZL4E/wDYmXn/AKI16v1+oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgD8gvg3/wApkfjt/wBiZZ/+iNBr9fq/ID4N/wDKZH47f9iZZ/8AojQa/X7/AD1oA//S/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T7X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgD8gvjJ/ymR+BP/YmXn/ojXq/X6vyA+Mn/KZL4E/9iZef+iNer9f6ACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigD8gPg3/ymS+O3/YmWf8A6I0Gv1/5r8gPg3/ymR+O3/YmWf8A6I0Gv1+oA//T/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T5X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaAPyA+Mn/ACmR+BP/AGJl5/6I16v1+r8gfjJ/ymS+BP8A2Jl5/wCiNer9fqAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoA/IL4N/8AKZH47f8AYmWf/ojQa/X6vyA+Df8AymR+O3/YmWf/AKI0Gv1+/wA9aAP/1P38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+1/MF/wRV/5Om8U/8AYmX3/px06v6faACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoA/IL4yf8pkfgT/2Jl5/6I16v1+r8gPjJ/ymS+BP/YmXn/ojXq/X+gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooA/ID4N/8pkvjt/2Jln/AOiNBr9f+a/ID4N/8pkfjt/2Jln/AOiNBr9fqAP/1f38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+V/MF/wRV/5Om8U/8AYmX3/px06v6faAFor84Pjn8SPE2p/teeGtA0Xxvd+CvAnwf0GfxL42vbYg28qX8iJa2VyjrIh3LD5mWQlImd0KuAwZ+3V8ftZtfh94M8E/AbxLJHrnxBv7K6/tnRXW5NhoENxF52oK8bbPLeV4YVLMscgd1LYzQB+kVJXxD46/bM8H/A+18H+GvH3h3xde634gnt9OtPN02Br6/ddiXFz9ntXBcoG8x1hhwSQqKMgV9a+K/E1x4a8OyeILLQ9Q8QshjxZ6ckRu2EjBdwS4lgX5c5YFgwAPBIxQB1VFfHXxx/a1vvgh8LtY+KGt/CrxKbLSDbBxcPpsMZNzcR26hnivJ3X5pBjETc4BwMkeafHn4i/FfxH+07+zz8Kfhdrd/4NbWrfUtf8S25SGSWPS4o4isNzE3nQ7mdZYQ3zBJCCrcZoA/RCkri/H/xF8DfCzw4/i74ia3a+H9Gjmhga6u5BHGJbhxHGufUsw+gyxwoJHmH7Rfxu1j4B/DjUfitb+FT4q0DRYVnvvs18lvcRxs6oHSOSMrIo3ZJDggdFNAH0JRXwv8AD39rf4n/ABL+GOnfGHwr8CtZ1Lw1qcMlzB9k1bTJL2SKJ2RilrJLEzHKNtQHc3YEkCvaP2fP2lvhd+0v4ZvvEPw2ubhZ9In+y6jpt/D9mv7C45xHcQ5bbnBwysykqwByrAAH0BSV+futftueJtD/AGlNM/ZXufhZPJ4x1eIXFtLHq0BsXtvJknabzWiVwipFJkGMNlSApJGfuXU7zxDbeH5L7TNNhvdYSJWFmbnyomk43IJzGeBzhigzgZC54AN6ivlz9nX9oTxV8fG8QXV18Prjwhp3hrVL3RLmW9v4ZpW1CwcRzxRxQocqjEqXLAZBC7ucc/8AEj9sTwz4d+J3/Ci/hV4a1H4o/EaJfMutN0gxRWunJx82oX0zCG36jj5iCQGALKCAfYdJXxZ46/ag+K/wd8J3Hjz4vfBDVIPD9jGZbu48OapZ65JaIATvmhf7G4RQPnddyIOS2Oa+i/g78Rrf4vfCrwn8UbSzbTofFWm22orbM4kaEXEYfyy4C7iucE4GfSgD0mivj/8AbR+Nvjb4C/Drwz4w8CzWMN3f+KNK0q4OpRGW1+y3vmJIZNrxsoXAbcrqRt64yDY/4Wz4y/6Kh8Nv++pf/lhQB9cUlfB/7FPxs+Kvxl1z4zR/ELWtK1rTvCPi250fSZdLtvJj8mAHJWQSOJIWGwxltz8sWdgVC/dVy1wtvK1oiyzhGMauxjRnA+UMwVioJ6kKcdcHpQBPRXw18c/2pfi9+zx8Kr34u/ET4WacNJ0+S3imgs/ErT3KtcyrEmFOmohG5hn5+n5V2XxL+N/xu+FXw78QfE7xL8NdHl0nw3Yy39ylt4mlecwwruYIraWqlsdAWA96APrOkr4Y8OeOv2xvij4j+GfxR8H6D4X0L4X6xp9vfalptzqk9zqV1b6lGkqSrILBFikt4yCsakqzb1ZyCpX7lkkjijaWZwiICzMxwAByST2AoAfRXyZ+zT+05J8ePhBrXxn1rw4/hnw9p95qQsrpplljv9OsHcfakGA6YCFXVhjcp2sRwPFP+CeWv/tAfEX9mG8+JPjvxc2p6t4ru7+bw8uqQC4isLeKV4kEpQxXE8bTKx2tKCIwoQqKAP0epK+Tv2YP2j9d+N17468DePPCcnhHxv8ADPUI9N1iBHaexnaYSGKe0mZUYpIsZcKy5CMh3MGBr6g1LV9J0aOGbWL2CxjuJo7eNp5FiV5pTtjjUsRl3bhVHJPAGaANKiuS8ez3Vt4G8RXNlM9vcRadePHLGxV0dYWKspHIIPIPavkz/gnb44+JXxO/ZS8KfEb4p+JpfFGsa7JfFZZoIYXhgtLuWzSJmiVfNJ8kuZHG47sHOMkA+4KSsy11vRb7U77RLK/t59R0wRG6to5Uea3E6lojLGDuTeASu4DcAcV4L+1J8YfFX7P/AMKrr4xaDo0PiLTPDc8Ems2DM0VzJp80iwvJayjKrJCzrIQ6MrIGGVODQB9HUV8H6f8AtFfEr4h/tC+GvA/woOmxeFPFfw2tPG1v/bVrMLmNpr7yAv7mRSpaKaPcrbgCnynk58o+G37QvxF+Of7Lenx+LbrVdI+IXjGLVpdE1Xwxp1wsEU2m31xbw7tjyCQo9vunhxhoSMryTQB+o9JXx/8As+fHrxP4t1HTPhJ4w0m/1bxP4e0iBfEmvpbJbWMWshFZraS3ys0TSofNRmiRGBGFUnaPra+vrLS7G41PUriO1tLSN5pppWCRxxxgs7ux4VVAJJJwByaALdFflf8ABz46fHr4vfHvxB8dNM0rxPN8D1tzpnhvTNPtLNoNYWB5EfUJftk0MkYMmWRowrOuxGbEbBvo/wCEP7X2kfGT4zeJfhLoPgXxBZW/hcGC71m4giewi1KPJmsppLeSWOORVxtzISzblIUhd4B9g0lLXjmoeKPjbFqt/a6b4C0y5sIJmS2uZNfaFriH+GQxixcxkjqpY4OcEjBIB7HRXx98bP2kPiF8APhrq/xV+IfgTTIdF0YR+YsHiBnnleZ1jjjiRrBQzszDAyBjJJABNdj4O+J/x18ZeFNH8Ww/C6z0uLWbWG7S1v8AXzFdQpOodVmjWwcI4BG5dxIPB5BFAH0hSV4H8Cp/2kJIvES/tD2Wg28j37zaQ2h3M04SylJK284lhiy8OABKP9YDyqlctvarefHyPW7+LQ9H8M3GkLIPsctxqV7DcvGVBPnRJZSIjBsj5ZGBAB4ztAB6/RXif2/9oz/oBeFP/Btff/IFfGfxt/ak/agsvFsHwb+AHhHQPGXxAhuIJNTTTbi6vrTSbYNuKX880Npb28kwG1VaXeFJO0EoSAfpxSVzej6zqH/CJWmv+M7JNAvVs1uNQtvPW4jtJFTdMnnKAHVDn5wBkDOB0r4p8aeJvGPxX/ar+HMfws+IbaV8OPC3h+XxFrt1pl1DLZaol/cmGztmJ8yFw5tJTvwSkYl2MrMDQB990V8I/te/tJ6Bo37FnjT4xfB7xRFfG+tl0/StS0u43EXV3cLaFoZEOVlhDO/ZlK564rZ+Hn7QHgb4Lfs9eHtY/aJ+L2l694gsbO2Or3qz20s32m5ZR5KQWILyCEuI94QswUyP3wAfatJWXoeuaN4n0ay8ReHb6HUtL1KFLi1ureRZYZoZF3I6OpIZWByCK1KAFopKWgApKWvg34bfEv4mfE39sf4nz6R4g+y/CH4ZWNtoV1bNEjQ3muhWuLh0lYbo3td5SYg4O2MEEYIAPvKivyt/aH/a31b4hfsS2f7QvwHvNX8F3Fzr+n2tvcXMCRzEfaxbzFUbzIp4WJIBO5WIIYBgQP09s2GlWenabquo/arx1SATTeXHLdzJGWdtiBE3sEZyqKAACQAo4ANWkrifHPivXPCOn219ofhDVPGUs84he20mSxjniVlJ81jqF1aRbARg4kLZI+XGSPMrL43+MNTjkm034N+KruOGWSB2hvvCzhZYWKSRsV104ZHBVlPIIIPNAH0JRX5afsP/ALQHx08U+AvFuoeMfCviz4hmy8T6lp9pLFL4ejWxt7ZlxbM9zqNrPLIpf52bzFxtCOQDXvFh+0R8bfHXjfwvL8K/hJLqfw+a8ubLxFqc+t6DJc2ssb+URbpZancoxt3BaZWbeQNqqDgkA+06SvAv2qvEPiDwj+zZ8TPFfhS+k0vWdG0DUL20uoTiSGa3haRHXPGQV78etYHwu+KPi21+Avwu8V+LtO1fxzrfirRLC9vLvSrK3BWe6tkuCZYleJI1+cqpUbfl5wSAQD6dor8xPE37Q3xOT9uzwn4R03T/ABRYeE7jwfPe3nh77JZvJeXENzOiThJJH2KNy7njkRzsCnK19aeEvjN458U/FibwZN8MNZ0fwolkHGvXslqqrfj52tpLaOaSRFMZUq/UtwVCkMQD6HpKWkoAWikpaACkr4d/bw8X+ObX4d+GPhH8JNVn0fx98UfEOn6Rpl3aSNHPaQwyC7u7sMhDCOGKLEhH8L+9dP4v/aL8I+A/2c9d8Y+D/FifELX/AA1GdCgZfKe+vvEmfssFrNbQIm2eW4Klo1jU7csF280AfXlFfmL8BP2jtV+CP7KOk+PP2hbzxX4ra3tRfX2s3dpbGKIzkBbSKXzUkl2OfLBlLSNISPlG1F+7/g/8TtN+Mnw20H4l6Tpt/o9trtus62mp2z2t1CTwVZHAyMj5XXKOuGUlSDQB6XSV+ff7cXxi+K1jBoX7PP7M8dxd/FbxoftZeyeFZtL0e0YPPdFriSKFGlZfKj811VvnAIYLn23wx8UPi3pHh3TdM8Q/CPxnrup2tvHHc37S+E7ZrqZVAeUxRa5sj3nnavA6CgD6Yor5N+IPxv8Ajpb+FtRtfhr8Dddl8Yz28n9lQ6xqXhuGzaZcAvN5OtSStHHuDMEXJ4Xcu7cPe/hxrvi/xL4H0fW/H/hp/CHiK5gBvtKkuYLv7NOpKsqz2zyRujEbkIbO0jcFbKgA7ekpaSgBaKSloAKSuZ8Z+MfDXw98Kat448Y38el6JodvJdXdzKcLHFGMk8cknoqgEsSAASQK/ML9mv43/HC8+IVt8dfjnrVxofwv+N2pXVl4V0e6VPJ05okjOlGWRhug+3QxzbArBJJVDlWMyFQD9ZKKSloA/ID4yf8AKZH4E/8AYmXn/ojXq/X6vyB+Mn/KZL4E/wDYmXn/AKI16v1+oAWivknxT+2D4E8O/H/wV+zvb6Nq93rvjKSYRXklnJZ6fHDBFJI0kc06qbnmPAMKsnOS44B+tqACkpaSgBaKSloAKSvyY0z9pT4n6J8RPjH+1Fr9v4i1X4IaBu0jw/Z6fJpn9mXkunObSe7zd3Edx+9uwVia2jPmF8HfsCn6w8Z/tB/E3w98Ek+POn/Du3ttFs/D9zreq6d4g1WfR9Vs5LZDIbZIY9Pu1kZwuELvFzjIGeAD64or88fjD+1B+0h8P/hX4I+Iln8OfDdpP411XQrC2sptfvLu536uVYW7xjTLVEk25UuJXEZy2yQDB+zPiR4s8SeCPAGpeMdE8PHxJf6TB9qm02C4EUssUfzTrbu6EPKqbjGjBBIQF3JnIAPQqSvFPg9+0H8Lfjn4S8OeL/AOqGeDxRBdXFpbzIY7lRYOkV2skfO0wSSIjnJXLLtZgyk/N3hnxZ4+v/8Ago54x8DN4nvl8IaZ4KstR/sfeHs2vJZ0hEm1wxjIVmJ8soWbG4kAggH37RXOaT4v8K69rGseH9E1e1vtT8PSxw6jawzI81nJNGJY1mRSWQuhDLuAyOnQ10dABSV8E/t/fGrxt8Pvhrpfw0+C8ly3xS+I94tlosdgjy3cFvbkTXt2qRqz7Y4hsJAJG/cAdpr1nwf8av8AhGPBGl2Pjy18Va9q+m2aLqOqv4VvrNLiWNf3s5iSAJEpIJwOAKAPp6ivkn9mD9sT4e/tWyeJ2+H+kaxaWfhy7a3W9vbNks7yPja8U65QOQQxhcrIFIbbjOPZ/F3i74haHrken+GvAU/iTT3gEhvYdQs7ZUl3EGJo7h0fIADBlBUg9QcigD0+kr5B+Mv7UHin4D/DfV/it8QvhfqEGgaJ9n+0vb6lYTyj7TPHbR7UWXJ/eSqD6DmvRbH4nfFbUbG31C2+FV2YbqNJUJ1bTwdrgMMjzOODQB71RXyj4R8W/tYah8b7w+LfAmnaV8K5rAR2wTUYJ9VgvYlaQzOFOx1mY+V5YOFAR933wa3wL/amf40/GL4l/CK48GXnhS7+GxtEuGvrqCaWeS7MmB5dsZI0UKgYFZn3bu2OQD63pKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgD8gvg3/wApkfjt/wBiZZ/+iNBr9fq/ID4N/wDKZH47f9iZZ/8AojQa/X7/AD1oA//W/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/Sx4w8VaT4H8L6n4t1wv9i0uBpnWJTJLIV+7FEg5eWRiEjQcu5Cjkiv5p/wDgir/ydN4p/wCxMvv/AE46dX9O1xbW13GIrqJJkV0kCuoYB42Do2D3VlDKeoIBHIoA/Ba4X4r6XJ+2donxN1JWv9Y8EReI9QsEihZba91G0Yw2wuQvnOljbqtug3lDhnAyc19m+EB8NPCXwsh0Lw94Xn+LHxA8deGNK0690e2VTHBppsUjt7K7uABb6bYojsx8wq8jO8irI7Yr52/aAe4b4t/tqwWUTzzzfD7QoEjjUu7NNbsgAUZJJ3dBXv8A471iXw58C/B/hX4r+JV+Fngm70ewtLnTtMVpfFniK4a2jE1nbRRLvthI5KyeUks7gnc1v8xoA+Tfg14i8ZfA/wAV6t8efEtjF+0x/wAI9bR+HbnVvDN+2oan4Pis1ZXso7O4jQzwsM7r1GBlAd3b5mLfqhaftDwa3+zZr37RujeFNU0+003Qr/XLPTtaSOyurqKztWuYyRFJcCNJtuFY5OPm2kYz+eejfF3xN+zJPpvjvVNBi+GPga4tpNN8IfCHTLOO58Sa/NNgJfXxQl4Jy6oWZvNZRmNsyN+9/QD40+Jj4z/Y8+Ifio6XfaI2qeCdanax1OBrW9tmbT5t0U8Tcq6HIPUHqCQQSAfGP7YvxX8b/H79hLVNS8K/CjxHBb+MbXw9f2cxk0y6jKT6hZ3EYEVteyXbbxhVxb7hkF1Qbiuz4G0LR/jR+2Nq/wAUfiVodtqfhTxjo2oaT4Mkn3Fvsnhm5tluJVIIGy9muppoTj5ootwJBBPsHwS+LPwv8Kfsp/BzwH4q1Br3W/EXgvR4LbQ9N8yfV7yOXT41byYLY+ci4JzOSiR/eaRAMjS/awafwB8EfDfx18NWcfhnUfg7c2eswaZNJBAjafs+x3ulFo3aEGS1lZI1jZgZVjCE8UAfN/h/4I/Cf4m/t/fEbwJrXhez1fwP4D8J6XE+k3KGaxi1fUJFuUuPJclfO+zl1DYztJFfTn7buiaT4b/Yf+Jfh7QbVLHTdM8PG2treIbY4YYiioiDsqqAAOwrgP8Agnbat408G+PP2nNVngl1n4y+IbnUWihmSdrLT7Jmt7GylZCQJIU3kjOQrqCAcivTP+CgV1bWf7GnxXlupFiRtIaMFiAC8ksaIv1ZiAPc0AfIn7Jv7W3hL4L/ALFXgIa34K8Z6uNH02cyTab4dvJrJ/8ASJmyl6yJbFecFvMwDkdjXRf8EyvAd7d3/wAW/wBpe+1TSs/F3WPt8Wj6TfRXw0yPz7m5Ed08JKLNm52hMBlCknBcqvsf/BPzxp4O0b9h/wCGuoaxrtjYWtjYXK3EtxcxRRwmO7n3CRnYBduOc4xXxh+wvD/wlv8AwUI+OHxO+DETJ8JLmK5gkubdCmnXV68sDJ5IAVGYyLPKhA+WNjyBINwB3Hj3/lM58N/+xUn/APSLUq/ZKvxq/ayuIfgL/wAFGvgt+0140DWfgG/02bQr3USrNDa3bRXsI81gCEXbcxvz1VJCPunH6q+Ivit8NPCfhGbx74h8UadZeHoInnN81zGYWRBuPlspPmHHRUyxOAASQKAPjz4d+OJvhf8As8/tD/EWxC/avDXir4g6jCCu4NPbXU8kYI75dQDmvFv+CP8A4Yjl+A/in4wa1m98U+O/EV5LfahKd09xHbhdodj/ANNnmc+pck9q+oPgb8M28e/s1eLNF8a2c+lw/F+98U6pNbTIUuLay8SXdzJbq6tgrIttLGxU4KtweRXxJ/wT98b3f7IOv+Jf2NP2jtnhbUZNVl1Hw3ql0TFp+rxzqkciW9w4EXPlo8Y3ZLO0bYkXaQD9TPjH8Xvhp8HfClx4h+K81za+HXjdbq4j0q+1K2jiYqjfaTZ286xI28KPN2hs4Gea8+/Z4+J37Pt18F9Il+EGsyR/D7QY47Cxv9TtrzTrZkR2jVIp9RhtxMFZTGShbBG0ndXL/t6a9oGm/sffFBtU1C2tl1HQ7mG282VFE80qgRpHk/OzEjaFyTWF+wT4ZsdR/Ye+GPh/xTpUd1a3Gmu8tpewK8citdyyxlo5FIIPyupI54YdjQBwf7e11YfFL4YeDvDvw51XSNc1O38Z6HeyRHULYRR21u8jSSzEyDES5G89cHpXpn/CRal/z9fCz/wLb/4ivBP20PGVr4V+KXwe+BXwgfQvCXiLxLq0eoatqFzp1pLb2ejIxtVFykqbClzNIUiBKl5UVFZWZTWb8avDthon/BQr4T2vhjwXYa20vg/V2fT1W3tIZWEjgyHehTKjkZBPYGgC9+zf4l0D9lnw58fPid8bte0DStO1vxbqOvWlvpWoW9201q52x/Z4Y3LfvmwsMbYfkb1Wvu20+O/w71X4W6V8ZPDk174i8L6ysL28uj6fdapcETNsANrZxyzgo/ySL5eUbIYDBx4hqmk/GS78c+EY9C+CvhfT/CQunHiB7u6tJbw27rsRrQRQ7QYiTIwbO/AQbclq+w9N0rTNGtFsNHs4bG2QkiKCNYowSckhUAHJ60Afkt/wUu+NHhbxt+yV4h8LaVpPiW1utQv9KVH1HwxrOnQfLeRuR595aRRBiF+VS2WPABPFe0ftffHjwdr37LfxR0Ox0XxXBNeeHr6GN7vwnrtpbqWiIBknnskijX1Z2VR3IqP9v0R/EGb4O/s56U32jWfHPjLT7ue3Xlo9H0kPPfXDAchUG3BIwcHnivb/ANt1gv7InxdJOB/wjeoD84iKAPnDwZ+1bqfw7/Zk+EVt8PPhX4z+IGrRaL4etLuCz8PapBDFapaQi5uI7ma1WGfCqRD5bMsjFTuCfNX258S/Cl58Z/g1rnhHQ9ZvvCE3i/Smgivlt/LvLRbqMZDwTqGRtrFJEOyRQWAZHAYYv7MP/Jtfwm/7FLQf/SCGvb3dI0aSRgqICSScAAdSTQB+Qn7U3gzxT+yn+xTD8NtF+J11MmpW1n4N0+xkstMs7S4k1FTFcF5fIM0amHz5WczFgeWfOWr274cz/DT4WfDvw/4B0D9qbTLPS/DdhBZxJHceGyipAgBILws5yQSSzFiTkkmqmmeFbD9tn41S/ErxHam9+CvgS1v9I8PQzIRDr2qXqNb3+poDw9tDGTDbvghn3SIwwRXz38bPi54+1PwzD/wT70TTlm+NevTJoE+smNVtpPDvlCRtaaQD5ZLi1yssQ+ZJBNt6RbwD7G8MfDP/AIXfdeB/jj4R+Pmva5pOkzPeWR02PTbayvfMAimjvIorRDL8imJllG+L5gAj815x/wAFX2C/sUeLHztdb7SCp6EEX0XT3xX2F8DPgj4C/Z7+G2lfDH4eWKWmn6eimaUKBNeXRVVlup2H3pZSoJPYYVcKqgcB+1x+ztL+1H8H5fhGuu/8I7BeahZXVxdeR9obybaTeyKm9BubjBJwD1BoAd44/Z1+Cdt4F8QXMHhK0SWLTbt1YGTIZYWIP3uxr5J/4JvfBP4VeLv2Lvh34h8SeHLa/wBRuxq3mzSF9z+Xqt2i5wwHCqB07V9beO/gB8ObXwN4huI5Nd3Q6dduN3iXW2XKwsRlWvSpHqCCD3r5J/4JvfBrwR4r/Yu+Hev6u+ri7uhq28Wuu6rZQ/Jqt2g2wW11HEnCjO1Bk5JySSQDP/ZG8A+EdB/b9/acm0fTxaNoUOgWlkqSSBIoLy28ydNm7a25okOWBIx8pGTn7C+P37R/wd+E3hPxX/wtDR9Y1bS9HtV/tCBPDuoXlhPHcBQkRu3t/wCz2EhcKQ84UMdrEHiofgp+yx4Z+CPxX+JHxU0PWr6/l+ITWINpdyyTi0isYtijz55Jp5nZizb3fgEKFwMnzz/gpX/yZB8Uf+vaw/8ATjbUAfPHiP4hfBzxF+3bpeq67r2p+G9OuPhdp8OkxWH9o6deTteX0l95RjtFWZPLt1VmhcDGMlfl4pQt8FtF/Zu8JL8KLLxj4g+HPwT8QS+K38S26acJRPpN5cz6havHfXdhc5kEsqkx27KY3ABdty1T1XTG+G/7Uv7OvxI8dQ3Umt+Mrrxhfzw2VrPqNxb2FtodtY6dbJDZJNI+yBVkk2KwWWSZslRurj/Ddj4z1D/gnR8T/EGi+I/7J0BY/HP2jTrjTN0l1v1C7IZZZGjkhJVtjAo2COgIIIB9QfsyXHj/AEKLw74w8P8AwivrpPi9dy+I/F3ie8v9JhkT+00+0Wn2WCO8lnltbdZBGsbrG6RqWEZkdlrhv+Cluv8AxYu/gZqTaJMPDXg6HVtO068SVC93rn2i6WJ4yoZfJsRzkE77jphIcGb3L9mb4b/E2bwN8GfiDefEy6fQrDwjpsX/AAj0NhDFZXEN1YwlTM+5pHli2pskyCMEAAO4b0v9qv4AT/tK/CtPhhHrf/CPxyapp97NdCIzP5VnMJWVFDJh2x8pJwDzigD52/a58W/HT9mn9mfXvFnhnxppPnWEVppWl2Vl4e+yMr3csdrGLci8kWNoY2LxgRsBsA244ra1H4d/GT9mr9lbxC/gjxho+ljwZ4Y1LUlgh0Es73ltaSXEjvPJfSeZLJKpZpZFcsx3MG6V458ePhZpfxa/aT+G37MuieKPEOs6fosp8W+LjcatcXS2VtZjGnxfMSsc1xM3HR1TDrwc079kPwH4j/ax/YvXWfij8QvE1xrPjC31vS7m4XU5fJEbTT2ik2wIjcKmMqeG6HrQB9q/sia/448Wfs0fDrxZ8RtbXxDr2t6Pa3094IFt2cXKCRFkVWZWdEYIzjbvI3bQSRX0dXkXwj0Pwn8MNA0r4A+Grq4uz4D0PS133O1pGtZjPbwO7KFUuzWkhYBQBxgYNcZ8QfCnj745SX3gaW4uvBfw+3Pb6jcQt5Wsa0inbJBbsP8Ajzs35V5j+/mXIjWJCssgB+Wn7efxV8Z/GvxF4R1TwFFa3Hwg8B+NNJ057+5Tz7TXfEM0rK4hiBC3FrZIrxu24I8juoLAZX9PPit+0nZ/ALxTax/GTRptN8C6xLHBZeKbTdcWVtO4A8jU4wPMtSW/1co8yJx94oQQPmb/AIKF+FvDvgn9nn4Y+EfCWnw6To2keOPDVtaWtuuyKGKNpQqqB+p6k8kk81+ivjDwj4b8feFtV8FeMLCPVNF1q3ktbu2lGUlhlG1h6g9wRgg4IIIBoA1tN1PTda0+21fR7uK+sbyNZoLiB1liljcZV0dSVZWByCCQR0q9XxT+xD+z18Rv2ZvBXiv4a+L9fXW/DsOvXU3hlPMaSS30pwpQSZACM7ZZo1yqvuYH56+1qAPz1/aj8dfEux/ak+Afwf8ACfim68PeG/iMuuW+tR2qx+bPBYxw3AEcpHmQSMu6MTRMjoGLKcgV9veC/A3g/wCHegxeGfA+kW+jaZCzOIbdAoaR+Xkkb70kjnl5HJdjyxJ5r4D/AGof+T8v2Sv+uniz/wBIYq/SegDlPHqq/gbxEjcg6deAj2MLV+bf7EHwc+AXiH9inwLr/inwP4Z1LWrjS715ru80yymundbmcKzySRlyQAACTnAFfpJ48IXwP4iJOANOu8/9+Wr86f2G/gd8FfEv7EngTxH4i+H/AIe1XVrrSr15by70q0nuJHW5uArPLJEzsQAACT0AoA+TP2abPwZefs1/BSXxXYJYfC/4dzTeM/Gl3Da+Yl3q82oT2OlJcCMFpVt0H2i6JD7IEh3DaVr7D/4KW6X4FP7CPjrxD4YsdOaK+XRJLW8s4odskUuqWbq8UsY5V06FTgg+hrW/Ya8IQfEL/gm94W8BXEgjh8SaFrmmO7LuCreXV5CSR3xu6V4Z+1T8Hbr4Df8ABNvwz+z5qGsHXrwato+mNdEFRLLc6kbtkjViSI05SMHnYo4HSgD9R9X1y2+F3gXTZLbQNR1a2sEtbNbPRrQXM8abRGrLApU+WmADtB2jkjaCRyH/AAvVf+ifeL//AAUH/wCOV7vRQB4R/wAL1H/RPvF//goP/wAcrh/iR+0T440fwTqmofDP4R+KfEPidIsWFndWItbd5mIAaaUycIgO5gPmbG0YJyPq+koA+efEHxf8WR/BPT/F2neFbnSfH3iaJLLSvD2o4EyazOGVYpmTIMMJR5pZBx9njaTA6V+d37NF78SNE/Y9+Mnw0tLm31rxk/jjX/BenXMNuYZ7zU7+SOKbULl97byhnkuGYgeXDCQSQox+wc2iaXcazbeIJ7cSX9lDLBDKxJ8uOco0gUZ2gsUXJxnAxnHFfmt+xZ8OPDPj/R/jFda7NqcT6b8WvGBhbTdX1DSs+a1sG8z7BcQeaOBtEm4LyVAyaAPMv25v2d/BXwY/Y007w74U1HWmtdE1HQLKKGfV76W1I+1IrOLV5jAjMcsNqDaxyuK+5fF37N3wNXV/Dfj/AMf6rrD3PhK/hn0u71PxRqnl2t5PIkUezzbvZumcrHtOd+7ZghsH5I/4KR/Cbwn4Y/ZluNU0271uSca5osYW88QavfRYe7QH91dXcsecdG25U8gg19meL/2TPgd8QdKXQvHum6r4l01JVnW11PxDrV5AJUyFkEc166hlBIDYyMnmgD3PxL4p8MeC9Gn8ReMdYs9C0m2KiW8v7iO1t4zIwRQ8srKi7mIUZPJIA5Nfjp8KtC+FXh/xf8XPEnjSb4N+KU8Z+N9a1rTZdf8AEGnzXcen3M37n7tvdhFkA8zZvBBY7lBzX6Y/F6LUfCfhKw1LTPFkvhnw/oqJb3aHRpfEMk8bFIoPlXfPlG+85D5zlsY3V4gPizqu0Bfijq+O3/FvtT/+R6APzl/YtvfgzF8PfFa+KtG+EV1cnxZrBibxNqdpb3SwFo/LW3WSylJtRz5TAgEZwor7U/4JbWPg7QPgJrXhbQNc0PWdYsPEOoyaoNEl81YWlfbCsjmOPzAUjxFIu6NkA8t2AOPmz9hL4gajonw08Y20HjvUdHEvjLW5TFB4QvtTWQu0eZTLDCwjZu8RIZO4GaT9hz4V+OvivB8RfEfhr4qat4Si8OfFXWtRMNlYRwrqU7RQjfeRzAP5bozK1swAXJyNwBUA+hf2tPiJ488R6l8d/h9a6LqFp4I8H/CrWGutQmikjs7vWNRWGWFYGI2SeVbJICwJIYuuBg54v4SfCzUfhz4J8JePdKfXLbwJ408B+FFvbXTtfg0OxttddbdRdRyPdwSRT3OY42WNdsrSNvZnbaPtv9snj9k34wZ/6FXWP/SWSvjP9pcA/wDBIm2B/wChM8H/AKSadQBNqv7PHxMvf2oND+MsHhPxCPDem+G59Imhk8aStqrXUlw0qtHdG+MiwbSMxiUKWydnevSPghYeI/DHxKbV/gP4Dhl8D+JtTul8aaje+MH1q9GqQt5XmxI13dRrLCQRcAkSSLtXjy1zwGg+F/h62h6cz6T4HLG3hzv+DmsyNnYOri7wx9WHXrWt/wAEs9H0ix+FvxO1KwtLeG4uvH+twySW9q1krxW6w+UiwOS8Mab22RMSYwxUnOTQB+nlFeb/ABd+Kfhj4KfDnW/ij4yW6fRtAiWW4Wzga5nIeRY12Rr1+ZxkkhVGWYhQSJvhT8UPB3xo+HmifFDwBdte6Dr8JmtpHQxv8rtG6Op5V0kVkYdiDyetAHoVFFJQB+RHxR8VfELxD+3B8EfiXpGqHTvCWpavqnhfRoWt4ZjdWVrCJtSvkMyv5YvJh9nikj2s0EIkVtsozJ+y6nwo8L6f4q+Ifj+aa/1PRviL4yfQtEtYGu7mfUHuvKe6t7K3Vprm5WEiJHIKwIznKB2Yez/tUwWtj+0x+ybY2cSW8EOv6wkccahURE09VCqowAAMAAdK8r/Zm1Lx74W+B/xA8Q2Vxpfw9tNQ8aeJ7u68V+IUAjtLF7wlHt7dzGLht2/YZZEhVuf3p3R0AeDeMPC3j3XvjkdRn0PStYt7LUJfGkPwRudaVNQZp0CvqchCPam7dw1y2n73RS7P8xkff+mX7Pv7Tq/tF2XiBNF8A+JPBl94dZrW5PiOzjtYEvgqt9nGyZpXZQys48tcL1wSufzzs75fD9pdfEj4Lao3ww+Hlldpqvib4s+LrX7Rrni+dG8wW1jbTrHNLbTMAMKsSP8AdiTgrJ+mX7OXx8h/aI8FXHja18I634RtluXjtU1m0a2N7aE5gu7diNrxypgkKTsbK5I2uwB+fX7dXwhsvhX8FtD8UQ3k2uePPFPxA0C41fW5ZGtbm8mCzxxwxvGSbW1iQmOCKMkRJzl3LO31D/wqvWf+iY2X/he6r/8AI9Wf23NP+H/jfwfoHwy1rR7jxp4uutUg1XQPDFnMsbahdWYdA98xU+Vp0fmlrmVigxhQ25gp+Qf2af2brDwdpfi/wd44t/htN490u/u9V8RReIPDf2iWCKY747i0Y3cMQ0wxgGF4oo41+ZXVJFdFAJPiP4EXTP22/wBly11vwynhqO5vPEsqm08SX2qtO9pZQzRBnlWFolSQLlVJWUMVcFQQf148U68fC/h++8Qf2deauLCMym10+Lz7uUAjIiiypdgOdoOTjCgnAP5VfshaLc/GD4+X/wAYdL+GPgq0+Gvg8XWm+HvEelaQ+h3F5en93c3dlAHmE8TYMXmTMNigGEqzTof1zoA8HT47o6K4+H3jABhnnRyDz6gyZFO/4Xqv/RPvF/8A4KD/APHK93ooA+cte/aA1Ow0S/vdD+F/i/VdRggke2tP7NEHnzKpKRmV5NqBmwCxBwOcHpV34V/GXWNX+DEfxK+O3h5/hbqOmo66vbanIscEDxYzLFKWO6GTI2ZO7JKckZP0BWbqGj6Rq7WjarYwXpsJ1ubczxLIYZ0BVZY9wOxwGYBhggEjPNAHwlrHgbxb+2j4n0++8f6fceHvgNolwl5Z6NeRvb6h4quoTmK5voXCvb6ejfNFA4EkuA8iqCgGTda1L+0h8efjr+xX8SdC064+GnhvS9GltJbffb6hbve2ltNGI8boj5U2+SN8KUIVcOpIH6K1+bvwNI/4eQ/tLY7aR4U/9IYqAPEj8Tv27P2Jda0/4e+L/Ck37QHw8uJorHRdZs98Oqx+Ywjhgu3VJsOMgDzkIckBZ+qr+t/hbU9a1nw9Y6n4i0d/D+pXEe6ewkniuHt3yRtMsBaNvXKkjmugpKAPyC+Mn/KZH4E/9iZef+iNer9fq/ID4yf8pkvgT/2Jl5/6I16v1/oA/K39qD/lI3+y3/1w1v8A9EPX6pV+U37UV1bJ/wAFH/2XYXlVXWDWCVJAIEkUipx/tMCB6niv1VlV2jZI22MQQGxnB7HB9KAJKK/P3wZ+1V4/8AftE2X7LH7Suk2yat4hRpPDPifSo3isNYiAYhZ7d2c29x8hVwrsvmcAKjIzfoFQAV5B8dtF8YeJfhdrnh3wZqg0O51K3khudRUnz7WzMbGd7YYIM7IPLjYkCNn8z5tmxvX64r4k6jFo/wAOvFOrTttisdKvp2PosUDsT+QoA/Bv4Q+NrfUvCf7J3gDXvH/iGLw9qMOrXmq2UWnRyxWlxoluZNLa0B06QzCOQ7j/AK8KwVztZVYeyfC7xna+JPgZbaR8cvF+qaj8PvE3xP1HTbia8W41DUtWlF60mn6RFBFEZYreZ4fNucLnH7pEAkcx4Hwk8M/FzRtY/YZ0+317RbWa70HxNc6SJtHuZPssU+kxTyC7A1GP7SzxyAIY/s4U8kOPlrf/AGbPBKeN9Gt4viN4I1Hx9oHhfxj4zvzb6faWzWFxrM159nWWaO6u1KC3i81ooyXyZg28mPkA9ij0n4VfGb48eI/i98Q/FWveGfCnwF8Vm2l0rWNWEvh641+GXFrfwmeZmt9nmJiEIkasyiM48xW/VLIIyDkGvwx+CvhDwRfXH7RQsv2dT8QdSsfGV6ulaXdW2mLBassEXlWk0k9wVhCMSzeWsgAPyknivuL9q3xB480H9inWvHfgjUb/AOEOsaBokdx/Z8SWUzQAKsJsHfy5lQDdsjktnRlbawbGVoAwvgF8E/gn8SLnxjrFr4P0+b4d6HqkugeFbGSLzrZU0yeWTUb6IuWybrUZpkLZIaOCMfd4ryb4afBH4Qa1/wAFBfjJ4fl8F6TNoXhzw1oMcdmbOI28NxdqsxdY9u0Oyg5IGSK+jv2e/wBl34P6L8EfAitp9w9xJoGmPcyxalfQRSztbI0swiinSJTI5ZmKqNxOTk5NfAXgvwd4ZQ/Fr9sTStO1DUvA1n44gtQlpe3rG/8ACejwPp15eRMkwkmSKSU3SksT/ozKMKSCAe7fskad8KPhN+0L+1N4mvY9M8KafpXiHSdMiuZDHaW9vBcodsCsSqIsk5XgYy2Pav0z8ZeMNF8C+H5/EWuvIYYtqRwwRtNcXM0h2xQW8SZaWaRsKiKMkn8a+atN/ZP/AGQfiR4dXxLp3hKw8RaN4o8nUjci6ubiG+bYfKuHJmIkYKxCs2WAJHHIr23xL4q8KfC3R9H0O30q+1Se3hEOl6ZplrLfXbJboIhtPKxqqsEM08iRjdhpBnkA+NvEP7O3xu8W6f4o/aRGtSeG/jvPbk+GbSOWKex0bTbfc8WjSiQNBMbvJN3MflEzAxkJHl/PLjx98a/24vBej/A/w7CvhjRpbWKH4k+KNPZZLNZwo+06No8wZ0nlkOVnkRpIolJTfIDh+V/auuP2gviZ8Vfg38LviHqUnw58CfFHUr/S7nRNDvfN1OS1ijilb+0LsK1szOQF8mJJEVS6mWQOcfoF4d+Bev8AhHQ7Hwz4W+KGv6TpOmxLDbWlrp/hyGCGNeioiaQFUD2FAHpnw2+G3gr4ReCdK+Hnw90uLR9B0aIRW9vEPxZ3Y8vI7ZZ3YlmYkk5NdzX5tfs13PxHh/bg/aH8FeIfiFrfibQfC1t4de3s9Ra2MTT6nYRzNKEgghjhMYQoqwJGrg5kDuA1fpJQB+f3/BUn/kxX4lfXRv8A072dacP7Znhj4Pt4d8HftIeG7/4cpqFvbxafrjf8THw9enyl2hL6FVeKTHLJPBGVHJO3msv/AIKkkD9hb4kg920Yf+Vezr6b8T/CjwL8bPgrD8NviNpiapoer6bbJJG3DxuIlKSxP1SWNvmRxyD7ZFAHr1jfWWp2VvqWm3Ed3aXcaTQzQuJI5Y5BuR0dSQysCCCDgjkV+Mfwr1D42wftxftT6b8CtJ0i71y9uNE33+vzSx6ZYxJA5zJHbBp5pJCcRom1eGZnXAVv1v8Ahr4B0T4V/D/w78NvDTzyaV4ZsLfT7VrlxJM0VsgRTIwCgsQOcKB6ADAr87v2ULm2tv2/P2r9OuJUiu7iXQJYoWYLI8aQSbnVTyVXeuSBgbh6igDr/wBn79qv4yah8dtf/ZO/aY0TSdC+IlnYtqGkalo4mfS9StwucrHM/mEgZcHcm4K6FY2X5uu/ZY/aC+LPxk8f/HX4c+Of7FiuvhfrK6Rp15p1lcQpNua6QTXEMt3MT/qUbYki9WG7oRwV74UHxa/4KW6J8R/CoFxo3wg8Lzafq9/GSYTqt+bpI9PDjKvLFDcGWRc/JkBsMQD5P+yN8R/APwr/AGrf2ttC+JniHT/Cl3eeI4NSgGqXUVms1oXu5DIjTMoIVJY2PoHU9DQB9M/sn/tD/FH4ufFr45/DD4kx6Oy/CvVrTTrK60q1uLQ3KTvdqzzJPc3ODiBCArAAluW4wvgn47fFj9onX/ihD8DL3RNA0j4c6rLoNpLq9jcag+q6narunaQw3Vt9ntdxVEKrI7DMmRjyz81fsCeOfCeoftbftU2sOpRRXPiTXLC+023nzBPeWyG+dpYoZQsjKEkRjheFZSeDR8MfG3wq+Gf7Rfxq1H4UfGHwp4N0bWtalh1fRvFs8Yc+IIGc3l5p8X2m0dbYSSGMhmbzXV8FESNmAPon9h/9pv4u/tQ+GtU8WeNPDeh6Dp2iXt3pF2lnd3TXyanbCFyhtZYTGsRjlJ3C5ZtwA29SPvKvnD9lr4dfDD4afDOXS/hf4jt/F8Oq6ld6rqmsW08M632qXpD3Ep+zs0acbVWNSdqKoJY5Y/R9ABRRSUALRRRQAUUUlAC0UUUAFFFJQAtFFFABRRSUALRRRQAUUUlAC0UUUAFFFJQAtFFFAH5AfBv/AJTJfHb/ALEyz/8ARGg1+v8AzX5AfBv/AJTI/Hb/ALEyz/8ARGg1+v1AH//X/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T5X8wX/BFX/k6bxT/wBiZff+nHTq/p9oA+RvD/wQ8b+B/wBo34rftCabPZ61/wAJ1aaNYafpTSva+THp9uscktxcGOTGZA21Ujf5TnOeBjT/AAT+N2q63ea54evPCvwu1HUS32rWLG1n8U6/MhJ+RdQ1NbVY0GTtRoJVQcKAK+0qWgD5t+D37K3wr+DuvXnjqzjvPE/jnVBi98S69cG/1aYEYKrKwCwoRxshRFwACCAMehfGr4bv8YfhL4s+FqazceHz4p06fTzfWyq8kKzrtb5GwHRgSrrlSyFgGUkMPUKSgD4s+E/7P3hr9kfwtD4T+Avw+l8VeIb22jW912/vLa0+0Onyqt3duZJ0jXb8kVvbSIgx8oJJNp/2ZPEvxb8T6d4x/an8RQeKrbR5lutO8J6XE9v4btZ0+7LcLKzTahKv8LzbIxkgQgEivsmloA/Mb4sfsXfFnwH49uvi7+wr4xg+Heqa5Mj654fuVDaJetu5uI4THLHHIATlfLwckxtGchvt/UfhB4P8feH9Jsvjl4f8P/EDVtPiCyXV5o0DQNJ/E8MFy1yYQ3dRI3PfsPWqSgDwOP8AZT/ZdhcSRfB7wajryGXw/pwI/EQV7To2i6N4d06HR/D9hb6ZYWw2xW9rEkMMY9FRAFUfQVp0tAGH4k8MeG/GOi3PhzxdpVprek3i7Z7S+gjubeUA5AeKQMjc88ivEvC/7JH7MXgvXIvEvhf4XeHrDVLdxJDcJp8LPC45DRFlPlsOxXBFfRNJQAtcn4x8BeBviJpP9hfEDw9p3iXTQ28W2pWkV5CHAwGEcysoYAnBxmurpaAPn3w1+yh+zR4P1OPWvDnww8PWV9CS0Uw06B3hOc5iLq3l8/3MV7J4kv8AWdM0ee58O6X/AGxqXCwWxmW3jZ2OAZZWzsjX7zsqu4UHYjthTvUlAHzf4B/Z10DTbfxlrHxUaDxt4p+I4Ka/dXEAFs1mFKRabbQsWMdnAhIRSSzsTI5LHj5P1/8AYi+O/hD4t6F8W/gf8Wo7+TwvY3Om6Tp3jK1k1EWVndZLwC9hdZ5o1ziPzVZ0XA3tX6gUtAH5v6noX/BVqQGPT/EnwrRcYDrDqqv9cPDItfYlrp/xk0D4dWOnW+p6f4q8bOEW6vtRH2Gwjkdf3skcNpCXaONv9XESruDhpl+8PXKSgD57+Fn7P2l+B/F+qfFjxlq83jT4j65CLa61q7jES29orblstPtlLLaWqtzsDM7t80kjnmtL9pj4beIvjD8BPG/wv8Jz21tq3ibTpLK3lu2dLdGlIBMjIrsAFz0Un2r3KloA89+Evgu5+G/wq8GfDu9ulvrjwtounaVJcIpRZnsbaOBpFUkkBimQCeM1kfFvwJ/wn+hrpOpNeX+hKHN7otjKls2rZKhIJ7h3Qi2HzGWNWXzRhWLJujk9ZpKAPl/XdB/aV8TaZH4U8EzeHfhJocUSQR3Vsr63qUMCAKEt7ZorSztyqjapJuFUchegrzNv+CdH7NWoeC7/AMO+J9Ovtf8AEGq3X9oXXiu8u2bxFJfdRcLeqAU29o1Xyu7Ix5r7spaAPzo8Hfsx/ti/Dfxhpek+F/2jbrV/hvG7faINb023vdZhhUHZHFczRyiVicLvZo1UEkRtgKf0UjVkRUZi5UAFjjJ9zjA59gKfSUAcb8RbLUdS+H3ifTtHgNzf3Wl3sVvECAZJngdUQFiANzEDkgV88fsI/Cnxv8Ev2UvAvwy+I9mmn+IdJS/e5t0lSYRfa7+4ukQvGShYJKobaSAcgE9a+uaWgAr5L+I37Pviz40/FW5X4s+Io9T+DEFhD9l8KWqyWv2zUt37yTU5UYNcQxFVkhQOE3kbkBi3S/WlJQB8D+I/2Z/jx4S8V6b4q+CXj3SNXj0GK4h0ez8daa+q3GkRXQVZ4rPVYZEvPKkVFXEvmOFXHmEEiuB+Inww/wCCjHxI8A6z8MNe/wCFQSeHtdtpLS5jhXxBau0MnLBTGTtJ9q/TaloA+E/gD8NP21PDGsaHofxY8VeENH+H/hqxhtbTS/CdtcyzyraqkUFvJNqUTMkIjUhmVjIcAAgkuPafHGpftC+KZ73wz8MdJsfBVtuaE+ItbljvZlUHb51lplqzpLkfMhubiHBxuibkV9B0lAHh3wN+AvhX4GaRqkel3d1rviHxJdfb9c13UnEuoaneEY3yuAAqIMiKJQEjXgDJYn4i+B3wL/b2/Zg8BR/CL4Z3Pw58S+F9Ou7uawudWl1a3vhHcytKRMsEZj+8xOFLYzjJr9TqWgD4p/Z6+Ef7TOhfGPxr8aP2gPE/h+WXxZp1hpyaJ4diuXs4F05naCQT3YSUFfOmyu1gxlJ3AKq19q0tJQB8fftpfBTx18dvh/4S8LeARa/bNL8W6Rq1w13KYY0tLIyGVshWLEbhhQMmvsKkpaACsbX9MvdZ0e50zT9VudDuZ1AS9s1ge4hIIO5BcxTwknGPnjYYJ4zg1s0lAH5uaD+yp+0Vrf7Xvh74zfGf4j23irwb8NkvD4cjFlDaX8z6lbGGZbhLaKKJfLYgl9zb9i4RAxA/SSkpaAOY8a6Jd+JfBuveHLGdba51WwurSKVwSsck8TRq5A5IUtk4r5S+C37E/gT4ZfB7QPhtrur6xq1/pdo8FxeWmtavp8EkkrM7GO0hvRFGoL4AC84yRkmvtSkoA8T+C/wP0X4GfBHRvgh4Q1a9FlolpPbw6g5ia8ElzJJNJMu+NogwklZkVkZRwCGA5+MPGX7KH7T3xd+OGiad8X/ifH4g+Cvg3VLHxBYwvZWdvql/e2oJSC4FnBAgVGLBpOFZWG2Pccp+ndLQAUlLSUALRSUtABXyL+x58GPHPwW8LfEC18fG2F74v8ba34jgjtpDKI7W/MSxLI2AN58ssQMgBgM5yB9dUlAHxn+3b8G/iB8dvgfB8P8A4bWsN1qkuuaVcyefMkEcdtbzb5ZGZ+oTAOFBYjoCeK+zaSloAK8l+LOifFrUfD1/efCDxNBo2uQ2khtbe9sY7y0nuFDMgcl4pE3nCFt5VRg7Tg59apKAPkD9iH4E+Nv2f/gmfDHxKvre+8U65qt7rmpfZOYYri/KlolbChtoQbiAF3EhcqAT9X6ZpGlaNBJbaPZQWMMssk7pBGsStLMxeSQhQAWdiWZupJJJJrQpaAPBf2o/B/ir4g/s7fETwJ4IsxqGveINFu7CzgMiQiSW5QxgF5GVF4YnLECvnj47/AT4oeKf+CekH7O/hmyg1PxtD4f8M6S0KXCRwNPYTWQumWaYouxFikcE4LAYALEA/oDSUAeT+NNF+KsXw8hsPhRq2maZ4n060VYv7UtJLyyuJIosLE/lTQSRqzgfvAWKjnY3SvCf2Ffgv8Svgp8HNSsfi99lj8W+LNf1HxFf29m4kitpdQ8vMQZcqSPLydpZRnAY4zX2dS0AZmrjWG0+VNCaCO9bCo9yrPEmTy7IhVn2jnYGTd03L1rmfhv4A0H4X+DbDwT4bTbZ2RnlLFVUyT3Uz3FxKVQKqmSaR3KqAo3YUAAAdzSUALRSUtAHy38bPgPr/wAT/jN8HPidp2qQWdh8LrrVr+4tXVmmvZbuCKKCOM8Igyjb2Y8AjAPOM3xx8Ofi78Qteg1xPDPg3SL+0AFnqWsT3viWSx6/vLbTmhsreCbB5eOfLcBiwGK+tqSgD470D9jnwpqXi+y+JXx88Q3/AMXvFumtvs5NYWOHSbBuxs9KgAtozwPmk818gNu3AGvsCZ/LhdwGOxScIMscDsPX0qSloA+ULTVfGHhGa9l+FvwX1TU9Y1LButY13VNOsvtbL90z3P2i7vSq5+VPswSNfljVRhR4P8Tv2KPiD+1fqFtrX7UXi2y0WLTbe4g07TPBluI2gFyuH+0apfRvPcIeN0QiiiYgHbX6T0lAH5nL8Lv+CinwQ8P23hv4O+NfBnxE0DSIkgsbTXNKbSLuK2iXbHCgsGjgYKoA3M6k4z7V9zfCJ/i3P4E028+N39kxeLLqNZbq20aCWG1tGdQTBumuLkyshyDIGVW7LgZPpdLQAUlLSUALRSUtABXxP8I/gl8RfC/7ZXxy+OHiCG3g8MeNbbRLTStsweeb7BZwxSO0a52KGVl+YhieQNuCftikoAWikpaAPyA+Mn/KZH4E/wDYmXn/AKI16v1+r8gfjJ/ymS+BP/YmXn/ojXq/X6gDx/Vf2efgDrutnxLrnwz8MahrBcSG9uNGspbkuDuDea8RfOec5znmvWLKys9OtIbDT4I7W2t0EcUUShI0RRgKqrgAAdAOKsUtAHKa34G8G+Jde0LxR4g0W01DV/DEk02l3c8SvNZyXCeXK0LkZQuvBx1wO4GOqpaSgBa8e+N/gfX/AIo+B7n4Y6XcDT9M8Uf6FrN6GxJFpLj/AEuKBepmuY8wKxwsYdpCSUVH9gpaAPmf4i/s3WnjT4g/DTx94f8AEdz4Rk+Fmn61ZaVDY20Eu19WtYbRX/0hZI9sEUZxGY23EjlduGn/AGVPgdrH7P3wjh8D+JtcXxJr95f3+q6nfxxeTFNeahM00hjTsoyB2yQTgA4H0jSUAfIv7Lnwj8efDPxT8bNe8bQQ20HjnxtqGsaYkcyyu1g4WOKSTbkIXCghc7gPvAHivWf2gPhP4e+OPwc8UfC3xUl/LpmuWyiRNLlhhvXa3kS4jWB7j9yHMkageYQh6MQCTXsNLQB8YXXwe+MXjvwRpHwgm1UfDf4badp1vpc6WlyL7xPqNlbxLAIZbtUS1svMRcStALhm/hdMnH1J4U8D+EfA/g/T/AHhTSYNO8O6XbC0t7KNMwrABjYQ2d27J3FsliSWJJJPV0lAH5jQfsHfEz4UfFK2139lL4uXvw48A6pd/aNX8Oyxrf28HUu1hFcrLDmQ4XbIoKDkOwCxj9MbKGa2s4Le4uHu5Yo1R5nCq8rKAC7BAqgseSFUD0AHFWKWgD4e/ae+AvxL+MHxz+A/inwXff2Lo3gO91m91XUo3t/tFsZ4rdLcQQ3EUySO5Vx80TKoGWxkZ92/4Vd4+/6LB4m/8A/D/wD8qa9rpKAPi/4Ffs7eP/hn+0n8Zfi/4q8RjxBpfj2LQ4LGafyl1CT+zbNYpHuUtre3t0CtlIxGuWVdzc8t9o0lLQB8p/tq/BDxh+0Z+zt4h+D/AIHu7Ox1TXJ9PImv3kSBIra8huJCTEkjZ2x8ALyeOOtfSugafLpGhadpM0glksraGBnAwGMaBSQPQkVr0lAC15l41+C3wg+JF9Dqnj/wTo3iK+tgoiub+wguJ0C8gLLIhcDk8A4OSDXplLQBh+HPDPhvwfo9v4e8JaVaaJpVoCIbSxgjtreME5OyKIKi5JJOB1rivE3wR+DnjTxVZ+OfF/gfRda8Q6eFEGoXmn2891GIzlMSuhb5DyvPynkYr1GkoA4pvCui+FofEHiDwP4c0+LxDqaTXMjRxR2z393tJT7ROqhm3MApdicD6V+PHw58cfsneJ9PmtP21fhZc2nxov768uNbN74Tvbh553lPlLaSWMExaBIBGkfPONxLsxkf9vKWgD4r/Zs+Cnw88FeN9Z+Inwh8DXnw48L6vp0dk9ldrNaSancJN5iXZ0+Zme2EKbkQyCOR/MfdGqojP9p0tJQAtFJS0AFJS0lAC0UlLQAUlLSUALRSUtABSUtJQAtFJS0AFJS0lAC0UlLQAUlLSUALRSUtABSUtJQB+QXwb/5TI/Hb/sTLP/0RoNfr9X5AfBv/AJTI/Hb/ALEyz/8ARGg1+v3+etAH/9D9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PtfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gAoopKAFoorF8RaTd65ol5pFjqt1oc90hRb2yEJuYCf4o/tEU0W7t80bdeBnBABtUV+b3/AATG+JHjf4g/s56x4r+KPiW68Q6qnifUoHvdQnLsI447cKiljhEBJwi4UEnA5r9HyyqNzEAe9ADqKZ5ibd+4bfXPFKrKwypBHtQA6ioGurZbhbNpkE7qXWMsA5UdSF6kD1qagBaKKKACiikoAWuC8M/FDwB4x8Sa/wCDfDmtwXev+FphBqen/NHd2rMMozwyBX8twcpIAUccqxFfIH7M/wAbP2i/jPoHjS9Fv4cuY/Cni3WfD0c909zbTyxWEimNnSCN48hJAu5ducZK55Oro/wo8dP+0Vr/AMe9Hi8Mv43j0aDw1qMCaheCBIS6XqPJELUN5zp5QDliuxQAoIY0Afc9ZWt65ovhrSbrXvEV/BpemWKGS4urqVYYIUHV5JHIVVHckgCvlL4l6X+134vOmaF8P/FvhHwbqem3VtqV2qi5vprq0RztgeN0QpBMylXZfmYKVVl+bP1hc6fb6vpMula9bQ3UF7A0N1Ay+ZDIki7ZEKsPmRgSCCOR1FAFq1ura+toryymS4t51WSOSNg6OjDKsrDggjkEda848ZfGT4b/AA98W+G/BfjfWY9E1Lxe0kWlG6V47e6niKgwLcEeUsx3rsjZgz5+QMcivlX9mD4LfED9nf4Uaz4O+EviXRviHYv4r1KSyhv9RnhtNL0wN5X2RJoIbtvtEMkZMsexU8xnGVYEv4p8X9c8QftYfF4fsseIvAumapcfDq707xJeapp2sXY06zvYw5jsLm5OmMUeaJjuRV+YEgMrocAH6yUV8Ja5rX7VnxU8V6PefCDxd4F0ux8DaxLD4i062v7rUnu5ogY5LG6f7HG1vtUt8oXdv2vn5QD92DPegChquq6boel3mt6xcx2dhp8MlxcTysFjihiUu7ux4CqoJJ7AVkeD/GnhD4g+H7XxZ4G1m01/Rr0bobuymSeF8dQHQkZHQjqDwQDX5/8A7YnizxX8fvEsX7D3wSn26hriRXHjbWU+eHQtELBvJcrx9ousYWIkFk4I2yF0t6beeGv+CeOrad4Pu7WaD4D+JXt4rbVDmY+H9a8tYZRftjd9mvyiyibpHOZAQqMu0A/Ryis3SNY0nxBpltrWg3sGpadeoJYLm2kWaGWNujJIhKsp7EEiue8cePNC+Hmkw614hh1Ca1mnS3A03TL3VphJICVzBYQzzBeMbtm0EgEgkUAanivxRoXgjwvrHjPxRdCy0bQLO4v724KNIIba1jaWWTagZ22opOFBJxwCazfAnxB8EfFDwza+Mvh5rlp4h0S9z5V3ZSrNEWU4ZSVPysp4ZThlPBANfHv7VP7QfgW+/Zm+K2m2um+KIZr/AML6xaRvdeEfENnAHubOSJTJPcafHDEuWGXkdVHUkCsP9jb4s+Afh/8AssfC/wALS6P4oWa30K0ml+y+DvENxA0t0n2iRo5oNOeKVWaQkSIzK+dwYg5oA/Q+kr5R+CP7Xvw++OvxT8dfCbw5pOs6bqvgiRN76jp1xaJcQsFBcrNGj27iQlRFOqSMoDqD84TD/bF+E3xj8caF4W8Z/s36gNF+JXhbVYGguWmEMU2mXB2XdvchjslgzsmaNw2fL+QbjggH12dV0sC9JvIcaacXX7xf3B2CXEvPyfu2D/Nj5SD0INcX44+LPw4+G2kab4i8d6/baLo+rTxW1vfzkiz8yZS0fmXABiiVwPleRlUnAByQD+TXxWg+HTfG79tI+OdPmvtR/wCEX0H+zZIbK8uUiuDoFzuZmtkdIQWEZzMwGBnOAxHW+FNGXVfgp8Cv2cPHOpwQeBvi54Ms/stpNpKyJBf6Zp1vf3cVzMLiGRTI2+4ilUAqylSR8rEA/XpHSRFkjYMrAEEHIIPQinV8SfsX638TviF4c1T4t+L9UvU8Oa+/2fQdKuLa3gtV06yYxWt9ZrFiWJLqP5mjlyScMrFNpbvv2n/2hLX4H+FbHSvD4t9R+IfjKYaZ4Y0ueVYluL2UhRNMzFQltBuDyuSBjCZDMKAPWdB+LXw08UeOde+GegeJLK+8V+GAh1LTI5Qbq3WRUcMYzyVxIoZlyFYhWIbivRK/LX4ffBLSv2Qfhl4p+JmtfGWd/EerltW8SXtpZaZeXOo6lMR+4tjcQSTuJJm2Qx7hud87VLED0b9m/WPi38NPCXiX4xftdfFqx+ya4BfnRbo2qx6BH8qxJ9qhKIXKbVkijiCeZypLsxYA/QSiqtlfWep2cGo6bcR3VpdRrLDNEweOSNxuV0dchlYEEEHBHNfP/jfRv2h9H07xD4g8JeLrHVvs/nXOn6T/AGIouXiX5lthcG8VHlxlUYpGrNgNtGWAB0/jb49fC74cfEHwx8M/HWr/ANi6z4z3Lo7XEMi2t5MrrGbdLgKYlmy6YR2UneoXJIFex1+b/hDQdM/bf8JeC/i3YePdM1638HawuoWMdz4dkt7nTdXtVGYbmJdR+/GWRyhLIxCONy7Sa/wp8f8Axl/a68M/Efw74f8AG114U0XStRvdBh8Q2uhQxpfpE7RNPp05vmZW2rknyv3e9drl/ugH6UUVwHwu8J+IvAngHRfB/inxLN4w1HSIBbvqtzEsNxdIhIjaYKzAyBMKz5y5G5vmJNfnX8dPjFrVx/wUG8AeAdO8a3/hbwn4C0KXVPEQshJJFdS30mYrKeJUkRvMWOBssmVRnKFW+YAH6TXXj3wTZeL7f4f32vWNt4lvLYXcGmy3EaXc1uWZPMiiYh3UMjAlQcY5xxXW1+P/AMR/iz8JdY/4KP8Awr8YT38d1pWl+EdRQzSWc7eTc+bMYyqNFv3DdwyjjPUV9hfEb9tT4S+AjoQsLXWPFP8Aa9/HaT/2Vpd3N9ht2+/dz5iH7uPjKrl2z8qnBoA+vq4DVvin8PNB8d6V8Mtc1+10/wAT67A1zp9jcP5Ul5GjFW8gsAsjqQcorFwOSuMGt3xFZ6xrfh25tfC2sf2LqFzGDbXwgS5ETZDBjFJhXUjgjIODwQcEflv491Ow8a6t4/8AH3jjxQbnxv8Aspve38K3OkW6Rhrq1a4tZoJEfY4ukhTCOpaKUcAkI7AH61VVu76ysESW+uI7dJJEiVpHCBpJGCogJIyzMQFHUk4Ffj/8Y9a/aA8A/sWN8W9b8Y+IdM8YeJfEeiatFbX5tlu9DN5dIj2sbW6hDAyFSIJEwoJR0BLrX1741/Yr+C/ju9TxZ8dNc8Q+OpNKJuYptZ1ye0trJk+YzRQ6cbK3gK4yWRFxjJ6UAfZteXW3xp+Fl38Urz4KQeJLX/hOLC3S6l0piyXHkOgkDpuAVxsIY7CSo64rkP2jvjCP2a/gPrvxZi0t/EEXhVLHdaSXDJLPFNdQWrkzushLhJC25gdzDnqTXw1rPjjxx+ztafG39sPWvg3qk/iPxX9knguru/0c2lnpVtBb2lnA5t76W4wXHmzCKI7yVU427wAfpF8Svix8Ofg9olr4l+J+v23hvSry7isY7q7JSH7RMGZEZwCEBCMdzYUAckV3Fhf2Oq2NvqemXEd3Z3caTQzQuJIpYpAGR0dSQyspBBBII5Ffk3+1UPE/7U3jH9nj4T2/hEySyJ/wn/ibw7d3kSi3srURwwQz3CCSMrPJLNCGAyRnhTkD2X44ftNftAfCXxl8JPCWm/DXSLeDx1r6aO8c2rmYtGyABImigQQbdwbeyyDC7Qh3ZAB+hVFcT421zxloVrZzeDfDI8TyzTeXPF9tisjDGVJEuZVKuAQFIB3cggEZxxX/AAm/xl/6Jmn/AIO7b/43QBs23xr+E91478QfDFfFFlF4p8LRQz6lYTyeRLBDcJE8cv7wKHjImjG9CyhmCkhuK9QVldQ6EMrDII5BBr8nPC3/AAmF/wDtu/G/SNf+G9vqreM/CWhteaVcalAYmskV7RizshSRZMbSuOK9L/Zw+Fv7Sv7Pl/4V+F/hrQbW4+FFrNqD6g+rawLrVYTeS7rcWgjj8tYbRFVfLz+9LSN8pKgAH6NV5z8T/i18O/gx4bj8X/E/WotA0WS5is/tUyyNEs0+fLDmNW2g4PzNhR3Ire8YweNLjQpo/h/e6fYa1vjMcup2st3ahNw8wNFBPbuSVztIkGDjIIr8xf8AgovpPxph/Z9spfF3iXw9qFkPEuh7Y7LQ7u0lEpuQEbzJdUuF2gn5l2ZYcBl60Afq1aXdtf2sN9ZSrPb3CLJHIhyro4yrA9wQcg1LHJHKiyxMHRwCrKcgg8ggjtX5NfF/xR+1H4k+LmvfsxfD/wCJWn+Itf8AGthbjVDpuiPp1r4H0sYWa6+0m9uZGubyNmCQuS+WV0eIBN33n8DvAvw3+BHhbSP2evB+uyXt34fsFuha398bnUDbSSFPtHlu2Y4TICqiNViU8KB3APdaK+P/ANqnRPhx8Ovhx41/aE1Twude1bRLKK4mg/tC7s0uUgdE2nyZNiPsOA/lk8DOQMV8rfG+Gyk/Zd8XfELwv8HvEfhqabwzPqVnqv8Abtq62ZktvNjnwmqNMQmQ3ERf/YzxQB+tNcd4d+IPgjxdrfiDw34Z1u01PVPCtwlpqttBKry2c8iCRUlUdCVP0yGX7ysB+YCalaeBv2UtO+LWp/BPXNaudK8KWWqXF/d+ILeK3umFpHJJcP5epSXAV8l8CAuc42g9Psf9mX4W/BWy8LaL8c/h18P4PBGsePNJt725VZfNuGivlS5CzSK7LISSH3H5u5CnIAB9U0V8HftpxeBvhnpNj+0R4r+GOheP9H0WSCx8Ri8sUn1OLTJ5QkVxaSSbkb7PLId0Tp86uSJIwpz4NoHwk+Cetf8ABRObwtZeC9Gl8IXXwph1iDTjp0As/tMurxotz9mZAgmMTbd5UNtO3PagD9aq5Pwd478GfEPTJ9a8Da1aa7Y2t1cWUs1nKsyJc2rmOWIlScMrD8QQwypBP4g/CLS/AOg/sm+NNY034eaP4y+JuueNtd8O+E7a6022vZ5Lx5QsCqJkYCC0jDzsGIjVEOSAa/Xz4A/DCz+F/wAOdN06Xwn4c8J+Ir2GKbWoPDFmlnp0t8F2s6BUVmGOAWBI6DigD26qOpappujWUmo6vdw2NpCMvNPIsUaj1ZmIA/E18QfFK511ryz1P4qaDB4aOuXg0+1X/hZus6NaXNwI2ZIkjtIoIN0kcTMF2hmwcgsTX52/tLfDn4f2Xxi+BKf8IN4dlTVfEckV7FP4ruNciv4giERXkt5C/lRZJO4h855FAH7D+H/2n/2evFvxDg+FPhT4g6PrXiq6illisrG6W53iAbpFEsW6Leq5Yx79+Ax24ViPeK/OrTNX+F3wz8R+HtI8MfCz4WeHfEerzvHoyWut2dtcTXUa5xE8Wlbg/wAwGQckkAZJAP1L8BX/AGgf+ESuof2jYdDXxEl5O0EugzSyW0lpI2+NWSaKMo8WfL4LblUMTuJyAb/xE+NPws+E2oeH9L+JHiS18PT+Krh7XTftRZUuJ025TzACiH51++VBJAHNd3r2uaV4Y0PUfEuvXK2mmaTbTXd1OwJWKCBDJI5CgnCqpJwCa/LHwD8QPFf7W/i/4XftO6h8GtW1HRPAlrrMen2tpqOjyQnXJriO3kuR9svLWQpAls3l7ogwkYMPuBmzPiL+1T41/aA/YZ8bajB4Pfwz4j8ca3J4F0CzF1HcDUpL+7Fqyxsh3K6Qecsu5QpMbMp2nCgH6f8Aw9+JXgD4s+GYPGXw21+z8R6LcMUW5s5VlQOoBaNwOUdQRuRgGGRkV3FfmhqXiH4wfsX/ALHc9j4N+Guk2qfD/RE/0qbVxNFJcjaJrqWCKCNpGklZpWUOuScbgOaP2rviZ8Xb/wD4J+t8etI1q8+HPiwaVpmpyW2jXEUsTf2hcW8ZRp5IPOUeVKWXynjZXOGZwvIB+l9FeT/BDV59R+DPw7vdXvWutR1Hw9pc0kk8heaeV7ON5HZmJZ2JJZicknk16qzon3mC59TigB9FMaSNfvMBn1NO7cUALRUEN1bXDyx28ySNC22QKwJRuuGx0PsamoAWiiigAoopKAPyC+Mn/KZH4E/9iZef+iNer9fq/ID4yf8AKZL4E/8AYmXn/ojXq/Uj4jeI9a8J+CtT1vw1ph1rWY0SGws8lUnvLmRYLdJHUMUiMrr5kmMIm5zwDQB29Ffk/wDHX9nj9sfwt4C1r44eG/2i9YvPGvh20l1WfSIraO10KZLZPNlt7e1BZBtVSEMqyGTAD4LFh9n/ALInxq1L9ob9nPwV8XdatUs9T1u2lS8jjBEZubO4ktZnjB6I7xF1GTtB25OM0AfSNFFFABRRWPqviHQNCaFdb1K2083G7yxcTJEX2Y3bd5GcZGcdMigDnfAPxN+H3xS0ubWfh54gs9ftLWZ7edrWUO0E6HDRTJ9+Nxj7rgHHOMUnj74n/D34V2Gn6t8SPEFn4bsNUvE0+3ub+VYIGupEeRIzK+EQlY3ILEDjGckA/m7/AME9Pir8KPAvwz1Pwvr2v2Nhrvivx14lTT7QMGur5oGEmESMM7nYMJx8xKouWZVOH+398WPh98UPCHwY8P6Xb6xcWt58SvD0k63Xh3V7ZZbUJcpIsYuLNPOc7wBDHukbnahwaAP13R0kRZI2DqwBBByCD0INOr5l8IftY/Crxt8bLj4C6TDrNt4ki0xNUQ3+kXmnxSwksHUC6ijkUoFB3SRqjbgEZmBUXv2vpZrf9lf4uXNtI0M0HhbV5I3Riro8drIyspHIIIBBFAH0ZXH+PfH/AIN+F/hW78cfEDVodD0HT2gS4vLgkQxG5mS3i3kA7Q0kirk8DOSQMkflf8VtD8Xw/wDBM5filL8RvFNzrGoeB9GvbgS6irRySX8NsZ1ZvKExVvMYHMmSDgk855/9sT4l+GIv+CcWs/DGTVtd13xFa6Z4bguLzU9N1AmWYXtjcM0t+9qls+VztfzPnGMMzHJAP2Q0nVtK1/S7TW9CvIdR06/iSe2ubaRZoZoZAGSSORCVZWBBDAkEcipZr6ytri3s7i4jinuywhjdwrylF3MEU8thRk46DmvjiL9rX4S/Du/+FfwnbTdea78WvFo1mRoOoWsUD28CAFhcwRMyZKqfKV9gJdtqAmvPf2/dIsda1z9nLTtRQyW138TtHtpUDMhaKaKZXXchDDI44INAH6CnVNMXU10VryEag8TXC2xkXzjCrBWkEedxQMQC2MZIGc1xN18XPhlYfEa3+EV/4lsbTxnd2qXtvpU0wiup7dzIA8Kvjzf9U5ITcQFJIA5r4L+C37Pvhbx5+134t/aHtbSex8L/AA6c+FvDMaXVxi7v7TcNUu3ZpCzxxTySWyqSY3KvlcoK5zxNLBF/wVh8O6rJtPl+G7XSNx/ha7tdXuwPYt9mwPrjvQB+rlFFeW+Ldb+Mljros/A/hHRdY0nyVf7XqGvT6dL5xJDR+RFpt3wBghvM5zjAxyAVPix8d/hP8Dk0Of4reIIvDtv4iuzY2c06SNE9wEL7XdFYRjA+++F6AnJFetqyuoZTkHkEelfkP+0Xf/GH4l/tj/s+fDjUvCOgpqnhU6n4sNlFr9zPbSxwqi28lxO2lRtBtmhYJthl3scHZjNfoP8A8JF+0j/0IPhb/wAKu9/+UVAHudcl468deEvhp4S1Px3461KPSNB0eLzru7lDFIkLBQSEDMcsQAACSTgCvEfBJ/a5m+M17qvxBtfCdl8MrqxSGDTtP1C7u9StLuIFvtHnS2FuswmY7HQ7AihCvzK/mfMn7cnjP4bfE/xv4P8A2O/FnjGDwrputMPEHia6aWNGXTbAlrWzTzVeMzXNxtkAcHakRYg5UEA/Rrw14l8PeMtAsPFPhTUYNX0fVIlntbu1kWWGaJ+jI65BH/6q3K/I/wCF/wAddDu/j+kOp/HV9T+GuqSDwV4b0RIrQvq100ZEl2G0m3tks4I5l8i2lA3vtyHWNlJ6aHS/BugfGr4i+IfEPjHxvB8H/hzpdjos7x+JvFN7CdfdpLy9uXmtrqWVVtbbyopmZlhjZsMA3QA/UkMCSAQSpwfalr81f+CdVjpfiFfjJ8Z/Dd5qtz4Z8Y+MLuPQ21G8vbkXOm2EccUd2BeyPIzysWVpJMyERhGPygDv/jD4k+MfwM+P2h/EHR7q71f4N69Yalc+Lre6LTwaG+l2pmS7tZG+aD7QoCCAExySA4UO4YAH1/458ceFvhr4S1Px142vhpmhaNF595csjyCKIEAsVjVnIGecA1c8K+K/Dfjnw5p/i7wfqUGr6NqsSz2t3bOJIpo26MrD8j6Hg81+df7Wnxc8c67+xp8RLLxj8Mte0PULjQWjvbhvsH9nwTShCxRvtpneJWbaGEO490U5ULqH7V+sfs2/sm/D/wARv8J9eu4bDTPDumRGaXT4LWXzYoYso0N1PMCyA+UDByxUNtGSAD9M6K8u+Iy65r/wm1i60bU9R8HanLpktzHNAtsb20kEJkCMJUuIdyn5X2577W6NXyx/wTd+IPirx9+yL4Y8afEbX7nW9Z1C+1QTXuoTtLLIRfSoi73J4AAVVHAAAAAAFAH3xRTWZVGWIA96QyIFDFhg988UAPopAwYZU5FQfarb7T9jEyeeF3+XuG/bnG7b1xnvQBYooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKAPyA+Df/ACmS+O3/AGJln/6I0Gv1/wCa/ID4N/8AKZH47f8AYmWf/ojQa/X6gD//0f38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+V/MF/wRV/5Om8U/8AYmX3/px06v6faAFopKWgApKWkoA/Cr/gnr+yf8Hv2hP2bNUu/jLaXviO0h8S6tFZWJv7m1s7NtsIaaOK2kiDTv3kk3EKAq4Gc99+yFp+r+GdU/aP/Ym+Ik7eMfCPw9XztFGpqLny7G7jkdIn3gqBs8mRVAAV/MKgZ49j/Y78F/G/9kz4e618IPFnwy1PxVI+t3+o2GqaFfaU9jcw3Aj2iT7beWk0DDbk7oyCOhLfLXvnwD/Z71XwfdfEv4k/EiSA+Ofi/efadTjs3MsGn2cUTQ2djFIwXzTBG53y7F3semFBIB8vf8E3/DPh3xf/AME87DQfFWmW2r6dcS655lvdxJNE3+kS4JRwRkdj1Haq3/BMy+8R6Z/wT3utR8H263WvWkniCXT4WGVlu49zQIR3DSBQaj/ZC8B/tefAP4fXn7LepfDeyl0+0vr77J4xl1WD+zVs7xixl+xR5uppAxZki/dbshXeIDefSv2DPhj8bP2bf2WdR8H/ABZ0nSfD17pB1DUrOSfUlkRfNUy4vjEhihjjYfM6TP8ALnIGOQD5V8BeCvhh8bf+CZniv4m+KVtr34l6dZa9qmqeIbsD+2YNd06aaeISXeBPGTGsUaoGA8plQLg4r9Cf2GvBV74W/Zu8E6t4gg1C38SeINKs7rUxqF/e3kjS+X8j7LyWXyC6EM0cYRQxxtGOPz6+Gni3456Lpdt4w8Yfsap478QeIJE1a98SQanZsdUnkbzYrsWr20nlYG0wqSDGMYCnNfqt8CvjOnxp8L3uq3vhnVPBeuaLeHT9U0bWIhFd2lyIo516cSRSRyo8cgwGB6AgigD22kr5B+JXiP8AaU8JftJ/D5tAudI1P4UeKLj+ybzSxEy6tBcfZri4e98wjBijEQzh8Y+Uplg4+vqAFopK5D4g+N9D+GvgfXviB4lk8rTPD1lPfXBH3ikCF9qju7Y2qByWIA5NAH49/CP4k+K/gT+zR8S/j74cZrnT/DXxe1q+1awGCNQ0e7uYLC4iXPAkRpFmjfIw0eDlSyn6Q8cfE5vCn7cfwQ8T+DJDe+Gfjn4au9NujFkx3Caepv7C7C93jFzt3HkROwPQVqfBD4AeHNV/YlHwJ+K2pxabqfja3vb3Xjb3EIube+1S5a7Zfn3KJbfckZBUgMmOeteo/GCT4dfCT4UaPq/gXTtN1Txj4L09PDngfzWhlntrzUki063SNzyiHEZnYYHlIxbCg0AeDfArwqnx2/bh+Kv7TeovNJonw5dfBHhsrK6RvPaIf7SkO0gSIksjhAdyHzScbkBH3d44+EXgL4j6hp+qeLrK4uLnTEkjgaC+u7MbJcFg6200SycqNu8Nt524yc+D+GvEPwM/Yg/Z30DSPGXiu2g0vRRDb3V8X86e+1K+kL3E/lpukdpZnklYAEqgJPyrX1LN4n8O2/hp/Gc2p2y6DFaG/a/81fswtBH5pn83O3y/L+fdnG3nOKAPyj/Yb8B+M7H9iXxfe/s+XFjoHxE8Qa7q3k6hqW+e2MtremFWlVvMA226lVIQgNhmVuQeVvr39qP9kjwloXwJ8C6v4N8R/FL4hXM80Flp+kajdape3NySbzWdR1C51FEQJyxmktyhKhVjEaNs89/YUsPj78YfhDHbeEbCztPh94e8QahcWA1CSSO31fU7m5kulu71EAlls9OyhW1jKie5Kh5FSN/L+o/Eet6R+z14j1bwj8Ikn+NP7U3jiJVvb+5RWazicjbNfNH+503ToPlaO1Vl3YQEn/WAA0f2d9U+Cf7JnxG8O/sdaLa3vin4l+JLJ9X8Ua9ZWpum+3SHer6hKuZY4m3t5e7iJSjPzMXP2T8R7j4seI5pvA/wuVPDplQLd+Jb6MSpZrIOlha5BubkA5DSFYIyQSZWVoq/P39ne5tP2NfjK3ww/aMtzfePPjVdi7g8fJIZbTWb5ioOmurIr2pglkCRKMpJvVv3e5UX9aqAPiDwJ8GPiv8As4/DTW4vB3iXwvILVb3Vby4uvD1/cahqtyqtK1xfXba0rSXEuPnfZtXoihQFHkHgiX9oH9vL9kzRfFep+N/DvgLTfGTTveWdt4al1Em30+9mga3kku9U8t4pjAGkHkqdpKZxkn6g+I3wi1WDwL4vvP8AhY/il42sdRnWB7iyaJFaJ2EI/wBE3mNR8o3MX29WJ5r4p/YX+AOl/GP9gTwZ4e8VeLvEVtoOvwarBdabYXkNtbmIardBowywGYK+3LjzCGywPynbQB6r8Fv+Ce6/Aj4sweLvAPxS8Q6Z4HVDcTeFLa4lisXvyVJJLSyBrb72I3VpQMAzvyT+j9eeeDv+EU8EQ6P8H7XxC2o6tpemLLDBf3az6pLYQMIRPLnEjqGIQyEcnqS2TXdXl5aafaTahfzpbW1sjSyyysEjjjQbmZ2bAVQBkknAHNAHwz/wUp8TSaB+x5400yyBk1PxS9holjCv3pp767iVo1HcmISED2r7C8BeGIvBPgXw74MgIMegabaWCkdCtrCsQx+C18JRafqP7aXx28LePI7aSL4HfCi8OoaVPOjIvijX1XbFdwIwG6yszny5cYkfcF3ox2/WXjj9ov4E/DO8uNO+InjvSPDV5bKWa31C7S2mcKASYo5Cry8Ef6sNQB8f/sLqL344ftW+IF+ZZvHkllu97ESoR+G6tv8AbA+JH7Tnwe0Xwzq3hDxd4dgt/FHjXSNDtYxoM/2iG2vpXZRcTy6jLHKNseyXy4ImYElGjOMYP/BL6O71z4PePfixeQPGvxI8da7rls8gKmS2laOMMM9R5qSj65qp+374n0rx9F4J+E3gCe58QeMPC3i3RvEurWGiW8moXmmaTYGTzrqZIY5RGy+Ypjjcb5CRsR+aAPJPh58V/ihYftWftBv4KtdFnsfE2mXXiSC91GK4k+0W3hST+wTGixSICjTxS7TyMKTkhhjG+O3xS8c69+xRYftB6l8Rli8Y67pulE6Jb2ujta2EWu+VZ3YtfOs5NRhaW1mYswusgsdpCYUd5pnhZfiJ8d7nXP2Y/EWgDwJY/Cc+EYLu5K3+6+k1CWVrR4EvLW5hudgV5JZlbaSd6FnrE/ai/Z7vPBX/AAT88NeAF8NWfiL4h6ZD4a0ma50yzFzdSG2uYt6xyiPzmiUKVycDB5ABxQB9ifDbQfhrD8dvsmhfGnWPFHinwxoMcEnh1rvTF06LS53IiY2dhY28W5HVTvQiRB5YciN1VvlH9t/wB4G8I/EX9n/xb40Qa/qOr+PLMaxf3tv9qeezijY/Zo4FVwlrHuOy3jUgklm3ys7t+jnh8/A/R/E8Wl+FD4dsfEVwjrHBZfY4r10Ub3CpHiQgKuWAGMDJ6Va+JqfCbRtPs/iV8Wl0y2s/BUj31tqOpiMJYSsuwyxPJ92Qg7V2/MSQF5xQB+S/7aGu/sw694l+CvgXw3o+maLp03iuLWvEFzHoMliyaLo8TS3QkJto2aFkcl8BlG0FsAVsft4+KP2VvEX7Gnja++FGjaX/AGlex6VJp97Y6DJbBkbUrVmaK7+yxoFaPcMhwGBwM5wei8RaN4i+Ovgn4/ftk+LNNm0nQZvh54h8PeBrC7RkuRpIs7iWfUpYmA8t7x/9WMbvK4JKlS32f+xxaaVrf7H3witr2GG/tf8AhG9JJSRVlj8yCNGUkMCN0ciAjurLnqKAPoHwLpek6J4L0LSdCsYtM0+0sbeOC2gjWGKGNYxtRI1ACgegAxXwx4b8b/HLxN+218Z/hT4Z8aQaZ4c0HTdC1C2tb/Tv7SjhlurSJZRBtuLd4wxG5l3spYlgoYsT9O/CD4w6X8T/ABZ8UtA0+/guv+EF8RjR1jiK74410+0kcuByc3TXKAnuhX+E188/szaRN4n/AGq/2kvjZAudFv8AUtI8NWEuPlll0GzEN+VboyrOQmRxuVhnKmgDqvB37L3jn4ceFvFnhP4ceNtJ8MW/jK8v9RvprLw/N563uopslnhaXU5BGygL5ahdibRhcZB0fCf7PXxZ8AfCWy+DngD4kad4c0bTdPOn2k9n4dIu4AykNOkj6g6mdmJkLshy5LEZr7ApKAPnv4U+Fb/9mz4JNo3xL8eXPjKy8Jwzzf2tfQeXdLYxLuWFwryNMyYKoclmBVMEgZ8B+AfiP4Z/CHU/GXjL46+LNG8MfFj4m3y67q+nX99BBdafp7L5el2BDspZba2AVmGR5pkAYgCvve+jsJoAmpLE8IdGxKFK70YMhw3G5WAK9wQCOal8+3znzFz9RQB+Sfj343/Bu6/4KO/DHxjbeN9Gl0Ky8GapbT3630BtopnlmKxvKH2qzAjAJya+wIf21fgJf/Gjw/8ABLQ9cGsah4ht3kh1GyAn0xLjIEVq9yhKedKAxUDIBCqSGdQfDfiJLEf+CoHwncOuB4G1bnIx/rZq+9PHPj/wd8NfCOq+O/G+qwaVoeiwNcXVzK3yoi+gGSzMcKqqCzMQqgkgUAZPxXh0xvBF7eaxrWr+H7PT2juZbzQ1le9RY2GQscMU7ujA4cCJsLluMbh+Tnxw13wTF8dfhH4D0fxN4uk8I/Ea+1S68WJPpN9FdahLo9tbz6a6h9PSe4Mcsa7tiyYRVWQBOK/TrxX8cNBtfhfp/wAQfhyn/Ca3PimJB4bs7FgW1S5uELQoGOBHGoBeeR8CGNXZ8bcV+UWl+B/D/h/9pb9mPwVqvxAt/iR4t1jU/H2qeKmtNS+1QW17qmnIZ4YIo5GNrCGWRVGEZmV3wDkKAXP2idB8Ca78C/H2reDl8cQaj4n8b+G9OvT4sW9tvt8sd5EkF5ZR3SR4Vo12KUCsFRQ6LhK9s8ffDHTPHP7aUX7MPjDXvEWr/DTWfh22t3mkXOv6k8c99HqphV3kNx5hUIqjy92zIyVzzSaf8N/iz4l+IXhn9mbxn4pXxvpfw+8ap40uNSkke4urHw7ZJv0TTdRmkUGW8uLlmbaSz+TEXZirKK9C1OZT/wAFVNIh7j4SyfmdakP9KALX/BQPwzpfgz/gn1498JaIZzp+kafpdrb/AGmeW6mEUWoWqoHmmZ5HIAxlmJ9687/bS+IfjzVf2JPG+lal8Ltc0ayl0ezR9QuLzRpIIlE0BDslvqEsxBwAAsZPPIHOPW/+Cm9zHa/sOfE6STo0WmRj6yapaKP515P+2n8ZPD/iD9iTxv4etND8SW9xc6PZxrLd+HdUtbZSs0By9xNbLEqnHBZgDxjqKALPxD8Q+Jf2QfAx/a31CC38Sya5faVZeIbVQfMg8NiNbXTorCVtuyaBis0isNkss8qk4WJ13f2stTsvE/x0/ZFuNNYy22p+J7jUYSVKloo7SOVWKnBHDAkHkV9WeKLb4Sah8DNL0347/wBlweEbuz0xbuPXZI4LMyR+VLCspnKoCJUUhWPJGMdq+Lvix8QvAfxe/bz/AGZ/C/w51/T/ABJb+FIfE+q6g+l3MV3FbLLYqlv5jQsyoS8WACQfmBxgigD7S/alvLjT/wBmX4uX9ncPaXFt4R16WKaJzHJHIlhMyOjLgqysAQQcg9K/M347aLeXH7Dfwt8eT/EDxNNrviQ+CZr+RteumzLfNbSTSBDIQrrId6HHyMARyBX3j+2D8YPgT4F+HN18NPjhq+p6ba/EqyvdJt4tJsri6vLlXjEcyQNHDNEsgWUYEnXPAPNfNWgfDX4ZfFHwf4d8J+Af2Wb2z0XQG097bVfFC2XhiWY6dtMLTSRC41OVX2AyFrf95zuznkA7r4j6xo3wQ/bq8IfELxLdm00DxV8OdZ0ia5nct+88OzLqrySMeS4ty5yeSM+laH/BPHRviBqnwz8RfHL4gatqMkvxa1q98QafpV1Oz22m6fcTO0HkxMSIzMGMhKna0fl8ZBJ+a/2uNN+IP7bvhpvAfwq8Pab4hl+Gl3capqesW1xcDTZ7qKF4m0DTrvbE13PMrsLiRRHGmEQkOePqvwL+2b8JvGXw8+HUfwwkttP1rxHrmmeGv+EdnxHdaS8bBr6Ca3BV0EFrFKsb7dhby/XFAH0/4r+EHgbxprq+JNdiv/t6wLb7rTVdQsY2jViw3RWtxFGzAsfnZS2MDOABX5i/HzV/hL8Q9R8R/s/fB/wXr/i3xToGpQ2esajdSa3rOk+HtyebHfNDDcT/AGifhhbRBR+9RjIUVSG/THxr4H8V+Pb6TSL/AMRS6H4SKqJbbSS1vqN7kfOkt9nfbxHpttwkpxnz1BKV+WfwMPgP4T/tbftMeFdI+Iek/B7SLa68MxWlpL/Z0EVwqWMxby1vepjZsuU5Jky+SQaAO7fSv2XP2VfhFrPjbUvC/wAQtXvbSOO41rV7iDX9PvdWunlCefdXDvbW4YvKdu9gADgZY8/Znws+BnwCuNX0T9obwd4XurPxHqthHNDqGoz3/wDaIt7mEARXC3UzPwhClHBAwMdAa+Ef26vH3hjV/wBlD4gadY/tAaR4wnmt7QLpNtLozS3WL2AlVFt+9+UDedvZeeM1+qnw1Ib4c+FmU5B0qxIP/bBKAPm3/goLOlt+xl8V5H6HSdn4vNGo/U18V/Fq58BW/wCw9rUkcnxCW8PgxI1N0fEQ0rzntFQBzL/ovkbjgA/u8cdK/YfWtI0XXdMn0vxFZW+oadMAZoLqNJYGCEON6SAqdpAIyOCAe1fjx+1zr2q/FDVfEfwd/Zma++IHhPxK1rP4+svD9ul3HpKWVzBJNJp900scBvbuJCklkrMXZPMwjtIXAK/xIt/Btn+wjqNpt+IianB4GijK3K+IV0pZlsUBDCQfZBbhvX93t/2a/TH9mCVJ/wBmr4TTRHKSeEdBYH1BsISK8k8Oftj/ALGvxD0WbwXqnjHR9Kj8r7FeaH4nQaXJGNuxrae31FY1bA+UqNynpk19J+FvH/wz8QiDSfBPiTSNSEcYWGDTry3m2xxjgIkLnCqo7DAFAHw5+1J4l8d3X7W/wM+C+heJLjSPDXxCsfEEGs2iwWt5DcR2duLiMtb30NxAWDJjcY87SRnFexQ/spX0Hxek+OcXxT8RL4vl0QeHmufsujeX/ZwuBdCMQ/2f5YPmgHdjdjjOK898U+G7n4kf8FEvBer6fGZdO+EHhS9ur64AykWoa8ZLa3tSegka3DTY/uYJ6jP39QB8WfDH9jS1+EKOPBHxI163ka61C8WWa00a4ljl1R0ku/LaXT2KCVokLBcD5QOgFerfCH4Hah8KvE3i3xPefELxF4yl8YXCXdzb6zJavbwXCKED2yW9vD5I8sLHsUhNqqNvyg177SEhQWY4A5J6UAfmd/wU2zP4V+B2nQW0F7dXHxR8PeVBdMVgmxHdLslYJIRGxZQxCNwT8p6Hxf8Aax8IeLLH42/s32978PfBumS3fimZIYLG7le3vH8qP93dk6bEVjHYhJec/LX338efhXqXxa1jQLDV/hx4b8d+H/D06ananW9cvNP8vUFDx4a0g068injEbZ/evtJJBj4BP5yftUfCZdF+M/7O2n/8Kb8B6F/avieaH7Jpt2XttSxGh8m9b+xoNsQzkHy5uSfk9QDuvjx4Sv7D9rn9liDxh4I8L+H7efWtaaNdGla6E8kVtAyGZZbG0AMb7WjI3kNk/KQM/r/X5zeLv2bPiN/wkXhLxx8JvhR8LfAviPwnqAulvlu7qffbMAJ4Vjg0i0RXkVQomfzGiBbywrNur7W+GvxX+Hnxe0G58S/DnX7TX9PsruewuJrSTfHHdWrbZUJIU4HVWxh0KuuVZSQD85f+CdXxA8caD+yxoemaJ8Mta8S2kWpa0VvrO80eGGQtqE5IVLu/gmG0nad0Y5HGRg15z+yB8NfGfiv9niw+K+kTW0eo/D2fxZfeGdPu0M8J1+e+uPMlvEU7WVYEFvEUclfPmcYZY2r0H/gm98Z/Dvh39k7w5pt3oviO8k+36xL5un+H9Tv7ciW/mcbZ7a3kjYgHBAbg5BwRivWP+Ca17bx/sopqN6GtbVdc8Qys86mICL7fMxZt4GABkHPQgg8g0AeZfGn9o3Rv2kv+CYXjn4w6ZYSaQ+o6abS7tJDu8i7jvIoJUR8AOhY5RsDKkZAbIHU/tpWhsP8AgmNrdgRtNt4c8Ox49NlzYjH6V5X+3N8QP2ctD/Ye1n4I/s/694cnbXLvTdO0rR9Bvra4cu+pRXM2yGB3bna5diPvNyckZ+2/2sfgn4k+Mf7K3iz4K+BpLdNY1GwtILM3LmOFms7iGYKzANt3LEVBxgEjOBkgA+N9c/4J/fCf4n/svaP41WTU5fimnhSwvtO8Qy6jdGeG7gsklt4UhEnkR24KiNUjiBReVO/5j8vfGX4g3/x//wCCR2lfE74jW8eq+LtC1C208anPGGuWMGoC281ZWG7dLDtEpB+dtxPpX6X6Drn7QcvwK074P6L8LNR8O+MbbQ7fQ21TU7/S20W0lW2W3a8ElrdzXM6JgyJGtsGYgK/l53Vw/wAYf2JppP2BZf2UfhNcJPqmlW1rNay3LCFb2+hu1vLguSSIzcOZNgJ2oWUE7VzQB5//AMFMfDPh3Uv2CJvEeoaZbXGq6TFoP2O7kiRp7fzbi3jcRyEblDIxDAHBB5rpv24fGnxB8C/sG6ZrHgCe5shNBoVtq13ZMyXNvpU0arcNE68oWOyMsMYV25FecfG3wj+2T+03+yJf/B/UPhPb+DdXtYdHhkF3rFrczancWl3biQ2yRMsVvCqq07yTSlsL5UcblhIv0V8dNX+OXgz9kPSNB0nStJXx9fLpOgy6XHf+Yt8sxSC4trKaWKMG4miDAZXESl3DHy91AHyz+298E/hpbaP8BPHf7Ouj2mm6hrPijStItk8PM+nPq2kX0TTkNLZGOV0VYQ3m7tyK7tvUk5/Xjwv4a0nwdoFl4Z0ITiw09PLhFzcz3k23JPzz3LyTOcnq7sfevyl+HvxV+JnwfurSSy/YavvDcOmRNB9q0S/tNSuoIGx5q26rbq7B8ZKLKN7ckk81+qPgnxfo3xA8HaJ458Os7aZ4gsre+tvNXy5BFcRiRQ6HlXAOGU8ggg9KAOopKWkoAWikpaAPyA+Mn/KZH4E/9iZef+iNer9fq/IH4yf8pkvgT/2Jl5/6I16v1P8AH+t+J/Dng3Vtb8F+HZfFuu2sBay0uG4gtGupycIhnuXjijUE5di2QoO1WbCkA8M/aj1/XtY8F3PwI+G+y48dfEi0uNOtw2fL07TZl8m+1S5K8pFbxuQneSZo41BJOPWPhB8MPDPwR+Fvhz4W+FsrpPhiyS2SSTAaQrlpZn7BpZC0jY4yxxxX5r+BPG3/AAUc8HXOra9ffs1afrPiXxBKJdR1ObxTpiSSrGW8i3iQXBEVtbqxWKJSQMs7F5Xkd/vb9n/Ufjt4l8K3/ib9oXQrXwpr2o3LJBoVpPFdw2VlCNqF54nlWWWZi7sQ2AhRdqlWyAe6Wl5aahaw31hOlzbXCB45YmDo6MMhlZcggjkEVYr83LP4A/GH9n/9rHw1rv7O4f8A4Ux46kuf+Eo0BpR/Z+kXKo0hurWJ2HkiZiCqwjG8MjDYyBf0joAWub8ReDfCHjBLaPxbodjraWUhlgW+torkRSEbS8YlVtrYJGRzjiujpaAPxf8A2ZvEPwz+DH7G3xV+NHiDStKi1Lwx4m8TPptzcWkLy/bo5QLCGJmQtuM5RUA4XOeACa96/aGvrz4gfG/9kTwTfIV1G91a58U3cWMeV/Y+nrOS4HC/vJCq+pyBXn37Evw5+EvxR/Zv125+LumWeqaL4Z+IWv63H9vkKWtvPbPkTzDcsbIiOxIlymMkivRPhx4u8JeLfjnrP7Y3xY1qy8I+DpLE+F/AJ1m5SwW6sUl8281L/SCir9rlwLfJDtCMkYKkgHlPiX4vn4R/ts/H34yXWlPrOheAtE8JabrQgb/SLbT9RXzpJ4UPEjROySMhIzGHwcgV9q/tTa3pPib9jX4o+JNBuUvdM1XwVqt3azx/cmgnsHkjkXOOGVgR7Gvj39lXQfCP7T3jD9r7xNeyNqPg34j6zB4bjvbZwBPaadZy2/mW8hDDPlzI6NgjlTgivWf2yviD8JfgF+zFffs8QJe29/4p8K3/AId8K6da2N3eG4aGz+yxRCaON03LuTdvfcQd2D1oA+KPiVpv7Oa/8E1rO60z4fQ23jQ+CdCZtWHg+6gc3hhtfOm/tQ2KxEudx87zsPnIY7hn6g/bWtv7b/YW8EeCEG6bxfeeDtJiQfxvNLA4UevEZrkre1+NHxz/AGHtH/Zm8M/CXXvD1+3hTRtEudX8TG10ixhnsYbdZHWFppL6SMmI7T9mGRg4FdDpb6l8XvFXw+v/AB7c6Xpnwj/Z6khv77WobmSTS9V8Q2cItLUWt1PFAJIbB98ks4QRiRvKBO1mAB6D+1kRL+1j+ybZ/wATa5r8v4Q2MRP86vft0f8AI0fs1f8AZVdC/wDRc9eTeM/il4F/aB/4KF/ATRvhTr9j4t0z4d6Z4j1jU7vS7hLu2hN/ai3jUzRFoywkSLIDcbxnk16R+3q9tL4r/Zp027VZI7v4oaMGRujLslQg+x34oA6/w94rm+Bv7WNh+z3bTG48G/E3TdQ17R7ZjufSNUtpGmv4Ij1FpcKzTIpJ8uXcqAIwC/GPxY16a1+Nnx8/aT0+N7zTfhH4p+H8ZMQJZ4NNR49YRcd40vnB9ACTXtXjf4X/AA+/ZR+J2t/FX4fLqnxG+NHjyNtN8F+G7y8kvDp8MijzinmO0kdlE4Mk00jhY48RKU3Fm+mPgx+zHpXgv9nXU/g54/nXXNU8cRajc+LL5PvX+payrfbZQxAPy7gkbFQdqKSAc0AfU9rdW19bQ3tnKs1vcIskciHcrowyrAjqCOQasV+Uf7Hn7SX/AAp3xNdfsM/tIakul+L/AATOLDw7ql43lW+t6Yzf6EqO/Al8sosSk/Ou1B+8Rgfsz9oHxt4ubTk+D3wdmA+Ivi6IxwXG0vHolg5KT6tckcIsS7hbqxBmn2ooIDlQD8+V1XXfGXxm+M/7bmj+JNR0Dwr4HvbLwVa3Gnw2U8kuh2E0f9t3UZvrW6Ty4pn+0oyINyxyJnJyOy/bsuvibofw/wDBXw0+Gnxf8R6z4t+LeuWOm6TFnR7dDbq6Ty3Yn07Tra4EcZ8rLxzKMPk5XIP0vrPjT9nj9j74TaF8CnzrU8Vh9gsPDFhANR1nWWlVvNP2KPLObl2dpXcLGSzZIyBX5pfDX4e/Hf8AZO8b6L+0z8YvhfqXizwNpen3ljomk2OojVNV8C6ZcXEkyI8LoqzbYXaMur/u4yVdkwFoA/djwlo+o+HvC+k6FrGsT+IL7T7WGCfUbpY0nu5I1CtNIsSogZyMkKAPr1r89fi54NvtD/bp+Ed18MY7Gy13VdI8WajeXGoxzXCTySLaRFpSkiSHbGFjjG/aiKqKAqgV9F/BD9sv9m/9oaeDTfhl4ytrrWZkZxpd0GtL/wCQbnCwTBTJtHLGPeoGTnFeWeM/h94W+NH7b1tF4r0Sy8R+HPhx4KcXkd/bR3VtHqmtXgaCNllVk8wW1u8h4yqsh/ioA/O/4KWfjW6+Df7G9vqd7ZxaDceNdUjszaRyx6hFI02pB3eV3eI4O4piMY+XOcHPb+MPjl8Z9H+DlnD4R8P3vhjwTf8AxMh0zw1faRb2uNT8Oz3VxBILl725lN1PfMWfdNbhJG/eySPv3Dxf4I6N8KdX+FP7IWmeGzpel+P9c8T6v9vnsUthra2Zl1KKOaXCmUonybDICnyjGQK+0f21fht4s8DfCb4VaLJ49u72wtPHPhawtLYadptrBbeXIyxPEsFupHlKvyoSUxwQRQB9x/CHxv421jxFrnhDVPhPe/DzwlokNsNDup5rDZcx7QssRtbOaX7OY2/1YG5WTklT8p+Zf2jfj/4E+IfxE8Gfs/eBr1vGtvBqS654xt/DqjVZ7fTdEmR0tJYrcsxae/MCSxjLLEr71AYZ+oPBvwa8VeGvidefEvWvid4g8SfbrBLCTSbtbKLTFSJi8ciQW9vHslVmYlwcsGIbICgfJ3wxutMl/wCConxhtodLFrdW3gvSUNwIygn3PbyO5bGGLb0TP/TLH8JoAz/+Cg3xptNS/ZA+IOjW3hnxFYXGqw2VpFJe6TPbQ7576BdpkcAAkEgDueK5P9pfU9U+Nf7LPh34c/CTwb4k1m90XVNHif8A4lU0UY/sO48i8Xe4A3xPE6Feu5SMZr1z486hB+0/8ZPB37OngUjU/DngrW7TxH441OE+Za2n9nEyWeklx8jXFzLzJGDujRdxHUCp8Rvi3qX7EnxW1nxJ450+81L4I/EW8/tFtRsrdp38N65KEjuUuEXk2l2QJlK/MJTIFVieQD2fRvjP4w+IjfE7wzrvw11zwhouk6dO+k6rqcQij1OLyCsuY/vQushyiNktH8x2kFa/PD9hH9jX4KftD/sZ+FdV+MVtqHiCWWTVobBDqFzbw6WovplLWsEDpF5jODI0kqSMxO0kxgIP1P8ACvxh+EH7QHhXVtP+E3jbSfEcl1ZTI62l0ks0AmQoGmgB82MZYffUV8kfsgaJ8dv2YPgVp/wK8U/CfVNf1nQZ9Qe11DStR0ltKvFubmSdGaW5vIJ4QDJhg1uW2jcqscoAD5l/Z3uvEWofs3ftVfsv/FqUeLrb4LR6tZ6Xd6gnnsLc2t4tvsaTOPKa28yIj5ow4AIAUD2b9m/wz4d8V/8ABKGw0/xLpltqlvD4X8RTxx3MKTLHNHLfFJUDg7ZEPKuMMp5BFfRPwm/ZZv8Awp8KPilpPi/Ubefxz8Z5tXvtdvLUObW3n1SOSOO3tw21mhtVkIVmUM53EgAhR8ufAHwZ+2L4J/Zr1D9knXPhbaWA0vT9Z06PxRLq9vLZz216Z5UMFnEfOkmYy+XGHaJBw0jKQUIB0f7H+t+NPDf/AASp0/xD8OYjN4o03w/4mudNULvb7VFfX7RlUwd7BhlVx8xAHevn/wAReAPhN8Rf+CWcXxh0tLX/AITzS9OTVJvEmf8Aictr0V0q3izXn/Hw8k7l4grschkwOEI+w/2YfCnxr/Zn/YcufCfxBstE8OeI/BWl6tcafNdakJbTzZpLi8ia/dUEcSRySqrbJZAygnK9K+XPhj4q+N3w/wBO0vVfEH7E0mt+IZ2i1O91yPU7OS5vdRk/ePftAbV/JnZmLBQVMWfLUIqhQAfpd+y14Gl8DfAvwfb6nbX1nr2q6Vp9/rEWoX15fzJqctnCLld17LM8QDrjylIRTnC5JJ+g68l+C3xas/jL4LHimPRNR8MX9rcy2Oo6Tq0Pk3tjeQYLxSLkggqyujDhkZWwM4HrVAC0UlLQAUlLSUALRSUtABSUtJQAtFJS0AFJS0lAC0UlLQAUlLSUAfkF8G/+UyPx2/7Eyz/9EaDX6/V+QHwb/wCUyPx2/wCxMs//AERoNfr9/nrQB//S/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T7X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAKKKSgBaKKKACiikoAWvFv2h/gxp37QvwZ8T/B3VNUuNEg8RwJH9steZIXhlSaMlCQHQugDoSN6FlyCcj2migD4f8DeBv2+NCgt/DHiH4i+B77SrVI4V1RtCvZNTaOMbdxhS7t7YSEAeq57HofqrwL4Lj8F6bcwzajcazqmqTm81HULrYJbu6MaReYUjVY41WONI0SNQqooHJyx7akoAyo9D0iPWJfEC2qHUpYxCbhvmkEXB8tC2SiEgEquAW+YgnmtaiigArl/E3g/QfGA02PxFB9sttLu4r6O3c/uHuIMmF5U6SeU+JEDZCyKr43IpHUUlAHmN58EvgzqOoXerah4C0C6vr+Vp7meXSrR5Z5XOWkkdoyzux6sSSag/4UT8D/8Aonnh3/wU2f8A8ar1aigDyn/hRHwP/wCieeHf/BTZ/wDxqvQ7XRdGsdIj0CysLe30uKH7OlpHEiW6w42+WIwAoTHG0DGOMVp0lAHkEnwX8N2PgjS/hp4Gvb3wN4W0zzFFloMiWRkikYuYhPsaaFS7MxaB45CT98DIPQ/D34WfD34VaXLpHw+0G20WC5fzbh4lLT3Up6y3M7lpp5Dk5kldmPc139FAHnnj74U/D/4oS+HZvHejxatJ4T1W31rTGkLKbe/tc+VKChXIUnJRso2BuU4FWPGvw48MfED7AfERv1bTHd4WsNUvtMbMgAYO1jPAZF4HyuWUHkDNd3SUAeH3P7O3wyvLeWzuzrs8E6skkcniXW2R0YYZWU3uCCOCDwRWV4c/ZZ+C3g7Rbbw34R0/VND0mz3eRZ2PiDWba2i3uZG2RRXiou52LHA5JJPJr6GooA+fdE/Za+Bvh74i2nxb07QJ38ZWSGOLVbnU9Qu7oRlDGUZ7i4k3JsYja2Vx2rtvG3wp8M/Ee9hPjl7jWdFgVSNFlkC6XLKrFvNuIUVTc9h5c7SQjAYRh/mr0ykoAjihit4kt4EWOKNQqooAVVAwAAOAAOleW/GH4IfC34+eGIPB3xa0GLX9JtruG+jhkeSMpPATtZXiZHGVLKwBwysVPBr1eigDK0PQtF8MaPZ+HvDlhBpel6fEsNta20awwwxIMKkcaAKqgdABXJ+D/hV8O/AOv+KPFPg3QbbSdV8aXa3+sXEK7Xu7lE2B35wO7EKAC7O5G92J9BpKAPm34l/sffsx/GDVptf+Ifw50rVNVuTma8WJrW5mb1kmt2ikc+7MTivGX/4JgfsLyNub4YoD7avqyj8heCvvmigD57+Cf7KvwB/Z0uNUvPg14Rh8O3WspHHdTC4ubuV0iJKqHu5ZmRctkqpAY4LA4GLJ/Zy+H+sa7beKfiNJe/EHVbGQTWr+IJxc2trIOjwafEkVhFIO0i24k/2q97pKAM7WNH0vxBpF7oGt2sd7p2pQS21zbyqGjmgmUpJG6nqrKSCO4NfETf8ABNL9jEFha+BrizicktDb63q8URLcn5FvAB9BgV930UAeHfC79nD4OfA/wrqnhL4OeH4/B9vq6kXFxZO73rttKo5ubgyys0e4mPezBSSQOTXp/hPwl4c8C+HLHwn4SsI9N0nTU2QQR5woJLMSSSzO7Es7sSzMSzEsST0VJQAtFFFAHP8Ainwp4Y8caDd+FvGWk2uuaNfhVuLK9hS4t5lVg6h45AVbDAEZHUA15YP2Yf2alAC/CbwiAP8AqA2H/wAZr3OkoA8O/wCGYf2a/wDok3hL/wAENh/8Zo/4Zi/Zr/6JN4S/8ENh/wDGa9yooA53w14Q8J+DNKt9C8H6LY6Fptp5nk2thbRWsEXmtvfZHEqqu5vmbA5PJ5rim+B/wqPxUk+N6eHLVPHUlh/Z39rKp89bf5uVBygkIYqZNu8phC2z5a9XpKAOY8J+DfDXgfTG0nwzZLaQyyvPO5LSTXFxJzJPPM5aSaVz96SRmZu5rlf+FN+AT8ZG+PT2Lv4y/sZdAW5Mz+XHYLO1wUWLOzc0jcsQTgADHOfUqKAOU8beBfB/xI8Oz+EfHuj22vaLdSQyTWd5GJYJWt5Vmj3o3DBZEVsHIOOQRxXQ3FjZXdt9iureOa3+X926hk+Qgr8pGOCAR6Yq1SUARzQw3ML29wiyxSqVdHAZWVhggg8EEcEV8+/Br9lb4FfAPXvEPin4YeF4NL1fxNcTTXd1kvIsc0nmm2gLcQ26tjEUYC8LnJUEfQ9FAFaW0tJ54bmeBJJrYsYnZQWjLDaxUnkZHBx1HFcH47+Guk/EiIaZ4p1C/k0F02XGlW9x9ltrvnP+kPCEuHQj5Wi80ROvDowNei0lAGVoeg6H4Y0i08P+G9Pt9K0uwQRW9raxJBBDGOixxoAqgegAFfMHxG/Yo+A/xG+LGg/HKXTrjw9450HULbURqejzC1ku5bV1dVukZHjlDbdrtsEjL8u/GMfWtFABXjvgL4G+Bfh1488ffEnQluJtc+I93a3eqyXMgkTNlEYoI4UCgIihmPOWJY5YgKB7FSUAeb/FX4T+CfjP4B1X4Z+O7RrnQdbES3UUMhgd1hmSYKJEwy5ZBkgg4zyOtd1pemWGi6ZZ6NpcIt7Owhjt4IwSQkUShEUEknhQBzV+igDyDxJ8CPhj41vpr3xxps/iaOeQyNZ6pfXd7pwJOcLYTStaADpgRdOtelaLoeieG9Mg0Xw7p9vpenWo2xW1rEkEMY64SOMBVH0FatJQB5b8SPgh8HvjBbC2+KHg3SvEwRdqSX1pFLNGP+mcpHmJ9VYVxvwW/ZU+AH7PN7quo/CDwfb6Dd6yym4m8ya5m2qMCOOS4eR44+pKIwUntwMfQtFAHK+FPBmgeDYL6PRYCJ9VupL6+uZDvuLu6lwGmmc8s21VRRwqIqxoFRVUdVRSUALUNxb293by2l3Es0EylJI3UMrqwwVYHggg4IPWpqKAPDLX9mD9myyt47S1+FPhRIohhR/YlicD6mImpW/Zn/Zwcqz/AAp8JsV5BOhWHH0/c17dSUAeKH9mr9nIjB+FfhQ/9wOw/wDjNdp4P+GXw2+HlreWXw/8KaT4Yt9QKtcx6XYwWSTFQQpkECIGIBIBOcAmu4ooA5TwT4G8H/DbwxY+C/AWj22g6FpqstvZ2kYihjDsXYhR3ZiWZjyzEkkkmuitLS0sLdLSxhS3giGEjjUIijrwq4AqzSUAfOuqfsofATWvjfb/ALQ2reFLa78aWkMUcVw4/crNCzMl15H3GuVyAJWBZQq7cFQa+i6KKACiikoAWvkr9pv9nfxj8YdY8B/ET4YeMv8AhD/G/wANru6u9LkubcXmnTi9jWKaO5gJByUXasi5KqzgDLAr9a0UAfJfhPwb+2NrcS6d8WfH/hjSbAfLK/hXSbkajMpPIW5v7iSGEkfxLbMR/CVIBr6e0HQ9L8M6Hp/hzQ4BbadpVvFa20QZm8uGBAka7mJY4UAZJJPcmtakoAWiiigAoopKAPyC+Mn/ACmR+BP/AGJl5/6I16v1+r8gPjJ/ymS+BP8A2Jl5/wCiNer9f6ACiikoAWiiigAoopKAPl3wR+yD8H/A3haDwJZpf6j4YS9m1OfS72582zvNQnl8xri7jVU+0YwoWGTMA2q3lbxvr3/xZ4R8O+OPCmq+CPFFil9outWktldWzj5HgmQoy8dODwRyDyOa6SigDzr4VfCf4f8AwT8EWHw6+GWjxaLoWnBvLhjLMzO5y8kkjkvJIx5ZmJJ6dAAPQHghkkjmeNWkizsYgErkYOD2yODipaSgDj/GXgbQ/H1jHo/iZp7jScsbixSVore8BGNlyEw0sWM5iLeW4JEiuMAdLYafYaVY2+maXbR2dnaRrFDBCixxRRoMKiIoCqqjgADAFXKKAPKvAPwP+Enwt17xF4o+H3hay0PVvFlwbrVLm3QiW5lYljksTtTcS2xNqbiW25JNW/Hfwj8AfEvWfCev+NdM/tK78EaiuraUWkkRIL5FwkxVGAcp1UNkBgDjIr0qkoA4zwr8PfCHg24vNQ0OwC6lqRBvL+dmuL662/d865lLSuF6Ipbag4QAYFdpRRQBydz4E8F3ni+2+IF3odlN4ls7VrKHUngRruO1Z/MMSykbgm/5sA9c+pqbUfCHh/UrfU4Wt3tH1lo3vJ7GaWxupmiVUQtcWzRzZCIqghx8o29OK6akoA8+8E/Cj4a/Dh7mfwP4asNHub4lrq5ggUXVyx6tPcEGWVveR2PvXoVFFAHD+F/hn8PPBGs614h8HeG9P0TUvEckcupXFlbR28l3JFu2NMUA3MNzHJ5ySepNXfC/gzQPCEGoJpEB87WLuW/v7iU75ru6mADSyufvEKqoo4VI1WNAqKqjq6SgDzpPhD8LYta8MeIbfwrpsGoeC4J7bRJIraOL+zoblQkqWyoAsasq4+UDAyBgE5y/i78FvBXxtsPDul+OVuJLTwzrdnr9vHby+SHu7EOIRKQCTHmQkqpUkgc4yD61RQAV5v42+Gen/ECbyfEGs6qmkPEIpdNsbxrCCcgsd0s1qIrtgQ21o/P8phwUOTn0ikoA5bwZ4I8HfDvw9beE/AmjWmg6PaA+Va2UKwxKT1baoGWbqzHJY8kk1saxo+keIdLu9D16yh1LTr+Nobi2uY1mhmicYZJI3BVlI4IIINaVFAHmPwt+DHws+CeiT+HfhT4Zs/DWn3M8lzLHaoQZJZTklnYs5x0UE4VQFUBQAPTqKSgBaKKKAPn39p34DQftIfCLUfhg+vXHhqe4ntru2vrdRL5VzaSCWIyQkqJY9wGULDnBBBArzHwh4S/b1j26P42+IXgc2K4VtStNCvJdSdQMFhE11Bao5PfYyg87SPlr7QpKAOT8F+ELPwXox0u3up9QuJ5ZLm7vbtla4u7qY5kmlKqqAnAAVFVEUKiKqKqjraKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigD8gPg3/wApkvjt/wBiZZ/+iNBr9f8AmvyA+Df/ACmR+O3/AGJln/6I0Gv1+oA//9P9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PlfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloA/ID4yf8AKZH4E/8AYmXn/ojXq/X6vyB+Mn/KZL4E/wDYmXn/AKI16v1+oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgD8gvg3/wApkfjt/wBiZZ/+iNBr9fq/ID4N/wDKZH47f9iZZ/8AojQa/X7/AD1oA//U/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T7X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgD8gvjJ/ymR+BP/YmXn/ojXq/X6vyA+Mn/KZL4E/9iZef+iNer9f6ACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigD8gPg3/ymS+O3/YmWf8A6I0Gv1/5r8gPg3/ymR+O3/YmWf8A6I0Gv1+oA//V/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6A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oAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigD8gPg3/ymS+O3/YmWf8A6I0Gv1/5r8gPg3/ymR+O3/YmWf8A6I0Gv1+oA//R/fyvAP2sf+TWfjJ/2JniH/03T17/AF4B+1j/AMms/GT/ALEzxD/6bp6APwB/4Iq/8nTeKf8AsTL7/wBOOnV/T5X8wX/BFX/k6bxT/wBiZff+nHTq/p9oAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaAPyA+Mn/ACmR+BP/AGJl5/6I16v1+r8gfjJ/ymS+BP8A2Jl5/wCiNer9fqAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoA/IL4N/8AKZH47f8AYmWf/ojQa/X6vyA+Df8AymR+O3/YmWf/AKI0Gv1+/wA9aAP/0v38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+1/MF/wRV/5Om8U/8AYmX3/px06v6faACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoA/IL4yf8pkf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KSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaAPyA+Mn/ACmR+BP/AGJl5/6I16v1+r8gfjJ/ymS+BP8A2Jl5/wCiNer9fqAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoA/IL4N/8AKZH47f8AYmWf/ojQa/X6vyA+Df8AymR+O3/YmWf/AKI0Gv1+/wA9aAP/0v38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+1/MF/wRV/5Om8U/8AYmX3/px06v6faACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoA/IL4yf8pkfgT/2Jl5/6I16v1+r8gPjJ/ymS+BP/YmXn/ojXq/X+gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooA/ID4N/8pkvjt/2Jln/AOiNBr9f+a/ID4N/8pkfjt/2Jln/AOiNBr9fqAP/0/38rwD9rH/k1n4yf9iZ4h/9N09e/wBeAftY/wDJrPxk/wCxM8Q/+m6egD8Af+CKv/J03in/ALEy+/8ATjp1f0+V/MF/wRV/5Om8U/8AYmX3/px06v6faAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgD8gPjJ/wApkfgT/wBiZef+iNer9fq/IH4yf8pkvgT/ANiZef8AojXq/X6gBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAFopKWgApKWkoAWikpaACkpaSgBaKSloAKSlpKAPyC+Df/ACmR+O3/AGJln/6I0Gv1+r8gPg3/AMpkfjt/2Jln/wCiNBr9fv8APWgD/9T9/K8A/ax/5NZ+Mn/YmeIf/TdPXv8AXgH7WP8Ayaz8ZP8AsTPEP/punoA/AH/gir/ydN4p/wCxMvv/AE46dX9PtfzBf8EVf+TpvFP/AGJl9/6cdOr+n2gAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoopKAFooooAKKKSgBaKKKACiikoAWiiigAoorzr4gfFn4c/Cy1hu/H2vW+kLcZ8pH3PNIB1KRRhpGA7kKQO9XTpym+WCu/IUpJK7PzG+Mn/KZH4E/wDYmXn/AKI16v1+r8UvE/jzwp8Tv+CtfwJ8Y+Bb7+1dF/4RW/szcrHJGguI7XW5HiIkVSHVJEYgjOGB71+1tFSlKD5Zqz8xRkmrphRRSVBQtFFFABRRSUALRRRQAUUU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"

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(150);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(152)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./main.less", function() {
		var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./main.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: yellow;\n}\n", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(153);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 153 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);