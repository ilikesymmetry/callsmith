"use client";
import createTheme from "@uiw/codemirror-themes";
import ReactCodeMirror from "@uiw/react-codemirror";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";
import { tags as t } from "@lezer/highlight";
import { useTheme } from "@/lib/hooks";
export function JsonEditor({ value, onChange, disabled = false, }) {
    const theme = useTheme();
    console.log("theme", theme);
    const editorTheme = createTheme({
        theme,
        settings: {
            fontSize: "14px",
            background: theme === "light" ? "#FAFAFA" : "#0A0A0A",
            backgroundImage: "",
            foreground: theme === "light" ? "#000000" : "#FFFFFF",
            caret: theme === "light" ? "#000000" : "#FFFFFF",
            selection: "#525252",
            selectionMatch: theme === "light" ? "#FAFAFA" : "#0A0A0A",
            lineHighlight: theme === "light" ? "#E5E5E5" : "#262626",
            gutterBackground: theme === "light" ? "#FAFAFA" : "#0A0A0A",
            gutterBorder: theme === "light" ? "#E5E5E5" : "#262626",
            gutterForeground: "#A3A3A3",
            gutterActiveForeground: theme === "light" ? "#000000" : "#FFFFFF",
        },
        styles: [
            { tag: t.string, color: "#FB923C" },
            { tag: t.number, color: "#4ADE80" },
            { tag: t.bool, color: "#2563EB" },
            { tag: t.null, color: "#DB2777" },
        ],
    });
    return (<ReactCodeMirror value={value} onChange={onChange} theme={editorTheme} extensions={[json(), linter(jsonParseLinter())]} editable={!disabled}/>);
}
//# sourceMappingURL=JsonEditor.jsx.map