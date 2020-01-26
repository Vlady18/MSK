$(document).ready(function () {
  $('.sliderWrapper').slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow: '<div class="sliderWrapper_prevArrow"><img src="img/prevArrow.png" alt=""></div>',
    nextArrow: '<div class="sliderWrapper_nextArrow"><img src="img/nextArrow.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 774,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('#menuButton').click(function() {
    $('#overlay').toggleClass('dpb');
    $('.mobileMenu').toggleClass('dpb');
    $('body').toggleClass('ovfhd');
  });
  $('#overlay').click(function() {
    $('#overlay').toggleClass('dpb');
    $('.mobileMenu').toggleClass('dpb');
    $('body').toggleClass('ovfhd');
  })

  if($(window).width() > 1024)
  {

    $('body').parallax({
      'elements': [
        {
          'selector': '.rose_par-one',
          'properties': {
            'x': {
              'right': {
                'initial': 45,
                'multiplier': 0.004,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': 250,
                'multiplier': 0.02,
                'unit': 'px',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.white_par-one',
          'properties': {
            'x': {
              'right': {
                'initial': 150,
                'multiplier': 0.04,
                'unit': 'px',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': 150,
                'multiplier': 0.2,
                'unit': 'px',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.white_par-two',
          'properties': {
            'x': {
              'left': {
                'initial': 3,
                'multiplier': 0.004,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': 43,
                'multiplier': 0.002,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.rose_par-two',
          'properties': {
            'x': {
              'left': {
                'initial': 9,
                'multiplier': 0.009,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': 50,
                'multiplier': 0.008,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.white_par-third',
          'properties': {
            'x': {
              'left': {
                'initial': 3,
                'multiplier': 0.003,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': 15,
                'multiplier': 0.001,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.rose_par-third',
          'properties': {
            'x': {
              'left': {
                'initial': 40,
                'multiplier': 0.006,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': 5,
                'multiplier': 0.003,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.white_par-four',
          'properties': {
            'x': {
              'left': {
                'initial': 60,
                'multiplier': 0.016,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': 7,
                'multiplier': 0.003,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.rose_par-four',
          'properties': {
            'x': {
              'right': {
                'initial': 2,
                'multiplier': 0.011,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': 25,
                'multiplier': 0.013,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
        {
          'selector': '.white_par-five',
          'properties': {
            'x': {
              'right': {
                'initial': 5,
                'multiplier': 0.015,
                'unit': '%',
                'invert': false
              }
            },
            'y': {
              'bottom': {
                'initial': 36,
                'multiplier': 0.01,
                'unit': '%',
                'invert': false
              }
            }
          }
        },
      ]
    });
  }
  $('.mobileMenu li a.dropDownTrigger').click(function(e) {
    e.preventDefault;
    $(this).parent().find('.menuDropDown').toggleClass('dpb');
    $(this).find('i').toggleClass('rt');
  })

  $('.promItem').hover(function() {
    $('.promItem p').toggleClass('animated fadeInUp');
    $('.promItem img').toggleClass('animated fadeInUp');
    $(this).children().first().toggleClass('animated slideInUp');
  })
})
