# Usage

## Building

Install the dependencies

```bash
pnpm install
```

To build and see the output in `.rspack`

```bash
pnpm run build
```

## Local Development

You can invoke your function locally by using the following command:

```bash
pnpm dlx serverless invoke local --function hello
```

Which should result in response similar to the following:

```bash
Running "serverless" from node_modules

PublicPath: (none)
  asset handler.js 2.25 KiB [emitted] (name: handler)
  Entrypoint handler 2.25 KiB = handler.js
  ./handler.ts
  Rspack 0.3.6 compiled successfully in 55 ms (4ba3f940dd113488a66c)
[Rspack] Compiled function "hello" in 80ms
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

To check for commands with `serveless offline`

```bash
pnpm dlx serverless offline --verbose
```
