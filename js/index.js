

var data = [
    {
        num: 1,
        price: 199,
        img: 1,
        ischeck: false
    },
    {
        num: 1,
        price: 190,
        img: 2,
        ischeck: false
    },
    {
        num: 1,
        price: 99,
        img: 3,
        ischeck: true
    }
];

var contents = document.querySelector('.content');
console.log(contents)
function xuanran() {
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += `
            <div class="commodity">
                <div class="names">
                <span>买减</span>
                <span>小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元</span>
                <span>换商品></span>
            </div>
            <div class="article">
                <div class="article-one">
                    <div class="article-check">
                        <span class="iconfont icon-querenwancheng  check  ${data[i].ischeck ? 'active' : ''}"></span>
                    </div>
                    <div class="image">
                        <img src="./img/${data[i].img}.png" alt="">
                    </div>
                </div>
            <div class="article-two">
                <div class="article-title">
                    <span>小度人工智能音箱大金刚百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家</span>
                    <p>黑色</p>
                </div>
                <div class="article-price">
                    <span>￥${data[i].price}</span>
                    <div class="num">
                        <span class = 'jian'>-</span>
                        <input type="text" value="${data[i].num}" class ='nums'>
                        <span class = 'jia'>+</span>
                    </div>
                </div>
            </div>
            </div> 
            </div> 
        `;
    }
    contents.innerHTML = html;
    addEvent();
    console.log(data)
}
xuanran();




// var checks = document.querySelectorAll('.check');
// console.log(checks);


function addEvent() {

    var adds = document.getElementsByClassName('jia');
    var downs = document.getElementsByClassName('jian');
    var nums = document.getElementsByClassName('nums');

    var checkboxs = document.querySelectorAll('.check');
    var allprices = document.querySelector('.allprices');
    var allcheckeds = document.querySelector('.allcheck');
    for (var i = 0; i < adds.length; i++) {
        (function (idx) {
            adds[idx].onclick = function () {
                var value = nums[idx].value;
                value++;
                nums[idx].value = value;
                data[idx].num = value;
                zongjia();
            }
            downs[idx].onclick = function () {
                var value = nums[idx].value;
                value = value - 1 <= 1 ? 1 : value - 1;
                nums[idx].value = value;
                data[idx].num = value;
                zongjia();
            }
            checkboxs[idx].addEventListener('click', function () {
                checkboxs[idx].classList.toggle('active');
                checkboxs[idx].classList.contains('active') ? data[idx].ischeck = true : data[idx].ischeck = false;
                var bool = data.every(function (item) {
                    return item.ischeck;
                });
                bool ? allcheckeds.classList.add('active') : allcheckeds.classList.remove('active');
                zongjia();
            });   
        })(i)
    }


    // danxuan();
    // function danxuan() {
    //     for (var i = 0; i < checkboxs.length; i++) {
    //         (function (idx) {
    //             checkboxs[idx].addEventListener('click', function () {
    //                 checkboxs[idx].classList.toggle('active');
    //                 checkboxs[idx].classList.contains('active') ? data[idx].ischeck = true : data[idx].ischeck = false;
    //                 zongjia();
    //             });
    //         })(i)
    //     }
    // }

    quanxuan();
    function quanxuan() {
        allcheckeds.onclick = function () {
            allcheckeds.classList.toggle('active');
            for (var i = 0; i < checkboxs.length; i++) {
                allcheckeds.classList.contains('active') ? checkboxs[i].classList.add('active') : checkboxs[i].classList.remove('active')
                data[i].ischeck = checkboxs[i].classList.contains('active');
            }
            zongjia();
        }
    }

    zongjia();
    function zongjia() {
        var allprice = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].ischeck) {
                allprice += data[i].price * data[i].num;
            }
            allprices.innerHTML = allprice;
        }
    }
}

