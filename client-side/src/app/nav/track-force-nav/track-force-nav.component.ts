import {Component, DoCheck} from '@angular/core';
import {User} from "../../portals/Track-Force/models/user.model";
import {AuthenticationService} from "../../portals/Track-Force/services/authentication-service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-track-force-nav',
  templateUrl: './track-force-nav.component.html',
  styleUrls: ['./track-force-nav.component.css'],
  providers: [AuthenticationService]
})
export class TracknForceNavComponent implements DoCheck {
  private user:User;
  private ifAsscoiate: boolean;
  private ifAdmin: boolean;

  constructor(private authenticationService:AuthenticationService,
              private router:Router) {}

  ngDoCheck()
  {
    if(!this.user)
    {
      let tempUser = this.authenticationService.getUser();
      if(tempUser)
      {
        this.user = tempUser;
        if(this.user.tfRoleId===4){
          this.ifAdmin=true;
        }

        if(this.user.tfRoleId===1){
          this.ifAsscoiate=true;
        }
      }
    }
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigateByUrl('/user/home').catch(error=>{
      console.log(error);
    });

  }

}
