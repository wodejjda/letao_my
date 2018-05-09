/**
 * Created by hp on 2018/5/9.
 */
$(function () {
    $('#form').bootstrapValidator({
      feedbackIcons:{
        valid:'glyphicon glyphicon-ok',
        invalid:'glyphicon glyphicon-remove',
        validating:'glyphicon glyphicon-refresh'
      },
  
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: "用户名不能为空"
            },
            stringLength: {
              min: 2,
              max: 6,
              message: "用户名必须是2-6位"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "密码不能为空"
            },
            stringLength: {
              min: 6,
              max: 12,
              message: "密码长度必须在6-12位"
            }
          }
        }
      }
    });
  



    $('#form').on("success.form.bv",function( e ){
        e.preventDefault();
        console.log($('#form').serialize());


        $.ajax({
          type:"post",
          url:"/employee/employeeLogin",
          dataType:"json",
          data: $('form').serialize(),
          success:function( info ){
            console.log(info);
            if( info.success) {
              location.href = "index.html";
            }
            if( info.error === 1001 ){
              $('#form').data("bootstrapValidator").updataStatus("password","INVALID","callback");
            }
            if( info.error === 1000 ) {
              $('#form').data("bootstrapValidator").updataStatus("username","INVALID","callback");

            }
          }
        })

    });



    $('[type="reset"]').click(function(){
        $('#form').data("bootstrapValidator").resetForm( true );
    })






})