import { Component } from '@angular/core';
import { UserService } from '../components/user.service';
import { Globals} from '../commons/globals';

@Component({
    selector: 'app-login',
    providers: [UserService, Globals],
    templateUrl: './login.component.html'
})

export class LoginComponent {

    email = '';
    password = '';
    auth: '';
    errorMessage = '';
    token = '';
    userServiceL: UserService;

    constructor(private userService: UserService, private globals: Globals) {
        this.userServiceL = userService;

    }

    onClickMe(){
        console.log(this.email);
        console.log(this.password);
        this.userServiceL.login(this.email, this.password).subscribe(
         token => {
             this.token = token['token'];
             alert(this.token)   ;
            },
            error =>  {
             this.errorMessage = <any>error;
            }
         );



        return false;
    }


    onKeyEmail(value: string) {
        this.email = value ;
    }

    onKeyPass(value: string) {
        this.password = value ;
    }


}

