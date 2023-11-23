module.exports = {
    signUp: () => {
        try {
            return {
                response: "User signed up",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    logIn: () => {
        try {
            return {
                response: "User Logged In",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    forgetPass: () => {
        try {
            return {
                response: "User Forgot Password",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    resetPass: () => {
        try {
            return {
                response: "User reset Password",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    logOut: () => {
        try {
            return {
                response: "User logged out",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }


}