function sectionIndicator(opt) {
    var $si = $('.section-indicator');
    var $si_list = $si.find('li');
    var $si_numbering = $si.find('.numbering');

    this.activeIndex = 0;

    this.changeIndicator = function(i) {
        $si_list.removeClass('active');
        $si_list.eq(i).addClass('active');
    }

    this.init = function() {
        var that = this;

        $si_list.each(function(i) {
            var $li = $(this);
            var $el = $(this).find('a');

            /*if(opt && opt.animate) {
                setTimeout(function() {
                    $li.addClass('show');
                }, i * 70);
            }*/

            $el.on('click', function(e) {
                e.preventDefault();

                that.changeIndicator(i);
                that.activeIndex = i;

                var current_val = that.activeIndex < 10 ? '0'+(that.activeIndex + 1) : (that.activeIndex + 1);

                $si_numbering.find('.current').text(current_val);
            });
        });
        
        /*if(opt && opt.animate) {
            $si.addClass('show');
        }*/
    }

    this.init();
}