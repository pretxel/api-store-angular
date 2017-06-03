import { Component } from '@angular/core';
import { UserService } from '../components/user.service';

@Component({
    selector: 'app-header',
    providers: [UserService],
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    errorMessage: string;
    users: string[];
    mode = 'Observable';
    clickMessage = '';
    title = 'News';


    constructor(private userService: UserService) {
        /*this.userService.getUser('edsel@example.com', 'edsel')
            .subscribe(
                users => this.users = users,
                error =>  this.errorMessage = <any>error);*/

    }



    onClickMe(){

        return false;
    }

}

