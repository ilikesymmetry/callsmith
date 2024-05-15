import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrashIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "./ui/table";
export function KeyValueForm(_a) {
    var keyValues = _a.keyValues, setKeyValues = _a.setKeyValues, _b = _a.lockKeys, lockKeys = _b === void 0 ? false : _b;
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        var i = parseInt(name.split(".")[1]);
        var k = name.split(".")[2];
        var newKeyValues = keyValues.map(function (keyValue, j) {
            var _a;
            if (i !== j) {
                return keyValue;
            }
            else {
                return __assign(__assign({}, keyValue), (_a = {}, _a[k] = value, _a));
            }
        });
        var lastKeyValue = newKeyValues[newKeyValues.length - 1];
        if (!lockKeys && (lastKeyValue.key !== "" || lastKeyValue.value !== "")) {
            newKeyValues = __spreadArray(__spreadArray([], newKeyValues, true), [{ key: "", value: "" }], false);
        }
        setKeyValues(newKeyValues);
    };
    return (_jsxs(Table, { className: "space-y-2 w-2/3", children: [_jsxs(TableHeader, { className: "", children: [_jsx(TableHead, { className: "pl-3 w-1/3", children: "Key" }), _jsx(TableHead, { className: "pl-3 w-2/3", children: "Value" })] }), _jsx(TableBody, { children: keyValues.map(function (keyValue, i) { return (_jsxs(TableRow, { className: "", children: [_jsx(TableCell, { children: _jsx(Input, { name: "fields.".concat(i, ".key"), value: keyValue.key, placeholder: "Key", onChange: function (e) {
                                    handleChange(e);
                                }, disabled: lockKeys }) }), _jsx(TableCell, { children: _jsxs("div", { className: "relative", children: [_jsx(Input, { name: "fields.".concat(i, ".value"), value: keyValue.value, placeholder: "Value", onChange: function (e) {
                                            handleChange(e);
                                        } }), _jsx("button", { className: "absolute top-2 -right-8", hidden: i === keyValues.length - 1, onClick: function () {
                                            var newKeyValues = keyValues.filter(function (v, j) { return i !== j; });
                                            setKeyValues(newKeyValues);
                                        }, children: _jsx(TrashIcon, { className: "h-5 w-5 text-neutral-400 hover:text-black dark:text-neutral-600 dark:hover:text-white" }) })] }) })] }, i)); }) })] }));
}
//# sourceMappingURL=KeyValueForm.js.map