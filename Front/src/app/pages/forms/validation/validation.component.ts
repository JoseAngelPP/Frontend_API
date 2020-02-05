import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: 'validation.component.html'
})
export class ValidationComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.addEventListener(
      'load',
      // tslint:disable-next-line: only-arrow-functions
      function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        // tslint:disable-next-line: only-arrow-functions
        const validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener(
            'submit',
            // tslint:disable-next-line: only-arrow-functions
            function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            },
            false
          );
        });
      },
      false
    );
  }
}
