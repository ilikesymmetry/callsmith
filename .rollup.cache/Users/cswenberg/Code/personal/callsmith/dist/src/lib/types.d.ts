import { Dispatch } from "react";
export type ApiPathNode = {
    value: string;
    type: "dir" | "file";
    data?: {
        method: string;
    };
    children: ApiPathNode[];
};
export type PlaygroundState = {
    selectedRoute: string;
    routes: Record<string, RouteState>;
};
export type KeyValue = {
    key: string;
    value: string;
};
export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
export type Route = {
    path: string;
    method: Method;
};
export type RouteState = Route & {
    headers: KeyValue[];
    query: KeyValue[];
    params: KeyValue[];
    body: string;
    lastResponse?: {
        status: number;
        data: any;
    };
};
export declare enum PlaygroundActionType {
    SelectRoute = "SelectRoute",
    EditHeaders = "EditHeaders",
    EditQuery = "EditQuery",
    EditBody = "EditBody",
    EditRouteParams = "EditRouteParams",
    EditMethod = "EditMethod",
    HttpResponse = "HttpResponse"
}
export type PlaygroundDispatch = Dispatch<{
    type: PlaygroundActionType;
    data: any;
}>;
//# sourceMappingURL=types.d.ts.map