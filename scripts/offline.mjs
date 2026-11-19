import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const read = path => readFileSync(path, 'utf8');
let html = read('dist/index.html').replace(/<meta\b[^>]*\bdata-hosting-policy(?:=""|='')?[^>]*>\s*/i, '');
const script = read(join('dist', html.match(/src="(?:\.\/|\/)?(assets\/[^"]+\.js)"/)[1])).replace(/<\/script/gi, '<\\/script');
const style = read(join('dist', html.match(/href="(?:\.\/|\/)?(assets\/[^"]+\.css)"/)[1]));
const hash = text => "'sha256-" + createHash('sha256').update(text).digest('base64') + "'";
const policy = "default-src 'none'; img-src data:; font-src data:; script-src " + hash(script) + "; style-src " + hash(style) + "; base-uri 'none'; form-action 'none'";
html = html.replace('<head>', '<head>\n<meta http-equiv="Content-Security-Policy" content="' + policy + '">')
  .replace(/<script type="module"[^>]*><\/script>/, () => '<script type="module">' + script + '</script>')
  .replace(/<link rel="stylesheet"[^>]*>/, () => '<style>' + style + '</style>');
writeFileSync('abrir-alfon.html', html);
