// import ConfigContext from "@/context/ConfigContext";
// import createTheme from "@uiw/codemirror-themes";
// import ReactCodeMirror from "@uiw/react-codemirror";
// import { useContext } from "react";
// import { json, jsonParseLinter } from "@codemirror/lang-json";
// import { linter } from "@codemirror/lint";
// import { tags as t } from "@lezer/highlight";

// export function JsonEditor({
//   value,
//   onChange,
//   disabled = false,
// }: {
//   value: string;
//   onChange?: (v: string) => void;
//   disabled?: boolean;
// }) {
//   const config = useContext(ConfigContext);
//   const c = config.theme.colors;
//   const theme = createTheme({
//     theme: "light",
//     settings: {
//       fontSize: "14px",
//       background: c.highlightFaint,
//       backgroundImage: "",
//       foreground: c.primary,
//       caret: c.primary,
//       selection: c.highlight,
//       selectionMatch: c.highlightFaint,
//       lineHighlight: c.highlight,
//       gutterBackground: c.highlightFaint,
//       gutterForeground: c.secondary,
//       gutterBorder: c.highlightFaint,
//     },
//     styles: [
//       { tag: t.string, color: c.orange },
//       { tag: t.number, color: c.green },
//       { tag: t.bool, color: c.blue },
//       { tag: t.null, color: c.red },
//     ],
//   });
//   return (
//     <ReactCodeMirror
//       value={value}
//       onChange={onChange}
//       theme={theme}
//       extensions={[json(), linter(jsonParseLinter())]}
//       // editable={!disabled}
//     />
//   );
// }

export function JsonEditor(props: {
  value: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
}) {
  return <div>{props.value}</div>;
}
