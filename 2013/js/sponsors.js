define(function() {
    var modals = 0
    $(document).on('click', function(evt) {
        if (modals) {
            if ($(evt.target).parents('.sponsors__modal').length == 0) {
                modals = 0
                $('.sponsors__modal').fadeOut()
            }
        }
    })
    $('#sponsors').on('click', '.sponsors__item', function(evt) {
        var $this = $(this)
        clone = $this.clone(), $modal = $('<div>', {
            'class': 'sponsors__modal'
        }), desc = clone.find('.sponsors__item__description').detach(), height = $this.height(), margin = height * .25
        if (modals) {
            $('.sponsors__modal').fadeOut()
            modals--
        }
        $modal.append(clone)
        $modal.append(desc)
        $modal.appendTo(document.body)
        clone.css({
            top: -margin,
            left: this.offsetLeft
        })
        $modal.css({
            top: $this.offset().top + margin,
            paddingTop: height - margin - 30
        }).fadeIn()
        modals++
        return false
    })
})