require("esbuild")
  .build({
    entryPoints: ["index.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "dist/index.js",
  })
  .catch(() => process.exit(1));
