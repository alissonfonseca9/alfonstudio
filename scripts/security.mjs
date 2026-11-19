const directives = [
  "default-src 'none'",
  "base-uri 'none'",
  "object-src 'none'",
  "form-action 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self' data:",
];

const policy = directives.join('; ');
const headers = {
  'Content-Security-Policy': policy + "; frame-ancestors 'none'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), clipboard-read=()',
};

export { headers };

export function hostingSecurity() {
  return {
    name: 'hosting-security',
    apply: 'build',
    transformIndexHtml() {
      return [{
        tag: 'meta',
        attrs: {'http-equiv': 'Content-Security-Policy', content: policy, 'data-hosting-policy': ''},
        injectTo: 'head-prepend',
      }];
    },
    generateBundle() {
      const lines = Object.entries(headers).map(([name, value]) => '  ' + name + ': ' + value);
      this.emitFile({ type: 'asset', fileName: '_headers', source: ['/*', ...lines, ''].join('\n') });
    },
  };
}
