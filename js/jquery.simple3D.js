/*! jQuery.Simples3D (http://memocarilog.info/jquery/6014)
 * lastupdate: 2014-04-09
 * author: Saori Miyazaki http://memocarilog.info 
 * License: MIT 
*/
 
;(function($, undefined){

	$.fn.simple3D = function(options){
		
		var thisObj = this;
				
		var opts = $.extend({}, $.fn.simple3D.defaults, options );
			
		$(function(){	
	       
	        if (thisObj.length == 0) return false;
	        var item = thisObj[0];
		   	
			var childWidth = $(item).children().width()
			var childHeight = $(item).children().height()   
			
			var parentWidth = thisObj.width();
			var parentHeight = thisObj.height();
			
			var offset_x = childWidth - parentWidth;
			var offset_y = childHeight - parentHeight;
			
			var itemChild = thisObj.children();		
			
			if( opts.bgImage == false){	
				
				// child
				var startX = (parentWidth -  childWidth) / 4;
				var startY = (parentHeight -  childHeight) / 4;
				thisObj.css({
					"position": "relative",
					"overflow": "hidden"
				});
				itemChild.css({
					"position": "absolute",
					"left":startX,
					"top":startY
				});
				
			// 	background true 
			}　else {	
				thisObj.css({
					"overflow": "hidden"
				});
				itemChild.css({
					"position": "absolute",
					"left": itemChild.position().left,
					"top": itemChild.position().top,
					"background-position": "center",
					"width":'100%',
					"height":'100%'
				});
			}　//　background true 
			if (opts.moveX > 5 || opts.moveY > 5) return false;
			var sort = [5, 4, 3, 2, 1];
			opts.moveX = sort[parseFloat(opts.moveX)-1];
	       	opts.moveY = sort[parseFloat(opts.moveY)-1];
			opts.moveX = Math.floor(opts.moveX) *6 / 10 + 1 ;
			opts.moveY = Math.floor(opts.moveY) *6 / 10 + 1 ;
			
			// document
			var targetArea = (opts.targetAll == true) ? $(document) : thisObj ;
			
			// 
			targetArea.mousemove(function(e){
					
					var cursorX = e.clientX - thisObj.offset().left;					
					cursorX = (cursorX > parentWidth) ? parentWidth : cursorX ;				
					var centerX = (cursorX / parentWidth * offset_x) - offset_x / 2 ;
					
					var cursorY = e.clientY - thisObj.offset().top + $('html').scrollTop();
					cursorY = (cursorY > parentHeight) ? parentHeight : cursorY ;							
					var centerY = (cursorY / parentHeight * offset_y) - offset_y / 2;
				 
					for (var i=1; i<= itemChild.length; i++){				
						
						if( opts.bgImage == false){							
							

							var childLeft = parseFloat($(itemChild[i-1]).css('left'));													
							var newLeft =  centerX * (i / itemChild.length) - offset_x / 2;
							newLeft = Math.floor( (newLeft + childLeft) / opts.moveX );
							newLeft = (opts.reverseX == false) ? newLeft : -newLeft ;
							$(itemChild[i-1]).css('left', newLeft);
							

							var childTop = parseFloat($(itemChild[i-1]).css('top'));
							var newTop = centerY * (i / itemChild.length) - offset_y / 2;
							newTop = Math.floor( (newTop + childTop) / opts.moveY );
							newTop = (opts.reverseY == false) ? newTop : -newTop ;
							$(itemChild[i-1]).css('top', newTop );
							
						} else {
						// background
						
							// X
							var bgPosX = parseFloat($(itemChild[i-1]).css('left'));
							var newLeft =  centerX * (i / itemChild.length) - offset_x / 2;
							newLeft = Math.floor( (newLeft + bgPosX) / opts.moveX );
							newLeft = (opts.reverseX == false) ? newLeft : -newLeft ;															
							// Y
							var bgPosY = parseFloat($(itemChild[i-1]).css('top'));
							var newTop = centerY * (i / itemChild.length) - offset_y / 2　;
							newTop = Math.floor( (bgPosY + newTop)  / opts.moveY  );
							newTop = (opts.reverseY == false) ? newTop : -newTop ;
							
							// 
							$(itemChild[i-1]).css('background-position',newLeft+'px ' + newTop +'px');
									
						} // background
					} // for
			});	// 
		});
	return this;		
	};
	
	// 
	$.fn.simple3D.defaults = {
		moveX: 2 ,
		moveY: 2 ,
		bgImage: false,
		targetAll: false,
		reverseX: false,
		reverseY: false
	};	

})(jQuery);