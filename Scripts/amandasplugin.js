/*!
 * Amandas First Plugin
 * Author: Amanda
 * 
 * Licensed under the MIT license
 */

; (function ($, window, document, undefined) {

    $.widget("amanda.stockGallery", {

        options: {
            someValue: null,
            value: [],
            url: "http://placekitten.com",
            height: 450,
            widthHeightSeperator: "/",
            padding: 50
        },

        _create: function () {
            var _self = this,
                $el = _self.element,
                o = _self.options;

            self._options = {

            }
            $el.html('');
            var injectHtml = '<div>';
            for (var i = 0, ii = o.value.length; i < ii; i++) {
                var slug = o.value[i];
                var url = o.url + "/" + slug.width + o.widthHeightSeperator + o.height;
                injectHtml += '<div class="ui-stockGallery-slug"><img src="' + url + '" title="' + slug.name + '"/></div>'

            }
            injectHtml += "</div>"
            var $injectHtml = $(injectHtml);
            $el.html($injectHtml)
        },

        _init: function () {
            var _self = this,
                $el = _self.element,
                o = _self.options,
                _o = _self._options;

            $el.find('.ui-stockGallery-slug').each(function (i, e) {
                $(this).css({
                    'padding': o.padding + 'px'
                }).find('img')
                    .attr({
                        'src': o.url + "/" + o.value[i].width + o.widthHeightSeperator + o.height,
                        'title': o.value[i].name
                    });
            });
        },

        destroy: function () {
            var _self = this,
               $el = _self.element,
               o = _self.options,
               _o = _self._options;

            $el.html('');

            $.Widget.prototype.destroy.call(this);

        },

        publicMethod: function (event) {
            var _self = this,
                 $el = _self.element,
                 o = _self.options,
                 _o = _self._options;


            _self._privateMethod();
            alert('pub method');

        },

        _privateMethod: function () {
            var _self = this,
                 $el = _self.element,
                 o = _self.options,
                 _o = _self._options;
            alert('im private');
        },

        _setOptions: function (obj) {
            for (var option in obj) {
                this._setOption(option, obj[option]);
            }
        },

        _setOption: function (key, value) {
            switch (key) {
                case "someValue":
                    alert('somevalue')
                    break;
                default:
                    break;
            }
            $.Widget.prototype._setOption.apply(this, arguments);
        }
    });

//    $.widget("amanda.imageSlider", {
//        options: {
//            //someValue: null,
//            //value: [],
//            //url: "http://placekitten.com",
//            //height: 450,
//            //widthHeightSeperator: "/",
//            //padding: 50
//            overflow: hidden
//        },

//        _create: function () {
//            var _self = this,
//                $el = _self.element,
//                o = _self.options;
//        },

//        _init: function () {
//            var _self = this,
//               $el = _self.element,
//               o = _self.options,
//               _o = _self._options;
//        },

//        destroy: function () {
//            var _self = this,
//            $el = _self.element,
//            o = _self.options,
//            _o = _self._options;

//            $el.html('');

//            $.Widget.prototype.destroy.call(this);
//        },

//        publicMethod: function (event) {
//            var _self = this,
//                 $el = _self.element,
//                 o = _self.options,
//                 _o = _self._options;


//            _self._privateMethod();
//            alert('pub method');

//        },

//        _privateMethod: function () {
//            var _self = this,
//                 $el = _self.element,
//                 o = _self.options,
//                 _o = _self._options;
//            alert('im private');
//        },



//        _setOptions: function (obj) {
//            for (var option in obj) {
//                this._setOption(option, obj[option]);
//            }
//        },

//        _setOption: function (key, value) {
//            switch (key) {
//                case "someValue":

//                    alert('somevalue')

//                    //this.options.someValue = doSomethingWith( value );
//                    break;
//                default:
//                    //this.options[ key ] = value;
//                    break;
//            }
//            $.Widget.prototype._setOption.apply(this, arguments);
//        }
//    });

})(jQuery, window, document);