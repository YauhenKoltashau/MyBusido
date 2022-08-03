import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Texarea} from "../../common/FormControls/FormControls";

export const MyPosts = React.memo((props: MyPostsPropsType) => {
    const addPost = (formData: FormDataType) => {
        props.addPost(formData.newPost)
    }
    let postItem = props.postsData.map((p) =>
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <AddPostReduxForm onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
                {postItem}
            </div>


        </div>

    )
});

type FormDataType = {
    newPost: string
}
const maxLength10 = maxLengthCreator(10)
const minLength2 = minLengthCreator(2)
const AddPostForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    // console.log(props.newPostText)
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"new post"} name={"newPost"} component={Texarea} validate={[required, maxLength10, minLength2]}/>
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({form: 'addPost'})(AddPostForm)