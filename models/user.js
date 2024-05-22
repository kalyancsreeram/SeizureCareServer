let user= 'Kalyan Sreeram';

module.exports = class User {
    constructor(username){
        this.username = username;
    }

    save(){
        user = this.username;
    }
    
    static fetchUserName(){
        return user;
    }
}