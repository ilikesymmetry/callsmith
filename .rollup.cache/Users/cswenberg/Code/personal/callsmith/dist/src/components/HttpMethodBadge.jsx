import { Badge } from "./ui/badge";
export function HttpMethodBadge({ method, children, size, ...rest }) {
    switch (method) {
        case "GET":
            return (<Badge variant="blue" size={size} {...rest}>
          {children}
        </Badge>);
        case "POST":
            return (<Badge variant="green" size={size} {...rest}>
          {children}
        </Badge>);
        case "PUT":
            return (<Badge variant="orange" size={size} {...rest}>
          {children}
        </Badge>);
        case "PATCH":
            return (<Badge variant="yellow" size={size} {...rest}>
          {children}
        </Badge>);
        case "DELETE":
            return (<Badge variant="red" size={size} {...rest}>
          {children}
        </Badge>);
        case "HEAD":
            return (<Badge variant="secondary" size={size} {...rest}>
          {children}
        </Badge>);
        case "OPTIONS":
            return (<Badge variant="secondary" size={size} {...rest}>
          {children}
        </Badge>);
    }
}
//# sourceMappingURL=HttpMethodBadge.jsx.map