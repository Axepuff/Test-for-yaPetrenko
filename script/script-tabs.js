$(document).ready(function () {
    $(".tabs__item").click(function () {
        $(".tabs__item").removeClass("tabs__item_active");
        $(this).addClass("tabs__item_active");
        $(this).closest('.tabs').find('.panes__item').removeClass("panes__item_active").eq($(this).index()).addClass('panes__item_active');
    })
});