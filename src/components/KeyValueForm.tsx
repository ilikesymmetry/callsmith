import { TrashIcon } from "lucide-react";
import { Input } from "./ui/input";
import { KeyValue } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function KeyValueForm({
  keyValues,
  setKeyValues,
  lockKeys = false,
}: {
  keyValues: KeyValue[];
  setKeyValues: (v: any) => void;
  lockKeys?: boolean;
}) {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const i = parseInt(name.split(".")[1]);
    const k = name.split(".")[2];
    let newKeyValues = keyValues.map((keyValue, j) => {
      if (i !== j) {
        return keyValue;
      } else {
        return {
          ...keyValue,
          [k]: value,
        };
      }
    });
    const lastKeyValue = newKeyValues[newKeyValues.length - 1];
    if (!lockKeys && (lastKeyValue.key !== "" || lastKeyValue.value !== "")) {
      newKeyValues = [...newKeyValues, { key: "", value: "" }];
    }
    setKeyValues(newKeyValues);
  };

  return (
    <Table className="space-y-2 w-2/3">
      <TableHeader className="">
        <TableHead className="pl-3 w-1/3">Key</TableHead>
        <TableHead className="pl-3 w-2/3">Value</TableHead>
      </TableHeader>
      <TableBody>
        {keyValues.map((keyValue, i) => (
          <TableRow className="" key={i}>
            <TableCell>
              <Input
                name={`fields.${i}.key`}
                value={keyValue.key}
                placeholder="Key"
                onChange={(e) => {
                  handleChange(e);
                }}
                disabled={lockKeys}
              />
            </TableCell>
            <TableCell>
              <div className="relative">
                <Input
                  name={`fields.${i}.value`}
                  value={keyValue.value}
                  placeholder="Value"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <button
                  className="absolute top-2 -right-8"
                  hidden={i === keyValues.length - 1}
                  onClick={() => {
                    const newKeyValues = keyValues.filter((v, j) => i !== j);
                    setKeyValues(newKeyValues);
                  }}
                >
                  <TrashIcon className="h-5 w-5 text-neutral-400 hover:text-black dark:text-neutral-600 dark:hover:text-white" />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
