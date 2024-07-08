


function HomeUsers () {

    useEffect(() => {
        (async () => {
          try {
            const resp = await axios.get("http://localhost:5000/@me");
            navigate('dashboard')
            //setUser(resp.data);
          } catch (error) {
            console.log("Not authenticated");
          }
        })();
    }, []);

    return (
        <>

        </>
    
    );
}