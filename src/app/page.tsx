import { Callsmith } from "@/components/Callsmith";
import { getAppRoutes } from "@/lib/app-router";

// import { Callsmith } from "./Callsmith";
// import { getAppRoutes } from "../../dist/server";

export default function Home() {
  return <Callsmith nodes={getAppRoutes()} />;
}
