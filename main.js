const tutorForm = document.getElementById('tutorForm');
if(tutorForm){
    tutorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Tutor registered successfully!");
        tutorForm.reset();
    });
}
<script>
   const form = document.getElementById('contactForm');
   const thankYou = document.getElementById('thankyou');

   form.addEventListener('submit', function(e){
      setTimeout(() => {
         thankYou.style.display = 'block';
      }, 100); // shows message after submit
   });
</script>

const studentForm = document.getElementById('studentForm');
if(studentForm){
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Student registered successfully!");
        studentForm.reset();
    });
}
