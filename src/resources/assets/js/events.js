// M O D A L //
EventHub.listen('modal-show', () => {})
EventHub.listen('modal-hide', () => {})

// F I L E - L O A D I N G
EventHub.listen('loading-files-show', () => {
    setTimeout(() => {
        bm(document.getElementById('loading_files_anim'), 'loading_files_anim')
    }, 50)
})

EventHub.listen('loading-files-hide', () => {
    setTimeout(() => {
        bodymovin.destroy('loading_files_anim')
    }, 50)
})

// N O - F I L E S
EventHub.listen('no-files-show', () => {
    bm(document.getElementById('no_files_anim'), 'no_files_anim')
})

EventHub.listen('no-files-hide', () => {
    bodymovin.destroy('no_files_anim')
})

// N O - S E A R C H
EventHub.listen('no-search-show', () => {
    bm(document.getElementById('no_search_anim'), 'no_search_anim')
})

EventHub.listen('no-search-hide', () => {
    bodymovin.destroy('no_search_anim')
})

// A J A X  - E R R O R
EventHub.listen('ajax-error-show', () => {
    bm(document.getElementById('ajax_error_anim'))
})

/**
 * body movin animation
 * you can remove it / replace it, do what you want
 */
function bm(el, name) {
    bodymovin.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: true,
        name: name,
        autoplay: true,
        path: el.getAttribute('data-json'),
        rendererSettings: {
            progressiveLoad: true
        }
    })
}
