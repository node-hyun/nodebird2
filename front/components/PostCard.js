import React, { useState, useCallback } from "react";
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';

import { Card, Avatar, List, Comment, Popover, Button } from 'antd';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import PostImages from "./PostImages";
import PostCardContent from "../components/PostCardContent";


const PostCard = ({ post }) => {
    console.log("post(PostCard) : ", post);

    const { me } = useSelector((state) => state.user);
    const id = me && me.id;

    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [liked, setLiked] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    return (
        <>
            <Card
                style={{ width: "100%" }}
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    // <EllipsisOutlined />
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.nickname === id
                                    ? (
                                        <>
                                            <Button>수정</Button>
                                            <Button type="danger">삭제</Button>
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm />
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}

        </>
    );
};

export default PostCard;
