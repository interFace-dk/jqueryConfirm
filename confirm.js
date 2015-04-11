(function ( $ ) {
    $.fn.confirm = function(options) {
        var settings = $.extend({}, $.fn.confirm.defaults, options);
        var settings = $.extend({}, $.fn.confirm.defaults, options);

        this.click(function(ev){
            ev.preventDefault();
            ev.stopPropagation();

            if (settings.route == null) {
                settings.route = $(this).attr('href');
            }

            var me = $(this);
            bootbox.confirm(settings.message, function(result){
                if (result) {
                    if (settings.ajax) {
                        handleAjax(me);
                    } else {
                        handleRaw(me);
                    }
                }
            });
        });

        var handleAjax = function(el) {
            $.ajax({
                url: settings.route,
                data: settings.data,
                method: settings.method,
                dataType: settings.dataType,
                context: el,
            }).done(settings.onAjaxSuccess).fail(settings.onAjaxFailure);
        };

        var handleRaw = function(el) {
            var form = $("<form>");
            form.attr('action', settings.route);

            if (settings.method == 'GET') {
                form.attr('method', 'GET');
            } else {
                form.attr('method', 'POST');
                form.append(inputField('_method', settings.method, 'hidden'));
            }


            //Append all the data attibutes as inputfields
            if (settings.data != null) {
                for(var key in settings.data) {
                    if (settings.data.hasOwnProperty(key)) {
                        form.append(inputField(key, settings.data[key], 'hidden'));
                    }
                }
            }

            form.submit();
        };

        var inputField = function(name, value, type) {
            var input =  $("<input>");
            input.attr('type', type);
            input.attr('name', name);
            input.attr('value', value);
            return input;
        };

    };

    $.fn.confirm.defaults = {
        ajax: false,
        method: 'GET',
        dataType: 'json',
        route: null,
        data: {},
        message: 'Are you sure you want to delete?',
        onAjaxSuccess: function() {},
        onAjaxFailure: function() {}
    };


}( jQuery ));
