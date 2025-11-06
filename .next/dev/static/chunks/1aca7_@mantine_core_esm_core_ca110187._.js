(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultZIndex",
    ()=>getDefaultZIndex
]);
'use client';
const elevations = {
    app: 100,
    modal: 200,
    popover: 300,
    overlay: 400,
    max: 9999
};
function getDefaultZIndex(level) {
    return elevations[level];
}
;
 //# sourceMappingURL=get-default-z-index.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createVarsResolver",
    ()=>createVarsResolver
]);
'use client';
function createVarsResolver(resolver) {
    return resolver;
}
;
 //# sourceMappingURL=create-vars-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterProps",
    ()=>filterProps
]);
'use client';
function filterProps(props) {
    return Object.keys(props).reduce((acc, key)=>{
        if (props[key] !== void 0) {
            acc[key] = props[key];
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=filter-props.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProps",
    ()=>useProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useProps(component, defaultProps, props) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const contextPropsPayload = theme.components[component]?.defaultProps;
    const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
    return {
        ...defaultProps,
        ...contextProps,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(props)
    };
}
;
 //# sourceMappingURL=use-props.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOCUS_CLASS_NAMES",
    ()=>FOCUS_CLASS_NAMES,
    "getGlobalClassNames",
    ()=>getGlobalClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
const FOCUS_CLASS_NAMES = {
    always: "mantine-focus-always",
    auto: "mantine-focus-auto",
    never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]), options?.active && !unstyled && theme.activeClassName);
}
;
 //# sourceMappingURL=get-global-class-names.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveClassNames",
    ()=>resolveClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
    const merged = {};
    objects.forEach((obj)=>{
        Object.entries(obj).forEach(([key, value])=>{
            if (merged[key]) {
                merged[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(merged[key], value);
            } else {
                merged[key] = value;
            }
        });
    });
    return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
    const arrayClassNames = Array.isArray(classNames) ? classNames : [
        classNames
    ];
    const resolvedClassNames = arrayClassNames.map((item)=>typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES);
    return mergeClassNames(resolvedClassNames);
}
;
 //# sourceMappingURL=resolve-class-names.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOptionsClassNames",
    ()=>getOptionsClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
'use client';
;
function getOptionsClassNames({ selector, stylesCtx, options, props, theme }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
        theme,
        classNames: options?.classNames,
        props: options?.props || props,
        stylesCtx
    })[selector];
}
;
 //# sourceMappingURL=get-options-class-names.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getResolvedClassNames",
    ()=>getResolvedClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
'use client';
;
function getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
        theme,
        classNames,
        props,
        stylesCtx
    })[selector];
}
;
 //# sourceMappingURL=get-resolved-class-names.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRootClassName",
    ()=>getRootClassName
]);
'use client';
function getRootClassName({ rootSelector, selector, className }) {
    return rootSelector === selector ? className : void 0;
}
;
 //# sourceMappingURL=get-root-class-name.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSelectorClassName",
    ()=>getSelectorClassName
]);
'use client';
function getSelectorClassName({ selector, classes, unstyled }) {
    return unstyled ? void 0 : classes[selector];
}
;
 //# sourceMappingURL=get-selector-class-name.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStaticClassNames",
    ()=>getStaticClassNames
]);
'use client';
function getStaticClassNames({ themeName, classNamesPrefix, selector, withStaticClass }) {
    if (withStaticClass === false) {
        return [];
    }
    return themeName.map((n)=>`${classNamesPrefix}-${n}-${selector}`);
}
;
 //# sourceMappingURL=get-static-class-names.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemeClassNames",
    ()=>getThemeClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
'use client';
;
function getThemeClassNames({ themeName, theme, selector, props, stylesCtx }) {
    return themeName.map((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
            theme,
            classNames: theme.components[n]?.classNames,
            props,
            stylesCtx
        })?.[selector]);
}
;
 //# sourceMappingURL=get-theme-class-names.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariantClassName",
    ()=>getVariantClassName
]);
'use client';
function getVariantClassName({ options, classes, selector, unstyled }) {
    return options?.variant && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}
;
 //# sourceMappingURL=get-variant-class-name.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClassName",
    ()=>getClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$global$2d$class$2d$names$2f$get$2d$global$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$options$2d$class$2d$names$2f$get$2d$options$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$static$2d$class$2d$names$2f$get$2d$static$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$theme$2d$class$2d$names$2f$get$2d$theme$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function getClassName({ theme, options, themeName, selector, classNamesPrefix, classNames, classes, unstyled, className, rootSelector, props, stylesCtx, withStaticClasses, headless, transformedStyles }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$global$2d$class$2d$names$2f$get$2d$global$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalClassNames"])({
        theme,
        options,
        unstyled: unstyled || headless
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$theme$2d$class$2d$names$2f$get$2d$theme$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeClassNames"])({
        theme,
        themeName,
        selector,
        props,
        stylesCtx
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantClassName"])({
        options,
        classes,
        selector,
        unstyled
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedClassNames"])({
        selector,
        stylesCtx,
        theme,
        classNames,
        props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedClassNames"])({
        selector,
        stylesCtx,
        theme,
        classNames: transformedStyles,
        props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$options$2d$class$2d$names$2f$get$2d$options$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionsClassNames"])({
        selector,
        stylesCtx,
        options,
        props,
        theme
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootClassName"])({
        rootSelector,
        selector,
        className
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectorClassName"])({
        selector,
        classes,
        unstyled: unstyled || headless
    }), withStaticClasses && !headless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$static$2d$class$2d$names$2f$get$2d$static$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStaticClassNames"])({
        themeName,
        classNamesPrefix,
        selector,
        withStaticClass: options?.withStaticClass
    }), options?.className);
}
;
 //# sourceMappingURL=get-class-name.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveStyles",
    ()=>resolveStyles
]);
'use client';
function resolveStyles({ theme, styles, props, stylesCtx }) {
    const arrayStyles = Array.isArray(styles) ? styles : [
        styles
    ];
    return arrayStyles.reduce((acc, style)=>{
        if (typeof style === "function") {
            return {
                ...acc,
                ...style(theme, props, stylesCtx)
            };
        }
        return {
            ...acc,
            ...style
        };
    }, {});
}
;
 //# sourceMappingURL=resolve-styles.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemeStyles",
    ()=>getThemeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)");
'use client';
;
function getThemeStyles({ theme, themeName, props, stylesCtx, selector }) {
    return themeName.map((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles: theme.components[n]?.styles,
            props,
            stylesCtx
        })[selector]).reduce((acc, val)=>({
            ...acc,
            ...val
        }), {});
}
;
 //# sourceMappingURL=get-theme-styles.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveStyle",
    ()=>resolveStyle
]);
'use client';
function resolveStyle({ style, theme }) {
    if (Array.isArray(style)) {
        return [
            ...style
        ].reduce((acc, item)=>({
                ...acc,
                ...resolveStyle({
                    style: item,
                    theme
                })
            }), {});
    }
    if (typeof style === "function") {
        return style(theme);
    }
    if (style == null) {
        return {};
    }
    return style;
}
;
 //# sourceMappingURL=resolve-style.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeVars",
    ()=>mergeVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function mergeVars(vars) {
    return vars.reduce((acc, current)=>{
        if (current) {
            Object.keys(current).forEach((key)=>{
                acc[key] = {
                    ...acc[key],
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(current[key])
                };
            });
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=merge-vars.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveVars",
    ()=>resolveVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$merge$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs [app-client] (ecmascript)");
'use client';
;
function resolveVars({ vars, varsResolver, theme, props, stylesCtx, selector, themeName, headless }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$merge$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeVars"])([
        headless ? {} : varsResolver?.(theme, props, stylesCtx),
        ...themeName.map((name)=>theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
        vars?.(theme, props, stylesCtx)
    ])?.[selector];
}
;
 //# sourceMappingURL=resolve-vars.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStyle",
    ()=>getStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$theme$2d$styles$2f$get$2d$theme$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$resolve$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function getStyle({ theme, themeName, selector, options, props, stylesCtx, rootSelector, styles, style, vars, varsResolver, headless, withStylesTransform }) {
    return {
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$theme$2d$styles$2f$get$2d$theme$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeStyles"])({
            theme,
            themeName,
            props,
            stylesCtx,
            selector
        }),
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles,
            props,
            stylesCtx
        })[selector],
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles: options?.styles,
            props: options?.props || props,
            stylesCtx
        })[selector],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$resolve$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVars"])({
            theme,
            props,
            stylesCtx,
            vars,
            varsResolver,
            selector,
            themeName,
            headless
        }),
        ...rootSelector === selector ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyle"])({
            style,
            theme
        }) : null,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyle"])({
            style: options?.style,
            theme
        })
    };
}
;
 //# sourceMappingURL=get-style.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStylesTransform",
    ()=>useStylesTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function useStylesTransform({ props, stylesCtx, themeName }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const stylesTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineStylesTransform"])()?.();
    const getTransformedStyles = (styles)=>{
        if (!stylesTransform) {
            return [];
        }
        const transformedStyles = styles.map((style)=>stylesTransform(style, {
                props,
                theme,
                ctx: stylesCtx
            }));
        return [
            ...transformedStyles,
            ...themeName.map((n)=>stylesTransform(theme.components[n]?.styles, {
                    props,
                    theme,
                    ctx: stylesCtx
                }))
        ].filter(Boolean);
    };
    return {
        getTransformedStyles,
        withStylesTransform: !!stylesTransform
    };
}
;
 //# sourceMappingURL=use-transformed-styles.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStyles",
    ()=>useStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$transformed$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs [app-client] (ecmascript)");
'use client';
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
function useStyles({ name, classes, props, stylesCtx, className, style, rootSelector = "root", unstyled, classNames, styles, vars, varsResolver, attributes }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const classNamesPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineClassNamesPrefix"])();
    const withStaticClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineWithStaticClasses"])();
    const headless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineIsHeadless"])();
    const themeName = (Array.isArray(name) ? name : [
        name
    ]).filter((n)=>n);
    const { withStylesTransform, getTransformedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$transformed$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStylesTransform"])({
        props,
        stylesCtx,
        themeName
    });
    return (selector, options)=>({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClassName"])({
                theme,
                options,
                themeName,
                selector,
                classNamesPrefix,
                classNames,
                classes,
                unstyled,
                className,
                rootSelector,
                props,
                stylesCtx,
                withStaticClasses,
                headless,
                transformedStyles: getTransformedStyles([
                    options?.styles,
                    styles
                ])
            }),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyle"])({
                theme,
                themeName,
                selector,
                options,
                props,
                stylesCtx,
                rootSelector,
                styles,
                style,
                vars,
                varsResolver,
                headless,
                withStylesTransform
            }),
            ...attributes?.[selector]
        });
}
;
 //# sourceMappingURL=use-styles.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPolymorphicComponent",
    ()=>createPolymorphicComponent
]);
function createPolymorphicComponent(component) {
    return component;
}
;
 //# sourceMappingURL=create-polymorphic-component.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelToKebabCase",
    ()=>camelToKebabCase
]);
'use client';
function camelToKebabCase(value) {
    return value.replace(/[A-Z]/g, (letter)=>`-${letter.toLowerCase()}`);
}
;
 //# sourceMappingURL=camel-to-kebab-case.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssObjectToString",
    ()=>cssObjectToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$camel$2d$to$2d$kebab$2d$case$2f$camel$2d$to$2d$kebab$2d$case$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function cssObjectToString(css) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(css).reduce((acc, rule)=>css[rule] !== void 0 ? `${acc}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$camel$2d$to$2d$kebab$2d$case$2f$camel$2d$to$2d$kebab$2d$case$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToKebabCase"])(rule)}:${css[rule]};` : acc, "").trim();
}
;
 //# sourceMappingURL=css-object-to-string.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesToString",
    ()=>stylesToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs [app-client] (ecmascript)");
'use client';
;
function stylesToString({ selector, styles, media, container }) {
    const baseStyles = styles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssObjectToString"])(styles) : "";
    const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item)=>`@media${item.query}{${selector}{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssObjectToString"])(item.styles)}}}`);
    const containerStyles = !Array.isArray(container) ? [] : container.map((item)=>`@container ${item.query}{${selector}{${(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssObjectToString"])(item.styles)}}}`);
    return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}
;
 //# sourceMappingURL=styles-to-string.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineStyles",
    ()=>InlineStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$styles$2d$to$2d$string$2f$styles$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs [app-client] (ecmascript)");
'use client';
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
function InlineStyles(props) {
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineStyleNonce"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
        "data-mantine-styles": "inline",
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$styles$2d$to$2d$string$2f$styles$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesToString"])(props)
        }
    });
}
;
 //# sourceMappingURL=InlineStyles.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumberLike",
    ()=>isNumberLike
]);
'use client';
function isNumberLike(value) {
    if (typeof value === "number") {
        return true;
    }
    if (typeof value === "string") {
        if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
            return true;
        }
        const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
        const values = value.trim().split(/\s+/);
        return values.every((val)=>cssUnitsRegex.test(val));
    }
    return false;
}
;
 //# sourceMappingURL=is-number-like.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBoxMod",
    ()=>getBoxMod,
    "getMod",
    ()=>getMod
]);
'use client';
function transformModKey(key) {
    return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
    return Object.keys(props).reduce((acc, key)=>{
        const value = props[key];
        if (value === void 0 || value === "" || value === false || value === null) {
            return acc;
        }
        acc[transformModKey(key)] = props[key];
        return acc;
    }, {});
}
function getBoxMod(mod) {
    if (!mod) {
        return null;
    }
    if (typeof mod === "string") {
        return {
            [transformModKey(mod)]: true
        };
    }
    if (Array.isArray(mod)) {
        return [
            ...mod
        ].reduce((acc, value)=>({
                ...acc,
                ...getBoxMod(value)
            }), {});
    }
    return getMod(mod);
}
;
 //# sourceMappingURL=get-box-mod.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBoxStyle",
    ()=>getBoxStyle
]);
'use client';
function mergeStyles(styles, theme) {
    if (Array.isArray(styles)) {
        return [
            ...styles
        ].reduce((acc, item)=>({
                ...acc,
                ...mergeStyles(item, theme)
            }), {});
    }
    if (typeof styles === "function") {
        return styles(theme);
    }
    if (styles == null) {
        return {};
    }
    return styles;
}
function getBoxStyle({ theme, style, vars, styleProps }) {
    const _style = mergeStyles(style, theme);
    const _vars = mergeStyles(vars, theme);
    return {
        ..._style,
        ..._vars,
        ...styleProps
    };
}
;
 //# sourceMappingURL=get-box-style.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractStyleProps",
    ()=>extractStyleProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function extractStyleProps(others) {
    const { m, mx, my, mt, mb, ml, mr, me, ms, p, px, py, pt, pb, pl, pr, pe, ps, bd, bdrs, bg, c, opacity, ff, fz, fw, lts, ta, lh, fs, tt, td, w, miw, maw, h, mih, mah, bgsz, bgp, bgr, bga, pos, top, left, bottom, right, inset, display, flex, hiddenFrom, visibleFrom, lightHidden, darkHidden, sx, ...rest } = others;
    const styleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])({
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        me,
        ms,
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        pe,
        ps,
        bd,
        bg,
        c,
        opacity,
        ff,
        fz,
        fw,
        lts,
        ta,
        lh,
        fs,
        tt,
        td,
        w,
        miw,
        maw,
        h,
        mih,
        mah,
        bgsz,
        bgp,
        bgr,
        bga,
        pos,
        top,
        left,
        bottom,
        right,
        inset,
        display,
        flex,
        bdrs,
        hiddenFrom,
        visibleFrom,
        lightHidden,
        darkHidden,
        sx
    });
    return {
        styleProps,
        rest
    };
}
;
 //# sourceMappingURL=extract-style-props.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STYlE_PROPS_DATA",
    ()=>STYlE_PROPS_DATA
]);
'use client';
const STYlE_PROPS_DATA = {
    m: {
        type: "spacing",
        property: "margin"
    },
    mt: {
        type: "spacing",
        property: "marginTop"
    },
    mb: {
        type: "spacing",
        property: "marginBottom"
    },
    ml: {
        type: "spacing",
        property: "marginLeft"
    },
    mr: {
        type: "spacing",
        property: "marginRight"
    },
    ms: {
        type: "spacing",
        property: "marginInlineStart"
    },
    me: {
        type: "spacing",
        property: "marginInlineEnd"
    },
    mx: {
        type: "spacing",
        property: "marginInline"
    },
    my: {
        type: "spacing",
        property: "marginBlock"
    },
    p: {
        type: "spacing",
        property: "padding"
    },
    pt: {
        type: "spacing",
        property: "paddingTop"
    },
    pb: {
        type: "spacing",
        property: "paddingBottom"
    },
    pl: {
        type: "spacing",
        property: "paddingLeft"
    },
    pr: {
        type: "spacing",
        property: "paddingRight"
    },
    ps: {
        type: "spacing",
        property: "paddingInlineStart"
    },
    pe: {
        type: "spacing",
        property: "paddingInlineEnd"
    },
    px: {
        type: "spacing",
        property: "paddingInline"
    },
    py: {
        type: "spacing",
        property: "paddingBlock"
    },
    bd: {
        type: "border",
        property: "border"
    },
    bdrs: {
        type: "radius",
        property: "borderRadius"
    },
    bg: {
        type: "color",
        property: "background"
    },
    c: {
        type: "textColor",
        property: "color"
    },
    opacity: {
        type: "identity",
        property: "opacity"
    },
    ff: {
        type: "fontFamily",
        property: "fontFamily"
    },
    fz: {
        type: "fontSize",
        property: "fontSize"
    },
    fw: {
        type: "identity",
        property: "fontWeight"
    },
    lts: {
        type: "size",
        property: "letterSpacing"
    },
    ta: {
        type: "identity",
        property: "textAlign"
    },
    lh: {
        type: "lineHeight",
        property: "lineHeight"
    },
    fs: {
        type: "identity",
        property: "fontStyle"
    },
    tt: {
        type: "identity",
        property: "textTransform"
    },
    td: {
        type: "identity",
        property: "textDecoration"
    },
    w: {
        type: "spacing",
        property: "width"
    },
    miw: {
        type: "spacing",
        property: "minWidth"
    },
    maw: {
        type: "spacing",
        property: "maxWidth"
    },
    h: {
        type: "spacing",
        property: "height"
    },
    mih: {
        type: "spacing",
        property: "minHeight"
    },
    mah: {
        type: "spacing",
        property: "maxHeight"
    },
    bgsz: {
        type: "size",
        property: "backgroundSize"
    },
    bgp: {
        type: "identity",
        property: "backgroundPosition"
    },
    bgr: {
        type: "identity",
        property: "backgroundRepeat"
    },
    bga: {
        type: "identity",
        property: "backgroundAttachment"
    },
    pos: {
        type: "identity",
        property: "position"
    },
    top: {
        type: "size",
        property: "top"
    },
    left: {
        type: "size",
        property: "left"
    },
    bottom: {
        type: "size",
        property: "bottom"
    },
    right: {
        type: "size",
        property: "right"
    },
    inset: {
        type: "size",
        property: "inset"
    },
    display: {
        type: "identity",
        property: "display"
    },
    flex: {
        type: "identity",
        property: "flex"
    }
};
;
 //# sourceMappingURL=style-props-data.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorResolver",
    ()=>colorResolver,
    "textColorResolver",
    ()=>textColorResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
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
function colorResolver(color, theme) {
    const parsedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    if (parsedColor.color === "dimmed") {
        return "var(--mantine-color-dimmed)";
    }
    if (parsedColor.color === "bright") {
        return "var(--mantine-color-bright)";
    }
    return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
    const parsedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
        return `var(--mantine-color-${parsedColor.color}-text)`;
    }
    return colorResolver(color, theme);
}
;
 //# sourceMappingURL=color-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "borderResolver",
    ()=>borderResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function borderResolver(value, theme) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        const [size, style, ...colorTuple] = value.split(" ").filter((val)=>val.trim() !== "");
        let result = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(size)}`;
        style && (result += ` ${style}`);
        colorTuple.length > 0 && (result += ` ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorResolver"])(colorTuple.join(" "), theme)}`);
        return result.trim();
    }
    return value;
}
;
 //# sourceMappingURL=border-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fontFamilyResolver",
    ()=>fontFamilyResolver
]);
'use client';
const values = {
    text: "var(--mantine-font-family)",
    mono: "var(--mantine-font-family-monospace)",
    monospace: "var(--mantine-font-family-monospace)",
    heading: "var(--mantine-font-family-headings)",
    headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
    if (typeof fontFamily === "string" && fontFamily in values) {
        return values[fontFamily];
    }
    return fontFamily;
}
;
 //# sourceMappingURL=font-family-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fontSizeResolver",
    ()=>fontSizeResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
function fontSizeResolver(value, theme) {
    if (typeof value === "string" && value in theme.fontSizes) {
        return `var(--mantine-font-size-${value})`;
    }
    if (typeof value === "string" && headings.includes(value)) {
        return `var(--mantine-${value}-font-size)`;
    }
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=font-size-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "identityResolver",
    ()=>identityResolver
]);
'use client';
function identityResolver(value) {
    return value;
}
;
 //# sourceMappingURL=identity-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lineHeightResolver",
    ()=>lineHeightResolver
]);
'use client';
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
function lineHeightResolver(value, theme) {
    if (typeof value === "string" && value in theme.lineHeights) {
        return `var(--mantine-line-height-${value})`;
    }
    if (typeof value === "string" && headings.includes(value)) {
        return `var(--mantine-${value}-line-height)`;
    }
    return value;
}
;
 //# sourceMappingURL=line-height-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/radius-resolver/radius-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "radiusResolver",
    ()=>radiusResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function radiusResolver(value, theme) {
    if (typeof value === "string" && value in theme.radius) {
        return `var(--mantine-radius-${value})`;
    }
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=radius-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sizeResolver",
    ()=>sizeResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function sizeResolver(value) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=size-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacingResolver",
    ()=>spacingResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function spacingResolver(value, theme) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        const mod = value.replace("-", "");
        if (!(mod in theme.spacing)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
        }
        const variable = `--mantine-spacing-${mod}`;
        return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
    }
    return value;
}
;
 //# sourceMappingURL=spacing-resolver.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvers",
    ()=>resolvers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$border$2d$resolver$2f$border$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$family$2d$resolver$2f$font$2d$family$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$size$2d$resolver$2f$font$2d$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$identity$2d$resolver$2f$identity$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$line$2d$height$2d$resolver$2f$line$2d$height$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$radius$2d$resolver$2f$radius$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/radius-resolver/radius-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$size$2d$resolver$2f$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$spacing$2d$resolver$2f$spacing$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const resolvers = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorResolver"],
    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColorResolver"],
    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$size$2d$resolver$2f$font$2d$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSizeResolver"],
    spacing: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$spacing$2d$resolver$2f$spacing$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacingResolver"],
    radius: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$radius$2d$resolver$2f$radius$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiusResolver"],
    identity: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$identity$2d$resolver$2f$identity$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identityResolver"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$size$2d$resolver$2f$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeResolver"],
    lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$line$2d$height$2d$resolver$2f$line$2d$height$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeightResolver"],
    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$family$2d$resolver$2f$font$2d$family$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontFamilyResolver"],
    border: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$border$2d$resolver$2f$border$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderResolver"]
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sortMediaQueries",
    ()=>sortMediaQueries
]);
'use client';
function replaceMediaQuery(query) {
    return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({ media, ...props }) {
    const breakpoints = Object.keys(media);
    const sortedMedia = breakpoints.sort((a, b)=>Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query)=>({
            query,
            styles: media[query]
        }));
    return {
        ...props,
        media: sortedMedia
    };
}
;
 //# sourceMappingURL=sort-media-queries.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseStyleProps",
    ()=>parseStyleProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$sort$2d$media$2d$queries$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function hasResponsiveStyles(styleProp) {
    if (typeof styleProp !== "object" || styleProp === null) {
        return false;
    }
    const breakpoints = Object.keys(styleProp);
    if (breakpoints.length === 1 && breakpoints[0] === "base") {
        return false;
    }
    return true;
}
function getBaseValue(value) {
    if (typeof value === "object" && value !== null) {
        if ("base" in value) {
            return value.base;
        }
        return void 0;
    }
    return value;
}
function getBreakpointKeys(value) {
    if (typeof value === "object" && value !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(value).filter((key)=>key !== "base");
    }
    return [];
}
function getBreakpointValue(value, breakpoint) {
    if (typeof value === "object" && value !== null && breakpoint in value) {
        return value[breakpoint];
    }
    return value;
}
function parseStyleProps({ styleProps, data, theme }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$sort$2d$media$2d$queries$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortMediaQueries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(styleProps).reduce((acc, styleProp)=>{
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
            return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [
            propertyData.property
        ];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
            properties.forEach((property)=>{
                acc.inlineStyles[property] = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](baseValue, theme);
            });
            return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property)=>{
            if (baseValue != null) {
                acc.styles[property] = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](baseValue, theme);
            }
            breakpoints.forEach((breakpoint)=>{
                const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
                acc.media[bp] = {
                    ...acc.media[bp],
                    [property]: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](getBreakpointValue(styleProps[styleProp], breakpoint), theme)
                };
            });
        });
        return acc;
    }, {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
    }));
}
;
 //# sourceMappingURL=parse-style-props.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRandomClassName",
    ()=>useRandomClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useRandomClassName() {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/[:«»]/g, "");
    return `__m__-${id}`;
}
;
 //# sourceMappingURL=use-random-classname.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>Box
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$mod$2f$get$2d$box$2d$mod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$style$2f$get$2d$box$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$style$2d$props$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$parse$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-client] (ecmascript)");
'use client';
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
;
;
;
;
;
;
;
const _Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom, lightHidden, darkHidden, renderRoot, __size, ...others }, ref)=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const Element = component || "div";
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStyleProps"])(others);
    const useSxTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineSxTransform"])();
    const transformedSx = useSxTransform?.()?.(styleProps.sx);
    const responsiveClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandomClassName"])();
    const parsedStyleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$parse$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStyleProps"])({
        styleProps,
        theme,
        data: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$style$2d$props$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STYlE_PROPS_DATA"]
    });
    const props = {
        ref,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$style$2f$get$2d$box$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoxStyle"])({
            theme,
            style,
            vars: __vars,
            styleProps: parsedStyleProps.inlineStyles
        }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, transformedSx, {
            [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
            "mantine-light-hidden": lightHidden,
            "mantine-dark-hidden": darkHidden,
            [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
            [`mantine-visible-from-${visibleFrom}`]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumberLike"])(size) ? void 0 : size || void 0,
        size: __size,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$mod$2f$get$2d$box$2d$mod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoxMod"])(mod),
        ...rest
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineStyles"], {
                selector: `.${responsiveClassName}`,
                styles: parsedStyleProps.styles,
                media: parsedStyleProps.media
            }),
            typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Element, {
                ...props
            })
        ]
    });
});
_Box.displayName = "@mantine/core/Box";
const Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPolymorphicComponent"])(_Box);
;
 //# sourceMappingURL=Box.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "factory",
    ()=>factory,
    "getWithProps",
    ()=>getWithProps,
    "identity",
    ()=>identity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function identity(value) {
    return value;
}
function getWithProps(Component) {
    const _Component = Component;
    return (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = _Component.extend;
        Extended.displayName = `WithProps(${_Component.displayName})`;
        return Extended;
    };
}
function factory(ui) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ui);
    Component.extend = identity;
    Component.withProps = (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = Component.extend;
        Extended.displayName = `WithProps(${Component.displayName})`;
        return Extended;
    };
    return Component;
}
;
 //# sourceMappingURL=factory.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSafeContext",
    ()=>createSafeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function createSafeContext(errorMessage) {
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
    const useSafeContext = ()=>{
        const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
        if (ctx === null) {
            throw new Error(errorMessage);
        }
        return ctx;
    };
    const Provider = ({ children, value })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    return [
        Provider,
        useSafeContext
    ];
}
;
 //# sourceMappingURL=create-safe-context.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBreakpointValue",
    ()=>getBreakpointValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs [app-client] (ecmascript)");
'use client';
;
;
function getBreakpointValue(breakpoint, breakpoints) {
    if (breakpoint in breakpoints) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"])(breakpoints[breakpoint]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"])(breakpoint);
}
;
 //# sourceMappingURL=get-breakpoint-value.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSortedBreakpoints",
    ()=>getSortedBreakpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-client] (ecmascript)");
'use client';
;
function getSortedBreakpoints(values, breakpoints) {
    const convertedBreakpoints = values.map((breakpoint)=>({
            value: breakpoint,
            px: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBreakpointValue"])(breakpoint, breakpoints)
        }));
    convertedBreakpoints.sort((a, b)=>a.px - b.px);
    return convertedBreakpoints;
}
;
 //# sourceMappingURL=get-sorted-breakpoints.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFontSize",
    ()=>getFontSize,
    "getLineHeight",
    ()=>getLineHeight,
    "getRadius",
    ()=>getRadius,
    "getShadow",
    ()=>getShadow,
    "getSize",
    ()=>getSize,
    "getSpacing",
    ()=>getSpacing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
'use client';
;
;
function getSize(size, prefix = "size", convertToRem = true) {
    if (size === void 0) {
        return void 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumberLike"])(size) ? convertToRem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
    return getSize(size, "mantine-spacing");
}
function getRadius(size) {
    if (size === void 0) {
        return "var(--mantine-radius-default)";
    }
    return getSize(size, "mantine-radius");
}
function getFontSize(size) {
    return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
    return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
    if (!size) {
        return void 0;
    }
    return getSize(size, "mantine-shadow", false);
}
;
 //# sourceMappingURL=get-size.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "polymorphicFactory",
    ()=>polymorphicFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function polymorphicFactory(ui) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ui);
    Component.withProps = (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = Component.extend;
        Extended.displayName = `WithProps(${Component.displayName})`;
        return Extended;
    };
    Component.extend = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    return Component;
}
;
 //# sourceMappingURL=polymorphic-factory.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findElementAncestor",
    ()=>findElementAncestor
]);
'use client';
function findElementAncestor(element, selector) {
    let _element = element;
    while((_element = _element.parentElement) && !_element.matches(selector)){}
    return _element;
}
;
 //# sourceMappingURL=find-element-ancestor.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-context-item-index/get-context-item-index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContextItemIndex",
    ()=>getContextItemIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs [app-client] (ecmascript)");
'use client';
;
function getContextItemIndex(elementSelector, parentSelector, node) {
    if (!node) {
        return null;
    }
    return Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findElementAncestor"])(node, parentSelector)?.querySelectorAll(elementSelector) || []).findIndex((element)=>element === node);
}
;
 //# sourceMappingURL=get-context-item-index.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResolvedStylesApi",
    ()=>useResolvedStylesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)");
'use client';
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
function useResolvedStylesApi({ classNames, styles, props, stylesCtx }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    return {
        resolvedClassNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
            theme,
            classNames,
            props,
            stylesCtx: stylesCtx || void 0
        }),
        resolvedStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles,
            props,
            stylesCtx: stylesCtx || void 0
        })
    };
}
;
 //# sourceMappingURL=use-resolved-styles-api.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionContext",
    ()=>DirectionContext,
    "DirectionProvider",
    ()=>DirectionProvider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$mutation$2d$observer$2f$use$2d$mutation$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+hooks@8.3.6_react@19.2.0/node_modules/@mantine/hooks/esm/use-mutation-observer/use-mutation-observer.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const DirectionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    dir: "ltr",
    toggleDirection: ()=>{},
    setDirection: ()=>{}
});
function useDirection() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DirectionContext);
}
function DirectionProvider({ children, initialDirection = "ltr", detectDirection = true }) {
    const [dir, setDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDirection);
    const setDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DirectionProvider.useCallback[setDirection]": (direction)=>{
            setDir(direction);
            if (document.documentElement.getAttribute("dir") !== direction) {
                document.documentElement.setAttribute("dir", direction);
            }
        }
    }["DirectionProvider.useCallback[setDirection]"], []);
    const toggleDirection = ()=>setDirection(dir === "ltr" ? "rtl" : "ltr");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "DirectionProvider.useIsomorphicEffect": ()=>{
            if (detectDirection) {
                const direction = document.documentElement.getAttribute("dir");
                if (direction === "rtl" || direction === "ltr") {
                    setDir(direction);
                }
            }
        }
    }["DirectionProvider.useIsomorphicEffect"], []);
    const mutationCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DirectionProvider.useCallback[mutationCallback]": ()=>{
            if (typeof document === "undefined") {
                return;
            }
            const direction = document.documentElement.getAttribute("dir");
            if (direction === "rtl" || direction === "ltr") {
                setDir({
                    "DirectionProvider.useCallback[mutationCallback]": (prev)=>prev !== direction ? direction : prev
                }["DirectionProvider.useCallback[mutationCallback]"]);
            }
        }
    }["DirectionProvider.useCallback[mutationCallback]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$mutation$2d$observer$2f$use$2d$mutation$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutationObserver"])(mutationCallback, detectDirection ? {
        attributes: true,
        attributeFilter: [
            "dir"
        ]
    } : {}, typeof document !== "undefined" && detectDirection ? document.documentElement : null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: {
            dir,
            toggleDirection,
            setDirection
        },
        children
    });
}
;
 //# sourceMappingURL=DirectionProvider.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
'use client';
const noop = ()=>{};
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/close-on-escape/close-on-escape.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeOnEscape",
    ()=>closeOnEscape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-client] (ecmascript)");
'use client';
;
function closeOnEscape(callback, options = {
    active: true
}) {
    if (typeof callback !== "function" || !options.active) {
        return options.onKeyDown || __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    }
    return (event)=>{
        if (event.key === "Escape") {
            callback(event);
            options.onTrigger?.();
        }
    };
}
;
 //# sourceMappingURL=close-on-escape.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function isElement(value) {
    if (Array.isArray(value) || value === null) {
        return false;
    }
    if (typeof value === "object") {
        if (value.type === __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
            return false;
        }
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=is-element.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRefProp",
    ()=>getRefProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function getRefProp(element) {
    const version = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version;
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version !== "string") {
        return element?.ref;
    }
    if (version.startsWith("18.")) {
        return element?.ref;
    }
    return element?.props?.ref;
}
;
 //# sourceMappingURL=get-ref-prop.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventHandler",
    ()=>createEventHandler
]);
'use client';
function createEventHandler(parentEventHandler, eventHandler) {
    return (event)=>{
        parentEventHandler?.(event);
        eventHandler?.(event);
    };
}
;
 //# sourceMappingURL=create-event-handler.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScopedKeydownHandler",
    ()=>createScopedKeydownHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs [app-client] (ecmascript)");
'use client';
;
function getPreviousIndex(current, elements, loop) {
    for(let i = current - 1; i >= 0; i -= 1){
        if (!elements[i].disabled) {
            return i;
        }
    }
    if (loop) {
        for(let i = elements.length - 1; i > -1; i -= 1){
            if (!elements[i].disabled) {
                return i;
            }
        }
    }
    return current;
}
function getNextIndex(current, elements, loop) {
    for(let i = current + 1; i < elements.length; i += 1){
        if (!elements[i].disabled) {
            return i;
        }
    }
    if (loop) {
        for(let i = 0; i < elements.length; i += 1){
            if (!elements[i].disabled) {
                return i;
            }
        }
    }
    return current;
}
function onSameLevel(target, sibling, parentSelector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findElementAncestor"])(target, parentSelector) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findElementAncestor"])(sibling, parentSelector);
}
function createScopedKeydownHandler({ parentSelector, siblingSelector, onKeyDown, loop = true, activateOnFocus = false, dir = "rtl", orientation }) {
    return (event)=>{
        onKeyDown?.(event);
        const elements = Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$element$2d$ancestor$2f$find$2d$element$2d$ancestor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findElementAncestor"])(event.currentTarget, parentSelector)?.querySelectorAll(siblingSelector) || []).filter((node)=>onSameLevel(event.currentTarget, node, parentSelector));
        const current = elements.findIndex((el)=>event.currentTarget === el);
        const _nextIndex = getNextIndex(current, elements, loop);
        const _previousIndex = getPreviousIndex(current, elements, loop);
        const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
        const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
        switch(event.key){
            case "ArrowRight":
                {
                    if (orientation === "horizontal") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[nextIndex].focus();
                        activateOnFocus && elements[nextIndex].click();
                    }
                    break;
                }
            case "ArrowLeft":
                {
                    if (orientation === "horizontal") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[previousIndex].focus();
                        activateOnFocus && elements[previousIndex].click();
                    }
                    break;
                }
            case "ArrowUp":
                {
                    if (orientation === "vertical") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[_previousIndex].focus();
                        activateOnFocus && elements[_previousIndex].click();
                    }
                    break;
                }
            case "ArrowDown":
                {
                    if (orientation === "vertical") {
                        event.stopPropagation();
                        event.preventDefault();
                        elements[_nextIndex].focus();
                        activateOnFocus && elements[_nextIndex].click();
                    }
                    break;
                }
            case "Home":
                {
                    event.stopPropagation();
                    event.preventDefault();
                    !elements[0].disabled && elements[0].focus();
                    break;
                }
            case "End":
                {
                    event.stopPropagation();
                    event.preventDefault();
                    const last = elements.length - 1;
                    !elements[last].disabled && elements[last].focus();
                    break;
                }
        }
    };
}
;
 //# sourceMappingURL=create-scoped-keydown-handler.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOptionalContext",
    ()=>createOptionalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function createOptionalContext(initialValue = null) {
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(initialValue);
    const useOptionalContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const Provider = ({ children, value })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    return [
        Provider,
        useOptionalContext
    ];
}
;
 //# sourceMappingURL=create-optional-context.mjs.map
}),
]);

//# sourceMappingURL=1aca7_%40mantine_core_esm_core_ca110187._.js.map