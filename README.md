# Callsmith

> GraphQL has GraphiQL, NextJS has Callsmith.

A generative interface for calling API routes on NextJS App Router.

## Install

```bash
npm i callsmith
```

## Add page

```jsx
import { Callsmith, getAppRoutes } from "callsmith";

export default function Page() {
  return <Callsmith nodes={getAppRoutes()} />;
}
```
