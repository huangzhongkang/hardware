/****** url-->跳转 ******/
var Open =  {
    url: function (url) {
        window.location.href = url;
    }
};


/****** login-->登陆 ******/
$('#login-submit').click(function () {
    Open.url('index.html');
});


/****** slideBar-->展开收起 ******/
var SlideBarNav = {
  firstLevelToggle: function () {
    if (!$(this).siblings('ul').hasClass('open')){
      $(this).siblings('ul').slideDown();
      $(this).siblings('ul').addClass('open');
      $(this).siblings('.fa-caret-left').addClass('slide-icon-animation');
    } else {
      $(this).siblings('ul').slideUp();
      $(this).siblings('ul').removeClass('open');
      $(this).siblings('.fa-caret-left').removeClass('slide-icon-animation');
    }
  },
  secondLevelToggle: function () {
    if (!$(this).siblings('ul').hasClass('open')){
      $(this).siblings('ul').slideDown();
      $(this).siblings('ul').addClass('open');
      if ($(this).hasClass('fa')) {
        $(this).addClass('slide-icon-animation');
      } else {
        $(this).siblings('.fa-caret-left').addClass('slide-icon-animation');
      }
    } else {
      $(this).siblings('ul').slideUp();
      $(this).siblings('ul').removeClass('open');
      if ($(this).hasClass('fa')) {
        console.log($(this))
        $(this).removeClass('slide-icon-animation');
      } else{
        console.log($(this))
        $(this).siblings('.fa-caret-left').removeClass('slide-icon-animation');
      }
    }
  }
};

$('.hardwareOne').click(function () {
  SlideBarNav.firstLevelToggle.call($(this));
});

$('.hardwareTwo').click(function() {
  SlideBarNav.secondLevelToggle.call($(this));
});

$('.expand-bar').click(function () {
  if ($('#sidebar').css('marginLeft') === '0px') {
    $('#sidebar').animate({'margin-left': '-250px'},200);
    $('#content').css('margin-left', '0px');
    $('#header').css('margin-left', '104px');
  } else if ($('#sidebar').css('marginLeft') === '-250px') {
    $('#sidebar').animate({'margin-left': '0px'},200);
    $('#content').css('margin-left', '220px');
    $('#header').css('margin-left', '220px');
  }
});


/****** 新建项目-->创建时间 ******/
var AddProject = {
    createTime : function () {
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDay();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        var time = year + '-' + month + '-' + day + '-' + hour + ':' + min + ':' + sec;
        $('.createTime').val(time);
    }
};

setInterval(function () {
    AddProject.createTime()
}, 1000);


/****** 项目列表-->任务列表 ******/
$('.task-list').click(function () {
  if($('.task-list-detail').hasClass('hide')){
    $('.task-list-detail').removeClass('hide').addClass('show');
  } else{
    $('.task-list-detail').removeClass('show').addClass('hide');
  }
});

$('.no-task').click(function () {
  $('.task-list-detail').removeClass('show').addClass('hide');
});


/****** 项目列表-->跳转主机列表 ******/
$('.openHostList').click(function () {
    Open.url('hostList.html');
});


/****** 项目列表-->跳转固件信息 ******/
$('.openFirmware').click(function () {
  Open.url('firmwareInformation.html');
});


/****** 固件信息展开行 ******/
$('.click-expand-line').click(function () {
  $(this).parents('.pro-list').siblings().slideToggle(700);
});


/****** 初始化 ******/
var Init = {
  // layUI组件
  initLayUi: function () {
    layui.use(['layer', 'form', 'element'], function(){
      var layer = layui.layer
        ,form = layui.form
        ,element = layui.element
    });
  },

  // 导航伸缩按钮
  initSlideButton: function () {
    $('#sidebar').animate({'margin-left': '-250px'},200);
    $('#content').css('margin-left', '0px');
    $('#header').css('margin-left', '104px');
  },

  // 导航侧边栏箭头
  init_firstLevelToggle: function () {
    if ($(this).siblings('ul').hasClass('open')){
      $(this).siblings('.fa-caret-left').addClass('slide-icon-animation');
    }
  },
  init_secondLevelToggle: function () {
    if ($(this).siblings('ul').hasClass('open')){
      $(this).siblings('.fa-caret-left').addClass('slide-icon-animation');
    }
  },

  /****** 固件信息展开行 ******/
  init_expandLine: function () {
    $('.click-expand-line').parents('.pro-list').siblings().slideUp();
  }
};

Init.initLayUi();

Init.init_expandLine();

Init.init_firstLevelToggle.call($('.hardwareOne'));

Init.init_secondLevelToggle.call($('.hardwareTwo'));