// import { Callsmith } from "callsmith/client";
// import { getAppRoutes } from "callsmith/server";
import { Callsmith } from "../../../../dist/client";
import { getAppRoutes } from "../../../../dist/server";

export default function Page() {
  return <Callsmith nodes={getAppRoutes()} />;
}
