// JavaScript source code
let dictionaryMapA12 = new Map();
let dictionaryMapB12 = new Map();
dictionaryMapA12.set("Apple", "Яблуко");
dictionaryMapA12.set("Chair", "Стілець");
dictionaryMapA12.set("Happy", "Веселий");
dictionaryMapA12.set("Friend", "Друг");
dictionaryMapA12.set("Blue", "Синій");
dictionaryMapA12.set("Jump", "Стрибати");
dictionaryMapA12.set("Open", "Відкрити");
dictionaryMapA12.set("Dog", "Собака");
dictionaryMapA12.set("Water", "Вода");
dictionaryMapA12.set("Sleep", "Спати");
dictionaryMapA12.set("Read", "Читати");
dictionaryMapA12.set("Tree", "Дерево");
dictionaryMapA12.set("Fast", "Швидко");
dictionaryMapA12.set("Small", "Малий");
dictionaryMapA12.set("Family", "Родина");
dictionaryMapA12.set("Cloud", "Хмара");

dictionaryMapB12.set("Opportunity", "Можливість");
dictionaryMapB12.set("Accommodation", "Проживання");
dictionaryMapB12.set("Comprehend", "Розуміти");
dictionaryMapB12.set("Essential", "Суттєвий");
dictionaryMapB12.set("Reflect", "Відображати");
dictionaryMapB12.set("Contribute", "Вносити");
dictionaryMapB12.set("Potential", "Потенціальний");
dictionaryMapB12.set("Evaluate", "Оцінювати");
dictionaryMapB12.set("Navigate", "Навігація");
dictionaryMapB12.set("Diversity", "Різноманітність");

let enWordsA = [];
let enWordsB = [];
let index = 0;

dictionaryMapA12.forEach((value, key) => {
    enWordsA[index] = key;
    index++;
});
index = 0;
dictionaryMapB12.forEach((value, key) => {
    enWordsB[index] = key;
    index++;
});

let roundCount = 0;
let rightAns = 0;
let wrongAns = 0;
let persentage = 0;
let reserve = [];

$("#start").bind('click', start);
$(function () {
    $("#start").hover(intoS, outS);
});

function intoS() {
    $("#start").css({ cursor: "pointer" });
}

function outS() {
    $("#start").css({ cursor: "default" });
}

function start() {
    $("#start").css({ display: "none" });
    $(".action, #input").css({ display: "block" });
    reserve.length = 0;
    roundCount = 0;
    rightAns = 0;
    wrongAns = 0;
    persentage = 0;
    $("#right").text("Right answers: " + rightAns);
    $("#wrong").text("Wrong answers: " + wrongAns);
    $(".roundCount").text(roundCount + "/15");
    newWord(enWordsA);
}

$("#accept").on('click', cont);
$(function () {
    $("#accept").hover(into, out);
});

function into() {
    $("#accept").css({ cursor: "pointer"});
}

function out() {
    $("#accept").css({ cursor: "default" });
}

function cont() {
    if ($("#input").val().trim() != "") {
        if (roundCount <= 15) {
            if (roundCount > 5 && persentage >= 80) {
                if ($("#input").val() == dictionaryMapB12.get(reserve[roundCount])) {
                    rightAns++;
                    $("#right").text("Right answers: " + rightAns);
                    $("#windowTest").css({ borderColor: "green" });
                    setTimeout(function () {
                        $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                    }, 1000);
                    console.log(dictionaryMapA12.get(reserve[roundCount]));
                    console.log(dictionaryMapB12.get(reserve[roundCount]));
                }
                else {
                    wrongAns++;
                    $("#wrong").text("Wrong answers: " + wrongAns);
                    $("#windowTest").css({ borderColor: "red" });
                    setTimeout(function () {
                        $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                    }, 1000);
                    console.log(dictionaryMapA12.get(reserve[roundCount]));
                    console.log(dictionaryMapB12.get(reserve[roundCount]));
                }
                newWord(enWordsB);
            }
            else {
                if ($("#input").val() == dictionaryMapA12.get(reserve[roundCount])) {
                    rightAns++;
                    $("#right").text("Right answers: " + rightAns);
                    $("#windowTest").css({ borderColor: "green" });
                    setTimeout(function () {
                        $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                    }, 1000);
                    console.log(dictionaryMapA12.get(reserve[roundCount]));
                    console.log(dictionaryMapB12.get(reserve[roundCount]));
                }
                else {
                    wrongAns++;
                    $("#wrong").text("Wrong answers: " + wrongAns);
                    $("#windowTest").css({ borderColor: "red" });
                    setTimeout(function () {
                        $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                    }, 1000);
                    console.log(dictionaryMapA12.get(reserve[roundCount]));
                    console.log(dictionaryMapB12.get(reserve[roundCount]));
                }
                if (roundCount >= 5 && persentage >= 80) {
                    newWord(enWordsB);
                }
                else {
                    newWord(enWordsA);
                }
            }
            roundCount++;
            persentage = rightAns / roundCount * 100;
            console.log(persentage);
            $(".roundCount").text(roundCount + "/15");
            $("#input").val("");
            if (roundCount >= 15) {
                if (persentage > 90) {
                    $("#windowTest").text("You have B2");
                }
                else if (persentage > 70) {
                    $("#windowTest").text("You have B1");
                }
                else if (persentage > 40) {
                    $("#windowTest").text("You have A2");
                }
                else if (persentage > 0) {
                    $("#windowTest").text("You have A1");
                }
                else {
                    $("#windowTest").text("Dude, how?");
                }
                $("#start").css({ display: "block" });
                $(".action, #input").css({ display: "none" });
            }
        }
    }
    else { }
}

function newWord(dict) {
    let found = true;
    while (found == true) {
        if (dict == enWordsA) {
            index = Math.floor(Math.random() * 16);
        }
        else if (dict == enWordsB) {
            index = Math.floor(Math.random() * 10);
        }
        found = present(roundCount, dict, index);
        console.log(found.toString());
    }
    $("#windowTest").text(dict[index]);
    reserve = reserve.concat(dict[index]);
    console.log(dictionaryMapA12.get(reserve[roundCount + 1]));
    console.log(dictionaryMapB12.get(reserve[roundCount + 1]));
}

function present(words, place, indx) {
    for (let i = 0; i < reserve.length; i++) {
        if (place[indx] === reserve[i]) {
            return true;
        }
    }
    console.log(reserve);
    return false;
}

$("#cancel").on('click', clear);
function clear() {
    $("#input").val("");
}