function init() {
    const { tracer: Tracer } = require('dd-trace');
    Tracer.init({
      logInjection: true
    });
  
    Tracer.use('http', {
      blocklist: [`/api/v1/record`],
      client: {
        blocklist: [`/api/v1/record`]
      },
      server: {
        blocklist:  [`/api/v1/record`]
      },
      hooks: {
        request(span, req) {
          if (span && req) {
            let url = 'path' in req ? req.path : req.url;
            if (url) {
              const method = req.method;
              span.setTag('resource.name', method ? `${method} ${url}` : url);
            }
          }
        },
      },
    });
  }
 init();
  