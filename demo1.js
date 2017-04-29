$(function(){
        //    点击添加，遮罩层出现 页面出现
          $('.cart-add').on('click',function(){
                    console.log('add加入购物车')

                    $('#good-zhezhao').fadeIn(400);

                    $('#goods-select-window').show().animate({bottom:'0'},1000)
          })
  


          $('#good-zhezhao').on('click',function(){
   
               $('#goods-select-window').animate({bottom:'-11rem'},200,function(){
              $(this).hide();
               });

               $('#good-zhezhao').fadeOut(400);
          });

       
          $('#goods-add-btn').on('click',function(){

            $('#good-zhezhao').fadeOut(400);


    $('#goods-select-window').animate({bottom:'-100px'},2000,function(){
              $(this).hide();
            }

            // $('#goods-select-window').animate({bottom:'-11rem'},200,function(){
            //   $(this).hide();
            // }
            
            )
          })














// // 一、加入购物车

//           //1.点击加入购物车按钮；遮罩层出现，执行商品加入购物车
//           $('.cart-add').on('click',function(){
//             console.log('add加入购物车')

// // 点击添加购物车，遮罩层出现
//             $('#good-zhezhao').fadeIn(400);
// // 商品选取页出现
//             $('#goods-select-window').show().animate({bottom:'0'},1000)
//           })
//           // 1.END点击加入购物车按钮





// // 2.点击遮罩层，商品选取消失，遮罩层消失
//           $('#good-zhezhao').on('click',function(){
//           // 商品选取消失
//                $('#goods-select-window').animate({bottom:'-11rem'},200,function(){
//               $(this).hide();
//                });
//         // 遮罩层消失
//                $('#good-zhezhao').fadeOut(400);
//           });

//           // 2.end点击遮罩层，商品选取消失，遮罩层消失


//           //3.选取商品，点击 "确定加入"按钮
//           $('#goods-add-btn').on('click',function(){
       
// // 遮罩层消失
//             $('#good-zhezhao').fadeOut(400);
// // 商品选取消失

//     $('#goods-select-window').animate({bottom:'-100px'},2000,function(){
//               $(this).hide();
//             }

//             // $('#goods-select-window').animate({bottom:'-11rem'},200,function(){
//             //   $(this).hide();
//             // }
            
//             )


       



//           })



})