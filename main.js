function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};



$(document).ready(function () {
    $("#btn1").click(function () {
        $("#content0").hide();
        $("#content1").show();
        $("#content2").hide();
        $("#content3").hide();
        $("#content4").hide();
    });
    $("#btn2").click(function () {
        $("#content0").hide();
        $("#content1").hide();
        $("#content2").show();
        $("#content3").hide();
        $("#content4").hide();
    });
    $("#btn3").click(function () {
        $("#content0").hide();
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").show();
        $("#content4").hide();
    });
    $("#btn4").click(function () {
        $("#content0").hide();
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").hide();
        $("#content4").show();
    });
    $("#btn5").click(function () {
        $("#content0").show();
        $("#content1").hide();
        $("#content2").hide();
        $("#content3").hide();
        $("#content4").hide();
    });
});

const modal = document.getElementById("filterModal");
const btn = document.getElementById("modal-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}