
function calculateStudent(row) {

    // Select the four score inputs
    const inputs = row.querySelectorAll(".score");

    // Read the values
    const values = [
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    ];

    // Select the result cells
    const totalCell = row.querySelector(".total");
    const gradeCell = row.querySelector(".grade");

    // Check whether all fields have been filled
  if (values.some(value => value === "")) {

    inputs.forEach(function(input) {
        input.style.border = "1px solid #ccc";
    });

    totalCell.textContent = "-";
    gradeCell.textContent = "-";

    return;
}

    // Convert values into numbers
    const scores = values.map(value => Number(value));

    // Set the maximum marks
    const maximums = [10, 10, 10, 70];

   for (let i = 0; i < scores.length; i++) {

    if (
        !Number.isFinite(scores[i]) ||
        scores[i] < 0 ||
        scores[i] > maximums[i]
    ) {
        inputs[i].style.border = "2px solid red";

        totalCell.textContent = "Invalid";
        gradeCell.textContent = "Invalid";

        return;
    } else {
        inputs[i].style.border = "1px solid #ccc";
    }
}

    // Calculate the total
    const total = scores.reduce((sum, score) => sum + score, 0);

    // Display the total
    totalCell.textContent = total;

    // Determine the grade
    let grade;

    if (total >= 70) {
        grade = "A";
    } else if (total >= 60) {
        grade = "B";
    } else if (total >= 50) {
        grade = "C";
    } else if (total >= 45) {
        grade = "D";
    } else if (total >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    // Display the grade
    gradeCell.textContent = grade;
}

// Select all score inputs
const allInputs = document.querySelectorAll(".score");

// Add an input event listener to each input
allInputs.forEach(function(input) {

    input.addEventListener("input", function() {

        const studentRow = input.closest("tr");

        calculateStudent(studentRow);

    });

});
