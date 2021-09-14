let array = [1];
function comment() {
  $(".noti").html("");
  for (let i = 0; i < array.length; i++) {
    const div = `
  <div class="container ${i}">
  <div><img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-1/p480x480/203338209_327563295535317_5088429004804986005_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=9O16-Q0oCaYAX9CL_AK&_nc_ht=scontent-hkt1-1.xx&oh=1b96cd85a0b20feffb27b928a2db7e2b&oe=61636A81" alt=""></div>
  <div class="name">Duc Huy</div>
   <div class="huy${i} h${i}"> <input type="text" placeholder="comment" class='comment'> </div>
   <div class="add"><button class="them${i}" onclick="them(${i})">thêm</button></div>
<div class="repair"><button class="sua"onclick="sua('h${i}')">sửa</button></div>
<div class="delete"><button class="xoa"onclick="xoa(${i})">xoá</button></div>
</div>
    `;
    $(".noti").append(div);
    keydown();
  }
}

function keydown() {
  $(".comment").on("keydown", function (even) {
    const huy = `
      <input type="text" placeholder="comment" class='binhluan'>
      `;

    if (even.key === "Enter") {
      let newComment = $(".comment").val();
      console.log(newComment);
      $(".huy0").html(newComment);
    }
    if (even.key === "Escape") {
      $(".huy0").html("");
    }
  });
}
function them(value) {
  array.push(1);
  console.log(value);
  comment();
}

function xoa(huy) {
  $(`.${huy}`).html("");
  if (array.length > 1) {
    array.shift();
  }

  comment();
}
function sua(classname, index) {
  let x = $(`.${classname}`).html();
  const input = `
     <input type='text' value = '${x}' class= 'newName'>
     `;
  $(`.${classname}`).html(input);
  $(".newName").on("keydown", function (even) {
    const huy = `
      <input type="text" placeholder="comment" class='newName'>
      `;

    if (even.key === "Enter") {
      let newComment = $(".newName").val();
      console.log(newComment);
      $(`.${classname}`).html(newComment);
    }
    if (even.key === "Escape") {
      $(`.${classname}`).html(huy);
      comment();
    }
  });
}
// function update1(classname, index) {
//     const oldname = $(`.${classname}`).html();
//     const input = `
//     <input type='text' value = '${oldname}' class= 'newName'>
//     `;
//     $(`.${classname}`).html(input);
//     $(".newName").on("keydown", function (event) {
//       if (event.key === "Enter") {
//         data[index].name = $(".newName").val();
//         render();
//       }
//       if (event.key === "Escape") {
//         render();
//       }
//     });
//   }
