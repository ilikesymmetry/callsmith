import { Callsmith } from "@/components/Callsmith";
import { getAppRoutes } from "@/lib/router";

// import { Callsmith } from "../../dist/client";
// import { getAppRoutes } from "../../dist/server";

export default function Home() {
  return <Callsmith nodes={getAppRoutes()} />;
}
