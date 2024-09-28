document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const result = document.getElementById('output');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const mark = parseInt(document.getElementById('markgot').value);
        const gradeInfo = calculateGrade(mark);
        result.innerHTML = `Result: ${gradeInfo.passed} grade:${gradeInfo.grade}`;
    });

    function calculateGrade(mark) {
        let grade;
        let passed;

        if (mark >= 90 && mark <= 100) {
            grade = 'A+';
        } else if (mark >= 80 && mark < 90) {
            grade = 'A';
        } else if (mark >= 70 && mark < 80) {
            grade = 'B+';
        } else if (mark >= 60 && mark < 70) {
            grade = 'B';
        } else if (mark >= 50 && mark < 60) {
            grade = 'C+';
        } else if (mark >= 40 && mark < 50) {
            grade = 'C';
        } else if (mark >= 30 && mark < 40) {
            grade = 'D+';
        } else if (mark >= 20 && mark < 30) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        passed = mark >= 30 ? 'Passed' : 'Failed';

        return { grade, passed };
    }
});