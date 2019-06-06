const caching = () => {              // *non syntactic thinking*
  if (request in cache) {            // - cache hit
    return request cache[request];   // 
  } else {                           // - cache miss
    let r = db-read() (100ms);       //
    cache [request] = r;             //
    return r;                        // 
  }
}