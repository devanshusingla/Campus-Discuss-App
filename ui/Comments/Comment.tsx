import React from "react";

import MinimisedComment from "./MinimisedComment";
import MaximisedComment from "./MaximisedComment";

type Props = {
  isHidden: boolean;
  comment: IComment;
};

const Comment = (props: Props) => {
  if (props.isHidden) return <MinimisedComment comment={props.comment} />;
  else return <MaximisedComment comment={props.comment} />;
};

export default Comment;
