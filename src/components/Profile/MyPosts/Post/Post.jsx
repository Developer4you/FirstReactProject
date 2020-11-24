import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
        <img src='https://i.pinimg.com/originals/ab/85/d6/ab85d6f64996efdd5189a5128f9d57d3.png'/>
        {props.message}
        <div>
            <span>like: {props.likesCount}</span>
        </div>
    </div>
    )
}

export default Post;