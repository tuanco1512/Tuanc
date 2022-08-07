
    /*-------------------
		Quantity change
	--------------------- */
  'use strict';

(function ($) {
  var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

})(jQuery);


// Close modal img
// $('.close-modal').click(function(){
//   $('.modal__quick-view-section').hide();
// });
// $('.modal__overlay').click(function(){
//   $('.modal__quick-view-section').hide();
// });

// $('.card-quick-view').click(function() {
//   $('.modal__quick-view-section').show();
// });

// Modal img
var imgFeature1 = document.querySelector('.img-feature.product1')
var listImg1 = document.querySelectorAll('.list-img.product1')

listImg1.forEach(imgElement => {
  imgElement.addEventListener('click', e => {
    imgFeature1.src =  e.target.getAttribute('src')
  })
})

var imgFeature2 = document.querySelector('.img-feature.product2')
var listImg2 = document.querySelectorAll('.list-img.product2')

listImg2.forEach(imgElement => {
  imgElement.addEventListener('click', e => {
    imgFeature2.src =  e.target.getAttribute('src')
  })
})



// Header reponsive
// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     navbar.classList.remove('active');
// }

// Header
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".main-header").addClass("changeb");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".main-header").removeClass("changeb");
        }
    });
});



// Products
$(document).on('click', 'div span', function() {
    $(this).addClass('product-active').siblings().removeClass('product-active')
});

(function ($) {
    var $contents = $('.product-list > li');
    $("#fillters span").click(function (e) {
        var range = $(this).find('a').data('range');
        if (range == 'All') {
            $contents.show();
        } else {
            $contents.hide().filter('[data-range="' + range + '"]').show()
        }
    }); //click anchor
})(jQuery);

// validate form
var email = document.querySelector('#email')
var confirm = document.querySelector('#confirm')
var form = document.querySelector('form')

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector('small');

  parent.classList.add('error');
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector('small');

  parent.classList.remove('error');
  small.innerText = ' '
}

function checkError(arrayInput) {
  let isEmptyError = false;
  arrayInput.forEach(input => {
    input.value = input.value.trim()

    if (!input.value) {
      isEmptyError = true;
      showError(input, 'Khong duoc de trong')
    } else {
      showSuccess(input)
    }
  });

  return isEmptyError;
}

function checkEmail(input) {
  const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim()

  let isEmailError = !regexEmail.test(input.value)
  if (regexEmail.test(input.value)) {
    showSuccess(input)
  } else {
    showError(input, 'Email Invaild')
  }
  return isEmailError
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  let isEmptyError = checkError([email])
  let isEmailError = checkEmail(email)
});

// End validate form



// Gallery

$(document).ready(function() {

  var owl = $("#owl-demo");

  owl.owlCarousel({
    autoPlay : true,
    responsive: true,
    items : 6, //10 items above 1000px browser width
    itemsDesktop : [1024,4], //5 items between 1024px and 901px
    itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0;
    itemsMobile : [320,1],
    navigation : true,
    slideSpeed : 500,
    pagination : true,
    navigation : false,
  });

});

if ( typeof Object.create !== "function" ) {
  Object.create = function( obj ) {
    function F() {};
    F.prototype = obj;
    return new F();
  };
}
(function( $, window, document, undefined ) {

  var Carousel = {
    init :function(options, el){
      var base = this;

      base.$elem = $(el);

      // options passed via js override options passed via data attributes
      base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

      base.userOptions = options;
      base.loadContent();
    },

    loadContent : function(){
      var base = this;

      if (typeof base.options.beforeInit === "function") {
        base.options.beforeInit.apply(this,[base.$elem]);
      }

      if (typeof base.options.jsonPath === "string") {
        var url = base.options.jsonPath;

        function getData(data) {
          if (typeof base.options.jsonSuccess === "function") {
            base.options.jsonSuccess.apply(this,[data]);
          } else {
            var content = "";
            for(var i in data["owl"]){
              content += data["owl"][i]["item"];
            }
            base.$elem.html(content);
          }
          base.logIn();
        }
        $.getJSON(url,getData);
      } else {
        base.logIn();
      }
    },

    logIn : function(action){
      var base = this;

      base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
        .data("owl-originalClasses", base.$elem.attr("class"));

      base.$elem.css({opacity: 0});
      base.orignalItems = base.options.items;
      base.checkBrowser();
      base.wrapperWidth = 0;
      base.checkVisible;
      base.setVars();
    },

    setVars : function(){
      var base = this;
      if(base.$elem.children().length === 0){return false}
      base.baseClass();
      base.eventTypes();
      base.$userItems = base.$elem.children();
      base.itemsAmount = base.$userItems.length;
      base.wrapItems();
      base.$owlItems = base.$elem.find(".owl-item");
      base.$owlWrapper = base.$elem.find(".owl-wrapper");
      base.playDirection = "next";
      base.prevItem = 0;
      base.prevArr = [0];
      base.currentItem = 0;
      base.customEvents();
      base.onStartup();
    },

    onStartup : function(){
      var base = this;
      base.updateItems();
      base.calculateAll();
      base.buildControls();
      base.updateControls();
      base.response();
      base.moveEvents();
      base.stopOnHover();
      base.owlStatus();

      if(base.options.transitionStyle !== false){
        base.transitionTypes(base.options.transitionStyle);
      }
      if(base.options.autoPlay === true){
        base.options.autoPlay = 5000;
      }
      base.play();

      base.$elem.find(".owl-wrapper").css("display","block")

      if(!base.$elem.is(":visible")){
        base.watchVisibility();
      } else {
        base.$elem.css("opacity",1);
      }
      base.onstartup = false;
      base.eachMoveUpdate();
      if (typeof base.options.afterInit === "function") {
        base.options.afterInit.apply(this,[base.$elem]);
      }
    },

    eachMoveUpdate : function(){
      var base = this;

      if(base.options.lazyLoad === true){
        base.lazyLoad();
      }
      if(base.options.autoHeight === true){
        base.autoHeight();
      }
      base.onVisibleItems();

      if (typeof base.options.afterAction === "function") {
        base.options.afterAction.apply(this,[base.$elem]);
      }
    },

    updateVars : function(){
      var base = this;
      if(typeof base.options.beforeUpdate === "function") {
        base.options.beforeUpdate.apply(this,[base.$elem]);
      }
      base.watchVisibility();
      base.updateItems();
      base.calculateAll();
      base.updatePosition();
      base.updateControls();
      base.eachMoveUpdate();
      if(typeof base.options.afterUpdate === "function") {
        base.options.afterUpdate.apply(this,[base.$elem]);
      }
    },

    reload : function(elements){
      var base = this;
      setTimeout(function(){
        base.updateVars();
      },0)
    },

    watchVisibility : function(){
      var base = this;

      if(base.$elem.is(":visible") === false){
        base.$elem.css({opacity: 0});
        clearInterval(base.autoPlayInterval);
        clearInterval(base.checkVisible);
      } else {
        return false;
      }
      base.checkVisible = setInterval(function(){
        if (base.$elem.is(":visible")) {
          base.reload();
          base.$elem.animate({opacity: 1},200);
          clearInterval(base.checkVisible);
        }
      }, 500);
    },

    wrapItems : function(){
      var base = this;
      base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
      base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
      base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
      base.$elem.css("display","block");
    },

    baseClass : function(){
      var base = this;
      var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
      var hasThemeClass = base.$elem.hasClass(base.options.theme);

      if(!hasBaseClass){
        base.$elem.addClass(base.options.baseClass);
      }

      if(!hasThemeClass){
        base.$elem.addClass(base.options.theme);
      }
    },

    updateItems : function(){
      var base = this;

      if(base.options.responsive === false){
        return false;
      }
      if(base.options.singleItem === true){
        base.options.items = base.orignalItems = 1;
        base.options.itemsCustom = false;
        base.options.itemsDesktop = false;
        base.options.itemsDesktopSmall = false;
        base.options.itemsTablet = false;
        base.options.itemsTabletSmall = false;
        base.options.itemsMobile = false;
        return false;
      }

      var width = $(base.options.responsiveBaseWidth).width();

      if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
        base.options.items = base.orignalItems;
      }

      if(typeof(base.options.itemsCustom) !== 'undefined' && base.options.itemsCustom !== false){
        //Reorder array by screen size
        base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});
        for(var i in base.options.itemsCustom){
          if(typeof(base.options.itemsCustom[i]) !== 'undefined' && base.options.itemsCustom[i][0] <= width){
            base.options.items = base.options.itemsCustom[i][1];
          }
        }
      } else {

        if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
          base.options.items = base.options.itemsDesktop[1];
        }

        if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
          base.options.items = base.options.itemsDesktopSmall[1];
        }

        if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
          base.options.items = base.options.itemsTablet[1];
        }

        if(width <= base.options.itemsTabletSmall[0]  && base.options.itemsTabletSmall !== false){
          base.options.items = base.options.itemsTabletSmall[1];
        }

        if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
          base.options.items = base.options.itemsMobile[1];
        }
      }

      //if number of items is less than declared
      if(base.options.items > base.itemsAmount && base.options.itemsScaleUp === true){
        base.options.items = base.itemsAmount;
      }
    },

    response : function(){
      var base = this,
          smallDelay;
      if(base.options.responsive !== true){
        return false
      }
      var lastWindowWidth = $(window).width();

      base.resizer = function(){
        if($(window).width() !== lastWindowWidth){
          if(base.options.autoPlay !== false){
            clearInterval(base.autoPlayInterval);
          }
          clearTimeout(smallDelay);
          smallDelay = setTimeout(function(){
            lastWindowWidth = $(window).width();
            base.updateVars();
          },base.options.responsiveRefreshRate);
        }
      }
      $(window).resize(base.resizer)
    },

    updatePosition : function(){
      var base = this;
      base.jumpTo(base.currentItem);
      if(base.options.autoPlay !== false){
        base.checkAp();
      }
    },

    appendItemsSizes : function(){
      var base = this;

      var roundPages = 0;
      var lastItem = base.itemsAmount - base.options.items;

      base.$owlItems.each(function(index){
        var $this = $(this);
        $this
          .css({"width": base.itemWidth})
          .data("owl-item",Number(index));

        if(index % base.options.items === 0 || index === lastItem){
          if(!(index > lastItem)){
            roundPages +=1;
          }
        }
        $this.data("owl-roundPages",roundPages)
      });
    },

    appendWrapperSizes : function(){
      var base = this;
      var width = 0;

      var width = base.$owlItems.length * base.itemWidth;

      base.$owlWrapper.css({
        "width": width*2,
        "left": 0
      });
      base.appendItemsSizes();
    },

    calculateAll : function(){
      var base = this;
      base.calculateWidth();
      base.appendWrapperSizes();
      base.loops();
      base.max();
    },

    calculateWidth : function(){
      var base = this;
      base.itemWidth = Math.round(base.$elem.width()/base.options.items)
    },

    max : function(){
      var base = this;
      var maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
      if(base.options.items > base.itemsAmount){
        base.maximumItem = 0;
        maximum = 0
        base.maximumPixels = 0;
      } else {
        base.maximumItem = base.itemsAmount - base.options.items;
        base.maximumPixels = maximum;
      }
      return maximum;
    },

    min : function(){
      return 0;
    },

    loops : function(){
      var base = this;

      base.positionsInArray = [0];
      base.pagesInArray = [];
      var prev = 0;
      var elWidth = 0;

      for(var i = 0; i<base.itemsAmount; i++){
        elWidth += base.itemWidth;
        base.positionsInArray.push(-elWidth);

        if(base.options.scrollPerPage === true){
          var item = $(base.$owlItems[i]);
          var roundPageNum = item.data("owl-roundPages");
          if(roundPageNum !== prev){
            base.pagesInArray[prev] = base.positionsInArray[i];
            prev = roundPageNum;
          }
        }
      }
    },

    buildControls : function(){
      var base = this;
      if(base.options.navigation === true || base.options.pagination === true){
        base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
      }
      if(base.options.pagination === true){
        base.buildPagination();
      }
      if(base.options.navigation === true){
        base.buildButtons();
      }
    },

    buildButtons : function(){
      var base = this;
      var buttonsWrapper = $("<div class=\"owl-buttons\"/>")
      base.owlControls.append(buttonsWrapper);

      base.buttonPrev = $("<div/>",{
        "class" : "owl-prev",
        "html" : base.options.navigationText[0] || ""
      });

      base.buttonNext = $("<div/>",{
        "class" : "owl-next",
        "html" : base.options.navigationText[1] || ""
      });

      buttonsWrapper
        .append(base.buttonPrev)
        .append(base.buttonNext);

      buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event){
        event.preventDefault();
      })

      buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
        event.preventDefault();
        if($(this).hasClass("owl-next")){
          base.next();
        } else{
          base.prev();
        }
      })
    },

    buildPagination : function(){
      var base = this;

      base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
      base.owlControls.append(base.paginationWrapper);

      base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
        event.preventDefault();
        if(Number($(this).data("owl-page")) !== base.currentItem){
          base.goTo( Number($(this).data("owl-page")), true);
        }
      });
    },

    updatePagination : function(){
      var base = this;
      if(base.options.pagination === false){
        return false;
      }

      base.paginationWrapper.html("");

      var counter = 0;
      var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

      for(var i = 0; i<base.itemsAmount; i++){
        if(i % base.options.items === 0){
          counter +=1;
          if(lastPage === i){
            var lastItem = base.itemsAmount - base.options.items;
          }
          var paginationButton = $("<div/>",{
            "class" : "owl-page"
          });
          var paginationButtonInner = $("<span></span>",{
            "text": base.options.paginationNumbers === true ? counter : "",
            "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
          });
          paginationButton.append(paginationButtonInner);

          paginationButton.data("owl-page",lastPage === i ? lastItem : i);
          paginationButton.data("owl-roundPages",counter);

          base.paginationWrapper.append(paginationButton);
        }
      }
      base.checkPagination();
    },
    checkPagination : function(){
      var base = this;
      if(base.options.pagination === false){
        return false;
      }
      base.paginationWrapper.find(".owl-page").each(function(i,v){
        if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
          base.paginationWrapper
            .find(".owl-page")
            .removeClass("active");
          $(this).addClass("active");
        }
      });
    },

    checkNavigation : function(){
      var base = this;

      if(base.options.navigation === false){
        return false;
      }
      if(base.options.rewindNav === false){
        if(base.currentItem === 0 && base.maximumItem === 0){
          base.buttonPrev.addClass("disabled");
          base.buttonNext.addClass("disabled");
        } else if(base.currentItem === 0 && base.maximumItem !== 0){
          base.buttonPrev.addClass("disabled");
          base.buttonNext.removeClass("disabled");
        } else if (base.currentItem === base.maximumItem){
          base.buttonPrev.removeClass("disabled");
          base.buttonNext.addClass("disabled");
        } else if(base.currentItem !== 0 && base.currentItem !== base.maximumItem){
          base.buttonPrev.removeClass("disabled");
          base.buttonNext.removeClass("disabled");
        }
      }
    },

    updateControls : function(){
      var base = this;
      base.updatePagination();
      base.checkNavigation();
      if(base.owlControls){
        if(base.options.items >= base.itemsAmount){
          base.owlControls.hide();
        } else {
          base.owlControls.show();
        }
      }
    },

    destroyControls : function(){
      var base = this;
      if(base.owlControls){
        base.owlControls.remove();
      }
    },

    next : function(speed){
      var base = this;

      if(base.isTransition){
        return false;
      }

      base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
      if(base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
        if(base.options.rewindNav === true){
          base.currentItem = 0;
          speed = "rewind";
        } else {
          base.currentItem = base.maximumItem;
          return false;
        }
      }
      base.goTo(base.currentItem,speed);
    },

    prev : function(speed){
      var base = this;

      if(base.isTransition){
        return false;
      }

      if(base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items){
        base.currentItem = 0
      } else {
        base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
      }
      if(base.currentItem < 0){
        if(base.options.rewindNav === true){
          base.currentItem = base.maximumItem;
          speed = "rewind"
        } else {
          base.currentItem =0;
          return false;
        }
      }
      base.goTo(base.currentItem,speed);
    },

    goTo : function(position,speed,drag){
      var base = this;

      if(base.isTransition){
        return false;
      }
      if(typeof base.options.beforeMove === "function") {
        base.options.beforeMove.apply(this,[base.$elem]);
      }
      if(position >= base.maximumItem){
        position = base.maximumItem;
      }
      else if( position <= 0 ){
        position = 0;
      }

      base.currentItem = base.owl.currentItem = position;
      if( base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true){
        base.swapSpeed(0)
        if(base.browser.support3d === true){
          base.transition3d(base.positionsInArray[position]);
        } else {
          base.css2slide(base.positionsInArray[position],1);
        }
        base.afterGo();
        base.singleItemTransition();

        return false;
      }
      var goToPixel = base.positionsInArray[position];

      if(base.browser.support3d === true){
        base.isCss3Finish = false;

        if(speed === true){
          base.swapSpeed("paginationSpeed");
          setTimeout(function() {
            base.isCss3Finish = true;
          }, base.options.paginationSpeed);

        } else if(speed === "rewind" ){
          base.swapSpeed(base.options.rewindSpeed);
          setTimeout(function() {
            base.isCss3Finish = true;
          }, base.options.rewindSpeed);

        } else {
          base.swapSpeed("slideSpeed");
          setTimeout(function() {
            base.isCss3Finish = true;
          }, base.options.slideSpeed);
        }
        base.transition3d(goToPixel);
      } else {
        if(speed === true){
          base.css2slide(goToPixel, base.options.paginationSpeed);
        } else if(speed === "rewind" ){
          base.css2slide(goToPixel, base.options.rewindSpeed);
        } else {
          base.css2slide(goToPixel, base.options.slideSpeed);
        }
      }
      base.afterGo();
    },

    jumpTo : function(position){
      var base = this;
      if(typeof base.options.beforeMove === "function") {
        base.options.beforeMove.apply(this,[base.$elem]);
      }
      if(position >= base.maximumItem || position === -1){
        position = base.maximumItem;
      }
      else if( position <= 0 ){
        position = 0;
      }
      base.swapSpeed(0)
      if(base.browser.support3d === true){
        base.transition3d(base.positionsInArray[position]);
      } else {
        base.css2slide(base.positionsInArray[position],1);
      }
      base.currentItem = base.owl.currentItem = position;
      base.afterGo();
    },

    afterGo : function(){
      var base = this;

      base.prevArr.push(base.currentItem);
      base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length -2];
      base.prevArr.shift(0)

      if(base.prevItem !== base.currentItem){
        base.checkPagination();
        base.checkNavigation();
        base.eachMoveUpdate();

        if(base.options.autoPlay !== false){
          base.checkAp();
        }
      }
      if(typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
        base.options.afterMove.apply(this,[base.$elem]);
      }
    },

    stop : function(){
      var base = this;
      base.apStatus = "stop";
      clearInterval(base.autoPlayInterval);
    },

    checkAp : function(){
      var base = this;
      if(base.apStatus !== "stop"){
        base.play();
      }
    },

    play : function(){
      var base = this;
      base.apStatus = "play";
      if(base.options.autoPlay === false){
        return false;
      }
      clearInterval(base.autoPlayInterval);
      base.autoPlayInterval = setInterval(function(){
        base.next(true);
      },base.options.autoPlay);
    },

    swapSpeed : function(action){
      var base = this;
      if(action === "slideSpeed"){
        base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
      } else if(action === "paginationSpeed" ){
        base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
      } else if(typeof action !== "string"){
        base.$owlWrapper.css(base.addCssSpeed(action));
      }
    },

    addCssSpeed : function(speed){
      var base = this;
      return {
        "-webkit-transition": "all "+ speed +"ms ease",
        "-moz-transition": "all "+ speed +"ms ease",
        "-o-transition": "all "+ speed +"ms ease",
        "transition": "all "+ speed +"ms ease"
      };
    },

    removeTransition : function(){
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        "transition": ""
      };
    },

    doTranslate : function(pixels){
      return {
        "-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
        "-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
        "-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
        "-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
        "transform": "translate3d("+pixels+"px, 0px,0px)"
      };
    },

    transition3d : function(value){
      var base = this;
      base.$owlWrapper.css(base.doTranslate(value));
    },

    css2move : function(value){
      var base = this;
      base.$owlWrapper.css({"left" : value})
    },

    css2slide : function(value,speed){
      var base = this;

      base.isCssFinish = false;
      base.$owlWrapper.stop(true,true).animate({
        "left" : value
      }, {
        duration : speed || base.options.slideSpeed ,
        complete : function(){
          base.isCssFinish = true;
        }
      });
    },

    checkBrowser : function(){
      var base = this;

      //Check 3d support
      var	translate3D = "translate3d(0px, 0px, 0px)",
          tempElem = document.createElement("div");

      tempElem.style.cssText= "  -moz-transform:"    + translate3D +
        "; -ms-transform:"     + translate3D +
        "; -o-transform:"      + translate3D +
        "; -webkit-transform:" + translate3D +
        "; transform:"         + translate3D;
      var	regex = /translate3d\(0px, 0px, 0px\)/g,
          asSupport = tempElem.style.cssText.match(regex),
          support3d = (asSupport !== null && asSupport.length === 1);

      var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

      base.browser = {
        "support3d" : support3d,
        "isTouch" : isTouch
      }
    },

    moveEvents : function(){
      var base = this;
      if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
        base.gestures();
        base.disabledEvents();
      }
    },

    eventTypes : function(){
      var base = this;
      var types = ["s","e","x"];

      base.ev_types = {};

      if(base.options.mouseDrag === true && base.options.touchDrag === true){
        types = [
          "touchstart.owl mousedown.owl",
          "touchmove.owl mousemove.owl",
          "touchend.owl touchcancel.owl mouseup.owl"
        ];
      } else if(base.options.mouseDrag === false && base.options.touchDrag === true){
        types = [
          "touchstart.owl",
          "touchmove.owl",
          "touchend.owl touchcancel.owl"
        ];
      } else if(base.options.mouseDrag === true && base.options.touchDrag === false){
        types = [
          "mousedown.owl",
          "mousemove.owl",
          "mouseup.owl"
        ];
      }

      base.ev_types["start"] = types[0];
      base.ev_types["move"] = types[1];
      base.ev_types["end"] = types[2];
    },

    disabledEvents :  function(){
      var base = this;
      base.$elem.on("dragstart.owl", function(event) { event.preventDefault();});
      base.$elem.on("mousedown.disableTextSelect", function(e) {
        return $(e.target).is('input, textarea, select, option');
      });
    },

    gestures : function(){
      var base = this;

      var locals = {
        offsetX : 0,
        offsetY : 0,
        baseElWidth : 0,
        relativePos : 0,
        position: null,
        minSwipe : null,
        maxSwipe: null,
        sliding : null,
        dargging: null,
        targetElement : null
      }

      base.isCssFinish = true;

      function getTouches(event){
        if(event.touches){
          return {
            x : event.touches[0].pageX,
            y : event.touches[0].pageY
          }
        } else {
          if(event.pageX !== undefined){
            return {
              x : event.pageX,
              y : event.pageY
            }
          } else {
            return {
              x : event.clientX,
              y : event.clientY
            }
          }
        }
      }

      function swapEvents(type){
        if(type === "on"){
          $(document).on(base.ev_types["move"], dragMove);
          $(document).on(base.ev_types["end"], dragEnd);
        } else if(type === "off"){
          $(document).off(base.ev_types["move"]);
          $(document).off(base.ev_types["end"]);
        }
      }

      function dragStart(event) {
        var event = event.originalEvent || event || window.event;

        if (event.which === 3) {
          return false;
        }
        if(base.itemsAmount <= base.options.items){
          return;
        }
        if(base.isCssFinish === false && !base.options.dragBeforeAnimFinish ){
          return false;
        }
        if(base.isCss3Finish === false && !base.options.dragBeforeAnimFinish ){
          return false;
        }

        if(base.options.autoPlay !== false){
          clearInterval(base.autoPlayInterval);
        }

        if(base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")){
          base.$owlWrapper.addClass("grabbing")
        }

        base.newPosX = 0;
        base.newRelativeX = 0;

        $(this).css(base.removeTransition());

        var position = $(this).position();
        locals.relativePos = position.left;

        locals.offsetX = getTouches(event).x - position.left;
        locals.offsetY = getTouches(event).y - position.top;

        swapEvents("on");

        locals.sliding = false;
        locals.targetElement = event.target || event.srcElement;
      }

      function dragMove(event){
        var event = event.originalEvent || event || window.event;

        base.newPosX = getTouches(event).x- locals.offsetX;
        base.newPosY = getTouches(event).y - locals.offsetY;
        base.newRelativeX = base.newPosX - locals.relativePos;

        if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
          locals.dragging = true;
          base.options.startDragging.apply(base,[base.$elem]);
        }

        if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
          event.preventDefault ? event.preventDefault() : event.returnValue = false;
          locals.sliding = true;
        }

        if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
          $(document).off("touchmove.owl");
        }

        var minSwipe = function(){
          return  base.newRelativeX / 5;
        }
        var maxSwipe = function(){
          return  base.maximumPixels + base.newRelativeX / 5;
        }

        base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
        if(base.browser.support3d === true){
          base.transition3d(base.newPosX);
        } else {
          base.css2move(base.newPosX);
        }
      }

      function dragEnd(event){
        var event = event.originalEvent || event || window.event;
        event.target = event.target || event.srcElement;

        locals.dragging = false;

        if(base.browser.isTouch !== true){
          base.$owlWrapper.removeClass("grabbing");
        }

        if(base.newRelativeX<0){
          base.dragDirection = base.owl.dragDirection = "left"
        } else {
          base.dragDirection = base.owl.dragDirection = "right"
        }

        if(base.newRelativeX !== 0){
          var newPosition = base.getNewPosition();
          base.goTo(newPosition,false,"drag");
          if(locals.targetElement === event.target && base.browser.isTouch !== true){
            $(event.target).on("click.disable", function(ev){
              ev.stopImmediatePropagation();
              ev.stopPropagation();
              ev.preventDefault();
              $(event.target).off("click.disable");
            });
            var handlers = $._data(event.target, "events")["click"];
            var owlStopEvent = handlers.pop();
            handlers.splice(0, 0, owlStopEvent);
          }
        }
        swapEvents("off");
      }
      base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart);
    },

    getNewPosition : function(){
      var base = this,
          newPosition;

      newPosition = base.closestItem();

      if(newPosition>base.maximumItem){
        base.currentItem = base.maximumItem;
        newPosition  = base.maximumItem;
      } else if( base.newPosX >=0 ){
        newPosition = 0;
        base.currentItem = 0;
      }
      return newPosition;
    },
    closestItem : function(){
      var base = this,
          array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
          goal = base.newPosX,
          closest = null;

      $.each(array, function(i,v){
        if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
          closest = v;
          if(base.options.scrollPerPage === true){
            base.currentItem = $.inArray(closest, base.positionsInArray);
          } else {
            base.currentItem = i;
          }
        }
        else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > (array[i+1] || array[i]-base.itemWidth) && base.moveDirection() === "right"){
          if(base.options.scrollPerPage === true){
            closest = array[i+1] || array[array.length-1];
            base.currentItem = $.inArray(closest, base.positionsInArray);
          } else {
            closest = array[i+1];
            base.currentItem = i+1;
          }
        }
      });
      return base.currentItem;
    },

    moveDirection : function(){
      var base = this,
          direction;
      if(base.newRelativeX < 0 ){
        direction = "right"
        base.playDirection = "next"
      } else {
        direction = "left"
        base.playDirection = "prev"
      }
      return direction
    },

    customEvents : function(){
      var base = this;
      base.$elem.on("owl.next",function(){
        base.next();
      });
      base.$elem.on("owl.prev",function(){
        base.prev();
      });
      base.$elem.on("owl.play",function(event,speed){
        base.options.autoPlay = speed;
        base.play();
        base.hoverStatus = "play";
      });
      base.$elem.on("owl.stop",function(){
        base.stop();
        base.hoverStatus = "stop";
      });
      base.$elem.on("owl.goTo",function(event,item){
        base.goTo(item)
      });
      base.$elem.on("owl.jumpTo",function(event,item){
        base.jumpTo(item)
      });
    },

    stopOnHover : function(){
      var base = this;
      if(base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false){
        base.$elem.on("mouseover", function(){
          base.stop();
        });
        base.$elem.on("mouseout", function(){
          if(base.hoverStatus !== "stop"){
            base.play();
          }
        });
      }
    },

    lazyLoad : function(){
      var base = this;

      if(base.options.lazyLoad === false){
        return false;
      }
      for(var i=0; i<base.itemsAmount; i++){
        var $item = $(base.$owlItems[i]);

        if($item.data("owl-loaded") === "loaded"){
          continue;
        }

        var	itemNumber = $item.data("owl-item"),
            $lazyImg = $item.find(".lazyOwl"),
            follow;

        if( typeof $lazyImg.data("src") !== "string"){
          $item.data("owl-loaded","loaded");
          continue;
        }
        if($item.data("owl-loaded") === undefined){
          $lazyImg.hide();
          $item.addClass("loading").data("owl-loaded","checked");
        }
        if(base.options.lazyFollow === true){
          follow = itemNumber >= base.currentItem;
        } else {
          follow = true;
        }
        if(follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length){
          base.lazyPreload($item,$lazyImg);
        }
      }
    },

    lazyPreload : function($item,$lazyImg){
      var base = this,
          iterations = 0;
      if ($lazyImg.prop("tagName") === "DIV") {
        $lazyImg.css("background-image", "url(" + $lazyImg.data("src")+ ")" );
        var isBackgroundImg=true;
      } else {
        $lazyImg[0].src = $lazyImg.data("src");
      }
      checkLazyImage();

      function checkLazyImage(){
        iterations += 1;
        if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
          showImage();
        } else if(iterations <= 100){//if image loads in less than 10 seconds
          setTimeout(checkLazyImage,100);
        } else {
          showImage();
        }
      }
      function showImage(){
        $item.data("owl-loaded", "loaded").removeClass("loading");
        $lazyImg.removeAttr("data-src");
        base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
        if(typeof base.options.afterLazyLoad === "function") {
          base.options.afterLazyLoad.apply(this,[base.$elem]);
        }
      }
    },

    autoHeight : function(){
      var base = this;
      var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

      if($currentimg.get(0) !== undefined ){
        var iterations = 0;
        checkImage();
      } else {
        addHeight();
      }
      function checkImage(){
        iterations += 1;
        if ( base.completeImg($currentimg.get(0)) ) {
          addHeight();
        } else if(iterations <= 100){ //if image loads in less than 10 seconds
          setTimeout(checkImage,100);
        } else {
          base.wrapperOuter.css("height", ""); //Else remove height attribute
        }
      }

      function addHeight(){
        var $currentItem = $(base.$owlItems[base.currentItem]).height();
        base.wrapperOuter.css("height",$currentItem+"px");
        if(!base.wrapperOuter.hasClass("autoHeight")){
          setTimeout(function(){
            base.wrapperOuter.addClass("autoHeight");
          },0);
        }
      }
    },

    completeImg : function(img) {
      if (!img.complete) {
        return false;
      }
      if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
        return false;
      }
      return true;
    },

    onVisibleItems : function(){
      var base = this;

      if(base.options.addClassActive === true){
        base.$owlItems.removeClass("active");
      }
      base.visibleItems = [];
      for(var i=base.currentItem; i<base.currentItem + base.options.items; i++){
        base.visibleItems.push(i);

        if(base.options.addClassActive === true){
          $(base.$owlItems[i]).addClass("active");
        }
      }
      base.owl.visibleItems = base.visibleItems;
    },

    transitionTypes : function(className){
      var base = this;
      //Currently available: "fade","backSlide","goDown","fadeUp"
      base.outClass = "owl-"+className+"-out";
      base.inClass = "owl-"+className+"-in";
    },

    singleItemTransition : function(){
      var base = this;
      base.isTransition = true;

      var outClass = base.outClass,
          inClass = base.inClass,
          $currentItem = base.$owlItems.eq(base.currentItem),
          $prevItem = base.$owlItems.eq(base.prevItem),
          prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
          origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

      base.$owlWrapper
        .addClass('owl-origin')
        .css({
        "-webkit-transform-origin" : origin+"px",
        "-moz-perspective-origin" : origin+"px",
        "perspective-origin" : origin+"px"
      });
      function transStyles(prevPos,zindex){
        return {
          "position" : "relative",
          "left" : prevPos+"px"
        };
      }

      var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

      $prevItem
        .css(transStyles(prevPos,10))
        .addClass(outClass)
        .on(animEnd, function() {
        base.endPrev = true;
        $prevItem.off(animEnd);
        base.clearTransStyle($prevItem,outClass);
      });

      $currentItem
        .addClass(inClass)
        .on(animEnd, function() {
        base.endCurrent = true;
        $currentItem.off(animEnd);
        base.clearTransStyle($currentItem,inClass);
      });
    },

    clearTransStyle : function(item,classToRemove){
      var base = this;
      item.css({
        "position" : "",
        "left" : ""
      })
        .removeClass(classToRemove);
      if(base.endPrev && base.endCurrent){
        base.$owlWrapper.removeClass('owl-origin');
        base.endPrev = false;
        base.endCurrent = false;
        base.isTransition = false;
      }
    },

    owlStatus : function(){
      var base = this;
      base.owl = {
        "userOptions"	: base.userOptions,
        "baseElement" 	: base.$elem,
        "userItems"		: base.$userItems,
        "owlItems"		: base.$owlItems,
        "currentItem"	: base.currentItem,
        "prevItem"		: base.prevItem,
        "visibleItems"	: base.visibleItems,
        "isTouch" 		: base.browser.isTouch,
        "browser"		: base.browser,
        "dragDirection" : base.dragDirection
      }
    },

    clearEvents : function(){
      var base = this;
      base.$elem.off(".owl owl mousedown.disableTextSelect");
      $(document).off(".owl owl");
      $(window).off("resize", base.resizer);
    },

    unWrap : function(){
      var base = this;
      if(base.$elem.children().length !== 0){
        base.$owlWrapper.unwrap();
        base.$userItems.unwrap().unwrap();
        if(base.owlControls){
          base.owlControls.remove();
        }
      }
      base.clearEvents();
      base.$elem
        .attr("style", base.$elem.data("owl-originalStyles") || "")
        .attr("class", base.$elem.data("owl-originalClasses"));
    },

    destroy : function(){
      var base = this;
      base.stop();
      clearInterval(base.checkVisible);
      base.unWrap();
      base.$elem.removeData();
    },

    reinit : function(newOptions){
      var base = this;
      var options = $.extend({}, base.userOptions, newOptions);
      base.unWrap();
      base.init(options,base.$elem);
    },

    addItem : function(htmlString,targetPosition){
      var base = this,
          position;

      if(!htmlString){return false}

      if(base.$elem.children().length === 0){
        base.$elem.append(htmlString);
        base.setVars();
        return false;
      }
      base.unWrap();
      if(targetPosition === undefined || targetPosition === -1){
        position = -1;
      } else {
        position = targetPosition;
      }
      if(position >= base.$userItems.length || position === -1){
        base.$userItems.eq(-1).after(htmlString)
      } else {
        base.$userItems.eq(position).before(htmlString)
      }

      base.setVars();
    },

    removeItem : function(targetPosition){
      var base = this,
          position;

      if(base.$elem.children().length === 0){return false}

      if(targetPosition === undefined || targetPosition === -1){
        position = -1;
      } else {
        position = targetPosition;
      }

      base.unWrap();
      base.$userItems.eq(position).remove();
      base.setVars();
    }

  };

  $.fn.owlCarousel = function( options ){
    return this.each(function() {
      if($(this).data("owl-init") === true){
        return false;
      }
      $(this).data("owl-init", true);
      var carousel = Object.create( Carousel );
      carousel.init( options, this );
      $.data( this, "owlCarousel", carousel );
    });
  };

  $.fn.owlCarousel.options = {

    items : 5,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],
    itemsTablet : [768,2],
    itemsTabletSmall : false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,

    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    autoPlay : false,
    stopOnHover : false,

    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,

    pagination : true,
    paginationNumbers : false,

    responsive : true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth	: window,


    baseClass : "owl-carousel",
    theme : "owl-theme",

    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",

    autoHeight : false,

    jsonPath : false,
    jsonSuccess : false,

    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,

    addClassActive : false,
    transitionStyle : false,

    beforeUpdate : false,
    afterUpdate : false,
    beforeInit : false,
    afterInit : false,
    beforeMove : false,
    afterMove : false,
    afterAction : false,
    startDragging : false,
    afterLazyLoad: false

  };
})( jQuery, window, document );


// modal

//product js
$(document).ready(function(){
  $('.all_list').click(function(){
      $(this).toggleClass('clicked');
  });
});
$(document).ready(function(){
  $('.breads_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.breads_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.patries_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.patries_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.cookies_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.cookies_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.cupcakes_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.cupcakes_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.coffee_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.coffee_list').toggle('300');
  });
});
$(document).ready(function(){
  $('.merchandise_show_list').click(function(){
      $(this).toggleClass('clicked');
  });
});

$(function() {
  var _pageSize = 9;
  var currentPage = 1;

  // 9, 11 > 2
  // 3, 11 > 4
  // 5, 11 > 3

  var cakeList = [
      { id: 1, name: 'Bagel white bread', type: 'White bread', price: 10000, image: '/assets/imgs/bagel white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save1', data_target: '.product-1' },
      { id: 2, name: 'Baguette white bread', type: 'White bread', price: 15000, image: '/assets/imgs/Baguette white bread.jfif', filter: ' filterDiv whitebread', action2: 'button save2', data_target: '.product-2' },
      { id: 3, name: 'Brioche white bread', type: 'White bread', price: 30000, image: '/assets/imgs/Brioche white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save3', data_target: '.product-3' },
      { id: 4, name: 'Challah white bread', type: 'White bread', price: 40000, image: '/assets/imgs/challah white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save4', data_target: '.product-4' },
      { id: 5, name: 'Ciabatta white bread', type: 'White bread', price: 50000, image: '/assets/imgs/ciabatta white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save5', data_target: '.product-5' },
      { id: 6, name: 'Focaccia white bread', type: 'White bread', price: 60000, image: '/assets/imgs/Focaccia white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save6', data_target: '.product-6' },
      { id: 7, name: 'Pita white bread', type: 'White bread', price: 70000, image: '/assets/imgs/pita bread white bread1.jpg', filter: ' filterDiv whitebread', action2: 'button save7', data_target: '.product-7' },
      { id: 8, name: 'Sourdough white bread', type: 'White bread', price: 80000, image: '/assets/imgs/sourdough white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save8', data_target: '.product-8' },
      { id: 9, name: 'Borodinski wheat bread', type: 'wheat bread', price: 90000, image: '/assets/imgs/Borodinski wheat bread.jpg', filter: ' filterDiv quickview9', action2: 'button save9', data_target: '.product-9' },
      { id: 10, name: 'Rugbord wheat bread', type: 'wheat bread', price: 10000, image: '/assets/imgs/rugbord wheat bread.webp', filter: ' filterDiv quickview10', action2: 'button save10', data_target: '.product-10' },
      { id: 11, name: 'Whole wheat bread', type: 'wheat bread', price: 10000, image: '/assets/imgs/whole wheat bread.jpeg', filter: ' filterDiv quickview11', action2: 'button save11', data_target: '.product-11' },
      { id: 12, name: 'Chocolate Croissant', type: 'Croissant', price: 10000, image: '/assets/imgs/Chocolate Croissant.webp', filter: ' filterDiv quickview12', action2: 'button save12', data_target: '.product-12' },
      { id: 13, name: 'Nutella croissant', type: 'Croissant', price: 10000, image: '/assets/imgs/nutella croissant.png', filter: ' filterDiv quickview13', action2: 'button save13', data_target: '.product-13' },
      { id: 14, name: 'Strawberry croissant', type: 'Croissant', price: 10000, image: '/assets/imgs/strawberry croissant.jpg', filter: ' filterDiv quickview14', action2: 'button save14', data_target: '.product-14' },
      { id: 15, name: 'Paleo breadsticks', type: 'Breadstick', price: 10000, image: '/assets/imgs/Paleo breadsticks.webp', filter: ' filterDiv quickview15', action2: 'button save15', data_target: '.product-15' },
      { id: 16, name: 'Fluffy Garlic Butter Breadsticks', type: 'Breadstick', price: 10000, image: '/assets/imgs/Fluffy Garlic Butter Breadsticks.webp', filter: ' view button filterDiv quickview16', action2: 'button save16', data_target: '.product-16' },
      { id: 17, name: 'PROSCIUTTO WRAPPED BREADSTICKS', type: 'Breadstick', price: 10000, image: '/assets/imgs/PROSCIUTTO WRAPPED BREADSTICKS.jpg', filter: 'filterDiv quickview17', action2: 'button save17', data_target: '.product-17' },
      { id: 18, name: 'Cheese Bun', type: 'Bun', price: 10000, image: '/assets/imgs/Cheese Bun.png', filter: ' filterDiv quickview18', action2: 'button save18', data_target: '.product-18' },
      { id: 19, name: 'Hamburger Bun', type: 'Bun', price: 10000, image: '/assets/imgs/Hamburger Bun.webp', filter: ' filterDiv quickview19', action2: 'button save19', data_target: '.product-19' },
      { id: 20, name: 'Onion Bun', type: 'Bun', price: 10000, image: '/assets/imgs/Onion Bun.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-20' },
      { id: 21, name: 'Hot Dog Bun', type: 'Bun', price: 10000, image: '/assets/imgs/Hot Dog Bun.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-21' },
      { id: 22, name: 'Hot Cross Buns', type: 'Bun', price: 10000, image: '/assets/imgs/Hot Cross Buns.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-22' },
      { id: 23, name: 'Pecan Pie', type: 'Pie', price: 10000, image: '/assets/imgs/Pecan Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-23' },
      { id: 24, name: 'Apple Pie', type: 'Pie', price: 10000, image: '/assets/imgs/Apple Pie.jpeg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-24' },
      { id: 25, name: 'Cherry Pie', type: 'Pie', price: 10000, image: '/assets/imgs/Cherry Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-25' },
      { id: 26, name: 'Pumpkin Pie', type: 'Pie', price: 10000, image: '/assets/imgs/Pumpkin Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-26' },
      { id: 27, name: 'Key Lime Pie', type: 'Pie', price: 10000, image: '/assets/imgs/Key Lime Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-27' },
      { id: 28, name: 'Cheesecake pie', type: 'Pie', price: 10000, image: '/assets/imgs/Cheesecake pie.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-28' },
      { id: 29, name: 'Sugar Cream Pie', type: 'Pie', price: 10000, image: '/assets/imgs/Sugar Cream Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-29' },
      { id: 30, name: 'frøsnapper', type: 'Danishes', price: 10000, image: '/assets/imgs/frøsnapper.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-30' },
      { id: 31, name: 'HINDBÆRSNITTER', type: 'Danishes', price: 10000, image: '/assets/imgs/HINDBÆRSNITTER.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-31' },
      { id: 32, name: 'KANELSNEGL', type: 'Danishes', price: 10000, image: '/assets/imgs/KANELSNEGL.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-32' },
      { id: 33, name: 'RABARBERHORNS', type: 'Danishes', price: 10000, image: '/assets/imgs/RABARBERHORNS.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-33' },
      { id: 34, name: 'ROMKUGLER', type: 'Danishes', price: 10000, image: '/assets/imgs/ROMKUGLER.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-34' },
      { id: 35, name: 'SPANDAUER', type: 'Danishes', price: 10000, image: '/assets/imgs/SPANDAUER.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-35' },
      { id: 36, name: 'Nutella Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/Nutella Macarons.png', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-36' },
      { id: 37, name: 'Clementine Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/Clementine Macarons.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-37' },
      { id: 38, name: 'Meyer Lemon Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/Meyer Lemon Macarons.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-38' },
      { id: 39, name: 'Crème Brûlée Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/Crème Brûlée Macarons.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-39' },
      { id: 40, name: 'Salted Caramel Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/Salted Caramel Macarons.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-40' },
      { id: 41, name: 'Pistachio Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/Pistachio.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-41' },
      { id: 42, name: 'Tomato Chevre Tart', type: 'Tart', price: 10000, image: '/assets/imgs/Tomato Chevre Tart.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-42' },
      { id: 43, name: 'Lemon Meringue Tarts', type: 'Tart', price: 10000, image: '/assets/imgs/Lemon Meringue Tarts.jpeg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-43' },
      { id: 44, name: 'Chocolate Almond tart', type: 'Tart', price: 10000, image: '/assets/imgs/Chocolate Almond tart.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-44' },
      { id: 45, name: 'Berries and Cream Tart', type: 'Tart', price: 10000, image: '/assets/imgs/Berries and Cream Tart.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-45' },
      { id: 46, name: 'Simple Blackberry Tart', type: 'Tart', price: 10000, image: '/assets/imgs/Simple Blackberry Tart.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-46' },
      { id: 47, name: 'Brown Butter Apple Tart', type: 'Tart', price: 10000, image: '/assets/imgs/Brown Butter Apple Tart.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-47' },
      { id: 48, name: 'Strawberry Lemonade Tart', type: 'Tart', price: 10000, image: '/assets/imgs/Strawberry Lemonade Tart.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-48' },
      { id: 49, name: 'Profiterole & salted toffee ice cream sandwiches', type: 'Profiterole', price: 10000, image: '/assets/imgs/Profiterole & salted toffee ice cream sandwiches.webp', filter: ' quickview19', action2: 'button save19', data_target: '.product-49' },
      { id: 50, name: 'Moreish mocha profiteroles', type: 'Profiterole', price: 10000, image: '/assets/imgs/Moreish mocha profiteroles.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-50' },
      { id: 51, name: 'white chocolate profiteroles', type: 'Profiterole', price: 10000, image: '/assets/imgs/white chocolate profiteroles.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-51' },
      { id: 52, name: 'Double chocolate profiteroles with salted caramel cream', type: 'Profiterole', price: 10000, image: '/assets/imgs/Double chocolate profiteroles with salted caramel cream.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-52' },
      { id: 53, name: 'Eggnog Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/Eggnog Snickerdoodles.jpg', filter: ' quickview19', action2: 'button save19', data_target: '.product-53' },
      { id: 54, name: 'Chocolate Chip Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/Chocolate Chip Snickerdoodles.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-54' },
      { id: 55, name: 'Biscoff Stuffed Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/Biscoff Stuffed Snickerdoodles.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-55' },
      { id: 56, name: 'CINNAMON CHIP SNICKERDOODLES', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/CINNAMON CHIP SNICKERDOODLES.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-56' },
      { id: 57, name: 'Cheesecake Filled Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/Cheesecake Filled Snickerdoodles.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-57' },
      { id: 58, name: 'Chocolate Chip & Cookie Butter Thumbprints', type: 'Chocolate Chip Cookies', price: 10000, image: '/assets/imgs/Chocolate Chip & Cookie Butter Thumbprints.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-58' },
      { id: 59, name: 'Cinnamon White & Dark Chocolate Chip Cookies', type: 'Chocolate Chip Cookies', price: 10000, image: '/assets/imgs/Cinnamon White & Dark Chocolate Chip Cookies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-59' },
      { id: 60, name: 'DoubleDelights chocolate chip cookies', type: 'Chocolate Chip Cookies', price: 10000, image: '/assets/imgs/DoubleDelights chocolate chip cookies.jpg.opdownload', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-60' },
      { id: 61, name: 'Shortbread Cookies', type: 'Shortbread Cookies', price: 10000, image: '/assets/imgs/Shortbread Cookies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-61' },
      { id: 62, name: 'Shortbread Diamond Jammies', type: 'Shortbread Cookies', price: 10000, image: '/assets/imgs/Shortbread Diamond Jammies.jpg', filter: ' quickview19', action2: 'button save19', data_target: '.product-62' },
      { id: 63, name: 'Bajillionaire Shortbread', type: 'Shortbread Cookies', price: 10000, image: '/assets/imgs/Bajillionaire Shortbread.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-63' },
      { id: 64, name: 'Red Velvet Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/Red Velvet Whoopie Pies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-64' },
      { id: 65, name: 'Old-Fashioned Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/Old-Fashioned Whoopie Pies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-65' },
      { id: 66, name: 'Chocolate Dream Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/Chocolate Dream Whoopie Pies.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-66' },
      { id: 67, name: 'Lemon Blueberry Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/Lemon Blueberry Whoopie Pies.jpg',filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-67' },
      { id: 68, name: 'Cinnamon Cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/Cinnamon Cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-68' },
      { id: 69, name: 'Key lime Cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/Key lime Cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-69' },
      { id: 70, name: 'standard cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/standard cupcake.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-70' },
      { id: 71, name: 'Lotus cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/lotus standard cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-71' },
      { id: 72, name: 'Tulip cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/tulip standard cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-72' },
      { id: 73, name: 'Cookies and Cream Cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/Cookies and Cream Cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-73' },
      { id: 74, name: 'Bag', type: 'Merchandise', price: 10000, image: '/assets/imgs/Merchandise bag.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-74' },
      { id: 75, name: 'Glasses', type: 'Merchandise', price: 10000, image: '/assets/imgs/Merchandise glasses.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-75' },
      { id: 76, name: 'Bottle', type: 'Merchandise', price: 10000, image: '/assets/imgs/Merchandise bottle.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-76' },
      { id: 77, name: 'Mug', type: 'Merchandise', price: 10000, image: '/assets/imgs/Merchandise mug.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-77' }, 
  ];

  var _tmpElement = $('.P_Img.item_template');

  // pagination
  function loadData(pageNumber) {
      $('.P_Img_list .row .P_Img:not(.item_template)').remove();

      // 1-0>8
      // 2-9>17
      // 3-18>26
      var startFrom = (pageNumber - 1) * _pageSize;
      var endAt = startFrom + _pageSize - 1;

      $.each(cakeList, function(index, cake) {
          if (index >= startFrom && index <= endAt){

              // create a new element from a template
              var newItemElement = _tmpElement.clone();
              newItemElement.removeClass('item_template');
              
              // update data into element
              $('img', newItemElement).attr('src', cake.image);
              $('.P_Img_description_container', newItemElement).attr('class', cake.filter);
              $('.P_Img_inner .save', newItemElement).attr('class', cake.action2);
              $('.P_Img_inner .view', newItemElement).attr('data-target', cake.data_target);
              $('.P_Img-type', newItemElement).text(cake.type);
              $('.P_Img-name', newItemElement).text(cake.name);
              $('.P_Img-price', newItemElement).text(cake.price);
              
              // Insert element into the page
              $('.P_Img_list .row').append(newItemElement);
          }
      });

      $('.P_list_currentPageNumber').text(pageNumber);
  };

  $('.P_list_previous').on('click', function() {
      if (currentPage > 1) {
          currentPage--;
          loadData(currentPage);
      }
  });

  $('.P_list_next').on('click', function() {
      var lastPageNumber = Math.ceil(cakeList.length / _pageSize);
      if (currentPage < lastPageNumber) {
          currentPage++;
          loadData(currentPage);
      }
  });

  loadData(1);
});

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

// var btn = document.querySelector(".submit-btn button");
// var post = document.querySelector(".post");
// var widget = document.querySelector(".star-widget");
// var editBtn = document.querySelector(".edit");
// btn.onclick = ()=>{
//   widget.style.display = "none";
//   post.style.display = "block";
//   editBtn.onclick = ()=>{
//     widget.style.display = "block";
//     post.style.display = "none";
//   }
//   return false;
// }

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

