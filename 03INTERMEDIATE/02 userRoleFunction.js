var    getUserRole = function (name, role){
    switch(role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
            case "subadmin":
                return `${name} create and delete`;
                break;
                case "testprep":
                    return `${name} is admin with all access`;
                    break;
                    case "user":
                    return `${name} consume contents`;
                    break;
            default:
                return `${name} is a trial user`;
                break;
    }
}

console.log(getUserRole("Thrushi","testprep"));

var getROle = getUserRole("sammy","user");
console.log(getROle);