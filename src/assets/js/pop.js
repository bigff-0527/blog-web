function modelNav() {
  $('.menu.toggle').click(function () {
    $('.m-item').toggleClass('m-mobile-hide');
  });
}
function pop() {
  $('.wechat').popup(
    {
      popup : $('.wechat-qr'),
      position: 'bottom center'
    });
  $('.qq').popup({
    popup : $('.qq-qr'),
    position: 'bottom center'
  });
}
function login() {
  $('.ui.form').form({
    fields : {
      username : {
        identifier : 'username',
        rules : [{
          type : 'empty',
          prompt : '请输入用户名'
        }]
      },
      password : {
        identifier : 'password',
        rules : [{
          type : 'empty',
          prompt : '请输入密码'
        }]
      }
    }
  });
}
function dropdown() {
  $('.ui.dropdown')
    .dropdown({
      on:"hover"
    });
}
function message() {
  $('.message .close')
    .on('click',function () {
      $(this)
        .closest('.message')
        .transition('fade');
    })
}
export {
  modelNav,
  pop,
  login,
  dropdown,
  message
}
