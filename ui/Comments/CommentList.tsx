import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Comment from "./Comment";

type Props = {
  comments: Array<IComment>;
};

const CommentList = (props: Props) => {
  let [isHidden, setIsHidden] = useState(true);
  const maxHiddenChats = 3;

  if (!props.comments) return <> </>;
  if (isHidden)
    return (
      <TouchableOpacity
        onPress={() => {
          setIsHidden(false);
        }}
      >
        <View>
          {props.comments.slice(0, maxHiddenChats).map((comment: IComment) => (
            <Comment isHidden={true} comment={comment} key={comment.pk} />
          ))}
        </View>
      </TouchableOpacity>
    );
  else
    return (
      <View>
        {props.comments.map((comment: IComment) => (
          <Comment isHidden={false} comment={comment} key={comment.pk} />
        ))}
      </View>
    );
};

export default CommentList;
