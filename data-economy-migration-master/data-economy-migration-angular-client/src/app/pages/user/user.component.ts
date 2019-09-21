import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

    breadCrumbItems: Array<{}>;

    userCols: any;
    userList: any;

    isAdd: boolean = false;
    isUpdate: boolean = false;

    userJson: any = {
        userId: null,
        userName: "",
        email: "",
        isAdmin: "true"
    };

    constructor(private confirmationService: ConfirmationService) { }

    ngOnInit() {

        this.breadCrumbItems = [{ label: 'Home', path: '/app/home' }, { label: 'Settings', active: true }, { label: 'Users', active: true }];

        this.userCols = [
            { field: 'userId', header: 'Sr.No' },
            { field: 'userName', header: 'User Name' },
            { field: 'userRole', header: 'User Role' },
            { field: 'email', header: 'User Email' }
        ];
        this.fetchUserData();
    }

    fetchUserData() {
        this.userList = [
            {
                userId: '1',
                userName: 'User1',
                email: 'admin@dataeconomics.com',
                userRole: "Admin",
                isAdmin: "true"
            },
            {
                userId: '2',
                userName: 'User2',
                email: 'admin@dataeconomics.com',
                userRole: "Admin",
                isAdmin: "true"
            },
            {
                userId: '3',
                userName: 'User3',
                email: 'admin@dataeconomics.com',
                userRole: "Admin",
                isAdmin: "true"
            },
            {
                userId: '4',
                userName: 'User4',
                email: 'admin@dataeconomics.com',
                userRole: "Normal User",
                isAdmin: "false"
            },
            {
                userId: '5',
                userName: 'User5',
                email: 'admin@dataeconomics.com',
                userRole: "Admin",
                isAdmin: "true"
            }];
    }

    resetUserJson() {
        this.userJson = {
            userId: null,
            userName: "",
            email: "",
            isAdmin: "true"
        };
    }

    showAddUser() {
        this.userJson =
            this.isAdd = true;
    };

    showUpdateUser(selectedUser: any) {
        this.userJson = selectedUser;
        this.isUpdate = true;
    };

    showDeleteUser(selectedUser: any) {
        this.confirmationService.confirm({
            message: 'Are you sure want to delete the user?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    };
}
