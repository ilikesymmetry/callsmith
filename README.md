# Callsmith

A generative interface for calling API routes on NextJS App Router. Inspired by GraphiQL, Callsmith's goal is to be the easiest way to call your API for development and testing purposes.

## Install

```bash
npm i callsmith
```

## Add page

Note that this page needs to be rendered server-side to leverage the local filesystem for determining available API routes.

```jsx
import { Callsmith } from "callsmith/client";
import { getAppRoutes } from "callsmith/server";

export default function Page() {
  return <Callsmith nodes={getAppRoutes()} />;
}
```
