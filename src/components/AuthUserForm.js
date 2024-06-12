import { useState } from "react";

const AuthUserForm = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
                <input type="submit" value="Submit" />
        </form>
        </>
    );
}

export default AuthUserForm;