 jQuery(document).ready(function($) {
              var owl = $('.owl-carousel');
              owl.on('initialize.owl.carousel initialized.owl.carousel ' +
                'initialize.owl.carousel initialize.owl.carousel ' +
                'resize.owl.carousel resized.owl.carousel ' +
                'refresh.owl.carousel refreshed.owl.carousel ' +
                'update.owl.carousel updated.owl.carousel ' +
                'drag.owl.carousel dragged.owl.carousel ' +
                'translate.owl.carousel translated.owl.carousel ' +
                'to.owl.carousel changed.owl.carousel',
                function(e) {
                  $('.' + e.type)
                    .removeClass('secondary')
                    .addClass('success');
                  window.setTimeout(function() {
                    $('.' + e.type)
                      .removeClass('success')
                      .addClass('secondary');
                  }, 500);
                });
              owl.owlCarousel({
                loop: true,
                nav: true,
                lazyLoad: true,
                margin: 10,
                video: true,
                autoplay:true,
                autoplaySpeed:1000,
                responsive: {
                  0: {
                    items: 1,
                  },
                  400: {
                    items: 2,
                  },
                  500: {
                    items: 3,
                  },
                  990: {
                    items: 4,
                  },
                  1450: {
                    items: 5
                  }
                }
              });
            });