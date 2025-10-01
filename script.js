$(document).ready(function() {
    
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this.getAttribute('href'));
        
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.navbar').css('box-shadow', '0 4px 15px rgba(0,0,0,0.15)');
        } else {
            $('.navbar').css('box-shadow', '0 2px 10px rgba(0,0,0,0.1)');
        }
    });
    
    $('#orderBtn').on('click', function() {
        alert('Terima kasih! Silakan hubungi kami di WhatsApp: 0812-3456-7890 untuk melakukan pemesanan.');
    });
    
    $('.product-card').on('click', function() {
        var productName = $(this).find('h4').text();
        var productPrice = $(this).find('.price').text();
        
        var message = 'Anda tertarik dengan ' + productName + ' seharga ' + productPrice + '?\n\nHubungi kami untuk pemesanan!';
        
        if(confirm(message)) {
            window.location.href = 'https://wa.me/6281234567890';
        }
    });
    $(window).scroll(function() {
        $('.product-card').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            
            if(elementTop < viewportBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
    $('.product-card').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('section');
        var navLinks = document.querySelectorAll('.nav-link');
        
        var current = '';
        
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            
            if(pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
});