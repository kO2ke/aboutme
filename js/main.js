const config = 
{
    title:"近藤康介のスケジュール",
    description:
    [
        "平日は現職の都合上１９：００以降しか伺えないと思われます。<br>",
        "また突然の残業により当日面談に伺えない可能性が少しありますが<br>おわび申し上げます。",
        "都合に会う日程がなければ有給などにて対応致しますので、遠慮なくお申し付けください。"
    ],
    contact:
    [
        {icon:"<i class='fab fa-twitter-square text-info'></i>",url:"desunokora527@gmail.com"},
        {icon:"<img src='./img/wantedly_mark.png'>",url:"https://www.wantedly.com/users/18046650"},
        {icon:"<i class='fab fa-facebook-square'></i>",url:"https://www.facebook.com/key.key.key.ring"}
    ]

}

$(function(){
    console.log(config);
    setText();
})

function setText(){
    $(".title").html(config.title);

    $.each(config.description, function (indexInArray, valueOfElement) { 
         descContainer = $("<div class='m-3'>");
         descContainer.html(valueOfElement);
         $(".description>.welcome").append(descContainer);
    });

    $.each(config.contact, function (indexInArray, valueOfElement) { 
         mediaArea = $("<a class='m-2 d-inline-block' style='height:40px;'>").attr("href",valueOfElement.url);
         mediaArea.html($(valueOfElement.icon).addClass("media-icon shadow-lg"));
         $(".description>.contact").append(mediaArea);
    });
}