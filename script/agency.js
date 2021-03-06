(($, window, document, undefined)=>{
    
    class Angency {
        init(){
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();

        }
        parallax(){  

          let obj = {
            init(){
              this.section2();
              this.section3();
              this.section4();
              this.section6();
              this.section7();
              this.section8();
              this.section9();
              this.section10();
            },
            section2(){
                const sec2Title    = $('#section2 .title');
                const sec2Col      = $('#section2 .col');
                let   sec2TitleTop = $('#section2 .title').offset().top-$(window).height()-200;
                let   sec2ColTop   = $('#section2 .col').offset().top-$(window).height()-900;
      
              

                $(window).scroll(()=>{
                    
                    if( $(window).scrollTop() == 0 ){
                        sec2Title.removeClass('addParallax');
                        sec2Col.removeClass('addParallax');
                    }
      
                    
                    if( $(window).scrollTop() > sec2TitleTop ){
                        sec2Title.addClass('addParallax');
                    }
      
                    if( $(window).scrollTop() > sec2ColTop ){
                        sec2Col.addClass('addParallax');
                    }
                });
    
            },
            section3(){
                const sec3Title    = $('#section3 .title');
                const sec3Col      = $('#section3 .col');
                let   sec3TitleTop = $('#section3 .title').offset().top-$(window).height()-200;
                let   sec3ColTop   = $('#section3 .col').offset().top-$(window).height()-900;
      
                $(window).scroll(()=>{
                    // ???????????????
                    if( $(window).scrollTop() == 0 ){
                        sec3Title.removeClass('addParallax');
                        sec3Col.removeClass('addParallax');
                    }
      
                    // ??????3?????????
                    if( $(window).scrollTop() > sec3TitleTop ){
                        sec3Title.addClass('addParallax');
                    }
      
                    if( $(window).scrollTop() > sec3ColTop ){
                        sec3Col.addClass('addParallax');
                    }
                });
            },
            section4(){
              const sec4Title        = $('#section4 .title');
              const sec4Row1Col      = $('#section4 .row1-col');
              const sec4Row2Col      = $('#section4 .row2-col');
              let   sec4TitleTop     = $('#section4 .title').offset().top-$(window).height()-200;
              let   sec4Row1ColTop   = $('#section4 .row1-col').offset().top-$(window).height()-900;
              let   sec4Row2ColTop   = $('#section4 .row2-col').offset().top-$(window).height()-900;
              let   t1=false;
              let   t2=false;


              $(window).scroll(()=>{
                  // ???????????????
                  if( $(window).scrollTop() == 0 ){
                      t1=false;
                      t2=false;
                      sec4Title.removeClass('addParallax');

                      sec4Row1Col.removeClass('addParallax');
                      sec4Row2Col.removeClass('addParallax');

                      sec4Row1Col.removeClass('addGallery');
                      sec4Row2Col.removeClass('addGallery');

                  }
    
                  // ??????3?????????
                  if( $(window).scrollTop() > sec4TitleTop ){
                      sec4Title.addClass('addParallax');
                  }
    
                  // ?????????????????? 1??? 4??? ????????? ???
                  if( $(window).scrollTop() > sec4Row1ColTop ){
                      if(t1==false){
                        t1=true;
                        sec4Row1Col.addClass('addParallax');
                      }
                  }

                  // ?????????????????? 2??? 4??? ????????? ???
                  if( $(window).scrollTop() > sec4Row2ColTop ){
                      if(t2==false){
                        t2=true;
                        sec4Row2Col.addClass('addParallax');
                      }
                  }

              });
            },
            section6(){

              // 1.???????????? ???
              //   ??????.offset().top ???????????? ?????? ????????? ???????????? ??????(??????)
                const sec6 = $('#section6');
                let sec6Top = $('#section6').offset().top-$(window).height();

              // 2. ???????????????????????????

              // 3.???????????? ??????
              $(window).scroll(()=>{
                if($(window).scrollTop( ) == 0 ){
                  sec6.removeClass('addParallax');
                }
                if($(window).scrollTop( ) > sec6Top){
                  sec6.addClass('addParallax');
                }
              });
            },
            section7(){
              const sec7 = $('#section7');
              let sec7Top = $('#section7').offset().top-$(window).height();

              $(window).scroll(()=>{
                if($(window).scrollTop()==0){
                  sec7.removeClass('addParallax');
                }
                if($(window).scrollTop() > sec7Top){
                  sec7.addClass('addParallax');
                }
              });

            },
            section8(){

              const sec8  = $("#section8");
              let sec8Top = $("#section8").offset().top-$(window).height()+300;

              $(window).scroll(()=>{
                  if( $(window).scrollTop() == 0 ){
                      sec8.removeClass('addParallax');
                  }
                  if( $(window).scrollTop() > sec8Top ){
                      sec8.addClass('addParallax');
                  }
              });

            },
            section9(){
              const sec9  = $("#section9");
              let sec9Top = $("#section9").offset().top-$(window).height()+130;

              $(window).scroll(()=>{
                  if( $(window).scrollTop() == 0 ){
                    sec9.removeClass('addParallax');
                  }
                  if( $(window).scrollTop() > sec9Top ){
                    sec9.addClass('addParallax');
                  }
              });
            },
            section10(){
              const sec10  = $("#section10");
              let sec10Top = $("#section10").offset().top-$(window).height()+200;

              $(window).scroll(()=>{
                  if( $(window).scrollTop() == 0 ){
                    sec10.removeClass('addParallax');
                  }
                  if( $(window).scrollTop() > sec10Top ){
                    sec10.addClass('addParallax');
                  }
              });
            }
          }
          obj.init();
    
  
  
        }
        header(){
      
          // ????????? ????????? ????????? 0?????? ??????72 ?????? 
          // - ????????? ????????? ?????? ??????
          // ??????.removeClass('addH60');
    
          // ????????? ????????? ????????? 0??? ????????? ?????? 60
          // - ?????? ????????? addH60
          // ??????.addClass('addH60');
    
          // ????????? ????????? ????????????
    
          let newTop = $(window).scrollTop();
          let oldTop = newTop;
          let x = '';
    
          $(window).scroll(function(){
              if( $(window).scrollTop() == 0 ){
                  $('#header').removeClass('addH60');
                  $('#header').removeClass('addShow');
                  $('#header').removeClass('addHide');
              }
              else{
                 $('#header').addClass('addH60');
    
                 //??? ?????? ?????? ???????????? ??????.
                  newTop = $(window).scrollTop();
    
                      x = oldTop-newTop > 0 ? 'UP' : 'DOWN';
    
                      if(x=='UP'){
                          $('#header').addClass('addShow');
                          $('#header').removeClass('addHide');
                      }
    
                      if(x=='DOWN'){
                          $('#header').addClass('addHide');
                          $('#header').removeClass('addShow');
                      }
    
                 oldTop = newTop;
    
              }
          });
    
    
    
    
    
    
    
          //???????????? ?????????
          const mainBtn = $('.main-btn');
          const sub = $('.sub');
          const nav = $('#nav');
          const subBtn = $('.sub-btn');
          const subSub = $('.sub-sub');
          let   t = 0;
          
          resizefn();
          function resizefn(){
              $('.sub').stop().slideUp(0);
              
              if($(window).innerWidth()<=991){
                  if(t==0){
                    t=1;
                    mainBtn.off('mouseenter');
    
                    mainBtn.bind('click',function(){
                      $(this).next('.sub').stop().slideToggle(300); 
                    });
                  }              
              }
              else{
                  t=0;
                  $('.sub').stop().fadeOut(0);
                  mainBtn.off('click');
                  //????????????-????????????
                  mainBtn.on({
                    mouseenter(e){
                      const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    },
                    focusin(e){
                      const $this = $(this);
                            sub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    }
                  });
    
                  nav.on({
                    mouseleave(){
                      sub.stop().fadeOut(300);
                      subSub.stop().fadeOut(300);
                    }
                  });
    
    
                  //????????????-??????????????????
                  subBtn.on({
                    mouseenter(){
                      const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    },
                    focusin(){
                      const $this = $(this);
                            subSub.stop().fadeOut(0);
                            $this.next().stop().fadeIn(300);
                    }
                  });
              }
    
          }
    
    
           $(window).resize(function(){
              resizefn();
           });
    
    
    
           $('.mobile-btn').on({
             click: function(){
               
                nav.slideToggle(300);
                $(this).children().toggleClass('addMobile');
             }
           });
    
    
        }
        section1(){
          // ???????????? ????????? ?????? ?????? ??????
          const slideWrap = $('.slide-wrap');
          const slideView = $('.slide-view');
          const pageBtn = $('.page-btn');
          let   winW = $(window).innerWidth();
          let cnt = 0;
    
          resizefn();
          function resizefn(){
              return  winW = $(window).innerWidth();
          }
    
          $(window).resize(function(){
            resizefn();
          });
    
    
    
    
    
          function mainSlide(){
            slideWrap.stop().animate({left: -winW*cnt }, 600, 'easeInOutExpo', function(){
              if(cnt>2){cnt=0}
              if(cnt<0){cnt=2}
              slideWrap.stop().animate({left: -winW*cnt }, 0);
            });
            pageEvent();
          }    
    
    
          // ????????? ????????? ??????
          function pageEvent(){
              pageBtn.removeClass('currentPage');
              pageBtn.eq(cnt>2?0:cnt).addClass('currentPage');
          }
    
          pageBtn.each(function(idx){
            const $this = $(this);
              $this.on({ //??????3????????? ????????? this
                click: function(){
                  cnt = idx;
                  mainSlide();
                  console.log(idx);
                }
              });
          });
         
          
          function nextCount(){
            cnt++;
            mainSlide();
          }
          function prevCount(){
            cnt--;
            mainSlide();
          }
    
          //setInterval(prevCount, 3000);
    
          // ????????????(???????????? ?????????)
          // ??????????????? ???????????? ?????? : ??????????????????   0 >
          // ???????????? ???????????????  ?????? : ??????????????????  < 0
          let s = null;///?????? ?????? ?????????
          let e = null; //?????? ?????? ?????????
          let dS = null; //???????????????
          let dE = null; //????????????
          let mD = null; //???????????????
          slideView.on({  
              mousedown(event){
                s = event.clientX;
                dS = event.clientX - slideWrap.offset().left-winW;
                mD = true;
              },
              mouseup(event){
                e = event.clientX;
                mD = false;
                if( (s-e) > 0 ){  //????????????-???????????? > 0 ?????? ?????? ??????????????????
                  nextCount();
                }
                if( (s-e) < 0 ){  //????????????-???????????? < 0 ?????? ????????? ??????????????????
                  prevCount();
                }
              },  
              mouseleave(event){
                if( mD !== true ){return}
                e = event.clientX;
                mD = false;
                if( (s-e) > 0 ){  //????????????-???????????? > 0 ?????? ?????? ??????????????????
                  nextCount();
                }
                if( (s-e) < 0 ){  //????????????-???????????? < 0 ?????? ????????? ??????????????????
                  prevCount();
                }
              },
              mousemove(event){  //????????? ??? ??????(????????? ?????? ??????(?????????) ????????? ??????(??????) ????????? ??????)
                //????????? ????????? ??????(mouseDown)??? ??????????????? ????????????.
                if( mD !== true ){return}  //!mD
                dE = e.clientX;
                slideWrap.css({left: dE - dS });
              }
          });

          // ????????? ???????????????
          slideView.on({
            touchstart(event){ // ???????????? mousedown
                s = event.originalEvent.touches[0].clientX;
                dS =event.originalEvent.touches[0].clientX - slideWrap.offset().left-winW;
                mD = true;
            },
            touchend(event){ //???????????? mouseup
                e = event.originalEvent.changedTouches[0].clientX;
                mD = false;
                if( (s-e) > 0 ){  //????????????-???????????? > 0 ?????? ?????? ??????????????????
                  nextCount();
                }
                if( (s-e) < 0 ){  //????????????-???????????? < 0 ?????? ????????? ??????????????????
                  prevCount();
                }
            },
            touchmove(event){// ???????????? mousemove
              if( mD !== true ){return}  //!mD
              dE = event.originalEvent.touches[0].clientX;
              slideWrap.css({left: dE - dS });
            }
          });
    
          
    
    
        }
        section2(){

        }
            
        section3(){
            
        }
        section4(){

          //????????? ????????? ?????? ???????????? ?????? ???????????????
          //position: top left 
          const galleryBtn  = $('.gallery-btn');
          const galleryItem = $('.gallery-item');
          const gallery = $('.gallery');
          let   galW = $(window).innerWidth()/4;
          let   galH = galW*0.8125;
          let   idx  = 0;  //8??? ????????? ?????? ?????? - ????????? ??????
          let   col = 4;
          let   winW = $(window).innerWidth();
  
  
          //?????? ????????? ????????????(?????????) ?????? ?????? ??????
          function resizefn(){
              winW = $(window).innerWidth();
  
              //???????????? ?????? 4??? 3??? 2??? 1??? ????????? ??????
              if( winW >= 1200 ){  //1200?????? ~
                  col=4;
              }
              else if( winW >= 992 ){  //1200?????? ~ 992
                  col=3;
              }            
              else if( winW >= 761 ){  //992?????? ~ 761
                  col=2;
              }
              else {  //761?????? ~ 0
                  col=1;
              }
              
              galW = $(window).innerWidth()/col;
              galH = galW*0.8125;
              galleryItem.animate({width:galW, height:galH},0); 
  
              galleryItem.removeClass('addParallax');  //???????????? ?????? ??????
              galleryItem.removeClass('addGallery');   //?????????       
  
                if(idx==0){ //8??? ????????? ALL
                  gallery.css({height:galH*Math.ceil(8/col)});  //??????
                    //4??? ??????  
                    if(col==4){
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                        galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                        galleryItem.eq(3).show().animate({left:galW*3, top:galH*0},0);
                        galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                        galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                        galleryItem.eq(7).show().animate({left:galW*3, top:galH*1},0);
                    
                    }                 
                    else if(col==3){  //3??? ??????
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                        galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
  
                        galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);
                        galleryItem.eq(5).show().animate({left:galW*2, top:galH*1},0);
  
                        galleryItem.eq(6).show().animate({left:galW*0, top:galH*2},0);
                        galleryItem.eq(7).show().animate({left:galW*1, top:galH*2},0);
  
                    }
                    else if(col==2){ //2??? ??????
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
  
                        galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(3).show().animate({left:galW*1, top:galH*1},0);
  
                        galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                        galleryItem.eq(5).show().animate({left:galW*1, top:galH*2},0);
   
                        galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                        galleryItem.eq(7).show().animate({left:galW*1, top:galH*3},0);
                    
                    }
                    else{ //1??? ??????    
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                        galleryItem.eq(3).show().animate({left:galW*0, top:galH*3},0);
                        galleryItem.eq(4).show().animate({left:galW*0, top:galH*4},0);
                        galleryItem.eq(5).show().animate({left:galW*0, top:galH*5},0);
                        galleryItem.eq(6).show().animate({left:galW*0, top:galH*6},0);
                        galleryItem.eq(7).show().animate({left:galW*0, top:galH*7},0);
                    
                    }
  
                    galleryItem.eq(4).removeClass('row1-col');
                    galleryItem.eq(5).removeClass('row1-col');
                    galleryItem.eq(6).removeClass('row1-col');
                    galleryItem.eq(7).removeClass('row1-col');
  
                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(7).removeClass('row2-col');
  
                } //0??? ?????? ???
                else if(idx==1){ //5
                  //hide
                  gallery.css({height:galH*Math.ceil(5/col)});  //??????
                  galleryItem.eq(0).hide();
                  galleryItem.eq(3).hide();
                  galleryItem.eq(5).hide();
  
                  if(col==4){
                      //show                    
                      galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                      galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);
                      
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                  }
                  else if(col==3){
                      //show
                      galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
  
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);                    
                      galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                  }
                  else if(col==2){
                      //show
                      galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
  
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                      
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                  }
                  else {
                      //show
                      galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);
                  }
  
  
                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');
                    galleryItem.eq(6).addClass('row1-col');
                    
                    galleryItem.eq(7).removeClass('row1-col');
                    galleryItem.eq(7).addClass('row2-col');
  
  
                }
                else if(idx==2){
                  //hide
                  gallery.css({height:galH*Math.ceil(6/col)});
                  galleryItem.eq(3).hide();
                  galleryItem.eq(7).hide();
                  //show
                  if(col==4){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*3, top:galH*0},0);
                      
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                  }
                  else if(col==3){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
  
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);                  
                      galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                      galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                  }
                  else if(col==2){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
  
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);  
  
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(6).show().animate({left:galW*1, top:galH*2},0);
                  }
                  else {
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*3},0);  
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*4},0);
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*5},0);
                  }
  
                      galleryItem.eq(4).removeClass('row2-col');
                      galleryItem.eq(4).addClass('row1-col');
  
                      galleryItem.eq(5).removeClass('row1-col');
                      galleryItem.eq(6).removeClass('row1-col');
  
                      galleryItem.eq(5).removeClass('row2-col');
                      galleryItem.eq(6).removeClass('row2-col');
  
  
                }
                else if(idx==3){
                  //hide
                  gallery.css({height:galH*Math.ceil(4/col)});
  
                  galleryItem.eq(1).hide();
                  galleryItem.eq(6).hide();
                  galleryItem.eq(3).hide();
                  galleryItem.eq(7).hide();
                  //show
  
              
                  if(col==4){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                      galleryItem.eq(5).show().animate({left:galW*3, top:galH*0},0);
                  }
                  else if(col==3){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
  
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                  }
                  else if(col==2){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
  
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                  }
                  else {
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*3},0);
                  }
  
                  galleryItem.eq(4).removeClass('row2-col');
                  galleryItem.eq(5).removeClass('row2-col');
                  galleryItem.eq(4).addClass('row1-col');
                  galleryItem.eq(5).addClass('row1-col');
  
                }
                else if(idx==4){
                  //hide
                  gallery.css({height:galH*Math.ceil(5/col)});
  
                  galleryItem.eq(0).hide();
                  galleryItem.eq(1).hide();
                  galleryItem.eq(4).hide();
  
  
                  //show
                  if(col==4){
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(5).show().animate({left:galW*2, top:galH*0},0);
                      galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);
      
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);  
                  }
                  else if(col==3){
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(5).show().animate({left:galW*2, top:galH*0},0);
  
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);  
  
                  }
                  else if(col==2){
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
  
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
      
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);  
  
                  }
                  else {
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);  
                  }
  
                      galleryItem.eq(5).removeClass('row2-col');
                      galleryItem.eq(6).removeClass('row2-col');
                      galleryItem.eq(5).addClass('row1-col');
                      galleryItem.eq(6).addClass('row1-col');
                      
                      galleryItem.eq(7).removeClass('row1-col');
                      galleryItem.eq(7).addClass('row2-col');
  
                }
                else if(idx==5){
  
                    gallery.css({height:galH*Math.ceil(3/col)});
                    //hide
                    galleryItem.eq(1).hide();
                    galleryItem.eq(2).hide();
                    galleryItem.eq(3).hide();
                    galleryItem.eq(5).hide();
                    galleryItem.eq(6).hide();
                    //show
  
  
                    if(col==4){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                    }
                    else if(col==3){
  
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                    }
                    else if(col==2){
  
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
  
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                    }
                    else {
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                    }
  
                    galleryItem.eq(7).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');
                    galleryItem.eq(7).addClass('row1-col');
  
                } //end if
  
              galleryItem.addClass('addGallery');                  
  
          }  //???????????????
  
          $(window).resize(function(){
            resizefn();
          });
          resizefn();
  
          // ?????????????????? ???????????? ?????? ????????? ????????? 
          // hide(), show() ???????????? ?????? ????????????.
          //?????? 6??? ????????????
          galleryBtn.each(function(index){      
              $(this).on({
                  click: function(e){
                    e.preventDefault();   
  
                    idx = index;
                    resizefn();  //????????? ?????? 
  
                  }
              });
          });
  
  
        }
        section5(){
          
          const circle = $('.circle circle');
          const number = $('.number');
          const per = [0.9, 0.75, 0.9, 0.62]; //90%        
          let   perSize = []; 
          const second = 3;
          let   size = [];
          let   piece = [];
          let   counter = [0,0,0,0]; 
          let   setId = [];
          let sec5Top = $('#section5').offset().top-$(window).height()+300;
          let t = false;
  
          $(window).scroll(function(){
  
              if( $(window).scrollTop() == 0 ){
                t=false;
              } 
  
              if( $(window).scrollTop() > sec5Top ){
                console.log( $(window).scrollTop() );
                console.log( sec5Top );
                  if(t==false){
                    t=true;
                    svgAni();
                  }
              }
              
          });
  
          function  svgAni(){
              counter = [0,0,0,0];
              $.each(circle, function(idx, obj){
  
                  size[idx] = obj.getTotalLength();
  
                
                  obj.style.strokeDasharray  = size[idx];
                  obj.style.strokeDashoffset = size[idx];
  
                  
                  perSize[idx] = size[idx] * per[idx];
  
                 
                  piece[idx] = (perSize[idx]/second)/100;
  
                  function mainSvg(){
                    $(obj).css({ strokeDashoffset: size[idx]-counter[idx] });                  
                    number.eq(idx).text( Math.ceil(counter[idx]/size[idx]*100) + '%' );
                  }
  
                  function countTimer(){
                    counter[idx] += piece[idx];
                    if( counter[idx] >= perSize[idx] ){
                      clearInterval(setId[idx]);
                    }
                    else{
                      mainSvg();
                    }                  
                  }
  
                  setId[idx] = setInterval(countTimer, 10);
  
              });
          }
  
  
        }
        section6(){
            
        }
        section7(){
            
        }
        section8(){
            
        }
        section9(){
            

        }
        section10(){
        
          //??? ????????? ?????? ????????????
          //AJAX
          const submitBtn = $('.submit-btn');
          const name = $('#name');
          const mail = $('#mail');
    
          // ????????????
          submitBtn.on({
            click: function(e){
                 e.preventDefault();
    
                  if( name.val() =='' ){
                      alert('????????? ???????????????!')
                      name.focus();
                      return false;
                  }            
                  if( mail.val() =='' ){
                      alert('????????? ???????????????!')
                      mail.focus();
                      return false;
                  }
    
                  //$.ajax({});
                  $.ajax({
                      url:'./response.php',
                      method:'POST',
                      data: {
                          name: name.val(),
                          mail: mail.val()
                      },
                      success: function(result){
                          $('#name').val('');
                          $('#mail').val('');
                          $('#name').focus();

                         
                      },
                      error: function(err){
                          console.log(err);
                          alert('AJAX ?????? ??????!');
                      }
                  });
    
    
            }
          });

          // ????????????
          $('.list-btn').on({
            click:function(){
              $.ajax({
                url:'./data/member_mail.json',
                method:'GET',
                success: function(result){
                  // ???????????? ??????
                  let txt = '';
                  $.each(result, function(idx, item){
                    // console.log(idx, item.??????, item.?????????);
                    // ????????? ??????
                    
                      txt += "<tr>";
                      txt += "<td>" + (idx+1) + "</td>"
                      txt += "<td>" + item.?????? + "</td>"
                      txt += "<td>" + item.????????? + "</td>"
                      txt += "</tr>" 
                  });

                  $('.list-box tbody').html( txt );/* ?????? */


                  // result.map(function(item, index){
                  //   console.log(a, b);
                  // })

                },
                error:function(err){
                  console.log('AJAX ??????',err);
                }
              });
            }
          });


    
    
        }    
        footer(){
          const goTop =$('.go-top');
          goTop.on({
            click: function(){
              $('html, body').stop().animate({scrollTop:0},600);
            }
          });
        }

    }
    const newAngency = new Angency();
         newAngency.init();
})(jQuery, window, document);