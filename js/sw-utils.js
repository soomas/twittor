// Guardar en el cache dinamico
function actualizaCacheDinamico( dynamicCache, request, res ){
    if ( res.ok ) {
        caches.open( DYNAMIC_CACHE ).then( cache => {
            cache.put( request, res.clone() );
            return res.clone();
        });
    } else {
        return res;
    }
}