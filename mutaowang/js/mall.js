$(document).ready(function(){
	topSlide();
	menuSlide();
	imgSlide()
	cartSlide();
	floorChange();
	rightFlexNav();
	
	//轮播图函数代码
	function imgSlide(){
		var control=0;//控制显示索引
		var timer=null;//存储定时器
		//开始定时轮播
		function start(){
			timer=setInterval(function(){
				changeImg();
				control++;
			},1500);
		}
		//切换到第control张图片，显示第control张图片的函数
		function changeImg(){
			for(var i=0;i<$('#littleCircle li').length;i++){
				$('#box .slide').eq(i).hide();
				$('#list li').eq(i).css('background-color','#fff');
				$('#littleCircle li').eq(i).css('background-color','transparent');
			}
			if(control>=($('#box .slide').length)){
				control=0;
			}else if(control<0){
				control=5;
			}
			// console.log("切换图片"+control);
			$('#box .slide').eq(control).show();
			$('#list li').eq(control).css('background-color','#fc0');
			$('#littleCircle li').eq(control).css('background-color','#ddd');
		}
		//开始
		start();
		//.hover()了，清除定时器
		$('#main').hover(function(){
			clearInterval(timer);
		},function(){
			start();
		});
		//点击list和小圆点，点哪个切哪个
		$('#list li,#littleCircle li').click(function(){
			control=$(this).index();
			// console.log("点击"+control);
			changeImg();
		})
		//点击左右按钮切换
		$('.icon-jiantou1').click(function(){
			control--;
			// console.log("左"+control);
			changeImg();
		})
		$('.icon-jiantou').click(function(){
			control++;
			// console.log("右"+control);
			changeImg();
		})
	}//轮播图函数代码结束

	function topSlide(){
		//头部下拉菜单事件绑定
		$('.right li').hover(function(){
			$(this).find('ul').css('display','block');
		},function(){
			$(this).find('ul').css('display','none');
		});
	} 

	function menuSlide(){
		//左侧边栏菜单栏事件绑定
		$('.menu ul li,.menuList .menuLi').hover(function(){
			var index=$(this).index();
			$('.menuList .menuLi').eq(index).show();
		},function(){
			$('.menuList .menuLi').hide();
		})
	}

	function cartSlide(){
		//购物车下拉
		$('.shoppingCart,#slideDown').mouseenter(function(){
			$('.shoppingCart .number img').attr('src','images/icon/21.png');
			$('.cartImgage img').attr('src','images/icon/25.png');
			$('#slideDown').css('display','block');
			$('.shoppingCart').css({'color':'red','background-color':'white'});
		});
		$('.shoppingCart,#slideDown').mouseleave(function(){
			$('.shoppingCart .number img').attr('src','images/icon/23.png');
			$('.cartImgage img').attr('src','images/icon/26.png');
			$('#slideDown').css('display','none');
			$('.shoppingCart').css({'color':'white','background-color':'red'});
		});
	}

	function floorChange(){
		//楼层切换
		$('#1F .floorNav li').mouseenter(function(){
			var num=$(this).index();
			for(var i=0;i<$('#1F .floorNav li').length;i++){
				$('#1F .floorTab').eq(i).hide();
			}
			$('#1F .floorTab').eq(num).show();
		});
		$('#2F .floorNav li').mouseenter(function(){
			var num=$(this).index();
			for(var i=0;i<$('#2F .floorNav li').length;i++){
				$('#2F .floorTab').eq(i).hide();
			}
			$('#2F .floorTab').eq(num).show();
		});
	}

	function rightFlexNav(){
		//右侧固定导航栏
		$('.navBox').hover(function(){
			$(this).find('.rNavWord').stop().animate({right:'40px'});
		},function(){
			$(this).find('.rNavWord').stop().animate({right:'-68px'});
		});
	}
});