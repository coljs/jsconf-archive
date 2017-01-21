define(function() {
    var $window = $(window),
        $menu = $('.menu'),
        menuOffset = $menu.offset().top,
        $body = $(document.body)
    $window.on('scroll', function() {
        if ($window.scrollTop() > menuOffset) {
            $body.addClass('fixed-menu')
        } else {
            $body.removeClass('fixed-menu')
        }
    })
    $('#mobile-menu').on('change', goToSection)

    function goToSection() {
        var val = $(this).val(),
            id
        if (val) {
            location.href = val
        }
    }
})