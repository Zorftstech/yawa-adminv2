import { useRouter } from 'src/routes/hooks';
// import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'src/features/app/authSlide';


export const useAuth = () => {

    // const dispatch = useDispatch();
    const router = useRouter();
    const [login] = useLoginMutation();


    const handlelogin = async (email, password, setLoading,setError ) => {

        try {
            const data = await login({ email, password }).unwrap();
            localStorage.setItem('accessToken', data.token);
            router.push('/dashboard');
        } catch (error) {
            setError(error.data)
            console.log(error)
        }finally{
            setLoading(false)
        }

        // dispatch(setCredentials({ ...userData, user: email }));
    }



    return {
        handlelogin
    }
}

