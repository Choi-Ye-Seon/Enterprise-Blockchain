// Lenis scroll
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);


// Header / nav 다국어 선택
$('#nav .select-language .link-nav').click(function (e) {
  e.preventDefault();
  const select = $(this).siblings('.language-list');

  if (select.hasClass('show')) {
    select.removeClass('show');
  } else {
    select.addClass('show');
  }
});

$('#nav .link-language').click(function () {
  $('#nav .language-list').removeClass('show');
});

$("#nav .link-nav").not('.select-language .link-nav').click(function(){
  $('#nav .language-list').removeClass('show');
});


// Header dark 테마 컨트롤
// .sc-anyone 영역
ScrollTrigger.create({
  trigger: '.sc-anyone .gig-worker',
  start: '0% 0%',
  endTrigger: '.sc-data-possible',
  end: '0% 50%',
  // markers:true,
  toggleClass: {
    targets: '#header',
    className: 'dark'
  }
});

// Body dark 테마 컨트롤
// .sc-data-possible 영역
ScrollTrigger.create({
  trigger: '.sc-data-possible',
  start: '0% 50%',
  endTrigger: '.sc-service',
  end: '100% 40%',
  // markers:true,
  toggleClass: {
    targets: 'body',
    className: 'dark'
  }
});


// Intro Gsap (text 모션 + header 노출)
const intro = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-intro',
    start: '0% 0%',
    end: '100%, 100%',
    // markers: true,
    scrub: true
  }
});

intro
  .to('.sc-intro .group-intro-text', 1, {background: 'rgba(0, 0, 0, 0.7)'}, 'bg')
  .to('.sc-intro .intro-description1', 1, {opacity: 1}, 'bg') 
  .to('.sc-intro .intro-description1', 1, {
    opacity: 0,
    onStart: function () {
      $('#header').addClass('show');
    },
    onReverseComplete: function () {
      $('#header').removeClass('show');
    }
  })
  .to('.sc-intro .intro-description2', 1, {opacity: 1}) 
  .to('.sc-intro .intro-description2', 1, {opacity: 0}) 
  .to('.sc-intro .intro-description3', 1, {opacity: 1}) 
  .to('.sc-intro .intro-description3', 1, {opacity: 0}) 
  .to('.sc-intro .intro-description4', 1, {opacity: 1}) 
  .to('.sc-intro .scroll-down', 0.1, {opacity: 0});



// Slogan Gsap (text 모션)
const slogan = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-slogan',
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub: true
  }
});

gsap.set('.sc-slogan .slogan-text', {opacity: 0});
slogan
  // overlay / text 노출 
  .to('.sc-slogan .group-slogan-text', {background: 'rgba(0, 0, 0, 0.7)'}, 'first')
  .to('.sc-slogan .slogan-text', {opacity: 1}, 'first')

  // text 모션
  .to('.sc-slogan .group-slogan-text', {background: 'rgba(0,0,0,0)'}, 'move')
  .to('.sc-slogan .slogan-text.keyword1', {xPercent: 100}, 'move')
  .to('.sc-slogan .slogan-text.keyword2', {xPercent: -100}, 'move')
  .to('.sc-slogan .slogan-text', {opacity: 0})

  // imgBox 모션
  .to('.sc-slogan .group-bgimg .box1', {height: 0})
  .to('.sc-slogan .group-bgimg .box2', {height: 0})

  // 마지막 text 노출
  .to('.sc-slogan .group-slogan-description', {opacity: 1, background: 'rgba(0, 0, 0, 0.4)'});



// 가치 증명 Gsap
const prove = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-prove',
    start: '0% 70%',
    end: '100% 100%',
    // markers: true,
    scrub: true
  }
});

prove.from('.sc-prove .title', {x: 0}).from('.sc-prove', {'--x': 1}, '<');



// Data Possible
const possible = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-data-possible',
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub: true,
    invalidateOnRefresh: true
  }
});
possible
.to('.data-possible-content', {
  xPercent: -100,
  x: function () {
    return window.innerWidth - 160;
  }
});



// COLOR BANNER
const banner = gsap.timeline({
  scrollTrigger: {
    trigger: '.color-banner',
    start: '0% 90%',
    end: '100% 40%',
    // markers:true,
    scrub: true
  }
});

banner
  .to('.color-banner .banner-left', {x: 0}, 'banner')
  .to('.color-banner .banner-right', {x: 0}, 'banner')
  .to('.color-banner .description', {
    opacity: 1,
    delay: 0.8,
    onStart: function () {
      $('.color-banner').css('--opacity', 1);
    },
    onReverseComplete: function () {
      $('.color-banner').css('--opacity', 0);
    }
  });


// SERVICE
// 1. 안전하고 대체불가능한 DATA ID
gsap.set('.sc-service .item-thumb', {opacity: 0});
gsap.to('.sc-service .item-thumb', 0.5, {
  opacity: 1,
  scrollTrigger: {
    trigger: '.sc-service .safety-content',
    start: '0% 35%',
    end: '100% 100%',
    // markers:true,
    toggleActions: 'play reverse play reverse'
  }
});

const service01 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-service .safety-content',
    start: '0% 0%',
    end: '100% 100%',
    // markers:true,
    scrub: true,
    invalidateOnRefresh: true
  }
});
// 카드 이동 + 겹치기
service01
  .to('.sc-service .content-inner', {
    x: function () {
      return $('.sc-service .content-inner .group-head').outerWidth() * -1;
    }
  })
  .to('.sc-service .safety-item:nth-child(2)', 1, {xPercent: -100, x: 40 * -1}, 'slide')
  .to('.sc-service .safety-item:nth-child(3)', 1, {xPercent: -100 * 2, x: 40 * -2}, 'slide')
  .to('.sc-service .safety-item:nth-child(4)', 1, {xPercent: -100 * 3, x: 40 * -3}, 'slide')

  .to('.sc-service .safety-item.lock .ic-lock-active', 0.5, {opacity: 0}, 'lock-=1')
  .to('.sc-service .safety-item.lock .ic-lock', 0.5, {opacity: 1}, 'lock-=0.5')
  
  .to('.sc-service .safety-item.lock .ic-lock', {opacity: 0});



// 2. 금융서비스
gsap.set('.sc-service .finance-content .head-fixed', {autoAlpha: 0});

const service02 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-service .finance-content',
    start: '0% 0%',
    end: '100% 100%',
    // markers:true,
    scrub: true,
    onEnter: function () {
      gsap.set('.sc-service .safety-list', {autoAlpha: 0});
      gsap.set('.sc-service .finance-content .head-fixed', {autoAlpha: 1});
    },
    onLeaveBack: function () {
      gsap.set('.sc-service .safety-list', {autoAlpha: 1});
      gsap.set('.sc-service .finance-content .head-fixed', {autoAlpha: 0});
    }
  }
});

service02
  .to('.sc-service .head-card p', {opacity: 1}, 'a');



// 3. 코멘트 card 이동+겹치기
gsap.set('.sc-service .comment-content .head-fixed', {autoAlpha: 0});
const service03 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-service .comment-content',
    start: '0% 0%',
    end: '100% 100%',
    // markers:true,
    scrub: true,
    onEnter: function () {
      gsap.set('.sc-service .comment-content .head-fixed', {autoAlpha: 1});
      gsap.set('.sc-service .finance-content .head-fixed', {autoAlpha: 0});
    },
    onLeaveBack: function () {
      gsap.set('.sc-service .comment-content .head-fixed', {autoAlpha: 0});
      gsap.set('.sc-service .finance-content .head-fixed', {autoAlpha: 1});
    }
  }
});
service03
  .to('.sc-service .comment-list', {x: -190})
  .to('.sc-service .comment-list', {x: 0}, 'slide')
  .to(
    '.sc-service .comment-item:nth-child(2)',
    {
      xPercent: -100,
      x: 40 * -1
    },
    'slide'
  )
  .to(
    '.sc-service .comment-item:nth-child(3)',
    {
      xPercent: -100 * 2,
      x: 40 * -2
    },
    'slide'
  )
  .to(
    '.sc-service .comment-item:nth-child(4)',
    {
      xPercent: -100 * 3,
      x: 40 * -3
    },
    'slide'
  )
  .to('.sc-service .head-card', 0.5, {'--opacity': 1, immediateRender: true}, 'title')
  .to('.sc-service .sub-title', {autoAlpha: 1}, 'title+=0.3');




// White Theme
ScrollTrigger.create({
  trigger: '.sc-service',
  start: '0% 0%',
  end: '100% 30%',
  // markers:true,
  scrub: true,
  onLeave: function () {
    $('body').removeClass('dark');
    $('#header').addClass('dark');
  },
  onEnterBack: function () {
    $('body').addClass('dark');
    $('#header').removeClass('dark');
  }
});



// sc-network
const network = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-network',
    start: '0% 70%',
    end: '100% 70%',
    // markers:true,
    scrub: true
  }
});

network.from('.sc-network .title', {x: 0}).from('.sc-network', {'--x': 1}, '<');


// Assets
const assets = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-assets',
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub: true,
    invalidateOnRefresh: true,
    toggleClass: {
      targets: '.sc-assets .assets-under',
      className: 'show'
    },
    onUpdate: function (self) {
      console.log(self); 

      if (self.progress > 0.5) {
        gsap.to('.under-title-item.futrue', {opacity: 1}, 'a');
        gsap.to('.under-title-item.past', {opacity: 0}, 'a');
      } else {
        gsap.to('.under-title-item.past', {opacity: 1}, 'b');
        gsap.to('.under-title-item.futrue', {opacity: 0}, 'b');
      }
    }
  }
});


assets.to('.sc-assets .content-wrap', {
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  }
});


// Creator
const creator = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-creator',
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub: true
  },
  defaults: {
    duration: 0.5
  }
});
creator.to('.sc-creator .creator-text', {opacity: 1})
.to('.sc-creator .scroll-down', {opacity: 1})
.to('.sc-creator .creator-text', {opacity: 0}, 'hd')
.to('.sc-creator .scroll-down', {opacity: 0}, 'hd');


// how to
const howTo = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-how-to',
    start: '0% 0%',
    end: '100% 100%',
    // markers: true,
    scrub: true,
    invalidateOnRefresh: true,
    onEnter: function () {
      $('.sc-how-to').css('--opacity', 1);
    },
    onLeaveBack: function () {
      $('.sc-how-to').css('--opacity', 0);
    }
  }
});

howTo.to('.sc-how-to .group-how-to', {
  xPercent: -100,
  x: function () {
    return window.innerWidth - 160;
  }
});


// join marquee 모션
const join = gsap.timeline({
  scrollTrigger: {
    trigger: '#footer',
    start: '0% 100%',
    end: '100% 0%',
    // markers:true,
    scrub: true,
    toggleClass: {
      targets: '.sc-join',
      className: 'active'
    },
    onEnter: function () {
      marquee.play();
    },
    onLeaveBack: function () {
      marquee.pause();
    }
  }
});

const marquee = gsap.to('.sc-join .join-inner', 10, {
  x: 700,
  repeat: -1,
  ease: 'none',
  paused: true
});



// topBtn
ScrollTrigger.create({
  trigger: '.sc-slogan',
  start: '0% 0%',
  endTrigger: '#footer',
  end: '100% 100%',
  onUpdate: function (self) {
    // console.log(self);
    const direction = self.direction;
    if (direction === 1) {
      $('#topBtn').removeClass('show');
    } else {
      $('#topBtn').addClass('show');
    }
  },
  onLeaveBack: function () {
    $('#topBtn').removeClass('show');
  }
});

$('#topBtn').click(function () {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

