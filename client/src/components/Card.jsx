import React from "react";
import moment from "moment";
const Card = ({ post, noContact, owner, ownerLogo }) => {
  return (
    <div className="Post__feed__Card">
      <div className="Post__feed__Card__heading">
        <img
          src={post.owner.logo || ownerLogo}
          // : "https://dummyimage.com/800x400/fff/fff"
        />
        <div className="">
          <h4>{post.owner.name || owner}</h4>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
      </div>
      <div className="Post__feed__Card__body">
        <h3
          style={{
            marginRight: "auto",
            fontFamily: "Grenze Gotisch",
            fontWeight: "600",
          }}
        >
          {post.title}
        </h3>
        <p>{post.body}</p>
        {post.image ? <img src={post.image} alt={post.title} /> : null}

        {!noContact && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
