$(".header__burger").click(function() {
    $(this).toggleClass("header__burger_active")
    $("html, body").toggleClass("lock-clip")

    let header = $(this).parents(".header")
    header.toggleClass("header_active")

    if (!header.hasClass("header_active")) {
        $(this).parents(".header").find(".header__nav").insertAfter(".header__logo")
        $(this).parents(".header").find(".header__btn").insertAfter(".header__nav")
        $(".header__mobile").remove()
    } else {
        let mobileElement = $("<div class='header__mobile container'></div>")
    
        $(this).parents(".header").append(mobileElement)
        $(this).parents(".header").find(".header__nav").appendTo(".header__mobile")
        $(this).parents(".header").find(".header__btn").appendTo(".header__mobile")
    }

})