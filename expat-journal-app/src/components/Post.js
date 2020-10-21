import React from 'react';
import HeaderPostButton from './HeaderPostButton';
import useStyles from '../styles/postStyle';

const Post = (props) => {
	const classes = useStyles();
	const { post } = props;

	return (
		<>
			<div className={classes.post}>
				<h2 className={classes.postH2}>{post.title}</h2>
				<img
					src={`${post.imageURL}`}
					// hide alt img icon
					// className={`${post.imageURL ? '' : 'hide'}`}
					className={classes.postImg}
				/>
				<p>{post.description}</p>
			</div>
		</>
	);
};

export default Post;
