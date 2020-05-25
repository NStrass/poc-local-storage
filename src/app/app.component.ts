import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'poc-local-storage';
   key = "token";
   value = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

   addToStorage() {
      localStorage.setItem(this.key, this.value);
   }

   verifyStorage() {
      const existe = localStorage.getItem(this.key);
      if (existe) {
         alert("JWT adicionada ao Local Storage");
      } else {
         alert("JWT não existe no Local Storage");
      }
   }

   deleteFromStorage() {
      localStorage.removeItem(this.key);
   }
}
