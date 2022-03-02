import {useDispatch, useSelector} from "react-redux";
import {fetchPost, selectPostIds} from "../Redux/postSlice";
import {useEffect} from "react";
import {fetchPhoto} from "../Redux/photoSlice";
import {fetchUser} from "../Redux/userSlice";
import PostShow from "./PostShow";

const PostRender = () => {

    const postIds = useSelector(selectPostIds)
    let [postStatus , photoStatus , userStatus] =
        [
        useSelector(state => state.postSlice.postStatus),
        useSelector(state => state.photoSlice.photoStatue),
        useSelector(state => state.userSlice.userStatue)
        ]
    const dispatch = useDispatch()
    let Render ;


    const idle = [postStatus , photoStatus , userStatus].every(value => value === 'idle')
    const pending = [postStatus , photoStatus , userStatus].every(value => value === 'pending')
    const success = [postStatus , photoStatus , userStatus].every(value => value === 'success')
    const reject = [postStatus , photoStatus , userStatus].every(value => value === 'success')


    useEffect(()=>{

        if (idle)
        {
            dispatch(fetchPost())
            dispatch(fetchPhoto())
            dispatch(fetchUser())
        }

    } , [dispatch , idle , pending , success , reject])


    if (pending)
    {
        Render = <h1>Loading ---</h1>
    }
    else if (success)
    {
        Render = <PostShow postIds={postIds}/>
    }
    else if (reject)
    {
        Render = <h1>have trouble</h1>
    }



    return (
        <>
            {Render}
        </>
    )

};

export default PostRender;