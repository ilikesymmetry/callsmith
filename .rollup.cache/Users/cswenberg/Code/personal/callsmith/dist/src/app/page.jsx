// "use client";
import { Callsmith } from "@/components/Callsmith";
import { getAppRoutes } from "@/lib/app-router";
// import { Callsmith } from "./Callsmith";
// import { getAppRoutes } from "../../dist/server";
export default function Home() {
    return <Callsmith nodes={getAppRoutes()}/>;
    // return (
    //   <Callsmith
    //     nodes={[
    //       { value: "test", type: "file", data: { method: "GET" }, children: [] },
    //     ]}
    //   />
    // );
}
//# sourceMappingURL=page.jsx.map