import React from "react";

const SingleService = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aut
      blanditiis atque corrupti totam quod a rerum ullam officiis saepe
      quisquam, vel in velit sequi eligendi mollitia alias, nam delectus cumque
      unde quam maiores eveniet voluptatem eum. Officiis deserunt, vero id autem
      aut dolorum ipsum rem recusandae ducimus labore provident.{id}
    </div>
  );
};

export default SingleService;
