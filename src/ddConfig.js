function init() {
    const { tracer: Tracer } = require('dd-trace');
    Tracer.init({
      logInjection: true
    });
  
    Tracer.use('http', {
      blocklist: ["/api/v1/record", "https://api.spacexdata.com/v4/starlink"],
      client: {
        blocklist: ["/api/v1/record", "https://api.spacexdata.com/v4/starlink"]
      },
      server: {
        blocklist:  ["/api/v1/record", "https://api.spacexdata.com/v4/starlink"]
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
  