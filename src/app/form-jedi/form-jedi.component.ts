import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-jedi',
  templateUrl: './form-jedi.component.html',
  styleUrls: ['./form-jedi.component.css']
})
export class FormJediComponent {

  formularioCadastro: FormGroup;

  constructor() {
    this.formularioCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'classificacao': new FormControl(null, Validators.required),
      'classe': new FormControl(null, Validators.required),
      'corDoSabre': new FormControl(null, Validators.required),
      'idade': new FormControl(null, Validators.required),

    });
   }

   public onSubmit(){
    let dados = `
      Nome : ${this.formularioCadastro.value.nome}
      Classificacao : ${this.formularioCadastro.value.classificacao}
      Classe: ${this.formularioCadastro.value.classe}
      CorDoSabre: ${this.formularioCadastro.value.corDoSabre}
      Idade: ${this.formularioCadastro.value.idade}
    `;

    console.log(dados);
  }

}
