# Callsmith

> GraphQL has GraphiQL, NextJS has Callsmith.

A generative interface for calling API routes on NextJS App Router.

## Install

```bash
npm i callsmith
```

## Add client component

A workaround is in progress for this, but to make App Router happy, we need to use our `Callsmith` component with the `"use client"` directive in our page.

```jsx
"use client";
import * as callsmith from "callsmith/client";

export const Callsmith = callsmith.Callsmith;
```

## Add page

Note that this needs to be a server component so that `getAppRoutes` can leverage the local filesystem to determine the available routes and methods.

```jsx
import { getAppRoutes } from "callsmith/server";
import { Callsmith } from "./Callsmith";

export default function Page() {
  return <Callsmith nodes={getAppRoutes()} />;
}
```
