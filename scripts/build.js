const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function ensureCss() {
  const input = path.join(process.cwd(), "src", "input.css");
  const output = path.join(process.cwd(), "src", "output.css");
  if (!fs.existsSync(output) && fs.existsSync(input)) {
    fs.writeFileSync(output, "");
  }
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  const dir = path.dirname(dest);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else if (entry.isFile()) {
      copyFile(s, d);
    }
  }
}

function build() {
  ensureCss();
  const dist = path.join(process.cwd(), "dist");
  cleanDir(dist);
  const rootFiles = ["index.html"];
  for (const f of rootFiles) {
    const src = path.join(process.cwd(), f);
    if (fs.existsSync(src)) {
      copyFile(src, path.join(dist, f));
    }
  }
  const dirs = ["js", "img", "src"];
  for (const d of dirs) {
    const srcDir = path.join(process.cwd(), d);
    if (fs.existsSync(srcDir)) {
      copyDir(srcDir, path.join(dist, d));
    }
  }
}

build();
