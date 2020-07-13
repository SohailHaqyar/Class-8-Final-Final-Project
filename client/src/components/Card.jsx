import React from "react";
import moment from "moment";
const Card = ({ post }) => {
  return (
    <div className="Post__feed__Card">
      <div className="Post__feed__Card__heading">
        <img src="https://source.unsplash.com/600x400/?person/2" alt="" />
        <h4>{post.owner.name}</h4>
        <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {moment(post.createdAt).fromNow()}
        </p>
      </div>
      <div className="Post__feed__Card__body">
        <h3 style={{ marginRight: "auto", fontWeight: "600" }}>{post.title}</h3>
        <p>{post.body}</p>
        {post.image ? <img src={post.image} alt={post.title} /> : null}

        <h3 style={{ marginTop: "10px" }}>Contact Info</h3>
        <div className="Post__feed__Card__body__contact">
          <span>
            <i className="fa fa-envelope fa-lg" /> : {post.owner.email}
          </span>
          <span>
            <i className="fa fa-phone fa-lg" /> : {post.owner.phone}
          </span>
          <span>{post.owner.address}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
