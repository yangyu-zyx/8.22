var arrow_wheel_box=document.querySelector(".arrow_wheel_box");
var num=arrow_wheel_box.childElementCount;
arrow_wheel_box.style.width=num*200+"px";
var arrow_wheel=document.querySelector(".arrow_wheel");
var leftBtn=document.querySelector(".left");
var rightBtn=document.querySelector(".right");
//左边动
leftBtn.onclick=function(){
    arrow_wheel_box.insertBefore(arrow_wheel_box.lastElementChild,arrow_wheel_box.firstElementChild);
    arrow_wheel_box.style.maeginleft="-200";
    animate(arrow_wheel_box,{
        marginLeft:0
    
    },300,Tween.Linear)
    } 

//自己动
// setInterval(function){
//     animate(arrow_wheel_box,{
//         maeginleft:-200  
//     },300,Tween.Linear,function(){
//         arrow_wheel_box.appendChild(arrow_wheel_box.firstElementChild);
//         arrow_wheel_box.style.marginLeft=0;
    
//     },3000)
// }
var sortlist = document.querySelectorAll(".nav-item");
var shopList = document.querySelectorAll(".shopList");


for (let d = 0; d < sortlist.length; d++) {
    sortlist[d].onmouseover = function () {
        for (var g = 0; g < sortlist.length; g++) {
            shopList[g].style.display = "none";
        }
        shopList[d].style.display = "block";
    }
    sortlist[d].onmouseout = function () {

        shopList[d].style.display = "none";


    }
}
for (let d = 0; d < sortlist.length; d++) {
    shopList[d].onmouseover = function () {
        shopList[d].style.display = "block";
    }
    shopList[d].onmouseout = function () {
        shopList[d].style.display = "none";
    }

}

var mytaobao = document.querySelector(".baoguo");
var mytaobaolist = document.querySelector(".mytaobao_list");
mytaobao.onmouseover = function () {
    mytaobaolist.style.display = "block";
}
mytaobao.onmouseout = function () {
    mytaobaolist.style.display = "none";
}
mytaobaolist.onmouseover = function () {
    mytaobaolist.style.display = "block";
    mytaobao.style.background = "white";
}
mytaobaolist.onmouseout = function () {
    mytaobaolist.style.display = "none";
    mytaobao.style.background = "#f2f2f2";
}
var collection = document.querySelector(".collection");
var collectionlist = document.querySelector(".collection_list");
collection.onmouseover = function () {
    collectionlist.style.display = "block";
}
collection.onmouseout = function () {
    collectionlist.style.display = "none";
}
collectionlist.onmouseover = function () {
    collectionlist.style.display = "block";
    collection.style.background = "white";
}
collectionlist.onmouseout = function () {
    collectionlist.style.display = "none";
    collection.style.background = "#f2f2f2";
}
var baoguo = document.querySelector(".baoguo1");
var baoguolist = document.querySelector(".baoguo_list");
baoguo.onmouseover = function () {
    baoguolist.style.display = "block";
}
baoguo.onmouseout = function () {
    baoguolist.style.display = "none";
}
baoguolist.onmouseover = function () {
    baoguolist.style.display = "block";
    baoguo.style.background = "white";
}
baoguolist.onmouseout = function () {
    baoguolist.style.display = "none";
    baoguo.style.background = "#f2f2f2";
}

var baoguo3 = document.querySelector(".baoguo3");
var baoguolist3 = document.querySelector(".baoguo3_list");

baoguo3.onmouseover = function () {
    baoguolist3.style.display = "block";
}
baoguo3.onmouseout = function () {
    baoguolist3.style.display = "none";
}
baoguolist3.onmouseover = function () {
    baoguolist3.style.display = "block";
    baoguo3.style.background = "white";
}
baoguolist3.onmouseout = function () {
    baoguolist3.style.display = "none";
    baoguo3.style.background = "#f2f2f2";
}

var lilist = document.querySelectorAll(".li1");
var li1black = document.querySelectorAll(".li1black");
console.log(lilist);
for (let t = 0; t < lilist.length; t++) {
    lilist[t].onmouseover = function () {
        li1black[t].style.display = "block";
    }
    lilist[t].onmouseout = function () {
        li1black[t].style.display = "none";
    }
}









var title = document.querySelectorAll(".grid1_text");
var shops = document.querySelectorAll(".grid1_img");
console.log(title);
console.log(shops);
var y = true;
function mov() {
    if (y) {
        title[0].style.background = "#00B262";
        shops[0].style.display = "block";
        title[1].style.background = 'rgb(241,241,241)';
        shops[1].style.display = "none";
        y = false;
    } else {
        title[1].style.background = "#00B262";
        shops[1].style.display = "block";
        title[0].style.background = 'rgb(241,241,241)';
        shops[0].style.display = "none";
        y = true
    }
}

for (let i = 0; i < title.length; i++) {
    title[i].onclick = function () {
        for (var j = 0; j < title.length; j++) {
            title[j].style.background = 'rgb(241,241,241)';
            shops[j].style.display = "none";
        }
        title[i].style.background = "#00B262";
        shops[i].style.display = "block";
    }
}


var f = setInterval(mov, 4000);

for (let r = 0; r < title.length; r++) {
    title[r].onmouseover = function () {
        for (var l = 0; l < title.length; l++) {
            title[l].style.background = 'rgb(241,241,241)';
            shops[l].style.display = "none";
        }
        title[r].style.background = "#00B262";
        shops[r].style.display = "block";
        clearInterval(f);
    }
    title[r].onmouseout = function () {
        f = setInterval(mov, 4000);
    }
}


//轮播图
function css(obj, attr, val) {
    if (arguments.length == 2) {
        switch (attr) {
            case "background":
            case "color":
            case "opacity":
                return getComputedStyle(obj, null)[attr];
                break;
            case "scrollTop":
                return obj[attr];
                break;
            default:
                return parseInt(getComputedStyle(obj, null)[attr]);
        }
    } else if (arguments.length == 3) {
        switch (attr) {
            case "background":
            case "color":
            case "opacity":
                obj.style[attr] = val;
                break;
            case "scrollTop":
                obj[attr] = val;
                break;

            default:
                obj.style[attr] = val + "px";
        }

    }
}

function animate(obj, attrObj, duration, fn, callback) {
    clearInterval(obj.t);

    if (obj.nodeType != 1) {
        console.log("类型不对");
        return;
    }
    var start = {};
    var change = {};
    var time = 0;
    var fn = fn || Tween.Linear;
    for (var i in attrObj) {
        start[i] = css(obj, i);

        change[i] = attrObj[i] - start[i];

    }
    obj.t = setInterval(() => {
        time = time + 50;
        for (var i in attrObj) {
            css(obj, i, fn(time, start[i], change[i], duration));
        }
        if (time >= duration) {
            for (var i in attrObj) {
                css(obj, i, attrObj[i])
            }
            clearInterval(obj.t);
            if (callback) {
                callback();
            }
        }
    }, 50);
}



var imgs = document.querySelectorAll(".lunbo_img");
var but = document.querySelectorAll(".butt li");

var num = 0;



var t = setInterval(() => {
    num++;
    if (num > imgs.length - 1) {
        num = 0;
    }
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        imgs[i].style.zIndex = 0;
        but[i].style.background = "#000";
        but[i].style.opacity = 0.3;
    }
    animate(imgs[num], {
        opacity: 1
    }, 300, Tween.Linear, function () {
        imgs[num].style.zIndex = 1;
        but[num].style.background = "#fff"
    })
}, 3000);


for (let h = 0; h < but.length; h++) {
    num = h;
    but[h].onclick = function () {
        console.log("点击 " + h)
        console.log(but[h]);
        for (var k = 0; k < but.length; k++) {
            imgs[k].style.opacity = 0;
            imgs[k].style.zIndex = 0;
            but[k].style.background = "#000";
            but[k].style.opacity = 0.3;
        }

        animate(imgs[h], {
            opacity: 1
        }, 300, Tween.Linear, function () {
            imgs[h].style.zIndex = 1;
            but[h].style.background = "#fff";
        })
        console.log(imgs[h]);
        clearInterval(t);
    }


}
