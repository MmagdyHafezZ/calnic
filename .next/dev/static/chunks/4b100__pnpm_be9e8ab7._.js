(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-client] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
;
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_classCallCheck
]);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_createClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-client] (ecmascript)");
;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_getPrototypeOf
]);
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_isNativeReflectConstruct
]);
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_possibleConstructorReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-client] (ecmascript)");
;
;
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/callSuper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_callSuper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-client] (ecmascript)");
;
;
;
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/inherits.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithHoles
]);
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArrayLimit
]);
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayLikeToArray
]);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_unsupportedIterableToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-client] (ecmascript)");
;
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, a) : void 0;
    }
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableRest
]);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_slicedToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArrayLimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [app-client] (ecmascript)");
;
;
;
;
function _slicedToArray(r, e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArrayLimit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r, e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithoutHoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-client] (ecmascript)");
;
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArray
]);
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableSpread
]);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toConsumableArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [app-client] (ecmascript)");
;
;
;
;
function _toConsumableArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [app-client] (ecmascript)");
;
;
;
;
function _toArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else for(t in e)e[t] && (n && (n += " "), n += t);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canAcceptRef",
    ()=>canAcceptRef,
    "defaultKey",
    ()=>defaultKey,
    "isProp",
    ()=>isProp,
    "uncontrolledPropTypes",
    ()=>uncontrolledPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$invariant$40$2$2e$2$2e$4$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js [app-client] (ecmascript)");
;
var noop = function noop() {};
function readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) {
                return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
            }
        }
    };
}
function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[defaultKey(prop)] = noop;
        if ("TURBOPACK compile-time truthy", 1) {
            var handler = controlledValues[prop];
            !(typeof handler === 'string' && handler.trim().length) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$invariant$40$2$2e$2$2e$4$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : "TURBOPACK unreachable" : void 0;
            propTypes[prop] = readOnlyPropType(handler, displayName);
        }
    });
    return propTypes;
}
function isProp(props, prop) {
    return props[prop] !== undefined;
}
function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
    return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useUncontrolled,
    "useUncontrolledProp",
    ()=>useUncontrolledProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/utils.js [app-client] (ecmascript)");
;
;
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
;
function useUncontrolledProp(propValue, defaultValue, handler) {
    var wasPropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(propValue !== undefined);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) {
        setState(defaultValue);
    }
    return [
        isProp ? propValue : stateValue,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useUncontrolledProp.useCallback": function(value) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (handler) handler.apply(void 0, [
                    value
                ].concat(args));
                setState(value);
            }
        }["useUncontrolledProp.useCallback"], [
            handler
        ])
    ];
}
;
function useUncontrolled(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](fieldName)], propsValue = _ref[fieldName], rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, [
            __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](fieldName),
            fieldName
        ].map(_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>uncontrollable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$lifecycles$2d$compat$40$3$2e$0$2e$4$2f$node_modules$2f$react$2d$lifecycles$2d$compat$2f$react$2d$lifecycles$2d$compat$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$invariant$40$2$2e$2$2e$4$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/utils.js [app-client] (ecmascript)");
;
;
;
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
;
;
;
;
function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) {
        methods = [];
    }
    var displayName = Component.displayName || Component.name || 'Component';
    var canAcceptRef = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAcceptRef"](Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"]);
    !(canAcceptRef || !methods.length) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$invariant$40$2$2e$2$2e$4$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : "TURBOPACK unreachable" : void 0;
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                            args[_key2 - 1] = arguments[_key2];
                        }
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProp"](props, key) && __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProp"](prevProps, key)) {
                    nextState.values[key] = props[__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](key)];
                }
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$lifecycles$2d$compat$40$3$2e$0$2e$4$2f$node_modules$2f$react$2d$lifecycles$2d$compat$2f$react$2d$lifecycles$2d$compat$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polyfill"])(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        innerRef: function innerRef() {}
    }, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uncontrolledPropTypes"](controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef) {
        WrappedComponent = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UncontrolledComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                innerRef: ref,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) {
            additions = {};
        }
        return uncontrollable(newComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-client] (ecmascript)");
;
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-client] (ecmascript) <export default as uncontrollable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uncontrollable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$uncontrollable$40$7$2e$2$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/uncontrollable@7.2.1_react@19.2.0/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "polyfill",
    ()=>polyfill
]);
function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
        this.setState(state);
    }
}
function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
    }
    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
        return Component;
    }
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
            throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        }
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/date-arithmetic@4.1.0/node_modules/date-arithmetic/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "century",
    ()=>century,
    "date",
    ()=>date,
    "day",
    ()=>day,
    "decade",
    ()=>decade,
    "diff",
    ()=>diff,
    "endOf",
    ()=>endOf,
    "eq",
    ()=>eq,
    "gt",
    ()=>gt,
    "gte",
    ()=>gte,
    "hours",
    ()=>hours,
    "inRange",
    ()=>inRange,
    "lt",
    ()=>lt,
    "lte",
    ()=>lte,
    "max",
    ()=>max,
    "milliseconds",
    ()=>milliseconds,
    "min",
    ()=>min,
    "minutes",
    ()=>minutes,
    "month",
    ()=>month,
    "neq",
    ()=>neq,
    "seconds",
    ()=>seconds,
    "startOf",
    ()=>startOf,
    "subtract",
    ()=>subtract,
    "weekday",
    ()=>weekday,
    "year",
    ()=>year
]);
var MILI = 'milliseconds', SECONDS = 'seconds', MINUTES = 'minutes', HOURS = 'hours', DAY = 'day', WEEK = 'week', MONTH = 'month', YEAR = 'year', DECADE = 'decade', CENTURY = 'century';
var multiplierMilli = {
    'milliseconds': 1,
    'seconds': 1000,
    'minutes': 60 * 1000,
    'hours': 60 * 60 * 1000,
    'day': 24 * 60 * 60 * 1000,
    'week': 7 * 24 * 60 * 60 * 1000
};
var multiplierMonth = {
    'month': 1,
    'year': 12,
    'decade': 10 * 12,
    'century': 100 * 12
};
function daysOf(year) {
    return [
        31,
        daysInFeb(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
}
function daysInFeb(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
    d = new Date(d);
    switch(unit){
        case MILI:
        case SECONDS:
        case MINUTES:
        case HOURS:
        case DAY:
        case WEEK:
            return addMillis(d, num * multiplierMilli[unit]);
        case MONTH:
        case YEAR:
        case DECADE:
        case CENTURY:
            return addMonths(d, num * multiplierMonth[unit]);
    }
    throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
    var nextDate = new Date(+d + num);
    return solveDST(d, nextDate);
}
function addMonths(d, num) {
    var year = d.getFullYear(), month = d.getMonth(), day = d.getDate(), totalMonths = year * 12 + month + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day, daysOf(nextYear)[nextMonth]);
    var nextDate = new Date(d);
    nextDate.setFullYear(nextYear);
    // To avoid a bug when sets the Feb month
    // with a date > 28 or date > 29 (leap year)
    nextDate.setDate(1);
    nextDate.setMonth(nextMonth);
    nextDate.setDate(nextDay);
    return nextDate;
}
function solveDST(currentDate, nextDate) {
    var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();
    // if is DST, add the difference in minutes
    // else the difference is zero
    var diffMinutes = nextOffset - currentOffset;
    return new Date(+nextDate + diffMinutes * multiplierMilli['minutes']);
}
function subtract(d, num, unit) {
    return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
    d = new Date(d);
    switch(unit){
        case CENTURY:
        case DECADE:
        case YEAR:
            d = month(d, 0);
        case MONTH:
            d = date(d, 1);
        case WEEK:
        case DAY:
            d = hours(d, 0);
        case HOURS:
            d = minutes(d, 0);
        case MINUTES:
            d = seconds(d, 0);
        case SECONDS:
            d = milliseconds(d, 0);
    }
    if (unit === DECADE) d = subtract(d, year(d) % 10, 'year');
    if (unit === CENTURY) d = subtract(d, year(d) % 100, 'year');
    if (unit === WEEK) d = weekday(d, 0, firstOfWeek);
    return d;
}
function endOf(d, unit, firstOfWeek) {
    d = new Date(d);
    d = startOf(d, unit, firstOfWeek);
    switch(unit){
        case CENTURY:
        case DECADE:
        case YEAR:
        case MONTH:
        case WEEK:
            d = add(d, 1, unit);
            d = subtract(d, 1, DAY);
            d.setHours(23, 59, 59, 999);
            break;
        case DAY:
            d.setHours(23, 59, 59, 999);
            break;
        case HOURS:
        case MINUTES:
        case SECONDS:
            d = add(d, 1, unit);
            d = subtract(d, 1, MILI);
    }
    return d;
}
var eq = createComparer(function(a, b) {
    return a === b;
});
var neq = createComparer(function(a, b) {
    return a !== b;
});
var gt = createComparer(function(a, b) {
    return a > b;
});
var gte = createComparer(function(a, b) {
    return a >= b;
});
var lt = createComparer(function(a, b) {
    return a < b;
});
var lte = createComparer(function(a, b) {
    return a <= b;
});
function min() {
    return new Date(Math.min.apply(Math, arguments));
}
function max() {
    return new Date(Math.max.apply(Math, arguments));
}
function inRange(day, min, max, unit) {
    unit = unit || 'day';
    return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit));
}
var milliseconds = createAccessor('Milliseconds');
var seconds = createAccessor('Seconds');
var minutes = createAccessor('Minutes');
var hours = createAccessor('Hours');
var day = createAccessor('Day');
var date = createAccessor('Date');
var month = createAccessor('Month');
var year = createAccessor('FullYear');
function decade(d, val) {
    return val === undefined ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
    return val === undefined ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
    var w = (day(d) + 7 - (firstDay || 0)) % 7;
    return val === undefined ? w : add(d, val - w, DAY);
}
function diff(date1, date2, unit, asFloat) {
    var dividend, divisor, result;
    switch(unit){
        case MILI:
        case SECONDS:
        case MINUTES:
        case HOURS:
        case DAY:
        case WEEK:
            dividend = date2.getTime() - date1.getTime();
            break;
        case MONTH:
        case YEAR:
        case DECADE:
        case CENTURY:
            dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
            break;
        default:
            throw new TypeError('Invalid units: "' + unit + '"');
    }
    switch(unit){
        case MILI:
            divisor = 1;
            break;
        case SECONDS:
            divisor = 1000;
            break;
        case MINUTES:
            divisor = 1000 * 60;
            break;
        case HOURS:
            divisor = 1000 * 60 * 60;
            break;
        case DAY:
            divisor = 1000 * 60 * 60 * 24;
            break;
        case WEEK:
            divisor = 1000 * 60 * 60 * 24 * 7;
            break;
        case MONTH:
            divisor = 1;
            break;
        case YEAR:
            divisor = 12;
            break;
        case DECADE:
            divisor = 120;
            break;
        case CENTURY:
            divisor = 1200;
            break;
        default:
            throw new TypeError('Invalid units: "' + unit + '"');
    }
    result = dividend / divisor;
    return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
    var hourLength = function(method) {
        switch(method){
            case 'Milliseconds':
                return 3600000;
            case 'Seconds':
                return 3600;
            case 'Minutes':
                return 60;
            case 'Hours':
                return 1;
            default:
                return null;
        }
    }(method);
    return function(d, val) {
        if (val === undefined) return d['get' + method]();
        var dateOut = new Date(d);
        dateOut['set' + method](val);
        if (hourLength && dateOut['get' + method]() != val && (method === 'Hours' || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
            //Skip DST hour, if it occurs
            dateOut['set' + method](val + hourLength);
        }
        return dateOut;
    };
}
function createComparer(operator) {
    return function(a, b, unit) {
        return operator(+startOf(a, unit), +startOf(b, unit));
    };
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */ __turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js [app-client] (ecmascript)");
;
function ownerWindow(node) {
    var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    return doc && doc.defaultView || window;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getComputedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js [app-client] (ecmascript)");
;
function getComputedStyle(node, psuedoElement) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).getComputedStyle(node, psuedoElement);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hyphenate
]);
var rUpper = /([A-Z])/g;
function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */ __turbopack_context__.s([
    "default",
    ()=>hyphenateStyleName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js [app-client] (ecmascript)");
;
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(string).replace(msPattern, '-ms-');
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isTransform
]);
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
    return !!(value && supportedTransforms.test(value));
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isTransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js [app-client] (ecmascript)");
;
;
;
function style(node, property) {
    var css = '';
    var transforms = '';
    if (typeof property === 'string') {
        return node.style.getPropertyValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(property)) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).getPropertyValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(property));
    }
    Object.keys(property).forEach(function(key) {
        var value = property[key];
        if (!value && value !== 0) {
            node.style.removeProperty((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isTransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key)) {
            transforms += key + "(" + value + ") ";
        } else {
            css += (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key) + ": " + value + ";";
        }
    });
    if (transforms) {
        css += "transform: " + transforms + ";";
    }
    node.style.cssText += ";" + css;
}
const __TURBOPACK__default__export__ = style;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ __turbopack_context__.s([
    "default",
    ()=>contains
]);
function contains(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isDocument
]);
function isDocument(element) {
    return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isDocument.js [app-client] (ecmascript)");
;
function isWindow(node) {
    if ('window' in node && node.window === node) return node;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node)) return node.defaultView || false;
    return false;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getScrollAccessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getscrollAccessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isWindow.js [app-client] (ecmascript)");
;
function getscrollAccessor(offset) {
    var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';
    function scrollAccessor(node, val) {
        var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
        if (val === undefined) {
            return win ? win[offset] : node[prop];
        }
        if (win) {
            win.scrollTo(win[offset], val);
        } else {
            node[prop] = val;
        }
    }
    return scrollAccessor;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollLeft.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getScrollAccessor.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('pageXOffset');
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollTop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getScrollAccessor.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('pageYOffset');
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/offset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>offset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollLeft.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollTop.js [app-client] (ecmascript)");
;
;
;
;
function offset(node) {
    var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    var box = {
        top: 0,
        left: 0,
        height: 0,
        width: 0
    };
    var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node
    if (!docElem || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(docElem, node)) return box;
    if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
    box = {
        top: box.top + (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(docElem) - (docElem.clientTop || 0),
        left: box.left + (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(docElem) - (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
    };
    return box;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/offsetParent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>offsetParent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js [app-client] (ecmascript)");
;
;
var isHTMLElement = function isHTMLElement(e) {
    return !!e && 'offsetParent' in e;
};
function offsetParent(node) {
    var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    var parent = node && node.offsetParent;
    while(isHTMLElement(parent) && parent.nodeName !== 'HTML' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent, 'position') === 'static'){
        parent = parent.offsetParent;
    }
    return parent || doc.documentElement;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/position.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>position
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/offset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/offsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollLeft.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollTop.js [app-client] (ecmascript)");
;
;
;
;
;
;
var nodeName = function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
};
function position(node, offsetParent) {
    var parentOffset = {
        top: 0,
        left: 0
    };
    var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, 'position') === 'fixed') {
        offset = node.getBoundingClientRect();
    } else {
        var parent = offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
        offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
        if (nodeName(parent) !== 'html') parentOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent);
        var borderTop = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent, 'borderTopWidth') || 0);
        parentOffset.top += parseInt(borderTop, 10) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent) || 0;
        var borderLeft = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent, 'borderLeftWidth') || 0);
        parentOffset.left += parseInt(borderLeft, 10) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent) || 0;
    }
    var marginTop = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, 'marginTop') || 0);
    var marginLeft = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, 'marginLeft') || 0); // Subtract parent offsets and node margins
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, offset, {
        top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
        left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
    });
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/animationFrame.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancel",
    ()=>cancel,
    "request",
    ()=>request
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js [app-client] (ecmascript)");
;
/* https://github.com/component/raf */ var prev = new Date().getTime();
function fallback(fn) {
    var curr = new Date().getTime();
    var ms = Math.max(0, 16 - (curr - prev));
    var handle = setTimeout(fn, ms);
    prev = curr;
    return handle;
}
var vendors = [
    '',
    'webkit',
    'moz',
    'o',
    'ms'
];
var cancelMethod = 'clearTimeout';
var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports
var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
    vendors.some(function(vendor) {
        var rafMethod = getKey(vendor, 'request');
        if (rafMethod in window) {
            cancelMethod = getKey(vendor, 'cancel'); // @ts-ignore
            rafImpl = function rafImpl(cb) {
                return window[rafMethod](cb);
            };
        }
        return !!rafImpl;
    });
}
var cancel = function cancel(id) {
    // @ts-ignore
    if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
var request = rafImpl;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addEventListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-return-assign */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "onceSupported",
    ()=>onceSupported,
    "optionsSupported",
    ()=>optionsSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js [app-client] (ecmascript)");
;
var optionsSupported = false;
var onceSupported = false;
try {
    var options = {
        get passive () {
            return optionsSupported = true;
        },
        get once () {
            // eslint-disable-next-line no-multi-assign
            return onceSupported = optionsSupported = true;
        }
    };
    if (__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, true);
    }
} catch (e) {
/* */ }
/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== 'boolean' && !onceSupported) {
        var once = options.once, capture = options.capture;
        var wrappedHandler = handler;
        if (!onceSupported && once) {
            wrappedHandler = handler.__once || function onceHandler(event) {
                this.removeEventListener(eventName, onceHandler, capture);
                handler.call(this, event);
            };
            handler.__once = wrappedHandler;
        }
        node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
    }
    node.addEventListener(eventName, handler, options);
}
const __TURBOPACK__default__export__ = addEventListener;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== 'boolean' ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);
    if (handler.__once) {
        node.removeEventListener(eventName, handler.__once, capture);
    }
}
const __TURBOPACK__default__export__ = removeEventListener;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addEventListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js [app-client] (ecmascript)");
;
;
function listen(node, eventName, handler, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, eventName, handler, options);
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, eventName, handler, options);
    };
}
const __TURBOPACK__default__export__ = listen;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/height.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>height
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/offset.js [app-client] (ecmascript)");
;
;
function height(node, client) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    return win ? win.innerHeight : client ? node.clientHeight : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).height;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>qsa
]);
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector));
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>matches
]);
var matchesImpl;
function matches(node, selector) {
    if (!matchesImpl) {
        var body = document.body;
        var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
        matchesImpl = function matchesImpl(n, s) {
            return nativeMatch.call(n, s);
        };
    }
    return matchesImpl(node, selector);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/closest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>closest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$matches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js [app-client] (ecmascript)");
;
function closest(node, selector, stopAt) {
    if (node.closest && !stopAt) node.closest(selector);
    var nextNode = node;
    do {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$matches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nextNode, selector)) return nextNode;
        nextNode = nextNode.parentElement;
    }while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE)
    return null;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/width.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/offset.js [app-client] (ecmascript)");
;
;
function getWidth(node, client) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    return win ? win.innerWidth : client ? node.clientWidth : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).width;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/scrollbarSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>scrollbarSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js [app-client] (ecmascript)");
;
var size;
function scrollbarSize(recalc) {
    if (!size && size !== 0 || recalc) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            var scrollDiv = document.createElement('div');
            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            scrollDiv.style.overflow = 'scroll';
            document.body.appendChild(scrollDiv);
            size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        }
    }
    return size;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ __turbopack_context__.s([
    "default",
    ()=>hasClass
]);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js [app-client] (ecmascript)");
;
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;
    else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>removeClass
]);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
    } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useCallbackRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useMergedRefs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "mergeRefs",
    ()=>mergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const toFnRef = (ref)=>!ref || typeof ref === 'function' ? ref : (value)=>{
        ref.current = value;
    };
function mergeRefs(refA, refB) {
    const a = toFnRef(refA);
    const b = toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function useMergedRefs(refA, refB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMergedRefs.useMemo": ()=>mergeRefs(refA, refB)
    }["useMergedRefs.useMemo"], [
        refA,
        refB
    ]);
}
const __TURBOPACK__default__export__ = useMergedRefs;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useMounted.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useMounted() {
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useMounted.useRef[isMounted]": ()=>mounted.current
    }["useMounted.useRef[isMounted]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>{
            mounted.current = true;
            return ({
                "useMounted.useEffect": ()=>{
                    mounted.current = false;
                }
            })["useMounted.useEffect"];
        }
    }["useMounted.useEffect"], []);
    return isMounted.current;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useSafeState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useMounted.js [app-client] (ecmascript)");
;
;
/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */ function useSafeState(state) {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return [
        state[0],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useSafeState.useCallback": (nextState)=>{
                if (!isMounted()) return;
                return state[1](nextState);
            }
        }["useSafeState.useCallback"], [
            isMounted,
            state[1]
        ])
    ];
}
const __TURBOPACK__default__export__ = useSafeState;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function useCommittedRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCommittedRef.useEffect": ()=>{
            ref.current = value;
        }
    }["useCommittedRef.useEffect"], [
        value
    ]);
    return ref;
}
const __TURBOPACK__default__export__ = useCommittedRef;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEventCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)");
;
;
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": function(...args) {
            return ref.current && ref.current(...args);
        }
    }["useEventCallback.useCallback"], [
        ref
    ]);
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/popper.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPopper",
    ()=>createPopper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>"); // For the common JS build we will turn this file into a bundle with no imports.
;
;
;
;
;
;
;
;
;
;
var createPopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["popperGenerator"])({
    defaultModifiers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ]
});
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/usePopper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useSafeState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useSafeState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/popper.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
var initialPopperStyles = function initialPopperStyles(position) {
    return {
        position: position,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none'
    };
};
var disabledApplyStylesModifier = {
    name: 'applyStyles',
    enabled: false
}; // In order to satisfy the current usage of options, including undefined
var ariaDescribedByModifier = {
    name: 'ariaDescribedBy',
    enabled: true,
    phase: 'afterWrite',
    effect: function effect(_ref) {
        var state = _ref.state;
        return function() {
            var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
            if ('removeAttribute' in reference) {
                var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function(id) {
                    return id.trim() !== popper.id;
                });
                if (!ids.length) reference.removeAttribute('aria-describedby');
                else reference.setAttribute('aria-describedby', ids.join(','));
            }
        };
    },
    fn: function fn(_ref2) {
        var _popper$getAttribute;
        var state = _ref2.state;
        var _state$elements2 = state.elements, popper = _state$elements2.popper, reference = _state$elements2.reference;
        var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
        if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
            var ids = reference.getAttribute('aria-describedby');
            if (ids && ids.split(',').indexOf(popper.id) !== -1) {
                return;
            }
            reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
        }
    }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */ function usePopper(referenceElement, popperElement, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp, _ref3$enabled = _ref3.enabled, enabled = _ref3$enabled === void 0 ? true : _ref3$enabled, _ref3$placement = _ref3.placement, placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement, _ref3$strategy = _ref3.strategy, strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy, _ref3$modifiers = _ref3.modifiers, modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers, config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref3, [
        "enabled",
        "placement",
        "strategy",
        "modifiers"
    ]);
    var popperInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePopper.useCallback[update]": function() {
            var _popperInstanceRef$cu;
            (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
        }
    }["usePopper.useCallback[update]"], []);
    var forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePopper.useCallback[forceUpdate]": function() {
            var _popperInstanceRef$cu2;
            (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
        }
    }["usePopper.useCallback[forceUpdate]"], []);
    var _useSafeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useSafeState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        placement: placement,
        update: update,
        forceUpdate: forceUpdate,
        attributes: {},
        styles: {
            popper: initialPopperStyles(strategy),
            arrow: {}
        }
    })), popperState = _useSafeState[0], setState = _useSafeState[1];
    var updateModifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePopper.useMemo[updateModifier]": function() {
            return {
                name: 'updateStateModifier',
                enabled: true,
                phase: 'write',
                requires: [
                    'computeStyles'
                ],
                fn: function fn(_ref4) {
                    var state = _ref4.state;
                    var styles = {};
                    var attributes = {};
                    Object.keys(state.elements).forEach({
                        "usePopper.useMemo[updateModifier].fn": function(element) {
                            styles[element] = state.styles[element];
                            attributes[element] = state.attributes[element];
                        }
                    }["usePopper.useMemo[updateModifier].fn"]);
                    setState({
                        state: state,
                        styles: styles,
                        attributes: attributes,
                        update: update,
                        forceUpdate: forceUpdate,
                        placement: state.placement
                    });
                }
            };
        }
    }["usePopper.useMemo[updateModifier]"], [
        update,
        forceUpdate,
        setState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePopper.useEffect": function() {
            if (!popperInstanceRef.current || !enabled) return;
            popperInstanceRef.current.setOptions({
                placement: placement,
                strategy: strategy,
                modifiers: [].concat(modifiers, [
                    updateModifier,
                    disabledApplyStylesModifier
                ])
            }); // intentionally NOT re-running on new modifiers
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePopper.useEffect"], [
        strategy,
        placement,
        updateModifier,
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePopper.useEffect": function() {
            if (!enabled || referenceElement == null || popperElement == null) {
                return undefined;
            }
            popperInstanceRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPopper"])(referenceElement, popperElement, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, config, {
                placement: placement,
                strategy: strategy,
                modifiers: [].concat(modifiers, [
                    ariaDescribedByModifier,
                    updateModifier
                ])
            }));
            return ({
                "usePopper.useEffect": function() {
                    if (popperInstanceRef.current != null) {
                        popperInstanceRef.current.destroy();
                        popperInstanceRef.current = undefined;
                        setState({
                            "usePopper.useEffect": function(s) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, s, {
                                    attributes: {},
                                    styles: {
                                        popper: initialPopperStyles(strategy)
                                    }
                                });
                            }
                        }["usePopper.useEffect"]);
                    }
                }
            })["usePopper.useEffect"]; // This is only run once to _create_ the popper
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePopper.useEffect"], [
        enabled,
        referenceElement,
        popperElement
    ]);
    return popperState;
}
const __TURBOPACK__default__export__ = usePopper;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/safeFindDOMNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>safeFindDOMNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findDOMNode(componentOrElement);
    }
    return componentOrElement != null ? componentOrElement : null;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/ownerDocument.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$safeFindDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/safeFindDOMNode.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = function(componentOrElement) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$safeFindDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(componentOrElement));
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/useRootClose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$warning$40$4$2e$0$2e$3$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/ownerDocument.js [app-client] (ecmascript)");
;
;
;
;
;
;
var escapeKeyCode = 27;
var noop = function noop() {};
function isLeftClickEvent(event) {
    return event.button === 0;
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget(ref) {
    return ref && ('current' in ref ? ref.current : ref);
};
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */ function useRootClose(ref, onRootClose, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;
    var preventMouseRootCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var onClose = onRootClose || noop;
    var handleMouseCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRootClose.useCallback[handleMouseCapture]": function(e) {
            var _e$composedPath$;
            var currentTarget = getRefTarget(ref);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$warning$40$4$2e$0$2e$3$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
            preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
        }
    }["useRootClose.useCallback[handleMouseCapture]"], [
        ref
    ]);
    var handleMouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRootClose.useEventCallback[handleMouse]": function(e) {
            if (!preventMouseRootCloseRef.current) {
                onClose(e);
            }
        }
    }["useRootClose.useEventCallback[handleMouse]"]);
    var handleKeyUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRootClose.useEventCallback[handleKeyUp]": function(e) {
            if (e.keyCode === escapeKeyCode) {
                onClose(e);
            }
        }
    }["useRootClose.useEventCallback[handleKeyUp]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRootClose.useEffect": function() {
            if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
            // https://github.com/facebook/react/issues/20074
            var currentEvent = window.event;
            var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
            // avoid false positives in the contains() check below if the target DOM
            // element is removed in the React mouse callback.
            var removeMouseCaptureListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, clickTrigger, handleMouseCapture, true);
            var removeMouseListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, clickTrigger, {
                "useRootClose.useEffect.removeMouseListener": function(e) {
                    // skip if this event is the same as the one running when we added the handlers
                    if (e === currentEvent) {
                        currentEvent = undefined;
                        return;
                    }
                    handleMouse(e);
                }
            }["useRootClose.useEffect.removeMouseListener"]);
            var removeKeyupListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, 'keyup', {
                "useRootClose.useEffect.removeKeyupListener": function(e) {
                    // skip if this event is the same as the one running when we added the handlers
                    if (e === currentEvent) {
                        currentEvent = undefined;
                        return;
                    }
                    handleKeyUp(e);
                }
            }["useRootClose.useEffect.removeKeyupListener"]);
            var mobileSafariHackListeners = [];
            if ('ontouchstart' in doc.documentElement) {
                mobileSafariHackListeners = [].slice.call(doc.body.children).map({
                    "useRootClose.useEffect": function(el) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(el, 'mousemove', noop);
                    }
                }["useRootClose.useEffect"]);
            }
            return ({
                "useRootClose.useEffect": function() {
                    removeMouseCaptureListener();
                    removeMouseListener();
                    removeKeyupListener();
                    mobileSafariHackListeners.forEach({
                        "useRootClose.useEffect": function(remove) {
                            return remove();
                        }
                    }["useRootClose.useEffect"]);
                }
            })["useRootClose.useEffect"];
        }
    }["useRootClose.useEffect"], [
        ref,
        disabled,
        clickTrigger,
        handleMouseCapture,
        handleMouse,
        handleKeyUp
    ]);
}
const __TURBOPACK__default__export__ = useRootClose;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/useWaitForDOMRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useWaitForDOMRef,
    "resolveContainerRef",
    ()=>resolveContainerRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var resolveContainerRef = function resolveContainerRef(ref) {
    var _ref;
    if (typeof document === 'undefined') return null;
    if (ref == null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dom$2d$helpers$40$5$2e$2$2e$1$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().body;
    if (typeof ref === 'function') ref = ref();
    if (ref && 'current' in ref) ref = ref.current;
    if ((_ref = ref) != null && _ref.nodeType) return ref || null;
    return null;
};
function useWaitForDOMRef(ref, onResolved) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useWaitForDOMRef.useState[_useState]": function() {
            return resolveContainerRef(ref);
        }
    }["useWaitForDOMRef.useState[_useState]"]), resolvedRef = _useState[0], setRef = _useState[1];
    if (!resolvedRef) {
        var earlyRef = resolveContainerRef(ref);
        if (earlyRef) setRef(earlyRef);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWaitForDOMRef.useEffect": function() {
            if (onResolved && resolvedRef) {
                onResolved(resolvedRef);
            }
        }
    }["useWaitForDOMRef.useEffect"], [
        onResolved,
        resolvedRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWaitForDOMRef.useEffect": function() {
            var nextRef = resolveContainerRef(ref);
            if (nextRef !== resolvedRef) {
                setRef(nextRef);
            }
        }
    }["useWaitForDOMRef.useEffect"], [
        ref,
        resolvedRef
    ]);
    return resolvedRef;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergeOptionsWithPopperConfig,
    "toModifierArray",
    ()=>toModifierArray,
    "toModifierMap",
    ()=>toModifierMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
;
function toModifierMap(modifiers) {
    var result = {};
    if (!Array.isArray(modifiers)) {
        return modifiers || result;
    } // eslint-disable-next-line no-unused-expressions
    modifiers == null ? void 0 : modifiers.forEach(function(m) {
        result[m.name] = m;
    });
    return result;
}
function toModifierArray(map) {
    if (map === void 0) {
        map = {};
    }
    if (Array.isArray(map)) return map;
    return Object.keys(map).map(function(k) {
        map[k].name = k;
        return map[k];
    });
}
function mergeOptionsWithPopperConfig(_ref) {
    var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
    var enabled = _ref.enabled, enableEvents = _ref.enableEvents, placement = _ref.placement, flip = _ref.flip, offset = _ref.offset, fixed = _ref.fixed, containerPadding = _ref.containerPadding, arrowElement = _ref.arrowElement, _ref$popperConfig = _ref.popperConfig, popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
    var modifiers = toModifierMap(popperConfig.modifiers);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, popperConfig, {
        placement: placement,
        enabled: enabled,
        strategy: fixed ? 'fixed' : popperConfig.strategy,
        modifiers: toModifierArray((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, modifiers, {
            eventListeners: {
                enabled: enableEvents
            },
            preventOverflow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, modifiers.preventOverflow, {
                options: containerPadding ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    padding: containerPadding
                }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
            }),
            offset: {
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    offset: offset
                }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
            },
            arrow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, modifiers.arrow, {
                enabled: !!arrowElement,
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
                    element: arrowElement
                })
            }),
            flip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                enabled: !!flip
            }, modifiers.flip)
        }))
    });
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/Overlay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useCallbackRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@restart+hooks@0.4.16_react@19.2.0/node_modules/@restart/hooks/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$usePopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/usePopper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useRootClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/useRootClose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useWaitForDOMRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/useWaitForDOMRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$mergeOptionsWithPopperConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */ var Overlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, outerRef) {
    var flip = props.flip, offset = props.offset, placement = props.placement, _props$containerPaddi = props.containerPadding, containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi, _props$popperConfig = props.popperConfig, popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig, Transition = props.transition;
    var _useCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), rootElement = _useCallbackRef[0], attachRef = _useCallbackRef[1];
    var _useCallbackRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), arrowElement = _useCallbackRef2[0], attachArrowRef = _useCallbackRef2[1];
    var mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$restart$2b$hooks$40$0$2e$4$2e$16_react$40$19$2e$2$2e$0$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(attachRef, outerRef);
    var container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useWaitForDOMRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.container);
    var target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useWaitForDOMRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.target);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!props.show), exited = _useState[0], setExited = _useState[1];
    var _usePopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$usePopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target, rootElement, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$mergeOptionsWithPopperConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        placement: placement,
        enableEvents: !!props.show,
        containerPadding: containerPadding || 5,
        flip: flip,
        offset: offset,
        arrowElement: arrowElement,
        popperConfig: popperConfig
    })), styles = _usePopper.styles, attributes = _usePopper.attributes, popper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_usePopper, [
        "styles",
        "attributes"
    ]);
    if (props.show) {
        if (exited) setExited(false);
    } else if (!props.transition && !exited) {
        setExited(true);
    }
    var handleHidden = function handleHidden() {
        setExited(true);
        if (props.onExited) {
            props.onExited.apply(props, arguments);
        }
    }; // Don't un-render the overlay while it's transitioning out.
    var mountOverlay = props.show || Transition && !exited;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useRootClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootElement, props.onHide, {
        disabled: !props.rootClose || props.rootCloseDisabled,
        clickTrigger: props.rootCloseEvent
    });
    if (!mountOverlay) {
        // Don't bother showing anything if we don't have to.
        return null;
    }
    var child = props.children((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, popper, {
        show: !!props.show,
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, attributes.popper, {
            style: styles.popper,
            ref: mergedRef
        }),
        arrowProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, attributes.arrow, {
            style: styles.arrow,
            ref: attachArrowRef
        })
    }));
    if (Transition) {
        var onExit = props.onExit, onExiting = props.onExiting, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered;
        child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Transition, {
            "in": props.show,
            appear: true,
            onExit: onExit,
            onExiting: onExiting,
            onExited: handleHidden,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered
        }, child);
    }
    return container ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
    /**
   * Set the visibility of the Overlay
   */ show: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /** Specify where the overlay element is positioned in relation to the target element */ placement: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"]),
    /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */ target: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */ container: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */ flip: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */ containerPadding: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */ popperConfig: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */ rootClose: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Specify event for toggling overlay
   */ rootCloseEvent: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'click',
        'mousedown'
    ]),
    /**
   * Specify disabled for disable RootCloseWrapper
   */ rootCloseDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */ onHide: function onHide(props) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (props.rootClose) {
            var _PropTypes$func;
            return (_PropTypes$func = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func).isRequired.apply(_PropTypes$func, [
                props
            ].concat(args));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.apply(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], [
            props
        ].concat(args));
    },
    /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */ // @ts-ignore
    transition: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Callback fired before the Overlay transitions in
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired as the Overlay begins to transition in
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the Overlay finishes transitioning in
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired right before the Overlay transitions out
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired as the Overlay begins to transition out
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the Overlay finishes transitioning out
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
};
const __TURBOPACK__default__export__ = Overlay;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/Overlay.js [app-client] (ecmascript) <export default as Overlay>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$overlays$40$5$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-overlays@5.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-overlays/esm/Overlay.js [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoizeOne
]);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/isBetween.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, i, t) {
        i.prototype.isBetween = function(e, i, s, f) {
            var n = t(e), o = t(i), r = "(" === (f = f || "()")[0], u = ")" === f[1];
            return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/isSameOrAfter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, t) {
        t.prototype.isSameOrAfter = function(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/isSameOrBefore.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, i) {
        i.prototype.isSameOrBefore = function(e, i) {
            return this.isSame(e, i) || this.isBefore(e, i);
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/localeData.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(n, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(n, e, t) {
        var r = e.prototype, o = function(n) {
            return n && (n.indexOf ? n : n.s);
        }, u = function(n, e, t, r, u) {
            var i = n.name ? n : n.$locale(), a = o(i[e]), s = o(i[t]), f = a || s.map(function(n) {
                return n.slice(0, r);
            });
            if (!u) return f;
            var d = i.weekStart;
            return f.map(function(n, e) {
                return f[(e + (d || 0)) % 7];
            });
        }, i = function() {
            return t.Ls[t.locale()];
        }, a = function(n, e) {
            return n.formats[e] || function(n) {
                return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n, e, t) {
                    return e || t.slice(1);
                });
            }(n.formats[e.toUpperCase()]);
        }, s = function() {
            var n = this;
            return {
                months: function(e) {
                    return e ? e.format("MMMM") : u(n, "months");
                },
                monthsShort: function(e) {
                    return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function() {
                    return n.$locale().weekStart || 0;
                },
                weekdays: function(e) {
                    return e ? e.format("dddd") : u(n, "weekdays");
                },
                weekdaysMin: function(e) {
                    return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function(e) {
                    return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function(e) {
                    return a(n.$locale(), e);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal
            };
        };
        r.localeData = function() {
            return s.bind(this)();
        }, t.localeData = function() {
            var n = i();
            return {
                firstDayOfWeek: function() {
                    return n.weekStart || 0;
                },
                weekdays: function() {
                    return t.weekdays();
                },
                weekdaysShort: function() {
                    return t.weekdaysShort();
                },
                weekdaysMin: function() {
                    return t.weekdaysMin();
                },
                months: function() {
                    return t.months();
                },
                monthsShort: function() {
                    return t.monthsShort();
                },
                longDateFormat: function(e) {
                    return a(n, e);
                },
                meridiem: n.meridiem,
                ordinal: n.ordinal
            };
        }, t.months = function() {
            return u(i(), "months");
        }, t.monthsShort = function() {
            return u(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n) {
            return u(i(), "weekdays", null, null, n);
        }, t.weekdaysShort = function(n) {
            return u(i(), "weekdaysShort", "weekdays", 3, n);
        }, t.weekdaysMin = function(n) {
            return u(i(), "weekdaysMin", "weekdays", 2, n);
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/localizedFormat.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    return function(t, o, n) {
        var r = o.prototype, i = r.format;
        n.en.formats = e, r.format = function(t) {
            void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
            var o = this.$locale().formats, n = function(t, o) {
                return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, n, r) {
                    var i = r && r.toUpperCase();
                    return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, o) {
                        return t || o.slice(1);
                    });
                });
            }(t, void 0 === o ? {} : o);
            return i.call(this, n);
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/minMax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, n) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = n() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, n, t) {
        var i = function(e, n) {
            if (!n || !n.length || 1 === n.length && !n[0] || 1 === n.length && Array.isArray(n[0]) && !n[0].length) return null;
            var t;
            1 === n.length && n[0].length > 0 && (n = n[0]);
            t = (n = n.filter(function(e) {
                return e;
            }))[0];
            for(var i = 1; i < n.length; i += 1)n[i].isValid() && !n[i][e](t) || (t = n[i]);
            return t;
        };
        t.max = function() {
            var e = [].slice.call(arguments, 0);
            return i("isAfter", e);
        }, t.min = function() {
            var e = [].slice.call(arguments, 0);
            return i("isBefore", e);
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/utc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t) {
            var i = {
                date: t,
                utc: !0,
                args: arguments
            };
            return new f(i);
        }, u.utc = function(i) {
            var e = n(this.toDate(), {
                locale: this.$L,
                utc: !0
            });
            return i ? e.add(this.utcOffset(), t) : e;
        }, u.local = function() {
            return n(this.toDate(), {
                locale: this.$L,
                utc: !1
            });
        };
        var r = u.parse;
        u.parse = function(t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), r.call(this, t);
        };
        var o = u.init;
        u.init = function() {
            if (this.$u) {
                var t = this.$d;
                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
            } else o.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s, f) {
            var n = this.$utils().u;
            if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
            if ("string" == typeof s && (s = function(t) {
                void 0 === t && (t = "");
                var s = t.match(i);
                if (!s) return null;
                var f = ("" + s[0]).match(e) || [
                    "-",
                    0,
                    0
                ], n = f[0], u = 60 * +f[1] + +f[2];
                return 0 === u ? 0 : "+" === n ? u : -u;
            }(s), null === s)) return this;
            var u = Math.abs(s) <= 16 ? 60 * s : s;
            if (0 === u) return this.utc(f);
            var r = this.clone();
            if (f) return r.$offset = u, r.$u = !1, r;
            var o = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            return (r = this.local().add(u + o, t)).$offset = u, r.$x.$localOffset = o, r;
        };
        var h = u.format;
        u.format = function(t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return h.call(this, i);
        }, u.valueOf = function() {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t;
        }, u.isUTC = function() {
            return !!this.$u;
        }, u.toISOString = function() {
            return this.toDate().toISOString();
        }, u.toString = function() {
            return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t) {
            return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t, i, e) {
            if (t && this.$u === t.$u) return c.call(this, t, i, e);
            var s = this.local(), f = n(t).local();
            return c.call(s, f, i, e);
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/plugin/isLeapYear.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, t) {
        t.prototype.isLeapYear = function() {
            return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
    };
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t) {
        return t instanceof _ || !(!t || !t[p]);
    }, w = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, O = function(t, e) {
        if (S(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (b.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return b;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = O(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return O(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < O(t);
        }, m.$g = function(t, e, n) {
            return b.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
                var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[b.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = b.p(f), y = function(t) {
                var e = O(l);
                return b.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return b.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return b.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return b.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return b.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return b.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return b.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return b.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return b.s(e.$s, 2, "0");
                        case "SSS":
                            return b.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return b.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : b.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = w(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return b.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), k = _.prototype;
    return O.prototype = k, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        k[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t) {
        return O(1e3 * t);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
});
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLockAttribute.useEffect": function() {
            document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
            return ({
                "useLockAttribute.useEffect": function() {
                    var newCounter = getCurrentUseCounter() - 1;
                    if (newCounter <= 0) {
                        document.body.removeAttribute(lockAttribute);
                    } else {
                        document.body.setAttribute(lockAttribute, newCounter.toString());
                    }
                }
            })["useLockAttribute.useEffect"];
        }
    }["useLockAttribute.useEffect"], []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RemoveScrollBar.useMemo[gap]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
        }
    }["RemoveScrollBar.useMemo[gap]"], [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.2_react@19.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.2_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCallbackRef.useState": function() {
            return {
                // value
                value: initialValue,
                // last callback
                callback: callback,
                // "memoized" public interface
                facade: {
                    get current () {
                        return ref.value;
                    },
                    set current (value){
                        var last = ref.value;
                        if (last !== value) {
                            ref.value = value;
                            ref.callback(value, last);
                        }
                    }
                }
            };
        }
    }["useCallbackRef.useState"])[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.2_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.2_react@19.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.2_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, {
        "useMergeRefs.useCallbackRef[callbackRef]": function(newValue) {
            return refs.forEach({
                "useMergeRefs.useCallbackRef[callbackRef]": function(ref) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
                }
            }["useMergeRefs.useCallbackRef[callbackRef]"]);
        }
    }["useMergeRefs.useCallbackRef[callbackRef]"]);
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect({
        "useMergeRefs.useIsomorphicLayoutEffect": function() {
            var oldValue = currentValues.get(callbackRef);
            if (oldValue) {
                var prevRefs_1 = new Set(oldValue);
                var nextRefs_1 = new Set(refs);
                var current_1 = callbackRef.current;
                prevRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!nextRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
                nextRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!prevRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
            }
            currentValues.set(callbackRef, refs);
        }
    }["useMergeRefs.useIsomorphicLayoutEffect"], [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.2_react@19.2.0/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.2_react@19.2.0/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.2_react@19.2.0/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.2_react@19.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$callback$2d$ref$40$1$2e$3$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lastProps.current = props;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    props.lockRef.current
                ], (props.shards || []).map(extractRef), true).filter(Boolean);
                allow_1.forEach({
                    "RemoveScrollSideCar.useEffect": function(el) {
                        return el.classList.add("allow-interactivity-".concat(id));
                    }
                }["RemoveScrollSideCar.useEffect"]);
                return ({
                    "RemoveScrollSideCar.useEffect": function() {
                        document.body.classList.remove("block-interactivity-".concat(id));
                        allow_1.forEach({
                            "RemoveScrollSideCar.useEffect": function(el) {
                                return el.classList.remove("allow-interactivity-".concat(id));
                            }
                        }["RemoveScrollSideCar.useEffect"]);
                    }
                })["RemoveScrollSideCar.useEffect"];
            }
            return;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancelEvent]": function(event, parent) {
            if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
                return !lastProps.current.allowPinchZoom;
            }
            var touch = getTouchXY(event);
            var touchStart = touchStartRef.current;
            var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
            var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
            var currentAxis;
            var target = event.target;
            var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
            // allow horizontal touch move on Range inputs. They will not cause any scroll
            if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
                return false;
            }
            var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            if (!canBeScrolledInMainDirection) {
                return true;
            }
            if (canBeScrolledInMainDirection) {
                currentAxis = moveDirection;
            } else {
                currentAxis = moveDirection === 'v' ? 'h' : 'v';
                canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
            }
            if (!canBeScrolledInMainDirection) {
                return false;
            }
            if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
                activeAxis.current = currentAxis;
            }
            if (!currentAxis) {
                return true;
            }
            var cancelingAxis = activeAxis.current || currentAxis;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancelEvent]"], []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldPrevent]": function(_event) {
            var event = _event;
            if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
                // not the last active
                return;
            }
            var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
            var sourceEvent = shouldPreventQueue.current.filter({
                "RemoveScrollSideCar.useCallback[shouldPrevent]": function(e) {
                    return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
                }
            }["RemoveScrollSideCar.useCallback[shouldPrevent]"])[0];
            // self event, and should be canceled
            if (sourceEvent && sourceEvent.should) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            // outside or shard event
            if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter({
                    "RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes": function(node) {
                        return node.contains(event.target);
                    }
                }["RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes"]);
                var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
                if (shouldStop) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                }
            }
        }
    }["RemoveScrollSideCar.useCallback[shouldPrevent]"], []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancel]": function(name, delta, target, should) {
            var event = {
                name: name,
                delta: delta,
                target: target,
                should: should,
                shadowParent: getOutermostShadowParent(target)
            };
            shouldPreventQueue.current.push(event);
            setTimeout({
                "RemoveScrollSideCar.useCallback[shouldCancel]": function() {
                    shouldPreventQueue.current = shouldPreventQueue.current.filter({
                        "RemoveScrollSideCar.useCallback[shouldCancel]": function(e) {
                            return e !== event;
                        }
                    }["RemoveScrollSideCar.useCallback[shouldCancel]"]);
                }
            }["RemoveScrollSideCar.useCallback[shouldCancel]"], 1);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancel]"], []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchStart]": function(event) {
            touchStartRef.current = getTouchXY(event);
            activeAxis.current = undefined;
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchStart]"], []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollWheel]": function(event) {
            shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollWheel]"], []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchMove]": function(event) {
            shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchMove]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lockStack.push(Style);
            props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove
            });
            document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            return ({
                "RemoveScrollSideCar.useEffect": function() {
                    lockStack = lockStack.filter({
                        "RemoveScrollSideCar.useEffect": function(inst) {
                            return inst !== Style;
                        }
                    }["RemoveScrollSideCar.useEffect"]);
                    document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                }
            })["RemoveScrollSideCar.useEffect"];
        }
    }["RemoveScrollSideCar.useEffect"], []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$2d$bar$40$2$2e$3$2e$8_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.2_react@19.2.0/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$use$2d$sidecar$40$1$2e$1$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$remove$2d$scroll$40$2$2e$7$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.2_react@19.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$get$2d$nonce$40$1$2e$0$2e$1$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$get$2d$nonce$40$1$2e$0$2e$1$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "styleHookSingleton.useEffect": function() {
                sheet.add(styles);
                return ({
                    "styleHookSingleton.useEffect": function() {
                        sheet.remove();
                    }
                })["styleHookSingleton.useEffect"];
            }
        }["styleHookSingleton.useEffect"], [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$style$2d$singleton$40$2$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$2_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.2_react@19.2.0/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWindowEvent",
    ()=>useWindowEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useWindowEvent(type, listener, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowEvent.useEffect": ()=>{
            window.addEventListener(type, listener, options);
            return ({
                "useWindowEvent.useEffect": ()=>window.removeEventListener(type, listener, options)
            })["useWindowEvent.useEffect"];
        }
    }["useWindowEvent.useEffect"], [
        type,
        listener
    ]);
}
;
 //# sourceMappingURL=use-window-event.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function attachMediaListener(query, callback) {
    try {
        query.addEventListener("change", callback);
        return ()=>query.removeEventListener("change", callback);
    } catch (e) {
        query.addListener(callback);
        return ()=>query.removeListener(callback);
    }
}
function getInitialValue(query, initialValue) {
    if (typeof window !== "undefined" && "matchMedia" in window) {
        return window.matchMedia(query).matches;
    }
    return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
    getInitialValueInEffect: true
}) {
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialValueInEffect ? initialValue : getInitialValue(query));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            try {
                const mediaQuery = window.matchMedia(query);
                setMatches(mediaQuery.matches);
                return attachMediaListener(mediaQuery, {
                    "useMediaQuery.useEffect": (event)=>setMatches(event.matches)
                }["useMediaQuery.useEffect"]);
            } catch (e) {
                return void 0;
            }
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches || false;
}
;
 //# sourceMappingURL=use-media-query.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs [app-client] (ecmascript)");
'use client';
;
function useReducedMotion(initialValue, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$media$2d$query$2f$use$2d$media$2d$query$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(prefers-reduced-motion: reduce)", initialValue, options);
}
;
 //# sourceMappingURL=use-reduced-motion.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDidUpdate",
    ()=>useDidUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useDidUpdate(fn, dependencies) {
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDidUpdate.useEffect": ()=>({
                "useDidUpdate.useEffect": ()=>{
                    mounted.current = false;
                }
            })["useDidUpdate.useEffect"]
    }["useDidUpdate.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDidUpdate.useEffect": ()=>{
            if (mounted.current) {
                return fn();
            }
            mounted.current = true;
            return void 0;
        }
    }["useDidUpdate.useEffect"], dependencies);
}
;
 //# sourceMappingURL=use-did-update.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUncontrolled",
    ()=>useUncontrolled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useUncontrolled({ value, defaultValue, finalValue, onChange = ()=>{} }) {
    const [uncontrolledValue, setUncontrolledValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue !== void 0 ? defaultValue : finalValue);
    const handleUncontrolledChange = (val, ...payload)=>{
        setUncontrolledValue(val);
        onChange?.(val, ...payload);
    };
    if (value !== void 0) {
        return [
            value,
            onChange,
            true
        ];
    }
    return [
        uncontrolledValue,
        handleUncontrolledChange,
        false
    ];
}
;
 //# sourceMappingURL=use-uncontrolled.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "randomId",
    ()=>randomId
]);
'use client';
function randomId(prefix = "mantine-") {
    return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}
;
 //# sourceMappingURL=random-id.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReactId",
    ()=>useReactId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const __useId = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["useId".toString()] || (()=>void 0);
function useReactId() {
    const id = __useId();
    return id ? `mantine-${id.replace(/:/g, "")}` : "";
}
;
 //# sourceMappingURL=use-react-id.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$random$2d$id$2f$random$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$react$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function useId(staticId) {
    const reactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$react$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReactId"])();
    const [uuid, setUuid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reactId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "useId.useIsomorphicEffect": ()=>{
            setUuid((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$random$2d$id$2f$random$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomId"])());
        }
    }["useId.useIsomorphicEffect"], []);
    if (typeof staticId === "string") {
        return staticId;
    }
    if (typeof window === "undefined") {
        return reactId;
    }
    return uuid;
}
;
 //# sourceMappingURL=use-id.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClickOutside",
    ()=>useClickOutside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const DEFAULT_EVENTS = [
    "mousedown",
    "touchstart"
];
function useClickOutside(callback, events, nodes) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eventsList = events || DEFAULT_EVENTS;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClickOutside.useEffect": ()=>{
            const listener = {
                "useClickOutside.useEffect.listener": (event)=>{
                    const { target } = event ?? {};
                    if (Array.isArray(nodes)) {
                        const shouldIgnore = !document.body.contains(target) && target?.tagName !== "HTML";
                        const shouldTrigger = nodes.every({
                            "useClickOutside.useEffect.listener.shouldTrigger": (node)=>!!node && !event.composedPath().includes(node)
                        }["useClickOutside.useEffect.listener.shouldTrigger"]);
                        shouldTrigger && !shouldIgnore && callback(event);
                    } else if (ref.current && !ref.current.contains(target)) {
                        callback(event);
                    }
                }
            }["useClickOutside.useEffect.listener"];
            eventsList.forEach({
                "useClickOutside.useEffect": (fn)=>document.addEventListener(fn, listener)
            }["useClickOutside.useEffect"]);
            return ({
                "useClickOutside.useEffect": ()=>{
                    eventsList.forEach({
                        "useClickOutside.useEffect": (fn)=>document.removeEventListener(fn, listener)
                    }["useClickOutside.useEffect"]);
                }
            })["useClickOutside.useEffect"];
        }
    }["useClickOutside.useEffect"], [
        ref,
        callback,
        nodes
    ]);
    return ref;
}
;
 //# sourceMappingURL=use-click-outside.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-mutation-observer/use-mutation-observer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutationObserver",
    ()=>useMutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useMutationObserver(callback, options, target) {
    const observer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMutationObserver.useEffect": ()=>{
            const targetElement = typeof target === "function" ? target() : target;
            if (targetElement || ref.current) {
                observer.current = new MutationObserver(callback);
                observer.current.observe(targetElement || ref.current, options);
            }
            return ({
                "useMutationObserver.useEffect": ()=>{
                    observer.current?.disconnect();
                }
            })["useMutationObserver.useEffect"];
        }
    }["useMutationObserver.useEffect"], [
        callback,
        options
    ]);
    return ref;
}
;
 //# sourceMappingURL=use-mutation-observer.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignRef",
    ()=>assignRef,
    "mergeRefs",
    ()=>mergeRefs,
    "useMergedRef",
    ()=>useMergedRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function assignRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (typeof ref === "object" && ref !== null && "current" in ref) {
        ref.current = value;
    }
}
function mergeRefs(...refs) {
    const cleanupMap = /* @__PURE__ */ new Map();
    return (node)=>{
        refs.forEach((ref)=>{
            const cleanup = assignRef(ref, node);
            if (cleanup) {
                cleanupMap.set(ref, cleanup);
            }
        });
        if (cleanupMap.size > 0) {
            return ()=>{
                refs.forEach((ref)=>{
                    const cleanup = cleanupMap.get(ref);
                    if (cleanup && typeof cleanup === "function") {
                        cleanup();
                    } else {
                        assignRef(ref, null);
                    }
                });
                cleanupMap.clear();
            };
        }
    };
}
function useMergedRef(...refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(mergeRefs(...refs), refs);
}
;
 //# sourceMappingURL=use-merged-ref.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusReturn",
    ()=>useFocusReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-client] (ecmascript)");
'use client';
;
;
function useFocusReturn({ opened, shouldReturnFocus = true }) {
    const lastActiveElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const returnFocus = ()=>{
        if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
            lastActiveElement.current?.focus({
                preventScroll: true
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDidUpdate"])({
        "useFocusReturn.useDidUpdate": ()=>{
            let timeout = -1;
            const clearFocusTimeout = {
                "useFocusReturn.useDidUpdate.clearFocusTimeout": (event)=>{
                    if (event.key === "Tab") {
                        window.clearTimeout(timeout);
                    }
                }
            }["useFocusReturn.useDidUpdate.clearFocusTimeout"];
            document.addEventListener("keydown", clearFocusTimeout);
            if (opened) {
                lastActiveElement.current = document.activeElement;
            } else if (shouldReturnFocus) {
                timeout = window.setTimeout(returnFocus, 10);
            }
            return ({
                "useFocusReturn.useDidUpdate": ()=>{
                    window.clearTimeout(timeout);
                    document.removeEventListener("keydown", clearFocusTimeout);
                }
            })["useFocusReturn.useDidUpdate"];
        }
    }["useFocusReturn.useDidUpdate"], [
        opened,
        shouldReturnFocus
    ]);
    return returnFocus;
}
;
 //# sourceMappingURL=use-focus-return.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOCUS_SELECTOR",
    ()=>FOCUS_SELECTOR,
    "findTabbableDescendants",
    ()=>findTabbableDescendants,
    "focusable",
    ()=>focusable,
    "tabbable",
    ()=>tabbable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
const TABBABLE_NODES = /input|select|textarea|button|object/;
const FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return element.style.display === "none";
}
function visible(element) {
    const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
    if (isHidden) {
        return false;
    }
    let parentElement = element;
    while(parentElement){
        if (parentElement === document.body || parentElement.nodeType === 11) {
            break;
        }
        if (hidden(parentElement)) {
            return false;
        }
        parentElement = parentElement.parentNode;
    }
    return true;
}
function getElementTabIndex(element) {
    let tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null) {
        tabIndex = void 0;
    }
    return parseInt(tabIndex, 10);
}
function focusable(element) {
    const nodeName = element.nodeName.toLowerCase();
    const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
    const res = // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
}
function tabbable(element) {
    const tabIndex = getElementTabIndex(element);
    const isTabIndexNaN = Number.isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
    return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}
;
 //# sourceMappingURL=tabbable.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/scope-tab.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scopeTab",
    ()=>scopeTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.mjs [app-client] (ecmascript)");
'use client';
;
function scopeTab(node, event) {
    const tabbable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTabbableDescendants"])(node);
    if (!tabbable.length) {
        event.preventDefault();
        return;
    }
    const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
    const root = node.getRootNode();
    let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
    const activeElement = root.activeElement;
    const activeElementIsRadio = activeElement.tagName === "INPUT" && activeElement.getAttribute("type") === "radio";
    if (activeElementIsRadio) {
        const activeRadioGroup = tabbable.filter((element)=>element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement.getAttribute("name"));
        leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
    }
    if (!leavingFinalTabbable) {
        return;
    }
    event.preventDefault();
    const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
    if (target) {
        target.focus();
    }
}
;
 //# sourceMappingURL=scope-tab.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusTrap",
    ()=>useFocusTrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$scope$2d$tab$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/scope-tab.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function useFocusTrap(active = true) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const focusNode = (node)=>{
        let focusElement = node.querySelector("[data-autofocus]");
        if (!focusElement) {
            const children = Array.from(node.querySelectorAll(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUS_SELECTOR"]));
            focusElement = children.find(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabbable"]) || children.find(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusable"]) || null;
            if (!focusElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$tabbable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusable"])(node)) {
                focusElement = node;
            }
        }
        if (focusElement) {
            focusElement.focus({
                preventScroll: true
            });
        } else if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node", node);
        }
    };
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFocusTrap.useCallback[setRef]": (node)=>{
            if (!active) {
                return;
            }
            if (node === null) {
                return;
            }
            if (ref.current === node) {
                return;
            }
            if (node) {
                setTimeout({
                    "useFocusTrap.useCallback[setRef]": ()=>{
                        if (node.getRootNode()) {
                            focusNode(node);
                        } else if ("TURBOPACK compile-time truthy", 1) {
                            console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", node);
                        }
                    }
                }["useFocusTrap.useCallback[setRef]"]);
                ref.current = node;
            } else {
                ref.current = null;
            }
        }
    }["useFocusTrap.useCallback[setRef]"], [
        active
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFocusTrap.useEffect": ()=>{
            if (!active) {
                return void 0;
            }
            ref.current && setTimeout({
                "useFocusTrap.useEffect": ()=>focusNode(ref.current)
            }["useFocusTrap.useEffect"]);
            const handleKeyDown = {
                "useFocusTrap.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Tab" && ref.current) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$scope$2d$tab$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scopeTab"])(ref.current, event);
                    }
                }
            }["useFocusTrap.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "useFocusTrap.useEffect": ()=>document.removeEventListener("keydown", handleKeyDown)
            })["useFocusTrap.useEffect"];
        }
    }["useFocusTrap.useEffect"], [
        active
    ]);
    return setRef;
}
;
 //# sourceMappingURL=use-focus-trap.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisclosure",
    ()=>useDisclosure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useDisclosure(initialState = false, options = {}) {
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDisclosure.useCallback[open]": ()=>{
            setOpened({
                "useDisclosure.useCallback[open]": (isOpened)=>{
                    if (!isOpened) {
                        options.onOpen?.();
                        return true;
                    }
                    return isOpened;
                }
            }["useDisclosure.useCallback[open]"]);
        }
    }["useDisclosure.useCallback[open]"], [
        options.onOpen
    ]);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDisclosure.useCallback[close]": ()=>{
            setOpened({
                "useDisclosure.useCallback[close]": (isOpened)=>{
                    if (isOpened) {
                        options.onClose?.();
                        return false;
                    }
                    return isOpened;
                }
            }["useDisclosure.useCallback[close]"]);
        }
    }["useDisclosure.useCallback[close]"], [
        options.onClose
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDisclosure.useCallback[toggle]": ()=>{
            opened ? close() : open();
        }
    }["useDisclosure.useCallback[toggle]"], [
        close,
        open,
        opened
    ]);
    return [
        opened,
        {
            open,
            close,
            toggle
        }
    ];
}
;
 //# sourceMappingURL=use-disclosure.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/utils/use-callback-ref/use-callback-ref.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useCallbackRef(callback) {
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=use-callback-ref.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebouncedCallback",
    ()=>useDebouncedCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/utils/use-callback-ref/use-callback-ref.mjs [app-client] (ecmascript)");
'use client';
;
;
function useDebouncedCallback(callback, options) {
    const { delay, flushOnUnmount, leading } = typeof options === "number" ? {
        delay: options,
        flushOnUnmount: false,
        leading: false
    } : options;
    const handleCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(callback);
    const debounceTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDebouncedCallback.useMemo[lastCallback]": ()=>{
            const currentCallback = Object.assign({
                "useDebouncedCallback.useMemo[lastCallback].currentCallback": (...args)=>{
                    window.clearTimeout(debounceTimerRef.current);
                    const isFirstCall = currentCallback._isFirstCall;
                    currentCallback._isFirstCall = false;
                    function clearTimeoutAndLeadingRef() {
                        window.clearTimeout(debounceTimerRef.current);
                        debounceTimerRef.current = 0;
                        currentCallback._isFirstCall = true;
                    }
                    if (leading && isFirstCall) {
                        handleCallback(...args);
                        const resetLeadingState = {
                            "useDebouncedCallback.useMemo[lastCallback].currentCallback.resetLeadingState": ()=>{
                                clearTimeoutAndLeadingRef();
                            }
                        }["useDebouncedCallback.useMemo[lastCallback].currentCallback.resetLeadingState"];
                        const flush2 = {
                            "useDebouncedCallback.useMemo[lastCallback].currentCallback.flush2": ()=>{
                                if (debounceTimerRef.current !== 0) {
                                    clearTimeoutAndLeadingRef();
                                    handleCallback(...args);
                                }
                            }
                        }["useDebouncedCallback.useMemo[lastCallback].currentCallback.flush2"];
                        const cancel2 = {
                            "useDebouncedCallback.useMemo[lastCallback].currentCallback.cancel2": ()=>{
                                clearTimeoutAndLeadingRef();
                            }
                        }["useDebouncedCallback.useMemo[lastCallback].currentCallback.cancel2"];
                        currentCallback.flush = flush2;
                        currentCallback.cancel = cancel2;
                        debounceTimerRef.current = window.setTimeout(resetLeadingState, delay);
                        return;
                    }
                    if (leading && !isFirstCall) {
                        const flush2 = {
                            "useDebouncedCallback.useMemo[lastCallback].currentCallback.flush2": ()=>{
                                if (debounceTimerRef.current !== 0) {
                                    clearTimeoutAndLeadingRef();
                                    handleCallback(...args);
                                }
                            }
                        }["useDebouncedCallback.useMemo[lastCallback].currentCallback.flush2"];
                        const cancel2 = {
                            "useDebouncedCallback.useMemo[lastCallback].currentCallback.cancel2": ()=>{
                                clearTimeoutAndLeadingRef();
                            }
                        }["useDebouncedCallback.useMemo[lastCallback].currentCallback.cancel2"];
                        currentCallback.flush = flush2;
                        currentCallback.cancel = cancel2;
                        const resetLeadingState = {
                            "useDebouncedCallback.useMemo[lastCallback].currentCallback.resetLeadingState": ()=>{
                                clearTimeoutAndLeadingRef();
                            }
                        }["useDebouncedCallback.useMemo[lastCallback].currentCallback.resetLeadingState"];
                        debounceTimerRef.current = window.setTimeout(resetLeadingState, delay);
                        return;
                    }
                    const flush = {
                        "useDebouncedCallback.useMemo[lastCallback].currentCallback.flush": ()=>{
                            if (debounceTimerRef.current !== 0) {
                                clearTimeoutAndLeadingRef();
                                handleCallback(...args);
                            }
                        }
                    }["useDebouncedCallback.useMemo[lastCallback].currentCallback.flush"];
                    const cancel = {
                        "useDebouncedCallback.useMemo[lastCallback].currentCallback.cancel": ()=>{
                            clearTimeoutAndLeadingRef();
                        }
                    }["useDebouncedCallback.useMemo[lastCallback].currentCallback.cancel"];
                    currentCallback.flush = flush;
                    currentCallback.cancel = cancel;
                    debounceTimerRef.current = window.setTimeout(flush, delay);
                }
            }["useDebouncedCallback.useMemo[lastCallback].currentCallback"], {
                flush: {
                    "useDebouncedCallback.useMemo[lastCallback].currentCallback": ()=>{}
                }["useDebouncedCallback.useMemo[lastCallback].currentCallback"],
                cancel: {
                    "useDebouncedCallback.useMemo[lastCallback].currentCallback": ()=>{}
                }["useDebouncedCallback.useMemo[lastCallback].currentCallback"],
                _isFirstCall: true
            });
            return currentCallback;
        }
    }["useDebouncedCallback.useMemo[lastCallback]"], [
        handleCallback,
        delay,
        leading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedCallback.useEffect": ()=>({
                "useDebouncedCallback.useEffect": ()=>{
                    if (flushOnUnmount) {
                        lastCallback.flush();
                    } else {
                        lastCallback.cancel();
                    }
                }
            })["useDebouncedCallback.useEffect"]
    }["useDebouncedCallback.useEffect"], [
        lastCallback,
        flushOnUnmount
    ]);
    return lastCallback;
}
;
 //# sourceMappingURL=use-debounced-callback.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ __turbopack_context__.s([
    "alignments",
    ()=>alignments,
    "clamp",
    ()=>clamp,
    "createCoords",
    ()=>createCoords,
    "evaluate",
    ()=>evaluate,
    "expandPaddingObject",
    ()=>expandPaddingObject,
    "floor",
    ()=>floor,
    "getAlignment",
    ()=>getAlignment,
    "getAlignmentAxis",
    ()=>getAlignmentAxis,
    "getAlignmentSides",
    ()=>getAlignmentSides,
    "getAxisLength",
    ()=>getAxisLength,
    "getExpandedPlacements",
    ()=>getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    ()=>getOppositeAlignmentPlacement,
    "getOppositeAxis",
    ()=>getOppositeAxis,
    "getOppositeAxisPlacements",
    ()=>getOppositeAxisPlacements,
    "getOppositePlacement",
    ()=>getOppositePlacement,
    "getPaddingObject",
    ()=>getPaddingObject,
    "getSide",
    ()=>getSide,
    "getSideAxis",
    ()=>getSideAxis,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "placements",
    ()=>placements,
    "rectToClientRect",
    ()=>rectToClientRect,
    "round",
    ()=>round,
    "sides",
    ()=>sides
]);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/tabbable@6.3.0/node_modules/tabbable/dist/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*!
* tabbable 6.3.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/ // NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
__turbopack_context__.s([
    "focusable",
    ()=>focusable,
    "getTabIndex",
    ()=>getTabIndex,
    "isFocusable",
    ()=>isFocusable,
    "isTabbable",
    ()=>isTabbable,
    "tabbable",
    ()=>tabbable
]);
var candidateSelectors = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])'
];
var candidateSelector = /* #__PURE__ */ candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    var _element$getRootNode;
    return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
    return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */ var _isInert = function isInert(node, lookUp) {
    var _node$getAttribute;
    if (lookUp === void 0) {
        lookUp = true;
    }
    // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
    //  JS API property; we have to check the attribute, which can either be empty or 'true';
    //  if it's `null` (not specified) or 'false', it's an active element
    var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
    var inert = inertAtt === '' || inertAtt === 'true';
    // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
    //  if it weren't for `matches()` not being a function on shadow roots; the following
    //  code works for any kind of node
    // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
    //  so it likely would not support `:is([inert] *)` either...
    var result = inert || lookUp && node && _isInert(node.parentNode); // recursive
    return result;
};
/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */ var isContentEditable = function isContentEditable(node) {
    var _node$getAttribute2;
    // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
    //  to use the attribute directly to check for this, which can either be empty or 'true';
    //  if it's `null` (not specified) or 'false', it's a non-editable element
    var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
    return attValue === '' || attValue === 'true';
};
/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */ var getCandidates = function getCandidates(el, includeContainer, filter) {
    // even if `includeContainer=false`, we still have to check it for inertness because
    //  if it's inert, all its children are inert
    if (_isInert(el)) {
        return [];
    }
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
    }
    candidates = candidates.filter(filter);
    return candidates;
};
/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */ /**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */ /**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */ /**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */ /**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */ var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while(elementsToCheck.length){
        var element = elementsToCheck.shift();
        if (_isInert(element, false)) {
            continue;
        }
        if (element.tagName === 'SLOT') {
            // add shadow dom slot scope (slot itself cannot be focusable)
            var assigned = element.assignedElements();
            var content = assigned.length ? assigned : element.children;
            var nestedCandidates = _getCandidatesIteratively(content, true, options);
            if (options.flatten) {
                candidates.push.apply(candidates, nestedCandidates);
            } else {
                candidates.push({
                    scopeParent: element,
                    candidates: nestedCandidates
                });
            }
        } else {
            // check candidate element
            var validCandidate = matches.call(element, candidateSelector);
            if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
                candidates.push(element);
            }
            // iterate over shadow content if possible
            var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
            typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);
            // no inert look up because we're already drilling down and checking for inertness
            //  on the way down, so all containers to this root node should have already been
            //  vetted as non-inert
            var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
            if (shadowRoot && validShadowRoot) {
                // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
                //  shadow exists, so look at light dom children as fallback BUT create a scope for any
                //  child candidates found because they're likely slotted elements (elements that are
                //  children of the web component element (which has the shadow), in the light dom, but
                //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
                //  _after_ we return from this recursive call
                var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
                if (options.flatten) {
                    candidates.push.apply(candidates, _nestedCandidates);
                } else {
                    candidates.push({
                        scopeParent: element,
                        candidates: _nestedCandidates
                    });
                }
            } else {
                // there's not shadow so just dig into the element's (light dom) children
                //  __without__ giving the element special scope treatment
                elementsToCheck.unshift.apply(elementsToCheck, element.children);
            }
        }
    }
    return candidates;
};
/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */ var hasTabIndex = function hasTabIndex(node) {
    return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};
/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */ var getTabIndex = function getTabIndex(node) {
    if (!node) {
        throw new Error('No node provided');
    }
    if (node.tabIndex < 0) {
        // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
        // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
        // yet they are still part of the regular tab order; in FF, they get a default
        // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
        // order, consider their tab index to be 0.
        // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
        // so if they don't have a tabindex attribute specifically set, assume it's 0.
        if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
            return 0;
        }
    }
    return node.tabIndex;
};
/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */ var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
    var tabIndex = getTabIndex(node);
    if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
        return 0;
    }
    return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
    return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
    return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
    var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === 'SUMMARY';
    });
    return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
    for(var i = 0; i < nodes.length; i++){
        if (nodes[i].checked && nodes[i].form === form) {
            return nodes[i];
        }
    }
};
var isTabbableRadio = function isTabbableRadio(node) {
    if (!node.name) {
        return true;
    }
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
        radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
        try {
            radioSet = queryRadios(node.name);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
            return false;
        }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
};
var isRadio = function isRadio(node) {
    return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
    return isRadio(node) && !isTabbableRadio(node);
};
// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
    var _nodeRoot;
    // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
    //  (but NOT _the_ document; see second 'If' comment below for more).
    // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
    //  is attached, and the one we need to check if it's in the document or not (because the
    //  shadow, and all nodes it contains, is never considered in the document since shadows
    //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
    //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
    //  visibility, including all the nodes it contains). The host could be any normal node,
    //  or a custom element (i.e. web component). Either way, that's the one that is considered
    //  part of the document, not the shadow root, nor any of its children (i.e. the node being
    //  tested).
    // To further complicate things, we have to look all the way up until we find a shadow HOST
    //  that is attached (or find none) because the node might be in nested shadows...
    // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
    //  document (per the docs) and while it's a Document-type object, that document does not
    //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
    //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
    //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
    //  node is actually detached.
    // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
    //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
    //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
    //  `ownerDocument` will be `null`, hence the optional chaining on it.
    var nodeRoot = node && getRootNode(node);
    var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
    // in some cases, a detached node will return itself as the root instead of a document or
    //  shadow root object, in which case, we shouldn't try to look further up the host chain
    var attached = false;
    if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while(!attached && nodeRootHost){
            var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
            // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
            //  which means we need to get the host's host and check if that parent host is contained
            //  in (i.e. attached to) the document
            nodeRoot = getRootNode(nodeRootHost);
            nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
            attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
    }
    return attached;
};
var isZeroArea = function isZeroArea(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (displayCheck === 'full-native') {
        if ('checkVisibility' in node) {
            // Chrome >= 105, Edge >= 105, Firefox >= 106, Safari >= 17.4
            // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/checkVisibility#browser_compatibility
            var visible = node.checkVisibility({
                // Checking opacity might be desirable for some use cases, but natively,
                // opacity zero elements _are_ focusable and tabbable.
                checkOpacity: false,
                opacityProperty: false,
                contentVisibilityAuto: true,
                visibilityProperty: true,
                // This is an alias for `visibilityProperty`. Contemporary browsers
                // support both. However, this alias has wider browser support (Chrome
                // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
                // we include it anyway.
                checkVisibilityCSS: true
            });
            return !visible;
        }
    // Fall through to manual visibility checks
    }
    // NOTE: visibility will be `undefined` if node is detached from the document
    //  (see notes about this further down), which means we will consider it visible
    //  (this is legacy behavior from a very long way back)
    // NOTE: we check this regardless of `displayCheck="none"` because this is a
    //  _visibility_ check, not a _display_ check
    if (getComputedStyle(node).visibility === 'hidden') {
        return true;
    }
    var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
        return true;
    }
    if (!displayCheck || displayCheck === 'full' || // full-native can run this branch when it falls through in case
    // Element#checkVisibility is unsupported
    displayCheck === 'full-native' || displayCheck === 'legacy-full') {
        if (typeof getShadowRoot === 'function') {
            // figure out if we should consider the node to be in an undisclosed shadow and use the
            //  'non-zero-area' fallback
            var originalNode = node;
            while(node){
                var parentElement = node.parentElement;
                var rootNode = getRootNode(node);
                if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
                ) {
                    // node has an undisclosed shadow which means we can only treat it as a black box, so we
                    //  fall back to a non-zero-area test
                    return isZeroArea(node);
                } else if (node.assignedSlot) {
                    // iterate up slot
                    node = node.assignedSlot;
                } else if (!parentElement && rootNode !== node.ownerDocument) {
                    // cross shadow boundary
                    node = rootNode.host;
                } else {
                    // iterate up normal dom
                    node = parentElement;
                }
            }
            node = originalNode;
        }
        // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
        //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
        //  it might be a falsy value, which means shadow DOM support is disabled
        // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
        //  now we can just test to see if it would normally be visible or not, provided it's
        //  attached to the main document.
        // NOTE: We must consider case where node is inside a shadow DOM and given directly to
        //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.
        if (isNodeAttached(node)) {
            // this works wherever the node is: if there's at least one client rect, it's
            //  somehow displayed; it also covers the CSS 'display: contents' case where the
            //  node itself is hidden in place of its contents; and there's no need to search
            //  up the hierarchy either
            return !node.getClientRects().length;
        }
        // Else, the node isn't attached to the document, which means the `getClientRects()`
        //  API will __always__ return zero rects (this can happen, for example, if React
        //  is used to render nodes onto a detached tree, as confirmed in this thread:
        //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
        //
        // It also means that even window.getComputedStyle(node).display will return `undefined`
        //  because styles are only computed for nodes that are in the document.
        //
        // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
        //  somehow. Though it was never stated officially, anyone who has ever used tabbable
        //  APIs on nodes in detached containers has actually implicitly used tabbable in what
        //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
        //  considering __everything__ to be visible because of the innability to determine styles.
        //
        // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
        //  nodes as visible with the 'none' fallback.__
        if (displayCheck !== 'legacy-full') {
            return true; // hidden
        }
    // else, fallback to 'none' mode and consider the node visible
    } else if (displayCheck === 'non-zero-area') {
        // NOTE: Even though this tests that the node's client rect is non-zero to determine
        //  whether it's displayed, and that a detached node will __always__ have a zero-area
        //  client rect, we don't special-case for whether the node is attached or not. In
        //  this mode, we do want to consider nodes that have a zero area to be hidden at all
        //  times, and that includes attached or not.
        return isZeroArea(node);
    }
    // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
    //  it's visible
    return false;
};
// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        // check if `node` is contained in a disabled <fieldset>
        while(parentNode){
            if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
                // look for the first <legend> among the children of the disabled <fieldset>
                for(var i = 0; i < parentNode.children.length; i++){
                    var child = parentNode.children.item(i);
                    // when the first <legend> (in document order) is found
                    if (child.tagName === 'LEGEND') {
                        // if its parent <fieldset> is not nested in another disabled <fieldset>,
                        // return whether `node` is a descendant of its first <legend>
                        return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
                    }
                }
                // the disabled <fieldset> containing `node` has no <legend>
                return true;
            }
            parentNode = parentNode.parentElement;
        }
    }
    // else, node's tabbable/focusable state should not be affected by a fieldset's
    //  enabled/disabled state
    return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
    if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
    //  because we're limited in the type of selectors we can use in JSDom (see related
    //  note related to `candidateSelectors`)
    _isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
    }
    return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
    if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
    }
    return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
    var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
    if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
    }
    // If a custom element has an explicit negative tabindex,
    // browsers will not allow tab targeting said element's children.
    return false;
};
/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */ var _sortByOrder = function sortByOrder(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getSortOrderTabIndex(element, isScope);
        var elements = isScope ? _sortByOrder(item.candidates) : element;
        if (candidateTabindex === 0) {
            isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
            orderedTabbables.push({
                documentOrder: i,
                tabIndex: candidateTabindex,
                item: item,
                isScope: isScope,
                content: elements
            });
        }
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
    }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
        candidates = _getCandidatesIteratively([
            container
        ], options.includeContainer, {
            filter: isNodeMatchingSelectorTabbable.bind(null, options),
            flatten: false,
            getShadowRoot: options.getShadowRoot,
            shadowRootFilter: isShadowRootTabbable
        });
    } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    }
    return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
        candidates = _getCandidatesIteratively([
            container
        ], options.includeContainer, {
            filter: isNodeMatchingSelectorFocusable.bind(null, options),
            flatten: true,
            getShadowRoot: options.getShadowRoot
        });
    } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    }
    return candidates;
};
var isTabbable = function isTabbable(node, options) {
    options = options || {};
    if (!node) {
        throw new Error('No node provided');
    }
    if (matches.call(node, candidateSelector) === false) {
        return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
    options = options || {};
    if (!node) {
        throw new Error('No node provided');
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
};
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+core@1.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "autoUpdate",
    ()=>autoUpdate,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "platform",
    ()=>platform,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+core@1.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(referenceEl) : [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"];
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"];
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"];
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"];
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"];
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"];
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"];
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"];
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"];
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"];
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+react-dom@2.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size,
    "useFloating",
    ()=>useFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setReference]": (node)=>{
            if (node !== referenceRef.current) {
                referenceRef.current = node;
                _setReference(node);
            }
        }
    }["useFloating.useCallback[setReference]"], []);
    const setFloating = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setFloating]": (node)=>{
            if (node !== floatingRef.current) {
                floatingRef.current = node;
                _setFloating(node);
            }
        }
    }["useFloating.useCallback[setFloating]"], []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[update]": ()=>{
            if (!referenceRef.current || !floatingRef.current) {
                return;
            }
            const config = {
                placement,
                strategy,
                middleware: latestMiddleware
            };
            if (platformRef.current) {
                config.platform = platformRef.current;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(referenceRef.current, floatingRef.current, config).then({
                "useFloating.useCallback[update]": (data)=>{
                    const fullData = {
                        ...data,
                        // The floating element's position may be recomputed while it's closed
                        // but still mounted (such as when transitioning out). To ensure
                        // `isPositioned` will be `false` initially on the next open, avoid
                        // setting it to `true` when `open === false` (must be specified).
                        isPositioned: openRef.current !== false
                    };
                    if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                        dataRef.current = fullData;
                        __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useFloating.useCallback[update]": ()=>{
                                setData(fullData);
                            }
                        }["useFloating.useCallback[update]"]);
                    }
                }
            }["useFloating.useCallback[update]"]);
        }
    }["useFloating.useCallback[update]"], [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[refs]": ()=>({
                reference: referenceRef,
                floating: floatingRef,
                setReference,
                setFloating
            })
    }["useFloating.useMemo[refs]"], [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[elements]": ()=>({
                reference: referenceEl,
                floating: floatingEl
            })
    }["useFloating.useMemo[elements]"], [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[floatingStyles]": ()=>{
            const initialStyles = {
                position: strategy,
                left: 0,
                top: 0
            };
            if (!elements.floating) {
                return initialStyles;
            }
            const x = roundByDPR(elements.floating, data.x);
            const y = roundByDPR(elements.floating, data.y);
            if (transform) {
                return {
                    ...initialStyles,
                    transform: "translate(" + x + "px, " + y + "px)",
                    ...getDPR(elements.floating) >= 1.5 && {
                        willChange: 'transform'
                    }
                };
            }
            return {
                position: strategy,
                left: x,
                top: y
            };
        }
    }["useFloating.useMemo[floatingStyles]"], [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo": ()=>({
                ...data,
                update,
                refs,
                elements,
                floatingStyles
            })
    }["useFloating.useMemo"], [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options, deps)=>({
        ...arrow$1(options),
        options: [
            options,
            deps
        ]
    });
;
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    outline: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    },
    filled: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "none"
    }
};
;
 //# sourceMappingURL=defaultAttributes.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createReactComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)");
;
;
const createReactComponent = (type, iconName, iconNamePascal, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][type],
            width: size,
            height: size,
            className: [
                `tabler-icon`,
                `tabler-icon-${iconName}`,
                className
            ].join(" "),
            ...type === "filled" ? {
                fill: color
            } : {
                strokeWidth: stroke,
                stroke: color
            },
            ...rest
        }, [
            title && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("title", {
                key: "svg-title"
            }, title),
            ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
            ...Array.isArray(children) ? children : [
                children
            ]
        ]));
    Component.displayName = `${iconNamePascal}`;
    return Component;
};
;
 //# sourceMappingURL=createReactComponent.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconCalendar.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M16 3v4",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M8 3v4",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M4 11h16",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M11 15h1",
            "key": "svg-4"
        }
    ],
    [
        "path",
        {
            "d": "M12 15v3",
            "key": "svg-5"
        }
    ]
];
const IconCalendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "calendar", "Calendar", __iconNode);
;
 //# sourceMappingURL=IconCalendar.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconCalendar.mjs [app-client] (ecmascript) <export default as IconCalendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCalendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCalendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCalendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconCalendar.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconPlus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M12 5l0 14",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M5 12l14 0",
            "key": "svg-1"
        }
    ]
];
const IconPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "plus", "Plus", __iconNode);
;
 //# sourceMappingURL=IconPlus.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconPlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
            "key": "svg-1"
        }
    ]
];
const IconUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "user", "User", __iconNode);
;
 //# sourceMappingURL=IconUser.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUser.mjs [app-client] (ecmascript) <export default as IconUser>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconUser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUser.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M21 21l-6 -6",
            "key": "svg-1"
        }
    ]
];
const IconSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "search", "Search", __iconNode);
;
 //# sourceMappingURL=IconSearch.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSearch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M15 6l-6 6l6 6",
            "key": "svg-0"
        }
    ]
];
const IconChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "chevron-left", "ChevronLeft", __iconNode);
;
 //# sourceMappingURL=IconChevronLeft.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-client] (ecmascript) <export default as IconChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M9 6l6 6l-6 6",
            "key": "svg-0"
        }
    ]
];
const IconChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "chevron-right", "ChevronRight", __iconNode);
;
 //# sourceMappingURL=IconChevronRight.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript) <export default as IconChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconMenu2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M4 6l16 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M4 12l16 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M4 18l16 0",
            "key": "svg-2"
        }
    ]
];
const IconMenu2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "menu-2", "Menu2", __iconNode);
;
 //# sourceMappingURL=IconMenu2.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript) <export default as IconMenu2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMenu2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconStethoscope.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconStethoscope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M8 15a6 6 0 1 0 12 0v-3",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M11 3v2",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M6 3v2",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
            "key": "svg-4"
        }
    ]
];
const IconStethoscope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "stethoscope", "Stethoscope", __iconNode);
;
 //# sourceMappingURL=IconStethoscope.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconStethoscope.mjs [app-client] (ecmascript) <export default as IconStethoscope>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconStethoscope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconStethoscope.mjs [app-client] (ecmascript)");
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IconUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            "d": "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M16 3.13a4 4 0 0 1 0 7.75",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M21 21v-2a4 4 0 0 0 -3 -3.85",
            "key": "svg-3"
        }
    ]
];
const IconUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "users", "Users", __iconNode);
;
 //# sourceMappingURL=IconUsers.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconUsers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=4b100__pnpm_be9e8ab7._.js.map