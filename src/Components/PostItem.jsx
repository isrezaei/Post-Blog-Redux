import {useSelector} from "react-redux";
import {selectPostById} from "../Redux/postSlice";
import {selectUserById} from "../Redux/userSlice";
import {selectPhotoById} from "../Redux/photoSlice";
import {Item} from "./PostStyled";


const PostItem = ({ids}) => {

    const Posts = useSelector(state => selectPostById(state , ids))
    const Users = useSelector(state => selectUserById(state , ids))
    const Photos = useSelector(state => selectPhotoById(state , ids))

    // console.log(Posts)
    // console.log(Users)
    console.log(Photos)



    return (
        <Item>


            <img src={Photos.url} alt={''}/>
            <h2>{Photos.title}</h2>
            <h3>{Posts.body}</h3>
            <p>{Users.name}</p>

        </Item>
    );
};

export default PostItem;