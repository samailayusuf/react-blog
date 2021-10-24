import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);


    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error ('Something went wrong, can\'t fetch data');
                }
              return res.json();
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error =>{
                if(error.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(error.message);
                }
            })
        },1000)
        return ()=>abortCont.abort();
    }, [url]);

    return {data, isPending, error};//return data error ispending

}

export default useFetch;
