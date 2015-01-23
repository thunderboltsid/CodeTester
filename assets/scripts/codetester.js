var windowHeight = $(window).height();
var topBarHeight = $("#topBar").height();
var codeContainerHeight = windowHeight - topBarHeight;
$(".codeContainer").height(codeContainerHeight + "px");
$(".toggle").click(function () {
    $(this).toggleClass("selected");
    var activeDiv = $(this).html();
    $("#" + activeDiv + "Container").toggle();
    var showingDivs = $(".codeContainer").filter(function () {
        return ($(this).css("display") != "none");
    }).length;
    var width = 91.7 / showingDivs;
    $(".codeContainer").width(width + "%");
});
$("#runButton").click(function () {
    $("iframe").contents().find("html").html("<style>" + $("#cssCode").val() + "</style>" + $("#htmlCode").val());
    document.getElementById("resultArea").contentWindow;
});

