// Gender Selection Logic
document.addEventListener('DOMContentLoaded', function () {
  const sacredQuiz = {
    selectedGender: null,
    elements: {
      genderButtons: document.querySelectorAll('.sacred-gender-button'),
      genderNextButton: document.getElementById('sacred-gender-next-button'),
      genderSelection: document.querySelector('.sacred-gender-selection'),
      questions: document.querySelector('.sacred-questions')
    }
  };

  // Handle gender selection button click
  sacredQuiz.elements.genderButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove previous selection
      sacredQuiz.elements.genderButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = '';
        btn.style.transform = '';
      });

      // Highlight this button
      this.classList.add('selected');
      this.style.backgroundColor = 'var(--secondary-color)';
      this.style.transform = 'translateY(-2px)';

      // Set selected gender
      const gender = this.getAttribute('data-gender');
      sacredQuiz.selectedGender = gender === 'other' ? 'all' : gender;
      console.log("Gender selected:", sacredQuiz.selectedGender);
    });
  });

  // Handle Next button
  if (sacredQuiz.elements.genderNextButton) {
    sacredQuiz.elements.genderNextButton.addEventListener('click', function () {
      if (!sacredQuiz.selectedGender) {
        alert("Please select a gender identity before continuing.");
        return;
      }

      // Transition to next section
      sacredQuiz.elements.genderSelection.classList.remove('active');
      sacredQuiz.elements.questions.classList.add('active');
      console.log("Gender confirmed, quiz starting...");
    });
  }
});
