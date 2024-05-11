import { Dispatch } from "react";

export type ApiPathNode = {
  value: string;
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
export type Method = "GET" | "POST";
export type RouteState = {
  method: Method;
  headers: KeyValue[];
  query: KeyValue[];
  body: string;
  lastResponse?: {
    status: number;
    data: any;
  };
};
export enum PlaygroundActionType {
  SelectRoute = "SelectRoute",
  EditHeaders = "EditHeaders",
  EditQuery = "EditQuery",
  EditBody = "EditBody",
  EditMethod = "EditMethod",
  HttpResponse = "HttpResponse",
}
export type PlaygroundDispatch = Dispatch<{
  type: PlaygroundActionType;
  data: any;
}>;
