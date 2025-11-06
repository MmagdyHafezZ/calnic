module.exports = [
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/utils/Floating/use-delayed-hover.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDelayedHover",
    ()=>useDelayedHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useDelayedHover({ open, close, openDelay, closeDelay }) {
    const openTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const closeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const clearTimeouts = ()=>{
        window.clearTimeout(openTimeout.current);
        window.clearTimeout(closeTimeout.current);
    };
    const openDropdown = ()=>{
        clearTimeouts();
        if (openDelay === 0 || openDelay === void 0) {
            open();
        } else {
            openTimeout.current = window.setTimeout(open, openDelay);
        }
    };
    const closeDropdown = ()=>{
        clearTimeouts();
        if (closeDelay === 0 || closeDelay === void 0) {
            close();
        } else {
            closeTimeout.current = window.setTimeout(close, closeDelay);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>clearTimeouts, []);
    return {
        openDropdown,
        closeDropdown
    };
}
;
 //# sourceMappingURL=use-delayed-hover.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFloatingPosition",
    ()=>getFloatingPosition
]);
'use client';
function getFloatingPosition(dir, position) {
    if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
        const [side, placement] = position.split("-");
        const flippedPosition = side === "right" ? "left" : "right";
        return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
    }
    return position;
}
;
 //# sourceMappingURL=get-floating-position.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArrowPositionStyles",
    ()=>getArrowPositionStyles
]);
'use client';
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
    if (placement === "center" || arrowPosition === "center") {
        return {
            top: arrowY
        };
    }
    if (placement === "end") {
        return {
            bottom: arrowOffset
        };
    }
    if (placement === "start") {
        return {
            top: arrowOffset
        };
    }
    return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
    if (placement === "center" || arrowPosition === "center") {
        return {
            left: arrowX
        };
    }
    if (placement === "end") {
        return {
            [dir === "ltr" ? "right" : "left"]: arrowOffset
        };
    }
    if (placement === "start") {
        return {
            [dir === "ltr" ? "left" : "right"]: arrowOffset
        };
    }
    return {};
}
const radiusByFloatingSide = {
    bottom: "borderTopLeftRadius",
    left: "borderTopRightRadius",
    right: "borderBottomLeftRadius",
    top: "borderBottomRightRadius"
};
function getArrowPositionStyles({ position, arrowSize, arrowOffset, arrowRadius, arrowPosition, arrowX, arrowY, dir }) {
    const [side, placement = "center"] = position.split("-");
    const baseStyles = {
        width: arrowSize,
        height: arrowSize,
        transform: "rotate(45deg)",
        position: "absolute",
        [radiusByFloatingSide[side]]: arrowRadius
    };
    const arrowPlacement = -arrowSize / 2;
    if (side === "left") {
        return {
            ...baseStyles,
            ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
            right: arrowPlacement,
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
        };
    }
    if (side === "right") {
        return {
            ...baseStyles,
            ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
            left: arrowPlacement,
            borderRightColor: "transparent",
            borderTopColor: "transparent",
            clipPath: "polygon(0 100%, 0 0, 100% 100%)"
        };
    }
    if (side === "top") {
        return {
            ...baseStyles,
            ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
            bottom: arrowPlacement,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
        };
    }
    if (side === "bottom") {
        return {
            ...baseStyles,
            ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
            top: arrowPlacement,
            borderBottomColor: "transparent",
            borderRightColor: "transparent",
            clipPath: "polygon(0 100%, 0 0, 100% 0)"
        };
    }
    return {};
}
;
 //# sourceMappingURL=get-arrow-position-styles.mjs.map
}),
"[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingArrow",
    ()=>FloatingArrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$get$2d$arrow$2d$position$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs [app-ssr] (ecmascript)");
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
const FloatingArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ position, arrowSize, arrowOffset, arrowRadius, arrowPosition, visible, arrowX, arrowY, style, ...others }, ref)=>{
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    if (!visible) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...others,
        ref,
        style: {
            ...style,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$utils$2f$Floating$2f$FloatingArrow$2f$get$2d$arrow$2d$position$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrowPositionStyles"])({
                position,
                arrowSize,
                arrowOffset,
                arrowRadius,
                arrowPosition,
                dir,
                arrowX,
                arrowY
            })
        }
    });
});
FloatingArrow.displayName = "@mantine/core/FloatingArrow";
;
 //# sourceMappingURL=FloatingArrow.mjs.map
}),
];

//# sourceMappingURL=1aca7_%40mantine_core_esm_utils_Floating_cb0b14e5._.js.map