import PostItem from "./PostItem";
import {Show} from "./PostStyled";

const PostShow = ({postIds}) => {


    const PostItems = postIds.map(ids => <PostItem key={ids} ids={ids}/>)

    return (
        <Show>
            {PostItems}
        </Show>
    );
};

export default PostShow;