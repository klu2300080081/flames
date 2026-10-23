function calculateFlames() {
    var name1 = document.getElementById("input1").value.toLowerCase().replace(/\s/g, '');
    var name2 = document.getElementById("input2").value.toLowerCase().replace(/\s/g, '');
    if (!name1 || !name2) {
    document.getElementById("result").textContent = "Please enter both names!";
    return;
    }
    // Remove common characters
        let chars1 = name1.split("");
    let chars2 = name2.split("");

    for (let i = 0; i < chars1.length; i++) {
        let index = chars2.indexOf(chars1[i]);

        if (index !== -1) {
            chars1[i] = "";
            chars2[index] = "";
        }
    }

    let count = chars1.join("").length + chars2.join("").length;

    if (count === 0) {
        alert("Please enter different names!");
        return;
    }

    let flames = ["Friends", "Lovers", "Affectionate", "Marriage", "Enemies", "Siblings"];

    // Eliminate letters until one remains
    while (flames.length > 1) {
        let index = (count - 1) % flames.length;
        flames.splice(index, 1);
        flames = flames.slice(index).concat(flames.slice(0, index));
    }

    // document.getElementById("result").innerText = "Result: " + flames[0];
    const result = flames[0];

document.getElementById("result").textContent = result;

// Change background based on result

const backgrounds = {
    Friends: "friends",
    Lovers: "love",
    Affectionate: "affection",
    Marriage: "marriage",
    Enemies: "enemy",
    Siblings: "siblings"
};

const imageName = backgrounds[result];

document.body.style.setProperty(
    "--bg-image",
    `url("images/${imageName}-full.png")`
);

document.body.style.setProperty(
    "--bg-mobile-image",
    `url("images/${imageName}-mobile.png")`
);

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
}

// Handle Enter in both input fields
["input1", "input2"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            calculateFlames();
        }
    });
});

// Handle Check button click
document.getElementById("flames-form").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateFlames();
});