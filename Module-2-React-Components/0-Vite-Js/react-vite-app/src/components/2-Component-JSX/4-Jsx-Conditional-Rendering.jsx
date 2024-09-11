/* eslint-disable no-unused-vars */

//  Conditional Rendering
// You can conditionally render JSX using ternary operators or logical operators:

// 1. The ternary operator is used to check if the user is logged in or not and display different messages accordingly.

export function JsxConditionalRender() {

    const isLoggedIn = false;
    const hasAdminPermission = true;
    
    function logger() {
        if (isLoggedIn) {
            console.log('hello')
        }  
        else 
            console.log(`good bye`)
    }

    logger();

    function isAdmin () {
        return isLoggedIn && hasAdminPermission;
    }
    

    const showAdmin = isAdmin();

    return (
        <div>
            { showAdmin ? <h1>Admin</h1> : <h1>Guest</h1> }
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
        </div>
    );
}


