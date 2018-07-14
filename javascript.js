
var hero;
var boss;
var warrior1 = {
    hp: 200
};

var mage1 = {
    hp: 100
};

var DK1 = {
    hp: 150

};

var boss3 = {
    hp: 200
};

var boss1 = {
    hp: 100
};

var boss2 = {
    hp: 150

};





var characterSelected;
var bossSelected;
var userPick = false;
var bossPick = false;
$(".btn1").hide();
$(".boss").hide();

$(".Hero").click(function () {
    characterSelected = event.target.alt;
    console.log(characterSelected);
    userPick = true;
    animate()
    
    boss()
}

);

console.log(characterSelected);




function Gamestart() {
    if (userPick && bossPick) {
        console.log("gamestart test")
        $(".btn1").delay(2000).fadeIn("slow", function () {
            // Animation complete
            attack();
        });
        
    }

};





function animate() {
    if (characterSelected === "warrior") {
        characterSelected = $(".war")
        $(".mag, .DK , .magg, .DKK, .choose").fadeOut("slow", function () {
            $(this).remove();
            $(".warr").animate({ left: $(".warr").parent().width() / 2 - $(".warr").width() / 2 }, "slow");
            $(".war").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    else if (characterSelected === "mage") {
        characterSelected = $(".mag")
        $(".war, .DK , .warr, .DKK, .choose").fadeOut("slow", function () {
            $(".magg").addClass("mx-auto");
            $(this).remove();
            $(".mag").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    else if (characterSelected === "DK") {
        characterSelected = $(".DK")
        $(".war, .mag, .WA, .MA, .choose").fadeOut("slow", function () {
            $(this).remove();
            $(".DKK").animate({ right: $(".DKK").parent().width() / 2 - $(".DKK").width() / 2 }, "slow");
            $(".DK").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    if (bossSelected === "Prinny") {
        bossSelected = $(".Prinny")
        $(".Midboss, .Baal , .boss2, .boss3").fadeOut("slow", function () {
            $(this).remove();
            $(".boss1").animate({ left: $(".boss1").parent().width() / 2 - $(".boss1").width() / 2 }, "slow");
            $(".Prinny").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    else if (bossSelected === "Midboss") {
        bossSelected = $(".Midboss")
        $(".Prinny, .Baal , .boss1, .boss3").fadeOut("slow", function () {
            $(".boss2").addClass("mx-auto");
            $(this).remove();
            $(".Midboss").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    else if (bossSelected === "Baal") {
        bossSelected = $(".Baal")
        $(".Midboss, .Prinny").fadeOut("slow", function () {
            $(this).remove();
            $(".boss3").animate({ right: $(".boss3").parent().width() / 2 - $(".boss3").width() / 2 }, "slow");
            $(".Baal").animate({ height: "200px", width: "200px" }, "slow");
        });
    }


}

function boss() {
    bossPick;
    bossSelected;
    $(".boss").delay(2500).fadeIn("slow", function () {
        // Animation complete
    });
    $(".boss1, .boss2, .boss3").click(function () {
        bossSelected = event.target.alt;
        bossPick = true;
        animate()
        Gamestart()
    });

}

function attack(){
    var attacker1 = DK1;
    var attacker2 = boss1;
    $(".attacker").click(function () {
        attacker1.hp = attacker1.hp - 12
        attacker2.hp = attacker2.hp - 6
        console.log(attacker1.hp);
        console.log(attacker2.hp);

});
};