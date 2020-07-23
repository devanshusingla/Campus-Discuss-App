import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

import moment from "moment";

import CommentList from "./CommentList";
import Title from "./Title";

type Props = {
  comment: IComment;
};

const MaximisedComment = (props: Props) => {
  const commentCreationTime = () => {
    let creationTime = moment(props.comment.created_at);
    let currentTime = moment();

    if (currentTime.diff(creationTime, "seconds") < 60) {
      return "now";
    } else if (currentTime.diff(creationTime, "minutes") < 60)
      return currentTime.diff(creationTime, "minutes") + " min";
    else if (currentTime.diff(creationTime, "hours") < 24)
      return currentTime.diff(creationTime, "hours") + " hrs";
    else if (currentTime.diff(creationTime, "months") === 0)
      return currentTime.diff(creationTime, "days") + " days";
    else if (currentTime.diff(creationTime, "years") === 0)
      return currentTime.diff(creationTime, "months") + " months";
    else return currentTime.diff(creationTime, "years") + " yrs";
  };

  return (
    <View style={styles.outer}>
      <Card
        title={<Title name={props.comment.user.name} />}
        dividerStyle={{ marginBottom: 0 }}
        containerStyle={styles.container}
      >
        <View style={styles.content}>
          <Text>{props.comment.content}</Text>
        </View>
      </Card>
      <View
        style={{
          paddingLeft: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Reply</Text>
        <Text style={{ color: "grey" }}>{commentCreationTime()}</Text>
      </View>
      <View style={styles.commentList}>
        <CommentList comments={props.comment.replies} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: "100%",
    paddingLeft: "5%",
    marginTop: 10,
  },
  container: {
    padding: 0,
    margin: "0.5%",
    borderBottomLeftRadius: 15,
    backgroundColor: "#f5f5f5",
  },
  content: {
    marginBottom: 2,
    marginLeft: 16,
  },
  commentList: {
    width: "100%",
    paddingLeft: "5%",
  },
});

export default MaximisedComment;
