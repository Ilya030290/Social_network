import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/Forms/Forms";



type FormDataType = {
    newPostText: string
}

const maxLength40 = maxLengthCreator(40);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.myPosts}>
                <div>
                    <Field
                        component={Textarea}
                        placeholder={"Add new post"}
                        name={'newPostText'}
                        validate={[required, maxLength40]}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

        </form>
    );
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "AddPostForm"})(AddNewPostForm);


const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.profilePage.posts.map((p, index) =>
        <Post key={index} id={p.id} message={p.message} likeCount={p.likeCount}/>);

    const onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.div}>My posts</div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;