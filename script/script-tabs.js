/**
 * Created by axepu on 23.11.2016.
 */
$(document).ready(function () {
    $(".tabs__item").click(function () {
        $(".tabs__item").removeClass("tabs__item_active");
        $(this).addClass("tabs__item_active");
        $(".tabs__content").removeClass("tabs__content_active");
        $(this).find("div").addClass("tabs__content_active");
    })
});