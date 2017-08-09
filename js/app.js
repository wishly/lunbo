//淡入淡出
/*$(document).ready(function(){
	var uLi = $(".box ul li");
	var oLi = $(".box ol li");
	oLi.mouseenter(function(e){
		e.preventDefault();
		var $this = $(this);
		oLi.each(function(index, value) {
			$(uLi[index]).fadeOut("slow");
			$(oLi[index]).removeClass();
		});
		$this.addClass("active");
//		uLi[oLi.index($this)].style.display = "block";
		$(uLi[oLi.index($this)]).fadeIn("slow").css("display", "block");
	});
	
});
*/
/*上下滑动*/
/*$(document).ready(function(){
	var $ul = $(".box ul");
	var uLi = $(".box ul li");
	var oLi = $(".box ol li");
	var top = "";
	oLi.mouseover(function(e){
		clearInterval(timer);
		e.preventDefault();
		var $this = $(this);
		oLi.each(function(index, value) {
//			$(uLi[index]).fadeOut("slow");
			$(oLi[index]).removeClass();
		});
		$this.addClass("active");
//		uLi[oLi.index($this)].style.display = "block";
		top = oLi.index($this) * (-200) + "px";
		$ul.animate({top: top}, 500);
		iNow = oLi.index($this);
	});
	oLi.mouseout(function(){
		timer = setInterval(toRun, 1000);
	});
	var timer = setInterval(toRun, 1000);
	var iNow = 0;
	var top = "";
	function toRun() {
		if(iNow == uLi.length - 1 ) {
			iNow = 0;
		} else {
			iNow++;
		}
		oLi.each(function(index, value) {
//			$(uLi[index]).fadeOut("slow");
			$(oLi[index]).removeClass();
		});
		top = iNow * (-200) + "px";
		$ul.animate({top: top}, 1000);
		$(oLi[iNow]).addClass("active");
		console.log(top);
	}
	
});
*/
/*无缝轮播*/
/*$(document).ready(function(){
	var $ul = $(".box ul");
	var uLi = $(".box ul li");
	var oLi = $(".box ol li");
	var top = "";
	oLi.mouseover(function(e){
		clearInterval(timer);
		e.preventDefault();
		var $this = $(this);
		oLi.each(function(index, value) {
//			$(uLi[index]).fadeOut("slow");
			$(oLi[index]).removeClass();
		});
		$this.addClass("active");
//		uLi[oLi.index($this)].style.display = "block";
		top = oLi.index($this) * (-200) + "px";
		$ul.animate({top: top}, 500);
		iNow = oLi.index($this);
		iNow2 = oLi.index($this);
	});
	oLi.mouseout(function(){
		timer = setInterval(toRun, 2000);
	});
	var timer = setInterval(toRun, 2000);
	var iNow = 0;
	var iNow2 = 0;
	function toRun() {
		if( iNow == 0 ) {
			iNow2 = 0;
//			$ul.stop(false, true);
			uLi.eq(0).css("position", "static");
			$ul.css("top", "0px");
		}
		if(iNow == uLi.length - 1 ) {
			iNow = 0;
			uLi.eq(0).css({
				position: "relative",
				top: uLi.length*200 + "px"
			});
		} else {
			iNow++;
		}
		iNow2++;
		oLi.each(function(index, value) {
//			$(uLi[index]).fadeOut("slow");
			$(oLi[index]).removeClass();
		});
		top = iNow2 * (-200) + "px";
		$ul.animate({top: top}, 500);
		$(oLi[iNow]).addClass("active");
		console.log(top);
	}
	
});
*/

/*左右轮播无缝*/
/*$(document).ready(function () {
	var $ul = $(".box ul"),
		$uLi = $(".box ul li"),
		$oLi = $(".box ol li");
		
	var imgWidth = 0,
		iNow = 0,
		bBtn = true;
		$uLi.css({
			position: "absolute",
			top: 0
		});
		
		imgWidth = $uLi.width() + "px";
		for(var i = 1; i < $uLi.length; i++ ) {
//			$uLi[i].style.left = imgWidth;
			$uLi.eq(i).css("left", imgWidth);
			}
		$oLi.mouseover(function(){
			if(bBtn){
				bBtn = false;
				var $this = $(this);
				$uLi.stop(false,true);
				$oLi.each(function(index, value) {
					$oLi[index].className = "";
	//				$uLi[index].style.display = "none";
				});
				$this.addClass("active");
				
				if( iNow > $oLi.index($this)) {
					$uLi[$oLi.index($this)].style.left = "-" + imgWidth;
					$($uLi[iNow]).animate({left: imgWidth}, 500);
				} else if (iNow < $oLi.index($this) ) {
					$uLi[$oLi.index($this)].style.left = imgWidth;
					$($uLi[iNow]).animate({left: "-" + imgWidth}, 500);
				}
				$($uLi[$oLi.index($this)]).animate({left: 0}, 500, function() {
					return bBtn = true;
				});
				iNow = $oLi.index($this);
	//			$uLi[$oLi.index($this)].style.display = "block";
			}

		});
		
});
*/

/*手风琴效果*/
/*
$(document).ready(function() {
	var $ul = $(".box ul"),
		$uLi = $(".box ul li"),
		$oLi = $(".box ol li");
		
	var imgLeft = 0;	
	$uLi.css({
		position: "absolute",
		top: 0
	});
	
	$uLi.each(function(index, value) {
		if(index != 0){
			imgLeft = ($ul.width() - 30*($uLi.length - 1) + (index-1)*30) + "px";
			$uLi.eq(index).css("left", imgLeft);
		} else {
			return true;
		}
	});
	$uLi.mouseover(function() {
		var $this = $(this);
		$uLi.each(function(index, value) {
			var $that = $(this);
			if( $uLi.index($this) >= index ) {
				$that.animate({
					left: index * 30 + "px"
				},500);
			} else if($uLi.index($this) < index ){
				$that.animate({
					left: ($ul.width() - 30*($uLi.length - 1) + (index - 1)*30) + "px"
				},500, function(){
					console.log(($ul.width() - 30*($uLi.length - 1) + (index)*30));
					console.log(index);
				});
			}
		});
	});
});
*/
/*手风琴平均分配*/
$(document).ready(function() {
	var $ul = $(".box ul"),
		$uLi = $(".box ul li"),
		$oLi = $(".box ol li");
	var flag1 = true,
		flag2 = true;
	
	$(".box ol").css("display", "none");
	$uLi.css({
		position: "absolute",
		top: 0
	});
	
	$uLi.each(function(index, value) {
		var $this = $(this);
		$this.css("left", ($ul.width() / ($uLi.length)) * index );
	});
	
	$uLi.mouseover(function() {
		var $this = $(this);
		$uLi.each(function(index, value) {
			var $that = $(this);
			console.log(index);
			console.log($uLi.index($this));
			if( index > $uLi.index($this)) {
				$that.animate({
					left: $uLi.width() - 30 * ($uLi.length) + index * 30
				},500);
			} else {
				$that.animate({
					left: index*30 + "px"
				},500);
			}
		});
		
	});
	$uLi.mouseout(function(){
		if(flag2){
			flag2 = false;
			$uLi.each(function(index, value) {
			$(this).animate({left: $uLi.width()/$uLi.length * index + "px"}, 500, function(){
				return flag2 = true;
			});
		});
		}
		
	});
});
 