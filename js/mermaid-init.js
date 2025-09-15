// docs/js/mermaid-init.js
document$.subscribe(function() {
    mermaid.initialize({
      theme: 'dark',
      fontFamily: 'Fira Code, monospace',
      securityLevel: 'loose'
    });
    mermaid.run({
      querySelector: '.mermaid'
    });
  });