$(function() {

    $('.js-h1').dropdown({content: '<div>Content</div>'});

    $('.js-h2').tooltip({position: 'left', content: function() { return 'Tooltip'; }});
    $('.js-h3').tooltip({extraClass: 'tooltip', position: 'right', content: function() { return 'Tooltip'; }});
    $('.js-h4').dropdown({position: 'top', content: function(done) { setTimeout(function() { done('Dropdown 500'); }, 500); }});

    $('.js-trigger-big').click(function() { $('.js-auto-handle').toggleClass('big'); });
    $('.js-auto-handle').each(function(i, el) {
        $(el).dropdown({position: $(el).attr('data-position'), content: 'Menu item 1<br/>Menu item 2'});
    });

    var count = 0;
    $('.js-fly-generator-1').click(function(evt) {
        count++;
        var $handle = $('<span>handle ' + count + '</span>');

        $(this).parent().append($handle);

        $handle.dropdown({content: 'Hello ' + count});
        setTimeout(function() {
            $handle.dropdown('instance').onclick();
        }, 10);
    });

    var count = 0;
    $('.js-fly-generator-2').click(function(evt) {
        count++;
        var $handle = $('<span>handle ' + count + '</span>');

        $(this).parent().append($handle);

        var dropdown = $.fly.dropdown.create($handle, {content: 'Hello ' + count});

        setTimeout(function() {
            dropdown.onclick();
        }, 10);
    });
});
