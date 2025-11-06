(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/personal_projects/calnic-27021/data/mock-data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appointments",
    ()=>appointments,
    "doctors",
    ()=>doctors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
;
const doctors = [
    {
        id: 1,
        name: 'Dr. Ahmed',
        status: 'Appt',
        color: 'green'
    },
    {
        id: 2,
        name: 'Dr. Turner',
        status: 'Operating',
        color: 'pink'
    },
    {
        id: 3,
        name: 'Dr. Mike',
        status: 'In Break',
        color: 'yellow'
    },
    {
        id: 4,
        name: 'Dr. Joel',
        status: 'Remote',
        color: 'blue'
    }
];
const appointments = [
    {
        id: 1,
        title: 'Oliver',
        patientName: 'Oliver',
        doctorName: 'Dr. Ahmed',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T08:20:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T08:40:00').toDate(),
        type: 'Morning Appt Available'
    },
    {
        id: 2,
        title: 'James',
        patientName: 'James',
        doctorName: 'Dr. Turner',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T08:20:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T08:40:00').toDate(),
        type: 'Morning Appt Available'
    },
    {
        id: 3,
        title: 'James',
        patientName: 'James',
        doctorName: 'Dr. Turner',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T08:40:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T09:00:00').toDate(),
        type: 'Afternoon Appt Full'
    },
    {
        id: 4,
        title: 'Badway',
        patientName: 'Badway',
        doctorName: 'Dr. Joel',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T08:40:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T09:00:00').toDate(),
        type: 'Afternoon Appt Full'
    },
    {
        id: 5,
        title: 'James',
        patientName: 'James',
        doctorName: 'Dr. Turner',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T09:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T09:20:00').toDate(),
        type: 'Morning Appt Available'
    },
    {
        id: 6,
        title: 'James',
        patientName: 'James',
        doctorName: 'Dr. Turner',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T09:40:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T10:00:00').toDate(),
        type: 'Morning Appt Available'
    },
    {
        id: 7,
        title: 'Badway',
        patientName: 'Badway',
        doctorName: 'Dr. Joel',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T10:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T10:20:00').toDate(),
        type: 'Afternoon Appt Available'
    },
    {
        id: 8,
        title: 'Morning Appt Available',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T09:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T12:00:00').toDate(),
        type: 'Morning Appt Available',
        allDay: false
    },
    {
        id: 9,
        title: 'Afternoon Appt Full',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T14:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-28T17:00:00').toDate(),
        type: 'Afternoon Appt Full',
        allDay: false
    },
    {
        id: 10,
        title: 'Morning Appt Available',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-29T09:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-29T12:00:00').toDate(),
        type: 'Morning Appt Available',
        allDay: false
    },
    {
        id: 11,
        title: 'Afternoon Appt Full',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-29T14:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-29T17:00:00').toDate(),
        type: 'Afternoon Appt Full',
        allDay: false
    },
    {
        id: 12,
        title: 'Morning Appt Available',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-30T09:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-30T12:00:00').toDate(),
        type: 'Morning Appt Available',
        allDay: false
    },
    {
        id: 13,
        title: 'Afternoon Appt Available',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-30T14:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-30T17:00:00').toDate(),
        type: 'Afternoon Appt Available',
        allDay: false
    },
    {
        id: 14,
        title: 'Morning Appt Available',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-31T09:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-31T12:00:00').toDate(),
        type: 'Morning Appt Available',
        allDay: false
    },
    {
        id: 15,
        title: 'Afternoon Appt Available',
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-31T14:00:00').toDate(),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('2025-10-31T17:00:00').toDate(),
        type: 'Afternoon Appt Available',
        allDay: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/personal_projects/calnic-27021/app/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@opentelemetry+api@1.9.0_babel-plugin-react-compiler@1.0_cd04fde518a6993690e8e6f2c743b826/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$big$2d$calendar$40$1$2e$19$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/react-big-calendar@1.19.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/react-big-calendar/dist/react-big-calendar.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/dayjs@1.11.19/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Menu/Menu.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@mantine+core@8.3.6_@mantine+hooks@8.3.6_react@19.2.0__@types+react@19.2.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCalendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCalendar$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconCalendar.mjs [app-client] (ecmascript) <export default as IconCalendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUser$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUser.mjs [app-client] (ecmascript) <export default as IconUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs [app-client] (ecmascript) <export default as IconChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript) <export default as IconMenu2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStethoscope$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconStethoscope.mjs [app-client] (ecmascript) <export default as IconStethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/node_modules/.pnpm/@tabler+icons-react@3.35.0_react@19.2.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$data$2f$mock$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/personal_projects/calnic-27021/data/mock-data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const localizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$big$2d$calendar$40$1$2e$19$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayjsLocalizer"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(143);
    if ($[0] !== "b2d06f271f4d4946707a78362cea9f349afcdff19f9a64d462b93b9c4e6e1309") {
        for(let $i = 0; $i < 143; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b2d06f271f4d4946707a78362cea9f349afcdff19f9a64d462b93b9c4e6e1309";
    }
    const [user] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_DashboardPageUseState);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date(2025, 9, 1);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("month");
    let t1;
    let t2;
    if ($[2] !== user) {
        t1 = ({
            "DashboardPage[useEffect()]": ()=>{
                if (!user && ("TURBOPACK compile-time value", "object") !== "undefined") {
                    window.location.href = "/";
                }
            }
        })["DashboardPage[useEffect()]"];
        t2 = [
            user
        ];
        $[2] = user;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const handleLogout = _DashboardPageHandleLogout;
    let t3;
    if ($[5] !== currentDate) {
        t3 = ({
            "DashboardPage[handleNavigate]": (action)=>{
                if (action === "PREV") {
                    setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentDate).subtract(1, "month").toDate());
                } else {
                    if (action === "NEXT") {
                        setCurrentDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentDate).add(1, "month").toDate());
                    } else {
                        if (action === "TODAY") {
                            setCurrentDate(new Date());
                        }
                    }
                }
            }
        })["DashboardPage[handleNavigate]"];
        $[5] = currentDate;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleNavigate = t3;
    const eventStyleGetter = _DashboardPageEventStyleGetter;
    if (!user) {
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    c: "dimmed",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 83,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 78,
                columnNumber: 12
            }, this);
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    let T0;
    let T1;
    let T2;
    let T3;
    let T4;
    let T5;
    let T6;
    let T7;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[8] !== currentDate || $[9] !== handleNavigate || $[10] !== user.name || $[11] !== view) {
        const todayAppointments = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$data$2f$mock$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointments"].filter(_DashboardPageAppointmentsFilter);
        T7 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"];
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = {
                height: 70
            };
            $[37] = t18;
        } else {
            t18 = $[37];
        }
        t19 = "md";
        let t21;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStethoscope$3e$__["IconStethoscope"], {
                        size: 32,
                        color: "#3b82f6"
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 129,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        order: 2,
                        c: "blue.6",
                        children: "Calnic"
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 129,
                        columnNumber: 65
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 129,
                columnNumber: 13
            }, this);
            $[38] = t21;
        } else {
            t21 = $[38];
        }
        let t22;
        let t23;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUser$3e$__["IconUser"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 137,
                columnNumber: 13
            }, this);
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__["IconMenu2"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 138,
                columnNumber: 13
            }, this);
            $[39] = t22;
            $[40] = t23;
        } else {
            t22 = $[39];
            t23 = $[40];
        }
        let t24;
        if ($[41] !== user.name) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Target, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "light",
                    radius: "xl",
                    leftSection: t22,
                    rightSection: t23,
                    children: user.name
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 147,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 147,
                columnNumber: 13
            }, this);
            $[41] = user.name;
            $[42] = t24;
        } else {
            t24 = $[42];
        }
        let t25;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Dropdown, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                    color: "red",
                    onClick: handleLogout,
                    children: "Logout"
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 155,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 155,
                columnNumber: 13
            }, this);
            $[43] = t25;
        } else {
            t25 = $[43];
        }
        if ($[44] !== t24) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"].Header, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    h: "100%",
                    px: "xl",
                    justify: "space-between",
                    children: [
                        t21,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                            shadow: "md",
                            width: 200,
                            children: [
                                t24,
                                t25
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                            lineNumber: 161,
                            columnNumber: 83
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 161,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 161,
                columnNumber: 13
            }, this);
            $[44] = t24;
            $[45] = t20;
        } else {
            t20 = $[45];
        }
        T6 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$AppShell$2f$AppShell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"].Main;
        T5 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"];
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = {
                display: "flex",
                gap: "1rem",
                height: "calc(100vh - 100px)"
            };
            $[46] = t15;
        } else {
            t15 = $[46];
        }
        let t26;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = {
                width: "220px",
                flexShrink: 0
            };
            $[47] = t26;
        } else {
            t26 = $[47];
        }
        let t27;
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                radius: "xl",
                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCalendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCalendar$3e$__["IconCalendar"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 191,
                    columnNumber: 56
                }, void 0),
                fullWidth: true,
                children: "Book"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 191,
                columnNumber: 13
            }, this);
            $[48] = t27;
        } else {
            t27 = $[48];
        }
        let t28;
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                radius: "xl",
                variant: "light",
                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 198,
                    columnNumber: 72
                }, void 0),
                fullWidth: true,
                children: "Add Patient"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 198,
                columnNumber: 13
            }, this);
            $[49] = t28;
        } else {
            t28 = $[49];
        }
        let t29;
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                mb: "md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__["IconUsers"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 205,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        fw: 600,
                        size: "sm",
                        children: "Doctors Availability"
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 205,
                        columnNumber: 51
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 205,
                columnNumber: 13
            }, this);
            $[50] = t29;
        } else {
            t29 = $[50];
        }
        if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                style: t26,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        t27,
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                            p: "md",
                            mt: "xl",
                            withBorder: true,
                            children: [
                                t29,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                    gap: "xs",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$data$2f$mock$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doctors"].map(_DashboardPageDoctorsMap)
                                }, void 0, false, {
                                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                                    lineNumber: 211,
                                    columnNumber: 101
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                            lineNumber: 211,
                            columnNumber: 56
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 211,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 211,
                columnNumber: 13
            }, this);
            $[51] = t16;
        } else {
            t16 = $[51];
        }
        let t30;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = {
                flex: 1,
                display: "flex",
                flexDirection: "column"
            };
            $[52] = t30;
        } else {
            t30 = $[52];
        }
        let t31;
        if ($[53] !== handleNavigate) {
            t31 = ({
                "DashboardPage[<ActionIcon>.onClick]": ()=>handleNavigate("PREV")
            })["DashboardPage[<ActionIcon>.onClick]"];
            $[53] = handleNavigate;
            $[54] = t31;
        } else {
            t31 = $[54];
        }
        let t32;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronLeft$3e$__["IconChevronLeft"], {
                size: 24
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 239,
                columnNumber: 13
            }, this);
            $[55] = t32;
        } else {
            t32 = $[55];
        }
        let t33;
        if ($[56] !== t31) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                variant: "subtle",
                size: "lg",
                onClick: t31,
                children: t32
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 246,
                columnNumber: 13
            }, this);
            $[56] = t31;
            $[57] = t33;
        } else {
            t33 = $[57];
        }
        let t34;
        if ($[58] !== currentDate) {
            t34 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentDate).format("MMMM YYYY");
            $[58] = currentDate;
            $[59] = t34;
        } else {
            t34 = $[59];
        }
        let t35;
        if ($[60] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                order: 2,
                children: t34
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 262,
                columnNumber: 13
            }, this);
            $[60] = t34;
            $[61] = t35;
        } else {
            t35 = $[61];
        }
        let t36;
        if ($[62] !== handleNavigate) {
            t36 = ({
                "DashboardPage[<ActionIcon>.onClick]": ()=>handleNavigate("NEXT")
            })["DashboardPage[<ActionIcon>.onClick]"];
            $[62] = handleNavigate;
            $[63] = t36;
        } else {
            t36 = $[63];
        }
        let t37;
        if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                size: 24
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 280,
                columnNumber: 13
            }, this);
            $[64] = t37;
        } else {
            t37 = $[64];
        }
        let t38;
        if ($[65] !== t36) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                variant: "subtle",
                size: "lg",
                onClick: t36,
                children: t37
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 287,
                columnNumber: 13
            }, this);
            $[65] = t36;
            $[66] = t38;
        } else {
            t38 = $[66];
        }
        let t39;
        if ($[67] !== t33 || $[68] !== t35 || $[69] !== t38) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "center",
                mb: "md",
                gap: "xl",
                children: [
                    t33,
                    t35,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 295,
                columnNumber: 13
            }, this);
            $[67] = t33;
            $[68] = t35;
            $[69] = t38;
            $[70] = t39;
        } else {
            t39 = $[70];
        }
        const t40 = view === "day" ? "filled" : "light";
        let t41;
        if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = ({
                "DashboardPage[<Button>.onClick]": ()=>setView("day")
            })["DashboardPage[<Button>.onClick]"];
            $[71] = t41;
        } else {
            t41 = $[71];
        }
        let t42;
        if ($[72] !== t40) {
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: t40,
                onClick: t41,
                size: "sm",
                children: "Day"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 315,
                columnNumber: 13
            }, this);
            $[72] = t40;
            $[73] = t42;
        } else {
            t42 = $[73];
        }
        const t43 = view === "week" ? "filled" : "light";
        let t44;
        if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
            t44 = ({
                "DashboardPage[<Button>.onClick]": ()=>setView("week")
            })["DashboardPage[<Button>.onClick]"];
            $[74] = t44;
        } else {
            t44 = $[74];
        }
        let t45;
        if ($[75] !== t43) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: t43,
                onClick: t44,
                size: "sm",
                children: "Week"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 333,
                columnNumber: 13
            }, this);
            $[75] = t43;
            $[76] = t45;
        } else {
            t45 = $[76];
        }
        const t46 = view === "month" ? "filled" : "light";
        let t47;
        if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = ({
                "DashboardPage[<Button>.onClick]": ()=>setView("month")
            })["DashboardPage[<Button>.onClick]"];
            $[77] = t47;
        } else {
            t47 = $[77];
        }
        let t48;
        if ($[78] !== t46) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: t46,
                onClick: t47,
                size: "sm",
                children: "Month"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 351,
                columnNumber: 13
            }, this);
            $[78] = t46;
            $[79] = t48;
        } else {
            t48 = $[79];
        }
        const t49 = view === "agenda" ? "filled" : "light";
        let t50;
        if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
            t50 = ({
                "DashboardPage[<Button>.onClick]": ()=>setView("agenda")
            })["DashboardPage[<Button>.onClick]"];
            $[80] = t50;
        } else {
            t50 = $[80];
        }
        let t51;
        if ($[81] !== t49) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: t49,
                onClick: t50,
                size: "sm",
                children: "Year"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 369,
                columnNumber: 13
            }, this);
            $[81] = t49;
            $[82] = t51;
        } else {
            t51 = $[82];
        }
        let t52;
        if ($[83] !== t42 || $[84] !== t45 || $[85] !== t48 || $[86] !== t51) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "center",
                mb: "md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"].Group, {
                    children: [
                        t42,
                        t45,
                        t48,
                        t51
                    ]
                }, void 0, true, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 377,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 377,
                columnNumber: 13
            }, this);
            $[83] = t42;
            $[84] = t45;
            $[85] = t48;
            $[86] = t51;
            $[87] = t52;
        } else {
            t52 = $[87];
        }
        let t53;
        if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
            t53 = {
                flex: 1,
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "1rem"
            };
            $[88] = t53;
        } else {
            t53 = $[88];
        }
        let t54;
        if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
            t54 = {
                height: "100%"
            };
            $[89] = t54;
        } else {
            t54 = $[89];
        }
        let t55;
        if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
            t55 = ({
                "DashboardPage[<Calendar>.onNavigate]": (date)=>setCurrentDate(date)
            })["DashboardPage[<Calendar>.onNavigate]"];
            $[90] = t55;
        } else {
            t55 = $[90];
        }
        let t56;
        if ($[91] !== currentDate || $[92] !== view) {
            t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                style: t53,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$react$2d$big$2d$calendar$40$1$2e$19$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                    localizer: localizer,
                    events: __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$data$2f$mock$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointments"],
                    startAccessor: "start",
                    endAccessor: "end",
                    style: t54,
                    view: view,
                    onView: setView,
                    date: currentDate,
                    onNavigate: t55,
                    eventPropGetter: eventStyleGetter,
                    toolbar: false
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 418,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 418,
                columnNumber: 13
            }, this);
            $[91] = currentDate;
            $[92] = view;
            $[93] = t56;
        } else {
            t56 = $[93];
        }
        if ($[94] !== t39 || $[95] !== t52 || $[96] !== t56) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                style: t30,
                children: [
                    t39,
                    t52,
                    t56
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 426,
                columnNumber: 13
            }, this);
            $[94] = t39;
            $[95] = t52;
            $[96] = t56;
            $[97] = t17;
        } else {
            t17 = $[97];
        }
        T4 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"];
        if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = {
                width: "300px",
                flexShrink: 0
            };
            $[98] = t14;
        } else {
            t14 = $[98];
        }
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"];
        t11 = "md";
        if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = {
                height: "100%"
            };
            $[99] = t12;
        } else {
            t12 = $[99];
        }
        if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                placeholder: "Search Patient",
                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                    lineNumber: 455,
                    columnNumber: 66
                }, void 0),
                radius: "xl"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 455,
                columnNumber: 13
            }, this);
            $[100] = t13;
        } else {
            t13 = $[100];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"];
        t7 = "md";
        t8 = true;
        if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = {
                flex: 1
            };
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                order: 4,
                mb: "md",
                children: "Today's Appointments"
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 467,
                columnNumber: 13
            }, this);
            $[101] = t10;
            $[102] = t9;
        } else {
            t10 = $[101];
            t9 = $[102];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"];
        t6 = "calc(100vh - 220px)";
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"];
        t4 = "sm";
        t5 = todayAppointments.map(_DashboardPageTodayAppointmentsMap);
        $[8] = currentDate;
        $[9] = handleNavigate;
        $[10] = user.name;
        $[11] = view;
        $[12] = T0;
        $[13] = T1;
        $[14] = T2;
        $[15] = T3;
        $[16] = T4;
        $[17] = T5;
        $[18] = T6;
        $[19] = T7;
        $[20] = t10;
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
        $[24] = t14;
        $[25] = t15;
        $[26] = t16;
        $[27] = t17;
        $[28] = t18;
        $[29] = t19;
        $[30] = t20;
        $[31] = t4;
        $[32] = t5;
        $[33] = t6;
        $[34] = t7;
        $[35] = t8;
        $[36] = t9;
    } else {
        T0 = $[12];
        T1 = $[13];
        T2 = $[14];
        T3 = $[15];
        T4 = $[16];
        T5 = $[17];
        T6 = $[18];
        T7 = $[19];
        t10 = $[20];
        t11 = $[21];
        t12 = $[22];
        t13 = $[23];
        t14 = $[24];
        t15 = $[25];
        t16 = $[26];
        t17 = $[27];
        t18 = $[28];
        t19 = $[29];
        t20 = $[30];
        t4 = $[31];
        t5 = $[32];
        t6 = $[33];
        t7 = $[34];
        t8 = $[35];
        t9 = $[36];
    }
    let t21;
    if ($[103] !== T0 || $[104] !== t4 || $[105] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            gap: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[103] = T0;
        $[104] = t4;
        $[105] = t5;
        $[106] = t21;
    } else {
        t21 = $[106];
    }
    let t22;
    if ($[107] !== T1 || $[108] !== t21 || $[109] !== t6) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            h: t6,
            children: t21
        }, void 0, false, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[107] = T1;
        $[108] = t21;
        $[109] = t6;
        $[110] = t22;
    } else {
        t22 = $[110];
    }
    let t23;
    if ($[111] !== T2 || $[112] !== t10 || $[113] !== t22 || $[114] !== t7 || $[115] !== t8 || $[116] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            p: t7,
            withBorder: t8,
            style: t9,
            children: [
                t10,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[111] = T2;
        $[112] = t10;
        $[113] = t22;
        $[114] = t7;
        $[115] = t8;
        $[116] = t9;
        $[117] = t23;
    } else {
        t23 = $[117];
    }
    let t24;
    if ($[118] !== T3 || $[119] !== t11 || $[120] !== t12 || $[121] !== t13 || $[122] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            gap: t11,
            style: t12,
            children: [
                t13,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[118] = T3;
        $[119] = t11;
        $[120] = t12;
        $[121] = t13;
        $[122] = t23;
        $[123] = t24;
    } else {
        t24 = $[123];
    }
    let t25;
    if ($[124] !== T4 || $[125] !== t14 || $[126] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T4, {
            style: t14,
            children: t24
        }, void 0, false, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[124] = T4;
        $[125] = t14;
        $[126] = t24;
        $[127] = t25;
    } else {
        t25 = $[127];
    }
    let t26;
    if ($[128] !== T5 || $[129] !== t15 || $[130] !== t16 || $[131] !== t17 || $[132] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T5, {
            style: t15,
            children: [
                t16,
                t17,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[128] = T5;
        $[129] = t15;
        $[130] = t16;
        $[131] = t17;
        $[132] = t25;
        $[133] = t26;
    } else {
        t26 = $[133];
    }
    let t27;
    if ($[134] !== T6 || $[135] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T6, {
            children: t26
        }, void 0, false, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 604,
            columnNumber: 11
        }, this);
        $[134] = T6;
        $[135] = t26;
        $[136] = t27;
    } else {
        t27 = $[136];
    }
    let t28;
    if ($[137] !== T7 || $[138] !== t18 || $[139] !== t19 || $[140] !== t20 || $[141] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T7, {
            header: t18,
            padding: t19,
            children: [
                t20,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[137] = T7;
        $[138] = t18;
        $[139] = t19;
        $[140] = t20;
        $[141] = t27;
        $[142] = t28;
    } else {
        t28 = $[142];
    }
    return t28;
}
_s(DashboardPage, "bjx1GzSinC/yRHP0fDZqbfPj0SE=");
_c = DashboardPage;
function _DashboardPageTodayAppointmentsMap(apt_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
        p: "sm",
        withBorder: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                gap: "xs",
                mb: "xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        size: "sm",
                        color: "blue",
                        children: apt_0.patientName[0]
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 626,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        fw: 600,
                        children: apt_0.patientName
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 626,
                        columnNumber: 143
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 626,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                gap: "xs",
                mb: "xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$35$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStethoscope$3e$__["IconStethoscope"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 626,
                        columnNumber: 226
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "xs",
                        c: "dimmed",
                        children: apt_0.doctorName
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 626,
                        columnNumber: 255
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 626,
                columnNumber: 202
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "xs",
                        fw: 500,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(apt_0.start).format("ddd Do")
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 626,
                        columnNumber: 346
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "xs",
                        fw: 500,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(apt_0.start).format("H:mm")
                    }, void 0, false, {
                        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                        lineNumber: 626,
                        columnNumber: 415
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 626,
                columnNumber: 315
            }, this)
        ]
    }, apt_0.id, true, {
        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
        lineNumber: 626,
        columnNumber: 10
    }, this);
}
function _DashboardPageDoctorsMap(doctor) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        justify: "space-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                size: "sm",
                children: doctor.name
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 629,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0_cd04fde518a6993690e8e6f2c743b826$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$3$2e$6_$40$mantine$2b$hooks$40$8$2e$3$2e$6_react$40$19$2e$2$2e$0_$5f40$types$2b$react$40$19$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                size: "sm",
                color: doctor.color,
                variant: "light",
                children: doctor.status
            }, void 0, false, {
                fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
                lineNumber: 629,
                columnNumber: 93
            }, this)
        ]
    }, doctor.id, true, {
        fileName: "[project]/personal_projects/calnic-27021/app/dashboard/page.jsx",
        lineNumber: 629,
        columnNumber: 10
    }, this);
}
function _DashboardPageAppointmentsFilter(apt) {
    return apt.patientName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$personal_projects$2f$calnic$2d$27021$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$19$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(apt.start).format("YYYY-MM-DD") === "2025-10-28";
}
function _DashboardPageEventStyleGetter(event) {
    let backgroundColor = "#fef3c7";
    let color = "#92400e";
    if (event.type === "Morning Appt Available") {
        backgroundColor = "#fef3c7";
        color = "#92400e";
    } else {
        if (event.type === "Afternoon Appt Full") {
            backgroundColor = "#fef3c7";
            color = "#92400e";
        } else {
            if (event.type === "Afternoon Appt Available") {
                backgroundColor = "#d1fae5";
                color = "#065f46";
            }
        }
    }
    return {
        style: {
            backgroundColor,
            color,
            border: "none",
            borderRadius: "4px",
            fontSize: "0.75rem",
            padding: "2px 4px"
        }
    };
}
function _DashboardPageHandleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/";
}
function _DashboardPageUseState() {
    if ("TURBOPACK compile-time truthy", 1) {
        const userStr = localStorage.getItem("user");
        return userStr ? JSON.parse(userStr) : null;
    }
    //TURBOPACK unreachable
    ;
}
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=personal_projects_calnic-27021_b339bb74._.js.map