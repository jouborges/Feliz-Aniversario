$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var overlay = $("#overlay");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("Feliz Aniversário, Grasi! Tudo de bom.").delay(750).fadeIn(300);
                $("#candle").animate({
                    opacity: ".5"
                }, 100);
                overlay.fadeIn(500);
            }
        });
    });
});
