//global variables
var hero;
var boss;
var warrior1 = {
    hp: 200,
    attack: 6
};

var mage1 = {
    hp: 100,
    attack: 15
};

var DK1 = {
    hp: 150,
    attack: 9
};

var boss3 = {
    name: "boss3",
    hp: 200,
    attack: 20
};

var boss1 = {
    name: "boss1",

    hp: 100,
    attack: 10
};

var boss2 = {
    name: "boss2",
    hp: 150,
    attack: 15
};



var bossArray = ["boss1", "boss2", "boss3"];
var counter = 0;
var characterSelected;
var bossSelected;
var userPick = false;
var bossPick = false;
var player;
var opponant;
//hidden elements for bosses
$(".btn1").hide();
$(".boss").hide();



//click function for hero selection
$(".Hero").click(function () {
    characterSelected = event.target.alt;
    console.log(characterSelected);
    userPick = true;
    animate()

    theBoss()
}

);

console.log(characterSelected);



//start function after hero and boss are selected
function Gamestart() {
    if (userPick && bossPick) {
        console.log("gamestart test")
        $(".btn1").delay(2000).fadeIn("slow", function () {

            attack();

        });



    }

};




//animation function
function animate() {
    if (characterSelected === "warrior") {
        characterSelected = $(".war")
        hero = warrior1;
        $(".mag, .DK , .magg, .DKK, .choose").fadeOut("slow", function () {
            $(this).remove();
            $(".warr").animate({ left: $(".warr").parent().width() / 2 - $(".warr").width() / 2 }, "slow");
            $(".war").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    else if (characterSelected === "mage") {
        characterSelected = $(".mag")
        hero = mage1;
        $(".war, .DK , .warr, .DKK, .choose").fadeOut("slow", function () {
            $(".magg").addClass("mx-auto");
            $(this).remove();
            $(".mag").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    else if (characterSelected === "DK") {
        characterSelected = $(".DK")
        hero = DK1
        $(".war, .mag, .WA, .MA, .choose").fadeOut("slow", function () {
            $(this).remove();
            $(".DKK").animate({ right: $(".DKK").parent().width() / 2 - $(".DKK").width() / 2 }, "slow");
            $(".DK").animate({ height: "200px", width: "200px" }, "slow");
        });
    }
    if (bossSelected === "Prinny") {
        bossSelected = $(".Prinny")
        boss = boss1;
        $(".boss2, .boss3").fadeOut("slow")

        $(".boss1").animate({ left: $(".boss1").parent().width() / 2 - $(".boss1").width() / 2 }, "slow");
        $(".Prinny").animate({ height: "200px", width: "200px" }, "slow");

    }
    else if (bossSelected === "Midboss") {
        bossSelected = $(".Midboss")
        boss = boss2;
        $(".boss1, .boss3").fadeOut("slow");
        $(".boss2").addClass("mx-auto");

        $(".Midboss").animate({ height: "200px", width: "200px" }, "slow");

    }
    else if (bossSelected === "Baal") {
        bossSelected = $(".Baal")
        boss = boss3;
        $(".boss1, .boss2").fadeOut("slow")
        $(".boss3").addClass("mx-auto");

        $(".Baal").animate({ height: "200px", width: "200px" }, "slow");

    }
   

}


//boss click function
function theBoss() {
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
        update()
    });

}
//attacking function
function attack() {
    player = hero;
    opponant = boss;
   counter;
   $(".HP").text("boss HP: " + opponant.hp+"   Hero HP: "+player.hp);
    $(".attacker").click(function () {
        counter++;
        player.hp = player.hp - opponant.attack
        opponant.hp = opponant.hp - (player.attack * counter)
        console.log("counter: " + counter);
        console.log(player.hp);
        console.log(opponant.hp);
        $(".HP").text("boss HP: " + opponant.hp+"   Hero HP: "+player.hp);
        update();
    });

};


//update page function
function update() {

    if (boss.hp < 0) {
        $("." + boss.name).fadeOut("slow");
        $(".attacker").prop("disabled", true);
        bossArray.splice(bossArray.indexOf(boss.name),1);
        $( ".attacker" ).off();
        show();
    }
    else {
        $(".attacker").prop("disabled", false);
    }



};



function show() {
for(var i=0; i<bossArray.length; i++){
 $("."+ bossArray[i]).fadeIn("slow")
}
 animate()

}
