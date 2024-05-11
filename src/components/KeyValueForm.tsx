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
}: {
  keyValues: KeyValue[];
  setKeyValues: (v: any) => void;
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
    if (lastKeyValue.key !== "" || lastKeyValue.value !== "") {
      newKeyValues = [...newKeyValues, { key: "", value: "" }];
    }
    setKeyValues(newKeyValues);
  };

  return (
    <Table className="space-y-2">
      <TableHeader className="">
        <TableHead className="pl-3 w-1/3">Key</TableHead>
        <TableHead className="pl-3 w-2/3">Value</TableHead>
        <TableHead className=""></TableHead>
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
              />
            </TableCell>
            <TableCell>
              <Input
                name={`fields.${i}.value`}
                value={keyValue.value}
                placeholder="Value"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </TableCell>
            <TableCell>
              <div className="text-center w-8">
                <button
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
    // <table className="space-y-2">
    //   <thead className="">
    //     <tr>
    //       <th className="pl-3 py-2 text-left text-neutral-600 dark:text-neutral-400">
    //         Key
    //       </th>
    //       <th className="pl-3 py-2 text-left text-neutral-600 dark:text-neutral-400">
    //         Value
    //       </th>
    //       <th className=""></th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {keyValues.map((keyValue, i) => (
    //       <tr className="" key={i}>
    //         {/* <tr className="flex flex-row gap-2 items-center w-full" key={i}> */}
    //         <td>
    //           <Input
    //             className=""
    //             name={`fields.${i}.key`}
    //             value={keyValue.key}
    //             placeholder="Key"
    //             onChange={(e) => {
    //               handleChange(e);
    //             }}
    //           />
    //         </td>
    //         <td>
    //           <Input
    //             className=""
    //             name={`fields.${i}.value`}
    //             value={keyValue.value}
    //             placeholder="Value"
    //             onChange={(e) => {
    //               handleChange(e);
    //             }}
    //           />
    //         </td>
    //         <td>
    //           <div className="pl-4">
    //             <button
    //               hidden={i === keyValues.length - 1}
    //               onClick={() => {
    //                 console.log("i", i);
    //                 const newKeyValues = keyValues.filter((v, j) => i !== j);
    //                 setKeyValues(newKeyValues);
    //               }}
    //             >
    //               <TrashIcon className="h-5 w-5 text-neutral-400 hover:text-black dark:text-neutral-600  dark:hover:text-white" />
    //             </button>
    //           </div>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    // <div className="space-y-2">
    //   <div className="flex flex-row gap-2 items-center w-full text-secondary">
    //     <div className="w-1/3">Key</div>
    //     <div className="w-2/3">Value</div>
    //   </div>
    //   {keyValues.map((keyValue, i) => (
    //     <div className="flex flex-row gap-2 items-center w-full" key={i}>
    //       <Input
    //         className="w-1/3"
    //         name={`fields.${i}.key`}
    //         value={keyValue.key}
    //         placeholder="Key"
    //         onChange={(e) => {
    //           handleChange(e);
    //         }}
    //       />
    //       <Input
    //         className="w-2/3"
    //         name={`fields.${i}.value`}
    //         value={keyValue.value}
    //         placeholder="Value"
    //         onChange={(e) => {
    //           handleChange(e);
    //         }}
    //       />
    //       <div className="pl-4 pr-2">
    //         <button
    //           hidden={i === keyValues.length - 1}
    //           onClick={() => {
    //             console.log("i", i);
    //             const newKeyValues = keyValues.filter((v, j) => i !== j);
    //             setKeyValues(newKeyValues);
    //           }}
    //         >
    //           <TrashIcon className="h-5 w-5 text-secondary hover:text-primary" />
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
