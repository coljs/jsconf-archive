require(['./menu', './sponsors'], function() {
    var quotesDuration = 4000,
        $menu = $('.menu'),
        menuOffset = $menu.offset().top,
        menuHeight = $menu.height(),
        $body = $(document.body)
    $('a[href^="/#"]').on('click', function() {
        var that = this,
            id = this.href.replace(/.*\#/, ''),
            dest = document.getElementById(id),
            offset = parseInt(this.getAttribute('data-offset') || -menuHeight)
        if (this.href.match(/\#$/)) return
        dest.id = ''
        $('html, body').animate({
            scrollTop: $(dest).offset().top + offset
        }).promise().done(function() {
            dest.id = id
        })
        return false
    })
    if (location.pathname.match(/agenda\/?$/)) {
        require(['./detail-agenda'])
    }

    function showQuote(next) {
        var active = $('.sponsors__sponsor.active').parent(),
            quote = $('.sponsors__quote'),
            manual = !!next
        next = next || active.next()
        if (quote.is(':animated')) return
        if (!next.length) next = $('.sponsors__sponsor:first').parent()
        if (manual) {
            next.children().addClass('active')
            active.children().removeClass('active')
        }
        quote.animate({
            opacity: 0
        }).promise().done(function() {
            var $this = $(this),
                children = next.children()
            $this.find('p').html(children.attr('data-quote'))
            $this.find('cite a').html(children.attr('data-cite')).attr('href', children.attr('data-url'))
            children.addClass('active')
            active.children().removeClass('active')
        }).then(function() {
            quote.animate({
                opacity: 1
            }, 'slow')
        })
    }
})