import React from "react";
import { Text, View, FlatList } from "react-native";
import { Overlay } from "react-native-elements";

import Comment from "./Comment";
import MaximisedComment from "./MaximisedComment";

type Props = {
  isVisible: boolean;
  mainComment?: IComment;
  comments?: Array<IComment>;
};

const CommentBox = (props: Props) => {
  let MainComment, comments;
  if (props.mainComment) {
    MainComment = <MaximisedComment comment={props.mainComment} />;
    comments = props.mainComment.replies;
  } else {
    MainComment = <></>;
    comments = props.comments;
  }

  return (
    <Overlay isVisible={props.isVisible} fullScreen={true}>
      <View>
        {MainComment}
        <FlatList
          data={comments}
          keyExtractor={(comment) => comment.pk.toString()}
          renderItem={({ item }) => <Comment comment={item} isHidden={false} />}
        />
      </View>
    </Overlay>
  );
};

export default CommentBox;
