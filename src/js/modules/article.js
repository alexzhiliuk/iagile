$(document).ready(function() {

    $(".article-content table").each(function(i, table) {
        $(table).wrap('<div class="table-wrapper"></div>')
    })
    
    $(".article-content .video").click(function() {
    
        if ($(this).hasClass("video_clear")) { return }
        $(this).addClass("video_clear")

        let wrapper = $(this).find(".video__wrapper")
        
        // Получаем HTML-код страницы
        let html = wrapper.html();
    
        // Регулярное выражение для поиска комментариев
        const commentRegex = /<!--([\s\S]*?)-->/g;
    
        // Заменяем комментарии на их содержимое
        html = html.replace(commentRegex, function(match, content) {
            return content.trim(); // Убираем лишние пробелы
        });
    
        // Обновляем HTML-код страницы
        wrapper.html(html);
    })

})
